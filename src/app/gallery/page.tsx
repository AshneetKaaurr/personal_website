import { FrameGrid, type FrameGridItem } from '@/components/FrameGrid'
import { PendingNotice } from '@/components/PendingNotice'
import { Bleed, Surface } from '@/components/Surface'
import { photos } from '@/content/photos'
import { getShot, type ShotRef } from '@/lib/shots'

export const metadata = {
  title: 'Gallery',
}

/**
 * Gallery — screen surface, full page. BUILD-PLAN.md §8.
 *
 * A contact sheet at the two fixed ratios, grouped by what the photographs
 * are of. Every frame is captioned with what it is; an uncaptioned gallery is
 * a screensaver.
 *
 * The lightbox and the filters are still to build — they are the interactive
 * part of Phase 5 and they need the caption data this page now establishes.
 */

interface Group {
  heading: string
  blurb: string
  shots: ShotRef[]
}

const GROUPS: Group[] = [
  {
    heading: 'Teaching',
    blurb:
      'Seminar rooms, lecture theatres and the international classrooms of the visiting appointments.',
    shots: ['C-01', 'C-02', 'C-03', 'C-04', 'E-06'],
  },
  {
    heading: 'Stages and conferences',
    blurb:
      'Lecterns, panels and the conferences behind the speaking record — the Academy of Management among them.',
    shots: ['P-03', 'S-01', 'S-02', 'S-04', 'S-05', 'E-01', 'E-05'],
  },
  {
    heading: 'Executive rooms and engagements',
    blurb: 'Management development sessions and organisational visits.',
    shots: ['M-01', 'M-02', 'E-07'],
  },
  {
    heading: 'Portraits',
    blurb: 'Made for the site, the press kit and the bios.',
    shots: ['P-01', 'P-02', 'P-04', 'P-05', 'P-06', 'P-07', 'W-01'],
  },
]

/**
 * A frame's caption is the photograph's own caption where it has one, and the
 * shot description otherwise — so a frame that is still a placeholder still
 * says what is meant to be in it.
 */
function captionFor(shots: ShotRef[]): FrameGridItem[] {
  return shots.map((shot) => ({
    shot,
    label: photos[shot]?.caption ?? getShot(shot).description,
  }))
}

export default function Gallery() {
  const total = Object.keys(photos).length
  const held = Object.values(photos).filter((p) => p.consent === 'pending').length

  return (
    <>
      <Surface surface="screen" className="py-9">
        <Bleed>
          <h1 className="font-display text-h1 tracking-tight text-print">
            Gallery
          </h1>
          <p className="mt-4 max-w-measure font-display text-body text-muted">
            Photographs from teaching, conferences and executive rooms. Every
            frame here is a real photograph — there is no stock imagery on this
            site.
          </p>
        </Bleed>
      </Surface>

      {GROUPS.map(({ heading, blurb, shots }) => (
        <Surface
          key={heading}
          surface="screen"
          className="border-t border-rule py-9"
        >
          <Bleed>
            <h2 className="font-data font-expanded text-h2 text-print">
              {heading}
            </h2>
            <p className="mt-3 max-w-measure font-display text-body text-muted">
              {blurb}
            </p>

            <FrameGrid items={captionFor(shots)} className="text-print" />
          </Bleed>
        </Surface>
      ))}

      <Surface surface="print" className="py-9">
        <Bleed>
          <h2 className="font-display text-h2 tracking-tight">
            Still to come on this page
          </h2>

          {held > 0 ? (
            <PendingNotice item="written consent for group photographs" owner="Client">
              {held} of the {total} supplied photographs show students,
              participants or colleagues who are identifiable. They are in the
              repository and wired up, but they render as placeholders until
              she confirms in writing that those people consent to appearing on
              a public site. One constant in src/content/photos.ts releases
              all of them at once.
            </PendingNotice>
          ) : null}

          <PendingNotice item="the lightbox and the category filters" owner="Build">
            Clicking a frame should open it full size with keyboard navigation
            and a real close affordance, and the categories above should filter
            without a page load. Both are Phase 5 work and both need the
            caption data this page now carries.
          </PendingNotice>

          <PendingNotice item="dates and places for each caption" owner="Client">
            Several captions say what is happening but not where or when. A
            gallery caption should carry all three.
          </PendingNotice>
        </Bleed>
      </Surface>
    </>
  )
}
