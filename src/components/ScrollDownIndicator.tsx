'use client'

import { motion } from 'framer-motion'

/**
 * A bouncing chevron at the bottom-centre of a hero / cover section,
 * inviting the visitor to scroll down.
 */
export function ScrollDownIndicator() {
  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-1 pointer-events-auto cursor-pointer"
      onClick={() => {
        window.scrollBy({ top: window.innerHeight * 0.7, behavior: 'smooth' })
      }}
    >
      <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-white/60 font-medium">
        Scroll
      </span>
      <motion.svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-white/70"
        animate={{ y: [0, 6, 0] }}
        transition={{
          duration: 1.6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <polyline points="6 9 12 15 18 9" />
      </motion.svg>
    </div>
  )
}
