import { PendingNotice } from '@/components/PendingNotice'
import { Bleed, Surface } from '@/components/Surface'

export const metadata = {
  title: "Gallery",
}

export default function Page() {
  return (
    <Surface surface="screen" className="py-9">
      <Bleed>
        <h1 className="font-display text-h1 tracking-tight">Gallery</h1>

        <PendingNotice item="this page" owner="Build">
          <p>What goes here:</p>
          <ul className="mt-2 list-disc pl-5">
            <li className="mt-1">A contact-sheet grid at the two fixed ratios, filtered by teaching moments, events and stages, press appearances and award moments.</li>
            <li className="mt-1">A lightbox with keyboard navigation and a real close affordance.</li>
            <li className="mt-1">Every image captioned with what it is, where and when. An uncaptioned gallery is a screensaver.</li>
          </ul>
          <p className="mt-3">Blocked by: Photography, and written consent for any identifiable participants or students in frame.</p>
        </PendingNotice>
      </Bleed>
    </Surface>
  )
}
