'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
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
    const timer = setInterval(() => setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length), 8000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-light-bg">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentIndex}
          initial={{ opacity: currentIndex === 0 ? 1 : 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute inset-0 origin-center"
        >
          <Image
            src={HERO_IMAGES[currentIndex]!}
            alt=""
            fill
            sizes="100vw"
            priority={currentIndex === 0}
            className="object-cover"
          />
        </motion.div>
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
