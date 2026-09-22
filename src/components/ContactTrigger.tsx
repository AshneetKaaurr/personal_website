'use client'

import { useState } from 'react'
import { ContactModal } from '@/components/ContactModal'

export function ContactTrigger() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="group inline-flex items-center gap-2 font-sans text-[12px] font-medium uppercase tracking-[0.1em] text-dark-text/60 transition-colors hover:text-coral pointer-events-auto border-b border-dark-text/20 hover:border-coral pb-0.5"
      >
        <span>Start a conversation</span>
        <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
      </button>

      <ContactModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}
