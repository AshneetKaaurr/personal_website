'use client'

import { useId, useMemo, useState } from 'react'

import { PublicationItem } from '@/components/PublicationItem'
import { CARD_STATIC } from '@/components/ui'
import type { Article } from '@/content/record'
import type { Publication, ThemeId } from '@/content/schema'

type TypeFilter = Publication['type'] | 'article' | 'all'

const TYPE_LABELS: Record<Exclude<TypeFilter, 'all'>, string> = {
  journal: 'Journal articles',
  'book-chapter': 'Book chapters',
  case: 'Teaching cases',
  conference: 'Conference papers',
  article: 'Practitioner articles',
}

type Entry =
  | { kind: 'publication'; key: string; year: number; title: string; themes: ThemeId[]; type: Publication['type']; p: Publication }
  | { kind: 'article'; key: string; year: number; title: string; themes: ThemeId[]; type: 'article'; a: Article }

const SELECT =
  'w-full rounded-full border border-dark-text/15 bg-white/70 px-4 py-2.5 font-sans text-[14px] text-dark-text'

/** First year in a label like "2024 to 2025", for sorting and filtering. */
function articleYear(a: Article) {
  return Number(a.year.slice(0, 4))
}

export function PublicationExplorer({
  publications,
  articles,
  themes,
}: {
  publications: Publication[]
  articles: Article[]
  themes: { id: ThemeId; title: string }[]
}) {
  const [type, setType] = useState<TypeFilter>('all')
  const [theme, setTheme] = useState<ThemeId | 'all'>('all')
  const [year, setYear] = useState<number | 'all'>('all')
  const id = useId()

  const entries: Entry[] = useMemo(
    () =>
      [
        ...publications.map((p) => ({ kind: 'publication' as const, key: p.id, year: p.year, title: p.title, themes: p.themes, type: p.type, p })),
        ...articles.map((a) => ({ kind: 'article' as const, key: a.title, year: articleYear(a), title: a.title, themes: a.themes, type: 'article' as const, a })),
      ].sort((x, y) => y.year - x.year || x.title.localeCompare(y.title)),
    [publications, articles],
  )

  const years = useMemo(() => [...new Set(entries.map((e) => e.year))].sort((a, b) => b - a), [entries])
  const typesPresent = (Object.keys(TYPE_LABELS) as Exclude<TypeFilter, 'all'>[]).filter((t) => entries.some((e) => e.type === t))

  const visible = entries.filter(
    (e) =>
      (type === 'all' || e.type === type) &&
      (theme === 'all' || e.themes.includes(theme)) &&
      (year === 'all' || e.year === year),
  )
  const filtered = type !== 'all' || theme !== 'all' || year !== 'all'

  return (
    <div>
      <form
        role="search"
        aria-label="Filter publications"
        onSubmit={(e) => e.preventDefault()}
        className={`grid gap-4 p-6 sm:grid-cols-2 sm:p-7 lg:grid-cols-[1fr_1.4fr_0.8fr_auto] lg:items-end ${CARD_STATIC}`}
      >
        <div>
          <label htmlFor={`${id}-type`} className="mb-1.5 block font-sans text-[13px] font-medium text-dark-text/80">Type</label>
          <select id={`${id}-type`} value={type} onChange={(e) => setType(e.target.value as TypeFilter)} className={SELECT}>
            <option value="all">All types</option>
            {typesPresent.map((t) => (
              <option key={t} value={t}>{TYPE_LABELS[t]}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor={`${id}-theme`} className="mb-1.5 block font-sans text-[13px] font-medium text-dark-text/80">Research theme</label>
          <select id={`${id}-theme`} value={theme} onChange={(e) => setTheme(e.target.value as ThemeId | 'all')} className={SELECT}>
            <option value="all">All themes</option>
            {themes.map((t) => (
              <option key={t.id} value={t.id}>{t.title}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor={`${id}-year`} className="mb-1.5 block font-sans text-[13px] font-medium text-dark-text/80">Year</label>
          <select id={`${id}-year`} value={year} onChange={(e) => setYear(e.target.value === 'all' ? 'all' : Number(e.target.value))} className={SELECT}>
            <option value="all">All years</option>
            {years.map((y) => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
        </div>
        <button
          type="button"
          onClick={() => {
            setType('all')
            setTheme('all')
            setYear('all')
          }}
          disabled={!filtered}
          className="rounded-full border border-dark-text/15 bg-white/60 px-5 py-2.5 font-sans text-[13px] font-medium text-dark-text transition-colors hover:bg-white disabled:opacity-50"
        >
          Clear filters
        </button>
      </form>

      <p className="mt-6 font-sans text-[14px] text-dark-text/80" role="status" aria-live="polite">
        Showing {visible.length} of {entries.length} {entries.length === 1 ? 'record' : 'records'}.
      </p>

      {visible.length === 0 ? (
        <div className={`mt-6 p-8 font-sans text-[15px] text-dark-text/80 ${CARD_STATIC}`}>
          Nothing matches those filters. Try a different combination, or clear them.
        </div>
      ) : (
        <ul className="mt-6 space-y-4">
          {visible.map((e) =>
            e.kind === 'publication' ? (
              <li key={e.key}>
                <PublicationItem p={e.p} />
              </li>
            ) : (
              <li key={e.key}>
                <ArticleItem a={e.a} themes={themes} />
              </li>
            ),
          )}
        </ul>
      )}
    </div>
  )
}

function ArticleItem({ a, themes }: { a: Article; themes: { id: ThemeId; title: string }[] }) {
  return (
    <article className={`grid gap-4 p-6 sm:grid-cols-[7.5rem_1fr] sm:gap-8 sm:p-8 ${CARD_STATIC}`}>
      <div>
        <span className="font-sans text-[12.5px] font-medium text-dark-text/75">Practitioner article</span>
      </div>
      <div>
        <p className="font-sans text-[13.5px] text-dark-text/75">
          {a.authorship} ({a.year})
        </p>
        <h3 className="mt-2 font-serif text-[19px] leading-snug text-dark-text">{a.title}</h3>
        <p className="mt-2 font-sans text-[13.5px] italic text-dark-text/75">{a.outlet}</p>
        {a.reach ? <p className="mt-3 max-w-[70ch] font-sans text-[14px] leading-relaxed text-dark-text/80">{a.reach}</p> : null}
        <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2">
          {a.url ? (
            <a href={a.url} target="_blank" rel="noreferrer" className="font-sans text-[13px] text-dark-text underline decoration-coral/40 underline-offset-4 hover:decoration-coral">
              Read the article
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          ) : null}
          {a.themes.map((t) => (
            <span key={t} className="rounded-full bg-dark-text/[0.06] px-3 py-1 font-sans text-[12px] font-medium text-dark-text/80">
              {themes.find((x) => x.id === t)?.title}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}
