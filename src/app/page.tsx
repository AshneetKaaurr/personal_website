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
      {/* Premium Hero — Full screen, large typography, bottom glass bar.  */}
      {/* ---------------------------------------------------------------- */}
      <section className="relative h-screen min-h-[800px] w-full overflow-hidden bg-light-bg">
        {/* React-controlled Apple-Style Glassmorphism Slideshow */}
        <HeroSlideshowBg />

        {/* Faint Watermark Text */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-full text-center pointer-events-none select-none overflow-hidden opacity-[0.03] z-0">
          <span className="font-serif text-[25vw] leading-none whitespace-nowrap tracking-tighter">
            Ashneet
          </span>
        </div>

        {/* Floating Background Stats (Sits BEHIND portrait for depth) */}
        <div className="absolute inset-y-0 right-0 w-full md:w-[320px] lg:w-[400px] flex flex-col justify-center gap-6 px-4 md:px-8 py-32 z-[5] pointer-events-none hidden md:flex">
          <FadeInRight delay={0.6} className="text-right bg-white/50 backdrop-blur-xl p-5 rounded-3xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.1)] pointer-events-auto hover:bg-white/70 transition-colors cursor-default">
            <h4 className="font-sans font-bold text-lg xl:text-xl text-dark-text tracking-tight uppercase mb-1">3 Best-Paper Awards</h4>
            <p className="text-sm text-dark-text/70 leading-relaxed">Recognized at the Academy of Management, EDII, and Anusandhan RDAIS for groundbreaking HR research.</p>
          </FadeInRight>

          <FadeInRight delay={0.8} className="text-right bg-white/50 backdrop-blur-xl p-5 rounded-3xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.1)] pointer-events-auto hover:bg-white/70 transition-colors cursor-default">
            <h4 className="font-sans font-bold text-lg xl:text-xl text-dark-text tracking-tight uppercase mb-1">12+ Published Records</h4>
            <p className="text-sm text-dark-text/70 leading-relaxed">A decade of rigorous research featured in top-tier global management journals.</p>
          </FadeInRight>

          <FadeInRight delay={1.0} className="text-right bg-white/50 backdrop-blur-xl p-5 rounded-3xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.1)] pointer-events-auto hover:bg-white/70 transition-colors cursor-default">
            <h4 className="font-sans font-bold text-lg xl:text-xl text-dark-text tracking-tight uppercase mb-1">Executive Consulting</h4>
            <p className="text-sm text-dark-text/70 leading-relaxed">Strategic engagements with ICAI, Bosch India, HURL, and ATOS across international offices.</p>
          </FadeInRight>
        </div>

        {/* Profile Cutout (Sits behind text, in front of background stats) */}
        <FadeIn delay={0.4} className="absolute inset-0 flex items-end justify-center lg:justify-end pointer-events-none z-10 overflow-visible">
          <img 
            src="/photos/p-05-seated-no-bg.png" 
            alt="Dr Ashneet Kaur" 
            className="w-auto max-w-[200%] h-[80vh] sm:h-[85vh] md:h-[90vh] object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] pointer-events-auto translate-y-0 md:-translate-y-12 lg:-translate-y-24 translate-x-2 sm:translate-x-4 lg:translate-x-12"
          />
        </FadeIn>

        {/* Foreground Text Layer (Overlaps photo) */}
        <div className="absolute inset-0 flex flex-col items-start justify-end md:justify-center px-4 md:px-8 lg:px-24 pb-44 sm:pb-32 md:pb-0 pointer-events-none z-20">
          <div className="w-full md:w-1/2 lg:w-[55%] flex flex-col items-start pt-24 md:pt-0">
            <FadeInRight delay={0.6}>
              <h1 className="font-serif text-[3.5rem] sm:text-6xl md:text-8xl lg:text-[10rem] xl:text-[11rem] leading-[0.9] md:leading-[0.85] tracking-tighter text-dark-text drop-shadow-[0_4px_32px_rgba(255,255,255,1)] mix-blend-normal pointer-events-auto">
                Ashneet<br />Kaur
              </h1>
            </FadeInRight>
            
            <FadeIn delay={0.8} className="w-full mt-2 md:mt-0">
              <HeroBadge />
            </FadeIn>

            <FadeIn delay={1.0} className="w-full mt-2 pointer-events-auto">
              <ContactTrigger />
            </FadeIn>
          </div>
        </div>

        {/* Bottom Glassmorphism Bar */}
        <FadeIn delay={1.2} className="absolute bottom-0 left-0 w-full z-30 glass-dark py-4 md:py-6 px-4 md:px-12 lg:px-24 flex flex-col md:flex-row items-center gap-6 md:gap-12">
          <div className="flex-shrink-0 w-full md:w-auto text-center md:text-left">
            <Link href="#content" className="font-serif text-white text-lg md:text-xl tracking-wide flex items-center justify-center md:justify-start gap-4 group">
              explore <span className="group-hover:translate-x-2 transition-transform duration-300">›</span>
            </Link>
          </div>
          
          <div className="flex-1 w-full flex gap-4 md:gap-8 overflow-x-auto no-scrollbar pb-2 md:pb-0 items-center justify-start md:justify-between mask-edges">
            {PILLARS.slice(0, 4).map(({ href, label, shot }) => (
              <Link key={href} href={href} className="flex items-center gap-4 group min-w-[200px]">
                <div className="w-12 h-12 rounded-full overflow-hidden relative border border-white/20 group-hover:border-coral transition-colors flex-shrink-0">
                  <Frame shot={shot} sizes="48px" className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <span className="font-serif text-sm text-white/70 leading-tight group-hover:text-white transition-colors">
                  {label}
                  <span className="block text-xs text-white/40 mt-1">section ›</span>
                </span>
              </Link>
            ))}
            <Link href="/about" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-dark-text hover:bg-coral hover:text-white transition-colors flex-shrink-0">
              <span className="text-sm tracking-widest font-sans font-medium">all</span>
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
