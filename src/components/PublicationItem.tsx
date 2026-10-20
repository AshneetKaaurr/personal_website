import Link from 'next/link'

import { CARD_STATIC } from '@/components/ui'
import { getTheme, themeHref } from '@/content/research'
import { HER_NAME_IN_AUTHORS, type Publication } from '@/content/schema'

/**
 * A single publication record. Kept free of the validated dataset so the
 * client-side publications filter can use it without shipping Zod.
 */

const TYPE_LABEL: Record<Publication['type'], string> = {
  journal: 'Journal article',
  'book-chapter': 'Book chapter',
  case: 'Teaching case',
  conference: 'Conference paper',
}

const LINK =
  'font-sans text-[13px] text-dark-text underline decoration-coral/40 underline-offset-4 hover:decoration-coral'

function doiHref(p: Publication) {
  return p.doi ? `https://doi.org/${p.doi}` : p.url
}

export function Authors({ authors }: { authors: string[] }) {
  return (
    <>
      {authors.map((a, i) => (
        <span key={`${a}-${i}`}>
          {a === HER_NAME_IN_AUTHORS ? <strong className="font-semibold text-dark-text">{a}</strong> : a}
          {i < authors.length - 2 ? ', ' : i === authors.length - 2 ? ' & ' : ''}
        </span>
      ))}
    </>
  )
}

/**
 * One publication record: type, ranking, citations, award, authors in their
 * published order, full title, venue, the plain-English line, links, themes.
 */
export function PublicationItem({
  p,
  index,
  showThemes = true,
}: {
  p: Publication
  index?: number
  showThemes?: boolean
}) {
  const href = doiHref(p)
  return (
    <article className={`grid gap-4 p-6 sm:grid-cols-[7.5rem_1fr] sm:gap-8 sm:p-8 ${CARD_STATIC}`}>
      <div className="flex flex-wrap items-center gap-2 sm:flex-col sm:items-start">
        {index !== undefined ? (
          <span className="font-serif text-[28px] leading-none text-dark-text/70">{String(index).padStart(2, '0')}</span>
        ) : null}
        <span className="font-sans text-[12.5px] font-medium text-dark-text/75">{TYPE_LABEL[p.type]}</span>
        {p.abdc ? (
          <span className="rounded-full bg-coral/15 px-2.5 py-0.5 font-sans text-[12px] font-medium text-dark-text">ABDC {p.abdc}</span>
        ) : null}
        {p.citations !== null ? (
          <span className="font-sans text-[12.5px] text-dark-text/70">
            {p.citations} {p.citations === 1 ? 'citation' : 'citations'}
          </span>
        ) : null}
      </div>
      <div>
        <p className="font-sans text-[13.5px] leading-relaxed text-dark-text/75">
          {p.authors.length ? (
            <>
              <Authors authors={p.authors} /> ({p.year})
            </>
          ) : (
            <>{p.year}</>
          )}
        </p>
        <h3 className="mt-2 font-serif text-[19px] leading-snug text-dark-text">{p.title}</h3>
        <p className="mt-2 font-sans text-[13.5px] text-dark-text/75">
          <span className="italic">{p.venue}</span>
          {p.volumeIssue ? `, ${p.type === 'journal' ? '' : 'vol. '}${p.volumeIssue}` : ''}
          {p.pages ? `, ${p.pages}` : ''}
        </p>
        {p.award ? (
          <p className="mt-3 inline-block rounded-full bg-coral/15 px-3 py-1 font-sans text-[12.5px] font-medium text-dark-text">
            {p.award}
          </p>
        ) : null}
        <p className="mt-3 max-w-[70ch] font-sans text-[14px] leading-relaxed text-dark-text/80">{p.summary}</p>
        <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2">
          {href ? (
            <a href={href} target="_blank" rel="noreferrer" className={`break-all ${LINK}`}>
              {p.doi ? `doi.org/${p.doi}` : 'Read'}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          ) : null}
          {p.extraLinks?.map((l) => (
            <a key={l.url} href={l.url} target="_blank" rel="noreferrer" className={LINK}>
              {l.label}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          ))}
        </div>
        {showThemes ? (
          <ul className="mt-4 flex flex-wrap gap-2" aria-label="Research themes">
            {p.themes.map((id) => {
              const theme = getTheme(id)
              return theme ? (
                <li key={id}>
                  <Link href={themeHref(id)} className="rounded-full bg-dark-text/[0.06] px-3 py-1 font-sans text-[12px] font-medium text-dark-text/80 transition-colors hover:bg-dark-text/[0.12]">
                    {theme.title}
                  </Link>
                </li>
              ) : null
            })}
          </ul>
        ) : null}
      </div>
    </article>
  )
}

