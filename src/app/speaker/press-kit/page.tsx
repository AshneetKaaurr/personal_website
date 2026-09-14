import { Frame } from '@/components/Frame'
import { PendingNotice } from '@/components/PendingNotice'
import { Bleed, Surface } from '@/components/Surface'
import type { ShotRef } from '@/lib/shots'

export const metadata = {
  title: 'Press kit',
}

const KIT: { shot: ShotRef; use: string }[] = [
  { shot: 'P-01', use: 'Primary portrait' },
  { shot: 'P-03', use: 'Speaking portrait' },
  { shot: 'P-07', use: 'Full-length portrait' },
]

export default function PressKit() {
  return (
    <>
      <Surface surface="print" className="py-9">
        <Bleed>
          <h1 className="font-display text-h1 tracking-tight">Press kit</h1>
          <p className="mt-4 max-w-measure font-display text-body">
            For programme chairs and journalists. Preferred name and title
            spelling: Dr Ashneet Kaur.
          </p>

          <ul className="mt-7 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {KIT.map(({ shot, use }) => (
              <li key={shot}>
                <Frame
                  shot={shot}
                  sizes="(min-width: 64rem) 30vw, (min-width: 30rem) 48vw, 100vw"
                />
                <p className="mt-3 font-display text-body">{use}</p>
              </li>
            ))}
          </ul>

          <PendingNotice item="the rest of the press kit" owner="Client">
            <p>What still goes here:</p>
            <ul className="mt-2 list-disc pl-5">
              <li className="mt-1">
                A short bio and a long bio, both one-click copyable, with word
                counts shown.
              </li>
              <li className="mt-1">
                Print-resolution downloads of the three photographs above. The
                files on the site are capped at 2400px on the long edge, which
                is right for the web and too small for print.
              </li>
              <li className="mt-1">
                A one-line descriptor, and the headshot credit line.
              </li>
            </ul>
            <p className="mt-3">
              Blocked by: both bios, which need her current affiliation
              settled first, and the photographer credit.
            </p>
          </PendingNotice>
        </Bleed>
      </Surface>
    </>
  )
}
