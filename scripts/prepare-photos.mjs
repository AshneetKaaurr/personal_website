/**
 * Photo intake.
 *
 * Takes the files as supplied in photo-intake/ and writes web-ready versions
 * into public/photos/ with stable slugs that match their shot ref.
 *
 * photo-intake/ is gitignored and never served. That matters: the originals
 * carry EXIF, and on phone photos EXIF carries GPS. Anything left in public/
 * is downloadable by anyone, coordinates and all.
 *
 * What it does to each file, and why:
 *
 * - **Strips all metadata.** Phone photos carry EXIF GPS. Publishing those
 *   publishes where she was standing. Nothing downstream needs EXIF, so all of
 *   it goes.
 * - **Applies EXIF orientation, then discards it.** A file whose pixels are
 *   sideways with an orientation flag renders rotated in some pipelines and
 *   not others. Baking the rotation in removes the ambiguity.
 * - **Caps the long edge at 2400px.** That is the largest entry in
 *   `deviceSizes` in next.config.ts, so anything beyond it is weight the site
 *   can never serve. Several originals are 4032px and ~4MB.
 * - **Leaves the aspect ratio alone.** Cropping to 3:2 or 4:5 is a judgement
 *   about where her head and hands are, not something to automate — see the
 *   `focal` field in src/content/photos.ts, which steers the CSS crop instead.
 *
 * Re-runnable: a slug that already exists in public/photos is skipped.
 */
import sharp from 'sharp'
import { existsSync, mkdirSync, renameSync } from 'node:fs'
import { join } from 'node:path'

const SRC_DIR = 'photo-intake'
const OUT_DIR = 'public/photos'
const MAX_EDGE = 2400

mkdirSync(OUT_DIR, { recursive: true })

/** supplied filename -> slug used in the manifest */
const INTAKE = [
  ['ISB_CLICK.jpg', 'p-01-campus-terrace.jpg'],
  ['IMG_8090_Original.jpg', 'p-02-office-portrait.jpg'],
  ['Speaker-gcc event.JPG', 'p-03-lectern.jpg'],
  ['a52c1e02-06f0-4f67-b245-63ed1c3c2e11.JPG', 'p-04-outdoors.jpg'],
  ['Close shots.jpg', 'p-05-seated.jpg'],
  ['Close shorts_isb.jpg', 'p-06-glass.jpg'],
  ['Professional.jpg', 'p-07-daylight.jpg'],
  ['Judge.jpg', 'w-01-desk.jpg'],
  ['IMG_4744.jpg', 'c-01-boardroom-session.jpg'],
  ['Teaching at ISB.JPG', 'c-02-lecture-theatre.jpg'],
  ['Teaching Global STUDENTS.JPG', 'c-03-global-cohort.jpg'],
  ['Teaching global_2.JPG', 'c-04-global-cohort-two.jpg'],
  ['Global conference_host.jpg', 's-01-presenting.jpg'],
  ['speaker.JPG', 's-02-auditorium.jpg'],
  ['Conference.jpg', 's-04-aom-signage.jpg'],
  ['Speaker + conference.jpg', 's-05-hric-backdrop.jpg'],
  ['IMG_4719.jpg', 'm-01-boardroom-group.jpg'],
  ['IMG_8897_Original.jpg', 'm-02-office-visit.jpg'],
  ['IMG_4654.jpg', 'e-01-stage.jpg'],
  ['IMG_6913_Original_conference.jpg', 'e-05-cbs.jpg'],
  ['iNDIAN Students ISB.jpg', 'e-06-cohort.jpg'],
  ['Podcast+speaker.jpg', 'e-07-panel.jpg'],
]

let done = 0
let skipped = 0

for (const [from, slug] of INTAKE) {
  const src = join(SRC_DIR, from)
  const dest = join(OUT_DIR, slug)

  if (existsSync(dest)) {
    skipped += 1
    continue
  }
  if (!existsSync(src)) {
    console.log(`  missing source, skipped: ${from}`)
    continue
  }

  const tmp = join(OUT_DIR, `.tmp-${slug}`)
  const meta = await sharp(src).metadata()
  const longEdge = Math.max(meta.width ?? 0, meta.height ?? 0)

  await sharp(src)
    .rotate()
    .resize({
      width: longEdge > MAX_EDGE ? (meta.width >= meta.height ? MAX_EDGE : undefined) : undefined,
      height: longEdge > MAX_EDGE ? (meta.height > meta.width ? MAX_EDGE : undefined) : undefined,
      withoutEnlargement: true,
    })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(tmp)

  renameSync(tmp, dest)
  const out = await sharp(dest).metadata()
  console.log(
    `  ${slug.padEnd(30)} ${String(out.width).padStart(4)}x${String(out.height).padEnd(4)} ` +
    `r=${(out.width / out.height).toFixed(3)}   <- ${from}`,
  )
  done += 1
}

console.log(`\nprepared: ${done}, already present: ${skipped}`)
