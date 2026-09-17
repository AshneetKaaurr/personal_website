import type { Route } from 'next'

export interface NavItem {
  href: Route
  label: string
}

/**
 * Top nav carries five. BUILD-PLAN.md §5, nav resolution.
 *
 * Six pillars plus a wordmark plus a CTA is eight items — it breaks at tablet
 * and buries everything. Media Articles, Social Media, Gallery, Board and
 * Advisory, Contact and Privacy live in the footer, with Gallery and Media
 * Articles also reachable from Home. Pending her sign-off; see PENDING.md.
 */
export const PRIMARY_NAV: NavItem[] = [
  { href: '/about', label: 'About' },
  { href: '/research', label: 'Research' },
  { href: '/training', label: 'Training' },
  { href: '/speaker', label: 'Speaker' },
  { href: '/consulting', label: 'Consulting' },
]

export const FOOTER_NAV: NavItem[] = [
  { href: '/publications', label: 'Publications' },
  { href: '/media', label: 'Media Articles' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/social', label: 'Social Media' },
  { href: '/board-and-advisory', label: 'Board and Advisory' },
  { href: '/contact', label: 'Contact' },
  { href: '/privacy', label: 'Privacy' },
]
