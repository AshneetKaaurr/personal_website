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
 * Answers the question the hero asks, as a diagram rather than as prose:
 *
 *   system as designed  ->  people  ->  system as experienced
 *
 * The right-hand side is one architectural composition, not a stack of cards.
 * Its outer frame is drawn, the designed system is drawn square and precise,
 * the six human dimensions arrive scattered and out of focus, and the lived
 * system is drawn last with a softened corner. The order of reveal is the
 * order of the argument.
 *
 * The hero is untouched. The geometry, glass values and colour here are lifted
 * from HeroGeometry so the two sections read as one page.
 */

/** Editorial easing. No spring, no bounce, anywhere in this section. */
const EASE = [0.22, 1, 0.36, 1] as const

const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
}

const STAGGER: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

/** The headline reveals a line at a time, so it reads as it arrives. */
const HEADLINE = [
  'Organisations are adopting',
  'systems that make decisions',
  'about people faster than we',
  'understand their human',
  'consequences.',
]

/**
 * The six human dimensions, placed off-grid on purpose. A system is specified
 * in a straight line; what it does to people is not.
 */
const DIMENSIONS = [
  { word: 'Trust', serif: true, pos: 'left-[6%] top-[0%]' },
  { word: 'Privacy', serif: false, pos: 'left-[54%] top-[15%]' },
  { word: 'Fairness', serif: true, pos: 'left-[0%] top-[33%]' },
  { word: 'Culture', serif: false, pos: 'left-[58%] top-[49%]' },
  { word: 'Autonomy', serif: true, pos: 'left-[14%] top-[65%]' },
  { word: 'Well-being', serif: false, pos: 'left-[48%] top-[84%]' },
]

/** Faint editorial annotations. They sit at 4% and lift barely on scroll. */
const ANNOTATIONS = [
  { text: 'Who gets watched?', pos: 'left-[3%] top-[14%]' },
  { text: 'Who gets trusted?', pos: 'left-[6%] top-[56%]' },
  { text: 'Who gets to advance?', pos: 'right-[4%] top-[30%]' },
  { text: 'Who gets heard?', pos: 'right-[7%] bottom-[18%]' },
]

/**
 * A rectangle that draws itself: top-left, top-right, bottom-right,
 * bottom-left. Animated through pathLength, which framer-motion drives as
 * stroke-dashoffset, so it stays on the compositor and the stroke holds at 1px
 * whatever the box size.
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
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration, ease: EASE, delay }}
      />
    </svg>
  )
}

/** The arrow between the two states. Draws downward, once. */
function Descent({ delay, reduced }: { delay: number; reduced: boolean }) {
  return (
    <div className="relative mx-auto h-14 w-px">
      <motion.div
        className="h-full w-full origin-top bg-dark-text/20"
        initial={reduced ? false : { scaleY: 0 }}
        whileInView={reduced ? undefined : { scaleY: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, ease: EASE, delay }}
      />
      <motion.span
        className="absolute bottom-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rotate-45 border-r border-b border-dark-text/30"
        initial={reduced ? false : { opacity: 0 }}
        whileInView={reduced ? undefined : { opacity: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.4, ease: EASE, delay: delay + 0.6 }}
      />
    </div>
  )
}

