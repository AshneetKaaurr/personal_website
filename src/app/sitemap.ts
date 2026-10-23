import type { MetadataRoute } from 'next'

import { THEMES } from '@/content/research'
import { SITE_URL } from '@/content/site'

const ROUTES = [
  '/',
  '/about/',
  '/how-i-help/',
  '/advisory/',
  '/executive-development/',
  '/speaking/',
  '/ai-and-the-future-of-work/',
  // '/one-to-one-coaching/' is noindex until G6 is confirmed.
  '/programmes/',
  '/research/',
  ...THEMES.map((t) => `/research/${t.id}/`),
  '/publications/',
  '/teaching/',
  '/contact/',
  '/privacy/',
]

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: 'monthly',
    priority: path === '/' ? 1 : path === '/privacy/' ? 0.2 : 0.7,
  }))
}
