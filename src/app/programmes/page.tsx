import { ClosingCta, ExecStatBand, LogoSection, RuledList, StatBand, Steps } from '@/components/Blocks'
import { PageHero } from '@/components/PageHero'
import { PaperCards } from '@/components/Research'
import { Reveal, SectionShell } from '@/components/Shell'
import { Testimonials } from '@/components/Testimonials'
import { Button, CARD_STATIC, Photo, SectionHead } from '@/components/ui'
import { ORGANISATIONS } from '@/content/logos'
import { getPublication } from '@/content/publications'
import { EXPERIENCE_BY_DATE } from '@/content/experience'
import { CO_DESIGNED_COURSES, MDP_THEMES, PROGRAMME_COUNT, SPJIMR_PROGRAMMES } from '@/content/teaching'
import { pageMeta } from '@/lib/meta'
import type { ShotRef } from '@/lib/shots'

export const metadata = pageMeta({
  title: 'Programmes',
  description:
    'Every programme Dr Ashneet Kaur has designed or taught: customised MDPs, eight SPJIMR degree and executive programmes, visiting courses in Hungary and Chennai, and three co-designed electives.',
  path: '/programmes/',
})

const WAYS_IN: { title: string; body: string; shot: ShotRef }[] = [
  { title: 'Leadership and high-performing teams', body: 'Leading teams, building influence and emotional intelligence, for senior and mid-level executives.', shot: 'C-01' },
  { title: 'Design thinking and innovation', body: 'Human-centred problem solving and rapid prototyping, applied to the organisation’s real challenges.', shot: 'C-03' },
  { title: 'AI and HRM', body: 'AI-enabled HR processes, the ethical questions they raise, and what they change about the workforce.', shot: 'S-01' },
  { title: 'Entrepreneurs and founders', body: 'Scaling through people and systems: SYB, FiNovate and the Product Entrepreneurship Lab.', shot: 'M-01' },
]

interface Row {
  name: string
  detail: string
}

/** Built from the shared teaching and experience records, not retyped here. */
const GROUPS: { title: string; rows: Row[] }[] = [
  {
    title: 'Customised executive programmes (MDP)',
    rows: MDP_THEMES.map((m) => ({ name: m.title, detail: m.detail })),
  },
  {
    title: 'Executive and degree programmes, SPJIMR, 2023 to 2026',
    rows: SPJIMR_PROGRAMMES.map((p) => ({ name: `${p.codes.join(' and ')}: ${p.name}`, detail: `${p.courses}. ${p.focus}` })),
  },
  {
    title: 'Visiting and guest',
    rows: EXPERIENCE_BY_DATE.filter((e) => e.kind === 'visiting').map((e) => ({
      name: `${e.organisation}${e.place ? `, ${e.place}` : ''}`,
      detail: `${e.details.join(' ')} ${e.when}.`,
    })),
  },
  {
    title: 'Co-designed electives',
    rows: CO_DESIGNED_COURSES.map((c) => ({ name: c.title, detail: `${c.status}. ${c.description}` })),
  },
]

/** Running numbers across groups, so the list counts 01 to 18. */
const OFFSETS = GROUPS.map((_, i) => GROUPS.slice(0, i).reduce((n, g) => n + g.rows.length, 0))

