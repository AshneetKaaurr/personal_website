import Link from 'next/link'
import {
  Container,
  Draft,
  Note,
  PageTitle,
  Section,
} from '@/components/Page'
import { StackCards } from '@/components/StackCards'
import { CO_DESIGNED_COURSES } from '@/content/record'

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
    icon: '🌍',
  },
  {
    href: '/training/flagship' as const,
    title: 'Flagship courses and programmes',
    description: 'The eight SPJIMR programmes',
    icon: '🎓',
  },
  {
    href: '/training/new-courses' as const,
    title: 'New innovative courses',
    description: 'The three she co-designed',
    icon: '✨',
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

        <Note kind="approve" item="Does this sound like how you would describe your own teaching?" />
      </Section>

      <Section title="Three routes in">
        <div className="grid gap-4 md:grid-cols-3">
          {ROUTES.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className="group rounded-2xl bg-white/50 backdrop-blur-md border border-white/50 p-6 shadow-[0_2px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] hover:bg-white/70 transition-all duration-300 flex flex-col"
            >
              <span className="text-3xl mb-4">{route.icon}</span>
              <h3 className="font-serif text-lg group-hover:text-coral transition-colors">
                {route.title}
              </h3>
              <p className="mt-2 text-sm text-sage flex-1">{route.description}</p>
              <div className="mt-4 pt-3 border-t border-dark-text/5 flex items-center gap-2 text-sm text-coral font-medium">
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
            const images = ['/photos/c-02-lecture-theatre.jpg', '/photos/e-01-stage.jpg', '/photos/c-03-global-cohort.jpg']
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

      <Section title="What participants say">
        <Note kind="needs" item="Could you send two student quotes and two from executive programmes?">
          What participants say is the strongest thing a teaching page can carry,
          and there is none on the site at the moment. They will sit properly on
          the page, not tucked away at the bottom.
        </Note>
      </Section>
    </Container>
  )
}
