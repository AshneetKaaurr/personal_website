import {
  Container,
  Draft,
  PageLink,
  PageTitle,
  Section,
} from '@/components/Page'
import { StackCards } from '@/components/StackCards'
import { ENGAGEMENTS, MDP_THEMES, METHOD } from '@/content/record'
import GlassIcons from '@/components/GlassIcons'
import { Users, Lightbulb, Bot, Settings, Timer } from 'lucide-react'

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
      </Section>

      <Section
        title="Programme themes"
        intro="Five themes, run for corporates, government bodies and social-sector organisations."
      >
        <div className="grid gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {MDP_THEMES.map((theme, i) => {
            const icons = [
              { icon: <Users strokeWidth={1.5} />, color: 'blue' },
              { icon: <Lightbulb strokeWidth={1.5} />, color: 'purple' },
              { icon: <Bot strokeWidth={1.5} />, color: 'orange' },
              { icon: <Settings strokeWidth={1.5} />, color: 'indigo' },
              { icon: <Timer strokeWidth={1.5} />, color: 'green' },
            ]
            return (
              <div key={theme.title} className="flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300">
                <GlassIcons 
                  items={[
                    {
                      icon: icons[i]?.icon ?? icons[0]!.icon,
                      color: icons[i]?.color ?? icons[0]!.color,
                      label: '',
                    },
                  ]}
                  className="!py-0 !gap-0 !grid-cols-1 place-items-center mb-6" 
                />
                <h3 className="font-serif text-lg mb-2 text-dark-text group-hover:text-coral transition-colors">{theme.title}</h3>
                <p className="text-sm leading-relaxed text-sage px-4">{theme.detail}</p>
              </div>
            )
          })}
        </div>
      </Section>

      <Section
        title="How I work"
        intro="The same four beats run through every engagement."
      >
        <ol className="space-y-6">
          {METHOD.map((m, i) => (
            <li key={m.step} className="flex gap-5">
              <span className="font-serif text-2xl leading-none text-coral/50 pt-1">
                0{i + 1}
              </span>
              <div>
                <h3 className="font-serif text-lg">{m.step}</h3>
                <p className="mt-1.5 max-w-2xl leading-relaxed text-dark-text/70">
                  {m.detail}
                </p>
              </div>
            </li>
          ))}
        </ol>
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
        <p className="max-w-2xl leading-relaxed text-dark-text/70">
          Tell me what the group is, what has already been tried, and what you
          want them doing differently afterwards. That is usually enough to say
          whether a programme is the right answer.
        </p>
        <p className="mt-6">
          <PageLink href="/contact">Start a conversation</PageLink>
        </p>
      </Section>
    </Container>
  )
}
