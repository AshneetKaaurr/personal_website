import Image from 'next/image'

import { LOGO_CARD, LogoCardBody } from '@/components/LogoCard'
import { LogoMarquee } from '@/components/LogoMarquee'
import { Reveal, SectionShell } from '@/components/Shell'
import { journalArticles } from '@/content/publications'
import { AOM, ARTICLES, AWARDS } from '@/content/record'
import { EXPERIENCE_BY_DATE } from '@/content/experience'
import { PROGRAMME_COUNT } from '@/content/teaching'
import {
  Actions,
  Bullets,
  Button,
  CARD,
  CARD_STATIC,
  Chips,
  SectionHead,
} from '@/components/ui'
import type { LogoEntry } from '@/content/logos'

/**
 * Reusable page blocks. Each one is a section-level pattern that appears on
 * more than one page.
 */

// ---------------------------------------------------------------------------
// Stat band
// ---------------------------------------------------------------------------

export interface Stat {
  value: string
  label: string
  sub: string
}

const abdcA = journalArticles.filter((p) => p.abdc === 'A').length
const mpi = ARTICLES.find((a) => a.reachFigure)

/** The headline band. Every value is computed from the content records. */
export const CV_STATS: Stat[] = [
  { value: String(journalArticles.length), label: 'Peer-reviewed papers', sub: `${abdcA} in ABDC-A ranked journals` },
  { value: String(AWARDS.length), label: 'Best Paper Awards', sub: 'AOM HR Division, EDII and Anusandhan RDAIS' },
  { value: String(AOM.length), label: 'Academy of Management meetings', sub: `Every year, ${AOM.at(-1)!.when.slice(-4)} to ${AOM[0]!.when.slice(-4)}` },
  ...(mpi?.reachFigure ? [{ value: mpi.reachFigure, label: 'Downloads of one article', sub: 'Most-read of 30+ in Management Practice Insight' }] : []),
]

export function StatBand({ stats = CV_STATS }: { stats?: Stat[] }) {
  return (
    <ul className={`grid overflow-hidden sm:grid-cols-2 lg:grid-cols-4 ${CARD_STATIC}`}>
      {stats.map((s, i) => (
        <Reveal
          key={s.label}
          as="li"
          delay={0.06 * i}
          className="flex h-full flex-col border-dark-text/[0.08] p-7 lg:p-8 [&:not(:first-child)]:border-t sm:[&:nth-child(2)]:border-t-0 sm:[&:nth-child(even)]:border-l lg:[&:not(:first-child)]:border-t-0 lg:[&:not(:first-child)]:border-l"
        >
          <p className="font-serif text-[clamp(2.4rem,4vw,3.4rem)] leading-none text-dark-text tabular-nums">{s.value}</p>
          <span aria-hidden="true" className="mt-5 h-px w-8 bg-coral" />
          <p className="mt-4 font-sans text-[14px] font-medium text-dark-text">{s.label}</p>
          <p className="mt-1.5 font-sans text-[13px] leading-relaxed text-dark-text/70">{s.sub}</p>
        </Reveal>
      ))}
    </ul>
  )
}

const visiting = EXPERIENCE_BY_DATE.filter((e) => e.kind === 'visiting').length

/** The engagement band: research and teaching together. Computed, like CV_STATS. */
export const ENGAGEMENT_STATS: Stat[] = [
  { value: String(journalArticles.length), label: 'Peer-reviewed papers', sub: `${abdcA} in ABDC-A ranked journals` },
  { value: String(AWARDS.length), label: 'Best Paper Awards', sub: 'AOM HR Division, EDII and Anusandhan RDAIS' },
  { value: String(PROGRAMME_COUNT), label: 'Programmes taught at SPJIMR', sub: `Plus ${visiting} visiting and guest appointments` },
  ...(mpi?.reachFigure ? [{ value: mpi.reachFigure, label: 'Downloads of one article', sub: 'Most-read of 30+ in Management Practice Insight' }] : []),
]

/** Splits "5,900+" into the number and a trailing mark, so the mark can take the accent. */
function splitValue(v: string) {
  const m = v.match(/^([\d.,]+)(.*)$/)
  return m ? [m[1]!, m[2]!] : [v, '']
}

/**
 * A full-bleed dark band of headline figures: coral light and concentric
 * rings behind, numbers in the display face with the accent on the trailing
 * mark, ruled columns on wide screens.
 */
