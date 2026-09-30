"use client"

import { motion } from 'framer-motion'

export function HeroGeometry({ theme = 'light' }: { theme?: 'light' | 'dark' }) {
  const isDark = theme === 'dark'
  
  const borderColor = isDark ? 'border-white/[0.12]' : 'border-dark-text/[0.08]'
  const glassBorderColor = isDark ? 'border-white/20' : 'border-white/20'
  const glassBg = isDark ? 'bg-white/[0.04]' : 'bg-white/[0.06]'
  const mediumSquareBorder = isDark ? 'border-white/[0.1]' : 'border-dark-text/[0.06]'
  const mediumSquareBg = isDark ? 'bg-white/[0.03]' : 'bg-dark-text/[0.03]'
  const thinLine = isDark ? 'bg-white/[0.15]' : 'bg-dark-text/[0.10]'
  const smallSquareBorder = isDark ? 'border-white/[0.15]' : 'border-dark-text/[0.12]'
  const smallSquareBg = isDark ? 'bg-coral/[0.15]' : 'bg-sage/[0.08]'

  return (
    <div className="absolute inset-0 z-0 pointer-events-none hidden md:block">
      {/* Large signature rectangle */}
      <motion.div 
        className={`absolute top-[2%] -left-[15%] w-[110%] h-[95%] border ${borderColor}`}
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Glass rectangle */}
      <motion.div 
        className={`absolute top-[20%] -left-[5%] w-[35%] h-[40%] border ${glassBorderColor} ${glassBg} backdrop-blur-[10px]`}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Medium square */}
      <motion.div 
        className={`absolute bottom-[25%] right-[5%] w-[20%] aspect-square border ${mediumSquareBorder} ${mediumSquareBg}`}
        animate={{ x: [0, -8, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Thin vertical line */}
      <div className={`absolute top-[10%] right-[15%] w-[1px] h-[40%] ${thinLine}`} />
      {/* Thin horizontal line */}
      <div className={`absolute top-[65%] left-[-20%] w-[30%] h-[1px] ${thinLine}`} />
      {/* Circular outline */}
      <motion.div 
        className="absolute top-[8%] right-[10%] w-[12%] aspect-square rounded-full border border-coral/[0.2] bg-coral/[0.1]"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Small square */}
      <motion.div 
        className={`absolute top-[75%] -left-[10%] w-[6%] aspect-square border ${smallSquareBorder} ${smallSquareBg}`}
        animate={{ rotate: [0, 5, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  )
}
