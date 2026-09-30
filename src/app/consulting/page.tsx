import {
  Container,
  Draft,
  Note,
  PageTitle,
  Section,
} from '@/components/Page'
import { StackCards } from '@/components/StackCards'
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
        <StackCards 
          cards={ENGAGEMENTS.map((engagement, i) => {
            const images = ['/photos/m-01-boardroom-group.jpg', '/photos/m-02-office-visit.jpg', '/photos/c-01-boardroom-session.jpg', '/photos/s-05-hric-backdrop.jpg']
            return {
              id: engagement.client,
              title: engagement.client,
              content: (
                <p>{engagement.detail}</p>
              ),
              imageSrc: images[i % images.length],
              imageAlt: engagement.client
            }
          })}
        />
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
