"use client"

import { motion } from 'framer-motion'

export function HeroGeometry() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none hidden md:block">
      {/* Large signature rectangle */}
      <motion.div 
        className="absolute top-[2%] -left-[15%] w-[110%] h-[95%] border border-dark-text/[0.08]"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Glass rectangle */}
      <motion.div 
        className="absolute top-[20%] -left-[5%] w-[35%] h-[40%] border border-white/20 bg-white/[0.06] backdrop-blur-[10px]"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Medium square */}
      <motion.div 
        className="absolute bottom-[25%] right-[5%] w-[20%] aspect-square border border-dark-text/[0.06] bg-dark-text/[0.03]"
        animate={{ x: [0, -8, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Thin vertical line */}
      <div className="absolute top-[10%] right-[15%] w-[1px] h-[40%] bg-dark-text/[0.10]" />
      {/* Thin horizontal line */}
      <div className="absolute top-[65%] left-[-20%] w-[30%] h-[1px] bg-dark-text/[0.12]" />
      {/* Circular outline */}
      <motion.div 
        className="absolute top-[8%] right-[10%] w-[12%] aspect-square rounded-full border border-coral/[0.1] bg-coral/[0.05]"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Small square */}
      <motion.div 
        className="absolute top-[75%] -left-[10%] w-[6%] aspect-square border border-dark-text/[0.12] bg-sage/[0.08]"
        animate={{ rotate: [0, 5, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  )
}
