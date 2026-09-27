'use client'

import { useState } from 'react'
import { Container, Note, PageTitle, Section } from '@/components/Page'
import { ContactModal } from '@/components/ContactModal'
import { EMAIL, ENQUIRY_TYPES, LINKEDIN_URL, SCHOLAR_URL } from '@/content/record'
import GlassIcons from '@/components/GlassIcons'
import { BookOpen, Mic, GraduationCap, Lightbulb, Building, MessageSquare } from 'lucide-react'

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <Container>
      <PageTitle lede="Tell me which of these it is and the message reaches the right place faster.">
        Contact
      </PageTitle>

      <Section title="Enquiry types">
        <div className="grid gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {ENQUIRY_TYPES.map((enquiry, index) => {
            const icons = [
              { icon: <BookOpen strokeWidth={1.5} />, color: 'blue' },
              { icon: <Mic strokeWidth={1.5} />, color: 'purple' },
              { icon: <GraduationCap strokeWidth={1.5} />, color: 'red' },
              { icon: <Lightbulb strokeWidth={1.5} />, color: 'indigo' },
              { icon: <Building strokeWidth={1.5} />, color: 'orange' },
              { icon: <MessageSquare strokeWidth={1.5} />, color: 'green' },
            ]
            return (
              <div key={enquiry.type} className="flex flex-col items-center text-center group">
                <GlassIcons
                  items={[
                    {
                      // noUncheckedIndexedAccess: the lookup can be undefined if
                      // the enquiry list ever outgrows the icon list.
                      icon: icons[index]?.icon ?? icons[0]!.icon,
                      color: icons[index]?.color ?? icons[0]!.color,
                      label: '',
                    },
                  ]}
                  className="!py-0 !gap-0 !grid-cols-1 place-items-center"
                />
                <h3 className="mt-6 font-medium text-lg text-dark-text group-hover:text-coral transition-colors">{enquiry.type}</h3>
                <p className="mt-2 text-sm text-sage px-4">{enquiry.line}</p>
              </div>
            )
          })}
        </div>

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

      <div className="mt-24 mb-12 flex flex-col items-center justify-center">
        <div className="flex items-center gap-6">
          <a
            href={`mailto:${EMAIL}`}
            className="w-14 h-14 rounded-full bg-dark-text/5 hover:bg-coral flex items-center justify-center text-dark-text hover:text-white transition-all shadow-sm"
            aria-label="Email"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            className="w-14 h-14 rounded-full bg-dark-text/5 hover:bg-coral flex items-center justify-center text-dark-text hover:text-white transition-all shadow-sm"
            aria-label="LinkedIn"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
          <a
            href={SCHOLAR_URL}
            target="_blank"
            rel="noreferrer"
            className="w-14 h-14 rounded-full bg-dark-text/5 hover:bg-coral flex items-center justify-center text-dark-text hover:text-white transition-all shadow-sm"
            aria-label="Google Scholar"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-2a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0-12a9 9 0 1 1 0-18 9 9 0 0 1 0 18zm0-2a7 7 0 1 0 0-14 7 7 0 0 0 0 14z" fillRule="evenodd" clipRule="evenodd"/></svg>
          </a>
          <a
            href="https://www.instagram.com/professorashneetkaaurr?stkn=aTN5NDI3dzY0dTl0&utm_source=qr"
            target="_blank"
            rel="noreferrer"
            className="w-14 h-14 rounded-full bg-dark-text/5 hover:bg-coral flex items-center justify-center text-dark-text hover:text-white transition-all shadow-sm"
            aria-label="Instagram"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
        </div>
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </Container>
  )
}
