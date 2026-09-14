import { Frame } from '@/components/Frame'
import { PendingNotice } from '@/components/PendingNotice'
import { Bleed, Surface } from '@/components/Surface'

export const metadata = {
  title: "Media Articles",
}

export default function Page() {
  return (
    <Surface surface="print" className="py-9">
      <Bleed>
        <div className="grid gap-7 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Frame shot="P-06" sizes="(min-width: 64rem) 32vw, 100vw" />
          </div>
          <div className="min-w-0 lg:col-span-7 lg:col-start-6">
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
          </div>
        </div>
      </Bleed>
    </Surface>
  )
}
