import { Frame } from '@/components/Frame'
import { PendingNotice } from '@/components/PendingNotice'
import { Bleed, Surface } from '@/components/Surface'

export const metadata = {
  title: "About",
}

export default function Page() {
  return (
    <Surface surface="print" className="py-9">
      <Bleed>
        <div className="grid gap-7 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Frame shot="P-01" sizes="(min-width: 64rem) 32vw, 100vw" priority />
          </div>
          <div className="min-w-0 lg:col-span-7 lg:col-start-6">
        <h1 className="font-display text-h1 tracking-tight">About</h1>

        <PendingNotice item="this page" owner="Build">
          <p>What goes here:</p>
          <ul className="mt-2 list-disc pl-5">
            <li className="mt-1">A 400-word first-person bio at a 68-character measure, with P-01 or P-02 set in the margin.</li>
            <li className="mt-1">The route-here timeline: SRCC, Delhi School of Economics, Deloitte, McKinsey, ATOS, the IIM Ahmedabad PhD, SPJIMR, the PUNCOM board, and the two ventures founded in 2013 to 2015. Presented as an asset, not an apology.</li>
            <li className="mt-1">Credentials at a glance.</li>
          </ul>
          <p className="mt-3">Blocked by: Her current institutional affiliation, and her sign-off on the bio.</p>
        </PendingNotice>
          </div>
        </div>
      </Bleed>
    </Surface>
  )
}