export function EngagementBand({
  label,
  title,
  lede,
  stats = ENGAGEMENT_STATS,
  children,
}: {
  label: string
  title: string
  lede?: string
  stats?: Stat[]
  children?: React.ReactNode
}) {
  return (
    <section className="relative w-full overflow-hidden bg-dark-text py-20 text-white lg:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-[30%] -right-[10%] h-[60vmax] w-[60vmax] bg-[radial-gradient(closest-side,rgba(224,122,95,0.28),transparent)]" />
        <div className="absolute -bottom-[40%] -left-[10%] h-[55vmax] w-[55vmax] bg-[radial-gradient(closest-side,rgba(129,152,139,0.25),transparent)]" />
        {/* Concentric rings, bottom right. */}
        <div className="absolute -right-[12rem] -bottom-[16rem] h-[44rem] w-[44rem] rounded-full border-[3.5rem] border-white/[0.035]" />
        <div className="absolute -right-[4rem] -bottom-[8rem] h-[28rem] w-[28rem] rounded-full border-[2.5rem] border-white/[0.03]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <p className="flex items-center gap-4">
            <span aria-hidden="true" className="h-px w-10 bg-coral" />
            <span className="font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-coral">{label}</span>
          </p>
          <h2 className="mt-6 max-w-[22ch] text-balance font-serif text-[clamp(2.2rem,4.4vw,4rem)] leading-[1.05] tracking-tight">
            {title}
          </h2>
          {lede ? <p className="mt-5 max-w-2xl font-sans text-[15px] leading-relaxed text-white/65">{lede}</p> : null}
        </Reveal>

        <ul className="mt-14 grid gap-y-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {stats.map((s, i) => {
            const [num, mark] = splitValue(s.value)
            return (
              <Reveal
                key={s.label}
                as="li"
                delay={0.08 * i}
                className="border-white/10 sm:pr-8 sm:even:border-l sm:even:pl-8 lg:border-l lg:pl-8 lg:first:border-l-0 lg:first:pl-0"
              >
                <p className="font-serif text-[clamp(3rem,5.2vw,4.75rem)] leading-none tracking-tight tabular-nums">
                  {num}
                  {mark ? <span className="text-coral">{mark}</span> : null}
                </p>
                <p className="mt-6 max-w-[16ch] font-sans text-[12.5px] font-semibold uppercase leading-snug tracking-[0.14em]">
                  {s.label}
                </p>
                <p className="mt-4 max-w-[26ch] font-sans text-[13.5px] leading-relaxed text-white/60">{s.sub}</p>
              </Reveal>
            )
          })}
        </ul>
        {children}
      </div>
    </section>
  )
}

/** Executive-education figures, as supplied by Dr Kaur's office (G1). */
export const EXEC_STATS: Stat[] = [
  { value: '3,000+', label: 'Executives taught', sub: 'Managers and senior leaders across open and custom programmes' },
  { value: '20+', label: 'Executive programmes', sub: 'Designed and delivered for corporates and institutions' },
  { value: '4.5+', label: 'Average participant rating', sub: 'Out of 5, across programme feedback' },
  { value: '120+', label: 'Organisations represented', sub: 'From SBI and Goldman Sachs to L&T, ONGC and EY' },
]

/** The executive-education figures as a light band, for inner pages. */
export function ExecStatBand() {
  return (
    <div className="mt-6">
      <StatBand stats={EXEC_STATS} />
    </div>
  )
}

/**
 * Client names for a dark band: white tiles so supplied logos keep their own
 * colours, the name set as a wordmark until the file arrives.
 */
export function ClientWall({ entries, more }: { entries: LogoEntry[]; more?: string }) {
  return (
    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
      {entries.map((entry, i) => (
        <Reveal key={entry.name} as="li" delay={0.03 * i}>
          <div
            title={entry.name}
            className="group/logo flex h-24 items-center justify-center rounded-2xl bg-white/[0.94] px-5 shadow-[inset_0_1px_0_rgba(255,255,255,1),0_10px_30px_-14px_rgba(0,0,0,0.5)] transition-[translate,background-color,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:bg-white hover:shadow-[0_0_0_2px_rgba(224,122,95,0.9),0_22px_40px_-14px_rgba(224,122,95,0.45)]"
          >
            {entry.logo ? (
              <span className="relative block h-14 w-full">
                <Image src={entry.logo} alt={entry.name} fill sizes="140px" className="object-contain transition-transform duration-500 ease-out group-hover/logo:scale-110" />
              </span>
            ) : (
              <span className="text-center font-serif text-[17px] leading-tight font-semibold tracking-tight text-dark-text">
                {entry.name}
              </span>
            )}
          </div>
        </Reveal>
      ))}
      {more ? (
        <Reveal
          as="li"
          delay={0.03 * entries.length}
          className="flex h-24 items-center justify-center rounded-2xl border border-coral/50 px-4 text-center font-sans text-[13px] font-medium leading-snug text-coral"
        >
          {more}
        </Reveal>
      ) : null}
    </ul>
  )
}

// ---------------------------------------------------------------------------
// Logo strip
// ---------------------------------------------------------------------------

