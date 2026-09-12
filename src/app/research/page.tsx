import { PendingNotice } from '@/components/PendingNotice'
import { Bleed, Surface } from '@/components/Surface'

export const metadata = {
  title: "Research",
}

export default function Page() {
  return (
    <Surface surface="print" className="py-9">
      <Bleed>
        <h1 className="font-display text-h1 tracking-tight">Research</h1>

        <PendingNotice item="this page" owner="Build">
          <p>What goes here:</p>
          <ul className="mt-2 list-disc pl-5">
            <li className="mt-1">A programme statement in her own voice.</li>
            <li className="mt-1">Three themes, each bundled with its papers, a why-it-matters note, the related recognition and the related media — together on one page, not scattered across the site.</li>
            <li className="mt-1">Work in progress, and the three best-paper awards with the actual paper titles.</li>
          </ul>
          <p className="mt-3">Blocked by: Confirmation of the theme assignment for all twelve records, which Claude proposed and she has not reviewed.</p>
        </PendingNotice>
      </Bleed>
    </Surface>
  )
}
