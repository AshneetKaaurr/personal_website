import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // Reel & Frame ships two ratios only (3:2 and 4:5); these widths cover
    // both at every breakpoint in the grid. See BUILD-PLAN.md §6.3.
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 1024, 1600, 2400],
    imageSizes: [256, 384, 512],
  },
  typedRoutes: true,
}

export default nextConfig
