'use client'

import Link from 'next/link'
import type { Route } from 'next'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

import { byRecency, journalArticles, publications } from '@/content/publications'
import {
  AOM,
  ARTICLES,
  AWARDS,
  CO_DESIGNED_COURSES,
  PROGRAMMES,
  VISITING,
} from '@/content/record'
import { THEMES, themeHref } from '@/content/themes'
import { StackCards } from '@/components/StackCards'

/**
 * Landing page sections, 03 onward.
 *
 * Every section here is built from the vocabulary the hero already
 * established, so the page reads as one document rather than a stack of
 * templates:
 *
 *   ivory ground, Playfair for display, Inter for data
 *   a numbered eyebrow per section
 *   white glass at 40-60% over thin architectural borders
 *   coral used once per section, never twice
 *   a faint serif word behind the type, at 2-3%
 *   motion on entry only, editorial easing, nothing looping
 *
 * The hero itself is not touched by any of this.
 */

const EASE = [0.22, 1, 0.36, 1] as const

/** Scroll-triggered entry. Everything below the fold uses this, not `animate`. */
function Reveal({
  children,
  delay = 0,
  y = 22,
  className,
}: {
  children: React.ReactNode
  delay?: number
  y?: number
  className?: string
}) {
  const reduced = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduced ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, ease: EASE, delay: reduced ? 0 : delay }}
    >
      {children}
    </motion.div>
  )
}

/**
 * The shell every section below the hero sits in: ivory ground, one faint
 * watermark word, a little architectural geometry on a slow parallax, and the
 * numbered eyebrow.
 */
function SectionShell({
  index,
  label,
  word,
  children,
  id,
  className,
  imageSrc,
}: {
  index: string
  label: string
  /** The faint serif word behind the type. One per section. */
  word: string
  children: React.ReactNode
  id?: string
  className?: string
  imageSrc?: string
}) {
  const ref = useRef<HTMLElement>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const slow = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [0, -14])
  const fast = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [0, -30])

  return (
    <section
      ref={ref}
      id={id}
      className={`relative w-full bg-light-bg py-20 lg:py-28 ${className ?? ''}`}
    >
      {/* Background Image with frost effect */}
      {imageSrc && (
        <>
          <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imageSrc}
              alt=""
              className="w-full h-full object-cover grayscale"
            />
          </div>
          <div className="absolute inset-0 z-0 pointer-events-none bg-light-bg/40 backdrop-blur-md" />
        </>
      )}

      {/* The word sitting behind the type, at the hero's own opacity. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none font-serif text-[22vw] leading-none tracking-tighter whitespace-nowrap text-dark-text opacity-[0.022]"
      >
        {word}
      </span>

      {/* Architectural geometry, in the hero's vocabulary. */}
      <div className="pointer-events-none absolute inset-0 hidden md:block z-0" aria-hidden="true">
        <motion.div
          style={{ y: slow }}
          className="absolute top-[12%] right-[5%] h-[64%] w-[38%] border border-dark-text/[0.07]"
        />
        <motion.div
          style={{ y: fast }}
          className="absolute bottom-[14%] left-[3%] aspect-square w-[7%] border border-dark-text/[0.10] bg-sage/[0.05]"
        />
        <motion.div
          style={{ y: slow }}
          className="absolute top-[26%] left-[-6%] h-px w-[28%] bg-dark-text/[0.09]"
        />
      </div>

      <div className="relative z-20 mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <div className="mb-10 flex items-center gap-4">
            <span className="h-px flex-1 bg-dark-text/10" />
            <span className="font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-dark-text/50 lg:text-[11px] text-right">
              {label} / {index}
            </span>
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  )
}

/** The section headline, at the same scale the Question section settled on. */
function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="max-w-[20ch] font-serif text-[clamp(1.85rem,3.4vw,3rem)] leading-[1.12] tracking-tight text-dark-text">
      {children}
    </h2>
  )
}

function Lede({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-6 max-w-[34rem] font-sans text-[15px] leading-relaxed text-dark-text/70 lg:text-[16px]">
      {children}
    </p>
  )
}

const CARD =
  'rounded-2xl border border-white/55 bg-white/45 shadow-[0_2px_14px_rgba(30,30,25,0.04)] backdrop-blur-xl transition-all duration-500 hover:bg-white/65 hover:shadow-[0_14px_44px_rgba(30,30,25,0.09)]'

