import Link from 'next/link'

import { FOOTER_NAV, PRIMARY_NAV } from '@/lib/nav'
import { EMAIL, LINKEDIN_URL, SCHOLAR_URL } from '@/content/record'

export function Footer() {
  return (
    <footer className="relative bg-dark-bg/80 backdrop-blur-2xl text-white/80 border-t border-white/10 pt-40 pb-4 overflow-hidden">
      {/* Background image or subtle gradient for the frosted glass to have something to blur against */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-dark-text/80 to-dark-text overflow-hidden">
        <div className="absolute inset-0 bg-[url('/photos/p-05-seated.jpg')] opacity-20 mix-blend-overlay object-cover" />
      </div>

      {/* Massive typography watermark */}
      <div className="absolute bottom-[-10%] left-0 right-0 flex justify-center pointer-events-none select-none overflow-hidden -z-10">
        <span className="font-serif text-[28vw] leading-[0.75] text-white opacity-[0.03] tracking-tighter">
          ASHNEET
        </span>
      </div>

      <div className="mx-auto w-full max-w-6xl px-6 py-16 lg:px-8 relative z-10">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="font-serif text-2xl text-white">
              Ashneet Kaur
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/50 max-w-xs">
              Scholar and educator in Organizational Behaviour and Human Resource Management.
            </p>
          </div>

          {/* Primary Nav */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-wider text-white/40 mb-4">Explore</h4>
            <ul className="space-y-3">
              {PRIMARY_NAV.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-white/70 hover:text-coral transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Secondary Nav */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-wider text-white/40 mb-4">More</h4>
            <ul className="space-y-3">
              {FOOTER_NAV.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-white/70 hover:text-coral transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-wider text-white/40 mb-4">Get in Touch</h4>
            <a
              href={`mailto:${EMAIL}`}
              className="text-sm text-white/70 hover:text-coral transition-colors break-all"
            >
              {EMAIL}
            </a>
            <div className="mt-6 flex items-center gap-4">
              <a
                href={`mailto:${EMAIL}`}
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-coral hover:text-white transition-all"
                aria-label="Email"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-coral hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a
                href={SCHOLAR_URL}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-coral hover:text-white transition-all"
                aria-label="Google Scholar"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-2a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0-12a9 9 0 1 1 0-18 9 9 0 0 1 0 18zm0-2a7 7 0 1 0 0-14 7 7 0 0 0 0 14z" fillRule="evenodd" clipRule="evenodd"/></svg>
              </a>
              <a
                href="https://www.instagram.com/professorashneetkaaurr?stkn=aTN5NDI3dzY0dTl0&utm_source=qr"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-coral hover:text-white transition-all"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Dr Ashneet Kaur. All rights reserved.
          </p>
          <Link href="/privacy" className="text-xs text-white/30 hover:text-white/60 transition-colors">
            Privacy Notice
          </Link>
        </div>
      </div>
    </footer>
  )
}
