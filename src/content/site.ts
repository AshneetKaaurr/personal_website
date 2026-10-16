import type { Route } from 'next'

import { THEMES, themeHref } from '@/content/research'

/**
 * Site-wide structure: navigation, footer, contact details.
 *
 * The navbar mirrors the reference structure exactly — six items, one
 * dropdown of five, one CTA. Do not add, remove, rename or reorder.
 */

export const SITE_URL = 'https://ashneetkaaurr.in'
export const SITE_NAME = 'Dr Ashneet Kaur'
export const WORDMARK = 'Ashneet Kaur'
export const STRAPLINE = 'Leadership · People · Future of Work'

export interface NavLink {
  href: Route
  label: string
}

export interface NavItem extends NavLink {
  children?: NavLink[]
}

export const HOW_I_HELP: NavLink[] = [
  { href: '/advisory', label: 'Advisory' },
  { href: '/executive-development', label: 'Executive Development' },
  { href: '/speaking', label: 'Speaking' },
  { href: '/ai-and-the-future-of-work', label: 'AI and the Future of Work' },
  { href: '/one-to-one-coaching', label: 'One-to-One Coaching' },
]

export const RESEARCH_NAV: NavLink[] = [
  { href: '/research', label: 'Research overview' },
  { href: '/publications', label: 'Publications' },
  ...THEMES.map((t) => ({ href: themeHref(t.id), label: t.title })),
]

/**
 * Primary navigation. Gallery is intentionally absent: the site has no
 * gallery. Photography sits inside the pages it belongs to.
 */
export const NAV: NavItem[] = [
  { href: '/about', label: 'About' },
  { href: '/how-i-help', label: 'How I Help', children: HOW_I_HELP },
  { href: '/research', label: 'Research', children: RESEARCH_NAV },
  { href: '/teaching', label: 'Teaching' },
  { href: '/programmes', label: 'Programmes' },
  { href: '/contact', label: 'Contact' },
]

export const NAV_CTA: NavLink = { href: '/contact', label: 'Start a conversation' }

// ---------------------------------------------------------------------------
// Contact
// ---------------------------------------------------------------------------

/** The public address. */
export const EMAIL = 'ashneetkaaurr@gmail.com'
/** WhatsApp chat: the floating button and the contact links. Supplied for the site; not the CV number. */
export const WHATSAPP_CHAT_URL = `https://wa.me/919592220111?text=${encodeURIComponent('Hello Dr Kaur, I found your website and would like to get in touch.')}`

export const LINKEDIN_URL = 'https://www.linkedin.com/in/ashneet-kaaurr-k95/'
export const SCHOLAR_URL =
  'https://scholar.google.com/citations?user=SnCfTF4AAAAJ&hl=en'
/** G3: not yet supplied. */
export const ORCID_URL: string | null = null

// ---------------------------------------------------------------------------
// Footer
// ---------------------------------------------------------------------------

export const FOOTER_TAGLINE =
  'Research-backed insight on how people, technology and organisation design shape the experience of work.'

export const FOOTER_EXPLORE: NavLink[] = [
  { href: '/about', label: 'About' },
  { href: '/research', label: 'Research' },
  { href: '/publications', label: 'Publications' },
  { href: '/teaching', label: 'Teaching and engagement' },
  { href: '/programmes', label: 'Programmes' },
  { href: '/contact', label: 'Contact' },
]

export const FOOTER_FOCUS: NavLink[] = [
  { href: '/how-i-help', label: 'Overview' },
  { href: '/advisory', label: 'Advisory' },
  { href: '/executive-development', label: 'Executive development' },
  { href: '/speaking', label: 'Speaking' },
  { href: '/ai-and-the-future-of-work', label: 'AI and the future of work' },
  { href: '/one-to-one-coaching', label: 'One-to-one coaching' },
]

export const LEGAL_LINE =
  'Organisations and institutions are named only to describe Dr Kaur’s career. This is her personal site and is not run by or on behalf of any of them.'

// ---------------------------------------------------------------------------
// Consultation form
// ---------------------------------------------------------------------------

export const DISCUSS_OPTIONS = [
  'Consulting & Advisory',
  'Custom Leadership Programme / MDP',
  'In-Company Training Workshop',
  'One-to-One Executive Coaching',
  'Speaking / Keynote Invitation',
  'AI and the Future of Work',
  'Research Collaboration',
  'Leadership through Cinema (Netflix & Learn)',
  'Other',
] as const

export const TIMEFRAME_OPTIONS = [
  'As soon as possible',
  'Within the next two weeks',
  'This quarter',
  'Exploring, no fixed date',
] as const
