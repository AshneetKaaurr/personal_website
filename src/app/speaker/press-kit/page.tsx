import {
  Container,
  PageLink,
  PageTitle,
  Record,
  RecordList,
  Section,
} from '@/components/Page'
import { LONG_BIO, SHORT_BIO, wordCount } from '@/content/record'

export const metadata = {
  title: 'Press kit',
  description:
    'Bios, preferred name and title spelling, and photographs for programme chairs and journalists.',
}

export default function PressKit() {
  const longBioWords = LONG_BIO.reduce((n, p) => n + wordCount(p), 0)

  return (
    <Container>
      <PageTitle lede="For programme chairs and journalists.">Press kit</PageTitle>

      <Section title="Preferred forms">
        <RecordList columns={2}>
          <Record label="Name">Dr Ashneet Kaur</Record>
          <Record label="Short descriptor">
            Scholar and educator in Organizational Behaviour and Human Resource
            Management
          </Record>
        </RecordList>

      </Section>

      <Section title="Short bio">
        <p className="text-sm text-sage">{wordCount(SHORT_BIO)} words</p>
        <p className="mt-3 max-w-2xl leading-relaxed">{SHORT_BIO}</p>
      </Section>

      <Section title="Long bio">
        <p className="text-sm text-sage">{longBioWords} words</p>
        <div className="mt-3 max-w-2xl space-y-4 leading-relaxed">
          {LONG_BIO.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
      </Section>

      <Section title="Photographs">
        <p className="max-w-2xl leading-relaxed text-dark-text/70">
          The photographs on this site are sized for screens. For print
          resolution, or for a different frame from the same sessions, write to
          the address on the contact page and I will send originals.
        </p>
        <p className="mt-6">
          <PageLink href="/gallery">See the photographs</PageLink>
        </p>
      </Section>

      <Section>
        <p>
          <PageLink href="/speaker">Back to speaker</PageLink>
        </p>
      </Section>
    </Container>
  )
}
