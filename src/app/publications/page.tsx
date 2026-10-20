import { ClosingCta, StatBand } from '@/components/Blocks'
import { JsonLd, scholarlyArticlesLd } from '@/components/JsonLd'
import { PageHero } from '@/components/PageHero'
import { PublicationExplorer } from '@/components/PublicationExplorer'
import { SectionShell } from '@/components/Shell'
import { Button, SectionHead } from '@/components/ui'
import { journalArticles, publications, totalCitations } from '@/content/publications'
import { ARTICLES, AWARDS } from '@/content/record'
import { THEMES } from '@/content/research'
import { HER_NAME_IN_AUTHORS } from '@/content/schema'
import { SCHOLAR_URL } from '@/content/site'
import { pageMeta } from '@/lib/meta'

export const metadata = pageMeta({
  title: 'Publications',
  description:
    'The complete publication record of Dr Ashneet Kaur: peer-reviewed journal articles, a book chapter, a teaching case, award-winning conference papers and practitioner articles, filterable by type, theme and year.',
  path: '/publications/',
  image: '/photos/w-01-desk.jpg',
})

export default function Publications() {
  const abdcA = journalArticles.filter((p) => p.abdc === 'A').length
  const lead = journalArticles.filter((p) => p.authors[0] === HER_NAME_IN_AUTHORS).length
  const count = (t: string) => publications.filter((p) => p.type === t).length

  return (
    <>
      <JsonLd data={scholarlyArticlesLd()} />

      <PageHero
        word="Papers"
        title="The full publication record."
        lede={
          <p>
            {journalArticles.length} peer-reviewed journal articles, {count('book-chapter')} book
            chapter, {count('case')} teaching case, {count('conference')} award-winning conference
            papers and {ARTICLES.length} articles for practitioners. Filter by type, research theme or
            year.
          </p>
        }
        actions={<Button variant="light" href={SCHOLAR_URL} external>Google Scholar profile</Button>}
      />

      <SectionShell label="In numbers">
        <SectionHead
          title="The record at a glance."
          lede="Counts are calculated from the list below. Citation figures are per-paper Google Scholar counts as of July 2026."
        />
        <div className="mt-12">
          <StatBand
            stats={[
              { value: String(journalArticles.length), label: 'Peer-reviewed journal articles', sub: `${lead} as lead author` },
              { value: String(abdcA), label: 'In ABDC-A ranked journals', sub: 'Communications of the AIS, Organization & Environment, Personnel Review, IJCM, APJM' },
              { value: String(totalCitations), label: 'Citations to the journal articles', sub: 'Sum of per-paper Google Scholar counts, July 2026' },
              { value: String(AWARDS.length), label: 'Best Paper Awards', sub: 'AOM 2023, EDII 2023 and Anusandhan RDAIS 2025' },
            ]}
          />
        </div>
      </SectionShell>

      <SectionShell label="All publications" id="list">
        <SectionHead
          title="Every publication, newest first."
          lede="Authors appear in published order, with Dr Kaur’s name in bold. Each summary describes what the work examines."
        />
        <div className="mt-10">
          <PublicationExplorer
            publications={publications}
            articles={ARTICLES}
            themes={THEMES.map((t) => ({ id: t.id, title: t.title }))}
          />
        </div>
      </SectionShell>

      <ClosingCta
        eyebrow="Research"
        title="Interested in the research behind these papers?"
        body="Research collaborations, access to a paper, or a session built on the findings: write and say which."
        primary={{ label: 'Start a conversation', href: '#contact' }}
        secondary={{ label: 'Explore the research themes', href: '/research' }}
      />
    </>
  )
}
