import { PendingNotice } from '@/components/PendingNotice'
import { Bleed, Surface } from '@/components/Surface'

export const metadata = {
  title: "Publications",
}

export default function Page() {
  return (
    <Surface surface="print" className="py-9">
      <Bleed>
        <h1 className="font-display text-h1 tracking-tight">Publications</h1>

        <PendingNotice item="this page" owner="Build">
          <p>What goes here:</p>
          <ul className="mt-2 list-disc pl-5">
            <li className="mt-1">Every record with its exact author order, her name in ink and co-authors in graphite, the venue, the year, the ABDC rank and the plain-English line.</li>
            <li className="mt-1">Filters by type, theme and year, synced to the URL so a filtered view can be linked.</li>
            <li className="mt-1">DOI, PDF and a Cite action that copies a formatted APA string.</li>
          </ul>
          <p className="mt-3">Blocked by: DOIs, which are not on the CV, and her approval of all twelve plain-English summaries.</p>
        </PendingNotice>
      </Bleed>
    </Surface>
  )
}
