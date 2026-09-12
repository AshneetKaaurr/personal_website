import { PendingNotice } from '@/components/PendingNotice'
import { Bleed, Surface } from '@/components/Surface'

export const metadata = {
  title: "Privacy",
}

export default function Page() {
  return (
    <Surface surface="print" className="py-9">
      <Bleed>
        <h1 className="font-display text-h1 tracking-tight">Privacy</h1>

        <PendingNotice item="this page" owner="Build">
          <p>What goes here:</p>
          <ul className="mt-2 list-disc pl-5">
            <li className="mt-1">A genuinely readable privacy notice that accurately describes what the analytics actually do. If it says no cookies, the implementation sets no cookies.</li>
          </ul>
          <p className="mt-3">Blocked by: The analytics decision, and the form provider.</p>
        </PendingNotice>
      </Bleed>
    </Surface>
  )
}
