import { Container, PageLink, PageTitle, Section } from '@/components/Page'
import { INSTITUTION_BUILDING, PROGRAMMES } from '@/content/record'

export const metadata = {
  title: 'Flagship courses and programmes',
  description:
    'Eight programmes at SPJIMR, from the two-year flagship to the doctoral fellowship.',
}

export default function Flagship() {
  return (
    <Container>
      <PageTitle lede="Eight programmes at SPJIMR, from the two-year flagship to the doctoral fellowship, taught through case studies, simulation, gamification and video-based learning.">
        Flagship courses and programmes
      </PageTitle>

      <Section title="Programmes">
        <div className="grid gap-4 md:grid-cols-2">
          {PROGRAMMES.map((programme) => (
            <div key={programme.name} className="rounded-2xl bg-white/50 backdrop-blur-md border border-white/50 p-5 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:bg-white/70 transition-all duration-300">
              <dt className="font-medium text-dark-text">{programme.name}</dt>
              <dd className="mt-2 leading-relaxed text-dark-text/70 text-sm">
                {programme.taught}
              </dd>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Institution building">
        <ul className="space-y-3">
          {INSTITUTION_BUILDING.map((item) => (
            <li key={item} className="flex items-start gap-3 leading-relaxed">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-coral/40 flex-shrink-0" />
              <span className="text-dark-text/80">{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <p>
          <PageLink href="/training">Back to training</PageLink>
        </p>
      </Section>
    </Container>
  )
}
