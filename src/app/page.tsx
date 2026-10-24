import Image from 'next/image'
import Link from 'next/link'

import {
  ClientWall,
  ClosingCta,
  EngagementBand,
  EXEC_STATS,
  LinkCards,
  LogoSection,
  NumberCards,
} from '@/components/Blocks'
import { HeroGeometry } from '@/components/HeroGeometry'
import { HeroSlideshowBg } from '@/components/HeroSlideshow'
import { JsonLd, PERSON_LD } from '@/components/JsonLd'
import { FadeIn, FadeInRight, ScaleIn } from '@/components/Motion'
import { PaperCards, ThemeCards } from '@/components/Research'
import { Reveal, SectionShell } from '@/components/Shell'
import { StackCards } from '@/components/StackCards'
import { Testimonials } from '@/components/Testimonials'
import {
  Actions,
  Button,
  Chips,
  Lede,
  Photo,
  SectionHead,
  SectionTitle,
} from '@/components/ui'
import { CLIENT_SECTORS, CLIENTS, FOUNDATIONS, ORGANISATIONS } from '@/content/logos'
import { EXPERIENCE_BY_DATE } from '@/content/experience'
import { getPublication, journalArticles } from '@/content/publications'
import { AOM } from '@/content/record'
import { CO_DESIGNED_COURSES, MDP_THEMES, PROGRAMME_COUNT, SPJIMR_PROGRAMMES } from '@/content/teaching'
import { HOW_I_HELP, LINKEDIN_URL } from '@/content/site'
import { pageMeta } from '@/lib/meta'

export const metadata = pageMeta({
  title: 'Dr Ashneet Kaur – Organisational Behaviour, HRM and the Human Side of AI',
  description:
    'Dr Ashneet Kaur helps organisations design people systems that stay fair, trusted and human as AI and change reshape work: advisory, executive programmes, research and board governance.',
  path: '/',
  absoluteTitle: true,
})

const SELECTED_RESEARCH = [
  'watch-out-you-are-live',
  'ghrm-systems-organizational-culture',
  'invisible-norms-visible-challenges',
  'the-hidden-toll-of-unfair-workplaces',
  'agility-in-new-ventures',
  'sailing-through-international-assignment',
].map(getPublication)

