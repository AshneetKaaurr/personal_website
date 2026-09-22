'use client'

import { useEffect, useRef, useState } from 'react'
import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from 'framer-motion'

/**
 * Section 02 — The Question.
 *
 * The motion here carries one argument and nothing else:
 *
 *   system as designed  ->  human consequences  ->  system as experienced
 *
 * So the order of reveal is the order of that argument. The first rectangle
 * draws itself like a blueprint, precise and square. The six human dimensions
 * arrive one at a time, out of focus and then sharp, because that is the part
 * nobody specifies in advance. The second rectangle draws more slowly and with
 * a softened corner: the same system, lived in.
 *
 * Everything stops once "How is it lived?" lands. The question is the last
 * thing moving, and then nothing is.
 *
 * Layout, copy and the glass treatment are unchanged from the original section;
 * only motion was added.
 */

/** Editorial easing. No spring, no bounce, anywhere in this section. */
const EASE = [0.22, 1, 0.36, 1] as const

const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
}

const STAGGER: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
}

/**
 * The human dimensions. They begin blurred because they are the part of a
 * system that is not legible at design time.
 */
const DIMENSIONS = [
  'Trust',
  'Privacy',
  'Fairness',
  'Culture',
  'Autonomy',
  'Well-being',
]

const WORD: Variants = {
  hidden: { opacity: 0, y: 14, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 1.1, ease: EASE },
  },
}

const WORDS_STAGGER: Variants = {
  hidden: {},
  visible: { transition: { delayChildren: 0.5, staggerChildren: 0.16 } },
}

/** Conceptual annotations, not tooltips. One at a time, then gone. */
const FRAGMENTS = [
  { text: 'Who gets watched?', className: 'left-[4%] top-[18%]' },
  { text: 'Who gets to advance?', className: 'right-[6%] top-[34%]' },
  { text: 'Who gets trusted?', className: 'left-[8%] bottom-[26%]' },
  { text: 'Who gets heard?', className: 'right-[10%] bottom-[16%]' },
]

/**
 * A rectangle that draws itself, top-left to top-right to bottom-right to
 * bottom-left. stroke-dashoffset via pathLength, so it is a compositor-friendly
 * property and the stroke stays 1px at any box size.
 */
function DrawnRect({
  delay = 0,
  duration = 1.6,
  radius = 0,
  className = 'text-dark-text/25',
  draw = true,
}: {
  delay?: number
  duration?: number
  radius?: number
  className?: string
  draw?: boolean
}) {
  const d =
    radius === 0
      ? 'M 0.5 0.5 L 99.5 0.5 L 99.5 99.5 L 0.5 99.5 Z'
      : `M ${radius} 0.5 L ${100 - radius} 0.5 Q 99.5 0.5 99.5 ${radius} L 99.5 ${100 - radius} Q 99.5 99.5 ${100 - radius} 99.5 L ${radius} 99.5 Q 0.5 99.5 0.5 ${100 - radius} L 0.5 ${radius} Q 0.5 0.5 ${radius} 0.5`

  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <motion.path
        d={d}
        fill="none"
        stroke="currentColor"
        strokeWidth={1}
        vectorEffect="non-scaling-stroke"
        initial={draw ? { pathLength: 0 } : false}
        whileInView={draw ? { pathLength: 1 } : undefined}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration, ease: EASE, delay }}
      />
    </svg>
  )
}

