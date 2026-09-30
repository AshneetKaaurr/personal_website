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

const THEME_ICONS = ['👥', '💡', '🤖', '⚙️', '⏱️']

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
        <Note kind="approve" item="Does this opening line sound like you?" />
      </Section>

      <Section
        title="Programme themes"
        intro="Five themes, run for corporates, government bodies and social-sector organisations."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {MDP_THEMES.map((theme, i) => (
            <div key={theme.title} className="rounded-2xl bg-white/50 backdrop-blur-md border border-white/50 p-5 shadow-[0_2px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:bg-white/70 transition-all duration-300">
              <span className="text-2xl mb-3 block">{THEME_ICONS[i]}</span>
              <h3 className="font-serif text-lg mb-2">{theme.title}</h3>
              <p className="text-sm leading-relaxed text-dark-text/70">{theme.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="How she works">
        <Note kind="needs" item="How do you actually run an engagement, from first call to finish?">
          I would like to set your method out as a few clear steps, because this
          is one of the places on the site where a real sequence earns its place.
          There is nothing about it on your CV and I am not going to invent one.
          Two or three sentences from you is plenty.
        </Note>
      </Section>

      <Section
        title="Engagements"
        intro="Presented as work, not as logo wallpaper."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {ENGAGEMENTS.map((engagement) => (
            <div key={engagement.client} className="rounded-2xl bg-white/50 backdrop-blur-md border border-white/50 p-5 md:p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:bg-white/70 transition-all duration-300">
              <h3 className="font-serif text-lg text-dark-text mb-2">{engagement.client}</h3>
              <p className="leading-relaxed text-dark-text/70 text-sm">
                {engagement.detail}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Talk about a programme">
        <Note kind="needs" item="How quickly do you want to promise to reply?">
          Your real answer, whatever it is. I would rather print nothing than
          promise &ldquo;within 24 hours&rdquo; because it sounds good and then
          have it be untrue.
        </Note>
      </Section>
    </Container>
  )
}
