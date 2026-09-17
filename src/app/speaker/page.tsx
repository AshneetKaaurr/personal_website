import {
  Container,
  Note,
  PageLink,
  PageTitle,
  Section,
} from '@/components/Page'
import {
  AOM,
  EGOS,
  OTHER_CONFERENCES,
  SPEAKING_TOPICS,
  type Appearance,
} from '@/content/record'

export const metadata = {
  title: 'Speaker',
  description:
    'Six Academy of Management annual meetings, EGOS, EURAM and BCERC. Topics on AI and trust at work, careers, sustainable HR and leadership through film.',
}

function Stages({ items }: { items: Appearance[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={`${item.event}-${item.when}`} className="leading-relaxed">
          <span>{item.event}</span>
          <span className="block text-sm text-sage">
            {[item.place, item.when].filter(Boolean).join(', ')}
            {item.upcoming ? ' — upcoming' : ''}
          </span>
        </li>
      ))}
    </ul>
  )
}

export default function Speaker() {
  return (
    <Container>
      <PageTitle lede="Five Academy of Management annual meetings between 2021 and 2025, with Philadelphia 2026 ahead. EGOS in Vienna and Cagliari, EURAM in Dublin, BCERC in Knoxville.">
        Speaker
      </PageTitle>

      <Section
        title="Topics"
        intro="Written as headline-ready sentences, the way a programme chair would print them."
      >
        <ul className="space-y-3">
          {SPEAKING_TOPICS.map((topic) => (
            <li key={topic} className="leading-relaxed">
              {topic}
            </li>
          ))}
        </ul>

        <Note kind="approve" item="all six topic lines">
          Drafted from her published work rather than invented, but they are her
          talks and they should be her words.
        </Note>
      </Section>

      <Section
        title="Academy of Management"
        intro="Six annual meetings across six years. That is the headline of this page, not a bullet in a list."
      >
        <Stages items={AOM} />
      </Section>

      <Section title="EGOS Colloquium">
        <Stages items={EGOS} />
      </Section>

      <Section title="Other conferences and workshops">
        <Stages items={OTHER_CONFERENCES} />
      </Section>

      <Section>
        <p>
          <PageLink href="/speaker/press-kit">Press kit</PageLink>
        </p>
      </Section>
    </Container>
  )
}
