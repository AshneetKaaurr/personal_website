import { notFound } from 'next/navigation'

import {
  Container,
  PageLink,
  PageTitle,
  Section,
} from '@/components/Page'
import { publications } from '@/content/publications'
import { THEMES } from '@/content/themes'

/**
 * One page per research theme, prerendered from the theme list.
 *
 * The four pages are structurally identical — a statement, its papers, the
 * recognition attached to it and the writing that came out of it — so they are
 * one route rather than four near-copies that would drift apart.
 */

export function generateStaticParams() {
  return THEMES.map((theme) => ({ theme: theme.id }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ theme: string }>
}) {
  const { theme: id } = await params
  const theme = THEMES.find((t) => t.id === id)
  if (!theme) return {}
  return { title: theme.title, description: theme.statement }
}

export default async function ThemePage({
  params,
}: {
  params: Promise<{ theme: string }>
}) {
  const { theme: id } = await params
  const theme = THEMES.find((t) => t.id === id)
  if (!theme) notFound()

  const papers = publications.filter((p) => p.theme === theme.id)

  return (
    <Container>
      <PageTitle lede={theme.statement}>{theme.title}</PageTitle>

      <Section title="Papers">
        <ul className="space-y-8">
          {papers.map((paper) => (
            <li key={paper.id}>
              <p className="text-sm text-sage">
                {paper.year}
                {paper.abdc ? ` — ABDC ${paper.abdc}` : ''}
              </p>
              {paper.url ? (
                <a
                  href={paper.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/title inline-block mt-1"
                >
                  <h3 className="font-serif text-lg leading-snug group-hover/title:text-coral transition-colors inline">
                    {paper.title}
                  </h3>
                  <span className="inline-block ml-1.5 text-coral text-sm opacity-70 group-hover/title:opacity-100 transition-opacity">
                    ↗
                  </span>
                </a>
              ) : (
                <h3 className="mt-1 font-serif text-lg leading-snug">
                  {paper.title}
                </h3>
              )}
              <p className="mt-1 text-sm text-sage">
                {paper.authors.join('; ')}. {paper.venue}.
              </p>
              <p className="mt-2 leading-relaxed">{paper.summary}</p>
              {paper.extraLinks && paper.extraLinks.length > 0 ? (
                <div className="mt-3 flex flex-wrap items-center gap-4">
                  {paper.extraLinks.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium text-coral hover:text-dark-text transition-colors"
                    >
                      <span>{link.label}</span>
                      <span aria-hidden="true">&rarr;</span>
                    </a>
                  ))}
                </div>
              ) : paper.url ? (
                <div className="mt-3">
                  <a
                    href={paper.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-coral hover:text-dark-text transition-colors"
                  >
                    <span>View Publication</span>
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              ) : null}
            </li>
          ))}
        </ul>
      </Section>

      {theme.relatedWork.length > 0 ? (
        <Section title="Related teaching and recognition">
          <ul className="space-y-2">
            {theme.relatedWork.map((item) => (
              <li key={item} className="leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </Section>
      ) : null}

      {theme.relatedMedia.length > 0 ? (
        <Section title="Related writing">
          <ul className="space-y-2">
            {theme.relatedMedia.map((item) => (
              <li key={item} className="leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6">
            <PageLink href="/media">All media articles</PageLink>
          </p>
        </Section>
      ) : null}

      <Section>
        <p className="mt-6">
          <PageLink href="/research">Back to research</PageLink>
        </p>
      </Section>
    </Container>
  )
}
