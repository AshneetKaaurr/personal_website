import Link from 'next/link'
import {
  Container,
  Draft,
  PageTitle,
  Section,
} from '@/components/Page'
import { StackCards } from '@/components/StackCards'
import { CO_DESIGNED_COURSES } from '@/content/record'
import GlassIcons from '@/components/GlassIcons'
import { Globe, GraduationCap, Sparkles } from 'lucide-react'

export const metadata = {
  title: 'Training',
  description:
    'Executive and postgraduate teaching in strategic HR, leadership and design thinking, including three co-designed courses built on film, cricket and turnaround stories.',
}

const ROUTES = [
  {
    href: '/training/visiting' as const,
    title: 'Visiting appointments',
    description: 'Courses taught as visiting faculty, in India and abroad',
    icon: <Globe strokeWidth={1.5} />,
    color: 'blue'
  },
  {
    href: '/training/flagship' as const,
    title: 'Flagship courses and programmes',
    description: 'The eight SPJIMR programmes',
    icon: <GraduationCap strokeWidth={1.5} />,
    color: 'purple'
  },
  {
    href: '/training/new-courses' as const,
    title: 'New innovative courses',
    description: 'The three she co-designed',
    icon: <Sparkles strokeWidth={1.5} />,
    color: 'orange'
  },
]

export default function Training() {
  return (
    <Container>
      <PageTitle>Training</PageTitle>

      <Section title="How I teach">
        <Draft>
          <p>I design courses around things people already argue about.</p>
          <p>
            A leadership framework on a slide gets agreement and no engagement.
            A film gets an argument. So I built an elective that teaches
            leadership through cinema, one that reads strategy and team dynamics
            off Indian cricket, and one that works through the turnaround
            stories of Indian companies and the people who ran them. In each
            case the material does the work a case study is supposed to do, and
            does it to people who have not yet learnt to perform being taught.
          </p>
          <p>
            The rest of my teaching runs on the same principle. Design thinking
            and rapid prototyping, because managers retain a problem they have
            tried to solve badly. Simulation and gamification, because a
            decision with a consequence is remembered and a decision without one
            is not. Video-based learning, because most of what is interesting
            about organisational behaviour is visible before it is nameable.
          </p>
          <p>
            What I am trying to produce is not familiarity with the concepts. It
            is the ability to recognise the concept happening in a room, while
            it is happening, and to do something about it.
          </p>
        </Draft>

      </Section>

      <Section title="Three routes in">
        <div className="grid gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {ROUTES.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className="flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300"
            >
              <GlassIcons 
                items={[{ icon: route.icon, color: route.color, label: '' }]}
                className="!py-0 !gap-0 !grid-cols-1 place-items-center mb-6" 
              />
              <h3 className="font-serif text-lg group-hover:text-coral transition-colors">
                {route.title}
              </h3>
              <p className="mt-2 text-sm text-sage px-4">{route.description}</p>
              <div className="mt-4 pt-3 border-t border-dark-text/5 flex items-center gap-2 text-sm text-coral font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Explore</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section
        title="The three co-designed courses"
        intro="The most distinctive thing on this site, and currently the least visible."
      >
        <StackCards 
          cards={CO_DESIGNED_COURSES.map((course, i) => {
            const images = ['/photos/netflix.jpg', '/photos/cricket.jpg', '/photos/mumbai.jpg']
            return {
              id: course.title,
              title: course.title,
              subtitle: course.status,
              content: (
                <div className="space-y-4">
                  <p>{course.description}</p>
                  {course.also && <p className="text-sm font-medium">{course.also}</p>}
                </div>
              ),
              imageSrc: images[i],
              imageAlt: course.title
            }
          })}
        />
      </Section>

    </Container>
  )
}
