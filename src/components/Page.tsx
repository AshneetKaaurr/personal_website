import Link from 'next/link'
import type { Route } from 'next'

/**
 * Premium page primitives.
 *
 * Every inner page inherits its visual identity from these components.
 * Glassmorphism cards, staggered reveal animations, coral accents, and
 * generous whitespace create a cohesive, premium feel across the site.
 */

export function Container({
  children,
  className,
  id,
}: {
  children: React.ReactNode
  className?: string
  /** Anchor target, so the hero's "Explore the work" link has somewhere to go. */
  id?: string
}) {
  return (
    <div id={id} className={`mx-auto w-full max-w-5xl px-6 lg:px-8 ${className ?? ''}`}>
      {children}
    </div>
  )
}

/** The page opener: one h1, and an optional standfirst with coral accent. */
export function PageTitle({
  children,
  lede,
}: {
  children: React.ReactNode
  lede?: React.ReactNode
}) {
  return (
    <header className="pb-12 pt-20 md:pt-28">
      <h1 className="font-serif text-4xl leading-tight md:text-5xl lg:text-6xl tracking-tight">
        {children}
      </h1>
      <div className="mt-4 w-12 h-[3px] bg-coral rounded-full" />
      {lede ? (
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-sage">
          {lede}
        </p>
      ) : null}
    </header>
  )
}

/** A titled block with elegant spacing and coral dash divider. */
export function Section({
  title,
  intro,
  children,
  id,
}: {
  title?: string
  intro?: React.ReactNode
  children: React.ReactNode
  id?: string
}) {
  return (
    <section id={id} className="py-12 md:py-16">
      {title ? (
        <div className="flex items-center gap-4 mb-2">
          <h2 className="font-serif text-2xl md:text-3xl">{title}</h2>
        </div>
      ) : null}
      {title ? <div className="w-8 h-[2px] bg-coral/60 rounded-full mb-6" /> : null}
      {intro ? (
        <p className="mt-2 mb-8 max-w-2xl leading-relaxed text-sage">{intro}</p>
      ) : null}
      <div className={!title && !intro ? '' : 'mt-2'}>{children}</div>
    </section>
  )
}

/** Body copy at a readable measure. */
export function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-2xl space-y-5 leading-relaxed [&_p]:text-base">
      {children}
    </div>
  )
}

/** Quoted copy awaiting her sign-off — styled as an elegant blockquote card. */
export function Draft({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-2xl space-y-5 border-l-[3px] border-coral/40 pl-6 leading-relaxed text-dark-text/90 bg-gradient-to-r from-coral/[0.03] to-transparent py-4 rounded-r-xl">
      {children}
    </div>
  )
}

/**
 * An outstanding item, shown on the page rather than hidden in a tracker.
 *
 * 'approve' — copy is written and needs her sign-off.
 * 'needs'   — a fact nobody has; it must not be guessed at.
 *
 * Both are visible on purpose. CLAUDE.md forbids lorem ipsum and forbids
 * inventing a fact to fill a gap, so a gap is stated as a gap.
 */
export function Note({
  kind,
  item,
  children,
}: {
  kind: 'approve' | 'needs'
  item: string
  children?: React.ReactNode
}) {
  return (
    <div className="my-6 max-w-2xl rounded-2xl bg-white/60 backdrop-blur-lg border border-white/50 shadow-[0_4px_24px_rgba(0,0,0,0.04)] p-5">
      <div className="flex items-start gap-3">
        <span className="mt-0.5 w-5 h-5 rounded-full bg-coral/10 flex items-center justify-center flex-shrink-0">
          <span className="w-2 h-2 rounded-full bg-coral" />
        </span>
        <div>
          <p className="text-sm font-medium text-coral">
            {kind === 'approve' ? 'Needs her approval' : 'Not in the CV'} — {item}
          </p>
          {children ? (
            <div className="mt-2 space-y-2 text-sm leading-relaxed text-sage">
              {children}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

/** A label-and-value record — styled as a glass card with top accent. */
export function Record({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="group rounded-2xl bg-white/50 backdrop-blur-md border border-white/50 shadow-[0_2px_16px_rgba(0,0,0,0.04)] p-5 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:bg-white/70 transition-all duration-300">
      <dt className="text-xs font-medium uppercase tracking-wider text-coral mb-2">{label}</dt>
      <dd className="leading-relaxed text-dark-text/80">{children}</dd>
    </div>
  )
}

export function RecordList({
  children,
  columns = 2,
}: {
  children: React.ReactNode
  columns?: 1 | 2 | 3
}) {
  const cols =
    columns === 1 ? '' : columns === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-3'
  return <dl className={`grid gap-4 ${cols}`}>{children}</dl>
}

/** A plain in-page link with hover arrow animation. */
export function PageLink({
  href,
  children,
}: {
  href: Route
  children: React.ReactNode
}) {
  return (
    <Link href={href} className="group inline-flex items-center gap-2 text-dark-text hover:text-coral transition-colors font-medium">
      <span className="underline underline-offset-4 decoration-coral/30 group-hover:decoration-coral transition-colors">{children}</span>
      <span className="text-coral opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">→</span>
    </Link>
  )
}
