import Link from 'next/link'
import {
  Container,
  Draft,
  Note,
  PageLink,
  PageTitle,
  Section,
} from '@/components/Page'
import { publications } from '@/content/publications'
import { AWARDS, SERVICE } from '@/content/record'
import { THEMES, themeHref } from '@/content/themes'

export const metadata = {
  title: 'Research',
  description:
    'Research on AI and employee privacy, sustainable HR systems, careers and new ventures. Twelve published records, three best-paper awards.',
}

export default function Research() {
  return (
    <Container>
      <PageTitle>Research</PageTitle>

      <Section>
        <Draft>
          <p>
            Organisations are adopting systems that make decisions about people
            faster than they are working out what those systems do to the
            people. That is the problem I research.
          </p>
          <p>
            I examine how AI-driven systems affect employee engagement, trust
            and cultural evolution, and the ethical and emotional consequences
            of algorithmic decision-making in human resources: privacy,
            fairness, well-being. Alongside that I work on whether people
            systems deliver what they claim, whether green HR practices change
            environmental performance or stay on paper, what unfairness does to
            what people are willing to share, and what makes teams in young
            companies able to move quickly.
          </p>
          <p>
            The through-line is the distance between a system as designed and a
            system as lived. Most of what goes wrong at work happens in that
            gap.
          </p>
        </Draft>

        <Note kind="approve" item="the programme statement above" />
      </Section>

      <Section
        title="Four themes"
        intro="Each theme is shown with its papers, the recognition attached to it and the writing that came out of it, together rather than scattered across the site."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {THEMES.map((theme) => {
            const papers = publications.filter((p) => p.theme === theme.id)
            return (
              <Link
                key={theme.id}
                href={themeHref(theme.id)}
                className="group rounded-2xl bg-white/50 backdrop-blur-md border border-white/50 p-6 shadow-[0_2px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] hover:bg-white/70 transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-serif text-lg md:text-xl group-hover:text-coral transition-colors">
                      {theme.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-dark-text/70">
                      {theme.statement}
                    </p>
                  </div>
                  <span className="mt-1 text-coral opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200 text-xl flex-shrink-0">
                    →
                  </span>
                </div>
                <div className="mt-4 pt-3 border-t border-dark-text/5">
                  <span className="text-xs font-medium uppercase tracking-wider text-sage">
                    {papers.length} {papers.length === 1 ? 'record' : 'records'}
                  </span>
                </div>
              </Link>
            )
          })}
        </div>

        <Note kind="approve" item="the four-theme structure and every paper assigned to a theme">
          <p>
            BUILD-PLAN.md assumed three themes. Four are proposed because two of
            her three best-paper awards are on new ventures and founders, and
            with the agility paper, the Product Entrepreneurship Lab, Start Your
            Business, FiNovate, BCERC, the Academy of Management Entrepreneurship
            Division editorship and two ventures she founded herself,
            entrepreneurship is not a sideline in this record. Under a
            three-theme structure it disappears.
          </p>
          <p>
            One honest weak point: the meta-analysis on executive overconfidence
            is corporate governance rather than entrepreneurship, and is the
            poorest fit of the twelve under any structure. It sits in Founders,
            ventures and growth for now.
          </p>
        </Note>
      </Section>

      <Section title="Recognition">
        <div className="grid gap-4 md:grid-cols-3">
          {AWARDS.map((award) => (
            <div key={award.paper} className="rounded-2xl bg-gradient-to-br from-amber-50/80 to-white/60 backdrop-blur-md border border-amber-100/50 p-5 shadow-[0_2px_16px_rgba(0,0,0,0.04)]">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-amber-500 text-lg">★</span>
                <span className="text-xs font-medium uppercase tracking-wider text-amber-600/80">{award.year}</span>
              </div>
              <p className="font-medium leading-relaxed text-sm">{award.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-dark-text/70">{award.paper}</p>
              <p className="mt-2 text-xs text-sage">{award.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Editorial and service">
        <ul className="space-y-3">
          {SERVICE.map((item) => (
            <li key={item} className="flex items-start gap-3 leading-relaxed">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-coral/40 flex-shrink-0" />
              <span className="text-dark-text/80">{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Work in progress">
        <Note kind="needs" item="the working-paper titles">
          Three of her award-winning conference papers do not appear in the
          published list, which suggests they are under review: both 2023 award
          papers and the 2025 Anusandhan paper. Worth confirming whether those
          can be listed as under review, and where.
        </Note>
      </Section>

      <Section>
        <p>
          <PageLink href="/publications">All publications</PageLink>
        </p>
        <Note kind="needs" item="her Google Scholar URL">
          Linked from the CV, but the address has to be extracted.
        </Note>
      </Section>
    </Container>
  )
}
