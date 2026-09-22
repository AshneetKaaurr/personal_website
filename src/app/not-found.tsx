import { Container, PageTitle, Section } from '@/components/Page'
import { PRIMARY_NAV } from '@/lib/nav'
import Link from 'next/link'

export const metadata = {
  title: 'Page not found',
}

export default function NotFound() {
  return (
    <Container className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <div className="relative w-full max-w-2xl mx-auto mt-20">
        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] font-serif font-bold text-dark-text/[0.03] select-none z-0">
          404
        </h1>
        
        <div className="relative z-10">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">
            There is nothing at this address
          </h2>
          <p className="text-lg text-sage max-w-md mx-auto mb-10">
            The link may be old, or it may have a typo in it. Here is the rest of the site.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-3 max-w-lg mx-auto">
            {PRIMARY_NAV.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="px-4 py-2 rounded-full bg-white/50 backdrop-blur-md border border-white/50 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:bg-white/70 hover:text-coral transition-all text-sm font-medium"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Container>
  )
}
