import { Container, Note, PageTitle, Section } from '@/components/Page'

export const metadata = {
  title: 'Social Media',
}

const PLATFORMS = [
  { name: 'LinkedIn', icon: 'in' },
  { name: 'Google Scholar', icon: 'scholar' },
  { name: 'Twitter / X', icon: 'x' }
]

export default function Social() {
  return (
    <Container>
      <PageTitle>Social Media</PageTitle>

      <Section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl">
          {PLATFORMS.map((platform) => (
            <div 
              key={platform.name}
              className="rounded-2xl bg-white/40 backdrop-blur-md border border-white/40 p-6 flex items-center justify-between opacity-60 grayscale"
            >
              <span className="font-medium text-dark-text/80">{platform.name}</span>
              <span className="text-xs font-medium uppercase tracking-wider text-sage px-2 py-1 bg-dark-text/5 rounded-full">
                Pending
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Note kind="needs" item="all social URLs">
            None are provided in the CV. Until they are, this page cannot be
            linked from the footer.
          </Note>
        </div>
      </Section>
    </Container>
  )
}
