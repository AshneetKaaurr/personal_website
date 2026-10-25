import Image from 'next/image'
import Link from 'next/link'

import {
  EMAIL,
  FOOTER_EXPLORE,
  FOOTER_FOCUS,
  FOOTER_TAGLINE,
  LEGAL_LINE,
  LINKEDIN_URL,
  ORCID_URL,
  SCHOLAR_URL,
  WORDMARK,
} from '@/content/site'

/** Same ruled label as the sections above, on the dark ground. */
function ColumnHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="mb-5 flex items-center gap-3 font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-white/60">
      <span className="h-1.5 w-1.5 rounded-full bg-coral" aria-hidden="true" />
      {children}
    </h2>
  )
}

const LINK = 'font-sans text-[14px] text-white/80 transition-colors hover:text-coral'
const EXTERNAL = { target: '_blank', rel: 'noreferrer' } as const

export function Footer() {
  return (
    <footer className="site-footer relative overflow-hidden bg-dark-text text-white/80">
      {/* Her portrait across the whole footer, faint under the dark ground. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <Image src="/photos/p-05-seated.jpg" alt="" fill sizes="100vw" className="object-cover object-[50%_30%] opacity-[0.14] grayscale" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-text/40 via-dark-text/20 to-dark-text/70" />
      </div>
      <div className="relative mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 pt-16 pb-12 lg:grid-cols-[1.6fr_1fr_1fr_1fr] lg:gap-x-12 lg:pt-20">
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="font-serif text-[26px] leading-none text-white">
              {WORDMARK}
            </Link>
            <p className="mt-4 max-w-[34ch] font-sans text-[14px] leading-relaxed text-white/65">
              {FOOTER_TAGLINE}
            </p>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-7 inline-block break-all font-serif text-[18px] text-white underline decoration-coral/60 underline-offset-[6px] transition-colors hover:text-coral"
            >
              {EMAIL}
            </a>
          </div>

          <nav aria-labelledby="footer-explore">
            <ColumnHeading id="footer-explore">Explore</ColumnHeading>
            <ul className="space-y-3">
              {FOOTER_EXPLORE.map(({ href, label }) => (
                <li key={href}><Link href={href} className={LINK}>{label}</Link></li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-focus">
            <ColumnHeading id="footer-focus">How I help</ColumnHeading>
            <ul className="space-y-3">
              {FOOTER_FOCUS.map(({ href, label }) => (
                <li key={href}><Link href={href} className={LINK}>{label}</Link></li>
              ))}
            </ul>
          </nav>

          <div className="col-span-2 lg:col-span-1" aria-labelledby="footer-elsewhere" role="group">
            <ColumnHeading id="footer-elsewhere">Elsewhere</ColumnHeading>
            <ul className="flex flex-wrap gap-x-8 gap-y-3 lg:block lg:space-y-3">
              <li><a href={LINKEDIN_URL} {...EXTERNAL} className={LINK}>LinkedIn</a></li>
              <li><a href={SCHOLAR_URL} {...EXTERNAL} className={LINK}>Google Scholar</a></li>
              {ORCID_URL ? (
                <li><a href={ORCID_URL} {...EXTERNAL} className={LINK}>ORCID</a></li>
              ) : null}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-8 sm:flex-row sm:items-start sm:justify-between sm:gap-10">
          <p className="max-w-3xl font-sans text-[12.5px] leading-relaxed text-white/55">
            © {new Date().getFullYear()} Dr Ashneet Kaur. All rights reserved. {LEGAL_LINE}
          </p>
          <Link href="/privacy" className="shrink-0 font-sans text-[12.5px] text-white/65 transition-colors hover:text-white">
            Privacy notice
          </Link>
        </div>
      </div>
    </footer>
  )
}
