import { Container, Note, PageTitle, Section } from '@/components/Page'
import { EMAIL, ENQUIRY_TYPES } from '@/content/record'

export const metadata = {
  title: 'Contact',
  description:
    'Enquiries about executive education, speaking, doctoral supervision, research collaboration and board appointments.',
}

export default function Contact() {
  return (
    <Container>
      <PageTitle lede="Tell me which of these it is and the message reaches the right place faster.">
        Contact
      </PageTitle>

      <Section title="Enquiry types">
        <dl className="space-y-5">
          {ENQUIRY_TYPES.map((enquiry) => (
            <div key={enquiry.type}>
              <dt className="font-medium">{enquiry.type}</dt>
              <dd className="mt-1 text-sage">{enquiry.line}</dd>
            </div>
          ))}
        </dl>

        <Note kind="needs" item="a real response time against each type">
          Nothing here should say &quot;within 24 hours&quot; because it reads
          well. Her real numbers, or no number at all.
        </Note>

        <Note kind="needs" item="the form provider">
          The site is static, so the form has to post to a provider such as
          Formspree or Netlify Forms, with a honeypot and provider-side
          validation. That choice also determines what the privacy notice can
          honestly promise.
        </Note>
      </Section>

      <Section
        title="Direct"
        intro="Some people will not use a form."
      >
        <p className="leading-relaxed">
          Email:{' '}
          <a
            href={`mailto:${EMAIL}`}
            className="underline underline-offset-4 hover:text-coral"
          >
            {EMAIL}
          </a>
        </p>

        <Note kind="needs" item="her Google Scholar and LinkedIn URLs">
          Both are links on the CV, but the addresses have to be extracted.
        </Note>

        <p className="mt-6 text-sm text-sage">
          Her mobile number is on the CV and is deliberately not published here.
        </p>
      </Section>
    </Container>
  )
}
