import { PendingNotice } from '@/components/PendingNotice'
import { Bleed, Surface } from '@/components/Surface'

export const metadata = {
  title: "Social Media",
}

export default function Page() {
  return (
    <Surface surface="print" className="py-9">
      <Bleed>
        <h1 className="font-display text-h1 tracking-tight">Social Media</h1>

        <PendingNotice item="this page" owner="Build">
          <p>What goes here:</p>
          <ul className="mt-2 list-disc pl-5">
            <li className="mt-1">This page takes on the old Now page job: proving the site is alive. A decorative feed is worse than nothing.</li>
            <li className="mt-1">Two honest options, one to be picked with her: a curated collection of four to six items she adds to, each with a real date, a link and one line of her framing; or a LinkedIn embed, which needs no maintenance but renders as a widget outside the design.</li>
            <li className="mt-1">Whichever ships, a visible last-updated date. If the newest item passes 90 days old, the build warns.</li>
          </ul>
          <p className="mt-3">Blocked by: Her choice between the two options.</p>
        </PendingNotice>
      </Bleed>
    </Surface>
  )
}
