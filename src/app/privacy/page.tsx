import { Container, Note, PageTitle, Prose, Section } from '@/components/Page'

export const metadata = {
  title: 'Privacy',
  description: 'What this site collects, what it does not, and how to ask about it.',
}

export default function Privacy() {
  return (
    <Container>
      <PageTitle>Privacy notice</PageTitle>

      <Section>
        <Prose>
          <p>This site collects as little as it can.</p>

          <p>
            <strong>Analytics.</strong> The site counts page views so we know
            which pages are read. It does not set cookies, does not track you
            across other sites, and does not build a profile of you.
          </p>

          <p>
            <strong>The contact form.</strong> If you send an enquiry, the name,
            email address, enquiry type and message you submit are passed to Dr
            Kaur so she can reply. They are used for that and nothing else. They
            are not sold, not shared with anyone else, and not added to a
            mailing list.
          </p>

          <p>
            <strong>Images.</strong> Photographs on this site are published with
            the consent of the people in them.
          </p>

          <p>
            <strong>Getting in touch about your data.</strong> Write to the
            email address on the contact page and ask. If you want a copy of
            what has been submitted, or want it deleted, say so and it will be
            done.
          </p>
        </Prose>

        <Note kind="needs" item="this notice must match what is actually implemented">
          <p>
            The analytics paragraph promises no cookies. If the provider chosen
            sets one, that paragraph has to change before launch, not after. A
            privacy notice that describes something other than the running
            implementation is worse than no notice.
          </p>
          <p>
            Still outstanding: the analytics provider, the form provider, and
            how long form submissions are retained.
          </p>
        </Note>
      </Section>
    </Container>
  )
}
