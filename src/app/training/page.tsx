import {
  Container,
  Draft,
  Note,
  PageLink,
  PageTitle,
  Section,
} from '@/components/Page'
import { CO_DESIGNED_COURSES } from '@/content/record'

export const metadata = {
  title: 'Training',
  description:
    'Executive and postgraduate teaching in strategic HR, leadership and design thinking, including three co-designed courses built on film, cricket and turnaround stories.',
}

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

        <Note kind="approve" item="the teaching philosophy above" />
      </Section>

      <Section title="Three routes in">
        <ul className="space-y-4">
          <li>
            <PageLink href="/training/visiting">Visiting appointments</PageLink>
            <span className="block text-sm text-sage">
              Courses taught as visiting faculty, in India and abroad
            </span>
          </li>
          <li>
            <PageLink href="/training/flagship">
              Flagship courses and programmes
            </PageLink>
            <span className="block text-sm text-sage">
              The eight SPJIMR programmes
            </span>
          </li>
          <li>
            <PageLink href="/training/new-courses">
              New innovative courses
            </PageLink>
            <span className="block text-sm text-sage">
              The three she co-designed
            </span>
          </li>
        </ul>
      </Section>

      <Section
        title="The three co-designed courses"
        intro="The most distinctive thing on this site, and currently the least visible."
      >
        <ul className="space-y-8">
          {CO_DESIGNED_COURSES.map((course) => (
            <li key={course.title}>
              <h3 className="font-serif text-lg">{course.title}</h3>
              <p className="mt-1 text-sm text-sage">{course.status}</p>
              <p className="mt-2 leading-relaxed">{course.description}</p>
              {course.also ? (
                <p className="mt-2 text-sm text-sage">{course.also}</p>
              ) : null}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="What participants say">
        <Note kind="needs" item="two student and two MDP testimonials">
          Given real placement on this page, not a footnote. Student feedback is
          the strongest evidence a teaching page can carry and there is
          currently none on the site.
        </Note>
      </Section>
    </Container>
  )
}
