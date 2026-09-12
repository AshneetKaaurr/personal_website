import { PendingNotice } from '@/components/PendingNotice'
import { Bleed, Surface } from '@/components/Surface'

export const metadata = {
  title: "Speaker",
}

export default function Page() {
  return (
    <Surface surface="screen" className="py-9">
      <Bleed>
        <h1 className="font-display text-h1 tracking-tight">Speaker</h1>

        <PendingNotice item="this page" owner="Build">
          <p>What goes here:</p>
          <ul className="mt-2 list-disc pl-5">
            <li className="mt-1">Topics written as headline-ready sentences, the way a programme chair would print them.</li>
            <li className="mt-1">Stages grouped by conference: five Academy of Management annual meetings with Philadelphia 2026 upcoming, EGOS Vienna and Cagliari, EURAM Dublin, BCERC Knoxville, Penn State, WU Vienna, NASPAA and ICODO.</li>
            <li className="mt-1">Built around real photography from her actual talks. If the stage photos do not arrive, this page is type-only and honest about it.</li>
          </ul>
          <p className="mt-3">Blocked by: Stage photography (S-01 to S-04), and her approval of the topic lines.</p>
        </PendingNotice>
      </Bleed>
    </Surface>
  )
}