export default function Home() {
  return (
    <>
      <JsonLd data={PERSON_LD} />

      {/* 1.1 Hero ---------------------------------------------------------- */}
      <section className="relative flex min-h-[100svh] w-full flex-col overflow-hidden bg-light-bg lg:h-[100svh] lg:min-h-0" style={{ '--nav-offset': '84px' } as React.CSSProperties}>
        <HeroSlideshowBg />

        <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden font-serif uppercase leading-none tracking-widest text-dark-text">
          <span className="absolute top-[15%] left-[5%] text-[8vw] opacity-[0.02]">TRUST</span>
          <span className="absolute top-[40%] left-[8%] text-[6vw] opacity-[0.03]">PRIVACY</span>
          <span className="absolute bottom-[20%] left-[12%] text-[7vw] opacity-[0.02]">FAIRNESS</span>
          <span className="absolute top-[25%] right-[10%] text-[6vw] opacity-[0.02]">CULTURE</span>
          <span className="absolute right-[5%] bottom-[35%] text-[9vw] opacity-[0.03]">AGILITY</span>
        </div>

        <FadeIn delay={1.2} className="pointer-events-none absolute top-1/2 right-2 z-40 hidden -translate-y-1/2 opacity-50 sm:block lg:right-4">
          <span className="block whitespace-nowrap font-sans text-[14px] font-medium uppercase tracking-[0.3em] text-dark-text lg:text-[16px]" style={{ writingMode: 'vertical-rl' }}>
            Evidence &middot; Empathy &middot; Design
          </span>
        </FadeIn>

        {/* Text and desktop portrait share this box, which stops at the rail. */}
        <div className="relative flex flex-1 flex-col">
        {/* Text content – left column. Vertical rhythm is in svh so the whole
            block fits between the navbar and the rail on short laptop screens. */}
        <div className="relative z-20 mx-auto flex w-full max-w-[1400px] flex-1 flex-col px-5 pt-24 pb-4 sm:px-8 sm:pt-28 sm:pb-10 lg:justify-center lg:px-12 lg:pt-[calc(var(--nav-offset)+0.5rem)] lg:pb-[2svh]">
          <div className="z-30 flex flex-col items-start lg:w-[50%]">
            <p className="font-serif text-[clamp(1.25rem,3.2svh,2rem)] leading-none text-dark-text">Dr Ashneet Kaur</p>
            <div className="my-[clamp(0.6rem,2.2svh,1.75rem)] h-px w-full max-w-[85%] bg-dark-text/10" />
            <h1 className="font-serif text-[clamp(1.75rem,min(4.2vw,6.6svh),4.3rem)] leading-[0.98] tracking-[-0.02em] text-dark-text">
              What happens to <em className="italic">people</em> when the systems around them change?
            </h1>
            <p className="mt-[clamp(0.75rem,2.4svh,1.75rem)] max-w-[36rem] font-sans text-[14.5px] lg:text-[15px] leading-relaxed text-dark-text/80">
              That question runs through my work with leaders, HR teams and boards. I help
              organisations answer it in three ways: advice on people strategy, programmes built for a
              particular room, and governance as an independent director of a listed public-sector
              company.
            </p>
            <FadeIn delay={0.2}>
              <p className="mt-[clamp(0.75rem,2.2svh,1.5rem)] hidden max-w-[36rem] border-l-2 sm:block border-coral/50 pl-4 font-sans text-[13px] leading-relaxed text-dark-text/80">
                PhD in HRM, IIM Ahmedabad. SHRM-SCP. Faculty, HR-OB, Indian School
                of Business. Independent Director, PUNCOM. Ten
                journal papers, half ranked A by ABDC.
              </p>
            </FadeIn>
            <FadeIn delay={0.25}>
              <div className="mt-[clamp(1rem,2.6svh,2rem)] flex flex-wrap items-center gap-x-5 gap-y-3">
                <Button href="#contact">Book a consultation</Button>
                <Button href="/programmes" variant="secondary">Design a leadership programme</Button>
                <a href="#contact" className="font-sans text-[13px] font-medium text-dark-text underline decoration-coral/50 underline-offset-4 transition-colors hover:decoration-coral">
                  Invite Dr Kaur to speak
                </a>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Portrait – desktop absolutely positioned, bottom-aligned in right column */}
        {/* The column ends at the top of the rail (it lives in the same
            wrapper as the text), so the portrait sits on the rail rather than
            under it. It is a size container: the image takes the largest box
            that fits both its width and its height at the PNG's 1400:1046
            ratio, which keeps it right-anchored and uncropped at any viewport. */}
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-1/2 items-end justify-end pt-[calc(var(--nav-offset)+1rem)] pr-14 pl-8 [container-type:size] lg:flex">
          <ScaleIn delay={0.3} className="relative">
            <HeroGeometry />
            <Image
              src="/photos/p-05-seated-no-bg.png"
              alt="Dr Ashneet Kaur seated in a pale blue sari, leaning forward on the back of a wooden chair."
              width={1400}
              height={1046}
              priority
              sizes="50vw"
              className="pointer-events-auto relative z-[1] block h-auto w-[min(100cqw,calc(100cqh*1400/1046))] object-contain object-bottom drop-shadow-[0_28px_56px_rgba(30,30,25,0.26)]"
            />
            <FadeInRight delay={0.95} className="pointer-events-auto absolute top-[28%] left-[2%] hidden flex-col items-start rounded-sm border-l border-white/40 bg-white/30 p-4 shadow-[0_4px_16px_rgba(0,0,0,0.04)] backdrop-blur-md xl:flex">
              <span className="font-serif text-3xl leading-none text-dark-text">3</span>
              <span className="my-2 h-px w-full bg-dark-text/10" />
              <span className="font-sans text-[11px] font-medium leading-tight text-dark-text/80">Best Paper<br />Awards</span>
            </FadeInRight>
            <FadeIn delay={1.15} className="pointer-events-auto absolute top-[4%] right-0 hidden max-w-[210px] rounded-sm border-l-2 border-coral/40 bg-white/40 p-5 shadow-[0_8px_32px_rgba(0,0,0,0.05)] backdrop-blur-xl xl:block">
              <p className="font-sans text-[12px] font-semibold text-dark-text/80">Research-backed, practice-driven</p>
              <p className="mt-1.5 font-serif text-[14px] italic leading-snug text-dark-text/90">
                how technology changes trust, fairness and the experience of work.
              </p>
            </FadeIn>
          </ScaleIn>
        </div>

        </div>

        {/* Portrait – shown below text on mobile, absolutely pinned right on desktop */}
        <div className="relative z-10 flex w-full items-end justify-center lg:hidden">
          <ScaleIn delay={0.3} className="relative w-full max-w-[340px] sm:max-w-[400px]">
            <Image
              src="/photos/p-05-seated-no-bg.png"
              alt="Dr Ashneet Kaur seated in a pale blue sari, leaning forward on the back of a wooden chair."
              width={1400}
              height={1046}
              priority
              sizes="(max-width: 640px) 340px, 400px"
              className="pointer-events-auto block h-auto max-h-[24svh] w-full object-contain object-bottom drop-shadow-[0_28px_56px_rgba(30,30,25,0.26)]"
            />
          </ScaleIn>
        </div>

        <FadeIn delay={1.25} className="relative z-30 w-full border-t border-white/40 bg-white/40 backdrop-blur-2xl">
          <nav aria-label="How I help" className="no-scrollbar mx-auto flex w-full max-w-[1400px] items-center gap-7 overflow-x-auto px-5 py-3 sm:px-8 lg:px-12">
            {HOW_I_HELP.map(({ href, label }) => (
              <Link key={href} href={href} className="group flex shrink-0 items-center gap-2 font-sans text-[13px] tracking-wide text-dark-text/75 transition-colors hover:text-dark-text">
                {label}
                <span aria-hidden="true" className="text-dark-text/40 transition-transform group-hover:translate-x-0.5">&rsaquo;</span>
              </Link>
            ))}
          </nav>
        </FadeIn>
      </section>

      {/* Introduction: researcher, educator, advisor ---------------------- */}
      <SectionShell label="Researcher, educator, advisor">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
          <Reveal>
            <SectionTitle wide>Research is where I start. A better workplace is the point.</SectionTitle>
            <Lede>
              My path runs through commerce, consulting, two start-ups and organisational behaviour, and
              each one changed how I look at the systems people work inside.
            </Lede>
            <p className="mt-4 max-w-[38rem] font-sans text-[15px] leading-relaxed text-dark-text/75 lg:text-[16px]">
              Teaching at SPJIMR and ISB, consulting for Bosch, HURL, ICAI and Atos, and a seat on the
              PUNCOM board keep the research tied to decisions organisations actually have to make.
            </p>
            <Actions>
              <Button href="/about">Read the full story</Button>
            </Actions>
          </Reveal>
          <Reveal delay={0.1}>
            <Photo shot="C-01" sizes="(max-width: 1024px) 100vw, 50vw" />
          </Reveal>
        </div>
      </SectionShell>

      {/* Education and institutional affiliations ------------------------- */}
      <LogoSection label="Foundations" title="Academic and professional foundations" entries={FOUNDATIONS} />
      <LogoSection label="Organisations" title="Organisations I have advised, worked with and taught for" entries={ORGANISATIONS} marquee />

      {/* Research themes --------------------------------------------------- */}
      <SectionShell label="Research themes" imageSrc="/photos/w-01-desk.jpg">
        <SectionHead
          title="Five strands of research."
          lede="Each one is drawn from my research statement and the papers filed under it."
        />
        <div className="mt-12">
          <ThemeCards />
        </div>
        <Actions>
          <Button href="/research">Research overview</Button>
          <Button href="/publications" variant="secondary">All publications</Button>
        </Actions>
      </SectionShell>

      {/* Metrics ------------------------------------------------------------ */}
      <EngagementBand
        label="Depth of engagement"
        title="Executive classrooms, across India's leading organisations."
        lede="Programmes for managers and senior leaders in banking, technology, manufacturing, consulting, energy and more."
        stats={EXEC_STATS}
      >
        <Reveal className="mt-16 border-t border-white/10 pt-12 lg:mt-20">
          <p className="mb-6 font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-white/60">
            Organisations I have worked with
          </p>
        </Reveal>
        <ClientWall entries={CLIENTS} more="And 100+ more organisations" />
        <Reveal className="mt-12">
          <p className="mb-4 font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-white/60">
            Sectors participants come from
          </p>
          <ul className="flex flex-wrap gap-2">
            {CLIENT_SECTORS.map((s) => (
              <li key={s} className="rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1.5 font-sans text-[13px] text-white/80">
                {s}
              </li>
            ))}
          </ul>
        </Reveal>
      </EngagementBand>

      {/* Selected publications ------------------------------------------- */}
      <SectionShell label="Selected research">
        <SectionHead
          title="What I study, and where it is published."
          lede={`${SELECTED_RESEARCH.length} of the ${journalArticles.length} peer-reviewed papers, each described by what it examines.`}
        />
        <div className="mt-12">
          <PaperCards papers={SELECTED_RESEARCH} />
        </div>
        <Actions>
          <Button href="/publications">See every publication</Button>
        </Actions>
        <Reveal delay={0.1} className="mt-12 border-t border-dark-text/10 pt-8">
          <p className="mb-4 font-sans text-[13px] font-medium text-dark-text/70">Service to the field</p>
          <Chips
            items={[
              'Early Career Review Board, Employee Relations',
              'Editor-in-Chief, NewsBlast (AOM Entrepreneurship Division)',
              'Reviewer, AOM HR and Entrepreneurship Divisions',
              'Case reviewer, IIMB, IIM Raipur and Emerald',
            ]}
          />
        </Reveal>
      </SectionShell>

      {/* Academic and professional experience ----------------------------- */}
      <SectionShell label="Experience" imageSrc="/photos/c-04-global-cohort-two.jpg">
        <SectionHead
          title="Academic and professional experience."
          lede="From two ventures and strategy work to a doctorate, faculty roles and a board seat."
        />
        <ol className="mt-12 grid gap-x-12 gap-y-6 md:grid-cols-2">
          {EXPERIENCE_BY_DATE.map((e, i) => (
            <Reveal key={e.id} delay={0.03 * i} as="li" className="border-t border-dark-text/10 pt-5">
              <p className="font-sans text-[13px] font-medium text-dark-text/70">{e.when}</p>
              <h3 className="mt-1.5 font-serif text-[18px] leading-snug text-dark-text">{e.role}</h3>
              <p className="mt-1 font-sans text-[14px] text-dark-text/80">
                {e.organisation}
                {e.place ? `, ${e.place}` : ''}
              </p>
            </Reveal>
          ))}
        </ol>
        <Actions>
          <Button href="/about">The full journey</Button>
        </Actions>
      </SectionShell>

      {/* Teaching: programme experience ----------------------------------- */}
      <SectionShell label="Teaching" imageSrc="/photos/c-02-lecture-theatre.jpg">
        <SectionHead
          title="Teaching, counted from the record."
          lede="Degree, executive and doctoral teaching at SPJIMR, visiting appointments in Hungary and India, and courses of my own design."
        />
        <div className="mt-12">
          <NumberCards
            cards={[
              { value: String(PROGRAMME_COUNT), tag: 'Degree and executive programmes', title: "Across SPJIMR's portfolio", line: `${SPJIMR_PROGRAMMES.flatMap((p) => p.codes).join(', ')}.` },
              { value: String(MDP_THEMES.length), tag: 'Customised MDP themes', title: 'For corporates, government and the social sector', line: MDP_THEMES.map((m) => m.title).join('; ') + '.' },
              { value: String(CO_DESIGNED_COURSES.length), tag: 'Co-designed electives', title: 'Cinema, cricket and turnarounds', line: 'Netflix & Learn; Pitch to Boardroom; Resilience and Turnaround.' },
              // "fifty women" is the CV's own figure for the BPA lecture.
              { value: '50', tag: 'Inclusive design thinking', title: 'Blind People Association, at IIM Ahmedabad', line: 'A design thinking lecture for fifty women, October 2022.' },
            ]}
          />
        </div>
        <Actions>
          <Button href="/teaching">Teaching and academic engagement</Button>
          <Button href="/programmes" variant="secondary">Executive programmes</Button>
        </Actions>
      </SectionShell>

      {/* Teaching: co-designed courses ----------------------------------- */}
      <SectionShell label="Course design" imageSrc="/photos/c-03-global-cohort.jpg">
        <SectionHead
          eyebrow="Pedagogy"
          title="Leadership taught through cinema, cricket and turnaround stories."
          lede="My courses turn OB and HR concepts into reflective, practical learning, using cinema-based leadership education alongside design thinking, rapid prototyping and gamified teaching tools."
        />
        <div className="mt-12">
          <StackCards
            cards={CO_DESIGNED_COURSES.map((course) => ({
              id: course.title,
              title: course.title,
              subtitle: course.status,
              content: (
                <div className="space-y-4">
                  <p className="font-sans text-[15px] leading-relaxed text-dark-text/80">{course.description}</p>
                  {course.also ? <p className="font-sans text-[14px] leading-relaxed text-dark-text/70">{course.also}</p> : null}
                </div>
              ),
            }))}
          />
        </div>
        <Actions>
          <Button href="#contact">Bring this to your leadership team</Button>
        </Actions>
      </SectionShell>

      {/* Scholarly engagement --------------------------------------------- */}
      <SectionShell label="Scholarly engagement">
        <div className="grid gap-10 lg:grid-cols-[1fr_340px] lg:items-center">
          <SectionHead
            title="Ideas argued out in front of demanding rooms."
            lede="Peer review is a hard audience. So is a lecture hall at the end of a long day."
          />
          <Reveal delay={0.1} className="hidden lg:block">
            <Photo shot="S-04" sizes="340px" />
          </Reveal>
        </div>
        <div className="mt-12">
          <NumberCards
            cards={[
              { value: String(AOM.length), tag: 'Academy of Management', title: `Annual meetings, ${AOM.at(-1)!.when.slice(-4)} to ${AOM[0]!.when.slice(-4)}`, line: 'Virtual, Seattle, Boston, Chicago, Copenhagen and Philadelphia. The Boston paper won the HR Division Best Paper Award.' },
              { value: '2', tag: 'European platforms', title: 'EGOS and EURAM', line: 'The EGOS Colloquium in Vienna (2022) and Cagliari (2023); the European Academy of Management at Trinity Business School, Dublin (2023).' },
              { value: '4.44/5', tag: 'Invited lecture', title: 'Enhancing Research Impact', line: 'A two-hour online lecture for K.R. Mangalam University, with more than 100 participants.' },
              { value: '2023', tag: 'USA', title: 'Babson College Entrepreneurship Research Conference', line: 'Knoxville, June 2023.' },
            ]}
          />
        </div>
        <Actions>
          <Button href="/teaching">Every conference and talk</Button>
          <Button href="#contact" variant="secondary">Invite Dr Kaur to speak</Button>
        </Actions>
      </SectionShell>

      {/* How I help --------------------------------------------------------- */}
      <SectionShell label="How I help" imageSrc="/photos/c-01-boardroom-session.jpg">
        <SectionHead
          title="People problems rarely arrive labelled as people problems."
          lede="They show up as an attrition figure, a tool nobody trusts, a team that hits targets and still doesn't work together. So each engagement starts with diagnosis, draws on research, and ends with choices a leadership team can act on."
        />
        <div className="mt-12">
          <LinkCards
            cards={[
              {
                kicker: 'Advisory',
                title: 'People and HR strategy, from diagnosis up',
                body: 'Retention, leadership systems, learning-organisation and inclusion design, and governance at board level.',
                href: '/advisory/',
                cta: 'Explore an advisory engagement',
              },
              {
                kicker: 'Executive development',
                title: 'Programmes shaped around your context',
                body: 'Leadership, high-performing teams, emotional intelligence, design thinking and AI in HR, for corporates, government and the social sector.',
                href: '/executive-development/',
                cta: 'See programme experience',
              },
              {
                kicker: 'AI and work',
                title: 'Keeping AI accountable to people',
                body: 'Privacy, fairness and trust once algorithms start making decisions about people.',
                href: '/ai-and-the-future-of-work/',
                cta: 'Talk through an AI question',
              },
              {
                kicker: 'Speaking',
                title: 'Sessions that change the conversation',
                body: 'Keynotes, masterclasses and lectures on leadership, AI and HR, sustainable HRM and leadership through cinema.',
                href: '/speaking/',
                cta: 'Explore speaking',
              },
            ]}
          />
        </div>
        <Actions>
          <Button href="/how-i-help">See how I help</Button>
        </Actions>
      </SectionShell>

      <Testimonials title="What people say after the room empties." />

      <ClosingCta
        eyebrow="A useful first conversation"
        title="What people decision is your organisation facing next?"
        body="Bring the problem rather than a format: the context, what is at stake, and who has to live with the outcome. The right kind of engagement usually becomes obvious from there."
        primary={{ label: 'Start a conversation', href: '#contact' }}
        secondary={{ label: 'Connect on LinkedIn', href: LINKEDIN_URL, external: true }}
      />
    </>
  )
}
