import Link from 'next/link'

import { Photo, CARD, CARD_STATIC } from '@/components/ui'
import { Reveal } from '@/components/Shell'
import { byTheme } from '@/content/publications'
import { PublicationItem } from '@/components/PublicationItem'
import { THEMES, themeHref, type ResearchTheme } from '@/content/research'
import type { Publication } from '@/content/schema'

function doiHref(p: Publication) {
  return p.doi ? `https://doi.org/${p.doi}` : p.url
}


/** Journal, year, plain title, one line, DOI. Used on Home and the AI page. */
export function PaperCards({ papers }: { papers: Publication[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {papers.map((paper, i) => {
        const href = doiHref(paper)
        return (
          <Reveal key={paper.id} delay={0.06 * i}>
            <article className={`flex h-full flex-col p-7 ${CARD_STATIC}`}>
              <p className="font-sans text-[12.5px] font-medium text-dark-text/70">
                <span className="italic">{paper.venue}</span>, {paper.year}
                {paper.abdc ? <span className="ml-2 inline-block whitespace-nowrap rounded-full bg-coral/15 px-2 py-0.5 not-italic text-dark-text">ABDC {paper.abdc}</span> : null}
              </p>
              <h3 className="mt-4 font-serif text-[20px] leading-snug text-dark-text">{paper.shortTitle}</h3>
              <p className="mt-3 flex-1 font-sans text-[14px] leading-relaxed text-dark-text/75">{paper.summary}</p>
              {href ? (
                <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-dark-text/[0.07] pt-5">
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full bg-dark-text px-4 py-2 font-sans text-[12.5px] font-medium text-white transition-colors hover:bg-coral"
                  >
                    Read the paper
                    <svg viewBox="0 0 16 16" aria-hidden="true" className="h-3 w-3 fill-none stroke-current stroke-[1.75] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      <path d="M5 11 11 5M6 5h5v5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="sr-only">: {paper.shortTitle} (opens in a new tab)</span>
                  </a>
                  {paper.doi ? (
                    <span className="min-w-0 truncate font-sans text-[11.5px] text-dark-text/55" title={`doi.org/${paper.doi}`}>
                      DOI {paper.doi}
                    </span>
                  ) : null}
                </div>
              ) : null}
            </article>
          </Reveal>
        )
      })}
    </div>
  )
}

/** A numbered list of publication records. */
export function PublicationTable({ papers, showThemes = true }: { papers: Publication[]; showThemes?: boolean }) {
  return (
    <ol className="space-y-4">
      {papers.map((p, i) => (
        <Reveal key={p.id} delay={0.03 * i} as="li">
          <PublicationItem p={p} index={i + 1} showThemes={showThemes} />
        </Reveal>
      ))}
    </ol>
  )
}

/** The five research themes as linked cards, with a count from the data. */
function themeGrid(n: number) {
  // Five: two wide cards over three. Four: two by two. Otherwise threes.
  if (n === 5) return { grid: 'sm:grid-cols-2 lg:grid-cols-6', item: (i: number) => (i < 2 ? 'lg:col-span-3' : `lg:col-span-2 ${i === 4 ? 'sm:col-span-2 lg:col-span-2' : ''}`) }
  if (n === 4) return { grid: 'sm:grid-cols-2', item: () => '' }
  return { grid: 'sm:grid-cols-2 lg:grid-cols-3', item: () => '' }
}

export function ThemeCards({ themes = THEMES, withPhoto = false }: { themes?: ResearchTheme[]; withPhoto?: boolean }) {
  const layout = themeGrid(themes.length)
  return (
    <ul className={`grid gap-5 ${layout.grid}`}>
      {themes.map((t, i) => {
        const count = byTheme(t.id).length
        return (
          <Reveal key={t.id} delay={0.05 * i} as="li" className={layout.item(i)}>
            <Link href={themeHref(t.id)} className={`group flex h-full flex-col overflow-hidden ${CARD}`}>
              {withPhoto ? <Photo shot={t.shot} sizes="(max-width: 640px) 100vw, 33vw" className="aspect-[16/9]! rounded-none shadow-none" /> : null}
              <div className="flex flex-1 flex-col p-7">
                <h3 className="font-serif text-[21px] leading-snug text-dark-text transition-colors group-hover:text-coral">{t.title}</h3>
                <p className="mt-3 flex-1 font-sans text-[14.5px] leading-relaxed text-dark-text/75">{t.short}</p>
                <p className="mt-5 flex items-center justify-between border-t border-dark-text/[0.07] pt-4 font-sans text-[13px] text-dark-text/75">
                  <span>
                    {count} {count === 1 ? 'publication' : 'publications'}
                  </span>
                  <span aria-hidden="true" className="text-coral transition-transform duration-500 group-hover:translate-x-1">&rarr;</span>
                </p>
              </div>
            </Link>
          </Reveal>
        )
      })}
    </ul>
  )
}

export { Authors } from '@/components/PublicationItem'
