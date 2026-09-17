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
        <ul className="space-y-10">
          {THEMES.map((theme) => {
            const papers = publications.filter((p) => p.theme === theme.id)
            return (
              <li key={theme.id}>
                <h3 className="font-serif text-xl">
                  <PageLink href={themeHref(theme.id)}>{theme.title}</PageLink>
                </h3>
                <p className="mt-2 max-w-2xl leading-relaxed">
                  {theme.statement}
                </p>
                <p className="mt-2 text-sm text-sage">
                  {papers.length} {papers.length === 1 ? 'record' : 'records'}
                </p>
              </li>
            )
          })}
        </ul>

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
        <ul className="space-y-6">
          {AWARDS.map((award) => (
            <li key={award.paper}>
              <p className="text-sm text-sage">{award.year}</p>
              <p className="mt-1 font-medium leading-relaxed">{award.title}</p>
              <p className="mt-1 leading-relaxed">{award.paper}</p>
              <p className="mt-1 text-sm text-sage">{award.detail}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Editorial and service">
        <ul className="space-y-3">
          {SERVICE.map((item) => (
            <li key={item} className="leading-relaxed">
              {item}
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
