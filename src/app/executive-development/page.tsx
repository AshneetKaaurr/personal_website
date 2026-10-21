import { BriefCard, ClosingCta, ExecStatBand, RuledList } from '@/components/Blocks'
import { PageHero } from '@/components/PageHero'
import { Reveal, SectionShell } from '@/components/Shell'
import { Button, CARD_STATIC, Chips, Photo, SectionHead } from '@/components/ui'
import { pageMeta } from '@/lib/meta'

export const metadata = pageMeta({
  title: 'Executive Development',
  description:
    'Customised executive programmes by Dr Ashneet Kaur on leadership, high-performing teams, emotional intelligence, design thinking and AI in HR, for corporates, government and the social sector.',
  path: '/executive-development/',
})

export default function ExecutiveDevelopment() {
  return (
    <>
      <PageHero
        word="Develop"
        title="Judge a programme by what changes after the last session."
        lede={
          <p>
            Dr Kaur designs and teaches programmes for corporates, government bodies, social-sector
            organisations and business schools, built around the people who will actually be in the
            room.
          </p>
        }
        actions={<Button variant="light" href="#contact">Design a programme</Button>}
      />

      <SectionShell label="Who is in the room">
        <SectionHead title="Three kinds of room." lede="The programme changes with the people in it." />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            { title: 'Senior executives', body: 'Leadership classes on the PGEMP, and senior-level MDPs on leading teams and building influence.' },
            { title: 'Mid-level managers', body: 'MDPs on stress and time management, strategic people systems and leadership development.' },
            { title: 'Founders and family-business owners', body: 'Start Your Business and FiNovate: scaling a venture through people and systems.' },
          ].map((tier, i) => (
            <Reveal key={tier.title} delay={0.07 * i} className={`flex h-full flex-col p-7 ${CARD_STATIC}`}>
              <h3 className="font-serif text-[21px] leading-snug text-dark-text">{tier.title}</h3>
              <p className="mt-3 flex-1 font-sans text-[14.5px] leading-relaxed text-dark-text/75">{tier.body}</p>
            </Reveal>
          ))}
        </div>
        <ExecStatBand />
      </SectionShell>

      <SectionShell label="In the room" imageSrc="/photos/m-01-boardroom-group.jpg">
        <SectionHead title="Three briefs, three programmes." />
        <div className="mt-12 space-y-6">
          <BriefCard
            quote="Our teams hit their numbers but they don't really work together."
            title="Team leadership, collaboration and emotional intelligence"
            body={<p>An MDP on managing high-performing teams: how collaboration is built, where it breaks, and what emotional intelligence changes for a team lead.</p>}
          />
          <BriefCard
            quote="We're good at executing. We need to get better at inventing."
            title="Design thinking and innovation"
            body={<p>Human-centred problem solving applied to the organisation&apos;s own challenges and strategic decisions, not to a textbook case.</p>}
          />
          <BriefCard
            quote="AI is already making its way into our HR decisions."
            title="AI and human resource management"
            body={<p>What AI-enabled HR processes do, the ethical questions they raise, and how technology is changing the shape of the workforce.</p>}
          />
        </div>
      </SectionShell>

      <SectionShell label="Formats">
        <div className="grid gap-12 lg:grid-cols-[1fr_360px] lg:items-start">
          <div>
            <SectionHead title="Formats." />
            <div className="mt-12">
              <RuledList
                columns={2}
                items={[
                  { label: 'Customised MDP', value: 'Designed around one organisation and one cohort.' },
                  { label: 'A module inside a programme', value: 'As within the PGEMP and the GMP.' },
                  { label: 'Online delivery', value: 'As on the PGDM-Online.' },
                  { label: 'Invited lecture or workshop', value: 'For example a two-hour online lecture for more than 100 participants, rated 4.44 out of 5.' },
                ]}
              />
            </div>
          </div>
          <Reveal delay={0.1}>
            <Photo shot="C-01" sizes="360px" />
          </Reveal>
        </div>
      </SectionShell>

      <SectionShell label="What you are commissioning">
        <SectionHead
          title="What you are commissioning."
          lede="Depending on the brief, Dr Kaur can direct the programme, co-design it with your team, or teach within it."
        />
      </SectionShell>

      <SectionShell label="Behind the teaching">
        <SectionHead
          title="What sits behind the teaching."
          lede="Case studies, simulation, gamification and video-based learning, applied across every programme she has taught."
        />
        <Reveal className="mt-10">
          <Chips
            items={[
              'Wharton Global Faculty Development Program, 2025',
              'IIMB Doctoral Consortium on Teaching, 2022',
              'SHRM Senior Certified Professional',
              'Three co-designed courses',
              'AOM HR Division Best Paper, 2023',
            ]}
          />
        </Reveal>
      </SectionShell>

      <ClosingCta
        eyebrow="Executive development"
        title="Who will be in the room?"
        body="Start with the participants: their seniority, what they are dealing with, and what should be different afterwards."
        primary={{ label: 'Design a programme', href: '#contact' }}
        secondary={{ label: 'See all programmes', href: '/programmes' }}
      />
    </>
  )
}