export function TheQuestionSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const payoffRef = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion() ?? false

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  /** Parallax, almost imperceptible: 12 / 22 / 34px against scroll. */
  const pLarge = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [0, -12])
  const pMedium = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [0, -22])
  const pSmall = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [0, -34])

  /** Two annotations lift from 4% to 9% as the section passes. */
  const liftA = useTransform(scrollYProgress, [0.15, 0.4, 0.6], reduced ? [0.04, 0.04, 0.04] : [0.04, 0.09, 0.04])
  const liftB = useTransform(scrollYProgress, [0.45, 0.7, 0.9], reduced ? [0.04, 0.04, 0.04] : [0.04, 0.09, 0.04])

  /** The photographic ground stays, just calmer than the hero's. */
  const textureOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.06, 0.09])

  /** Once the payoff lands, nothing moves on its own again. */
  const settled = useInView(payoffRef, { once: true, margin: '-120px' })
  const [annotation, setAnnotation] = useState(-1)

  useEffect(() => {
    if (reduced || settled) return
    let i = 0
    const id = setInterval(() => {
      i += 1
      setAnnotation(i % ANNOTATIONS.length)
    }, 2600)
    return () => clearInterval(id)
  }, [reduced, settled])

  const active = reduced || settled ? -1 : annotation

  return (
    <section
      ref={sectionRef}
      className="relative flex w-full flex-col overflow-hidden bg-light-bg pt-28 pb-24 lg:pt-36 lg:pb-32"
    >
      {/* Photographic ground, carried down from the hero and quietened. */}
      <motion.div
        style={{ opacity: textureOpacity }}
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden="true"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/photos/p-05-seated.jpg"
          alt=""
          className="h-full w-full scale-110 object-cover blur-2xl"
        />
      </motion.div>
      <div className="pointer-events-none absolute inset-0 z-0 bg-light-bg/80" />

      {/* Blend up into the hero so the seam does not read as an edge. */}
      <div className="pointer-events-none absolute top-0 left-0 z-10 h-[24vh] w-full -translate-y-full bg-gradient-to-b from-transparent to-light-bg" />

      {/* Geometry, in the hero's own vocabulary. Architectural, not decorative. */}
      <div className="pointer-events-none absolute inset-0 z-0 hidden md:block">
        <motion.div
          style={{ y: pLarge }}
          className="absolute top-[8%] right-[6%] h-[74%] w-[46%] border border-dark-text/[0.08]"
        />
        <motion.div
          style={{ y: pMedium }}
          className="absolute top-[26%] right-[38%] aspect-square w-[16%] border border-dark-text/[0.06] bg-dark-text/[0.02]"
        />
        <motion.div
          style={{ y: pMedium }}
          className="absolute top-[52%] right-[14%] h-[28%] w-[26%] border border-white/20 bg-white/[0.05] backdrop-blur-[10px]"
        />
        <motion.div
          style={{ y: pSmall }}
          className="absolute top-[70%] right-[2%] aspect-square w-[6%] border border-dark-text/[0.12] bg-sage/[0.06]"
        />
        <motion.div
          style={{ y: pLarge }}
          className="absolute top-[20%] left-[-8%] h-px w-[34%] bg-dark-text/[0.10]"
        />
        <motion.div
          style={{ y: pMedium }}
          className="absolute bottom-[14%] left-[9%] h-[32%] w-px bg-dark-text/[0.10]"
        />
      </div>

      {/* Faint annotations. 4%, lifting to 9%, never competing. */}
      <div className="pointer-events-none absolute inset-0 z-10 hidden lg:block" aria-hidden="true">
        {ANNOTATIONS.map((a, i) => (
          <motion.span
            key={a.text}
            className={`absolute font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-dark-text ${a.pos}`}
            style={{ opacity: i === 0 ? liftA : i === 2 ? liftB : undefined }}
            animate={i === 1 || i === 3 ? { opacity: active === i ? 0.09 : 0.04 } : undefined}
            transition={{ duration: 1.2, ease: EASE }}
          >
            {a.text}
          </motion.span>
        ))}
      </div>

      <div className="relative z-20 mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-[52fr_48fr] lg:items-start lg:gap-14">
          {/* ---------------- Left: the statement ---------------- */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={STAGGER}
            className="flex flex-col items-start"
          >
            <motion.span
              variants={FADE_UP}
              className="mb-9 font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-dark-text/50 lg:text-[11px]"
            >
              02 / The Question
            </motion.span>

            <h2 className="font-serif text-[clamp(1.9rem,3.5vw,3.15rem)] leading-[1.12] tracking-tight text-dark-text">
              {HEADLINE.map((line) => (
                <motion.span key={line} variants={FADE_UP} className="block">
                  {line}
                </motion.span>
              ))}
            </h2>

            <motion.p
              variants={FADE_UP}
              className="mt-10 max-w-[34rem] font-sans text-[17px] leading-[1.7] text-dark-text/75 lg:text-[18px]"
            >
              Systems can be designed for efficiency, fairness or performance.
              But people experience those systems differently.
            </motion.p>

            <motion.p
              variants={FADE_UP}
              className="mt-6 max-w-[34rem] font-sans text-[15px] leading-[1.75] text-dark-text/55 lg:text-[16px]"
            >
              I examine how technology, organisational systems and people
              interact &mdash; from AI and employee privacy to culture,
              meaningful work, careers, trust and organisational agility.
            </motion.p>
          </motion.div>

          {/* ---------------- Right: the system, drawn ---------------- */}
          <div className="relative w-full">
            <motion.div
              initial={reduced ? { opacity: 0 } : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1, ease: EASE }}
              className="relative mx-auto w-full max-w-[560px] bg-white/[0.18] px-7 py-12 backdrop-blur-[18px] sm:px-10"
            >
              {/* The outer frame draws first: the diagram declaring itself. */}
              <DrawnRect
                delay={0}
                duration={2}
                className="text-dark-text/20"
                draw={!reduced}
              />

              {/* 1. The system as specified. Square, precise, drawn quickly. */}
              <div className="relative mx-auto w-fit px-7 py-4">
                <DrawnRect delay={1.1} duration={1.1} draw={!reduced} />
                <div className="text-center font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-dark-text/85">
                  System
                  <br />
                  as designed
                </div>
              </div>

              <Descent delay={2.1} reduced={reduced} />

              {/* 2. What it meets. Scattered, blurred, one at a time. */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={
                  reduced
                    ? undefined
                    : {
                        hidden: {},
                        visible: {
                          transition: { delayChildren: 2.9, staggerChildren: 0.28 },
                        },
                      }
                }
                className="relative my-6 hidden h-[248px] w-full sm:block"
              >
                {DIMENSIONS.map((d) => (
                  <motion.span
                    key={d.word}
                    variants={
                      reduced
                        ? undefined
                        : {
                            hidden: { opacity: 0, y: 12, filter: 'blur(7px)' },
                            visible: {
                              opacity: 1,
                              y: 0,
                              filter: 'blur(0px)',
                              transition: { duration: 1.2, ease: EASE },
                            },
                          }
                    }
                    className={`absolute whitespace-nowrap ${d.pos} ${
                      d.serif
                        ? 'font-serif text-[22px] italic text-dark-text/70'
                        : 'font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-dark-text/55'
                    }`}
                  >
                    {d.word}
                  </motion.span>
                ))}
              </motion.div>

              {/* Mobile keeps the same six, stacked rather than scattered. */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={
                  reduced
                    ? undefined
                    : { hidden: {}, visible: { transition: { staggerChildren: 0.18 } } }
                }
                className="my-8 flex flex-wrap justify-center gap-x-6 gap-y-3 sm:hidden"
              >
                {DIMENSIONS.map((d) => (
                  <motion.span
                    key={d.word}
                    variants={
                      reduced
                        ? undefined
                        : {
                            hidden: { opacity: 0, y: 10, filter: 'blur(6px)' },
                            visible: {
                              opacity: 1,
                              y: 0,
                              filter: 'blur(0px)',
                              transition: { duration: 1, ease: EASE },
                            },
                          }
                    }
                    className={
                      d.serif
                        ? 'font-serif text-[19px] italic text-dark-text/70'
                        : 'font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-dark-text/55'
                    }
                  >
                    {d.word}
                  </motion.span>
                ))}
              </motion.div>

              <Descent delay={4.7} reduced={reduced} />

              {/* 3. The same system, lived in. Softened corner, drawn slower. */}
              <div className="relative mx-auto mt-0 w-fit px-7 py-4">
                <DrawnRect
                  delay={5.4}
                  duration={1.9}
                  radius={7}
                  className="text-coral/45"
                  draw={!reduced}
                />
                <div className="text-center font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-dark-text/85">
                  System
                  <br />
                  as experienced
                </div>
              </div>

              {/* The signature of the section. */}
              <motion.div
                initial={reduced ? { opacity: 0 } : { opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 1, ease: EASE, delay: reduced ? 0 : 6.6 }}
                className="mt-10 flex items-center justify-center gap-3 font-sans text-[9.5px] font-medium uppercase tracking-[0.24em] text-dark-text/40"
              >
                <span>Designed</span>
                <span className="h-px w-16 bg-dark-text/20 sm:w-24" />
                <span>Lived</span>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* ---------------- The payoff. After this, silence. ---------------- */}
        <motion.div
          ref={payoffRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={STAGGER}
          className="mt-20 flex flex-col items-center text-center lg:mt-24"
        >
          <motion.span
            variants={FADE_UP}
            className="mb-7 font-sans text-[12px] uppercase tracking-[0.12em] text-dark-text/65 lg:text-[14px]"
          >
            The question is not only whether a system works.
          </motion.span>

          <motion.h3
            initial={
              reduced ? { opacity: 0 } : { opacity: 0, y: 15, letterSpacing: '0.04em' }
            }
            whileInView={
              reduced ? { opacity: 1 } : { opacity: 1, y: 0, letterSpacing: '-0.025em' }
            }
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.5, ease: EASE, delay: reduced ? 0 : 0.5 }}
            className="font-serif text-[3.25rem] leading-[0.92] text-dark-text sm:text-[5rem] lg:text-[6.5rem]"
          >
            How is it lived?
          </motion.h3>
        </motion.div>

        {/* ---------------- Handover to Research ---------------- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={STAGGER}
          className="mt-20 flex flex-col items-center border-t border-dark-text/10 pt-10 text-center lg:mt-24"
        >
          <motion.span
            variants={FADE_UP}
            className="font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-dark-text/40"
          >
            03 / Research
          </motion.span>
          <motion.a
            variants={FADE_UP}
            href="#content"
            className="group mt-4 inline-flex items-center gap-3 font-serif text-[22px] text-dark-text/80 transition-colors hover:text-coral sm:text-[26px]"
          >
            Four ways I follow the question
            <span className="transition-transform duration-500 group-hover:translate-x-1.5">
              &rarr;
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
