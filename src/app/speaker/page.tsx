import {
  Container,
  PageLink,
  PageTitle,
  Section,
} from '@/components/Page'
import { INVITED_LECTURES, SPEAKING_TOPICS } from '@/content/record'
import GlassIcons from '@/components/GlassIcons'
import { Eye, Briefcase, Users, Leaf, Rocket, Film } from 'lucide-react'

export const metadata = {
  title: 'Speaker',
  description:
    'Public sessions, masterclasses, and speaking engagements on AI and trust at work, careers, sustainable HR and leadership through film.',
}

export default function Speaker() {
  return (
    <Container>
      <PageTitle lede="Public sessions, masterclasses, and executive engagements.">
        Speaker
      </PageTitle>

      <Section
        title="Topics"
        intro="Written as headline-ready sentences, the way a programme chair would print them."
      >
        <div className="grid gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 mt-8">
          {SPEAKING_TOPICS.map((topic, i) => {
            const icons = [
              { icon: <Eye strokeWidth={1.5} />, color: 'blue' },
              { icon: <Briefcase strokeWidth={1.5} />, color: 'purple' },
              { icon: <Users strokeWidth={1.5} />, color: 'red' },
              { icon: <Leaf strokeWidth={1.5} />, color: 'green' },
              { icon: <Rocket strokeWidth={1.5} />, color: 'orange' },
              { icon: <Film strokeWidth={1.5} />, color: 'indigo' },
            ]
            return (
              <div key={topic} className="flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300">
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
                <h3 className="font-serif text-lg leading-relaxed text-dark-text group-hover:text-coral transition-colors px-4">
                  {topic}
                </h3>
              </div>
            )
          })}
        </div>

      </Section>

      <Section
        title="Masterclasses and public sessions"
        intro="Sessions run outside the degree programmes, for audiences who came by choice."
      >
        <ul className="space-y-5">
          {INVITED_LECTURES.map((lecture) => (
            <li key={lecture} className="leading-relaxed text-dark-text/80">
              {lecture}
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <p>
          <PageLink href="/speaker/press-kit">Press kit</PageLink>
        </p>
      </Section>
    </Container>
  )
}
