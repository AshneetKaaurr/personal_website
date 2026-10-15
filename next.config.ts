import type { NextConfig } from 'next'

/**
 * Retired routes from the previous site structure. Every one answers with a
 * 301, not Next's default 308, because that is what was asked for and what
 * older crawlers treat as unambiguous.
 */
const RETIRED: [string, string][] = [
  ['/training', '/teaching/'],
  ['/training/flagship', '/teaching/'],
  ['/training/new-courses', '/teaching/'],
  ['/training/visiting', '/teaching/'],
  ['/consulting', '/advisory/'],
  ['/board-and-advisory', '/advisory/'],
  ['/speaker', '/speaking/'],
  ['/speaker/press-kit', '/speaking/'],
  ['/media', '/about/'],
  ['/social', '/'],
  // The site has no gallery; photography lives in the pages it belongs to.
  ['/gallery', '/about/'],
]

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // The reference structure uses trailing slashes on every route.
  trailingSlash: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 828, 1024, 1600, 2400],
    imageSizes: [256, 384, 512],
  },
  typedRoutes: true,
  // Don't regenerate CLAUDE.md / AGENTS.md on `next dev`.
  agentRules: false,
  async redirects() {
    return RETIRED.flatMap(([source, destination]) => [
      { source, destination, statusCode: 301 as const },
      { source: `${source}/`, destination, statusCode: 301 as const },
    ])
  },
}

export default nextConfig