export function TheQuestionSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const payoffRef = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  /**
   * Parallax. Three speeds so the geometry has depth, capped at 40px so it
   * never reads as movement for its own sake. Zeroed under reduced motion.
   */
  const slow = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [0, -22])
  const mid = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [0, -32])
  const fast = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [0, -40])

  /**
   * The background sharpens for the designed system, softens while the human
   * consequences are on screen, and lifts again for the lived one. Kept to
   * fractions of a pixel of blur; it should be felt, not seen.
   */
  const bgBlur = useTransform(
    scrollYProgress,
    [0, 0.35, 0.65, 1],
    reduced
      ? ['blur(0px)', 'blur(0px)', 'blur(0px)', 'blur(0px)']
      : ['blur(0px)', 'blur(0px)', 'blur(1.4px)', 'blur(0.3px)'],
  )
  const bgOpacity = useTransform(
    scrollYProgress,
    [0, 0.35, 0.65, 1],
    reduced ? [1, 1, 1, 1] : [1, 1, 0.72, 1],
  )

  /**
   * Once the payoff is on screen the section is done arguing: the fragment
   * cycle stops and nothing moves on its own again.
   */
  const settled = useInView(payoffRef, { once: true, margin: '-120px' })
  const [fragment, setFragment] = useState(-1)

  // The cycle simply stops being created once the section has settled. The
  // displayed index is derived below rather than reset from inside the effect,
  // which would set state during render and cascade.
  useEffect(() => {
    if (reduced || settled) return
    let i = 0
    let visible = false
    const id = setInterval(() => {
      visible = !visible
      setFragment(visible ? i % FRAGMENTS.length : -1)
      if (!visible) i += 1
    }, 1400)
    return () => clearInterval(id)
  }, [reduced, settled])

  const activeFragment = reduced || settled ? -1 : fragment

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[110vh] w-full flex-col overflow-hidden bg-light-bg pt-32 pb-24 lg:min-h-[130vh]"
    >
      {/* Background transition blending up into the hero. Unchanged. */}
      <div className="pointer-events-none absolute top-0 left-0 z-10 h-[30vh] w-full -translate-y-full bg-gradient-to-b from-transparent to-light-bg" />

      {/* Geometric language. Three parallax speeds, no continuous rotation. */}
      <motion.div
        style={{ filter: bgBlur, opacity: bgOpacity }}
        className="pointer-events-none absolute inset-0 z-0"
      >
        <motion.div
          style={{ y: slow }}
          className="absolute top-[10%] right-[10%] h-[70%] w-[40%] border border-dark-text/[0.08]"
        />
        <motion.div
          style={{ y: mid }}
          className="absolute top-[30%] right-[35%] h-[60%] w-[15%] border border-dark-text/[0.05]"
        />
        <motion.div
          style={{ y: fast }}
          className="absolute top-[60%] right-[5%] aspect-square w-[8%] border border-dark-text/[0.12]"
        />
        <motion.div
          style={{ y: slow }}
          className="absolute top-[25%] left-[-5%] h-[1px] w-[30%] bg-dark-text/[0.06]"
        />
        <motion.div
          style={{ y: mid }}
          className="absolute bottom-[20%] left-[10%] h-[30%] w-[1px] bg-dark-text/[0.08]"
        />
      </motion.div>

      {/* Question fragments. Low opacity, one at a time, then silence. */}
      {!reduced && (
        <div className="pointer-events-none absolute inset-0 z-10 hidden lg:block">
          {FRAGMENTS.map((f, i) => (
            <motion.span
              key={f.text}
              className={`absolute font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-dark-text ${f.className}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: activeFragment === i ? 0.22 : 0 }}
              transition={{ duration: 0.7, ease: EASE }}
            >
              {f.text}
            </motion.span>
          ))}
        </div>
      )}

      <div className="relative z-20 mx-auto flex w-full max-w-[1400px] flex-1 flex-col px-5 sm:px-8 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={STAGGER}
          className="mb-20 flex flex-col gap-16 lg:flex-row lg:gap-24"
        >
          {/* Left: the question, stated. */}
          <div className="flex max-w-[700px] flex-1 flex-col items-start pt-10">
            <motion.div variants={FADE_UP} className="mb-10">
              <span className="font-sans text-[10px] font-medium uppercase tracking-[0.14em] text-dark-text/50 lg:text-[12px]">
                02 / THE QUESTION
              </span>
            </motion.div>

            <motion.h2
              variants={FADE_UP}
              className="text-balance font-serif text-[2.5rem] leading-[1.05] tracking-tight text-dark-text sm:text-[3rem] lg:text-[4.2rem]"
            >
              Organisations are adopting systems that make decisions about
              people faster than they are working out what those systems do to
              the people.
            </motion.h2>

            <motion.p
              variants={FADE_UP}
              className="mt-10 font-sans text-[16px] leading-[1.75] text-dark-text/70 lg:text-[18px]"
            >
              I examine how AI-driven systems affect employee engagement, trust
              and cultural evolution, and the ethical and emotional consequences
              of algorithmic decision-making in human resources &mdash; privacy,
              fairness and well-being.
              <br />
              <br />
              Alongside that, I study whether people systems deliver what they
              claim: whether green HR practices change environmental performance
              or stay on paper, what unfairness does to what people are willing
              to share, and what makes teams in young companies able to move
              quickly.
            </motion.p>
          </div>

          {/* Right: the argument, drawn. */}
          <div className="flex flex-1 items-center justify-center lg:justify-end">
            <motion.div
              variants={FADE_UP}
              className="relative flex w-full max-w-[500px] flex-col items-center rounded-sm border border-white/50 bg-white/30 p-10 text-center shadow-[0_20px_60px_rgba(20,25,22,0.05)] backdrop-blur-[24px]"
            >
              {/* Designed: square corners, drawn first and quickly. */}
              <div className="relative px-6 py-4">
                <DrawnRect delay={0.2} duration={1.4} draw={!reduced} />
                <div className="font-sans text-[12px] font-medium uppercase tracking-[0.16em] text-dark-text/80">
                  System
                  <br />
                  As Designed
                </div>
              </div>

              {/* Transition line down into the human consequences. */}
              <div className="relative my-4 h-10 w-[1px] overflow-hidden bg-dark-text/20">
                <motion.div
                  className="h-full w-full origin-top bg-dark-text/20"
                  initial={reduced ? false : { scaleY: 0 }}
                  whileInView={reduced ? undefined : { scaleY: 1 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.7, ease: EASE, delay: 1.5 }}
                />
                <div className="absolute bottom-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rotate-45 border-r border-b border-dark-text/30" />
              </div>

              {/* The six dimensions: blurred, then sharp, one at a time. */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                variants={reduced ? undefined : WORDS_STAGGER}
                className="my-4 flex w-full flex-col gap-5 border-y border-dark-text/10 py-8"
              >
                <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
                  {DIMENSIONS.map((term) => (
                    <motion.span
                      key={term}
                      variants={reduced ? undefined : WORD}
                      className="cursor-default font-serif text-[18px] italic text-dark-text/60 transition-colors duration-300 hover:text-coral sm:text-[22px]"
                    >
                      {term}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              <div className="relative my-4 h-10 w-[1px] bg-dark-text/20">
                <div className="absolute bottom-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rotate-45 border-r border-b border-dark-text/30" />
              </div>

              {/* Experienced: softened corner, drawn slower. Same system, lived. */}
              <div className="relative px-6 py-4">
                <DrawnRect
                  delay={2.4}
                  duration={2.2}
                  radius={6}
                  className="text-coral/40"
                  draw={!reduced}
                />
                <div className="font-sans text-[12px] font-medium uppercase tracking-[0.16em] text-dark-text/80">
                  System
                  <br />
                  As Experienced
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* The payoff. After this, nothing moves. */}
        <motion.div
          ref={payoffRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={STAGGER}
          className="mt-auto flex flex-col items-center pt-20 text-center"
        >
          <motion.div variants={FADE_UP} className="mb-6">
            <span className="font-sans text-[13px] uppercase tracking-[0.1em] text-dark-text/70 lg:text-[15px]">
              The question is not only whether a system works.
            </span>
          </motion.div>

          <motion.h3
            initial={
              reduced
                ? { opacity: 0 }
                : { opacity: 0, y: 15, letterSpacing: '0.04em' }
            }
            whileInView={
              reduced
                ? { opacity: 1 }
                : { opacity: 1, y: 0, letterSpacing: '-0.02em' }
            }
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.4, ease: EASE, delay: reduced ? 0 : 0.5 }}
            className="font-serif text-[3.5rem] leading-[0.9] text-dark-text sm:text-[5rem] lg:text-[6.5rem]"
          >
            How is it lived?
          </motion.h3>

          <motion.div
            variants={FADE_UP}
            className="mt-24 w-full max-w-sm border-t border-dark-text/10 pt-10"
          >
            <span className="font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-dark-text/40 lg:text-[11px]">
              Four ways I follow the question &darr;
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
