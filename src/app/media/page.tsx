import {
  Container,
  Note,
  PageLink,
  PageTitle,
  Section,
} from '@/components/Page'
import { ARTICLES, LONG_BIO, SHORT_BIO, wordCount } from '@/content/record'

export const metadata = {
  title: 'Media Articles',
  description:
    'Eight published articles on AI and HR, sustainable leadership, global assignments and entrepreneurship, plus copy-ready short and long bios.',
}

export default function Media() {
  const longBioWords = LONG_BIO.reduce((n, p) => n + wordCount(p), 0)

  return (
    <Container>
      <PageTitle lede="Eight pieces written for people who have to act on this, rather than cite it.">
        Media Articles
      </PageTitle>

      <Section title="Articles">
        <Note kind="needs" item="her framing note on each piece — why she wrote it">
          That note is what makes this page hers rather than a link list. The
          lines below describe each piece from its title and outlet only, as a
          holding draft.
        </Note>

        <ul className="mt-4 space-y-8">
          {ARTICLES.map((article) => (
            <li key={article.title}>
              <p className="text-sm text-sage">
                {article.outlet}, {article.year} — {article.authorship}
              </p>
              <h3 className="mt-1 font-serif text-lg leading-snug">
                {article.title}
              </h3>
              <p className="mt-2 leading-relaxed">{article.holding}</p>
              {article.reach ? (
                <p className="mt-2 leading-relaxed text-sage">{article.reach}</p>
              ) : null}
            </li>
          ))}
        </ul>

        <Note kind="needs" item="links to all eight articles">
          The CV names the outlets but carries no URLs.
        </Note>
      </Section>

      <Section
        title="Podcast"
        intro="She leads SPJIMR's video podcast series on AI and digital transformation, featuring senior executives and covering change management and capability development."
      >
        <Note kind="needs" item="the episode list">
          Episodes with dates, guests and links.
        </Note>
      </Section>

      <Section
        title="Bios"
        intro="Both written in the third person, for other people to paste. This is the page a journalist on deadline lands on."
      >
        <div className="space-y-10">
          <div>
            <h3 className="font-serif text-lg">
              Short bio{' '}
              <span className="text-sm font-normal text-sage">
                {wordCount(SHORT_BIO)} words
              </span>
            </h3>
            <p className="mt-3 max-w-2xl leading-relaxed">{SHORT_BIO}</p>
          </div>

          <div>
            <h3 className="font-serif text-lg">
              Long bio{' '}
              <span className="text-sm font-normal text-sage">
                {longBioWords} words
              </span>
            </h3>
            <div className="mt-3 max-w-2xl space-y-4 leading-relaxed">
              {LONG_BIO.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>

        <Note kind="approve" item="both bios">
          Neither names a current institution, because the CV does not state
          one. Both are written to read correctly either way, with a slot for
          the current title once she supplies it.
        </Note>

        <Note kind="needs" item="a one-click copy control on each bio">
          Phase 5 work, not a content question.
        </Note>

        <p className="mt-6">
          <PageLink href="/speaker/press-kit">
            The press kit carries these with the photographs
          </PageLink>
        </p>
      </Section>
    </Container>
  )
}
