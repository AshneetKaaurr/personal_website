import Link from 'next/link'
import type { Route } from 'next'
import Image from 'next/image'
import { photos, type Photo } from '@/content/photos'
import { HeroGeometry } from '@/components/HeroGeometry'

const customPhotos: Record<string, Photo> = {
  'RESEARCH': { src: '/photos/research.jpg', alt: 'Research', ratio: '3:2', width: 2400, height: 1600, consent: 'confirmed' },
  'TRAINING': { src: '/photos/training.jpg', alt: 'Training', ratio: '3:2', width: 2400, height: 1600, consent: 'confirmed' },
  'CONSULTING': { src: '/photos/consulting.jpg', alt: 'Consulting', ratio: '3:2', width: 2400, height: 1600, consent: 'confirmed' },
}

const titleToPhotoMap: Record<string, keyof typeof photos> = {
  'ABOUT': 'P-05',
  'SPEAKER': 'P-03',
  'CONTACT': 'P-06',
  'SOCIAL': 'P-07',
  'MEDIA': 'P-04',
  'PUBLICATIONS': 'P-03'
}

function getPhotoForTitle(title: string): Photo {
  if (customPhotos[title]) return customPhotos[title]
  const ref = titleToPhotoMap[title] || 'P-01'
  return photos[ref]!
}

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

/** The page opener: full bleed frosted glass hero */
export function PageTitle({
  children,
  lede,
}: {
  children: React.ReactNode
  lede?: React.ReactNode
}) {
  const titleStr = typeof children === 'string' ? children.toUpperCase() : 'PAGE'
  const mid = Math.ceil(titleStr.length / 2)
  const titleLeft = titleStr.slice(0, mid)
  const titleRight = titleStr.slice(mid)
  
  const heroPhoto = getPhotoForTitle(titleStr)

  return (
    <div className="w-[100vw] relative left-1/2 -translate-x-1/2 h-[75vh] min-h-[650px] mb-20 overflow-hidden bg-black flex items-center">
      <HeroGeometry theme="dark" />

      <div className="absolute inset-0 z-0">
        <Image
          src={heroPhoto.src}
          alt={heroPhoto.alt}
          fill
          className="object-cover opacity-85 scale-[1.15] translate-x-[8%] md:translate-x-[12%]"
          style={{ objectPosition: '100% 40%' }}
          priority
        />
      </div>
      
      <div className="absolute inset-y-0 left-0 w-[55%] sm:w-[50%] lg:w-[45%] z-10 backdrop-blur-3xl bg-dark-text/30 border-r border-white/10" />

      <div className="absolute inset-0 z-20">
         <div className="w-full h-full relative max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-24">
           
           <div className="absolute top-[50%] -translate-y-1/2 left-6 sm:left-12 lg:left-24 flex items-center pointer-events-none">
              <h1 className="font-serif text-[clamp(4.5rem,10vw,14rem)] font-bold tracking-tighter text-white leading-none flex items-center drop-shadow-2xl">
                <span className="opacity-95 mix-blend-overlay">{titleLeft}</span>
                <span className="ml-0 sm:ml-2 opacity-100">{titleRight}</span>
              </h1>
           </div>
           
           <div className="absolute bottom-10 left-6 sm:left-12 lg:left-24 max-w-sm text-white/95 pr-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-coral"></span>
                  <span className="w-2 h-2 rounded-full border border-white/50"></span>
                  <span className="w-2 h-2 rounded-full border border-white/50"></span>
                </div>
              </div>
              <h2 className="text-lg sm:text-xl font-sans uppercase tracking-[0.2em] font-semibold mb-4 text-white">
                {titleStr}
              </h2>
              {lede ? (
                <p className="text-sm font-sans leading-relaxed opacity-80 font-light">
                  {lede}
                </p>
              ) : null}
           </div>
         </div>
      </div>
    </div>
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
 * A note left on the page for Dr Kaur to answer while she reviews the site.
 *
 * These are addressed to her directly, in the second person, because she is the
 * one reading them. Write them the way you would write a message to a client:
 * say what you need, say why, and stop. No third-person commentary about her,
 * and no references to CVs, build plans or internal files - she has no reason
 * to care what those are.
 *
 * 'approve' - copy is drafted and she should change anything that is not hers.
 * 'needs'   - something only she has, which nobody should invent.
 *
 * They are on the page rather than in a tracker so a single pass through the
 * site collects every answer.
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
          <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-coral">
            {kind === 'approve' ? 'For you to check' : 'Over to you'}
          </p>
          <p className="mt-2 text-[15px] leading-relaxed text-dark-text/85">
            {item}
          </p>
          {children ? (
            <div className="mt-2.5 space-y-2 text-sm leading-relaxed text-sage">
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
