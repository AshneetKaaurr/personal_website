'use client'

import { useEffect, useId, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { NavbarAnimation } from '@/components/Motion'
import { NAV, NAV_CTA, STRAPLINE, WORDMARK, type NavItem } from '@/content/site'

/**
 * The navbar. Items, order and labels are locked to the reference
 * structure; see src/content/site.ts.
 */

function isCurrent(pathname: string, href: string) {
  const clean = href.replace(/\/$/, '')
  return pathname === href || pathname === clean || pathname.startsWith(`${clean}/`)
}

const LINK =
  'rounded-full px-1 font-sans text-[13.5px] font-medium transition-colors'

function Dropdown({ item, pathname }: { item: NavItem; pathname: string }) {
  const [open, setOpen] = useState(false)
  const menuId = useId()
  const wrapRef = useRef<HTMLLIElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const children = item.children ?? []
  const active =
    isCurrent(pathname, item.href) || children.some((c) => isCurrent(pathname, c.href))

  useEffect(() => {
    if (!open) return
    function onDown(e: MouseEvent) {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onDown)
    return () => document.removeEventListener('mousedown', onDown)
  }, [open])

  function focusItem(index: number) {
    const links = wrapRef.current?.querySelectorAll<HTMLAnchorElement>('[data-menuitem]')
    if (!links || links.length === 0) return
    const i = (index + links.length) % links.length
    links[i]?.focus()
  }

  function onKeyDown(e: React.KeyboardEvent) {
    const links = Array.from(
      wrapRef.current?.querySelectorAll<HTMLAnchorElement>('[data-menuitem]') ?? [],
    )
    const current = links.indexOf(document.activeElement as HTMLAnchorElement)
    if (e.key === 'Escape' && open) {
      e.preventDefault()
      setOpen(false)
      buttonRef.current?.focus()
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (!open) setOpen(true)
      requestAnimationFrame(() => focusItem(current + 1))
    } else if (e.key === 'ArrowUp' && open) {
      e.preventDefault()
      focusItem(current <= 0 ? links.length - 1 : current - 1)
    }
  }

  return (
    <li
      ref={wrapRef}
      className="relative flex items-center"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onKeyDown={onKeyDown}
      onClick={(e) => {
        if ((e.target as HTMLElement).closest('a')) setOpen(false)
      }}
      onBlur={(e) => {
        if (!wrapRef.current?.contains(e.relatedTarget as Node)) setOpen(false)
      }}
    >
      <Link
        href={item.href}
        aria-current={isCurrent(pathname, item.href) ? 'page' : undefined}
        className={`${LINK} ${active ? 'text-dark-text' : 'text-dark-text/70 hover:text-dark-text'}`}
      >
        {item.label}
      </Link>
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={`${item.label} menu`}
        onClick={() => setOpen((v) => !v)}
        className="ml-0.5 flex h-7 w-6 items-center justify-center rounded-full text-dark-text/70 transition-colors hover:text-dark-text"
      >
        <svg aria-hidden="true" className={`h-3.5 w-3.5 transition-transform ${open ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" /></svg>
      </button>
      {active ? <span aria-hidden="true" className="absolute -bottom-1.5 left-1 h-0.5 w-5 rounded-full bg-coral" /> : null}

      <div
        id={menuId}
        hidden={!open}
        className="absolute top-full left-1/2 z-50 w-72 -translate-x-1/2 pt-4"
      >
        <ul className="rounded-2xl border border-white/60 bg-white/90 p-2 shadow-[0_18px_50px_rgba(0,0,0,0.12)] backdrop-blur-3xl">
          {children.map((child) => {
            const current = isCurrent(pathname, child.href)
            return (
              <li key={child.href}>
                <Link
                  href={child.href}
                  data-menuitem
                  aria-current={current ? 'page' : undefined}
                  className={`block rounded-xl px-4 py-2.5 font-sans text-[14px] transition-colors hover:bg-light-bg ${current ? 'font-medium text-dark-text' : 'text-dark-text/80'}`}
                >
                  {child.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </li>
  )
}

export function Header() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const mobileId = useId()

  useEffect(() => {
    if (!mobileOpen) return
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [mobileOpen])

  return (
    <NavbarAnimation>
      <header className="pointer-events-auto flex w-full max-w-6xl flex-col rounded-[2rem] border border-white/50 bg-white/75 px-5 py-2.5 shadow-[0_12px_40px_rgb(0,0,0,0.08)] backdrop-blur-3xl transition-all duration-300 lg:px-7">
        <div className="flex w-full items-center justify-between gap-6">
          <Link href="/" className="flex flex-col leading-none" aria-label={`${WORDMARK}, home`}>
            <span className="whitespace-nowrap font-serif text-lg text-dark-text md:text-xl">{WORDMARK}</span>
            <span className="mt-1 whitespace-nowrap font-sans text-[10.5px] text-dark-text/70">{STRAPLINE}</span>
          </Link>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-5 xl:gap-6">
              {NAV.map((item) =>
                item.children ? (
                  <Dropdown key={item.href} item={item} pathname={pathname} />
                ) : (
                  <li key={item.href} className="relative">
                    <Link
                      href={item.href}
                      aria-current={isCurrent(pathname, item.href) ? 'page' : undefined}
                      className={`${LINK} ${isCurrent(pathname, item.href) ? 'text-dark-text' : 'text-dark-text/70 hover:text-dark-text'}`}
                    >
                      {item.label}
                    </Link>
                    {isCurrent(pathname, item.href) ? (
                      <span aria-hidden="true" className="absolute -bottom-1.5 left-1 h-0.5 w-5 rounded-full bg-coral" />
                    ) : null}
                  </li>
                ),
              )}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href={NAV_CTA.href}
              className="hidden whitespace-nowrap rounded-full bg-dark-text/90 px-5 py-2.5 font-sans text-[13px] font-medium text-white shadow-md transition-colors hover:bg-black sm:inline-flex"
            >
              {NAV_CTA.label}
            </Link>
            <button
              type="button"
              className="-mr-2 flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
              onClick={() => setMobileOpen((v) => !v)}
              aria-expanded={mobileOpen}
              aria-controls={mobileId}
              aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
            >
              <span aria-hidden="true" className={`h-[1.5px] w-5 bg-dark-text transition-transform ${mobileOpen ? 'translate-y-[6.5px] rotate-45' : ''}`} />
              <span aria-hidden="true" className={`h-[1.5px] w-5 bg-dark-text transition-opacity ${mobileOpen ? 'opacity-0' : ''}`} />
              <span aria-hidden="true" className={`h-[1.5px] w-5 bg-dark-text transition-transform ${mobileOpen ? '-translate-y-[6.5px] -rotate-45' : ''}`} />
            </button>
          </div>
        </div>

        <nav
          id={mobileId}
          aria-label="Mobile"
          hidden={!mobileOpen}
          className="lg:hidden"
          onClick={(e) => {
            if ((e.target as HTMLElement).closest('a')) setMobileOpen(false)
          }}
        >
          <ul className="mt-3 flex max-h-[70svh] flex-col gap-1 overflow-y-auto border-t border-dark-text/10 pt-3 pb-2">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isCurrent(pathname, item.href) ? 'page' : undefined}
                  className={`block rounded-xl px-3 py-2.5 font-sans text-[16px] font-medium ${isCurrent(pathname, item.href) ? 'text-dark-text' : 'text-dark-text/75'}`}
                >
                  {item.label}
                </Link>
                {item.children ? (
                  <ul className="mb-1 ml-3 border-l border-dark-text/10 pl-3">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          aria-current={isCurrent(pathname, child.href) ? 'page' : undefined}
                          className={`block rounded-xl px-3 py-2 font-sans text-[15px] ${isCurrent(pathname, child.href) ? 'font-medium text-dark-text' : 'text-dark-text/75'}`}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
            <li className="mt-2 sm:hidden">
              <Link
                href={NAV_CTA.href}
                className="flex justify-center rounded-full bg-dark-text/90 px-5 py-3 font-sans text-[14px] font-medium text-white"
              >
                {NAV_CTA.label}
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </NavbarAnimation>
  )
}
