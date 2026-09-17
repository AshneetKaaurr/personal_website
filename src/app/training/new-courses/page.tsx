import { Container, PageLink, PageTitle, Section } from '@/components/Page'
import { CO_DESIGNED_COURSES } from '@/content/record'

export const metadata = {
  title: 'New innovative courses',
  description:
    'Three co-designed courses: leadership through film, strategy through Indian cricket, and resilience through Indian turnaround stories.',
}

export default function NewCourses() {
  return (
    <Container>
      <PageTitle lede="Three courses, each co-designed, each built on material people will argue with.">
        New innovative courses
      </PageTitle>

      <Section>
        <ul className="space-y-10">
          {CO_DESIGNED_COURSES.map((course) => (
            <li key={course.title}>
              <h2 className="font-serif text-xl">{course.title}</h2>
              <p className="mt-1 text-sm text-sage">{course.status}</p>
              <p className="mt-3 max-w-2xl leading-relaxed">
                {course.description}
              </p>
              {course.also ? (
                <p className="mt-2 max-w-2xl text-sm text-sage">{course.also}</p>
              ) : null}
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <p>
          <PageLink href="/training">Back to training</PageLink>
        </p>
      </Section>
    </Container>
  )
}
