'use client'

import Link from 'next/link'
import type { Route } from 'next'
import { useState } from 'react'
import { ContactModal } from './ContactModal'

const ROUTES: { href: Route; label: string; note: string }[] = [
  { href: '/consulting', label: 'Executive education', note: 'A programme for your leaders or managers' },
  { href: '/speaker', label: 'Speaking', note: 'A conference, panel or lecture' },
  { href: '/research', label: 'Research collaboration', note: 'Joint work, data or co-authorship' },
  { href: '/board-and-advisory', label: 'Board and advisory', note: 'Directorship or advisory appointments' },
]

export function ContactCard() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className="relative z-30 mx-auto max-w-[1200px] w-full px-5 sm:px-8 lg:px-12 -mb-24">
        <div className="rounded-3xl bg-light-bg/80 backdrop-blur-xl border border-white shadow-[0_24px_80px_rgba(0,0,0,0.07)] p-8 lg:p-14 overflow-hidden relative">
          <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.15]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/photos/closing.jpg" alt="" className="w-full h-full object-cover grayscale" />
          </div>
          
          <div className="relative z-10 grid gap-12 lg:grid-cols-[42fr_58fr] lg:gap-14">
            <div>
              <h2 className="font-serif text-[clamp(1.9rem,3.5vw,3.15rem)] leading-[1.12] tracking-tight text-dark-text mb-4">
                Tell me which of these it is
              </h2>
              <p className="font-sans text-[clamp(1rem,1.2vw,1.2rem)] leading-relaxed text-dark-text/75 max-w-[32ch]">
                Naming the kind of enquiry gets it to the right place faster. If none of them fits, the contact page takes anything.
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="group mt-9 inline-flex items-center gap-3 rounded-full bg-dark-text/90 px-6 py-3 font-sans text-[13px] font-medium tracking-wide text-white shadow-lg transition-colors hover:bg-black"
              >
                Start a conversation
                <span className="transition-transform duration-500 group-hover:translate-x-1">
                  &rarr;
                </span>
              </button>
            </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {ROUTES.map((r, i) => (
              <Link key={r.href} href={r.href} className="group flex h-full flex-col p-6 rounded-[22px] bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:bg-white/60 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300">
                <h3 className="font-serif text-[18px] leading-snug text-dark-text transition-colors group-hover:text-coral">
                  {r.label}
                </h3>
                <p className="mt-2 flex-1 font-sans text-[13px] leading-relaxed text-dark-text/60">
                  {r.note}
                </p>
                <span className="mt-4 font-sans text-[12px] text-coral transition-transform duration-500 group-hover:translate-x-1">
                  &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
    <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
  </>
)
}
