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

        <Note kind="needs" item="How quickly do you want to promise to reply to each of these?">
          Your real numbers, or none at all. A promise on the page that you
          cannot keep in practice does more harm than leaving it off.
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

        <div className="mt-8 flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/ashneet-kaur-k95/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-white/50 backdrop-blur-md border border-white/50 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:bg-white/70 hover:text-coral transition-all text-dark-text/70"
            aria-label="LinkedIn"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
          <a
            href="https://scholar.google.com/citations?user=SnCfTF4AAAAJ&hl=en"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-white/50 backdrop-blur-md border border-white/50 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:bg-white/70 hover:text-coral transition-all text-dark-text/70"
            aria-label="Google Scholar"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-2a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0-12a9 9 0 1 1 0-18 9 9 0 0 1 0 18zm0-2a7 7 0 1 0 0-14 7 7 0 0 0 0 14z" fillRule="evenodd" clipRule="evenodd"/></svg>
          </a>
        </div>

        <p className="mt-6 text-sm text-sage">
          Her mobile number is on the CV and is deliberately not published here.
        </p>
      </Section>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </Container>
  )
}
