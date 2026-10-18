import Link from 'next/link'
import type { Route } from 'next'

import { Frame } from '@/components/Frame'
import { Reveal } from '@/components/Shell'
import type { ShotRef } from '@/lib/shots'

/**
 * Shared, server-safe building blocks in the site's glass vocabulary.
 */

/**
 * Liquid glass, after iOS: a translucent pane that blurs and saturates the
 * wallpaper behind it, a bright specular edge along the top, a faint inner
 * rim, and a soft lifted shadow.
 */
export const GLASS =
  'rounded-2xl border border-white/60 bg-white/40 backdrop-blur-2xl backdrop-saturate-[1.8] shadow-[inset_0_1px_0_rgba(255,255,255,0.9),inset_0_0_0_1px_rgba(255,255,255,0.25),inset_0_-10px_24px_-18px_rgba(255,255,255,0.8),0_10px_34px_-12px_rgba(30,30,25,0.14)]'

export const CARD = `${GLASS} transition-all duration-500 hover:-translate-y-0.5 hover:bg-white/55 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.95),inset_0_0_0_1px_rgba(255,255,255,0.3),0_22px_50px_-16px_rgba(30,30,25,0.22)]`

export const CARD_STATIC = GLASS

// ---------------------------------------------------------------------------
// Type
// ---------------------------------------------------------------------------

export function SectionTitle({
  children,
  id,
  as: Tag = 'h2',
  wide = false,
}: {
  children: React.ReactNode
  id?: string
  as?: 'h2' | 'h3'
  wide?: boolean
}) {
  return (
    <Tag
      id={id}
      className={`${wide ? 'max-w-[28ch]' : 'max-w-[20ch]'} font-serif text-[clamp(1.85rem,3.4vw,3rem)] leading-[1.12] tracking-tight text-dark-text`}
    >
      {children}
    </Tag>
  )
}

export function Lede({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-6 max-w-[38rem] font-sans text-[15px] leading-relaxed text-dark-text/75 lg:text-[16px]">
      {children}
    </p>
  )
}

/** Sentence-case line above a heading. Not tracked caps. */
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 flex items-center gap-3 font-sans text-[13px] font-medium text-dark-text/70">
      <span className="h-px w-6 bg-coral" aria-hidden="true" />
      {children}
    </p>
  )
}

/** The headline block every section opens with: title and lede left, aside right. */
export function SectionHead({
  title,
  lede,
  aside,
  eyebrow,
  id,
}: {
  title: React.ReactNode
  lede?: React.ReactNode
  aside?: React.ReactNode
  eyebrow?: React.ReactNode
  id?: string
}) {
  return (
    <div className="grid gap-10 lg:grid-cols-[52fr_48fr] lg:items-end lg:gap-14">
      <Reveal>
        {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
        <SectionTitle id={id} wide>
          {title}
        </SectionTitle>
        {lede ? <Lede>{lede}</Lede> : null}
      </Reveal>
      {aside ? (
        <Reveal delay={0.1} className="lg:pb-2">
          {aside}
        </Reveal>
      ) : null}
    </div>
  )
}

// ---------------------------------------------------------------------------
// Actions
// ---------------------------------------------------------------------------

type Variant = 'primary' | 'secondary' | 'light'

const BUTTON: Record<Variant, string> = {
  primary:
    'bg-dark-text/90 text-white shadow-lg hover:bg-black',
  secondary:
    'border border-dark-text/15 bg-white/55 text-dark-text backdrop-blur-xl hover:bg-white/85',
  light:
    'border border-white/40 bg-white/15 text-white backdrop-blur-xl hover:bg-white/25',
}

function isInternal(href: string) {
  return href.startsWith('/') && !href.startsWith('//')
}

/**
 * A pill button. `href="#contact"` opens the consultation modal from
 * anywhere on the site (see ConsultationModal).
 */
export function Button({
  href,
  children,
  variant = 'primary',
  external = false,
}: {
  href: string
  children: React.ReactNode
  variant?: Variant
  external?: boolean
}) {
  const className = `group inline-flex items-center gap-3 rounded-full px-6 py-3 font-sans text-[13px] font-medium tracking-wide transition-colors ${BUTTON[variant]}`
  const inner = (
    <>
      {children}
      <span aria-hidden="true" className="transition-transform duration-500 group-hover:translate-x-1">
        &rarr;
      </span>
    </>
  )
  if (isInternal(href)) {
    return (
      <Link href={href as Route} className={className}>
        {inner}
      </Link>
    )
  }
  return (
    <a
      href={href}
      className={className}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
    >
      {inner}
    </a>
  )
}

export function Actions({ children }: { children: React.ReactNode }) {
  return <div className="mt-9 flex flex-wrap items-center gap-4">{children}</div>
}


// ---------------------------------------------------------------------------
// Photographs
// ---------------------------------------------------------------------------

export function Photo({
  shot,
  sizes,
  className,
  priority,
}: {
  shot: ShotRef
  sizes: string
  className?: string
  priority?: boolean
}) {
  return (
    <Frame
      shot={shot}
      sizes={sizes}
      priority={priority}
      className={`overflow-hidden rounded-2xl shadow-[0_14px_44px_rgba(30,30,25,0.10)] ${className ?? ''}`}
    />
  )
}

// ---------------------------------------------------------------------------
// Lists
// ---------------------------------------------------------------------------

export function Bullets({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 font-sans text-[14.5px] leading-relaxed text-dark-text/80">
          <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-coral/70" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

/** A small chip row, used for client lists, stages and credentials. */
export function Chips({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full bg-dark-text/[0.06] px-3.5 py-1.5 font-sans text-[12px] font-medium text-dark-text/75"
        >
          {item}
        </li>
      ))}
    </ul>
  )
}
