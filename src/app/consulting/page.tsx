import {
  Container,
  Draft,
  Note,
  PageTitle,
  Section,
} from '@/components/Page'
import { ENGAGEMENTS, MDP_THEMES } from '@/content/record'

export const metadata = {
  title: 'Consulting',
  description:
    'Executive programmes on AI and HR, design thinking, team leadership and strategic people systems. Past engagements with ICAI, Bosch India, HURL and ATOS.',
}

export default function Consulting() {
  return (
    <Container>
      <PageTitle>Consulting</PageTitle>

      <Section>
        <Draft>
          <p>
            I run executive programmes for corporates, government bodies and
            social-sector organisations, and I have done the consulting work I
            teach about, at ATOS, at McKinsey, and on projects with ICAI, Bosch
            India and HURL.
          </p>
        </Draft>
        <Note kind="approve" item="the opening line above" />
      </Section>

      <Section
        title="Programme themes"
        intro="Drawn from the customised-programme record. Not a sequence, so not numbered."
      >
        <ul className="space-y-8">
          {MDP_THEMES.map((theme) => (
            <li key={theme.title}>
              <h3 className="font-serif text-lg">{theme.title}</h3>
              <p className="mt-2 max-w-2xl leading-relaxed">{theme.detail}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="How she works">
        <Note kind="needs" item="her actual method, in her words">
          BUILD-PLAN.md proposes a four-step sequence — diagnostic, design,
          delivery, follow-through — but that appears nowhere in the CV and must
          not ship as her method until she describes her real process. This is
          one of the few places on the site where a genuine sequence would
          justify numbering, so it is worth asking for.
        </Note>
      </Section>

      <Section
        title="Engagements"
        intro="Presented as work, not as logo wallpaper."
      >
        <ul className="space-y-8">
          {ENGAGEMENTS.map((engagement) => (
            <li key={engagement.client}>
              <h3 className="font-serif text-lg">{engagement.client}</h3>
              <p className="mt-2 max-w-2xl leading-relaxed">
                {engagement.detail}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Talk about a programme">
        <Note kind="needs" item="an honest response-time commitment">
          Nothing here should say &quot;within 24 hours&quot; because it reads
          well.
        </Note>
      </Section>
    </Container>
  )
}
