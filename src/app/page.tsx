import Link from 'next/link'
import type { Route } from 'next'

import { Frame } from '@/components/Frame'
import {
  Container,
  Note,
  PageLink,
  Record,
  RecordList,
  Section,
} from '@/components/Page'
import { FadeIn, FadeInRight, ScaleIn } from '@/components/Motion'
import { HeroSlideshowBg, HeroBadge } from '@/components/HeroSlideshow'
import { ContactTrigger } from '@/components/ContactTrigger'
import { byRecency, journalArticles } from '@/content/publications'
import type { ShotRef } from '@/lib/shots'

/**
 * Home. BUILD-PLAN.md §8.
 *
 * Opens on the screen surface and stays there through the contact sheet, then
 * moves to print for reading. Two surfaces, one switch.
 *
 * The positioning line is NOT on this page. She has not approved one, and
 * BUILD-PLAN.md §8 is explicit: do not ship a placeholder line — the hero
 * holds her name and her descriptor only. The descriptor below is her own
 * wording from the CV profile summary, not a line written for her.
 */

interface Pillar {
  href: Route
  label: string
  shot: ShotRef
  /** What this pillar is, in her register. Drawn from the CV. */
  note: string
}

/**
 * The contact sheet — six frames, one per pillar. The signature element, and
 * the reason the shot list is a blocking dependency. Six real photographs, not
 * six identical cards. BUILD-PLAN.md §8.
 *
 * All six are 3:2. A contact sheet is a sheet of identically-sized frames —
 * that is what makes it read as one. Mixing the 4:5 portrait in among them
 * pushed its row out of alignment and the grid stopped looking like a sheet
 * and started looking like a bug. The 4:5 ratio still carries every portrait
 * elsewhere on the site; it just cannot sit inside this particular grid.
 */
const PILLARS: Pillar[] = [
  {
    href: '/about',
    label: 'About',
    shot: 'P-04',
    note: 'SRCC to Delhi School of Economics, Deloitte, McKinsey, ATOS, a PhD at IIM Ahmedabad, and two ventures founded along the way.',
  },
  {
    href: '/research',
    label: 'Research',
    shot: 'W-01',
    note: 'What AI-driven systems do to employee privacy, trust and engagement, and the ethics of algorithmic decisions in HR.',
  },
  {
    href: '/training',
    label: 'Training',
    shot: 'C-01',
    note: 'Leadership through cinema, strategy through Indian cricket, resilience through turnaround stories. Three co-designed courses.',
  },
  {
    href: '/media',
    label: 'Media Articles',
    shot: 'P-06',
    note: 'Eight published pieces, from the vanishing first job in the age of AI to sustainable leadership.',
  },
  {
    href: '/speaker',
    label: 'Speaker',
    shot: 'P-03',
    note: 'Five Academy of Management annual meetings across six years, EGOS, EURAM, BCERC.',
  },
  {
    href: '/consulting',
    label: 'Consulting',
    shot: 'M-02',
    note: 'Management development programmes, and consulting engagements with ICAI, Bosch India, HURL and ATOS.',
  },
]

