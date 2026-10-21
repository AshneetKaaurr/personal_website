import { BriefCard, ClosingCta, RuledList } from '@/components/Blocks'
import { PageHero } from '@/components/PageHero'
import { SectionShell } from '@/components/Shell'
import { Button, Chips, SectionHead } from '@/components/ui'
import { pageMeta } from '@/lib/meta'

/**
 * G6: the CV shows mentoring and supervision but no formal coaching
 * practice. The page and its nav slot stay as the reference has them; the
 * body is limited to what the record supports, and the page is kept out of
 * search results until she confirms what she offers.
 */
export const metadata = pageMeta({
  title: 'One-to-One Coaching',
  description:
    'One-to-one conversations with Dr Ashneet Kaur on role transitions, careers and founder decisions, grounded in her research on careers, mobility and new ventures.',
  path: '/one-to-one-coaching/',
  noindex: true,
})

export default function Coaching() {
  return (
    <>
      <PageHero
        word="One"
        title="Someone to think with when the decision is yours alone."
        lede={
          <p>
            Some questions don&apos;t belong in a workshop: a step up, a career that has stalled, a
            founder&apos;s call nobody else can make. Dr Kaur offers a structured conversation about them,
            informed by research rather than a formula.
          </p>
        }
        actions={<Button variant="light" href="#contact">Ask about one-to-one coaching</Button>}
      />


      <SectionShell label="What arrives">
        <SectionHead title="What people tend to bring." />
        <div className="mt-12 space-y-6">
          <BriefCard
            kicker="The transition"
            quote="I've stepped into a bigger role and the old playbook has stopped working."
            body={<p>A new role or a move abroad, approached through her research on expatriate adjustment, credibility and how people find their footing in an unfamiliar setting.</p>}
          />
          <BriefCard
            kicker="The career"
            quote="Nothing is officially in my way, and yet I'm not moving."
            body={<p>Career engagement and the unwritten barriers around it, drawing on her study of women&apos;s careers in India (Asia Pacific Journal of Management, 2026).</p>}
          />
          <BriefCard
            kicker="The founder's dilemma"
            quote="My team is growing, and I'm not sure how much to let go."
            body={<p>Autonomy, agility and the trust a team places in its founder, the subject of two of her best-paper awards and her own experience founding two ventures.</p>}
          />
        </div>
      </SectionShell>

      <SectionShell label="What this is not">
        <SectionHead title="Four things this is not." />
        <div className="mt-12">
          <RuledList
            columns={2}
            items={[
              { label: 'Not therapy', value: 'It is about work, decisions and careers.' },
              { label: 'Not a packaged programme', value: 'The conversation starts from your situation, not a curriculum.' },
              { label: 'Not someone deciding for you', value: 'The decision stays yours. The thinking gets sharper.' },
              { label: 'Not separate from the research', value: 'The same evidence behind her papers sits behind the questions she asks.' },
            ]}
          />
        </div>
      </SectionShell>

      <SectionShell label="Behind the conversation">
        <SectionHead title="What sits behind the conversation." />
        <div className="mt-10">
          <Chips
            items={[
              'PhD in HRM, IIM Ahmedabad',
              'SHRM Senior Certified Professional',
              "Mentoring in SPJIMR's Abhyudaya and DoCC programmes",
              'MRes thesis supervision, FPM',
              'Founder of two ventures',
            ]}
          />
        </div>
      </SectionShell>


      <ClosingCta
        eyebrow="One to one"
        title="If you would rather talk one to one, say so in your first message."
        body="A few lines on the decision in front of you is the right place to start."
        primary={{ label: 'Start a conversation', href: '#contact' }}
      />
    </>
  )
}
