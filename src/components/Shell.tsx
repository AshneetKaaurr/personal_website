'use client'

import { motion, useReducedMotion } from 'framer-motion'

/**
 * The section vocabulary the home page established, shared by every page:
 * ivory ground, a ruled label, and scroll-triggered entry.
 */

const EASE = [0.22, 1, 0.36, 1] as const

/** Scroll-triggered entry. Everything below the fold uses this, not `animate`. */
export function Reveal({
  children,
  delay = 0,
  y = 22,
  className,
  as = 'div',
}: {
  children: React.ReactNode
  delay?: number
  y?: number
  className?: string
  /** Render as a list item so lists keep valid markup. */
  as?: 'div' | 'li'
}) {
  const reduced = useReducedMotion()
  const Tag = as === 'li' ? motion.li : motion.div
  return (
    <Tag
      className={className}
      initial={reduced ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, ease: EASE, delay: reduced ? 0 : delay }}
    >
      {children}
    </Tag>
  )
}

export function SectionShell({
  label,
  children,
  id,
  className,
  imageSrc,
  labelledBy,
}: {
  /** The ruled label at the top of the section. */
  label?: string
  children: React.ReactNode
  id?: string
  className?: string
  /** A real photograph, frosted and greyed, behind the whole section. */
  imageSrc?: string
  labelledBy?: string
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`relative w-full overflow-hidden py-16 lg:py-24 ${className ?? ''}`}
    >
      {imageSrc ? (
        <>
          <div className="pointer-events-none absolute inset-0 z-0 opacity-20">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imageSrc}
              alt=""
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover grayscale"
            />
          </div>
          <div className="pointer-events-none absolute inset-0 z-0 bg-light-bg/50 backdrop-blur-md" />
        </>
      ) : null}

      <div className="relative z-20 mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
        {label ? (
          <Reveal>
            <div className="mb-8 flex items-center gap-4 lg:mb-10">
              <span className="h-1.5 w-1.5 rounded-full bg-coral" aria-hidden="true" />
              <span className="font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-dark-text/70">
                {label}
              </span>
              <span className="h-px flex-1 bg-dark-text/10" />
            </div>
          </Reveal>
        ) : null}
        {children}
      </div>
    </section>
  )
}