/* ------------------------------------------------------------------ */
/* 03 — Research                                                       */
/* ------------------------------------------------------------------ */

export function ResearchSection() {
  return (
    <SectionShell index="03" label="Research" word="Research" id="content" imageSrc="/photos/research.jpg">
      <div className="grid gap-10 lg:grid-cols-[42fr_58fr] lg:items-end lg:gap-14">
        <div>
          <SectionTitle>Four ways I follow the question</SectionTitle>
          <Lede>
            Each strand asks the same thing of a different part of working life:
            what the system promises, and what it actually does to the people
            inside it.
          </Lede>
        </div>
        <Reveal delay={0.1} className="lg:pb-2">
          <p className="font-sans text-[13px] leading-relaxed text-dark-text/50">
            {publications.length} published records across the four, three of
            them recognised with best-paper awards.
          </p>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {THEMES.map((theme, i) => {
          const count = publications.filter((p) => p.theme === theme.id).length
          return (
            <Reveal key={theme.id} delay={0.08 * i}>
              <Link
                href={themeHref(theme.id)}
                className={`group flex h-full flex-col p-7 lg:p-8 ${CARD}`}
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-serif text-[15px] text-coral/70">
                    0{i + 1}
                  </span>
                  <h3 className="font-serif text-[22px] leading-snug text-dark-text transition-colors group-hover:text-coral lg:text-[25px]">
                    {theme.title}
                  </h3>
                </div>
                <p className="mt-4 flex-1 font-sans text-[14.5px] leading-relaxed text-dark-text/65">
                  {theme.statement}
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-dark-text/[0.07] pt-4">
                  <span className="font-sans text-[11px] uppercase tracking-[0.16em] text-dark-text/45">
                    {count} {count === 1 ? 'record' : 'records'}
                  </span>
                  <span className="font-sans text-[12px] text-coral transition-transform duration-500 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </div>
              </Link>
            </Reveal>
          )
        })}
      </div>

      <Reveal delay={0.2}>
        <p className="mt-10">
          <Link
            href="/research"
            className="group inline-flex items-center gap-3 font-serif text-[19px] text-dark-text/80 transition-colors hover:text-coral sm:text-[21px]"
          >
            The full research programme
            <span className="transition-transform duration-500 group-hover:translate-x-1.5">
              &rarr;
            </span>
          </Link>
        </p>
      </Reveal>
    </SectionShell>
  )
}

/* ------------------------------------------------------------------ */
/* 04 — Teaching                                                       */
/* ------------------------------------------------------------------ */

