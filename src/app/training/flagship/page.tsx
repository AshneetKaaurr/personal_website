import { PendingNotice } from '@/components/PendingNotice'
import { Bleed, Surface } from '@/components/Surface'

export const metadata = {
  title: "Flagship courses and programmes",
}

export default function Page() {
  return (
    <Surface surface="print" className="py-9">
      <Bleed>
        <h1 className="font-display text-h1 tracking-tight">Flagship courses and programmes</h1>

        <PendingNotice item="this page" owner="Build">
          <p>What goes here:</p>
          <ul className="mt-2 list-disc pl-5">
            <li className="mt-1">PGDM, PGPM, PGEMP, PGPDM, PGDM-Online, GMP, FPM and SYB, with the subjects taught on each.</li>
          </ul>
          <p className="mt-3">Blocked by: Nothing. Builds from the CV record.</p>
        </PendingNotice>
      </Bleed>
    </Surface>
  )
}
