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
        <dl className="space-y-6">
          {PROGRAMMES.map((programme) => (
            <div key={programme.name}>
              <dt className="font-medium">{programme.name}</dt>
              <dd className="mt-1 leading-relaxed text-sage">
                {programme.taught}
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section title="Institution building">
        <ul className="space-y-4">
          {INSTITUTION_BUILDING.map((item) => (
            <li key={item} className="leading-relaxed">
              {item}
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
