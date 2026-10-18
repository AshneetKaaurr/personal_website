import { HeroGeometry } from '@/components/HeroGeometry'
import { ScrollDownIndicator } from '@/components/ScrollDownIndicator'

/**
 * The inner-page opener, in the site's existing vocabulary: a dark ground
 * with soft colour light, a frosted glass panel on the left, an oversized
 * decorative word, and the page's real headline and lede in the panel. The
 * word sits in the flow above the headline so the two never collide.
 */
export function PageHero({
  word,
  title,
  lede,
  actions,
  children,
}: {
  /** The oversized display word. Decorative; the h1 carries the meaning. */
  word: string
  title: React.ReactNode
  lede?: React.ReactNode
  actions?: React.ReactNode
  children?: React.ReactNode
}) {
  return (
    <section className="relative flex min-h-[640px] w-full items-end overflow-hidden bg-dark-text lg:min-h-[78vh]">
      {/* Colour light in place of the photograph, for the glass to catch. */}
      <div aria-hidden="true" className="absolute inset-0 z-0">
        <div className="absolute -top-[20%] right-[-10%] h-[80vmax] w-[80vmax] bg-[radial-gradient(closest-side,rgba(224,122,95,0.45),transparent)]" />
        <div className="absolute -bottom-[35%] left-[25%] h-[70vmax] w-[70vmax] bg-[radial-gradient(closest-side,rgba(129,152,139,0.40),transparent)]" />
        <div className="absolute top-[10%] left-[-15%] h-[50vmax] w-[50vmax] bg-[radial-gradient(closest-side,rgba(140,185,220,0.25),transparent)]" />
      </div>

      <HeroGeometry theme="dark" />

      <div className="absolute inset-y-0 left-0 z-10 w-full border-r border-white/10 bg-dark-text/45 backdrop-blur-3xl md:w-[62%] lg:w-[52%]" />

      <div className="relative z-20 mx-auto w-full max-w-[1400px] px-5 pt-32 pb-24 sm:px-8 lg:px-12 lg:pt-36 lg:pb-28">
        <span
          aria-hidden="true"
          className="pointer-events-none mb-8 block select-none whitespace-nowrap font-serif text-[clamp(2.75rem,10vw,10.5rem)] font-bold uppercase leading-[0.85] tracking-tighter text-white/90 mix-blend-overlay lg:mb-10"
        >
          {word}
        </span>

        <div className="max-w-[40rem] md:max-w-[52%] lg:max-w-[44%]">
          <span className="mb-6 block h-px w-10 bg-coral" aria-hidden="true" />
          <h1 className="text-balance font-serif text-[clamp(2rem,3.6vw,3.4rem)] leading-[1.08] tracking-tight text-white">
            {title}
          </h1>
          {lede ? (
            <div className="mt-6 space-y-4 font-sans text-[15px] leading-relaxed text-white/85 lg:text-[16px]">
              {lede}
            </div>
          ) : null}
          {children}
          {actions ? <div className="mt-9 flex flex-wrap items-center gap-4">{actions}</div> : null}
        </div>
      </div>
      <ScrollDownIndicator />
    </section>
  )
}
