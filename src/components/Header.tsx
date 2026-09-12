'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { PRIMARY_NAV } from '@/lib/nav'

/**
 * The log sheet above the frame — a print-surface bar over every page,
 * including the ones that open on the dark screen surface. Keeping it on print
 * avoids an overlay that has to solve contrast against whatever photograph
 * happens to be behind it.
 *
 * Client component for one reason: marking the current route, which needs
 * aria-current to be correct and not merely coloured. Measured cost against a
 * server-rendered version of this same nav: 0.4KB gzipped. The App Router
 * client runtime ships either way, so the accessible version is effectively
 * free. See NOTES.md.
 */
export function Header() {
  const pathname = usePathname()

  return (
    <header className="border-b border-graphite/30 bg-print" data-surface="print">
      <div className="mx-auto flex max-w-page flex-wrap items-baseline gap-x-6 gap-y-3 px-5 py-4 lg:px-7">
        <Link
          href="/"
          className="font-data font-expanded text-body font-medium text-ink no-underline"
        >
          Ashneet Kaur
        </Link>

        <nav aria-label="Primary" className="ml-auto">
          <ul className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
            {PRIMARY_NAV.map(({ href, label }) => {
              const current = pathname === href || pathname.startsWith(`${href}/`)
              return (
                <li key={href}>
                  <Link
                    href={href}
                    aria-current={current ? 'page' : undefined}
                    className={
                      current
                        ? 'font-data text-meta text-mark underline'
                        : 'font-data text-meta text-ink no-underline hover:underline'
                    }
                  >
                    {label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}
