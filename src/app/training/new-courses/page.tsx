import { PendingNotice } from '@/components/PendingNotice'
import { Bleed, Surface } from '@/components/Surface'

export const metadata = {
  title: "New innovative courses",
}

export default function Page() {
  return (
    <Surface surface="screen" className="py-9">
      <Bleed>
        <h1 className="font-display text-h1 tracking-tight">New innovative courses</h1>

        <PendingNotice item="this page" owner="Build">
          <p>What goes here:</p>
          <ul className="mt-2 list-disc pl-5">
            <li className="mt-1">The three co-designed courses at full width on the screen surface: Netflix and Learn, Pitch to Boardroom, and Resilience and Turnaround.</li>
            <li className="mt-1">These are the most distinctive thing she has and currently the least visible.</li>
          </ul>
          <p className="mt-3">Blocked by: Classroom photography (C-03 in particular).</p>
        </PendingNotice>
      </Bleed>
    </Surface>
  )
}
