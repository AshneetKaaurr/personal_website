import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-playfair',
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://ashneetkaur.com'),
  title: {
    default: 'Dr Ashneet Kaur',
    template: '%s — Dr Ashneet Kaur',
  },
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
    <html lang="en-IN" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-light-bg text-dark-text font-sans antialiased selection:bg-coral selection:text-white">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:px-4 focus:py-3 focus:font-sans focus:text-sm focus:text-dark-text"
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
