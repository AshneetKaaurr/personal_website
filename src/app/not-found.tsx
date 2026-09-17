import { Container, PageTitle, Section } from '@/components/Page'
import { PRIMARY_NAV } from '@/lib/nav'
import Link from 'next/link'

export const metadata = {
  title: 'Page not found',
}

export default function NotFound() {
  return (
    <Container>
      <PageTitle lede="The link may be old, or it may have a typo in it. Here is the rest of the site.">
        There is nothing at this address
      </PageTitle>

      <Section>
        <ul className="space-y-3">
          {PRIMARY_NAV.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="underline underline-offset-4 hover:text-coral"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </Container>
  )
}
