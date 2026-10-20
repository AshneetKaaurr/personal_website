import Link from 'next/link'

import { ClosingCta, StatBand } from '@/components/Blocks'
import { PageHero } from '@/components/PageHero'
import { PaperCards, ThemeCards } from '@/components/Research'
import { Reveal, SectionShell } from '@/components/Shell'
import { Bullets, Button, CARD_STATIC, Chips, SectionHead } from '@/components/ui'
import { byCitations, byTheme, getPublication, journalArticles, publications, totalCitations } from '@/content/publications'
import { AWARDS } from '@/content/record'
import { THEMES, themeHref } from '@/content/research'
import { HER_NAME_IN_AUTHORS } from '@/content/schema'
import { LINKEDIN_URL, SCHOLAR_URL } from '@/content/site'
import { pageMeta } from '@/lib/meta'

export const metadata = pageMeta({
  title: 'Research',
  description:
    'Dr Ashneet Kaur’s research on AI, privacy and trust at work; green HRM; fairness and well-being; women’s careers and global mobility; and founders, new ventures and governance.',
  path: '/research/',
  image: '/photos/p-03-lectern.jpg',
})

export default function Research() {
  const abdcA = journalArticles.filter((p) => p.abdc === 'A').length
  const leadPapers = journalArticles.filter((p) => p.authors[0] === HER_NAME_IN_AUTHORS)
  const lead = leadPapers.length
  const mostCited = [...journalArticles].sort(byCitations).slice(0, 3)
  // Everyone she has published with, from the author lists themselves.
  const coAuthors = [...new Set(publications.flatMap((p) => p.authors))]
    .filter((a) => a !== HER_NAME_IN_AUTHORS)
    .sort()

  return (
    <>
      <PageHero
        word="Research"
        title="What happens to people when the systems around them change."
        lede={
          <p>
            My research examines how AI-driven systems affect engagement, trust and culture, and the
            ethical side of algorithmic decisions in HR, alongside work on green HRM, fairness,
            careers and new ventures. {journalArticles.length} peer-reviewed papers so far, {lead} as
            lead author.
          </p>
        }
        actions={
          <>
            <Button variant="light" href="/publications">All publications</Button>
            <Button variant="light" href={SCHOLAR_URL} external>Google Scholar</Button>
          </>
        }
      />

      <SectionShell label="The record">
        <SectionHead
          title="Work other researchers build on."
          lede="Every figure is calculated from the publication list. Citation counts are per-paper Google Scholar figures as of July 2026."
        />
        <div className="mt-12">
          <StatBand
            stats={[
              { value: String(totalCitations), label: `Citations to the ${journalArticles.length} journal papers`, sub: 'Google Scholar, July 2026' },
              { value: String(abdcA), label: 'Papers in ABDC-A journals', sub: `Of ${journalArticles.length} peer-reviewed papers` },
              { value: String(lead), label: 'Lead-authored papers', sub: [...new Set(leadPapers.map((p) => p.venue))].join('; ') },
              { value: String(AWARDS.length), label: 'Best Paper Awards', sub: AWARDS.map((a) => a.year).join(', ') },
            ]}
          />
        </div>
      </SectionShell>

      <SectionShell label="Five themes">
        <SectionHead
          title="Five strands of research."
          lede="Each theme is drawn from her research statement and the papers filed under it. Open a theme for its questions, concepts and full publication list."
        />
        <div className="mt-12">
          <ThemeCards withPhoto />
        </div>
      </SectionShell>

      <SectionShell label="Themes in depth" imageSrc="/photos/w-01-desk.jpg">
        <SectionHead title="The questions behind each theme." />
        <div className="mt-12 space-y-6">
          {THEMES.map((t, i) => {
            const papers = byTheme(t.id)
            return (
              <Reveal key={t.id} delay={0.04 * i} className={`grid gap-8 p-7 sm:p-10 lg:grid-cols-[1fr_1fr] lg:gap-12 ${CARD_STATIC}`}>
                <div>
                  <h3 className="font-serif text-[clamp(1.4rem,2.2vw,1.8rem)] leading-snug text-dark-text">{t.title}</h3>
                  <p className="mt-4 font-sans text-[15px] leading-relaxed text-dark-text/80">{t.intro[0]}</p>
                  <div className="mt-5">
                    <Bullets items={t.questions.slice(0, 3)} />
                  </div>
                </div>
                <div>
                  <p className="font-sans text-[13px] font-medium text-dark-text/70">Publications in this theme</p>
                  <ul className="mt-3 divide-y divide-dark-text/[0.07]">
                    {papers.map((p) => (
                      <li key={p.id} className="py-3">
                        <p className="font-serif text-[16.5px] leading-snug text-dark-text">{p.shortTitle}</p>
                        <p className="mt-1 font-sans text-[12.5px] text-dark-text/70">
                          <span className="italic">{p.venue}</span>, {p.year}
                        </p>
                      </li>
                    ))}
                  </ul>
                  <Link href={themeHref(t.id)} className="mt-5 inline-flex items-center gap-2 font-sans text-[14px] font-medium text-dark-text underline decoration-coral/50 underline-offset-4 hover:decoration-coral">
                    Explore this theme<span className="sr-only">: {t.title}</span>
                  </Link>
                </div>
              </Reveal>
            )
          })}
        </div>
      </SectionShell>

      <SectionShell label="Most cited">
        <SectionHead title="The most-cited papers." lede="Ranked by Google Scholar citations, July 2026." />
        <div className="mt-12">
          <PaperCards papers={mostCited} />
        </div>
        <div className="mt-10">
          <Button href="/publications">See every publication</Button>
        </div>
      </SectionShell>

      <SectionShell label="Recognition">
        <SectionHead title="Three best-paper awards." />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {AWARDS.map((a, i) => {
            const paper = getPublication(a.paperId)
            return (
              <Reveal key={a.paperId} delay={0.07 * i} className={`flex h-full flex-col p-7 ${CARD_STATIC}`}>
                <p className="font-serif text-[32px] leading-none text-dark-text">{a.year}</p>
                <h3 className="mt-4 font-sans text-[14.5px] font-medium leading-snug text-dark-text">{a.title}</h3>
                <p className="mt-3 font-serif text-[16px] italic leading-snug text-dark-text/85">&ldquo;{a.paper}&rdquo;</p>
                <p className="mt-3 flex-1 font-sans text-[13.5px] leading-relaxed text-dark-text/75">{a.detail}</p>
                <Link href={themeHref(paper.themes[0]!)} className="mt-5 font-sans text-[13px] font-medium text-dark-text underline decoration-coral/40 underline-offset-4 hover:decoration-coral">
                  Theme: {THEMES.find((t) => t.id === paper.themes[0])?.title}
                </Link>
              </Reveal>
            )
          })}
        </div>
      </SectionShell>

      <SectionShell label="Research network">
        <SectionHead
          title="Co-authors."
          lede="Everyone she has published with, named as they appear in the author lists of her papers, chapter and teaching case."
        />
        <Reveal className="mt-10">
          <Chips items={coAuthors} />
        </Reveal>
        <p className="mt-8 font-sans text-[14.5px] text-dark-text/80">
          Conferences, editorial work and reviewing are on the{' '}
          <Link href="/teaching" className="font-medium text-dark-text underline decoration-coral/50 underline-offset-4 hover:decoration-coral">
            teaching and academic engagement
          </Link>{' '}
          page.
        </p>
      </SectionShell>

      <SectionShell label="Verify independently">
        <SectionHead title="Check the record yourself." />
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Button href={SCHOLAR_URL} variant="secondary" external>Google Scholar</Button>
          <Button href={LINKEDIN_URL} variant="secondary" external>LinkedIn</Button>
        </div>
      </SectionShell>

      <ClosingCta
        eyebrow="Research"
        title="Bring the evidence in-house."
        body="Research collaborations, or a session built on the findings."
        primary={{ label: 'Start a conversation', href: '#contact' }}
        secondary={{ label: 'All publications', href: '/publications' }}
      />
    </>
  )
}
