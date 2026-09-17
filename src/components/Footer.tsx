import Link from 'next/link'

import { FOOTER_NAV, PRIMARY_NAV } from '@/lib/nav'

export function Footer() {
  return (
    <footer className="mt-16 border-t border-dark-text/10 bg-light-bg">
      <div className="mx-auto w-full max-w-6xl px-6 py-12 lg:px-8">
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {[...PRIMARY_NAV, ...FOOTER_NAV].map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="text-sm text-sage hover:text-dark-text">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <p className="mt-10 text-sm text-sage">
          © {new Date().getFullYear()} Ashneet Kaur
        </p>
      </div>
    </footer>
  )
}
