import { ClosingCta, RuledList } from '@/components/Blocks'
import { ConferenceRecord } from '@/components/ConferenceRecord'
import { PageHero } from '@/components/PageHero'
import { Reveal, SectionShell } from '@/components/Shell'
import { Bullets, Button, CARD_STATIC, Photo, SectionHead } from '@/components/ui'
import { AWARDS } from '@/content/record'
import { INVITED_TALKS } from '@/content/teaching'
import { pageMeta } from '@/lib/meta'

export const metadata = pageMeta({
  title: 'Speaking',
  description:
    'Dr Ashneet Kaur speaks on AI and work, leadership, sustainable HRM and leadership through cinema: six Academy of Management meetings, EGOS, EURAM, BCERC and invited lectures.',
  path: '/speaking/',
  image: '/photos/s-06-microphone.jpeg',
})

export default function Speaking() {
  const aom = AWARDS[0]!

  return (
    <>
      <PageHero
        word="Speak"
        title="The opening session sets the bar for every session after it."
        lede={
          <p>
            Dr Kaur speaks in academic conferences, industry and media settings, and lecture halls, on
            what AI does to trust at work, how leaders are made, and why sustainable people practices
            stall.
          </p>
        }
        actions={<Button variant="light" href="#contact">Invite Dr Kaur to speak</Button>}
      />

      <SectionShell label="Formats">
        <SectionHead title="Five ways to bring her in." />
        <div className="mt-12">
          <RuledList
            items={[
              { label: 'Conference paper', value: 'Academy of Management six times, EURAM, EGOS twice, and BCERC.' },
              { label: 'Invited lecture', value: 'K.R. Mangalam University, SK Associates and Group, and the Blind People Association at IIM Ahmedabad.' },
              { label: 'Track chair', value: 'WCSB 2024 at Great Lakes, Gurgaon.' },
              { label: 'Podcast host', value: "SPJIMR's video podcast series on AI and digital transformation, with senior executives as guests." },
            ]}
          />
        </div>
      </SectionShell>

      <SectionShell label="Main stage" imageSrc="/photos/s-02-auditorium.jpg">
        <div className="grid gap-12 lg:grid-cols-[1fr_380px] lg:items-center">
          <Reveal className={`p-8 sm:p-12 ${CARD_STATIC}`}>
            <p className="font-sans text-[13px] font-medium text-dark-text/70">
              83rd Annual Meeting of the Academy of Management, Boston, 2023
            </p>
            <h2 className="mt-4 font-serif text-[clamp(1.5rem,2.6vw,2.2rem)] leading-snug text-dark-text">
              &ldquo;{aom.paper}&rdquo;
            </h2>
            <p className="mt-5 font-sans text-[15px] leading-relaxed text-dark-text/80">
              Named Best Paper by the Human Resource Division, a recognition given to the top ten per cent
              of papers in the division.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Photo shot="S-04" sizes="380px" />
            <p className="mt-3 font-sans text-[13px] text-dark-text/75">
              At the 86th Annual Meeting, Philadelphia, August 2026.
            </p>
          </Reveal>
        </div>
      </SectionShell>

      <SectionShell label="Chairing and editing">
        <SectionHead title="Chairing and editing." />
        <div className="mt-12">
          <RuledList
            columns={2}
            items={[
              { label: 'Track Chair, HR and OB', value: '3rd Annual Winter Conference on Sustainable Business (WCSB 2024), Great Lakes Institute of Management, Gurgaon, December 2024.' },
              { label: 'Editor-in-Chief, NewsBlast', value: 'Academy of Management Entrepreneurship Division, May and September 2025 issues.' },
            ]}
          />
        </div>
      </SectionShell>

      <SectionShell label="Invited lectures">
        <div className="grid gap-12 lg:grid-cols-[1fr_380px] lg:items-start">
          <div>
            <SectionHead title="Invited lectures." />
            <Reveal className={`mt-10 p-8 sm:p-10 ${CARD_STATIC}`}>
              <Bullets items={INVITED_TALKS.map((t) => `${t.title}, ${t.audience}${t.when ? `, ${t.when}` : ''}. ${t.detail}`)} />
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Photo shot="E-01" sizes="380px" />
          </Reveal>
        </div>
      </SectionShell>

      <SectionShell label="Full conference record">
        <SectionHead
          title="Every conference and workshop, by year."
          lede="Fourteen presentations since 2021."
        />
        <div className="mt-12">
          <ConferenceRecord />
        </div>
      </SectionShell>

      <ClosingCta
        eyebrow="Speaking"
        title="What should the room be thinking afterwards?"
        body="Share the event, the audience and what the session needs to achieve."
        primary={{ label: 'Invite Dr Kaur to speak', href: '#contact' }}
        secondary={{ label: 'Every conference and talk', href: '/teaching' }}
        imageSrc="/photos/s-01-presenting.jpg"
      />
    </>
  )
}
