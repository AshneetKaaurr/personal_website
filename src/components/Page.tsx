import { HeroGeometry } from '@/components/HeroGeometry'
import { ScrollDownIndicator } from '@/components/ScrollDownIndicator'

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
  let titleLeft = ''
  let titleRight = ''
  if (titleStr.includes(' ')) {
    titleLeft = titleStr
  } else {
    const mid = Math.ceil(titleStr.length / 2)
    titleLeft = titleStr.slice(0, mid)
    titleRight = titleStr.slice(mid)
  }

  return (
    <div className="w-[100vw] relative left-1/2 -translate-x-1/2 h-[75vh] min-h-[650px] mb-20 overflow-hidden bg-dark-text flex items-center">
      {/* Colour light in place of the photograph. */}
      <div aria-hidden="true" className="absolute inset-0 z-0">
        <div className="absolute -top-[20%] right-[-10%] h-[80vmax] w-[80vmax] bg-[radial-gradient(closest-side,rgba(224,122,95,0.45),transparent)]" />
        <div className="absolute -bottom-[35%] left-[25%] h-[70vmax] w-[70vmax] bg-[radial-gradient(closest-side,rgba(129,152,139,0.40),transparent)]" />
      </div>

      <HeroGeometry theme="dark" />

      <div className="absolute inset-y-0 left-0 w-[55%] sm:w-[50%] lg:w-[45%] z-10 backdrop-blur-3xl bg-dark-text/30 border-r border-white/10" />

      <div className="absolute inset-0 z-20">
         <div className="w-full h-full relative max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-24">

           <div className="absolute top-[50%] -translate-y-1/2 left-6 sm:left-12 lg:left-24 flex items-center pointer-events-none">
              <h1 className="font-serif text-[clamp(3rem,10vw,14rem)] font-bold tracking-tighter text-white leading-none drop-shadow-2xl flex flex-wrap items-center">
                <span className="opacity-95 mix-blend-overlay">{titleLeft}</span>
                {titleRight && <span className="ml-0 sm:ml-2 opacity-100">{titleRight}</span>}
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
      <ScrollDownIndicator />
    </div>
  )
}

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
