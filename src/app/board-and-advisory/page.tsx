import { PendingNotice } from '@/components/PendingNotice'
import { Bleed, Surface } from '@/components/Surface'

export const metadata = {
  title: "Board and Advisory",
}

export default function Page() {
  return (
    <Surface surface="print" className="py-9">
      <Bleed>
        <h1 className="font-display text-h1 tracking-tight">Board and Advisory</h1>

        <PendingNotice item="this page" owner="Build">
          <p>What goes here:</p>
          <ul className="mt-2 list-disc pl-5">
            <li className="mt-1">A deliberately plainer register: quieter type, a tighter measure, nothing above 35px, and no photography beyond P-02.</li>
            <li className="mt-1">The role statement, and what she brings to a board — governance, HR systems, organisational risk, and technology and workforce transformation.</li>
            <li className="mt-1">Her appointment framed exactly as the CV frames it: Independent Director, Punjab Communications Limited, Government of Punjab, appointed under Section 149 of the Companies Act 2013 and the SEBI LODR Regulations, April 2026 to present.</li>
            <li className="mt-1">No commentary on the company. It is a listed PSU and she is an independent director.</li>
          </ul>
          <p className="mt-3">Blocked by: Nothing. Builds from the CV record.</p>
        </PendingNotice>
      </Bleed>
    </Surface>
  )
}
