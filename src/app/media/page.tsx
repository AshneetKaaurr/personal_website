import { PendingNotice } from '@/components/PendingNotice'
import { Bleed, Surface } from '@/components/Surface'

export const metadata = {
  title: "Media Articles",
}

export default function Page() {
  return (
    <Surface surface="print" className="py-9">
      <Bleed>
        <h1 className="font-display text-h1 tracking-tight">Media Articles</h1>

        <PendingNotice item="this page" owner="Build">
          <p>What goes here:</p>
          <ul className="mt-2 list-disc pl-5">
            <li className="mt-1">Eight published articles, each with her framing note on why she wrote it. The note is the differentiator; a bare link list is what every academic has.</li>
            <li className="mt-1">The MPI piece with 5,900-plus downloads, the highest of 30-plus published there since March 2024, given real prominence.</li>
            <li className="mt-1">A short bio and a long bio, both one-click copyable, with word counts — the page a journalist on deadline lands on.</li>
            <li className="mt-1">The SPJIMR video podcast series on AI and digital transformation.</li>
          </ul>
          <p className="mt-3">Blocked by: Her framing notes, the podcast episode list, and both bios.</p>
        </PendingNotice>
      </Bleed>
    </Surface>
  )
}
