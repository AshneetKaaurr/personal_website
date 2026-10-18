import { journalArticles } from '@/content/publications'
import { LINKEDIN_URL, ORCID_URL, SCHOLAR_URL, SITE_URL } from '@/content/site'

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output with "<" escaped cannot break out of the script tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  )
}

export const PERSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${SITE_URL}/#person`,
  name: 'Ashneet Kaur',
  honorificPrefix: 'Dr',
  url: `${SITE_URL}/`,
  image: `${SITE_URL}/photos/p-01-campus-terrace.jpg`,
  jobTitle: 'Faculty, HR-OB',
  description:
    'Scholar and educator in Organisational Behaviour and Human Resource Management, researching AI, privacy, fairness and trust at work.',
  worksFor: [
    { '@type': 'CollegeOrUniversity', name: 'Indian School of Business' },
  ],
  memberOf: [
    {
      '@type': 'OrganizationRole',
      roleName: 'Independent Director',
      startDate: '2026-04',
      memberOf: { '@type': 'Organization', name: 'Punjab Communications Limited' },
    },
  ],
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: 'Indian Institute of Management Ahmedabad' },
    { '@type': 'CollegeOrUniversity', name: 'Delhi School of Economics, University of Delhi' },
    { '@type': 'CollegeOrUniversity', name: 'Shri Ram College of Commerce, University of Delhi' },
  ],
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    name: 'SHRM Senior Certified Professional',
  },
  knowsAbout: [
    'Organisational behaviour',
    'Human resource management',
    'AI and employee privacy',
    'Green human resource management',
    'Leadership development',
    'Entrepreneurship',
  ],
  sameAs: [LINKEDIN_URL, SCHOLAR_URL, ...(ORCID_URL ? [ORCID_URL] : [])],
}

export function scholarlyArticlesLd() {
  return journalArticles.map((p) => ({
    '@context': 'https://schema.org',
    '@type': 'ScholarlyArticle',
    headline: p.title,
    datePublished: String(p.year),
    author: p.authors.map((a) =>
      a === 'Kaur, A.' ? { '@id': `${SITE_URL}/#person` } : { '@type': 'Person', name: a },
    ),
    isPartOf: { '@type': 'Periodical', name: p.venue },
    ...(p.volumeIssue ? { volumeNumber: p.volumeIssue } : {}),
    ...(p.pages ? { pagination: p.pages } : {}),
    ...(p.doi ? { sameAs: `https://doi.org/${p.doi}`, identifier: { '@type': 'PropertyValue', propertyID: 'DOI', value: p.doi } } : {}),
    ...(p.url ? { url: p.url } : {}),
  }))
}
