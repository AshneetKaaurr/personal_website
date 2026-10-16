import type { Metadata } from 'next'

import { SITE_NAME, SITE_URL } from '@/content/site'

/**
 * Per-page metadata: title, description, canonical URL, Open Graph and
 * Twitter. `path` is the route with its trailing slash, e.g. '/about/'.
 */
export function pageMeta({
  title,
  description,
  path,
  image = '/photos/p-01-campus-terrace.jpg',
  absoluteTitle = false,
  noindex = false,
}: {
  title: string
  description: string
  path: string
  image?: string
  /** Use the title as given, without the site-name template. */
  absoluteTitle?: boolean
  noindex?: boolean
}): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${SITE_NAME}`
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      url: `${SITE_URL}${path}`,
      siteName: SITE_NAME,
      locale: 'en_IN',
      title: fullTitle,
      description,
      images: [{ url: image }],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  }
}
