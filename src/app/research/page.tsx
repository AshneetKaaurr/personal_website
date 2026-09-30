import Link from 'next/link'
import {
  Container,
  Draft,
  PageLink,
  PageTitle,
  Section,
} from '@/components/Page'
import { publications } from '@/content/publications'
import {
  AWARDS,
  SERVICE,
  AOM,
  EGOS,
  OTHER_CONFERENCES,
  SCHOLAR_URL,
  type Appearance,
} from '@/content/record'
import { THEMES, themeHref } from '@/content/themes'
import GlassIcons from '@/components/GlassIcons'
import { Shield, Scale, Network, Rocket } from 'lucide-react'

export const metadata = {
  title: 'Research',
  description:
    'Research on AI and employee privacy, sustainable HR systems, careers and new ventures. Twelve published records, three best-paper awards.',
}

/** One conference row. Moved here with the conference data itself. */
function Stages({ items }: { items: Appearance[] }) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <div
          key={`${item.event}-${item.when}`}
          className="flex items-start gap-4 rounded-2xl border border-white/50 bg-white/40 p-4 shadow-[0_2px_8px_rgba(0,0,0,0.02)] backdrop-blur-md transition-all duration-300 hover:bg-white/60 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)]"
        >
          <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-coral/60" />
          <div className="flex-1">
            <span className="font-medium leading-relaxed">{item.event}</span>
            <span className="mt-1 flex flex-wrap items-center gap-2">
              {item.place ? (
                <span className="inline-flex items-center rounded-full bg-dark-text/5 px-2 py-0.5 text-xs text-sage">
                  {item.place}
                </span>
              ) : null}
              <span className="text-xs text-sage">{item.when}</span>
              {item.upcoming ? (
                <span className="inline-flex items-center rounded-full bg-coral/10 px-2 py-0.5 text-xs font-medium text-coral">
                  upcoming
                </span>
              ) : null}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
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

      </Section>

      <Section
        title="Four themes"
        intro="Each theme is shown with its papers, the recognition attached to it and the writing that came out of it, together rather than scattered across the site."
      >
        <div className="grid gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-4 mt-8">
          {THEMES.map((theme, index) => {
            const papers = publications.filter((p) => p.theme === theme.id)
            const icons = [
              { icon: <Shield strokeWidth={1.5} />, color: 'blue' },
              { icon: <Scale strokeWidth={1.5} />, color: 'purple' },
              { icon: <Network strokeWidth={1.5} />, color: 'indigo' },
              { icon: <Rocket strokeWidth={1.5} />, color: 'orange' },
            ]
            return (
              <Link
                key={theme.id}
                href={themeHref(theme.id)}
                className="flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300 rounded-3xl bg-white/40 backdrop-blur-md border border-white/60 p-6 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:bg-white/60"
              >
                <GlassIcons 
                  items={[
                    {
                      icon: icons[index]?.icon ?? icons[0]!.icon,
                      color: icons[index]?.color ?? icons[0]!.color,
                      label: '',
                    },
                  ]}
                  className="!py-0 !gap-0 !grid-cols-1 place-items-center mb-6" 
                />
                <h3 className="font-serif text-lg group-hover:text-coral transition-colors">
                  {theme.title}
                </h3>
                <p className="mt-2 text-sm text-sage px-2 leading-relaxed">
                  {theme.statement}
                </p>
                <div className="mt-4 pt-3 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-sage opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>{papers.length} {papers.length === 1 ? 'record' : 'records'}</span>
                  <span className="text-coral group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            )
          })}
        </div>

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
        <ul className="grid gap-3 sm:grid-cols-2">
          {SERVICE.map((item) => (
            <li key={item} className="flex items-center gap-4 leading-relaxed p-4 rounded-2xl bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
              <span className="w-1.5 h-1.5 rounded-full bg-coral/60 flex-shrink-0" />
              <span className="text-dark-text/80 text-sm font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        title="Recent conference papers"
        intro="Presented and recognised, ahead of publication."
      >
        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {AWARDS.map((a) => (
            <li key={a.paper} className="p-5 rounded-2xl bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:bg-white/60 transition-all duration-300">
              <p className="font-serif text-lg leading-snug text-dark-text">{a.paper}</p>
              <p className="mt-3 text-sm font-medium text-sage">
                {a.title}, <span className="text-coral">{a.year}</span>
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        title="Academy of Management"
        intro="Six annual meetings across six years, 2021 to 2026."
      >
        {/* Visual timeline strip */}
        <div className="mb-8 flex items-center gap-1 overflow-x-auto no-scrollbar pb-2">
          {AOM.slice().reverse().map((item) => (
            <div
              key={item.when}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-medium transition-colors ${
                item.upcoming
                  ? 'bg-coral/10 text-coral border border-coral/20'
                  : 'bg-dark-text/5 text-dark-text/70'
              }`}
            >
              {item.when.split(' ')[1] || item.when}
            </div>
          ))}
        </div>
        <Stages items={AOM} />
      </Section>

      <Section title="EGOS Colloquium">
        <Stages items={EGOS} />
      </Section>

      <Section title="Other conferences and workshops">
        <Stages items={OTHER_CONFERENCES} />
      </Section>

      <Section>
        <p>
          <PageLink href="/publications">All publications</PageLink>
          <span className="mx-3 text-sage">&middot;</span>
          <a
            href={SCHOLAR_URL}
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4 decoration-coral/30 hover:text-coral hover:decoration-coral transition-colors"
          >
            Google Scholar
          </a>
        </p>
      </Section>
    </Container>
  )
}
