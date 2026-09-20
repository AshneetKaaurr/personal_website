import { Container, PageLink, PageTitle, Section } from '@/components/Page'
import { CO_DESIGNED_COURSES } from '@/content/record'

export const metadata = {
  title: 'New innovative courses',
  description:
    'Three co-designed courses: leadership through film, strategy through Indian cricket, and resilience through Indian turnaround stories.',
}

const ICONS = ['🎬', '🏏', '🔄']

export default function NewCourses() {
  return (
    <Container>
      <PageTitle lede="Three courses, each co-designed, each built on material people will argue with.">
        New innovative courses
      </PageTitle>

      <Section>
        <div className="space-y-4">
          {CO_DESIGNED_COURSES.map((course, i) => (
            <div key={course.title} className="rounded-2xl bg-white/50 backdrop-blur-md border border-white/50 p-6 md:p-8 shadow-[0_2px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] hover:bg-white/70 transition-all duration-300">
              <div className="flex items-start gap-4">
                <span className="text-3xl flex-shrink-0">{ICONS[i]}</span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h2 className="font-serif text-xl">{course.title}</h2>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-coral/10 text-xs font-medium text-coral">
                      {course.status}
                    </span>
                  </div>
                  <p className="max-w-2xl leading-relaxed text-dark-text/80">
                    {course.description}
                  </p>
                  {course.also ? (
                    <p className="mt-3 text-sm text-sage">{course.also}</p>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <p>
          <PageLink href="/training">Back to training</PageLink>
        </p>
      </Section>
    </Container>
  )
}
