import Image from 'next/image'
import Link from 'next/link'

import { ClosingCta, RuledList, Timeline } from '@/components/Blocks'
import { JsonLd, PERSON_LD } from '@/components/JsonLd'
import { PageHero } from '@/components/PageHero'
import { ThemeCards } from '@/components/Research'
import { Reveal, SectionShell } from '@/components/Shell'
import { Bullets, Button, CARD_STATIC, Photo, SectionHead } from '@/components/ui'
import { CONSULTING, CURRENT_ROLES, EXPERIENCE_BY_DATE, type Experience } from '@/content/experience'
import { CERTIFICATIONS, EDUCATION, FACULTY_DEVELOPMENT, PROFILE_SUMMARY } from '@/content/profile'
import { ARTICLES, AWARDS } from '@/content/record'
import { LINKEDIN_URL } from '@/content/site'
import { INSTITUTION_BUILDING, PODCAST, SERVICE } from '@/content/teaching'
import { pageMeta } from '@/lib/meta'
import type { ShotRef } from '@/lib/shots'

export const metadata = pageMeta({
  title: 'About',
  description:
    'Dr Ashneet Kaur: education at SRCC, the Delhi School of Economics and IIM Ahmedabad; work at Deloitte, McKinsey and Atos; faculty at SPJIMR and ISB; and Independent Director of PUNCOM.',
  path: '/about/',
})

const KIND_LABEL: Record<Experience['kind'], string> = {
  board: 'Board',
  academic: 'Academic',
  visiting: 'Visiting and guest faculty',
  industry: 'Industry',
  venture: 'Entrepreneurship',
}

/** Photographs from the supplied set, captioned only with what is known. */
const IN_THE_ROOM: { shot: ShotRef; caption: string }[] = [
  { shot: 'S-04', caption: '86th Annual Meeting of the Academy of Management, Philadelphia, August 2026' },
  { shot: 'S-01', caption: 'Presenting to a conference audience' },
  { shot: 'C-02', caption: 'With a cohort in a lecture theatre' },
]

