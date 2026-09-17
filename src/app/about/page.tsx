import {
  Container,
  Draft,
  Note,
  PageTitle,
  Record,
  RecordList,
  Section,
} from '@/components/Page'
import { ROUTE_HERE } from '@/content/record'

export const metadata = {
  title: 'About',
  description:
    'From Deloitte, McKinsey and ATOS to a doctorate at IIM Ahmedabad and the classroom. Dr Ashneet Kaur on research, teaching and the route between them.',
}

export default function About() {
  return (
    <Container>
      <PageTitle>About</PageTitle>

      <Section>
        <Draft>
          <p>I work on what happens to people when the systems around them change.</p>

          <p>
            My research sits where organisational behaviour meets technology:
            how AI-driven systems affect employee engagement, trust and the way
            a culture evolves, and what algorithmic decision-making does to
            privacy, fairness and well-being. I work mostly in fast-growing,
            digitally enabled and sustainability-focused firms, because that is
            where these questions arrive first and get answered worst.
          </p>

          <p>
            I came to research through practice, not around it. I founded my
            first venture, College Ki Knowledge, while I was still an
            undergraduate at Shri Ram College of Commerce, and co-founded a
            second, Start-up Pal, before I graduated. I audited US clients at
            Deloitte, then spent two years at McKinsey on the Strategy Analytics
            team, running knowledge sessions for partners and experts. I
            finished a master&apos;s at the Delhi School of Economics while I was
            there. At ATOS I built a human resource retention strategy across
            the UK, France and India offices and interviewed more than fifty
            stakeholders to do it.
          </p>

          <p>
            So when I teach strategic HR to executives, I am teaching work I
            have done. That matters more than it sounds. The gap between an HR
            system on paper and an HR system as experienced by the person inside
            it is the gap most of my research lives in, and I first saw it from
            the inside.
          </p>

          <p>
            I took my doctorate in Human Resource Management at IIM Ahmedabad,
            and I have taught since at SPJIMR Mumbai across eight programmes,
            from the two-year flagship to the doctoral fellowship, and as
            visiting faculty at the University of Pécs, Great Lakes Chennai and
            Masters Union. In April 2026 I joined the board of Punjab
            Communications Limited as an independent director.
          </p>

          <p>
            In the classroom I use design thinking, rapid prototyping,
            cinema-based leadership education and gamified teaching. I
            co-designed three courses on that principle: one that teaches
            leadership through film, one that reads strategy off Indian cricket,
            and one built on Indian turnaround stories. The point is not
            novelty. It is that people remember an argument they have watched
            play out, and they will argue with a character in a way they will
            not argue with a framework.
          </p>
        </Draft>

        <Note kind="approve" item="the bio above">
          Drafted in her voice from the CV profile summary. She approves or
          rewrites it.
        </Note>

        <Note kind="needs" item="one sentence stating her current role">
          To open or close the piece, once the affiliation question is settled.
        </Note>
      </Section>

      <Section
        title="The route here"
        intro="A genuine sequence, so it is numbered. Two steps overlap the studies above them on purpose: the master's was taken while she was at McKinsey, and the ATOS engagement sits inside the doctorate, which is why it runs a single month."
      >
        <ol className="space-y-4">
          {ROUTE_HERE.map((step, index) => (
            <li key={step.where} className="flex gap-4">
              <span className="w-6 shrink-0 text-sm text-sage">{index + 1}</span>
              <span>
                <span className="block leading-relaxed">{step.where}</span>
                <span className="block text-sm text-sage">{step.when}</span>
              </span>
            </li>
          ))}
        </ol>

        <Note kind="needs" item="confirmation that the two overlaps read correctly">
          The CV shows ATOS as April to May 2019, inside the IIM Ahmedabad
          doctorate, and the M.Com as June 2017, during McKinsey. Presented here
          as deliberate rather than as errors. One line from her confirms it.
        </Note>
      </Section>

      <Section title="Credentials">
        <RecordList columns={2}>
          <Record label="Doctorate">
            PhD in Human Resource Management, IIM Ahmedabad, June 2018 to
            February 2023
          </Record>
          <Record label="Masters">
            M.Com, Delhi School of Economics, University of Delhi, June 2017
          </Record>
          <Record label="Undergraduate">
            B.Com (Honours), Shri Ram College of Commerce, Delhi University, May
            2015
          </Record>
          <Record label="Certification">
            SHRM Senior Certified Professional, August 2024 to August 2027
          </Record>
          <Record label="Faculty development">
            Wharton Global Faculty Development Programme, 2025, a four-day
            intensive on impactful research and the art of teaching with Martine
            Haas, Lori Rosenkopf, Rahul Kapoor and Matthew Bidwell
          </Record>
          <Record label="Teaching">
            Doctoral Consortium on Teaching, Centre for Teaching and Learning,
            IIM Bangalore, February 2022
          </Record>
        </RecordList>
      </Section>
    </Container>
  )
}
