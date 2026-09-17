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
        
        {/* Dynamic Collage Background */}
        <div className="absolute inset-0 w-full lg:w-1/2 overflow-hidden z-0 opacity-40 mix-blend-multiply">
          <div className="grid grid-cols-3 gap-4 w-[120%] -ml-[10%] h-[200vh] -mt-[50vh] rotate-[-6deg]">
            {/* Column 1 - Down */}
            <div className="flex flex-col gap-4 animate-scroll-y">
              {['C-01', 'E-01', 'M-01', 'P-02', 'C-01', 'E-01'].map((img, i) => (
                <div key={`col1-${i}`} className="relative h-64 w-full rounded-2xl overflow-hidden shadow-lg">
                  <Frame shot={img as ShotRef} sizes="33vw" className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700" />
                </div>
              ))}
            </div>
            {/* Column 2 - Up */}
            <div className="flex flex-col gap-4 animate-scroll-y-reverse">
              {['P-03', 'S-01', 'C-02', 'P-04', 'P-03', 'S-01'].map((img, i) => (
                <div key={`col2-${i}`} className="relative h-80 w-full rounded-2xl overflow-hidden shadow-lg">
                  <Frame shot={img as ShotRef} sizes="33vw" className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700" />
                </div>
              ))}
            </div>
            {/* Column 3 - Down Slow */}
            <div className="flex flex-col gap-4 animate-scroll-y-slow">
              {['E-05', 'P-06', 'S-02', 'C-03', 'E-05', 'P-06'].map((img, i) => (
                <div key={`col3-${i}`} className="relative h-72 w-full rounded-2xl overflow-hidden shadow-lg">
                  <Frame shot={img as ShotRef} sizes="33vw" className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Frosted Glass Overlay for Collage */}
        <div className="absolute inset-0 w-full lg:w-1/2 z-0 bg-white/70 backdrop-blur-xl pointer-events-none" />

        {/* Faint Watermark Text */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full text-center pointer-events-none select-none overflow-hidden opacity-[0.03]">
          <span className="font-serif text-[25vw] leading-none whitespace-nowrap tracking-tighter">
            Ashneet
          </span>
        </div>

        <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2">
          {/* Left: Typography */}
          <div className="flex flex-col justify-center px-12 lg:px-24 z-10 animate-slide-up">
            <span className="font-sans text-sm font-semibold tracking-widest text-sage mb-6">
              01
            </span>
            <h1 className="font-serif text-6xl md:text-8xl lg:text-[9rem] leading-[0.9] tracking-tight text-dark-text mb-8">
              Ashneet<br/>Kaur
            </h1>
            <p className="font-sans text-xl text-sage max-w-md">
              Scholar and educator in Organizational Behaviour and HRM.
            </p>
            
            <div className="mt-16 flex items-center gap-6 font-sans text-sm font-medium tracking-wide">
              <button className="flex items-center gap-2 hover:text-coral transition-colors">
                <span className="text-lg">‹</span> previous
              </button>
              <button className="flex items-center gap-2 text-sage hover:text-coral transition-colors">
                next <span className="text-lg">›</span>
              </button>
            </div>
          </div>

          {/* Right: Main Profile Image */}
          <div className="relative h-full w-full hidden lg:block">
            {/* We use a standard img tag here with object-cover and gradient fade at the bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
            <img 
              src="/photos/p-05-seated.jpg" 
              alt="Dr Ashneet Kaur" 
              className="absolute inset-0 w-full h-full object-cover object-center animate-fade-in"
            />
            
            {/* Text over image (like in the template) */}
            <div className="absolute bottom-40 right-16 z-20 max-w-sm text-white/90 font-sans text-sm leading-relaxed text-right">
              <div className="w-12 h-px bg-white/50 ml-auto mb-4"></div>
              Working at the intersection of human systems, technological change and sustainable organization design.
            </div>
          </div>
        </div>

        {/* Bottom Glassmorphism Bar */}
        <div className="absolute bottom-0 left-0 w-full z-30 glass-dark py-6 px-12 lg:px-24 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-shrink-0">
            <Link href="#content" className="font-serif text-white text-xl tracking-wide flex items-center gap-4 group">
              explore <span className="group-hover:translate-x-2 transition-transform duration-300">›</span>
            </Link>
          </div>
          
          <div className="flex-1 flex gap-8 overflow-x-auto no-scrollbar pb-2 md:pb-0 items-center justify-between">
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
        </div>
      </section>


      <Container>
        <Section title="Where the work has been done">
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

        <Section title="Recent research">
          <ul className="grid gap-8 md:grid-cols-3">
            {recentPapers.map((paper) => (
              <li key={paper.id}>
                <p className="text-sm text-sage">
                  {paper.year}
                  {paper.abdc ? ` — ABDC ${paper.abdc}` : ''}
                </p>
                <h3 className="mt-2 font-serif text-xl leading-snug">
                  {paper.title}
                </h3>
                <p className="mt-2 text-sm text-sage">{paper.venue}</p>
                <p className="mt-3 leading-relaxed">{paper.summary}</p>
              </li>
            ))}
          </ul>

          <p className="mt-8">
            <PageLink href="/publications">All publications</PageLink>
          </p>
        </Section>

        <Section title="Recent activity">
          <Note kind="needs" item="the recent activity strip">
            This strip surfaces the newest item across publications, media,
            speaking and social, with its real date. It is deliberately not
            built from hardcoded entries: a stale freshness signal does more
            damage than none. It ships once the media, speaking and social
            collections carry dates.
          </Note>
        </Section>
      </Container>
    </>
  )
}
