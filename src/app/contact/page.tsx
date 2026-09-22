'use client'

import { useState } from 'react'
import { Container, Note, PageTitle, Section } from '@/components/Page'
import { ContactModal } from '@/components/ContactModal'
import { EMAIL, ENQUIRY_TYPES } from '@/content/record'

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <Container>
      <PageTitle lede="Tell me which of these it is and the message reaches the right place faster.">
        Contact
      </PageTitle>

      <Section title="Enquiry types">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {ENQUIRY_TYPES.map((enquiry) => (
            <div
              key={enquiry.type}
              className="group rounded-2xl bg-white/50 backdrop-blur-md border border-white/50 p-5 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:bg-white/70 hover:border-coral/20 transition-all duration-300 cursor-default"
            >
              <dt className="font-medium text-dark-text group-hover:text-coral transition-colors">{enquiry.type}</dt>
              <dd className="mt-1 text-sm text-sage">{enquiry.line}</dd>
            </div>
          ))}
        </div>

        <Note kind="needs" item="a real response time against each type">
          Nothing here should say &quot;within 24 hours&quot; because it reads
          well. Her real numbers, or no number at all.
        </Note>
      </Section>

      <Section>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-4 bg-dark-text text-white px-8 py-4 rounded-full font-medium hover:bg-black hover:scale-105 transition-all group shadow-[0_8px_32px_rgba(0,0,0,0.15)]"
        >
          <span>Send a Message</span>
          <span className="w-8 h-8 rounded-full bg-white text-dark-text flex items-center justify-center group-hover:translate-x-1 transition-transform">
            →
          </span>
        </button>
      </Section>

      <Section
        title="Direct"
        intro="Some people will not use a form."
      >
        <div className="rounded-2xl bg-white/50 backdrop-blur-md border border-white/50 p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] inline-block">
          <p className="text-xs font-medium uppercase tracking-wider text-sage mb-2">Email</p>
          <a
            href={`mailto:${EMAIL}`}
            className="text-lg font-medium text-dark-text hover:text-coral transition-colors underline underline-offset-4 decoration-coral/30 hover:decoration-coral"
          >
            {EMAIL}
          </a>
        </div>

        <Note kind="needs" item="her Google Scholar and LinkedIn URLs">
          Both are links on the CV, but the addresses have to be extracted.
        </Note>

        <p className="mt-6 text-sm text-sage">
          Her mobile number is on the CV and is deliberately not published here.
        </p>
      </Section>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </Container>
  )
}