export default function Programmes() {
  const evidence = ['watch-out-you-are-live', 'agility-in-new-ventures', 'ghrm-systems-organizational-culture'].map(getPublication)

  return (
    <>
      <PageHero
        word="Programmes"
        title="Programmes on leadership and people, built around the problem in front of you."
        lede={
          <p>
            {PROGRAMME_COUNT} programmes taught at SPJIMR, {GROUPS[2]!.rows.length} visiting and guest
            appointments, {CO_DESIGNED_COURSES.length} co-designed courses, and customised MDPs for
            corporates, government bodies and the social sector.
          </p>
        }
        actions={<Button variant="light" href="#contact">Design a custom programme</Button>}
      />

      <SectionShell label="The record">
        <SectionHead title="The same track record behind every programme." />
        <div className="mt-12">
          <StatBand />
          <ExecStatBand />
        </div>
      </SectionShell>

      <SectionShell label="Four ways in">
        <SectionHead title="Four ways in." lede="Most commissions start from one of these four subjects." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {WAYS_IN.map((w, i) => (
            <Reveal key={w.title} delay={0.06 * i} className={`flex h-full flex-col overflow-hidden ${CARD_STATIC}`}>
              <Photo shot={w.shot} sizes="(max-width: 640px) 100vw, 50vw" className="aspect-[16/10]! rounded-none rounded-t-2xl shadow-none" />
              <div className="flex-1 p-7">
                <h3 className="font-serif text-[21px] leading-snug text-dark-text">{w.title}</h3>
                <p className="mt-3 font-sans text-[14.5px] leading-relaxed text-dark-text/75">{w.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <LogoSection label="Organisations" title="Organisations I have advised, worked with and taught for" entries={ORGANISATIONS} marquee />

      <SectionShell label="Delivered" imageSrc="/photos/c-04-global-cohort-two.jpg">
        <SectionHead title="Every programme, listed." lede={`${GROUPS.reduce((n, g) => n + g.rows.length, 0)} entries, grouped by type.`} />
        <div className="mt-12 space-y-10">
          {GROUPS.map((group, gi) => (
            <Reveal key={group.title} className={`p-7 sm:p-10 ${CARD_STATIC}`}>
              <h3 className="font-serif text-[22px] leading-snug text-dark-text">{group.title}</h3>
              <ol className="mt-6 divide-y divide-dark-text/[0.07]">
                {group.rows.map((row, ri) => {
                  const counter = OFFSETS[gi]! + ri + 1
                  return (
                    <li key={row.name} className="grid gap-2 py-4 sm:grid-cols-[3rem_1fr]">
                      <span className="font-serif text-[17px] text-dark-text/60">{String(counter).padStart(2, '0')}</span>
                      <div>
                        <p className="font-sans text-[15px] font-medium text-dark-text">{row.name}</p>
                        <p className="mt-1 font-sans text-[14px] leading-relaxed text-dark-text/75">{row.detail}</p>
                      </div>
                    </li>
                  )
                })}
              </ol>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell label="Method">
        <SectionHead title="How a programme is built." />
        <div className="mt-12">
          <Steps
            steps={[
              { title: 'Diagnose', body: 'Who is in the room, what they are dealing with, and what should be different afterwards.' },
              { title: 'Design', body: 'Design thinking and rapid prototyping, applied to the programme itself.' },
              { title: 'Deliver', body: 'Case studies, simulation, gamification and video-based learning, including film.' },
              { title: 'Embed', body: 'Work that carries back into the participants’ own teams and decisions.' },
            ]}
          />
        </div>
      </SectionShell>

      <SectionShell label="Subjects">
        <SectionHead title="Subjects." />
        <div className="mt-12">
          <RuledList
            columns={2}
            items={[
              { label: 'Leadership and teams', value: 'Leadership effectiveness, interpersonal influence, high-performing teams, emotional intelligence.' },
              { label: 'Strategy and the HR system', value: 'Strategic HRM, people and performance, talent management, strategic people systems.' },
              { label: 'AI and the future of work', value: 'AI-enabled HR processes, ethics, privacy and workforce transformation.' },
              { label: 'Entrepreneurship, design and sustainability', value: 'Scaling ventures through people, design thinking and innovation, sustainable HRM.' },
            ]}
          />
        </div>
      </SectionShell>

      <Testimonials title="What participants say." />

      <SectionShell label="Why the material holds">
        <SectionHead title="Why the material holds up." lede="The programmes draw on her own peer-reviewed research." />
        <div className="mt-12">
          <PaperCards papers={evidence} />
        </div>
      </SectionShell>

      <ClosingCta
        eyebrow="Programmes"
        title="Tell her what the programme has to change."
        body="The participants, the challenge and the outcome you need. The design starts there."
        primary={{ label: 'Design a custom programme', href: '#contact' }}
        secondary={{ label: 'Executive development', href: '/executive-development' }}
      />
    </>
  )
}