export function LogoStrip({ entries }: { entries: LogoEntry[] }) {
  return (
    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
      {entries.map((entry, i) => (
        <Reveal key={entry.name} delay={0.03 * i} as="li">
          <div className={LOGO_CARD}>
            <LogoCardBody entry={entry} />
          </div>
        </Reveal>
      ))}
    </ul>
  )
}

export function LogoSection({
  title,
  entries,
  label,
  marquee = false,
}: {
  title: string
  entries: LogoEntry[]
  label: string
  /** Scroll the logos in an endless row instead of a grid. */
  marquee?: boolean
}) {
  return (
    <SectionShell label={label} className="py-16 lg:py-20">
      <Reveal>
        <h2 className="mx-auto mb-8 max-w-[30ch] text-center text-balance font-serif text-[clamp(1.4rem,2.2vw,1.9rem)] leading-snug text-dark-text">
          {title}
        </h2>
      </Reveal>
      {marquee ? <LogoMarquee entries={entries} /> : <LogoStrip entries={entries} />}
    </SectionShell>
  )
}

// ---------------------------------------------------------------------------
// Closing CTA
// ---------------------------------------------------------------------------

export function ClosingCta({
  eyebrow,
  title,
  body,
  primary,
  secondary,
  imageSrc = '/photos/p-07-daylight.jpg',
}: {
  eyebrow: string
  title: string
  body?: string
  primary: { label: string; href: string }
  secondary?: { label: string; href: string; external?: boolean }
  imageSrc?: string
}) {
  return (
    // The card hangs over the top of the footer; `footer-overlap` tells the
    // footer to make room (globals.css).
    <SectionShell label={eyebrow} imageSrc={imageSrc} id="contact" className="footer-overlap overflow-visible! pb-0! lg:pb-0!">
      <div className={`relative -mb-20 overflow-hidden p-8 sm:p-12 lg:-mb-28 lg:p-16 ${CARD_STATIC} bg-white/85! shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_30px_70px_-20px_rgba(10,15,12,0.45)]!`}>
        <SectionHead title={title} lede={body} />
        <Actions>
          <Button href={primary.href}>{primary.label}</Button>
          {secondary ? (
            <Button href={secondary.href} variant="secondary" external={secondary.external}>
              {secondary.label}
            </Button>
          ) : null}
        </Actions>
      </div>
    </SectionShell>
  )
}

// ---------------------------------------------------------------------------
// Cards
// ---------------------------------------------------------------------------

export interface NumberCardData {
  value: string
  tag: string
  title: string
  line: string
}

/** Number + tag + title + one line. Programme and speaking evidence on Home. */
export function NumberCards({ cards }: { cards: NumberCardData[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((c, i) => (
        <Reveal key={c.title} delay={0.07 * i}>
          <article className={`flex h-full flex-col p-7 ${CARD_STATIC}`}>
            <p className="font-serif text-[44px] leading-none text-dark-text tabular-nums">{c.value}</p>
            <p className="mt-4 font-sans text-[13px] font-medium text-dark-text/70">{c.tag}</p>
            <h3 className="mt-3 font-serif text-[19px] leading-snug text-dark-text">{c.title}</h3>
            <p className="mt-3 flex-1 font-sans text-[14px] leading-relaxed text-dark-text/75">
              {c.line}
            </p>
          </article>
        </Reveal>
      ))}
    </div>
  )
}

export interface LinkCardData {
  kicker: string
  title: string
  body: string
  href: string
  cta: string
}

