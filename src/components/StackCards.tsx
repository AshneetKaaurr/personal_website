'use client'

import React from 'react'
import Image from 'next/image'

export interface StackCardData {
  id: string | number
  title: string
  subtitle?: string
  content: React.ReactNode
  /** Optional: a card without a photograph renders as text across the full width. */
  imageSrc?: string
  imageAlt?: string
}

export function StackCards({ cards }: { cards: StackCardData[] }) {
  return (
    <div className="w-full relative pb-8">
      {cards.map((card, index) => {
        const hasImage = !!card.imageSrc
        return (
          <div
            key={card.id}
            className="sticky top-32 w-full bg-white/55 backdrop-blur-2xl backdrop-saturate-[1.8] rounded-2xl shadow-[0_-8px_32px_rgba(30,30,25,0.07)] border border-white/60 flex flex-col-reverse md:flex-row overflow-hidden mb-6 md:mb-10"
            style={{ 
              zIndex: index,
              top: `calc(120px + ${index * 12}px)`
            }}
          >
            {/* Left side: Text Content */}
            <div className={`w-full ${hasImage ? 'md:w-[55%]' : 'md:w-full'} p-7 sm:p-10 lg:p-12 flex flex-col justify-center bg-transparent`}>
              {card.subtitle && (
                <p className="mb-3 font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-coral">
                  {card.subtitle}
                </p>
              )}
              <h3 className="mb-4 max-w-[30ch] font-serif text-[clamp(1.5rem,2.6vw,2.25rem)] leading-[1.15] tracking-tight text-dark-text [text-wrap:balance]">
                {card.title}
              </h3>
              <div className="max-w-[60ch] space-y-3 font-sans text-[15px] leading-relaxed text-dark-text/80">
                {card.content}
              </div>
            </div>

            {/* Right side: image, when there is one. */}
            {hasImage ? (
              <div className="w-full md:w-[45%] relative min-h-[300px]">
                <Image
                  src={card.imageSrc!}
                  alt={card.imageAlt || card.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 45vw"
                  priority={index === 0}
                />
              </div>
            ) : null}
          </div>
        )
      })}
    </div>
  )
}