export function TeachingSection() {
  return (
    <SectionShell index="04" label="Teaching" word="Teaching" imageSrc="/photos/teaching.jpg">
      <div className="grid gap-10 lg:grid-cols-[42fr_58fr] lg:items-end lg:gap-14">
        <div>
          <SectionTitle>I teach through things people already argue about</SectionTitle>
          <Lede>
            A leadership framework on a slide gets agreement and no engagement.
            A film gets an argument. Three co-designed courses run on that
            principle.
          </Lede>
        </div>
        <Reveal delay={0.1} className="lg:pb-2">
          <dl className="flex flex-wrap gap-x-10 gap-y-5">
            {[
              { n: PROGRAMMES.length, k: 'Programmes taught' },
              { n: VISITING.length, k: 'Visiting appointments' },
              { n: CO_DESIGNED_COURSES.length, k: 'Courses co-designed' },
            ].map((s) => (
              <div key={s.k}>
                <dt className="font-serif text-[34px] leading-none text-dark-text">
                  {String(s.n).padStart(2, '0')}
                </dt>
                <dd className="mt-2 font-sans text-[10.5px] uppercase tracking-[0.16em] text-dark-text/45">
                  {s.k}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      <div className="mt-12">
        <StackCards 
          cards={CO_DESIGNED_COURSES.map((course, i) => {
            const images = ['/photos/netflix.jpg', '/photos/cricket.jpg', '/photos/mumbai.jpg']
            return {
              id: course.title,
              title: course.title,
              subtitle: course.status,
              content: (
                <div className="space-y-4">
                  <p className="mt-3 max-w-[58ch] font-sans text-[14.5px] leading-relaxed text-dark-text/65">{course.description}</p>
                  {course.also && <p className="mt-2 max-w-[58ch] font-sans text-[13px] leading-relaxed text-dark-text/45">{course.also}</p>}
                </div>
              ),
              imageSrc: images[i],
              imageAlt: course.title
            }
          })}
        />
      </div>

      <Reveal delay={0.2}>
        <p className="mt-10">
          <Link
            href="/training"
            className="group inline-flex items-center gap-3 font-serif text-[19px] text-dark-text/80 transition-colors hover:text-coral sm:text-[21px]"
          >
            Teaching, programmes and visiting work
            <span className="transition-transform duration-500 group-hover:translate-x-1.5">
              &rarr;
            </span>
          </Link>
        </p>
      </Reveal>
    </SectionShell>
  )
}

/* ------------------------------------------------------------------ */
/* 05 — Selected work                                                  */
/* ------------------------------------------------------------------ */

export function SelectedWorkSection() {
  const recent = [...journalArticles].sort(byRecency).slice(0, 3)

  return (
    <SectionShell index="05" label="Selected work" word="Papers" imageSrc="/photos/works.jpg">
      <div className="grid gap-10 lg:grid-cols-[42fr_58fr] lg:items-end lg:gap-14">
        <div>
          <SectionTitle>The most recent of it</SectionTitle>
          <Lede>
            Each paper carries one plain-English line describing what it
            examines, written for someone deciding whether to read it rather
            than for a reviewer.
          </Lede>
        </div>
        <Reveal delay={0.1} className="lg:pb-2">
          <p className="font-sans text-[13px] leading-relaxed text-dark-text/50">
            Published in Communications of the AIS, Organization &amp;
            Environment, Personnel Review and the Asia Pacific Journal of
            Management, among others.
          </p>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {recent.map((paper, i) => (
          <Reveal key={paper.id} delay={0.08 * i}>
            <article className={`flex h-full flex-col p-7 ${CARD}`}>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-dark-text/[0.06] px-2.5 py-0.5 font-sans text-[10.5px] font-medium text-dark-text/70">
                  {paper.year}
                </span>
                {paper.abdc ? (
                  <span className="rounded-full bg-coral/10 px-2.5 py-0.5 font-sans text-[10.5px] font-medium text-coral">
                    ABDC {paper.abdc}
                  </span>
                ) : null}
              </div>
              <h3 className="mt-4 font-serif text-[19px] leading-snug text-dark-text">
                {paper.title}
              </h3>
              <p className="mt-2 font-sans text-[12.5px] text-dark-text/45">
                {paper.venue}
              </p>
              <p className="mt-4 flex-1 font-sans text-[14px] leading-relaxed text-dark-text/65">
                {paper.summary}
              </p>
            </article>
          </Reveal>
        ))}
      </div>

      {/* Recognition, as a quiet band rather than three more cards. */}
      <div className="mt-14 border-t border-dark-text/10 pt-10">
        <Reveal>
          <h3 className="font-sans text-[10.5px] font-medium uppercase tracking-[0.18em] text-dark-text/45">
            Best-paper awards
          </h3>
        </Reveal>
        <div className="mt-6 grid gap-8 sm:grid-cols-3">
          {AWARDS.map((award, i) => (
            <Reveal key={award.paper} delay={0.08 * i}>
              <div>
                <p className="font-serif text-[30px] leading-none text-coral/70">
                  {award.year}
                </p>
                <p className="mt-3 font-sans text-[13px] leading-relaxed text-dark-text/75">
                  {award.title}
                </p>
                <p className="mt-2 font-sans text-[12.5px] leading-relaxed text-dark-text/45">
                  {award.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal delay={0.2}>
        <p className="mt-10">
          <Link
            href="/publications"
            className="group inline-flex items-center gap-3 font-serif text-[19px] text-dark-text/80 transition-colors hover:text-coral sm:text-[21px]"
          >
            All {publications.length} published records
            <span className="transition-transform duration-500 group-hover:translate-x-1.5">
              &rarr;
            </span>
          </Link>
        </p>
      </Reveal>
    </SectionShell>
  )
}

/* ------------------------------------------------------------------ */
/* 06 — Reach                                                          */
/* ------------------------------------------------------------------ */

export function ReachSection() {
  const mpi = ARTICLES.find((a) => a.reach)

  return (
    <SectionShell index="06" label="Reach" word="Stages">
      <div className="grid gap-10 lg:grid-cols-[42fr_58fr] lg:items-end lg:gap-14">
        <div>
          <SectionTitle>Where the work is argued in public</SectionTitle>
          <Lede>
            Six Academy of Management annual meetings across six years, EGOS in
            Vienna and Cagliari, EURAM in Dublin, BCERC in Knoxville. Eight
            published articles written for people who have to act on this.
          </Lede>
        </div>
        <Reveal delay={0.1} className="lg:pb-2">
          <div className="no-scrollbar flex gap-2 overflow-x-auto pb-1">
            {[...AOM].reverse().map((m) => (
              <span
                key={m.when}
                className={`shrink-0 rounded-full px-3.5 py-1.5 font-sans text-[11px] font-medium ${
                  m.upcoming
                    ? 'border border-coral/25 bg-coral/10 text-coral'
                    : 'bg-dark-text/[0.06] text-dark-text/65'
                }`}
              >
                {m.when.split(' ')[1] ?? m.when}
              </span>
            ))}
          </div>
          <p className="mt-3 font-sans text-[12px] text-dark-text/45">
            Academy of Management, 2021 to 2026
          </p>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-[1fr_1fr]">
        {/* The one verifiable third-party number on the site. */}
        {mpi ? (
          <Reveal>
            <article className={`flex h-full flex-col justify-between p-7 lg:p-9 ${CARD}`}>
              <div>
                <p className="font-serif text-[44px] leading-none text-dark-text lg:text-[54px]">
                  5,900+
                </p>
                <p className="mt-3 font-sans text-[10.5px] uppercase tracking-[0.16em] text-dark-text/45">
                  Downloads
                </p>
                <h3 className="mt-6 max-w-[34ch] font-serif text-[20px] leading-snug text-dark-text">
                  {mpi.title}
                </h3>
              </div>
              <p className="mt-5 max-w-[46ch] font-sans text-[13.5px] leading-relaxed text-dark-text/60">
                The most-read of more than thirty articles published in
                Management Practice Insight since March 2024.
              </p>
            </article>
          </Reveal>
        ) : null}

        <Reveal delay={0.1}>
          <div className={`flex h-full flex-col p-7 lg:p-9 ${CARD}`}>
            <h3 className="font-sans text-[10.5px] font-medium uppercase tracking-[0.18em] text-dark-text/45">
              Recent writing
            </h3>
            <ul className="mt-5 flex-1 space-y-4">
              {ARTICLES.slice(0, 4).map((a) => (
                <li key={a.title} className="border-b border-dark-text/[0.07] pb-4 last:border-0 last:pb-0">
                  <p className="font-serif text-[16px] leading-snug text-dark-text">
                    {a.title}
                  </p>
                  <p className="mt-1.5 font-sans text-[12px] text-dark-text/45">
                    {a.outlet}, {a.year}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.2}>
        <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
          <Link
            href="/speaker"
            className="group inline-flex items-center gap-3 font-serif text-[19px] text-dark-text/80 transition-colors hover:text-coral sm:text-[21px]"
          >
            Speaking topics and stages
            <span className="transition-transform duration-500 group-hover:translate-x-1.5">
              &rarr;
            </span>
          </Link>
          <Link
            href="/media"
            className="group inline-flex items-center gap-3 font-serif text-[19px] text-dark-text/80 transition-colors hover:text-coral sm:text-[21px]"
          >
            Media articles and bios
            <span className="transition-transform duration-500 group-hover:translate-x-1.5">
              &rarr;
            </span>
          </Link>
        </div>
      </Reveal>
    </SectionShell>
  )
}

/* ------------------------------------------------------------------ */
/* 07 — The record                                                     */
/* ------------------------------------------------------------------ */

const RECORD: { label: string; value: string }[] = [
  {
    label: 'Doctorate',
    value: 'PhD in Human Resource Management, IIM Ahmedabad, 2018 to 2023',
  },
  {
    label: 'Faculty',
    value: 'Organisational Behaviour, Indian School of Business',
  },
  {
    label: 'Previously',
    value:
      'Assistant Professor, Organisation and Leadership Studies, SPJIMR Mumbai, 2023 to 2026',
  },
  {
    label: 'Board',
    value:
      'Independent Director, Punjab Communications Limited, April 2026 to present',
  },
  {
    label: 'Certification',
    value: 'SHRM Senior Certified Professional, August 2024 to August 2027',
  },
  {
    label: 'Faculty development',
    value: 'Wharton Global Faculty Development Programme, 2025',
  },
  {
    label: 'Before research',
    value: 'McKinsey & Company, Deloitte, ATOS, and two ventures founded',
  },
]

export function RecordSection() {
  return (
    <SectionShell index="07" label="The record" word="Record">
      <div className="grid gap-10 lg:grid-cols-[42fr_58fr] lg:items-end lg:gap-14">
        <div>
          <SectionTitle>Where the work has been done</SectionTitle>
          <Lede>
            I came to research through practice, not around it. The consulting
            work I teach about is work I have done.
          </Lede>
        </div>
      </div>

      <dl className="mt-12 grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {RECORD.map((r, i) => (
          <Reveal key={r.label} delay={0.05 * i}>
            <div className="border-t border-dark-text/10 pt-5">
              <dt className="font-sans text-[10.5px] font-medium uppercase tracking-[0.16em] text-dark-text/45">
                {r.label}
              </dt>
              <dd className="mt-3 font-sans text-[14.5px] leading-relaxed text-dark-text/80">
                {r.value}
              </dd>
            </div>
          </Reveal>
        ))}
      </dl>

      <Reveal delay={0.2}>
        <p className="mt-10">
          <Link
            href="/about"
            className="group inline-flex items-center gap-3 font-serif text-[19px] text-dark-text/80 transition-colors hover:text-coral sm:text-[21px]"
          >
            The route here, in full
            <span className="transition-transform duration-500 group-hover:translate-x-1.5">
              &rarr;
            </span>
          </Link>
        </p>
      </Reveal>
    </SectionShell>
  )
}

/* ------------------------------------------------------------------ */
/* 08 — Close                                                          */
/* ------------------------------------------------------------------ */

const ROUTES: { href: Route; label: string; note: string }[] = [
  { href: '/consulting', label: 'Executive education', note: 'A programme for your leaders or managers' },
  { href: '/speaker', label: 'Speaking', note: 'A conference, panel or lecture' },
  { href: '/research', label: 'Research collaboration', note: 'Joint work, data or co-authorship' },
  { href: '/board-and-advisory', label: 'Board and advisory', note: 'Directorship or advisory appointments' },
]

export function ClosingSection() {
  return (
    <SectionShell index="08" label="Working together" word="Contact" imageSrc="/photos/closing.jpg">
      <div className="grid gap-12 lg:grid-cols-[42fr_58fr] lg:gap-14">
        <div>
          <SectionTitle>Tell me which of these it is</SectionTitle>
          <Lede>
            Naming the kind of enquiry gets it to the right place faster. If
            none of them fits, the contact page takes anything.
          </Lede>
          <Reveal delay={0.15}>
            <Link
              href="/contact"
              className="group mt-9 inline-flex items-center gap-3 rounded-full bg-dark-text/90 px-6 py-3 font-sans text-[13px] font-medium tracking-wide text-white shadow-lg transition-colors hover:bg-black"
            >
              Start a conversation
              <span className="transition-transform duration-500 group-hover:translate-x-1">
                &rarr;
              </span>
            </Link>
          </Reveal>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {ROUTES.map((r, i) => (
            <Reveal key={r.href} delay={0.07 * i}>
              <Link href={r.href} className={`group flex h-full flex-col p-6 ${CARD}`}>
                <h3 className="font-serif text-[18px] leading-snug text-dark-text transition-colors group-hover:text-coral">
                  {r.label}
                </h3>
                <p className="mt-2 flex-1 font-sans text-[13px] leading-relaxed text-dark-text/55">
                  {r.note}
                </p>
                <span className="mt-4 font-sans text-[12px] text-coral transition-transform duration-500 group-hover:translate-x-1">
                  &rarr;
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  )
}
