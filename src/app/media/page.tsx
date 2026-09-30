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
        <Note kind="needs" item="Could you add a line to each article saying why you wrote it?">
          That is the thing that makes this page yours rather than a list of
          links anyone could have assembled. The lines below are placeholders
          &mdash; I wrote them from the titles alone, because I have not read the
          pieces.
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
              {article.url ? (
                <a href={article.url} target="_blank" rel="noreferrer" className="group/link inline-block">
                  <h3 className="font-serif text-lg leading-snug group-hover/link:text-coral transition-colors flex items-start gap-2">
                    <span>{article.title}</span>
                    <svg className="w-4 h-4 mt-1 opacity-0 -translate-y-1 translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-y-0 group-hover/link:translate-x-0 transition-all text-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </h3>
                </a>
              ) : (
                <h3 className="font-serif text-lg leading-snug">
                  {article.title}
                </h3>
              )}
              <p className="mt-2 leading-relaxed text-dark-text/70">{article.holding}</p>
              {article.reach ? (
                <p className="mt-2 text-sm text-coral/80 bg-coral/5 rounded-xl px-3 py-2">{article.reach}</p>
              ) : null}
            </div>
          ))}
        </div>


      </Section>

      <Section
        title="Podcast"
        intro="She leads SPJIMR's video podcast series on AI and digital transformation, featuring senior executives and covering change management and capability development."
      >
        <Note kind="needs" item="Could you send me the podcast episodes?">
          Titles, dates, guests and links, as far as you have them.
        </Note>
      </Section>

      <Section
        title="Bios"
        intro="Both written in the third person, ready to copy. This is the page a journalist on deadline lands on."
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

        <Note kind="approve" item="Read both bios and tell me what to change.">
          Neither one says where you are now, because I did not want to guess.
          Both read correctly either way, and there is a place for your current
          title the moment you give me one. These are the two blocks journalists
          will copy and paste, so they are worth a careful read.
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
