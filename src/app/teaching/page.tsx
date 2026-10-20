import Link from 'next/link'

import { ClosingCta, RuledList, StatBand } from '@/components/Blocks'
import { ConferenceRecord } from '@/components/ConferenceRecord'
import { PageHero } from '@/components/PageHero'
import { Reveal, SectionShell } from '@/components/Shell'
import { StackCards } from '@/components/StackCards'
import { Bullets, Button, CARD_STATIC, Chips, Photo, SectionHead } from '@/components/ui'
import { EXPERIENCE_BY_DATE, type Experience } from '@/content/experience'
import { FACULTY_DEVELOPMENT } from '@/content/profile'
import { AOM, EGOS, OTHER_CONFERENCES } from '@/content/record'
import {
  CO_DESIGNED_COURSES,
  INSTITUTION_BUILDING,
  INVITED_TALKS,
  MDP_THEMES,
  PEDAGOGY,
  PODCAST,
  PROGRAMME_COUNT,
  SERVICE,
  SPJIMR_PROGRAMMES,
  SUPERVISION,
} from '@/content/teaching'
import { pageMeta } from '@/lib/meta'

export const metadata = pageMeta({
  title: 'Teaching and Academic Engagement',
  description:
    'Dr Ashneet Kaur’s teaching at SPJIMR, ISB and as visiting faculty in Hungary and India; co-designed courses; doctoral supervision; conference presentations; invited talks; and editorial service.',
  path: '/teaching/',
  image: '/photos/c-02-lecture-theatre.jpg',
})

const ACADEMIC = EXPERIENCE_BY_DATE.filter((e) => e.kind === 'academic' || e.kind === 'visiting')

function Appointment({ e }: { e: Experience }) {
  return (
    <div className={`flex h-full flex-col p-7 ${CARD_STATIC}`}>
      <p className="font-sans text-[13px] font-medium text-dark-text/70">{e.when}</p>
      <h3 className="mt-2 font-serif text-[20px] leading-snug text-dark-text">{e.organisation}</h3>
      <p className="mt-1 font-sans text-[14px] text-dark-text/80">
        {e.role}
        {e.place ? `, ${e.place}` : ''}
      </p>
      {e.details.length ? (
        <div className="mt-4">
          <Bullets items={e.details.slice(0, 3)} />
        </div>
      ) : null}
    </div>
  )
}

