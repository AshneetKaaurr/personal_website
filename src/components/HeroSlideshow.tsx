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
      {/* Light Apple frosted glass overlay so text is readable and images are visible */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-sm" />
      {/* A subtle white gradient to ensure text readability at the bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/40 to-transparent" />
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
    <div className="mt-6 md:mt-8 flex flex-row items-center gap-3 md:gap-6 bg-white/80 backdrop-blur-2xl p-3 md:p-6 rounded-3xl md:rounded-[2rem] shadow-[0_16px_40px_rgba(0,0,0,0.1)] border border-white/60 pointer-events-auto w-full max-w-4xl">
      <div className="flex items-center gap-3 md:gap-4 flex-1">
        <div className="w-2 md:w-8 h-px bg-coral shrink-0"></div>
        <div className="relative min-h-[70px] md:min-h-0 md:h-[48px] w-full overflow-hidden flex items-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-x-0 font-sans text-sm md:text-lg text-dark-text font-medium leading-snug md:leading-snug pr-2"
            >
              {FEATS[index]}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
      
      <div className="flex items-center gap-2 md:gap-4 shrink-0 pl-3 md:pl-4 border-l border-dark-text/10">
        <button 
          onClick={() => window.dispatchEvent(new Event('hero-prev'))}
          className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full hover:bg-black/5 hover:text-coral transition-colors"
          aria-label="Previous"
        >
          <span className="text-2xl pb-1">‹</span>
        </button>
        <button 
          onClick={() => window.dispatchEvent(new Event('hero-next'))}
          className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full hover:bg-black/5 hover:text-coral transition-colors"
          aria-label="Next"
        >
          <span className="text-2xl pb-1">›</span>
        </button>
      </div>
    </div>
  )
}
