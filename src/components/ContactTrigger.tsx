'use client'

import { useState } from 'react'
import { ContactModal } from '@/components/ContactModal'

export function ContactTrigger() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="mt-6 md:mt-8 flex items-center gap-4 bg-dark-text text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-medium hover:bg-black hover:scale-105 transition-all group pointer-events-auto shadow-[0_8px_32px_rgba(0,0,0,0.15)]"
      >
        <span className="text-sm md:text-base">Start a Conversation</span>
        <span className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-white text-dark-text flex items-center justify-center group-hover:translate-x-1 transition-transform font-serif text-lg md:text-xl pb-1 pr-0.5">
          →
        </span>
      </button>

      <ContactModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}
