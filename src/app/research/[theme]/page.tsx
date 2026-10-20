import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { ClosingCta, RuledList } from '@/components/Blocks'
import { PageHero } from '@/components/PageHero'
import { PublicationTable, ThemeCards } from '@/components/Research'
import { Reveal, SectionShell } from '@/components/Shell'
import { Bullets, CARD_STATIC, SectionHead } from '@/components/ui'
import { byCitations, byTheme } from '@/content/publications'
import { ARTICLES } from '@/content/record'
import { THEMES, getTheme } from '@/content/research'
import { pageMeta } from '@/lib/meta'

export const dynamicParams = false

export function generateStaticParams() {
  return THEMES.map((t) => ({ theme: t.id }))
}

export async function generateMetadata({ params }: { params: Promise<{ theme: string }> }): Promise<Metadata> {
  const { theme } = await params
  const t = getTheme(theme)
  if (!t) return {}
  return pageMeta({
    title: `${t.title} | Research`,
    description: `${t.short} Research questions, concepts and publications by Dr Ashneet Kaur.`,
    path: `/research/${t.id}/`,
  })
}

export default async function ThemePage({ params }: { params: Promise<{ theme: string }> }) {
  const { theme } = await params
  const t = getTheme(theme)
  if (!t) notFound()

  const papers = byTheme(t.id)
  const peerReviewed = papers.filter((p) => p.type !== 'conference').sort(byCitations)
  const conference = papers.filter((p) => p.type === 'conference')
  const articles = ARTICLES.filter((a) => a.themes.includes(t.id))
  const others = THEMES.filter((x) => x.id !== t.id)

  return (
    <>
      <PageHero
        word="Research"
        title={t.title}
        lede={<p>{t.short}</p>}
      >
        <p className="mt-5 font-sans text-[13.5px] text-white/85">
          <Link href="/research" className="underline decoration-white/50 underline-offset-4 hover:decoration-white">Research overview</Link>
          {' / '}
          {papers.length} {papers.length === 1 ? 'publication' : 'publications'} in this theme
        </p>
      </PageHero>

      <SectionShell label="Introduction">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <Reveal className="max-w-[40rem] space-y-5 font-sans text-[16px] leading-relaxed text-dark-text/80">
            {t.intro.map((para) => (
              <p key={para.slice(0, 24)}>{para}</p>
            ))}
          </Reveal>
          <Reveal delay={0.1} className={`p-8 ${CARD_STATIC}`}>
            <h2 className="font-serif text-[22px] leading-snug text-dark-text">Research questions</h2>
            <div className="mt-5">
              <Bullets items={t.questions} />
            </div>
          </Reveal>
        </div>
      </SectionShell>

      <SectionShell label="Concepts">
        <SectionHead
          title="Concepts and frameworks."
          lede="Only the concepts named in the papers themselves or in her research statement, with where each comes from."
        />
        <div className="mt-12">
          <RuledList items={t.concepts.map((c) => ({ label: c.term, value: c.source }))} />
        </div>
      </SectionShell>

      {peerReviewed.length ? (
        <SectionShell label="Publications">
          <SectionHead title="Published work in this theme." lede="Authors in published order. Each summary describes what the work examines." />
          <div className="mt-12">
            <PublicationTable papers={peerReviewed} showThemes={false} />
          </div>
        </SectionShell>
      ) : null}

      {conference.length ? (
        <SectionShell label="Conference papers">
          <SectionHead title="Award-winning conference papers." />
          <div className="mt-12">
            <PublicationTable papers={conference} showThemes={false} />
          </div>
        </SectionShell>
      ) : null}

      <SectionShell label="Beyond the papers">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal className={`p-8 ${CARD_STATIC}`}>
            <h2 className="font-serif text-[22px] leading-snug text-dark-text">In teaching and service</h2>
            <div className="mt-5">
              <Bullets items={t.practice} />
            </div>
          </Reveal>
          {articles.length ? (
            <Reveal delay={0.08} className={`p-8 ${CARD_STATIC}`}>
              <h2 className="font-serif text-[22px] leading-snug text-dark-text">Written for practitioners</h2>
              <ul className="mt-5 divide-y divide-dark-text/[0.07]">
                {articles.map((a) => (
                  <li key={a.title} className="py-3">
                    {a.url ? (
                      <a href={a.url} target="_blank" rel="noreferrer" className="font-serif text-[17px] leading-snug text-dark-text underline decoration-coral/30 underline-offset-4 hover:decoration-coral">
                        {a.title}
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    ) : (
                      <p className="font-serif text-[17px] leading-snug text-dark-text">{a.title}</p>
                    )}
                    <p className="mt-1 font-sans text-[13px] text-dark-text/70">
                      {a.outlet}, {a.year}. {a.authorship}.
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
          ) : null}
        </div>
      </SectionShell>

      <SectionShell label="Related themes">
        <SectionHead title="The other research themes." />
        <div className="mt-12">
          <ThemeCards themes={others} />
        </div>
      </SectionShell>

      <ClosingCta
        eyebrow="Research"
        title="Working on a question in this area?"
        body="Research collaborations, access to a paper, or a session built on this work."
        primary={{ label: 'Start a conversation', href: '#contact' }}
        secondary={{ label: 'All publications', href: '/publications' }}
      />
    </>
  )
}
