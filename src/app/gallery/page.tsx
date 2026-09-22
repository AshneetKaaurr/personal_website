'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Container, PageTitle, Section, Note } from '@/components/Page'
import { Lightbox } from '@/components/Lightbox'
import { photos, getPhoto, heldForConsent, type Photo } from '@/content/photos'
import { SHOTS, type ShotRef } from '@/lib/shots'

export default function Gallery() {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null)
  
  // Only include photos that have consent and exist in the photo manifest
  const validShots = SHOTS.filter(shot => getPhoto(shot.ref) !== null)
  
  // Current active photo object
  // tsconfig sets noUncheckedIndexedAccess, so the lookup is guarded rather
  // than asserted: an index past the end yields null, same as no photo.
  const activeShot =
    activePhotoIndex !== null ? validShots[activePhotoIndex] : undefined
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

  return (
    <Container className="max-w-7xl">
      <PageTitle lede="Photographs for press, conference programmes and university materials.">
        Gallery
      </PageTitle>

      <Section>
        {heldForConsent.length > 0 ? (
          <Note kind="approve" item={`${heldForConsent.length} group photographs`}>
            Held back pending written confirmation from the client that the people
            visible in them consent to appearing on a public website. Tracked as
            item 15 in PENDING.md.
          </Note>
        ) : null}

        <div className="mt-8 columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {validShots.map((shot, index) => {
            const photo = getPhoto(shot.ref)!
            const isPortrait = photo.ratio === '4:5'
            
            return (
              <div 
                key={shot.ref}
                className={`break-inside-avoid rounded-2xl overflow-hidden bg-white/50 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.06)] group cursor-pointer relative ${
                  isPortrait ? 'aspect-[4/5]' : 'aspect-[3/2]'
                }`}
                onClick={() => setActivePhotoIndex(index)}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ objectPosition: photo.focal || '50% 50%' }}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </Section>

      <Lightbox 
        photo={activePhoto}
        onClose={() => setActivePhotoIndex(null)}
        onNext={handleNext}
        onPrev={handlePrev}
        hasNext={activePhotoIndex !== null && activePhotoIndex < validShots.length - 1}
        hasPrev={activePhotoIndex !== null && activePhotoIndex > 0}
      />
    </Container>
  )
}
