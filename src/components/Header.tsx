'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { PRIMARY_NAV } from '@/lib/nav'
import { NavbarAnimation } from '@/components/Motion'

/**
 * Undesigned nav bar. Client component for one reason: marking the current
 * route, which needs aria-current to be correct and not merely coloured.
 */
export function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <NavbarAnimation>
      <header className="pointer-events-auto flex flex-col w-full max-w-4xl rounded-[2rem] bg-white/70 backdrop-blur-3xl border border-white/50 shadow-[0_12px_40px_rgb(0,0,0,0.08)] px-5 md:px-8 py-3 transition-all duration-300">
        <div className="flex items-center justify-between w-full">
          <Link href="/" className="font-serif text-lg md:text-xl text-dark-text whitespace-nowrap" onClick={() => setIsOpen(false)}>
            Ashneet Kaur
          </Link>

          <button 
            className="md:hidden flex flex-col justify-center gap-[5px] p-2 -mr-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <span className={`w-5 h-[1.5px] bg-dark-text transition-transform ${isOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
            <span className={`w-5 h-[1.5px] bg-dark-text transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`w-5 h-[1.5px] bg-dark-text transition-transform ${isOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
          </button>

          <nav aria-label="Primary" className="hidden md:block ml-auto">
            <ul className="flex items-center gap-6">
              {PRIMARY_NAV.map(({ href, label }) => {
                const current = pathname === href || pathname.startsWith(`${href}/`)
                return (
                  <li key={href} className="whitespace-nowrap">
                    <Link
                      href={href}
                      aria-current={current ? 'page' : undefined}
                      className={
                        current
                          ? 'text-sm font-medium text-coral transition-colors'
                          : 'text-sm font-medium text-sage hover:text-dark-text transition-colors'
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

        {/* Mobile Nav Dropdown */}
        <div 
          className={`md:hidden flex flex-col overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-64 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'
          }`}
        >
          <nav aria-label="Mobile">
            <ul className="flex flex-col gap-4 items-center pt-4 border-t border-dark-text/10 pb-2">
              {PRIMARY_NAV.map(({ href, label }) => {
                const current = pathname === href || pathname.startsWith(`${href}/`)
                return (
                  <li key={href} className="whitespace-nowrap">
                    <Link
                      href={href}
                      onClick={() => setIsOpen(false)}
                      aria-current={current ? 'page' : undefined}
                      className={
                        current
                          ? 'text-base font-medium text-coral transition-colors'
                          : 'text-base font-medium text-sage hover:text-dark-text transition-colors'
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
    </NavbarAnimation>
  )
}