export default function Teaching() {
  const current = ACADEMIC.filter((e) => e.end === null)
  const past = ACADEMIC.filter((e) => e.end !== null)
  const presentations = AOM.length + EGOS.length + OTHER_CONFERENCES.length

  return (
    <>
      <PageHero
        word="Teaching"
        title="Teaching and academic engagement."
        lede={
          <p>
            Degree, executive and doctoral teaching; courses built around cinema, cricket and
            turnarounds; and the conferences, lectures and editorial work that connect her to the field.
          </p>
        }
        actions={<Button variant="light" href="#contact">Invite Dr Kaur to teach or speak</Button>}
      />

      <SectionShell label="At a glance">
        <SectionHead title="Teaching and engagement, counted from the record." />
        <div className="mt-12">
          <StatBand
            stats={[
              { value: String(PROGRAMME_COUNT), label: 'Programmes taught at SPJIMR', sub: SPJIMR_PROGRAMMES.flatMap((p) => p.codes).join(', ') },
              { value: String(CO_DESIGNED_COURSES.length), label: 'Co-designed courses', sub: 'Cinema, cricket and turnarounds' },
              { value: String(past.filter((e) => e.kind === 'visiting').length), label: 'Visiting and guest appointments', sub: 'Hungary, Chennai, Gurgaon and Delhi' },
              { value: String(presentations), label: 'Conference presentations and workshops', sub: '2021 to 2026' },
            ]}
          />
        </div>
      </SectionShell>

      <SectionShell label="Appointments">
        <SectionHead title="Current appointment." />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {current.map((e, i) => (
            <Reveal key={e.id} delay={0.05 * i}>
              <Appointment e={e} />
            </Reveal>
          ))}
        </div>
        <div className="mt-16">
          <SectionHead title="Past appointments." />
        </div>
        <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {past.map((e, i) => (
            <Reveal key={e.id} delay={0.04 * i} as="li">
              <Appointment e={e} />
            </Reveal>
          ))}
        </ul>
      </SectionShell>

      <SectionShell label="Programmes taught" imageSrc="/photos/c-04-global-cohort-two.jpg">
        <SectionHead
          title={`Courses across ${PROGRAMME_COUNT} SPJIMR programmes, 2023 to 2026.`}
          lede="As Assistant Professor in Organisation and Leadership Studies, using case studies, simulation, gamification and video-based learning."
        />
        <div className="mt-12 space-y-4">
          {SPJIMR_PROGRAMMES.map((p, i) => (
            <Reveal key={p.name} delay={0.03 * i} className={`grid gap-3 p-6 sm:grid-cols-[10rem_1fr] sm:gap-8 sm:p-8 ${CARD_STATIC}`}>
              <p className="font-serif text-[20px] leading-snug text-dark-text">{p.codes.join(' and ')}</p>
              <div>
                <h3 className="font-sans text-[15px] font-medium text-dark-text">{p.name}</h3>
                <p className="mt-1 font-sans text-[14px] text-dark-text/80">
                  <span className="font-medium">Taught:</span> {p.courses}
                </p>
                <p className="mt-2 font-sans text-[14px] leading-relaxed text-dark-text/75">{p.focus}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell label="Course design">
        <SectionHead
          title="Three co-designed courses."
          lede="Leadership through film, strategy through Indian cricket, resilience through turnaround stories."
        />
        <div className="mt-12">
          <StackCards
            cards={CO_DESIGNED_COURSES.map((c) => ({
              id: c.title,
              title: c.title,
              subtitle: c.status,
              content: (
                <div className="space-y-4">
                  <p className="font-sans text-[15px] leading-relaxed text-dark-text/80">{c.description}</p>
                  {c.also ? <p className="font-sans text-[14px] leading-relaxed text-dark-text/70">{c.also}</p> : null}
                </div>
              ),
            }))}
          />
        </div>
        <Reveal>
          <p className="mb-4 font-sans text-[13px] font-medium text-dark-text/70">Teaching methods</p>
          <Chips items={PEDAGOGY} />
        </Reveal>
      </SectionShell>

      <SectionShell label="Executive education">
        <div className="grid gap-12 lg:grid-cols-[1fr_380px] lg:items-start">
          <div>
            <SectionHead
              title="Customised programmes for executives."
              lede="MDPs for corporates, government bodies and social-sector organisations."
            />
            <div className="mt-10">
              <RuledList columns={2} items={MDP_THEMES.map((m) => ({ label: m.title, value: m.detail }))} />
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/executive-development">Executive development</Button>
              <Button href="/programmes" variant="secondary">Every programme</Button>
            </div>
          </div>
          <Reveal delay={0.1}>
            <Photo shot="C-01" sizes="380px" />
          </Reveal>
        </div>
      </SectionShell>

      <SectionShell label="Supervision and development">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal className={`p-8 ${CARD_STATIC}`}>
            <h2 className="font-serif text-[22px] leading-snug text-dark-text">Supervision and mentoring</h2>
            <div className="mt-5">
              <Bullets items={SUPERVISION} />
            </div>
          </Reveal>
          <Reveal delay={0.08} className={`p-8 ${CARD_STATIC}`}>
            <h2 className="font-serif text-[22px] leading-snug text-dark-text">Developing as a teacher</h2>
            <ul className="mt-5 space-y-4">
              {FACULTY_DEVELOPMENT.map((d) => (
                <li key={d.title}>
                  <p className="font-sans text-[15px] font-medium text-dark-text">
                    {d.title}, {d.when}
                  </p>
                  <p className="mt-1 font-sans text-[14px] leading-relaxed text-dark-text/75">{d.institution}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </SectionShell>

      <SectionShell label="Conferences" imageSrc="/photos/s-02-auditorium.jpg">
        <SectionHead
          title="Conference presentations and workshops."
          lede={`${presentations} presentations and doctoral workshops since 2021, grouped by year, newest first. Anything not yet held is marked upcoming.`}
        />
        <div className="mt-12">
          <ConferenceRecord />
        </div>
      </SectionShell>

      <SectionShell label="Invited talks">
        <SectionHead title="Invited lectures and workshops." />
        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {INVITED_TALKS.map((t, i) => (
            <Reveal key={t.title} delay={0.06 * i} as="li" className={`flex h-full flex-col p-7 ${CARD_STATIC}`}>
              <p className="font-sans text-[13px] font-medium text-dark-text/70">{t.when ?? 'Online lecture'}</p>
              <h3 className="mt-2 font-serif text-[19px] leading-snug text-dark-text">{t.title}</h3>
              <p className="mt-1 font-sans text-[14px] text-dark-text/80">{t.audience}</p>
              <p className="mt-3 font-sans text-[14px] leading-relaxed text-dark-text/75">{t.detail}</p>
            </Reveal>
          ))}
        </ul>
        <div className="mt-8">
          <Button href="/speaking" variant="secondary">Speaking</Button>
        </div>
      </SectionShell>

      <SectionShell label="Service to the field">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal className={`p-8 ${CARD_STATIC}`}>
            <h2 className="font-serif text-[22px] leading-snug text-dark-text">Editorial and review work</h2>
            <div className="mt-5">
              <Bullets items={SERVICE} />
            </div>
          </Reveal>
          <Reveal delay={0.08} className={`p-8 ${CARD_STATIC}`}>
            <h2 className="font-serif text-[22px] leading-snug text-dark-text">Institution building</h2>
            <div className="mt-5">
              <Bullets items={[...INSTITUTION_BUILDING, PODCAST]} />
            </div>
          </Reveal>
        </div>
        <p className="mt-10 font-sans text-[14.5px] text-dark-text/80">
          Research collaborators are listed on the{' '}
          <Link href="/research" className="font-medium text-dark-text underline decoration-coral/50 underline-offset-4 hover:decoration-coral">
            research overview
          </Link>
          .
        </p>
      </SectionShell>

      <ClosingCta
        eyebrow="Teaching"
        title="Planning a course, a programme or a session?"
        body="Tell her who the learners are and what should be different for them afterwards."
        primary={{ label: 'Start a conversation', href: '#contact' }}
        secondary={{ label: 'Executive programmes', href: '/programmes' }}
        imageSrc="/photos/c-03-global-cohort.jpg"
      />
    </>
  )
}
