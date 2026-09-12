import type { Metadata } from 'next'
import { Archivo, Newsreader } from 'next/font/google'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import './globals.css'

/**
 * Newsreader carries the optical-size axis — headlines set at a large optical
 * size, body at a small one. Weight stays 400–500; this is not a 700 site.
 */
const newsreader = Newsreader({
  subsets: ['latin'],
  axes: ['opsz'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-newsreader',
})

/**
 * Archivo carries the width axis. Archivo Expanded is the film-title-card
 * treatment on the hero and section openers — that axis is the personality
 * and almost nobody uses it. BUILD-PLAN.md §3.3.
 */
const archivo = Archivo({
  subsets: ['latin'],
  axes: ['wdth'],
  display: 'swap',
  variable: '--font-archivo',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://ashneetkaur.com'),
  title: {
    default: 'Dr Ashneet Kaur',
    template: '%s — Dr Ashneet Kaur',
  },
  // Drawn from her own CV profile summary. No claim here that is not hers.
  description:
    'Scholar and educator in Organizational Behaviour and HRM, working at the intersection of human systems, technological change and sustainable organization design.',
  openGraph: {
    type: 'profile',
    siteName: 'Dr Ashneet Kaur',
    locale: 'en_IN',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" className={`${newsreader.variable} ${archivo.variable}`}>
      <body className="bg-print text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-print focus:px-4 focus:py-3 focus:font-data focus:text-meta focus:text-ink"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
