import {
  Container,
  Note,
  PageLink,
  PageTitle,
  Section,
} from '@/components/Page'
import { CopyButton } from '@/components/CopyButton'
import { ARTICLES, LONG_BIO, SHORT_BIO, wordCount } from '@/content/record'

export const metadata = {
  title: 'Media Articles',
  description:
    'Eight published articles on AI and HR, sustainable leadership, global assignments and entrepreneurship, plus copy-ready short and long bios.',
}

export default function Media() {
  const longBioWords = LONG_BIO.reduce((n, p) => n + wordCount(p), 0)
  const longBioText = LONG_BIO.join('\n\n')

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

        <div className="mt-4 space-y-4">
          {ARTICLES.map((article) => (
            <div key={article.title} className="rounded-2xl bg-white/50 backdrop-blur-md border border-white/50 p-5 md:p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:bg-white/70 transition-all duration-300">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-dark-text/5 text-xs font-medium text-dark-text">
                  {article.outlet}
                </span>
                <span className="text-xs text-sage">{article.year}</span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-sage/10 text-xs text-sage">
                  {article.authorship}
                </span>
              </div>
              <h3 className="font-serif text-lg leading-snug">
                {article.title}
              </h3>
              <p className="mt-2 leading-relaxed text-dark-text/70">{article.holding}</p>
              {article.reach ? (
                <p className="mt-2 text-sm text-coral/80 bg-coral/5 rounded-xl px-3 py-2">{article.reach}</p>
              ) : null}
            </div>
          ))}
        </div>

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
        <div className="space-y-6">
          <div className="rounded-2xl bg-white/50 backdrop-blur-md border border-white/50 p-5 md:p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
            <div className="flex items-center justify-between gap-4 mb-4">
              <h3 className="font-serif text-lg">
                Short bio{' '}
                <span className="text-sm font-normal text-sage">
                  {wordCount(SHORT_BIO)} words
                </span>
              </h3>
              <CopyButton text={SHORT_BIO} label="bio" />
            </div>
            <p className="max-w-2xl leading-relaxed text-dark-text/80">{SHORT_BIO}</p>
          </div>

          <div className="rounded-2xl bg-white/50 backdrop-blur-md border border-white/50 p-5 md:p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
            <div className="flex items-center justify-between gap-4 mb-4">
              <h3 className="font-serif text-lg">
                Long bio{' '}
                <span className="text-sm font-normal text-sage">
                  {longBioWords} words
                </span>
              </h3>
              <CopyButton text={longBioText} label="bio" />
            </div>
            <div className="max-w-2xl space-y-4 leading-relaxed text-dark-text/80">
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

        <p className="mt-6">
          <PageLink href="/speaker/press-kit">
            The press kit carries these with the photographs
          </PageLink>
        </p>
      </Section>
    </Container>
  )
}
