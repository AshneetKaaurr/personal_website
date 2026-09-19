import {
  Container,
  Note,
  PageTitle,
  Section,
} from '@/components/Page'
import { byRecency, publications } from '@/content/publications'
import { getTheme } from '@/content/themes'
import type { Publication } from '@/content/schema'

export const metadata = {
  title: 'Publications',
  description:
    'Ten journal papers, an Oxford University Press book chapter and a teaching case, each with a plain-English line on what it examines.',
}

const GROUPS: { type: Publication['type']; heading: string }[] = [
  { type: 'journal', heading: 'Journal papers' },
  { type: 'book-chapter', heading: 'Book chapter' },
  { type: 'case', heading: 'Teaching case' },
  { type: 'working-paper', heading: 'Working papers' },
]

/** Her name in the author list is the one that should read as hers. */
function Authors({ authors }: { authors: string[] }) {
  return (
    <p className="mt-1 text-sm text-sage">
      {authors.map((author, i) => (
        <span key={`${author}-${i}`}>
          {i > 0 ? ', ' : ''}
          <span className={author === 'Kaur, A.' ? 'text-coral font-medium' : undefined}>
            {author}
          </span>
        </span>
      ))}
    </p>
  )
}

export default function Publications() {
  return (
    <Container>
      <PageTitle lede="Ten journal papers, a book chapter with Oxford University Press, and a teaching case. Each carries one plain-English line describing what the paper examines — written for someone deciding whether to read it, not for a reviewer.">
        Publications
      </PageTitle>

      <Section>
        <Note kind="approve" item="all twelve plain-English summaries">
          Every line below describes what the paper looks at. None states a
          result, an effect size or a conclusion, because none of these papers
          has been read. She approves or rewrites each one, and the production
          build should fail while any remains a draft.
        </Note>

        <Note kind="needs" item="DOIs for all twelve records">
          Not on the CV. Retrievable from Google Scholar, then worth checking
          each against the published record.
        </Note>
      </Section>

      {GROUPS.map(({ type, heading }) => {
        const records = publications.filter((p) => p.type === type).sort(byRecency)
        if (records.length === 0) return null

        return (
          <Section key={type} title={heading}>
            <div className="space-y-4">
              {records.map((paper) => (
                <div
                  key={paper.id}
                  className="group rounded-2xl bg-white/50 backdrop-blur-md border border-white/50 p-5 md:p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:bg-white/70 transition-all duration-300"
                >
                  {/* Top meta row */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-dark-text/5 text-xs font-medium text-dark-text">
                      {paper.year}
                    </span>
                    {paper.abdc ? (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-coral/10 text-xs font-medium text-coral">
                        ABDC {paper.abdc}
                      </span>
                    ) : null}
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-sage/10 text-xs text-sage">
                      {getTheme(paper.theme).title}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg leading-snug group-hover:text-coral transition-colors">
                    {paper.title}
                  </h3>
                  <Authors authors={paper.authors} />
                  <p className="mt-1 text-sm text-sage">
                    {paper.venue}
                    {paper.volumeIssue ? `, ${paper.volumeIssue}` : ''}
                    {paper.pages ? `, ${paper.pages}` : ''}
                  </p>
                  <p className="mt-3 leading-relaxed text-dark-text/70">{paper.summary}</p>
                </div>
              ))}
            </div>
          </Section>
        )
      })}

      <Section title="Still to build">
        <Note kind="needs" item="filters, and a citation action">
          <p>
            Filters by type, theme and year, synced to the URL so a filtered
            view can be linked and shared. And a Cite action that copies a
            formatted APA string. Both are Phase 5 work; neither is a content
            question.
          </p>
        </Note>
      </Section>
    </Container>
  )
}
