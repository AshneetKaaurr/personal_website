'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Container } from '@/components/Page'
import { Lightbox } from '@/components/Lightbox'
import { photos, getPhoto } from '@/content/photos'
import { SHOTS } from '@/lib/shots'

export default function Gallery() {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null)
  
  // All photos are now confirmed so we just filter out any nulls
  const validShots = SHOTS.filter(shot => getPhoto(shot.ref) !== null)
  
  const activeShot = activePhotoIndex !== null ? validShots[activePhotoIndex] : undefined
  const activePhoto = activeShot ? getPhoto(activeShot.ref) : null

  const handleNext = () => {
    if (activePhotoIndex !== null && activePhotoIndex < validShots.length - 1) {
      setActivePhotoIndex(activePhotoIndex + 1)
    }
  }
  const handlePrev = () => {
    if (activePhotoIndex !== null && activePhotoIndex > 0) {
      setActivePhotoIndex(activePhotoIndex - 1)
    }
  }

  // Choose a stunning landscape photo for the hero
  const heroPhotoRef = 'P-04' 
  const heroPhoto = photos[heroPhotoRef]!

  return (
    <div className="min-h-screen bg-light-bg pb-32">
      {/* 1. FULL BLEED HERO WITH FROSTED GLASS SPLIT */}
      <section className="relative w-full h-[65vh] min-h-[600px] overflow-hidden bg-black">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={heroPhoto.src}
            alt={heroPhoto.alt}
            fill
            className="object-cover opacity-85"
            style={{ objectPosition: '85% 50%' }}
            priority
          />
        </div>
        
        {/* Frosted Glass Left Panel (45% width) */}
        <div className="absolute inset-y-0 left-0 w-full sm:w-[50%] lg:w-[45%] z-10 backdrop-blur-3xl bg-dark-text/30 border-r border-white/10" />

        {/* Text Overlay */}
        <div className="absolute inset-0 z-20">
           <div className="w-full h-full relative max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-24">
             
             {/* Massive Split Typography */}
             <div className="absolute top-[58%] -translate-y-1/2 left-6 sm:left-12 lg:left-24 flex items-center pointer-events-none">
                <h1 className="font-serif text-[clamp(4.5rem,10vw,14rem)] font-bold tracking-tighter text-white leading-none flex items-center drop-shadow-2xl">
                  {/* Left part sits over the glass */}
                  <span className="opacity-95 mix-blend-overlay">GAL</span>
                  {/* Right part sits over the clear photo */}
                  <span className="ml-0 sm:ml-2 opacity-100">LERY</span>
                </h1>
             </div>
             
             {/* Subtitle text in the glass panel area */}
             <div className="absolute bottom-10 left-6 sm:left-12 lg:left-24 max-w-sm text-white/95 pr-6">
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-serif text-3xl sm:text-4xl font-light">01</span>
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-coral"></span>
                    <span className="w-2 h-2 rounded-full border border-white/50"></span>
                    <span className="w-2 h-2 rounded-full border border-white/50"></span>
                  </div>
                </div>
                <h2 className="text-lg sm:text-xl font-sans uppercase tracking-[0.2em] font-semibold mb-4 text-white">
                  Discover Photos
                </h2>
                <p className="text-sm font-sans leading-relaxed opacity-80 font-light">
                  Captured moments from international conferences, speaking engagements, and classroom sessions. Photographs available for press and university materials.
                </p>
                <div 
                  className="mt-10 flex items-center gap-4 text-xs font-sans uppercase tracking-widest font-semibold opacity-90 cursor-pointer hover:opacity-100 hover:text-coral transition-all"
                  onClick={() => {
                    document.getElementById('grid')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  View All Shots 
                  <span className="w-12 h-px bg-current"></span>
                  &rarr;
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* 2. BENTO BOX / MASONRY GRID */}
      <Container id="grid" className="max-w-[1400px] mt-24 lg:mt-32">
        {/* Gallery Title from second image */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6 px-4">
           <div>
             <span className="inline-flex items-center px-3 py-1 rounded-full bg-dark-text/5 text-xs font-medium text-dark-text/60 mb-6 font-sans uppercase tracking-widest">
               Our Stories
             </span>
             <h2 className="font-serif text-5xl md:text-7xl font-bold tracking-tight text-dark-text leading-none">
               Photo Gallery
             </h2>
           </div>
           <p className="font-sans text-sm md:text-base leading-relaxed text-dark-text/60 max-w-xs sm:text-right font-medium">
             Captured moments from our global conferences and academic sessions.
           </p>
        </div>

        {/* CSS Columns Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 space-y-3">
          {validShots.map((shot, index) => {
            const photo = getPhoto(shot.ref)!
            const isPortrait = photo.ratio === '4:5'
            
            return (
              <div 
                key={shot.ref}
                className="break-inside-avoid rounded-xl overflow-hidden bg-dark-text/5 group cursor-pointer relative transition-all duration-700"
                onClick={() => setActivePhotoIndex(index)}
              >
                <div className={`relative w-full ${isPortrait ? 'aspect-[4/5]' : 'aspect-[3/2]'}`}>
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    style={{ objectPosition: photo.focal || '50% 50%' }}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-dark-text/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/25 backdrop-blur-md flex items-center justify-center text-white border border-white/40 transform translate-y-6 group-hover:translate-y-0 transition-all duration-500 shadow-xl">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </Container>

      <Lightbox 
        photo={activePhoto}
        onClose={() => setActivePhotoIndex(null)}
        onNext={handleNext}
        onPrev={handlePrev}
        hasNext={activePhotoIndex !== null && activePhotoIndex < validShots.length - 1}
        hasPrev={activePhotoIndex !== null && activePhotoIndex > 0}
      />
    </div>
  )
}
