import { ClosingCta, LinkCards, RuledList } from '@/components/Blocks'
import { PageHero } from '@/components/PageHero'
import { Authors } from '@/components/Research'
import { Reveal, SectionShell } from '@/components/Shell'
import { Button, CARD_STATIC, SectionHead } from '@/components/ui'
import { getPublication } from '@/content/publications'
import { ARTICLES } from '@/content/record'
import { pageMeta } from '@/lib/meta'

export const metadata = pageMeta({
  title: 'AI and the Future of Work',
  description:
    'Dr Ashneet Kaur on what AI does to privacy, fairness and trust at work: lead-authored research in Communications of the AIS, MDPs on AI and HRM, and writing on the vanishing first job.',
  path: '/ai-and-the-future-of-work/',
  image: '/photos/w-01-desk.jpg',
})

export default function AiAndWork() {
  const cais = getPublication('watch-out-you-are-live')
  const etHr = ARTICLES.find((a) => a.outlet === 'ET-HRWorld')
  const bm = ARTICLES.find((a) => a.outlet === 'Business Manager')

  return (
    <>
      <PageHero
        word="AI"
        title="An algorithm can rank people. Earning their trust is a different job."
        lede={
          <p>
            For Dr Kaur this is not a separate service. It is the question running through her advisory
            work, her programmes and her talks, and the subject of her lead-authored research.
          </p>
        }
        actions={<Button variant="light" href="#contact">Talk through an AI question</Button>}
      />

      <SectionShell label="The short version">
        <Reveal className={`grid gap-8 p-8 sm:p-12 md:grid-cols-3 ${CARD_STATIC}`}>
          {[
            { k: 'AI brings', v: 'speed and scale' },
            { k: 'HR answers for', v: 'fairness and dignity' },
            { k: 'Leaders decide', v: 'where the line sits' },
          ].map((row) => (
            <div key={row.k}>
              <p className="font-sans text-[13px] font-medium text-dark-text/70">{row.k}</p>
              <p className="mt-2 font-serif text-[clamp(1.5rem,2.4vw,2rem)] leading-tight text-dark-text">{row.v}</p>
            </div>
          ))}
        </Reveal>
      </SectionShell>

      <SectionShell label="What actually changes" imageSrc="/photos/s-05-hric-backdrop.jpg">
        <SectionHead
          title="Five things that change when algorithms enter people decisions."
          lede="Each one comes from her published work or her research agenda."
        />
        <div className="mt-12">
          <RuledList
            items={[
              { label: 'When monitoring turns into surveillance', value: 'What AI-enabled monitoring means for employee privacy, and where the ethical lines sit. Communications of the AIS, 2024.' },
              { label: 'Fairness in algorithmic decisions', value: 'The ethical and emotional consequences of letting algorithms make HR calls, with privacy, fairness and well-being at the centre.' },
              { label: 'Engagement, trust and culture', value: 'How AI-driven systems shape engagement, trust and the way culture evolves in fast-growing, digitally enabled firms.' },
              { label: 'The vanishing first job', value: 'What automation is doing to entry-level work. ET-HRWorld, 2026.' },
              { label: 'Who carries the emotional cost', value: 'The people on the receiving end of an automated decision, and what it does to their well-being.' },
            ]}
          />
        </div>
      </SectionShell>

      <SectionShell label="In public">
        <SectionHead title="Where she has made the argument in public." />
        <div className="mt-12">
          <RuledList
            columns={2}
            items={[
              { label: etHr?.title ?? 'The vanishing first job in the age of AI', value: etHr?.url ? <a className="underline decoration-coral/40 underline-offset-4" href={etHr.url} target="_blank" rel="noreferrer">ET-HRWorld, 2026</a> : 'ET-HRWorld, 2026' },
              { label: bm?.title ?? 'Empowering HRM with Artificial Intelligence', value: 'Business Manager, 2024' },
              { label: 'Video podcast series on AI and digital transformation', value: 'Led for SPJIMR, with senior executives on change management and capability building.' },
              { label: 'MDPs on AI and HRM', value: 'Programmes helping leaders understand AI-enabled HR processes and the ethical questions they raise.' },
            ]}
          />
        </div>
      </SectionShell>

      <SectionShell label="Peer-reviewed anchor">
        <Reveal className={`p-8 sm:p-12 ${CARD_STATIC}`}>
          <p className="font-sans text-[14px] leading-relaxed text-dark-text/80">
            <Authors authors={cais.authors} /> ({cais.year})
          </p>
          <h2 className="mt-4 font-serif text-[clamp(1.5rem,2.6vw,2.2rem)] leading-snug text-dark-text">{cais.title}</h2>
          <p className="mt-4 font-sans text-[14.5px] text-dark-text/80">
            <span className="italic">{cais.venue}</span>, {cais.volumeIssue}, {cais.pages}. ABDC {cais.abdc}. {cais.citations} citations (Google Scholar, July 2026).
          </p>
          <div className="mt-7">
            <Button href={`https://doi.org/${cais.doi}`} variant="secondary" external>Read the paper</Button>
          </div>
        </Reveal>
      </SectionShell>

      <SectionShell label="Where it lands">
        <SectionHead title="Where this shows up in practice." />
        <div className="mt-12">
          <LinkCards
            columns={3}
            cards={[
              { kicker: 'Advisory', title: 'AI in your people systems', body: 'Where automated decisions touch retention, performance and trust, and what governance they need.', href: '/advisory/', cta: 'Explore advisory' },
              { kicker: 'Executive development', title: 'AI and HRM for leaders', body: 'A programme on AI-enabled HR processes, their ethics, and the workforce changes they bring.', href: '/executive-development/', cta: 'Explore executive development' },
              { kicker: 'Speaking', title: 'A session on AI and trust', body: 'For conferences, leadership offsites and HR forums.', href: '/speaking/', cta: 'Explore speaking' },
            ]}
          />
        </div>
      </SectionShell>

      <ClosingCta
        eyebrow="AI and the future of work"
        title="Start with the decision, not the tool."
        body="Tell her which people decisions AI is starting to touch in your organisation."
        primary={{ label: 'Talk through an AI question', href: '#contact' }}
        secondary={{ label: 'All of her papers', href: '/research' }}
      />
    </>
  )
}
