import { PendingNotice } from '@/components/PendingNotice'
import { Bleed, Surface } from '@/components/Surface'

export const metadata = {
  title: "Visiting appointments",
}

export default function Page() {
  return (
    <Surface surface="print" className="py-9">
      <Bleed>
        <h1 className="font-display text-h1 tracking-tight">Visiting appointments</h1>

        <PendingNotice item="this page" owner="Build">
          <p>What goes here:</p>
          <ul className="mt-2 list-disc pl-5">
            <li className="mt-1">University of Pecs, Great Lakes Chennai, Masters Union and Bharti College, with what was taught at each.</li>
            <li className="mt-1">Guest lectures, including the K.R. Mangalam session that scored 4.44 out of 5 across 100-plus participants.</li>
          </ul>
          <p className="mt-3">Blocked by: Nothing. Builds from the CV record.</p>
        </PendingNotice>
      </Bleed>
    </Surface>
  )
}
