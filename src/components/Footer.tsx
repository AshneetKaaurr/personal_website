import Link from 'next/link'

import { FOOTER_NAV, PRIMARY_NAV } from '@/lib/nav'
import { EMAIL } from '@/content/record'

export function Footer() {
  return (
    <footer className="mt-20 bg-dark-text text-white/80">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 lg:px-8">
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
