'use client'

import { useState } from 'react'
import { ContactModal } from '@/components/ContactModal'

export function ContactTrigger() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="group inline-flex items-center gap-2.5 rounded-full border border-white/60 bg-white/45 px-6 py-3 font-sans text-[13px] font-medium tracking-wide text-dark-text shadow-[0_8px_28px_rgba(30,30,25,0.07)] backdrop-blur-xl transition-colors hover:bg-white/70 pointer-events-auto"
      >
        <span>Start a conversation</span>
      </button>

      <ContactModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}
