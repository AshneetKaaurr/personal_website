import { BriefCard, ClosingCta, StatBand } from '@/components/Blocks'
import { PageHero } from '@/components/PageHero'
import { Reveal, SectionShell } from '@/components/Shell'
import { Actions, Button, CARD_STATIC, SectionHead } from '@/components/ui'
import { getPublication } from '@/content/publications'
import { LINKEDIN_URL } from '@/content/site'
import { pageMeta } from '@/lib/meta'

export const metadata = pageMeta({
  title: 'How I Help',
  description:
    'Advisory, executive development, speaking and one-to-one work with Dr Ashneet Kaur, chosen by the people decision your organisation has to get right, with AI and trust running through all of it.',
  path: '/how-i-help/',
})

export default function HowIHelp() {
  const cais = getPublication('watch-out-you-are-live')

  return (
    <>
      <PageHero
        word="Help"
        title="Name the decision first. The format can wait."
        lede={
          <p>
            Advisory, executive development or a talk: the right one depends on which people decision
            your organisation most needs to get right next. Dr Kaur starts there, and the shape of the
            engagement follows.
          </p>
        }
        actions={<Button variant="light" href="#contact">Book a consultation</Button>}
      />

      <SectionShell label="Track record">
        <SectionHead title="One track record, whichever door you come in by." />
        <div className="mt-12">
          <StatBand />
        </div>
      </SectionShell>

      <SectionShell label="Three ways in">
        <SectionHead
          title="What clients say when they first get in touch."
          lede="Each of these is a version of something leaders actually say. Each points to a different kind of work."
        />
        <div className="mt-12 space-y-6">
          <BriefCard
            kicker="Advisory"
            quote="Our HR systems look fine in the policy manual and fall apart on the floor."
            title="Strategic people and HR advisory"
            bullets={[
              'Retention strategy built from stakeholder interviews',
              'Learning-organisation and diversity and inclusion systems',
              'Diagnosis of leadership and HRM systems',
              'Governance, from a sitting independent director',
            ]}
            chipsLabel="Where this work has run"
            chips={['Bosch India', 'HURL', 'ICAI', 'Atos Global', 'PUNCOM (board)']}
            links={[
              { label: 'More on advisory', href: '/advisory/' },
              { label: 'Book a consultation', href: '#contact' },
            ]}
          />
          <BriefCard
            kicker="Executive development"
            quote="Our managers have to lead differently now, and an off-the-shelf course won't get them there."
            title="Programmes designed for one room"
            bullets={[
              'Leadership and high-performing teams',
              'Emotional intelligence',
              'Design thinking and innovation',
              'AI and human resource management',
              'Stress and time management',
            ]}
            chipsLabel="Delivered through"
            chips={['SPJIMR MDPs', 'PGEMP', 'Start Your Business (SYB)']}
            links={[
              { label: 'More on executive development', href: '/executive-development/' },
              { label: 'See all programmes', href: '/programmes/' },
            ]}
          />
          <BriefCard
            kicker="Speaking"
            quote="The opening session decides the tone of the whole event. We can't afford a flat one."
            title="Talks, lectures and masterclasses"
            bullets={[
              'Peer-reviewed conference papers',
              'Invited lectures',
              'Masterclasses',
              'Podcasts and fireside conversations',
            ]}
            chipsLabel="Stages"
            chips={['AOM 2021 to 2026', 'EURAM Dublin', 'EGOS Vienna and Cagliari', 'BCERC Knoxville']}
            links={[{ label: 'More on speaking', href: '/speaking/' }]}
          />
        </div>
      </SectionShell>

      <SectionShell label="AI inside all three" imageSrc="/photos/w-01-desk.jpg">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <SectionHead
            title="AI is not a fourth service. It runs through the other three."
            lede="Whether the brief is retention, a leadership programme or a keynote, the question of what algorithms do to people at work is usually somewhere in it. It is also the subject of her lead-authored research."
          />
          <Reveal delay={0.1} className={`p-8 ${CARD_STATIC}`}>
            <p className="font-sans text-[13px] font-medium text-dark-text/70">
              Lead author, <span className="italic">Communications of the AIS</span>, {cais.year}
            </p>
            <p className="mt-3 font-serif text-[20px] leading-snug text-dark-text">{cais.title}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/ai-and-the-future-of-work">How AI changes the work</Button>
              <Button href="/research" variant="secondary">All of her papers</Button>
            </div>
          </Reveal>
        </div>
      </SectionShell>

      <SectionShell label="One to one">
        <SectionHead
          title="Not every question needs a room full of people."
          lede="A role transition, a career question, a founder's decision. Sometimes the useful format is a conversation between two people."
        />
        <Actions>
          <Button href="/one-to-one-coaching" variant="secondary">Ask about one-to-one coaching</Button>
        </Actions>
      </SectionShell>

      <ClosingCta
        eyebrow="Where to begin"
        title="Begin with the problem, not the service."
        body="Describe what is happening in your organisation. Which kind of help fits is a question for the first conversation, not the enquiry form."
        primary={{ label: 'Start a conversation', href: '#contact' }}
        secondary={{ label: 'Connect on LinkedIn', href: LINKEDIN_URL, external: true }}
      />
    </>
  )
}
