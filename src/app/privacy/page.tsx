import { Container, Note, PageTitle, Prose, Section } from '@/components/Page'
import { EMAIL } from '@/content/record'

export const metadata = {
  title: 'Privacy Notice',
  description: 'How this site handles data and privacy.',
}

export default function Privacy() {
  return (
    <Container>
      <PageTitle lede="This site is a static record. It does not track you, profile you or sell your data.">
        Privacy Notice
      </PageTitle>

      <Section>
        <Prose>
          <div className="space-y-12">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center text-sage flex-shrink-0 mt-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              </div>
              <div>
                <h2 className="font-serif text-xl mb-3">Analytics and cookies</h2>
                <p>
                  This site uses Vercel Analytics to count visitors and see which
                  pages are read. It is a privacy-first system that does not use
                  cookies, does not track individuals across sites, and anonymises
                  IP addresses before they are stored.
                </p>
                <p className="mt-3">
                  Because there are no tracking cookies, there is no cookie banner.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-coral/10 flex items-center justify-center text-coral flex-shrink-0 mt-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <div>
                <h2 className="font-serif text-xl mb-3">Contact form</h2>
                <p>
                  When you use the contact form, the details you provide are sent
                  directly to {EMAIL} and are not stored in a database on this
                  server. They are kept only as long as required to answer your
                  enquiry.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center text-sage flex-shrink-0 mt-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              </div>
              <div>
                <h2 className="font-serif text-xl mb-3">Photographs</h2>
                <p>
                  Every group photograph on this site is published with the written
                  consent of the people identifiable in it. If you appear in a
                  photograph and wish it to be removed, please write to {EMAIL} and
                  it will be taken down immediately.
                </p>
              </div>
            </div>
          </div>
        </Prose>

        <Note kind="approve" item="this notice">
          A plain-English privacy notice. Requires review if the technical
          implementation changes (for instance, if Vercel Analytics is dropped for
          Google Analytics, which requires a consent banner under GDPR).
        </Note>
      </Section>
    </Container>
  )
}
