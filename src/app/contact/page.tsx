import { CopyButton } from '@/components/CopyButton'
import { ConsultationForm } from '@/components/ConsultationForm'
import { PageHero } from '@/components/PageHero'
import { Reveal, SectionShell } from '@/components/Shell'
import { CARD_STATIC, SectionHead } from '@/components/ui'
import {
  EMAIL,
  LINKEDIN_URL,
  SCHOLAR_URL,
  WHATSAPP_CHAT_URL,
} from '@/content/site'
import { pageMeta } from '@/lib/meta'

export const metadata = pageMeta({
  title: 'Contact',
  description:
    'Write to Dr Ashneet Kaur about advisory work, executive programmes, speaking, board roles or research collaboration. She reads every enquiry herself.',
  path: '/contact/',
  image: '/photos/p-07-daylight.jpg',
})

export default function Contact() {
  return (
    <>
      <PageHero
        word="Contact"
        title="I read every enquiry myself."
        lede={
          <p>
            Advisory work, an executive programme, a talk, a board role or a research collaboration:
            write in your own words. I usually reply within two working days.
          </p>
        }
      >
      </PageHero>

      <SectionShell label="Who to write to">
        <SectionHead title="Where to write." />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          <Reveal className={`flex h-full flex-col p-7 ${CARD_STATIC}`}>
            <h3 className="font-serif text-[21px] text-dark-text">Engagements</h3>
            <p className="mt-3 flex-1 font-sans text-[14.5px] leading-relaxed text-dark-text/75">
              Advisory, programmes and speaking. Say what you need in your own words.
            </p>
            <a href="#contact" className="mt-4 self-start font-sans text-[14px] font-medium text-dark-text underline decoration-coral/40 underline-offset-4 hover:decoration-coral">
              Open the enquiry form
            </a>
          </Reveal>
          <Reveal delay={0.07} className={`flex h-full flex-col p-7 ${CARD_STATIC}`}>
            <h3 className="font-serif text-[21px] text-dark-text">Direct</h3>
            <a href={`mailto:${EMAIL}`} className="mt-3 break-all font-sans text-[15px] font-medium text-dark-text underline decoration-coral/40 underline-offset-4 hover:decoration-coral">
              {EMAIL}
            </a>
            <div className="mt-4 flex-1">
              <CopyButton text={EMAIL} label="Copy email address" />
            </div>
          </Reveal>
          <Reveal delay={0.14} className={`flex h-full flex-col p-7 ${CARD_STATIC}`}>
            <h3 className="font-serif text-[21px] text-dark-text">Phone or WhatsApp</h3>
            <p className="mt-3 flex-1 font-sans text-[14.5px] leading-relaxed text-dark-text/75">
              Message on WhatsApp, or ask for a call in your message and I will arrange one.
            </p>
            <a href={WHATSAPP_CHAT_URL} target="_blank" rel="noreferrer" className="mt-4 self-start font-sans text-[14px] font-medium text-dark-text underline decoration-coral/40 underline-offset-4 hover:decoration-coral">
              Chat on WhatsApp
            </a>
          </Reveal>
        </div>
        <Reveal delay={0.1} className="mt-8 flex flex-wrap gap-x-8 gap-y-3 font-sans text-[14px]">
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="text-dark-text underline decoration-coral/40 underline-offset-4 hover:decoration-coral">LinkedIn</a>
          <a href={SCHOLAR_URL} target="_blank" rel="noreferrer" className="text-dark-text underline decoration-coral/40 underline-offset-4 hover:decoration-coral">Google Scholar</a>
        </Reveal>
      </SectionShell>

      <SectionShell label="Write to me" id="contact">
        <div className={`mx-auto max-w-3xl p-7 sm:p-12 ${CARD_STATIC}`}>
          <h2 className="font-serif text-[clamp(1.6rem,2.8vw,2.2rem)] leading-tight text-dark-text">Tell me what you are working on.</h2>
          <p className="mt-3 font-sans text-[15px] leading-relaxed text-dark-text/80">
            Three or four sentences is plenty. The more specific, the more useful my reply.
          </p>
          <ConsultationForm compact />
        </div>
      </SectionShell>
    </>
  )
}
