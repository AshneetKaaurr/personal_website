'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { PRIMARY_NAV } from '@/lib/nav'

/**
 * Undesigned nav bar. Client component for one reason: marking the current
 * route, which needs aria-current to be correct and not merely coloured.
 */
export function Header() {
  const pathname = usePathname()

  return (
    <header className="border-b border-dark-text/10 bg-light-bg">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-baseline gap-x-8 gap-y-3 px-6 py-5 lg:px-8">
        <Link href="/" className="font-serif text-lg">
          Ashneet Kaur
        </Link>

        <nav aria-label="Primary" className="ml-auto">
          <ul className="flex flex-wrap items-baseline gap-x-6 gap-y-2">
            {PRIMARY_NAV.map(({ href, label }) => {
              const current = pathname === href || pathname.startsWith(`${href}/`)
              return (
                <li key={href}>
                  <Link
                    href={href}
                    aria-current={current ? 'page' : undefined}
                    className={
                      current
                        ? 'text-sm text-coral underline underline-offset-4'
                        : 'text-sm text-sage hover:text-dark-text'
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
