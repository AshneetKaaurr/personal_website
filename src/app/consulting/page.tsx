import { PendingNotice } from '@/components/PendingNotice'
import { Bleed, Surface } from '@/components/Surface'

export const metadata = {
  title: "Consulting",
}

export default function Page() {
  return (
    <Surface surface="print" className="py-9">
      <Bleed>
        <h1 className="font-display text-h1 tracking-tight">Consulting</h1>

        <PendingNotice item="this page" owner="Build">
          <p>What goes here:</p>
          <ul className="mt-2 list-disc pl-5">
            <li className="mt-1">Five programme themes from her MDP record: team leadership and collaboration, emotional intelligence, design thinking and innovation, AI and HRM, and strategic people systems.</li>
            <li className="mt-1">How she works — diagnostic, design, delivery, follow-through. A genuine four-step sequence.</li>
            <li className="mt-1">The corporate record: ICAI, Bosch India, HURL and ATOS, presented as engagements with what was examined, not as logo wallpaper.</li>
            <li className="mt-1">An enquiry form routed to the consulting queue.</li>
          </ul>
          <p className="mt-3">Blocked by: The four-step method in her words, and confirmation of the ATOS dates, which show a one-month span on the CV.</p>
        </PendingNotice>
      </Bleed>
    </Surface>
  )
}
