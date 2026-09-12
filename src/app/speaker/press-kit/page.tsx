import { PendingNotice } from '@/components/PendingNotice'
import { Bleed, Surface } from '@/components/Surface'

export const metadata = {
  title: "Press kit",
}

export default function Page() {
  return (
    <Surface surface="print" className="py-9">
      <Bleed>
        <h1 className="font-display text-h1 tracking-tight">Press kit</h1>

        <PendingNotice item="this page" owner="Build">
          <p>What goes here:</p>
          <ul className="mt-2 list-disc pl-5">
            <li className="mt-1">Both bios, three photographs at print resolution, a one-line descriptor, the headshot credit line, and her preferred name and title spelling.</li>
          </ul>
          <p className="mt-3">Blocked by: Both bios, P-01 and P-03 at print resolution, and the credit line.</p>
        </PendingNotice>
      </Bleed>
    </Surface>
  )
}
