/**
 * Every role on the CV, once. About, Home, Teaching and Advisory all read
 * from here, so a date or title is corrected in one place.
 *
 * `start` and `end` are YYYY-MM for sorting; `when` is the label as shown.
 */

export type ExperienceKind = 'board' | 'academic' | 'visiting' | 'industry' | 'venture'

export interface Experience {
  id: string
  kind: ExperienceKind
  role: string
  organisation: string
  place?: string
  start: string
  /** null while the role is current. */
  end: string | null
  when: string
  details: string[]
}

export const EXPERIENCE: Experience[] = [
  {
    id: 'puncom',
    kind: 'board',
    role: 'Independent Director',
    organisation: 'Punjab Communications Limited (PUNCOM), Government of Punjab',
    start: '2026-04',
    end: null,
    when: 'April 2026 to present',
    details: [
      'Appointed under the Companies Act, 2013 (Section 149) and the SEBI (LODR) Regulations as an Independent Director.',
      'Strategic oversight of organisational governance, compliance and performance.',
      'Contributes to board-level decision-making on public sector enterprise operations and growth.',
    ],
  },
  {
    id: 'isb',
    kind: 'academic',
    role: 'Faculty, HR-OB',
    organisation: 'Indian School of Business',
    // The CV gives no start date (G4). This value only orders the list.
    start: '2026-04',
    end: null,
    when: 'Current',
    details: [],
  },
  {
    id: 'spjimr',
    kind: 'academic',
    role: 'Assistant Professor, Organisation and Leadership Studies',
    organisation: 'SP Jain Institute of Management and Research (SPJIMR)',
    place: 'Mumbai',
    start: '2023-04',
    end: '2026-03',
    when: 'April 2023 to March 2026',
    details: [
      'Taught across eight degree and executive programmes using case studies, simulation, gamification and video-based learning.',
      'Customised executive programmes (MDPs) for corporates, government bodies and social-sector organisations.',
      'Co-designed three electives: Netflix & Learn, Pitch to Boardroom, and Resilience and Turnaround.',
      'Responsible for entrepreneurial ecosystem building through the FiNovate programme under the WISE Tech Acceleration vertical, from 2024.',
      'Panellist for participant selection across PGDM, PGPM, the Fellow Programme in Management and executive programmes, from 2023.',
      'Mentored first-year PGDM students in the Abhyudaya programme and evaluated the impact of their DoCC visits.',
      "Led SPJIMR's video podcast series on AI and Digital Transformation.",
    ],
  },
  {
    id: 'pecs',
    kind: 'visiting',
    role: 'Visiting Faculty',
    organisation: 'University of Pécs',
    place: 'Hungary',
    start: '2025-09',
    end: '2025-11',
    when: 'September to November 2025',
    details: ['Taught Sustainable Human Resource Management to global students.'],
  },
  {
    id: 'great-lakes',
    kind: 'visiting',
    role: 'Visiting Faculty',
    organisation: 'Great Lakes Institute of Management and Research',
    place: 'Chennai',
    start: '2025-03',
    end: '2025-04',
    when: 'March to April 2025',
    details: ['Taught Netflix and Learn: The Art of Leadership through Movies on the PGPM.'],
  },
  {
    id: 'masters-union',
    kind: 'visiting',
    role: 'Visiting Faculty, Entrepreneurship and Human Resource Management',
    organisation: 'Masters Union School of Business',
    place: 'Gurgaon',
    start: '2022-02',
    end: '2022-04',
    when: 'February to April 2022',
    details: [
      'Designed a course on human resource management in new ventures and strategic human resource management.',
      'Involved in enrolling the 2022 cohort.',
    ],
  },
  {
    id: 'atos',
    kind: 'industry',
    role: 'Management Consultant',
    organisation: 'Atos Global',
    place: 'Paris, France and Pune, India',
    start: '2019-04',
    end: '2019-05',
    when: 'April to May 2019',
    details: [
      'Developed a human resource retention strategy for the UK, France and India offices.',
      'Interviewed more than 50 key project stakeholders.',
    ],
  },
  {
    id: 'bharti',
    kind: 'visiting',
    role: 'Guest Faculty, Financial Accounting (B.Com)',
    organisation: 'Bharti College, University of Delhi',
    start: '2017-12',
    end: '2018-03',
    when: 'December 2017 to March 2018',
    details: [
      'Taught how to evaluate the financial health of companies from their reported financial statements.',
      'Organised career counselling sessions for more than 100 students.',
    ],
  },
  {
    id: 'mckinsey',
    kind: 'industry',
    role: 'Research Analyst',
    organisation: 'McKinsey & Company',
    place: 'Gurgaon',
    start: '2016-02',
    end: '2018-05',
    when: 'February 2016 to May 2018',
    details: [
      'Worked with the Strategy Analytics team on strategy and corporate management.',
      'Organised knowledge sessions for executives, experts and partners.',
    ],
  },
  {
    id: 'deloitte',
    kind: 'industry',
    role: 'Analyst and Internal Auditor',
    organisation: 'Deloitte USI',
    place: 'Gurgaon',
    start: '2015-07',
    end: '2016-02',
    when: 'July 2015 to February 2016',
    details: ['Audit work for US clients; organised team sessions and managed team coordination.'],
  },
  {
    id: 'ventures',
    kind: 'venture',
    role: 'Founder and Co-founder, Digital Start-ups',
    organisation: 'College Ki Knowledge; Start-up Pal',
    start: '2013-07',
    end: '2015-07',
    when: 'July 2013 to July 2015',
    details: [
      'Founded College Ki Knowledge, a digital start-up handling student affairs and daily events.',
      'Co-founded Start-up Pal, curating the supply and demand of local sports complexes.',
      'Organised digital workshops, events and interviews; designed start-up strategy and ran HR practices.',
    ],
  },
]

/** Newest first. */
export const EXPERIENCE_BY_DATE = [...EXPERIENCE].sort((a, b) => b.start.localeCompare(a.start))

export const CURRENT_ROLES = EXPERIENCE.filter((e) => e.end === null)

export function getExperience(id: string): Experience {
  const found = EXPERIENCE.find((e) => e.id === id)
  if (!found) throw new Error(`Unknown experience "${id}"`)
  return found
}

/** Corporate consulting engagements. Undated on the CV. */
export interface Engagement {
  client: string
  sector: string
  scope: string
  detail: string
}

export const CONSULTING: Engagement[] = [
  {
    client: 'ICAI',
    sector: 'Chartered accountancy body',
    scope: 'Systems-based consulting',
    detail: 'Analysed the key areas of process and leadership improvement in the existing structure of the organisation.',
  },
  {
    client: 'Bosch India',
    sector: 'Electronics',
    scope: 'Strategic consulting',
    detail: 'Analysed strategic improvements to the organisation’s processes toward becoming a “learning organisation”, and developed systems for enhancing diversity and inclusion across verticals.',
  },
  {
    client: 'HURL',
    sector: 'Fertiliser',
    scope: 'Management consulting',
    detail: 'Analysed areas of leadership improvement using interviews and questionnaires. The results on HRM systems were appreciated and accepted by the client organisation.',
  },
]
