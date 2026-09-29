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
    <div className="w-full relative pb-24">
      {cards.map((card, index) => {
        const hasImage = !!card.imageSrc
        return (
          <div
            key={card.id}
            className="sticky top-32 w-full min-h-[55vh] md:min-h-[65vh] bg-white/50 backdrop-blur-lg rounded-[2rem] shadow-[0_-8px_32px_rgba(0,0,0,0.08)] border border-white/60 flex flex-col-reverse md:flex-row overflow-hidden mb-8 md:mb-16"
            style={{ 
              zIndex: index,
              top: `calc(120px + ${index * 12}px)`
            }}
          >
            {/* Left side: Text Content */}
            <div className={`w-full ${hasImage ? 'md:w-[55%]' : 'md:w-full'} p-8 sm:p-12 lg:p-16 xl:p-20 flex flex-col justify-center bg-transparent`}>
              <span className="text-coral/40 font-serif text-5xl md:text-6xl font-bold mb-4">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-dark-text tracking-tight mb-4 leading-tight">
                {card.title}
              </h2>
              {card.subtitle && (
                <div className="text-coral text-sm uppercase tracking-[0.2em] font-bold mb-6">
                  {card.subtitle}
                </div>
              )}
              <div className="prose prose-lg prose-slate text-dark-text/80 leading-relaxed font-sans max-w-xl">
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