export default function About() {
  const mpi = ARTICLES.find((a) => a.reachFigure)

  return (
    <>
      <JsonLd data={PERSON_LD} />

      <PageHero
        word="About"
        title="Scholar and educator in organisational behaviour and HRM."
        lede={
          <p>
            Faculty in HR-OB at the Indian School of Business and Independent
            Director of Punjab Communications Limited. Before academia: Deloitte, McKinsey &amp;
            Company, Atos and two ventures of my own.
          </p>
        }
        actions={<Button variant="light" href="/research">Research</Button>}
      />

      <SectionShell label="In my words">
        <div className="grid items-center gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
          <Reveal className="max-w-[42rem] space-y-5 font-sans text-[16px] leading-relaxed text-dark-text/80">
            {PROFILE_SUMMARY.map((p) => (
              <p key={p.slice(0, 30)}>{p}</p>
            ))}
          </Reveal>
          <Reveal delay={0.1} className="mx-auto w-full max-w-md lg:mr-0">
            <Photo shot="P-06" sizes="(max-width: 1024px) 100vw, 28rem" className="aspect-[4/5]!" />
          </Reveal>
        </div>
      </SectionShell>

      <SectionShell label="Now">
        <SectionHead title="Current roles." />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {CURRENT_ROLES.map((e, i) => (
            <Reveal key={e.id} delay={0.06 * i} className={`p-8 ${CARD_STATIC}`}>
              <p className="font-sans text-[13px] font-medium text-dark-text/70">{e.when}</p>
              <h3 className="mt-2 font-serif text-[22px] leading-snug text-dark-text">{e.role}</h3>
              <p className="mt-1 font-sans text-[15px] text-dark-text/80">{e.organisation}</p>
              {e.details.length ? <div className="mt-5"><Bullets items={e.details} /></div> : null}
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell label="Education" imageSrc="/photos/w-01-desk.jpg">
        <SectionHead title="Education and qualifications." />
        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {EDUCATION.map((q, i) => (
            <Reveal key={q.title} delay={0.06 * i} as="li" className={`flex h-full flex-col p-7 ${CARD_STATIC}`}>
              {q.logo ? (
                <span className="relative mb-5 block h-14 w-28">
                  <Image src={q.logo} alt={`${q.institution} logo`} fill sizes="112px" className="object-contain object-left mix-blend-multiply" />
                </span>
              ) : null}
              <p className="font-sans text-[13px] font-medium text-dark-text/70">{q.when}</p>
              <h3 className="mt-2 font-serif text-[20px] leading-snug text-dark-text">{q.title}</h3>
              <p className="mt-1 font-sans text-[14px] leading-relaxed text-dark-text/80">{q.institution}</p>
            </Reveal>
          ))}
        </ul>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {[...CERTIFICATIONS, ...FACULTY_DEVELOPMENT].map((q, i) => (
            <Reveal key={q.title} delay={0.05 * i} className={`p-7 ${CARD_STATIC}`}>
              <p className="font-sans text-[13px] font-medium text-dark-text/70">{q.when}</p>
              <h3 className="mt-2 font-serif text-[19px] leading-snug text-dark-text">{q.title}</h3>
              <p className="mt-1 font-sans text-[14px] leading-relaxed text-dark-text/80">{q.institution}</p>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell label="The path">
        <SectionHead
          title="Professional and academic journey."
          lede="Every role on the CV, newest first. The Atos engagement took place during the doctorate at IIM Ahmedabad (2018 to 2023)."
        />
        <div className="mt-12 max-w-4xl">
          <Timeline
            items={EXPERIENCE_BY_DATE.map((e) => ({
              when: `${e.when} · ${KIND_LABEL[e.kind]}`,
              title: `${e.role}, ${e.organisation}${e.place ? `, ${e.place}` : ''}`,
              body: (
                <>
                  {e.details.length ? <Bullets items={e.details} /> : null}
                </>
              ),
            }))}
          />
        </div>
      </SectionShell>

      <SectionShell label="Consulting">
        <SectionHead title="Corporate consulting engagements." lede="Listed on the CV without dates." />
        <div className="mt-12">
          <RuledList items={CONSULTING.map((c) => ({ label: `${c.client}: ${c.scope}`, value: `${c.sector}. ${c.detail}` }))} />
        </div>
        <div className="mt-10">
          <Button href="/advisory" variant="secondary">Advisory work</Button>
        </div>
      </SectionShell>

      <SectionShell label="Research interests">
        <SectionHead title="Research interests." lede="Five themes drawn from the research statement and the published record." />
        <div className="mt-12">
          <ThemeCards />
        </div>
      </SectionShell>

      <SectionShell label="Recognition">
        <SectionHead title="Awards and recognition." />
        <div className="mt-12">
          <RuledList items={AWARDS.map((a) => ({ label: `${a.title}, ${a.year}`, value: <>&ldquo;{a.paper}&rdquo;. {a.detail}.</> }))} />
        </div>
      </SectionShell>

      <SectionShell label="Contributions">
        <SectionHead title="Other academic contributions." />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal className={`p-8 ${CARD_STATIC}`}>
            <h3 className="font-serif text-[21px] leading-snug text-dark-text">Editorial, review and track chair roles</h3>
            <div className="mt-5"><Bullets items={SERVICE} /></div>
          </Reveal>
          <Reveal delay={0.08} className={`p-8 ${CARD_STATIC}`}>
            <h3 className="font-serif text-[21px] leading-snug text-dark-text">Institution building</h3>
            <div className="mt-5"><Bullets items={[...INSTITUTION_BUILDING, PODCAST]} /></div>
          </Reveal>
        </div>
        <p className="mt-10 font-sans text-[14.5px] text-dark-text/80">
          Teaching, conferences and invited talks are on the{' '}
          <Link href="/teaching" className="font-medium text-dark-text underline decoration-coral/50 underline-offset-4 hover:decoration-coral">
            teaching and academic engagement
          </Link>{' '}
          page.
        </p>
      </SectionShell>

      <SectionShell label="Writing">
        <SectionHead
          title="Writing for practitioners."
          lede={`${ARTICLES.length} articles in outlets including Forbes India, ET-HRWorld, People Matters, CXO Today and Business Manager.`}
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-[1fr_1.3fr]">
          {mpi ? (
            <Reveal>
              <article className={`flex h-full flex-col justify-between p-8 lg:p-10 ${CARD_STATIC}`}>
                <div>
                  <p className="font-serif text-[clamp(2.8rem,5vw,3.6rem)] leading-none text-dark-text">{mpi.reachFigure}</p>
                  <p className="mt-3 font-sans text-[13px] font-medium text-dark-text/70">Downloads</p>
                  <h3 className="mt-6 font-serif text-[21px] leading-snug text-dark-text">{mpi.title}</h3>
                </div>
                <p className="mt-6 font-sans text-[14px] leading-relaxed text-dark-text/75">{mpi.reach}</p>
              </article>
            </Reveal>
          ) : null}
          <Reveal delay={0.1}>
            <ul className={`h-full divide-y divide-dark-text/[0.07] p-8 lg:p-10 ${CARD_STATIC}`}>
              {ARTICLES.map((a) => (
                <li key={a.title} className="py-4 first:pt-0 last:pb-0">
                  {a.url ? (
                    <a href={a.url} target="_blank" rel="noreferrer" className="font-serif text-[17px] leading-snug text-dark-text underline decoration-coral/30 underline-offset-4 hover:decoration-coral">
                      {a.title}
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  ) : (
                    <p className="font-serif text-[17px] leading-snug text-dark-text">{a.title}</p>
                  )}
                  <p className="mt-1.5 font-sans text-[13px] text-dark-text/70">
                    {a.outlet}, {a.year}. {a.authorship}.{' '}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </SectionShell>

      <SectionShell label="In the room">
        <SectionHead title="In the room." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {IN_THE_ROOM.map((item, i) => (
            <Reveal key={item.shot} delay={0.07 * i}>
              <figure>
                <Photo shot={item.shot} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="aspect-square!" />
                <figcaption className="mt-3 font-sans text-[13.5px] leading-snug text-dark-text/75">
                  {item.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <ClosingCta
        eyebrow="Get in touch"
        title="Research, teaching, a programme or a board question?"
        body="A few lines about what you have in mind is enough to start."
        primary={{ label: 'Start a conversation', href: '#contact' }}
        secondary={{ label: 'Connect on LinkedIn', href: LINKEDIN_URL, external: true }}
      />
    </>
  )
}
