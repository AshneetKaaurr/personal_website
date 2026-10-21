import { BriefCard, ClosingCta, RuledList, Steps } from '@/components/Blocks'
import { PageHero } from '@/components/PageHero'
import { Reveal, SectionShell } from '@/components/Shell'
import { Bullets, Button, CARD_STATIC, Chips, Photo, SectionHead } from '@/components/ui'
import { CONSULTING, getExperience } from '@/content/experience'
import { getPublication } from '@/content/publications'
import { LINKEDIN_URL } from '@/content/site'
import { pageMeta } from '@/lib/meta'

export const metadata = pageMeta({
  title: 'Advisory',
  description:
    'People and HR advisory from Dr Ashneet Kaur: retention strategy, learning-organisation and inclusion systems, leadership diagnosis, and board governance as an independent director.',
  path: '/advisory/',
})

/** Built from the shared records: the consulting engagements, then Atos and McKinsey. */
const WHERE = [
  ...CONSULTING.map((c) => ({ label: `${c.client}: ${c.scope}`, value: `${c.sector}. ${c.detail}` })),
  ...['atos', 'mckinsey'].map((id) => {
    const e = getExperience(id)
    return { label: `${e.organisation}, ${e.when}`, value: `${e.role}. ${e.details.join(' ')}` }
  }),
]

export default function Advisory() {
  const amrg = getPublication('amrg-associates-case')

  return (
    <>
      <PageHero
        word="Advisory"
        title="A strategy only lasts as long as the people systems under it."
        lede={
          <p>
            Dr Kaur works with boards, founders and HR leaders on the systems that decide whether a plan
            survives contact with the organisation: retention, leadership, learning and governance.
          </p>
        }
        actions={<Button variant="light" href="#contact">Book a consultation</Button>}
      >
        <div className="mt-6">
          <p className="mb-2 font-sans text-[13px] text-white/80">Clients and appointments</p>
          <p className="font-sans text-[14px] leading-relaxed text-white">
            Bosch India, Hindustan Urvarak &amp; Rasayan, ICAI, Atos Global, Punjab Communications Ltd (board)
          </p>
        </div>
      </PageHero>

      <SectionShell label="Who brings this work">
        <SectionHead
          title="Who this work has been for."
          lede="Four kinds of organisation, each represented in the record."
        />
        <div className="mt-12">
          <RuledList
            items={[
              { label: 'Boards and public-sector enterprises', value: 'Independent Director, Punjab Communications Limited.' },
              { label: 'Professional bodies', value: 'Process and leadership structure for ICAI.' },
              { label: 'Industrial companies', value: 'Bosch India in electronics and engineering; HURL in fertilisers.' },
              { label: 'Global services firms', value: 'Atos Global, across offices in the UK, France and India.' },
            ]}
            columns={2}
          />
        </div>
      </SectionShell>

      <SectionShell label="The work" imageSrc="/photos/m-01-boardroom-group.jpg">
        <SectionHead title="Three problems this work is built for." />
        <div className="mt-12 space-y-6">
          <BriefCard
            quote="We keep losing the people we most wanted to keep."
            title="Retention"
            bullets={['Retention strategy, on the Atos model', 'Diagnosis through stakeholder interviews', 'Career and talent systems']}
          />
          <BriefCard
            quote="We want an organisation that learns, not one that just runs training."
            title="Learning and inclusion"
            bullets={['Learning-organisation design and inclusion across verticals, as at Bosch', 'Process and leadership structure, as at ICAI']}
          />
          <BriefCard
            quote="Our leadership has fallen behind what the business needs."
            title="Leadership systems"
            bullets={['Leadership diagnosis by interviews and questionnaires', 'HRM systems, as at HURL', 'Executive mentoring']}
          />
        </div>
      </SectionShell>

      <SectionShell label="How it runs">
        <SectionHead title="How an engagement runs." />
        <div className="mt-12">
          <Steps
            steps={[
              { title: 'Diagnose', body: 'Interviews and questionnaires across the levels that live with the system. At Atos that meant more than 50 stakeholders.' },
              { title: 'Design', body: 'Systems built for the way this organisation actually runs, not lifted from somewhere else.' },
              { title: 'Hand over', body: 'Findings delivered so the people who stay can act on them. At HURL the results were accepted by the client.' },
            ]}
          />
        </div>
      </SectionShell>

      <SectionShell label="Where it has run">
        <SectionHead title="Where the work has been done." />
        <div className="mt-12">
          <RuledList items={WHERE} />
        </div>
      </SectionShell>

      <SectionShell label="Board and governance">
        <div className="grid gap-12 lg:grid-cols-[1fr_380px] lg:items-center">
          <Reveal>
            <SectionHead title="Independent Director, Punjab Communications Limited." />
            <div className={`mt-8 p-8 ${CARD_STATIC}`}>
              <p className="font-sans text-[15px] leading-relaxed text-dark-text/80">
                Punjab Communications Limited (PUNCOM), Government of Punjab. Independent Director since
                April 2026, appointed under Section 149 of the Companies Act, 2013 and the SEBI (Listing
                Obligations and Disclosure Requirements) Regulations.
              </p>
              <div className="mt-5">
                <Bullets
                  items={[
                    'Strategic oversight of governance, compliance and performance',
                    'Board-level decisions on the operations and growth of a public sector enterprise',
                  ]}
                />
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Photo shot="M-02" sizes="380px" />
          </Reveal>
        </div>
      </SectionShell>

      <SectionShell label="Evidence">
        <SectionHead
          eyebrow="Teaching case"
          title={amrg.title}
          lede={`${amrg.venue}, vol. ${amrg.volumeIssue}, ${amrg.pages}, ${amrg.year}. ${amrg.summary}`}
        />
        {amrg.url ? (
          <div className="mt-8">
            <Button href={amrg.url} variant="secondary" external>Read the case</Button>
          </div>
        ) : null}
      </SectionShell>

      <SectionShell label="Behind the advice">
        <SectionHead title="What sits behind the advice." />
        <Reveal className="mt-10">
          <Chips
            items={[
              'PhD in HRM, IIM Ahmedabad',
              'AOM HR Division Best Paper, 2023',
              '10 journal papers, half ranked A by ABDC',
              'SHRM Senior Certified Professional',
              'Independent Director, PUNCOM',
              'Formerly McKinsey & Company and Deloitte',
            ]}
          />
        </Reveal>
      </SectionShell>

      <ClosingCta
        eyebrow="Advisory"
        title="Which people system is quietly working against your strategy?"
        body="Describe the symptom. Diagnosis is where the engagement starts."
        primary={{ label: 'Book a consultation', href: '#contact' }}
        secondary={{ label: 'Connect on LinkedIn', href: LINKEDIN_URL, external: true }}
      />
    </>
  )
}
