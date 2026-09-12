import { PendingNotice } from '@/components/PendingNotice'
import { Bleed, Surface } from '@/components/Surface'

export const metadata = {
  title: "Training",
}

export default function Page() {
  return (
    <Surface surface="print" className="py-9">
      <Bleed>
        <h1 className="font-display text-h1 tracking-tight">Training</h1>

        <PendingNotice item="this page" owner="Build">
          <p>What goes here:</p>
          <ul className="mt-2 list-disc pl-5">
            <li className="mt-1">The teaching philosophy in her voice, drawn from the CV profile rather than paraphrased into corporate-speak.</li>
            <li className="mt-1">Three routes set by her: Visiting, Flagship Courses or Programs, and New Innovative Courses.</li>
            <li className="mt-1">The three co-designed courses on the screen surface with real classroom photography — Netflix and Learn, Pitch to Boardroom, and Resilience and Turnaround.</li>
            <li className="mt-1">The eight SPJIMR programmes, and the MDP themes as a separate group.</li>
            <li className="mt-1">Student feedback given real placement on the page, not a footnote.</li>
          </ul>
          <p className="mt-3">Blocked by: Two student and two MDP testimonials, and classroom photography (C-01 to C-04).</p>
        </PendingNotice>
      </Bleed>
    </Surface>
  )
}
