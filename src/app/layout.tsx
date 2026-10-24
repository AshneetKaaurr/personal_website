import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { ContactModal } from '@/components/ContactModal'
import { GlobalBackground } from '@/components/GlobalBackground'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { SITE_URL } from '@/content/site'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Dr Ashneet Kaur',
    template: '%s | Dr Ashneet Kaur',
  },
  description:
    'Dr Ashneet Kaur: organisational behaviour, HRM and the human side of AI. Advisory, executive programmes, research and board governance.',
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
    <html lang="en-IN" className={`${outfit.variable} ${inter.variable}`}>
      <body className="bg-light-bg text-dark-text font-sans antialiased selection:bg-coral selection:text-white overflow-x-hidden">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-3 focus:font-sans focus:text-sm focus:text-dark-text"
        >
          Skip to content
        </a>
        <GlobalBackground />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <ContactModal />
        <WhatsAppButton />
      </body>
    </html>
  )
}
