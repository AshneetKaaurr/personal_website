import Link from 'next/link'
import type { Route } from 'next'

/**
 * Skeleton primitives.
 *
 * Deliberately undesigned. These exist so every page below the home hero has
 * the same structure and the same vertical rhythm while the visual direction
 * is still being decided — semantic markup, a readable measure, and nothing
 * else. No palette beyond the theme tokens already in globals.css, no
 * decoration, no motion.
 *
 * When the design lands, it lands here, and every page inherits it.
 */

export function Container({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={`mx-auto w-full max-w-4xl px-6 lg:px-8 ${className ?? ''}`}>
      {children}
    </div>
  )
}

/** The page opener: one h1, and an optional standfirst. */
export function PageTitle({
  children,
  lede,
}: {
  children: React.ReactNode
  lede?: React.ReactNode
}) {
  return (
    <header className="pb-10 pt-16">
      <h1 className="font-serif text-4xl leading-tight md:text-5xl">
        {children}
      </h1>
      {lede ? (
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-sage">
          {lede}
        </p>
      ) : null}
    </header>
  )
}

/** A titled block. The h2 is optional so a section can be purely structural. */
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
    <section id={id} className="border-t border-dark-text/10 py-12">
      {title ? (
        <h2 className="font-serif text-2xl md:text-3xl">{title}</h2>
      ) : null}
      {intro ? (
        <p className="mt-4 max-w-2xl leading-relaxed text-sage">{intro}</p>
      ) : null}
      <div className={title || intro ? 'mt-8' : ''}>{children}</div>
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

/** Quoted copy awaiting her sign-off, so drafts are never mistaken for final. */
export function Draft({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-2xl space-y-5 border-l-2 border-sage/40 pl-5 leading-relaxed">
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
    <div className="my-6 max-w-2xl border-l-2 border-coral bg-coral/5 py-3 pl-4">
      <p className="text-sm font-medium text-coral">
        {kind === 'approve' ? 'Needs her approval' : 'Not in the CV'} — {item}
      </p>
      {children ? (
        <div className="mt-2 space-y-2 text-sm leading-relaxed text-sage">
          {children}
        </div>
      ) : null}
    </div>
  )
}

/** A label-and-value record. Used for credentials, programmes, engagements. */
export function Record({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div>
      <dt className="text-sm text-sage">{label}</dt>
      <dd className="mt-1 leading-relaxed">{children}</dd>
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
  return <dl className={`grid gap-x-8 gap-y-6 ${cols}`}>{children}</dl>
}

/** A plain in-page link. */
export function PageLink({
  href,
  children,
}: {
  href: Route
  children: React.ReactNode
}) {
  return (
    <Link href={href} className="underline underline-offset-4 hover:text-coral">
      {children}
    </Link>
  )
}