export function LinkCards({ cards, columns = 4 }: { cards: LinkCardData[]; columns?: 2 | 3 | 4 }) {
  const cols = columns === 4 ? 'lg:grid-cols-4' : columns === 3 ? 'lg:grid-cols-3' : ''
  return (
    <div className={`grid gap-5 sm:grid-cols-2 ${cols}`}>
      {cards.map((c, i) => (
        <Reveal key={c.title} delay={0.07 * i}>
          <article className={`group flex h-full flex-col p-7 lg:p-8 ${CARD}`}>
            <p className="font-sans text-[13px] font-medium text-dark-text/70">{c.kicker}</p>
            <h3 className="mt-3 font-serif text-[21px] leading-snug text-dark-text">{c.title}</h3>
            <p className="mt-4 flex-1 font-sans text-[14.5px] leading-relaxed text-dark-text/75">
              {c.body}
            </p>
            <div className="mt-6 border-t border-dark-text/[0.07] pt-4">
              <TextLinkSmall href={c.href}>{c.cta}</TextLinkSmall>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  )
}

function TextLinkSmall({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="group/link inline-flex items-center gap-2 font-sans text-[13.5px] font-medium text-dark-text transition-colors hover:text-coral"
    >
      {children}
      <span aria-hidden="true" className="text-coral transition-transform duration-500 group-hover/link:translate-x-1">
        &rarr;
      </span>
    </a>
  )
}

/**
 * The brief pattern: what a client says when they arrive, then what the work
 * is. Used on How I Help, Advisory, Executive Development and Coaching.
 */
export function BriefCard({
  kicker,
  quote,
  title,
  body,
  bullets,
  chips,
  chipsLabel,
  links,
}: {
  kicker?: string
  quote: string
  title?: string
  body?: React.ReactNode
  bullets?: React.ReactNode[]
  chips?: string[]
  chipsLabel?: string
  links?: { label: string; href: string }[]
}) {
  return (
    <Reveal>
      <article className={`grid gap-8 p-7 sm:p-10 lg:grid-cols-[40fr_60fr] lg:gap-12 lg:p-12 ${CARD_STATIC}`}>
        <div>
          {kicker ? (
            <p className="font-sans text-[13px] font-medium text-dark-text/70">{kicker}</p>
          ) : null}
          <blockquote className="mt-3 border-l-2 border-coral/60 pl-5 font-serif text-[clamp(1.25rem,2vw,1.6rem)] leading-snug text-dark-text">
            &ldquo;{quote}&rdquo;
          </blockquote>
        </div>
        <div>
          {title ? <h3 className="font-serif text-[22px] leading-snug text-dark-text">{title}</h3> : null}
          {body ? (
            <div className="mt-3 space-y-3 font-sans text-[15px] leading-relaxed text-dark-text/80">{body}</div>
          ) : null}
          {bullets ? <div className="mt-5"><Bullets items={bullets} /></div> : null}
          {chips ? (
            <div className="mt-6">
              {chipsLabel ? (
                <p className="mb-2.5 font-sans text-[12.5px] font-medium text-dark-text/70">{chipsLabel}</p>
              ) : null}
              <Chips items={chips} />
            </div>
          ) : null}
          {links ? (
            <div className="mt-7 flex flex-wrap gap-x-8 gap-y-3">
              {links.map((l) => (
                <TextLinkSmall key={l.label} href={l.href}>
                  {l.label}
                </TextLinkSmall>
              ))}
            </div>
          ) : null}
        </div>
      </article>
    </Reveal>
  )
}

/** Numbered stages. Used only where the order genuinely matters. */
export function Steps({ steps }: { steps: { title: string; body: React.ReactNode }[] }) {
  return (
    <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      {steps.map((s, i) => (
        <Reveal key={s.title} delay={0.07 * i} as="li" className={`flex h-full flex-col p-7 ${CARD_STATIC}`}>
          <span className="font-serif text-[15px] text-dark-text/65">Stage {i + 1}</span>
          <h3 className="mt-3 font-serif text-[21px] leading-snug text-dark-text">{s.title}</h3>
          <div className="mt-3 font-sans text-[14.5px] leading-relaxed text-dark-text/75">{s.body}</div>
        </Reveal>
      ))}
    </ol>
  )
}

/** A vertical record of dated entries. */
export function Timeline({
  items,
}: {
  items: { when: string; title: string; body: React.ReactNode }[]
}) {
  return (
    <ol className="relative space-y-6 border-l border-dark-text/15 pl-6 sm:pl-10">
      {items.map((item, i) => (
        <Reveal key={item.title} delay={0.05 * i} as="li" className="relative">
          <div>
            <span
              aria-hidden="true"
              className="absolute top-8 -left-[29px] h-2.5 w-2.5 rounded-full bg-coral sm:-left-[45px]"
            />
            <div className={`p-7 lg:p-9 ${CARD_STATIC}`}>
              <p className="font-sans text-[13px] font-medium text-dark-text/70">{item.when}</p>
              <h3 className="mt-2 font-serif text-[22px] leading-snug text-dark-text">{item.title}</h3>
              <div className="mt-3 space-y-3 font-sans text-[14.5px] leading-relaxed text-dark-text/80">
                {item.body}
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </ol>
  )
}

/** Label/value pairs in a ruled grid, as on the home record band. */
export function RuledList({
  items,
  columns = 3,
}: {
  items: { label: React.ReactNode; value: React.ReactNode }[]
  columns?: 2 | 3
}) {
  return (
    <ul className={`grid gap-x-12 gap-y-8 sm:grid-cols-2 ${columns === 3 ? 'lg:grid-cols-3' : ''}`}>
      {items.map((r, i) => (
        <Reveal key={i} as="li" delay={0.04 * i} className="border-t border-dark-text/10 pt-5">
          <h3 className="font-serif text-[18px] leading-snug text-dark-text">{r.label}</h3>
          <div className="mt-2.5 font-sans text-[14.5px] leading-relaxed text-dark-text/80">{r.value}</div>
        </Reveal>
      ))}
    </ul>
  )
}

