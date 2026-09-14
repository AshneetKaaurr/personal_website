import Link from 'next/link'

import { FrameGrid, type FrameGridItem } from '@/components/FrameGrid'
import { PendingNotice } from '@/components/PendingNotice'
import { Bleed, Surface } from '@/components/Surface'

export const metadata = {
  title: 'Training',
}

const ROOMS: FrameGridItem[] = [
  { shot: 'C-01', label: 'A seminar room session at the U-shaped table' },
  { shot: 'C-02', label: 'With a full cohort in the lecture theatre' },
  { shot: 'C-03', label: 'With an international cohort on a visiting appointment' },
  { shot: 'C-04', label: 'The same visiting class, second frame' },
  { shot: 'E-06', label: 'A cohort group photograph in the campus atrium' },
  { shot: 'M-01', label: 'At the close of an executive session' },
]

export default function Training() {
  return (
    <>
      <Surface surface="print" className="py-9">
        <Bleed>
          <h1 className="font-display text-h1 tracking-tight">Training</h1>
          <p className="mt-5 max-w-measure font-display text-lead">
            Immersive learning through design thinking, rapid prototyping,
            cinema-based leadership education and gamified teaching tools.
          </p>
          <p className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/training/visiting" className="font-data text-meta text-accent">
              Visiting appointments
            </Link>
            <Link href="/training/flagship" className="font-data text-meta text-accent">
              Flagship courses and programmes
            </Link>
            <Link href="/training/new-courses" className="font-data text-meta text-accent">
              New innovative courses
            </Link>
          </p>
        </Bleed>
      </Surface>

      <Surface surface="screen" className="py-9">
        <Bleed>
          <h2 className="font-data font-expanded text-h2 text-print">
            In the room
          </h2>
          <FrameGrid items={ROOMS} className="text-print" />
        </Bleed>
      </Surface>

      <Surface surface="print" className="py-9">
        <Bleed>
          <PendingNotice item="the rest of this page" owner="Build">
            <p>What still goes here:</p>
            <ul className="mt-2 list-disc pl-5">
              <li className="mt-1">
                The teaching philosophy in her voice, drawn from the CV profile
                rather than paraphrased into corporate-speak.
              </li>
              <li className="mt-1">
                The three co-designed courses at full width — Netflix and Learn,
                Pitch to Boardroom, and Resilience and Turnaround. These are the
                most distinctive thing she has and currently the least visible.
              </li>
              <li className="mt-1">
                The eight SPJIMR programmes, and the MDP themes as a separate
                group.
              </li>
              <li className="mt-1">
                Student feedback given real placement on the page, not a
                footnote.
              </li>
            </ul>
            <p className="mt-3">
              Blocked by: two student and two MDP testimonials, and knowing
              which of the photographs above belong to which course.
            </p>
          </PendingNotice>
        </Bleed>
      </Surface>
    </>
  )
}
