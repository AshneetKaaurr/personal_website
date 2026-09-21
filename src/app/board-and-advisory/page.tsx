import {
  Container,
  Note,
  PageTitle,
  Record,
  RecordList,
  Section,
} from '@/components/Page'

export const metadata = {
  title: 'Board and Advisory',
  description:
    'Independent Director of Punjab Communications Limited, appointed under Section 149 of the Companies Act 2013 and the SEBI LODR Regulations.',
}

/**
 * Deliberately the plainest page on the site.
 *
 * CLAUDE.md hard rule 5: state the role, the statute and the dates, and stop.
 * Nothing about the company's business, performance, strategy or outlook
 * belongs here. It is a listed public sector undertaking and she is an
 * independent director of it.
 */
export default function BoardAndAdvisory() {
  return (
    <Container>
      <PageTitle>Board and Advisory</PageTitle>

      <Section title="The appointment">
        <RecordList columns={1}>
          <Record label="Role">
            Independent Director, Punjab Communications Limited (PUNCOM),
            Government of Punjab
          </Record>
          <Record label="Term">April 2026 to present</Record>
          <Record label="Appointed under">
            The Companies Act, 2013 (Section 149) and the SEBI (Listing
            Obligations and Disclosure Requirements) Regulations
          </Record>
          <Record label="Responsibilities">
            Provides strategic oversight on organisational governance,
            compliance and performance, and contributes to board-level
            decision-making on public sector enterprise operations and growth
          </Record>
        </RecordList>
      </Section>

      <Section
        title="What she brings to a board"
        intro="Written about her own expertise, not about the company."
      >
        <div className="grid gap-4 sm:grid-cols-2 mt-8">
          <div className="rounded-2xl bg-white/50 backdrop-blur-md border border-white/50 p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:bg-white/70 transition-all duration-300">
            <h3 className="font-serif text-lg mb-3">Governance and compliance</h3>
            <p className="leading-relaxed text-dark-text/80 text-sm">
              A certified senior HR professional (SHRM-SCP) with doctoral training
              in human resource management.
            </p>
          </div>
          <div className="rounded-2xl bg-white/50 backdrop-blur-md border border-white/50 p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:bg-white/70 transition-all duration-300">
            <h3 className="font-serif text-lg mb-3">People systems and risk</h3>
            <p className="leading-relaxed text-dark-text/80 text-sm">
              Research and consulting on HR systems, retention, fairness and
              knowledge-sharing, including engagements with ICAI, Bosch India and
              HURL.
            </p>
          </div>
          <div className="rounded-2xl bg-white/50 backdrop-blur-md border border-white/50 p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:bg-white/70 transition-all duration-300">
            <h3 className="font-serif text-lg mb-3">Technology and workforce</h3>
            <p className="leading-relaxed text-dark-text/80 text-sm">
              Published research on AI in HR decision-making, and executive
              programmes on AI-enabled HR processes and the ethical questions they
              raise.
            </p>
          </div>
          <div className="rounded-2xl bg-white/50 backdrop-blur-md border border-white/50 p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:bg-white/70 transition-all duration-300">
            <h3 className="font-serif text-lg mb-3">Strategy and analysis</h3>
            <p className="leading-relaxed text-dark-text/80 text-sm">
              Two years on McKinsey&apos;s Strategy Analytics team, and published
              meta-analytic work on executive decision-making and firm
              performance.
            </p>
          </div>
        </div>

        <Note kind="approve" item="the four claims above">
          Each traces to the CV, but they are claims about her judgement and she
          should decide how they are put.
        </Note>
      </Section>
    </Container>
  )
}
