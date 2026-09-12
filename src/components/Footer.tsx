import Link from 'next/link'

import { FOOTER_NAV, PRIMARY_NAV } from '@/lib/nav'

export function Footer() {
  return (
    <footer
      className="border-t border-graphite/30 bg-print"
      data-surface="print"
    >
      <div className="mx-auto max-w-page px-5 py-9 lg:px-7">
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-3">
            {[...PRIMARY_NAV, ...FOOTER_NAV].map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="font-data text-meta text-ink no-underline hover:underline"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <p className="mt-7 font-data text-meta text-graphite">
          © {new Date().getFullYear()} Ashneet Kaur
        </p>
      </div>
    </footer>
  )
}
