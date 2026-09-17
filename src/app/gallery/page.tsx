import { Container, Note, PageTitle, Section } from '@/components/Page'

export const metadata = {
  title: 'Gallery',
  description:
    'Photographs from teaching, conference stages and executive programmes.',
}

const GROUPS = [
  {
    heading: 'Teaching',
    blurb:
      'Seminar rooms, lecture theatres, and the international classrooms of the visiting appointments.',
  },
  {
    heading: 'Stages and conferences',
    blurb: 'Lecterns, panels and the conferences behind the speaking record.',
  },
  {
    heading: 'Executive rooms and engagements',
    blurb: 'Management development sessions and organisational visits.',
  },
  {
    heading: 'Portraits',
    blurb: 'Made for the site, the press kit and the bios.',
  },
]

export default function Gallery() {
  return (
    <Container>
      <PageTitle lede="Photographs from teaching, conferences and executive rooms. Every frame here is a real photograph.">
        Gallery
      </PageTitle>

      <Section title="Categories">
        <dl className="space-y-6">
          {GROUPS.map((group) => (
            <div key={group.heading}>
              <dt className="font-serif text-lg">{group.heading}</dt>
              <dd className="mt-1 max-w-2xl leading-relaxed text-sage">
                {group.blurb}
              </dd>
            </div>
          ))}
        </dl>

        <Note kind="needs" item="photographs are held out of this skeleton">
          Twenty-two prepared photographs sit in the repository, wired to shot
          refs. They are deliberately not rendered here while the page is a
          content skeleton. Eleven of them are also held pending written consent
          from the people in frame.
        </Note>

        <Note kind="needs" item="a date and a place for every caption">
          A caption should say what, where and when. Most currently say only
          what.
        </Note>

        <Note kind="needs" item="the lightbox and the category filters">
          Clicking a frame should open it full size with keyboard navigation and
          a real close affordance. Phase 5 work, not a content question.
        </Note>
      </Section>
    </Container>
  )
}
