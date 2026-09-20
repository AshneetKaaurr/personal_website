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
    <div className="space-y-3">
      {items.map((item) => (
        <div
          key={`${item.event}-${item.when}`}
          className="flex items-start gap-4 rounded-2xl bg-white/40 backdrop-blur-md border border-white/50 p-4 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:bg-white/60 transition-all duration-300"
        >
          <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-coral/60" />
          <div className="flex-1">
            <span className="leading-relaxed font-medium">{item.event}</span>
            <span className="flex flex-wrap items-center gap-2 mt-1">
              {item.place ? (
                <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-dark-text/5 text-xs text-sage">{item.place}</span>
              ) : null}
              <span className="text-xs text-sage">{item.when}</span>
              {item.upcoming ? (
                <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-coral/10 text-xs font-medium text-coral">upcoming</span>
              ) : null}
            </span>
          </div>
        </div>
      ))}
    </div>
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
        <div className="space-y-4">
          {SPEAKING_TOPICS.map((topic, i) => (
            <div key={topic} className="flex items-start gap-5 group">
              <span className="font-serif text-3xl md:text-4xl text-coral/30 leading-none flex-shrink-0 w-10 text-right group-hover:text-coral/60 transition-colors">
                {i + 1}
              </span>
              <p className="leading-relaxed text-lg pt-1 text-dark-text/80 group-hover:text-dark-text transition-colors">
                {topic}
              </p>
            </div>
          ))}
        </div>

        <Note kind="approve" item="all six topic lines">
          Drafted from her published work rather than invented, but they are her
          talks and they should be her words.
        </Note>
      </Section>

      <Section
        title="Academy of Management"
        intro="Six annual meetings across six years. That is the headline of this page, not a bullet in a list."
      >
        {/* Visual timeline strip */}
        <div className="mb-8 flex items-center gap-1 overflow-x-auto no-scrollbar pb-2">
          {AOM.slice().reverse().map((item) => (
            <div
              key={item.when}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-medium transition-colors ${
                item.upcoming
                  ? 'bg-coral/10 text-coral border border-coral/20'
                  : 'bg-dark-text/5 text-dark-text/70'
              }`}
            >
              {item.when.split(' ')[1] || item.when}
            </div>
          ))}
        </div>
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
