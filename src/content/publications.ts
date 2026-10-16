import { publicationSchema, type Publication, type ThemeId } from '@/content/schema'

/**
 * The publication record. Transcribed from UpdatedCV_AshneetKaur_2026.pdf,
 * with volume, pages, DOIs, citation counts and published titles taken from
 * the content map's publisher-verified table. Where the CV and the published
 * record disagree, the published record wins and a comment cites the C-number
 * from the content map.
 *
 * Author order is exact and is never reordered to put her first.
 *
 * Every `summary` describes what the paper LOOKS AT - not what it found.
 */
const RECORDS: Publication[] = [
  {
    id: 'watch-out-you-are-live',
    themes: ['ai-and-work'],
    title:
      'Watch out, you are live! Toward understanding the impact of AI on the privacy of employees',
    shortTitle: 'Watch out, you are live: when AI monitors employees',
    authors: ['Kaur, A.', 'Maheshwari, S.', 'Bose, I.', 'Singh, S.'],
    venue: 'Communications of the Association for Information Systems',
    year: 2024,
    abdc: 'A',
    type: 'journal',
    volumeIssue: '55',
    pages: '603-626',
    doi: '10.17705/1CAIS.05523',
    url: 'https://aisel.aisnet.org/cais/vol55/iss1/24/',
    summary:
      "What happens to employees' privacy when AI systems watch how they work, and where the ethical lines around that monitoring sit.",
    citations: 11,
  },
  {
    id: 'ghrm-systems-organizational-culture',
    themes: ['sustainable-hrm'],
    // C7: the CV gives a working title. This is the title as published.
    title:
      'Green human resource management and green culture: An integrative sustainable competing values framework and future research directions',
    shortTitle: 'Green HRM and green culture',
    authors: ['Maheshwari, S.', 'Kaur, A.', 'Renwick, D.'],
    venue: 'Organization & Environment',
    year: 2024,
    abdc: 'A',
    type: 'journal',
    volumeIssue: '37(1)',
    pages: '32-56',
    doi: '10.1177/10860266231217280',
    url: 'https://doi.org/10.1177/10860266231217280',
    summary:
      'How a company culture shapes whether its green HR practices actually change its environmental performance, or stay on paper.',
    citations: 98,
  },
  {
    id: 'meaningfulness-of-work-telework',
    themes: ['fairness-and-wellbeing'],
    title:
      'Understanding the role of meaningfulness of work during home-based telework: A moderated-mediation model of bullying during work-from-home',
    shortTitle: 'Meaningful work and bullying from home',
    authors: ['Maheshwari, S.', 'Kaur, A.', 'Varma, A.'],
    venue: 'Personnel Review',
    year: 2024,
    abdc: 'A',
    type: 'journal',
    volumeIssue: '53(7)',
    pages: '1710-1728',
    doi: '10.1108/PR-02-2023-0121',
    url: 'https://doi.org/10.1108/PR-02-2023-0121',
    summary:
      'Whether finding your work meaningful changes how workplace bullying lands when the workplace is your home.',
    citations: 13,
  },
  {
    id: 'sailing-through-international-assignment',
    themes: ['careers-and-mobility'],
    title:
      'Sailing through the international assignment: Exploring the role of perceived credibility in expatriate adjustment and socialization process in host country',
    shortTitle: 'Sailing through the international assignment',
    authors: ['Kaur, A.', 'Maheshwari, S.', 'Varma, A.'],
    venue: 'Journal of Global Mobility',
    year: 2024,
    abdc: 'B',
    type: 'journal',
    volumeIssue: '12(3)',
    pages: '502-519',
    doi: '10.1108/JGM-10-2023-0073',
    url: 'https://doi.org/10.1108/JGM-10-2023-0073',
    summary:
      'What role being seen as credible plays in how quickly someone sent abroad settles in and gets accepted by colleagues.',
    citations: 6,
  },
  {
    id: 'the-digital-escape',
    themes: ['fairness-and-wellbeing', 'ai-and-work'],
    title:
      'The digital escape: Examining the impact of cyberloafing on gossip-induced emotional exhaustion and the mediating role of self-esteem',
    shortTitle: 'The digital escape',
    authors: ['Kaur, A.', 'Maheshwari, S.', 'Varma, A.'],
    venue: 'Evidence-based HRM',
    // C2: the CV says 2025; the publisher record is 14(1), 120-137, 2026.
    year: 2026,
    abdc: 'B',
    type: 'journal',
    volumeIssue: '14(1)',
    pages: '120-137',
    doi: '10.1108/EBHRM-12-2023-0344',
    url: 'https://doi.org/10.1108/EBHRM-12-2023-0344',
    summary:
      'Why people retreat into their phones at work when office gossip wears them down, and what that costs them.',
    citations: 7,
  },
  {
    id: 'governance-beyond-borders',
    themes: ['ventures-and-governance'],
    title:
      'Governance beyond borders: Exploring executive overconfidence and firm performance using meta-analysis',
    shortTitle: 'Governance beyond borders',
    authors: [
      'Agarwal, P.',
      'Edacherian, S.',
      'Karna, A.',
      'Kaur, A.',
      'Maheshwari, S.',
    ],
    venue: 'Cross-Cultural & Strategic Management',
    year: 2025,
    abdc: 'B',
    type: 'journal',
    volumeIssue: '32(2)',
    pages: '414-435',
    doi: '10.1108/CCSM-03-2024-0065',
    url: 'https://doi.org/10.1108/CCSM-03-2024-0065',
    summary:
      'A synthesis of the existing evidence on whether overconfident executives help or hurt the firms they run, and how that varies across countries.',
    citations: 1,
  },
  {
    id: 'informal-competition-innovation',
    themes: ['ventures-and-governance'],
    title:
      'How does informal competition shape innovation? Exploring the roles of labour flexibility and special economic zones in emerging economies',
    shortTitle: 'Informal competition and innovation',
    authors: ['Bhattacharya, B.', 'Maheshwari, S.', 'Kaur, A.'],
    venue: 'IIMB Management Review',
    // The CV says 2025; the publisher record is 38(1), 2026.
    year: 2026,
    // C4: the CV says ABDC-B; the co-author's site says ABDC-C. Kept as the
    // CV states until she confirms against the current ABDC list.
    abdc: 'B',
    type: 'journal',
    volumeIssue: '38(1)',
    pages: '100638',
    doi: '10.1016/j.iimb.2025.100638',
    url: 'https://doi.org/10.1016/j.iimb.2025.100638',
    summary:
      'How competition from the informal economy affects whether firms in emerging markets innovate, and what labour rules and special economic zones do to that relationship.',
    citations: 1,
  },
  {
    id: 'the-hidden-toll-of-unfair-workplaces',
    themes: ['fairness-and-wellbeing'],
    // C3: the CV uses the AOM 2025 proceedings title ("The lonely road of
    // injustice: How perceived unfairness influences knowledge hiding and
    // psychological well-being"). This is the title the journal published
    // under DOI 10.1108/IJCMA-04-2025-0121.
    title:
      'The hidden toll of unfair workplaces: Examining the mediating role of workplace loneliness',
    shortTitle: 'The hidden toll of unfair workplaces',
    authors: ['Firoz, M.', 'Khan, A.', 'Maheshwari, S.', 'Kaur, A.'],
    venue: 'International Journal of Conflict Management',
    year: 2026,
    abdc: 'A',
    type: 'journal',
    volumeIssue: '37(3)',
    pages: '629-646',
    doi: '10.1108/IJCMA-04-2025-0121',
    url: 'https://doi.org/10.1108/IJCMA-04-2025-0121',
    extraLinks: [
      {
        label: 'Conference version',
        url: 'https://www.isb.edu/faculty-and-research/research-directory/the-lonely-road-of-injustice-how-perceived-unfairness-influences-knowledge-hiding-and-well-being/',
      },
    ],
    summary:
      'What happens inside teams when people feel treated unfairly: what they stop sharing, and what it does to them.',
    citations: 1,
  },
  {
    id: 'invisible-norms-visible-challenges',
    themes: ['careers-and-mobility'],
    title:
      'Invisible norms, visible challenges: unravelling multi-level barriers to career engagement of women in India',
    shortTitle: 'Invisible norms, visible challenges',
    authors: ['Kaur, A.', 'Maheshwari, S.', 'Varma, A.'],
    venue: 'Asia Pacific Journal of Management',
    year: 2026,
    abdc: 'A',
    type: 'journal',
    volumeIssue: null,
    pages: null,
    doi: '10.1007/s10490-025-10109-2',
    url: 'https://doi.org/10.1007/s10490-025-10109-2',
    summary:
      'The layered barriers, some written down and most not, that shape how women build careers in India.',
    citations: 0,
  },
  {
    id: 'agility-in-new-ventures',
    themes: ['ventures-and-governance'],
    title:
      'Agility in new ventures: examining the role of autonomy and trust using a job demands-resources lens',
    shortTitle: 'Agility in new ventures',
    authors: [
      'Kaur, A.',
      'Maheshwari, S.',
      'Srivastava, S.',
      'Maheshwari, S.',
      'Varma, A.',
    ],
    venue: 'Evidence-based HRM',
    year: 2026,
    abdc: 'B',
    type: 'journal',
    volumeIssue: null,
    pages: null,
    doi: '10.1108/EBHRM-05-2025-0203',
    url: 'https://doi.org/10.1108/EBHRM-05-2025-0203',
    summary:
      'What makes teams in young companies able to move fast, and how much of it comes down to autonomy and trust in the founder.',
    citations: 0,
  },
  {
    id: 'expatriate-selection-and-evaluation',
    themes: ['careers-and-mobility'],
    title: 'Expatriate Selection and Evaluation',
    shortTitle: 'Expatriate selection and evaluation',
    authors: ['Varma, A.', 'Kaur, A.', 'Maheshwari, S.'],
    venue: 'Oxford University Press',
    year: 2025,
    abdc: null,
    type: 'book-chapter',
    volumeIssue: null,
    pages: null,
    doi: null,
    url: 'https://www.oxfordbibliographies.com',
    summary:
      'A book chapter on how organisations choose the people they send on international assignments, and how they judge whether it worked.',
    citations: null,
  },
  {
    id: 'amrg-associates-case',
    themes: ['ventures-and-governance'],
    title:
      'AMRG & Associates: Crafting Professionalization Through HR Transformation',
    shortTitle: 'AMRG & Associates',
    // C5: the CV omits co-author Dhaigude and gives 2025; the published
    // record is JOBE vol. 17, 31-40, 2024. Author order to be confirmed.
    authors: ['Kaur, A.', 'Maheshwari, S.', 'Dhaigude, A.'],
    venue: 'Journal of Organizational Behavior Education',
    year: 2024,
    abdc: null,
    type: 'case',
    volumeIssue: '17',
    pages: '31-40',
    doi: null,
    url: 'https://www.neilsonjournals.com/JOBE/JOBEpromos/AMRG17p.pdf',
    summary:
      'A teaching case on the professionalisation of a family-run business through HR transformation.',
    citations: null,
  },
  // ---------------------------------------------------------------------
  // Conference papers recognised with best-paper awards. Titles and awards
  // are as worded on the CV; the CV does not give their author lists.
  // ---------------------------------------------------------------------
  {
    id: 'employee-agility-new-ventures-aom-2023',
    themes: ['ventures-and-governance'],
    title:
      'Employee Agility in New Ventures: Investigating the Role of Work Engagement and Trust in Founder in Cross-cultural Settings',
    shortTitle: 'Employee agility in new ventures',
    authors: [],
    venue: '83rd Annual Meeting of the Academy of Management, Boston, Massachusetts',
    year: 2023,
    abdc: null,
    type: 'conference',
    volumeIssue: null,
    pages: null,
    doi: null,
    url: null,
    summary:
      'How work engagement and trust in the founder relate to employee agility in new ventures, across cultural settings.',
    citations: null,
    award: 'Best Paper Award, Human Resource Division (top 10%)',
  },
  {
    id: 'entrepreneurial-freedom-edii-2023',
    themes: ['ventures-and-governance'],
    title:
      'Entrepreneurial Freedom to Work and Quality Listening of Founders: Role of Learning Goal Orientation in Start-up Firms',
    shortTitle: 'Entrepreneurial freedom and founder listening',
    authors: [],
    venue: 'Entrepreneurship Development Institute of India Biennial Conference',
    year: 2023,
    abdc: null,
    type: 'conference',
    volumeIssue: null,
    pages: null,
    doi: null,
    url: null,
    summary:
      'The freedom to work and the quality of a founder’s listening in start-up firms, and where learning goal orientation fits.',
    citations: null,
    award: 'Best Paper Award: one of the top three of 118 research contributions in entrepreneurship',
  },
  {
    id: 'going-green-turns-grey-rdais-2025',
    themes: ['sustainable-hrm', 'fairness-and-wellbeing'],
    title:
      'When going green turns grey: The ethical implications of abusive supervision in hospitality workplaces',
    shortTitle: 'When going green turns grey',
    authors: [],
    venue: 'Anusandhan, RDAIS',
    year: 2025,
    abdc: null,
    type: 'conference',
    volumeIssue: null,
    pages: null,
    doi: null,
    url: null,
    summary:
      'The ethical implications of abusive supervision in hospitality workplaces, set against the push to go green.',
    citations: null,
    award: 'Best Paper Award, HR and General Management Division',
  },
]

/** Validated at module load, so a malformed record fails the build. */
export const publications: Publication[] = RECORDS.map((record) =>
  publicationSchema.parse(record),
)

export const PUBLICATION_TYPES = {
  journal: 'Journal article',
  'book-chapter': 'Book chapter',
  case: 'Teaching case',
  conference: 'Conference paper',
} as const

export function byTheme(theme: ThemeId): Publication[] {
  return publications.filter((p) => p.themes.includes(theme))
}

export const journalArticles = publications.filter(
  (publication) => publication.type === 'journal',
)

/** Newest first, then alphabetical so the order is stable across builds. */
function byRecency(a: Publication, b: Publication): number {
  return b.year - a.year || a.title.localeCompare(b.title)
}

/** Most-cited first: the order the content map's research table uses. */
export function byCitations(a: Publication, b: Publication): number {
  return (b.citations ?? -1) - (a.citations ?? -1) || byRecency(a, b)
}

export function getPublication(id: string): Publication {
  const found = publications.find((p) => p.id === id)
  if (!found) throw new Error(`Unknown publication "${id}"`)
  return found
}

export const totalCitations = journalArticles.reduce(
  (sum, p) => sum + (p.citations ?? 0),
  0,
)
