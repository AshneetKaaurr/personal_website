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
        <div className="space-y-4">
          {VISITING.map((post) => (
            <div key={post.institution} className="rounded-2xl bg-white/50 backdrop-blur-md border border-white/50 p-5 md:p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:bg-white/70 transition-all duration-300">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h2 className="font-serif text-lg">{post.institution}</h2>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-dark-text/5 text-xs font-medium text-sage">
                  {post.when}
                </span>
              </div>
              <p className="leading-relaxed text-dark-text/80">{post.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Invited lectures">
        <ul className="space-y-3">
          {INVITED_LECTURES.map((lecture) => (
            <li key={lecture} className="flex items-start gap-3 leading-relaxed">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-coral/40 flex-shrink-0" />
              <span className="text-dark-text/80">{lecture}</span>
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
