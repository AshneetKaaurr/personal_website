'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const HERO_IMAGES = [
  '/photos/p-05-seated.jpg',
  '/photos/c-01-boardroom-session.jpg',
  '/photos/e-01-stage.jpg',
  '/photos/s-01-presenting.jpg',
]

export function HeroSlideshowBg() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const handleNext = () => setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length)
    const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length)

    window.addEventListener('hero-next', handleNext)
    window.addEventListener('hero-prev', handlePrev)

    const timer = setInterval(handleNext, 8000)

    return () => {
      window.removeEventListener('hero-next', handleNext)
      window.removeEventListener('hero-prev', handlePrev)
      clearInterval(timer)
    }
  }, [])

  useEffect(() => {
    window.dispatchEvent(new CustomEvent('hero-sync', { detail: { index: currentIndex } }))
  }, [currentIndex])

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-light-bg">
      <AnimatePresence mode="popLayout">
        <motion.img
          key={currentIndex}
          src={HERO_IMAGES[currentIndex]}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover origin-center"
        />
      </AnimatePresence>
      {/* The photographs have to stay perceptible: this is atmosphere, not
          texture under a wash. A warm ivory veil at ~38% plus a stronger blur
          keeps them legible as photographs while the type stays readable. */}
      <div className="absolute inset-0 bg-light-bg/[0.38] backdrop-blur-xl" />
      {/* Readability only where the type actually sits: a soft gradient from the
          left, and a light lift at the very bottom for the pillar rail. */}
      <div className="absolute inset-0 bg-gradient-to-r from-light-bg/70 via-light-bg/25 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-light-bg/80 to-transparent" />
    </div>
  )
}

const FEATS = [
  "Pioneering research in algorithmic management, sustainable organization design, and the future of work.",
  "PhD from IIM Ahmedabad, bridging academia with high-impact corporate consulting.",
  "Published in top-tier management journals and featured speaker at international conferences.",
  "Former consultant at Deloitte & McKinsey, transforming organizational behavior strategies."
]

export function HeroBadge() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const handleSync = (e: any) => setIndex(e.detail.index)
    window.addEventListener('hero-sync', handleSync)
    return () => window.removeEventListener('hero-sync', handleSync)
  }, [])

  return (
    <div className="flex flex-row items-center gap-3 md:gap-5 bg-white/40 backdrop-blur-2xl px-4 md:px-5 py-3 rounded-full shadow-[0_8px_30px_rgba(30,30,25,0.07)] border border-white/55 pointer-events-auto w-full max-w-xl">
      <div className="flex items-center gap-3 md:gap-4 flex-1 min-w-0">
        <div className="w-5 h-px bg-coral shrink-0"></div>
        <div className="relative h-[42px] md:h-[38px] w-full overflow-hidden flex items-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-x-0 font-sans text-[12.5px] md:text-[13px] text-dark-text/75 leading-snug pr-2"
            >
              {FEATS[index]}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
      
      <div className="flex items-center gap-1 shrink-0 pl-3 border-l border-dark-text/10">
        <button 
          onClick={() => window.dispatchEvent(new Event('hero-prev'))}
          className="flex items-center justify-center w-7 h-7 rounded-full text-dark-text/50 hover:bg-white/60 hover:text-coral transition-colors"
          aria-label="Previous"
        >
          <span className="text-lg pb-0.5">‹</span>
        </button>
        <button 
          onClick={() => window.dispatchEvent(new Event('hero-next'))}
          className="flex items-center justify-center w-7 h-7 rounded-full text-dark-text/50 hover:bg-white/60 hover:text-coral transition-colors"
          aria-label="Next"
        >
          <span className="text-lg pb-0.5">›</span>
        </button>
      </div>
    </div>
  )
}
