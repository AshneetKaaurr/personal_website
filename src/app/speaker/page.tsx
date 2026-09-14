import { Frame } from '@/components/Frame'
import { FrameGrid, type FrameGridItem } from '@/components/FrameGrid'
import { PendingNotice } from '@/components/PendingNotice'
import { Bleed, Surface } from '@/components/Surface'

export const metadata = {
  title: 'Speaker',
}

/** Stages, in the order they read best rather than chronologically. */
const STAGES: FrameGridItem[] = [
  { shot: 'S-04', label: '86th Annual Meeting of the Academy of Management, Philadelphia' },
  { shot: 'S-05', label: 'HRIC 2026' },
  { shot: 'E-05', label: 'Copenhagen Business School' },
  { shot: 'S-01', label: 'Presenting to a conference audience' },
  { shot: 'S-02', label: 'Auditorium session on governance in the age of AI' },
  { shot: 'E-01', label: 'On stage at the same session' },
]

export default function Speaker() {
  return (
    <>
      <Surface surface="screen" as="header" className="py-9">
        <Bleed>
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-7">
            <div className="lg:col-span-7">
              <Frame
                shot="P-03"
                sizes="(min-width: 64rem) 55vw, 100vw"
                priority
              />
            </div>
            <div className="lg:col-span-5">
              <h1 className="font-data font-expanded-max text-title tracking-tight text-print">
                Speaker
              </h1>
              <p className="mt-5 max-w-measure font-display text-lead text-print">
                Five Academy of Management annual meetings between 2021 and
                2025, with Philadelphia 2026 upcoming. EGOS in Vienna and
                Cagliari, EURAM in Dublin, BCERC in Knoxville.
              </p>
            </div>
          </div>
        </Bleed>
      </Surface>

      <Surface surface="screen" className="border-t border-rule py-9">
        <Bleed>
          <h2 className="font-data font-expanded text-h2 text-print">
            On stage
          </h2>
          <FrameGrid items={STAGES} className="text-print" />
        </Bleed>
      </Surface>

      <Surface surface="print" className="py-9">
        <Bleed>
          <PendingNotice item="the rest of this page" owner="Build">
            <p>What still goes here:</p>
            <ul className="mt-2 list-disc pl-5">
              <li className="mt-1">
                Topics written as headline-ready sentences, the way a programme
                chair would print them — drafted from her research themes, for
                her approval.
              </li>
              <li className="mt-1">
                Stages grouped by conference, with the full record: five
                Academy of Management meetings, EGOS Vienna and Cagliari, EURAM
                Dublin, BCERC Knoxville, Penn State, WU Vienna, NASPAA and
                ICODO.
              </li>
              <li className="mt-1">A link through to the press kit.</li>
            </ul>
            <p className="mt-3">
              Blocked by: her approval of the topic lines, and dates and places
              for each of the photographs above.
            </p>
          </PendingNotice>
        </Bleed>
      </Surface>
    </>
  )
}
