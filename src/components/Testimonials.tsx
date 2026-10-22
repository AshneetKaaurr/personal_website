'use client'

import { useId, useState } from 'react'

import { Reveal, SectionShell } from '@/components/Shell'
import { SectionHead } from '@/components/ui'
import { FEEDBACK_LINES, TESTIMONIALS, type Testimonial } from '@/content/testimonials'

/** Quotes longer than this collapse behind "Read more". */
const CLAMP_AT = 300

function initials(name: string) {
  return name
    .split(/\s+/)
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

/** Cards alternate dark and light glass so the row has rhythm. */
function TestimonialCard({ t, dark }: { t: Testimonial; dark: boolean }) {
  const [open, setOpen] = useState(false)
  const bodyId = useId()
  const long = t.quote.join(' ').length > CLAMP_AT

  return (
    <figure
      className={`relative flex h-full w-[300px] flex-col overflow-hidden rounded-3xl p-7 sm:w-[400px] sm:p-8 ${
        dark
          ? 'bg-dark-text text-white shadow-[0_20px_50px_-24px_rgba(26,35,31,0.6)]'
          : 'border border-white/70 bg-white/50 text-dark-text shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_18px_45px_-24px_rgba(26,35,31,0.35)] backdrop-blur-2xl backdrop-saturate-[1.8]'
      }`}
    >
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute top-5 right-6 h-14 overflow-hidden font-serif text-[110px] leading-[0.95] ${dark ? 'text-coral/40' : 'text-coral/30'}`}
      >
        “
      </span>
      <span aria-hidden="true" className="mb-5 block h-[3px] w-10 rounded-full bg-coral" />

      <blockquote
        id={bodyId}
        className={`relative flex-1 space-y-3 font-serif text-[16px] leading-[1.6] sm:text-[17px] ${
          dark ? 'text-white/90' : 'text-dark-text/85'
        } ${long && !open ? 'line-clamp-7' : ''}`}
      >
        {t.quote.map((p, i) => (
          <p key={i}>
            {i === 0 ? '“' : ''}
            {p}
            {i === t.quote.length - 1 ? '”' : ''}
          </p>
        ))}
      </blockquote>

      {long ? (
        <button
          type="button"
          aria-expanded={open}
          aria-controls={bodyId}
          onClick={() => setOpen((o) => !o)}
          className={`mt-4 self-start font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-coral ${dark ? 'hover:text-white' : 'hover:text-dark-text'}`}
        >
          {open ? 'Show less' : 'Read more'}
        </button>
      ) : null}

      <figcaption className={`mt-6 flex items-center gap-3 border-t pt-5 ${dark ? 'border-white/10' : 'border-dark-text/[0.08]'}`}>
        <span
          aria-hidden="true"
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-serif text-[15px] font-medium ring-2 ring-offset-2 ${
            dark
              ? 'bg-coral text-white ring-coral/40 ring-offset-dark-text'
              : 'bg-light-bg text-coral ring-coral/25 ring-offset-white'
          }`}
        >
          {t.anonymous ? '“' : initials(t.name)}
        </span>
        <span className="min-w-0 flex-1">
          <span className={`block font-sans text-[14px] font-semibold ${dark ? 'text-white' : 'text-dark-text'}`}>{t.name}</span>
          {t.role ? (
            <span className={`block font-sans text-[12.5px] leading-snug ${dark ? 'text-white/65' : 'text-dark-text/70'}`}>{t.role}</span>
          ) : null}
          <span className={`mt-0.5 block font-sans text-[12px] leading-snug ${dark ? 'text-white/50' : 'text-dark-text/55'}`}>
            {t.context}
            {t.date ? <> · {t.date}</> : null}
          </span>
        </span>
      </figcaption>
    </figure>
  )
}

function FeedbackNote({ line }: { line: string }) {
  return (
    <figure className="flex h-full w-[260px] items-start gap-3 rounded-2xl border border-coral/20 bg-coral/[0.07] px-5 py-4 backdrop-blur-xl sm:w-[320px]">
      <span aria-hidden="true" className="font-serif text-[34px] leading-[0.8] text-coral">“</span>
      <span>
        <blockquote className="font-serif text-[15px] leading-snug text-dark-text/85">{line}</blockquote>
        <figcaption className="mt-2 font-sans text-[11px] uppercase tracking-[0.14em] text-dark-text/50">
          Course feedback
        </figcaption>
      </span>
    </figure>
  )
}

/**
 * One endless lane. Two identical lists slide by their own width so the second
 * picks up where the first leaves off; the copy is inert and hidden from
 * assistive tech. Hover or focus pauses the lane (WCAG 2.2.2), as does the
 * shared pause button; with reduced motion it becomes a row you can scroll.
 */
function Lane<T>({
  items,
  render,
  keyOf,
  reverse = false,
  secondsPerItem,
  paused,
  repeat = 1,
}: {
  items: T[]
  render: (item: T) => React.ReactNode
  keyOf: (item: T) => string
  reverse?: boolean
  secondsPerItem: number
  paused: boolean
  /** Repeat short lists inside each copy so one copy is wider than the screen. */
  repeat?: number
}) {
  const filled = Array.from({ length: repeat }, () => items).flat()
  const duration = `${filled.length * secondsPerItem}s`

  const row = (copy: boolean) => (
    <ul
      aria-hidden={copy || undefined}
      inert={copy || undefined}
      className={`flex shrink-0 items-stretch gap-5 pr-5 group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused] motion-reduce:animate-none ${
        reverse ? 'animate-marquee-reverse' : 'animate-marquee'
      } ${copy ? 'motion-reduce:hidden' : ''}`}
      style={{ animationDuration: duration, animationPlayState: paused ? 'paused' : undefined }}
    >
      {filled.map((item, i) => (
        <li key={`${keyOf(item)}-${i}`} className="shrink-0">
          {render(item)}
        </li>
      ))}
    </ul>
  )

  return (
    <div className="group flex overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] motion-reduce:overflow-x-auto motion-reduce:[mask-image:none]">
      {row(false)}
      {row(true)}
    </div>
  )
}

/**
 * Testimonials and course feedback, from src/content/testimonials.ts.
 * Renders nothing while the list is empty.
 */
export function Testimonials({ title }: { title: string }) {
  const [paused, setPaused] = useState(false)
  if (TESTIMONIALS.length === 0) return null

  return (
    <SectionShell label="In their words">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionHead
          title={title}
          lede="From emails sent after sessions and from end-of-course feedback, quoted as written."
        />
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          aria-pressed={paused}
          className="shrink-0 self-start whitespace-nowrap rounded-full border border-dark-text/15 bg-white/55 px-4 py-1.5 font-sans text-[12.5px] font-medium text-dark-text/80 backdrop-blur-xl transition-colors hover:bg-white/85 motion-reduce:hidden lg:self-end"
        >
          {paused ? 'Play testimonials' : 'Pause testimonials'}
        </button>
      </div>

      <Reveal className="mt-10 -mx-5 space-y-5 sm:-mx-8 lg:-mx-12">
        <Lane
          items={TESTIMONIALS}
          keyOf={(t) => t.id}
          render={(t) => <TestimonialCard t={t} dark={TESTIMONIALS.indexOf(t) % 2 === 0} />}
          secondsPerItem={9}
          paused={paused}
        />
        {FEEDBACK_LINES.length ? (
          <Lane
            items={FEEDBACK_LINES}
            keyOf={(line) => line}
            render={(line) => <FeedbackNote line={line} />}
            secondsPerItem={7}
            paused={paused}
            repeat={3}
            reverse
          />
        ) : null}
      </Reveal>
    </SectionShell>
  )
}
