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
        // We calculate a slight scale down for older cards, though
        // basic sticky is often enough. The GIF shows them just sliding over.
        return (
          <div
            key={card.id}
            className="sticky top-32 w-full min-h-[60vh] md:min-h-[70vh] bg-white rounded-[2rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)] border border-dark-text/5 flex flex-col-reverse md:flex-row overflow-hidden mb-8 md:mb-16"
            style={{ 
              zIndex: index,
              // Optional: slightly stagger the top so they look like a deck, 
              // but plain top-32 makes them perfectly cover each other.
              top: `calc(120px + ${index * 12}px)`
            }}
          >
            {/* Left side: Text Content */}
            <div className="w-full md:w-[55%] p-8 sm:p-12 lg:p-20 flex flex-col justify-center bg-[#fdfdfc]">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-dark-text tracking-tight mb-4">
                {card.title}
              </h2>
              {card.subtitle && (
                <div className="text-coral text-sm uppercase tracking-[0.2em] font-bold mb-8">
                  {card.subtitle}
                </div>
              )}
              <div className="prose prose-lg prose-slate text-dark-text/80 leading-relaxed font-sans max-w-xl">
                {card.content}
              </div>
            </div>

            {/* Right side: image, when there is one. */}
            {card.imageSrc ? (
              <div className="w-full md:w-[45%] relative min-h-[350px] md:min-h-auto">
                <Image
                  src={card.imageSrc}
                  alt={card.imageAlt || card.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 45vw"
                />
              </div>
            ) : null}
          </div>
        )
      })}
    </div>
  )
}
