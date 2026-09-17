import { Container, PageLink, PageTitle, Section } from '@/components/Page'
import { INVITED_LECTURES, VISITING } from '@/content/record'

export const metadata = {
  title: 'Visiting appointments',
  description:
    'Visiting faculty at the University of Pécs, Great Lakes Chennai, Masters Union and Bharti College, and invited lectures.',
}

export default function VisitingPage() {
  return (
    <Container>
      <PageTitle>Visiting appointments</PageTitle>

      <Section title="Appointments">
        <ul className="space-y-8">
          {VISITING.map((post) => (
            <li key={post.institution}>
              <h2 className="font-serif text-lg">{post.institution}</h2>
              <p className="mt-1 text-sm text-sage">{post.when}</p>
              <p className="mt-2 leading-relaxed">{post.detail}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Invited lectures">
        <ul className="space-y-4">
          {INVITED_LECTURES.map((lecture) => (
            <li key={lecture} className="leading-relaxed">
              {lecture}
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
