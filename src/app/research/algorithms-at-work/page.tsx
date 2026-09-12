import { PendingNotice } from '@/components/PendingNotice'
import { Bleed, Surface } from '@/components/Surface'

export const metadata = {
  title: "Algorithms at work",
}

export default function Page() {
  return (
    <Surface surface="print" className="py-9">
      <Bleed>
        <h1 className="font-display text-h1 tracking-tight">Algorithms at work</h1>

        <PendingNotice item="this page" owner="Build">
          <p>What goes here:</p>
          <ul className="mt-2 list-disc pl-5">
            <li className="mt-1">The theme statement, its papers, the recognition attached to it, and the media pieces that came out of it.</li>
          </ul>
          <p className="mt-3">Blocked by: Theme confirmation, as above.</p>
        </PendingNotice>
      </Bleed>
    </Surface>
  )
}
