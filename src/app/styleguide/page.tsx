import { Frame } from '@/components/Frame'
import { Marginalia, MarginRecord } from '@/components/Marginalia'
import { PendingNotice } from '@/components/PendingNotice'
import { Bleed, Surface } from '@/components/Surface'
import { SHOTS } from '@/lib/shots'

/**
 * The styleguide. BUILD-PLAN.md Phase 1 exit criterion — every primitive on
 * one page so a drift in the system is visible before it reaches a page.
 *
 * Kept out of the index rather than out of the build: it is genuinely useful
 * on a preview deploy, and it doubles as the outstanding-photography report
 * the client reads.
 *
 * BUILD-PLAN.md names this route /_styleguide. App Router treats a leading
 * underscore as a private folder and will not route it, so it lives at
 * /styleguide with noindex instead.
 */
export const metadata = {
  title: 'Styleguide',
  robots: { index: false, follow: false },
}

const PALETTE = [
  { token: '--color-screen', value: '#14171A', note: 'projection dark, the looking surface' },
  { token: '--color-screen-2', value: '#1E2327', note: 'raised frame edge on dark' },
  { token: '--color-print', value: '#E9E7E0', note: 'archival paper, the reading surface' },
  { token: '--color-ink', value: '#191A17', note: 'body text on print' },
  { token: '--color-graphite', value: '#64686B', note: 'meta, captions, marginalia' },
  { token: '--color-mark', value: '#1F3C8C', note: 'ultramarine, the one accent' },
]

const TYPE_SCALE = [
  { name: 'hero', className: 'text-hero', note: 'breaks scale, hero only' },
  { name: 'title-lg', className: 'text-title-lg', note: '69' },
  { name: 'title', className: 'text-title', note: '55' },
  { name: 'h1', className: 'text-h1', note: '44' },
  { name: 'h2', className: 'text-h2', note: '35' },
  { name: 'h3', className: 'text-h3', note: '28' },
  { name: 'lead', className: 'text-lead', note: '22.5' },
  { name: 'body', className: 'text-body', note: '18, the base' },
  { name: 'meta', className: 'text-meta', note: '14' },
]

export default function Styleguide() {
  const outstanding = SHOTS.filter((shot) => shot.launchCritical)

  return (
    <>
      <Surface surface="print" className="py-9">
        <Bleed>
          <h1 className="font-display text-h1 tracking-tight">Styleguide</h1>
          <p className="mt-4 max-w-measure font-display text-body">
            Every primitive in the Reel and Frame system on one page. Not
            indexed, and not linked from the site.
          </p>
        </Bleed>
      </Surface>

      {/* Palette ---------------------------------------------------------- */}
      <Surface surface="print" className="border-t border-rule py-9">
        <Bleed>
          <Marginalia margin={<MarginRecord label="Section" value="Palette" />}>
            <h2 className="font-display text-h2 tracking-tight">Six values</h2>
            <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {PALETTE.map(({ token, value, note }) => (
                <li key={token}>
                  <div
                    className="h-8 w-full rounded-frame border border-rule"
                    style={{ backgroundColor: value }}
                  />
                  <p className="mt-2 font-data text-meta">{token}</p>
                  <p className="font-data text-meta text-muted" data-figures="tabular">
                    {value}
                  </p>
                  <p className="font-data text-meta text-muted">{note}</p>
                </li>
              ))}
            </ul>
          </Marginalia>
        </Bleed>
      </Surface>

      {/* Type ------------------------------------------------------------- */}
      <Surface surface="print" className="border-t border-rule py-9">
        <Bleed>
          <Marginalia margin={<MarginRecord label="Section" value="Type" />}>
            <h2 className="font-display text-h2 tracking-tight">
              Newsreader and Archivo
            </h2>
            <ul className="mt-6">
              {TYPE_SCALE.map(({ name, className, note }) => (
                <li key={name} className="border-t border-rule py-4">
                  <p className="font-data text-meta text-muted">
                    {name} — {note}
                  </p>
                  <p className={`mt-1 font-display ${className} tracking-tight`}>
                    Leadership through cinema
                  </p>
                </li>
              ))}
            </ul>

            <h3 className="mt-7 font-display text-h3 tracking-tight">
              Archivo width axis
            </h3>
            <p className="mt-3 font-data text-h3">Archivo at normal width</p>
            <p className="font-data font-expanded text-h3">Archivo expanded</p>
            <p className="font-data font-expanded-max text-h3">
              Archivo expanded, maximum
            </p>

            <h3 className="mt-7 font-display text-h3 tracking-tight">
              Body measure
            </h3>
            <p className="mt-3 max-w-measure font-display text-body">
              Body copy sits under a 72-character measure at 18px with a 1.65
              line height. Everything is left-aligned and ragged right. There is
              no centred body text anywhere on this site, and no justified text.
            </p>
          </Marginalia>
        </Bleed>
      </Surface>

      {/* Frames ----------------------------------------------------------- */}
      <Surface surface="screen" className="py-9">
        <Bleed>
          <h2 className="font-display text-h2 tracking-tight text-print">
            Frames
          </h2>
          <p className="mt-3 max-w-measure font-display text-body text-muted">
            Two ratios and nothing else. Both render as placeholders until a
            photograph is cleared in the manifest.
          </p>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div>
              <Frame shot="P-01" sizes="(min-width: 30rem) 45vw, 100vw" />
              <p className="mt-2 font-data text-meta text-muted">
                4:5 portrait
              </p>
            </div>
            <div>
              <Frame shot="S-01" sizes="(min-width: 30rem) 45vw, 100vw" />
              <p className="mt-2 font-data text-meta text-muted">
                3:2 landscape
              </p>
            </div>
          </div>
        </Bleed>
      </Surface>

      {/* Outstanding photography ------------------------------------------ */}
      <Surface surface="print" className="border-t border-rule py-9">
        <Bleed>
          <Marginalia
            margin={
              <MarginRecord
                label="Required to launch"
                value={`${outstanding.length} shots`}
              />
            }
          >
            <h2 className="font-display text-h2 tracking-tight">
              Outstanding photography
            </h2>
            <p className="mt-3 max-w-measure font-display text-body">
              The minimum viable set. Below these, the design cannot carry
              itself and the affected sections have to be rebuilt as type.
            </p>

            <ul className="mt-6">
              {outstanding.map((shot) => (
                <li key={shot.ref} className="border-t border-rule py-3">
                  <p className="font-data text-meta text-muted">
                    {shot.ref} — {shot.ratio} — {shot.usedOn.join(', ')}
                  </p>
                  <p className="font-display text-body">{shot.description}</p>
                </li>
              ))}
            </ul>

            <PendingNotice item="the full shot list" owner="Client">
              {SHOTS.length} shots are declared in src/lib/shots.ts. None has
              been supplied yet, so every frame on the site is currently a
              placeholder.
            </PendingNotice>
          </Marginalia>
        </Bleed>
      </Surface>
    </>
  )
}
