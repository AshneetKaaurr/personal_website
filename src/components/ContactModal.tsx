'use client'

import { useCallback, useEffect, useId, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import { ConsultationForm } from '@/components/ConsultationForm'
import {
  EMAIL,
  WHATSAPP_CHAT_URL,
} from '@/content/site'

/**
 * "Book a consultation". Mounted once in the root layout. Any link to
 * `#contact` anywhere on the site opens it, so every CTA is a plain anchor
 * that still does something sensible without JavaScript (it scrolls to the
 * page's closing CTA, which carries id="contact").
 */

export function ContactModal() {
  const [open, setOpen] = useState(false)
  const dialogRef = useRef<HTMLDivElement>(null)
  const returnFocus = useRef<HTMLElement | null>(null)
  const titleId = useId()

  const close = useCallback(() => {
    setOpen(false)
    returnFocus.current?.focus()
  }, [])

  // Open from any #contact link.
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const link = (e.target as HTMLElement | null)?.closest('a')
      if (!link) return
      const href = link.getAttribute('href') ?? ''
      if (href === '#contact' || href.endsWith('/#contact')) {
        e.preventDefault()
        returnFocus.current = link
        setOpen(true)
      }
    }
    // A shared link ending in #contact opens the form on arrival.
    function onHash() {
      if (window.location.hash === '#contact') setOpen(true)
    }
    document.addEventListener('click', onClick)
    window.addEventListener('hashchange', onHash)
    const initial = window.setTimeout(onHash, 0)
    return () => {
      document.removeEventListener('click', onClick)
      window.removeEventListener('hashchange', onHash)
      window.clearTimeout(initial)
    }
  }, [])

  // Focus, scroll lock, Escape and a focus trap while open.
  useEffect(() => {
    if (!open) return
    const dialog = dialogRef.current
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const first = dialog?.querySelector<HTMLElement>('input, select, textarea, button')
    first?.focus()

    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        e.preventDefault()
        close()
        return
      }
      if (e.key !== 'Tab' || !dialog) return
      const focusable = Array.from(
        dialog.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input, select, textarea',
        ),
      )
      if (focusable.length === 0) return
      const firstEl = focusable[0]!
      const lastEl = focusable[focusable.length - 1]!
      if (e.shiftKey && document.activeElement === firstEl) {
        e.preventDefault()
        lastEl.focus()
      } else if (!e.shiftKey && document.activeElement === lastEl) {
        e.preventDefault()
        firstEl.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKey)
    }
  }, [open, close])

  return (
    <AnimatePresence>
      {open ? (
        <div className="fixed inset-0 z-[100] flex items-end justify-center p-3 sm:items-center sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="absolute inset-0 bg-black/45 backdrop-blur-sm"
            aria-hidden="true"
          />
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            initial={{ opacity: 0, y: 60, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ type: 'spring', damping: 26, stiffness: 300 }}
            className="relative max-h-[92svh] w-full max-w-xl overflow-y-auto rounded-3xl border border-white/60 bg-light-bg/95 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.18)] backdrop-blur-2xl sm:p-9"
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="flex items-center gap-3 font-sans text-[13px] font-medium text-dark-text/70">
                  <span className="h-px w-6 bg-coral" aria-hidden="true" />
                  A useful first conversation
                </p>
                <h2 id={titleId} className="mt-3 font-serif text-[clamp(1.6rem,3vw,2.1rem)] leading-tight text-dark-text">
                  Book a consultation
                </h2>
              </div>
              <button
                type="button"
                onClick={close}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-dark-text/5 text-dark-text transition-colors hover:bg-dark-text/10"
                aria-label="Close"
              >
                <svg aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>

            <>
                <p className="mt-4 font-sans text-[15px] leading-relaxed text-dark-text/80">
                  A few lines of context is enough. I read each request myself and usually reply within two working days.
                </p>

                <ConsultationForm />

                <div className="mt-7 flex flex-col gap-4 border-t border-dark-text/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <p className="font-sans text-[14px] text-dark-text/80">
                    Prefer email?{' '}
                    <a href={`mailto:${EMAIL}`} className="font-medium text-dark-text underline decoration-coral/50 underline-offset-4 hover:decoration-coral">
                      {EMAIL}
                    </a>
                  </p>
                    <a
                      href={WHATSAPP_CHAT_URL}
                      target="_blank"
                      rel="noreferrer"
                      className={`inline-flex items-center justify-center gap-2 rounded-full border border-dark-text/15 bg-white/60 px-5 py-2.5 font-sans text-[13px] font-medium text-dark-text transition-colors hover:bg-white`}
                    >
                      Chat on WhatsApp
                    </a>
                </div>
            </>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  )
}
