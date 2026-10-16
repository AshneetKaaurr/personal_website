/**
 * The CV record, as data.
 *
 * Everything here is transcribed from UpdatedCV_AshneetKaur_2026.pdf. Nothing
 * is inferred, rounded or embellished. Where the CV is silent, the field is
 * absent and the page says so rather than filling the gap.
 */

import type { ThemeId } from '@/content/schema'

// ---------------------------------------------------------------------------
// Awards
// ---------------------------------------------------------------------------

export interface Award {
  title: string
  paper: string
  detail: string
  year: number
  /** The conference-paper record in publications.ts. */
  paperId: string
}

export const AWARDS: Award[] = [
  {
    title: 'Best Paper Award, Human Resource Division, Academy of Management',
    paper:
      'Employee Agility in New Ventures: Investigating the Role of Work Engagement and Trust in Founder in cross-cultural Settings',
    detail:
      'Top ten per cent in the division, 83rd Annual Meeting, Boston, Massachusetts',
    year: 2023,
    paperId: 'employee-agility-new-ventures-aom-2023',
  },
  {
    title:
      'Best Paper Award, Entrepreneurship Development Institute of India Biennial Conference',
    paper:
      'Entrepreneurial Freedom to Work and Quality Listening of Founders: Role of Learning Goal Orientation in Start-up Firms',
    detail: 'One of the top three of 118 entrepreneurship contributions',
    year: 2023,
    paperId: 'entrepreneurial-freedom-edii-2023',
  },
  {
    title: 'Best Paper Award, Human Resource Division, Anusandhan RDAIS',
    paper:
      'When going green turns grey: The ethical implications of abusive supervision in hospitality workplaces',
    detail: 'Best paper in the HR and general management division',
    year: 2025,
    paperId: 'going-green-turns-grey-rdais-2025',
  },
]

// ---------------------------------------------------------------------------
// Speaking
// ---------------------------------------------------------------------------

export interface Appearance {
  event: string
  place: string
  when: string
  upcoming?: boolean
}

/** Academy of Management, grouped because five meetings is the headline. */
export const AOM: Appearance[] = [
  // C1: the CV says "to present" (written before August 2026). The S-04
  // photograph places her at the meeting, so it is listed as attended; the
  // G-list asks her to confirm the paper was presented.
  {
    event: '86th Annual Meeting',
    place: 'Philadelphia, USA',
    when: 'August 2026',
  },
  // The CV says "Denmark"; the meeting was hosted in Copenhagen.
  { event: '85th Annual Meeting', place: 'Copenhagen, Denmark', when: 'August 2025' },
  { event: '84th Annual Meeting', place: 'Chicago, USA', when: 'August 2024' },
  { event: '83rd Annual Meeting', place: 'Boston, USA', when: 'August 2023' },
  { event: '82nd Annual Meeting', place: 'Seattle, USA', when: 'August 2022' },
  { event: '81st Annual Meeting', place: 'Virtual', when: 'August 2021' },
]

export const EGOS: Appearance[] = [
  {
    event: '39th EGOS Colloquium, University of Cagliari',
    place: 'Cagliari, Italy',
    when: 'July 2023',
  },
  {
    event: '38th EGOS Colloquium, WU Vienna',
    place: 'Vienna, Austria',
    when: 'July 2022',
  },
]

export const OTHER_CONFERENCES: Appearance[] = [
  {
    event: 'European Academy of Management, Trinity Business School',
    place: 'Dublin, Ireland',
    when: 'June 2023',
  },
  {
    event: 'Babson College Entrepreneurship Research Conference',
    place: 'Knoxville, USA',
    when: 'June 2023',
  },
  {
    event:
      'ICODO Doctoral Workshop, International Conference on Digital Organizations, IIM Ahmedabad',
    place: 'Ahmedabad, India',
    when: 'November 2022',
  },
  {
    event:
      '5th Global Conference on International HRM, Pennsylvania State University',
    place: 'Hybrid',
    when: 'May 2022',
  },
  {
    event:
      'International Conference on Green HRM and Sustainable Behaviour, Vienna University of Economics and Business',
    // C6: the CV says "Germany". Vienna is in Austria.
    place: 'Vienna, Austria',
    when: 'March 2022',
  },
  { event: 'NASPAA South Asia Conference', place: '', when: 'November 2021' },
]

// ---------------------------------------------------------------------------
// Media
// ---------------------------------------------------------------------------

export interface Article {
  title: string
  outlet: string
  year: string
  authorship: 'Authored' | 'Co-authored'
  /** Verifiable third-party reach, where the CV records it. */
  reach?: string
  /** The headline figure from `reach`, for stat bands. */
  reachFigure?: string
  url?: string
  themes: ThemeId[]
}

export const ARTICLES: Article[] = [
  {
    title: 'The vanishing first job in the age of AI',
    outlet: 'ET-HRWorld',
    year: '2026',
    themes: ['ai-and-work'],
    authorship: 'Co-authored',
    url: 'https://hr.economictimes.indiatimes.com/news/trends/the-vanishing-first-job-in-the-age-of-ai/129745856',
  },
  {
    title: 'Pause before you judge: The social tax we all pay',
    outlet: 'Reputation Today',
    year: '2025',
    themes: ['fairness-and-wellbeing'],
    authorship: 'Authored',
    url: 'https://reputationtoday.in/author/ashneet-kaur/',
  },
  {
    title:
      'Technology Meets Tradition: A New Era of Audience Engagement With Indian Performing Arts',
    outlet: 'Forbes India',
    year: '2025',
    themes: [],
    authorship: 'Co-authored',
    url: 'https://www.forbesindia.com/article/bharatiya-vidya-bhavan039s-spjimr/technology-meets-tradition-a-new-era-of-audience-engagement-with-indian-performing-arts/95651/1',
  },
  {
    title: "Partnerships and Resourcefulness: A Venture's Ultimate Growth Hack",
    outlet: 'Management Practice Insight',
    year: '2024 to 2025',
    themes: ['ventures-and-governance'],
    authorship: 'Co-authored',
    reachFigure: '5,900+',
    reach:
      'More than 5,900 downloads and close to 2,822 site views as of September 2025 — the most-read of more than thirty articles published there since March 2024.',
    url: 'https://mpibyspjimr.org/articles/partnerships-resourcefulness-a-ventures-ultimate-growth-hack',
  },
  {
    title: 'Navigating the Green Shift: The Role of Sustainable Leadership',
    outlet: 'People Matters',
    year: '2024',
    themes: ['sustainable-hrm'],
    authorship: 'Co-authored',
  },
  {
    title: 'Entrepreneurial excellence: 11 principles for business success',
    outlet: 'CXO Today',
    year: '2024',
    themes: ['ventures-and-governance'],
    authorship: 'Co-authored',
  },
  {
    title:
      'Beyond the check-list: Unlocking the secrets to Successful Global Assignments',
    outlet: 'Journal of Global Mobility Bitblog',
    year: '2024',
    themes: ['careers-and-mobility'],
    authorship: 'Co-authored',
  },
  {
    title: 'Empowering HRM with Artificial Intelligence',
    outlet: 'Business Manager',
    year: '2024',
    themes: ['ai-and-work'],
    authorship: 'Co-authored',
  },
]
