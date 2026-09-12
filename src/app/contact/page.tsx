import { PendingNotice } from '@/components/PendingNotice'
import { Bleed, Surface } from '@/components/Surface'

export const metadata = {
  title: "Contact",
}

export default function Page() {
  return (
    <Surface surface="print" className="py-9">
      <Bleed>
        <h1 className="font-display text-h1 tracking-tight">Contact</h1>

        <PendingNotice item="this page" owner="Build">
          <p>What goes here:</p>
          <ul className="mt-2 list-disc pl-5">
            <li className="mt-1">Enquiries routed by type: executive education, speaking, doctoral supervision, research collaboration, board, other.</li>
            <li className="mt-1">An honest response-time expectation against each one.</li>
            <li className="mt-1">Direct email, LinkedIn and Google Scholar also visible, because some people will not use a form.</li>
          </ul>
          <p className="mt-3">Blocked by: Her real response-time commitments per enquiry type, and her LinkedIn and Google Scholar URLs.</p>
        </PendingNotice>
      </Bleed>
    </Surface>
  )
}
