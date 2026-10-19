/**
 * Logo strips. Every entry is CV-backed. Where no logo file exists yet the
 * strip renders the organisation name as text and the entry is listed in the
 * missing-logo report (`missingLogos` below).
 */

export interface LogoEntry {
  name: string
  caption: string
  /** Path under /public. Null until a file is supplied. */
  logo: string | null
}

/** Logo strip A: academic and professional foundations. */
export const FOUNDATIONS: LogoEntry[] = [
  { name: 'IIM Ahmedabad', caption: 'PhD in HRM', logo: '/logos/iima.png' },
  { name: 'Delhi School of Economics', caption: 'M.Com', logo: '/photos/Delhi_school_economics.jpeg' },
  { name: 'SRCC, University of Delhi', caption: 'B.Com (Hons)', logo: '/photos/SRCC.png' },
  { name: 'The Wharton School', caption: 'Global Faculty Development Program, 2025', logo: '/photos/Wharton-logo.png' },
  { name: 'Indian School of Business', caption: 'Faculty, HR-OB', logo: '/logos/isb.png' },
  { name: 'SPJIMR', caption: 'Assistant Professor, 2023 to 2026', logo: '/logos/spjimr.png' },
  { name: 'University of Pécs, Hungary', caption: 'Visiting faculty', logo: '/logos/university-of-pecs.png' },
  { name: 'Great Lakes Institute of Management', caption: 'Visiting faculty', logo: '/logos/great-lakes.png' },
  { name: "Masters' Union", caption: 'Visiting faculty', logo: '/logos/masters-union.png' },
  { name: 'Academy of Management', caption: 'Best Paper Award, 2023', logo: '/Academy_of_Management_logo.webp' },
  { name: 'SHRM', caption: 'Senior Certified Professional', logo: '/SHRM.png' },
  { name: 'PUNCOM, Government of Punjab', caption: 'Independent Director', logo: '/photos/PunjabCommun.webp' },
]

/** Logo strip B: organisations advised, worked with and taught for. */
export const ORGANISATIONS: LogoEntry[] = [
  { name: 'McKinsey & Company', caption: 'Research Analyst, Strategy Analytics', logo: '/photos/McKinsey..webp' },
  { name: 'Deloitte USI', caption: 'Analyst and Internal Auditor', logo: '/photos/Deloitte.webp' },
  { name: 'Atos Global', caption: 'HR retention strategy, UK, France and India', logo: '/photos/Atos_logo.png' },
  { name: 'Bosch India', caption: 'Strategic consulting', logo: '/logos/bosch.png' },
  { name: 'HURL', caption: 'Leadership and HRM systems consulting', logo: '/logos/hurl.png' },
  { name: 'ICAI', caption: 'Systems-based consulting', logo: '/logos/icai.png' },
  { name: 'PUNCOM', caption: 'Board of Directors', logo: '/photos/PunjabCommun.webp' },
  { name: 'Blind People Association', caption: 'Design thinking lecture, at IIM Ahmedabad', logo: '/logos/blind-people-association.png' },
  { name: 'K.R. Mangalam University', caption: 'Lecture on research impact', logo: '/logos/kr-mangalam.png' },
]

/**
 * Executive-education clients, as supplied by Dr Kaur's office. Trimmed
 * copies of the supplied files live in /public/logos/.
 */
export const CLIENTS: LogoEntry[] = [
  { name: 'SBI', caption: 'Banking', logo: '/logos/sbi.png' },
  { name: 'PwC', caption: 'Professional services', logo: '/logos/pwc.png' },
  { name: 'L&T', caption: 'Engineering and construction', logo: '/logos/lt.png' },
  { name: 'Schneider Electric', caption: 'Energy management', logo: '/logos/schneider-electric.png' },
  { name: 'Goldman Sachs', caption: 'Financial services', logo: '/logos/goldman-sachs.png' },
  { name: 'ONGC', caption: 'Energy', logo: '/logos/ongc.png' },
  { name: 'ZS Associates', caption: 'Consulting', logo: '/logos/zs-associates.png' },
  { name: 'Accenture Strategy', caption: 'Consulting', logo: '/logos/accenture.png' },
  { name: 'KPMG', caption: 'Professional services', logo: '/logos/kpmg.png' },
  { name: 'Toyota', caption: 'Manufacturing', logo: '/logos/toyota.png' },
  { name: 'BPCL', caption: 'Energy', logo: '/logos/bpcl.png' },
  { name: 'ICICI', caption: 'Banking', logo: '/logos/icici.png' },
  { name: 'EY', caption: 'Professional services', logo: '/logos/ey.png' },
]

/** Sectors participants come from, largest first, from the participant breakdown. */
export const CLIENT_SECTORS = [
  'BFSI and financial services',
  'Technology and IT',
  'Manufacturing and industrial',
  'Consulting and professional services',
  'Consumer, retail and agriculture',
  'Healthcare, pharma and life sciences',
  'Media, marketing and communications',
  'Energy',
  'Travel and tourism',
  'Real estate, infrastructure and construction',
]
