import Link from 'next/link'

import { Frame } from '@/components/Frame'
import { Bleed, Surface } from '@/components/Surface'
import { PRIMARY_NAV } from '@/lib/nav'

export const metadata = {
  title: 'Page not found',
}

/**
 * 404. Her voice, a route back to the pillars, one photograph.
 * Not a joke page. BUILD-PLAN.md §8.
 */
export default function NotFound() {
  return (
    <Surface surface="print" className="py-9">
      <Bleed>
        <div className="grid gap-7 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h1 className="font-display text-h1 tracking-tight">
              There is nothing at this address
            </h1>
            <p className="mt-5 max-w-measure font-display text-body">
              The link may be old, or it may have a typo in it. Here is the rest
              of the site.
            </p>

            <ul className="mt-6">
              {PRIMARY_NAV.map(({ href, label }) => (
                <li key={href} className="mt-2">
                  <Link href={href} className="font-data text-body text-accent">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <Frame shot="D-01" sizes="(min-width: 64rem) 33vw, 100vw" />
          </div>
        </div>
      </Bleed>
    </Surface>
  )
}
