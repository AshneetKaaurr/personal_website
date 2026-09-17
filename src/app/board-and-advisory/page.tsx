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
        <RecordList columns={2}>
          <Record label="Governance and compliance">
            A certified senior HR professional (SHRM-SCP) with doctoral training
            in human resource management.
          </Record>
          <Record label="People systems and organisational risk">
            Research and consulting on HR systems, retention, fairness and
            knowledge-sharing, including engagements with ICAI, Bosch India and
            HURL.
          </Record>
          <Record label="Technology and workforce transformation">
            Published research on AI in HR decision-making, and executive
            programmes on AI-enabled HR processes and the ethical questions they
            raise.
          </Record>
          <Record label="Strategy and analysis">
            Two years on McKinsey&apos;s Strategy Analytics team, and published
            meta-analytic work on executive decision-making and firm
            performance.
          </Record>
        </RecordList>

        <Note kind="approve" item="the four claims above">
          Each traces to the CV, but they are claims about her judgement and she
          should decide how they are put.
        </Note>
      </Section>
    </Container>
  )
}
