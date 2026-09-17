import { Container, Note, PageTitle, Section } from '@/components/Page'

export const metadata = {
  title: 'Social Media',
  description: 'Recent talks, publications and writing, with dates.',
}

export default function Social() {
  return (
    <Container>
      <PageTitle lede="What she is working on at the moment, with dates, so you can tell whether this page is alive.">
        Social Media
      </PageTitle>

      <Section>
        <Note kind="needs" item="a decision between two options">
          <p>
            <strong>A curated collection</strong> she adds to: four to six
            items, each with a real date, a link and one line of her framing.
            Manual, but it is hers and the design keeps control of it. This is
            the recommendation.
          </p>
          <p>
            <strong>A LinkedIn embed.</strong> No maintenance, but it renders as
            a third-party widget, the design loses control of it, and it reads
            as filler.
          </p>
          <p>
            Whichever ships, the page carries a visible last-updated date, and
            the build warns when the newest item passes ninety days old. A
            decorative feed is worse than no feed.
          </p>
        </Note>
      </Section>
    </Container>
  )
}