export default function Home() {
  const recentPapers = [...journalArticles].sort(byRecency).slice(0, 3)

  return (
    <>
      {/* ---------------------------------------------------------------- */}
      {/* Hero. Layered back to front:                                     */}
      {/*   background slideshow -> portrait -> type -> glass -> pillars    */}
      {/* The slideshow, the portrait cutout and the feats control are all  */}
      {/* preserved from the existing build. What changed is scale,         */}
      {/* hierarchy and spacing, not the composition.                       */}
      {/* ---------------------------------------------------------------- */}
      <section className="relative flex min-h-[100svh] w-full flex-col overflow-hidden bg-light-bg">
        <HeroSlideshowBg />

        {/* Watermark, faint enough to read as paper texture. */}
        <div className="pointer-events-none absolute top-1/2 right-0 z-0 w-full -translate-y-1/2 select-none overflow-hidden text-center opacity-[0.035]">
          <span className="font-serif text-[22vw] leading-none tracking-tighter whitespace-nowrap">
            Ashneet
          </span>
        </div>

        {/* Two columns: type left, portrait right. Stable at every width. */}
        <div className="relative z-20 mx-auto flex w-full max-w-[1400px] flex-1 flex-col gap-10 px-5 pt-28 pb-8 sm:px-8 lg:grid lg:grid-cols-[54fr_46fr] lg:items-center lg:gap-10 lg:px-12 lg:pt-32 lg:pb-16">

          {/* ---------- Left: identity, question, support, actions ------- */}
          <div className="flex flex-col items-start">
            <FadeIn delay={0.35}>
              <p className="font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-dark-text/55">
                Dr Ashneet Kaur
              </p>
            </FadeIn>

            <FadeInRight delay={0.45}>
              <h1 className="mt-5 font-serif text-[clamp(2.4rem,5vw,5.375rem)] leading-[0.94] tracking-[-0.02em] text-dark-text">
                What happens to people
                <br className="hidden sm:block" /> when the systems
                <br className="hidden sm:block" /> around them change?
              </h1>
            </FadeInRight>

            <FadeIn delay={0.6}>
              <p className="mt-7 max-w-[46ch] font-sans text-[15px] leading-relaxed text-dark-text/70">
                Scholar and educator in Organizational Behaviour and Human
                Resource Management, working at the intersection of human
                systems, technological change and sustainable organization
                design.
              </p>
            </FadeIn>

            <FadeIn delay={0.75}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="#content"
                  className="group inline-flex items-center gap-3 rounded-full bg-dark-text/90 px-6 py-3 font-sans text-[13px] font-medium tracking-wide text-white backdrop-blur-xl transition-colors hover:bg-dark-text"
                >
                  Explore the work
                  <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                </Link>
                <ContactTrigger />
              </div>
            </FadeIn>

            {/* Feats bar. Also the only slideshow control, so it stays. */}
            <FadeIn delay={0.9} className="mt-9 w-full">
              <HeroBadge />
            </FadeIn>
          </div>

          {/* ---------- Right: portrait in a glass frame, with pills ------ */}
          <div className="relative flex min-h-[48svh] items-end justify-center lg:h-[70svh] lg:min-h-0 lg:justify-end">
            <ScaleIn delay={0.3} className="relative h-full w-full max-w-[520px]">
              {/* The glass frame. Kept lighter than the photograph. */}
              <div className="absolute inset-x-0 bottom-0 top-6 rounded-[32px] border border-white/55 bg-white/25 shadow-[0_20px_70px_rgba(30,30,25,0.09)] backdrop-blur-[20px]" />

              {/* The existing cutout, overflowing the frame for depth. */}
              <img
                src="/photos/p-05-seated-no-bg.png"
                alt="Dr Ashneet Kaur"
                className="absolute inset-0 h-full w-full object-contain object-bottom drop-shadow-[0_24px_48px_rgba(30,30,25,0.22)]"
              />

              {/* Evidence. Small capsules that support the portrait. */}
              <FadeInRight
                delay={0.95}
                className="absolute left-0 top-[15%] flex items-baseline gap-2.5 rounded-full border border-white/60 bg-white/45 px-4 py-2 shadow-[0_8px_28px_rgba(30,30,25,0.08)] backdrop-blur-xl"
              >
                <span className="font-serif text-xl leading-none text-dark-text">03</span>
                <span className="font-sans text-[10px] font-medium uppercase tracking-[0.14em] text-dark-text/60">
                  Best-paper awards
                </span>
              </FadeInRight>

              <FadeInRight
                delay={1.05}
                className="absolute right-0 top-[38%] flex items-baseline gap-2.5 rounded-full border border-white/60 bg-white/45 px-4 py-2 shadow-[0_8px_28px_rgba(30,30,25,0.08)] backdrop-blur-xl"
              >
                <span className="font-serif text-xl leading-none text-dark-text">10</span>
                <span className="font-sans text-[10px] font-medium uppercase tracking-[0.14em] text-dark-text/60">
                  Journal publications
                </span>
              </FadeInRight>

              {/* Research statement, across the foot of the portrait. */}
              <FadeIn
                delay={1.15}
                className="absolute inset-x-2 bottom-5 rounded-[22px] border border-white/60 bg-white/50 px-5 py-3.5 shadow-[0_10px_34px_rgba(30,30,25,0.09)] backdrop-blur-xl"
              >
                <p className="font-sans text-[12.5px] leading-relaxed text-dark-text/75">
                  Researching how technology changes trust, behaviour and the
                  experience of work.
                </p>
              </FadeIn>
            </ScaleIn>
          </div>
        </div>

        {/* Pillar rail. Slimmed so the hero still clears a 900px viewport. */}
        <FadeIn delay={1.25} className="relative z-30 w-full border-t border-white/40 bg-white/35 backdrop-blur-2xl">
          <div className="mx-auto flex w-full max-w-[1400px] items-center gap-6 px-5 py-3 sm:px-8 lg:px-12">
            <div className="no-scrollbar flex flex-1 items-center gap-7 overflow-x-auto">
              {PILLARS.slice(0, 4).map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="group flex shrink-0 items-center gap-2 font-sans text-[12px] tracking-wide text-dark-text/60 transition-colors hover:text-dark-text"
                >
                  {label}
                  <span className="text-dark-text/30 transition-transform group-hover:translate-x-0.5">
                    &rsaquo;
                  </span>
                </Link>
              ))}
            </div>
            <Link
              href="/about"
              className="shrink-0 font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-dark-text/50 transition-colors hover:text-coral"
            >
              All
            </Link>
          </div>
        </FadeIn>
      </section>


      <Container id="content">
        <Section title="Where the work has been done" intro="A foundation in research and practice, linking organisational behaviour to strategic outcomes.">
          <RecordList columns={3}>
            <Record label="Doctorate">
              PhD in Human Resource Management, IIM Ahmedabad, 2018 to 2023
            </Record>
            <Record label="Faculty">
              Assistant Professor, Organisation and Leadership Studies, SPJIMR
              Mumbai, April 2023 to March 2026
            </Record>
            <Record label="Board">
              Independent Director, Punjab Communications Limited, April 2026 to
              present
            </Record>
            <Record label="Certification">
              SHRM Senior Certified Professional, August 2024 to August 2027
            </Record>
            <Record label="Faculty development">
              Wharton Global Faculty Development Programme, 2025
            </Record>
            <Record label="Recognition">
              Three best-paper awards: Academy of Management 2023, EDII 2023,
              Anusandhan RDAIS 2025
            </Record>
          </RecordList>

          <Note kind="needs" item="her current role and institution">
            The CV header carries an isb.edu address, but the teaching record
            ends at SPJIMR in March 2026 and lists no ISB appointment. Nothing
            on this site names a current employer until she confirms one. This
            is the single highest-value answer outstanding: it blocks both bios,
            About, the press kit and every page&apos;s metadata.
          </Note>
        </Section>

        <Section title="Recent research" intro="Latest published work from a decade of research.">
          <ul className="grid gap-6 md:grid-cols-3">
            {recentPapers.map((paper) => (
              <li 
                key={paper.id}
                className="group rounded-2xl bg-white/50 backdrop-blur-md border border-white/50 p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:bg-white/70 transition-all duration-300 flex flex-col"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-dark-text/5 text-xs font-medium text-dark-text">
                    {paper.year}
                  </span>
                  {paper.abdc ? (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-coral/10 text-xs font-medium text-coral">
                      ABDC {paper.abdc}
                    </span>
                  ) : null}
                </div>
                <h3 className="font-serif text-lg leading-snug group-hover:text-coral transition-colors mb-2">
                  {paper.title}
                </h3>
                <p className="text-sm text-sage mb-3">{paper.venue}</p>
                <p className="leading-relaxed text-dark-text/70 text-sm flex-1">{paper.summary}</p>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex justify-end">
            <PageLink href="/publications">View all publications</PageLink>
          </div>
        </Section>
      </Container>
    </>
  )
}
