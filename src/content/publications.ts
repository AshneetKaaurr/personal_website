import { publicationSchema, type Publication } from '@/content/schema'

/**
 * The publication record. Every field is transcribed from
 * UpdatedCV_AshneetKaur_2026.pdf via CONTENT-INVENTORY.md §4.
 *
 * Author order is exact and is never reordered to put her first.
 *
 * Every `summary` is a DRAFT written by Claude. Each one describes what the
 * paper LOOKS AT — not what it found. No effect size, no conclusion and no
 * result appears in any of them, because none of these papers has been read.
 * She approves or rewrites each line before the site ships. CLAUDE.md rule 2.
 *
 * DOIs are not on the CV. They stay null until retrieved from Google Scholar
 * or from her. PENDING.md carries this.
 *
 * Theme assignments are PROPOSED by Claude, not stated by her. PENDING.md
 * carries this too — all twelve need confirming before the Research pages ship.
 */
const RECORDS: Publication[] = [
  {
    id: 'watch-out-you-are-live',
    title:
      'Watch out, you are live! Toward understanding the impact of AI on the privacy of employees',
    authors: ['Kaur, A.', 'Maheshwari, S.', 'Bose, I.', 'Singh, S.'],
    venue: 'Communications of the Association for Information Systems',
    year: 2024,
    abdc: 'A',
    theme: 'algorithms-at-work',
    type: 'journal',
    volumeIssue: '55(1)',
    pages: '24',
    doi: null,
    pdf: null,
    summary:
      'What happens to employees privacy when AI systems watch how they work, and where the ethical lines around that monitoring sit.',
    summaryStatus: 'draft',
    award: null,
  },
  {
    id: 'ghrm-systems-organizational-culture',
    title:
      'GHRM systems, organizational culture and environmental performance: an integrative theoretical framework and future research directions',
    authors: ['Maheshwari, S.', 'Kaur, A.', 'Renwick, D.'],
    venue: 'Organization & Environment',
    year: 2024,
    abdc: 'A',
    theme: 'sustainable-people-systems',
    type: 'journal',
    volumeIssue: '37(1)',
    pages: '32-56',
    doi: null,
    pdf: null,
    summary:
      'How a company culture shapes whether its green HR practices actually change its environmental performance, or stay on paper.',
    summaryStatus: 'draft',
    award: null,
  },
  {
    id: 'meaningfulness-of-work-telework',
    title:
      'Understanding the role of meaningfulness of work during home-based telework: A moderated-mediation model of bullying during work-from-home',
    authors: ['Maheshwari, S.', 'Kaur, A.', 'Varma, A.'],
    venue: 'Personnel Review',
    year: 2024,
    abdc: 'A',
    theme: 'sustainable-people-systems',
    type: 'journal',
    volumeIssue: '53(7)',
    pages: '1710-1728',
    doi: null,
    pdf: null,
    summary:
      'Whether finding your work meaningful changes how workplace bullying lands when the workplace is your home.',
    summaryStatus: 'draft',
    award: null,
  },
  {
    id: 'sailing-through-international-assignment',
    title:
      'Sailing through the international assignment: Exploring the role of perceived credibility in expatriate adjustment and socialization process in host country',
    authors: ['Kaur, A.', 'Maheshwari, S.', 'Varma, A.'],
    venue: 'Journal of Global Mobility',
    year: 2024,
    abdc: 'B',
    theme: 'careers-and-advancement',
    type: 'journal',
    volumeIssue: null,
    pages: null,
    doi: null,
    pdf: null,
    summary:
      'What role being seen as credible plays in how quickly someone sent abroad settles in and gets accepted by colleagues.',
    summaryStatus: 'draft',
    award: null,
  },
  {
    id: 'the-digital-escape',
    title:
      'The digital escape: Examining the impact of cyberloafing on gossip-induced emotional exhaustion and the mediating role of self-esteem',
    authors: ['Kaur, A.', 'Maheshwari, S.', 'Varma, A.'],
    venue: 'Evidence-based HRM',
    year: 2025,
    abdc: 'B',
    theme: 'algorithms-at-work',
    type: 'journal',
    volumeIssue: null,
    pages: null,
    doi: null,
    pdf: null,
    summary:
      'Why people retreat into their phones at work when office gossip wears them down, and what that costs them.',
    summaryStatus: 'draft',
    award: null,
  },
  {
    id: 'governance-beyond-borders',
    title:
      'Governance beyond borders: Exploring executive overconfidence and firm performance using meta-analysis',
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
    theme: 'careers-and-advancement',
    type: 'journal',
    volumeIssue: null,
    pages: null,
    doi: null,
    pdf: null,
    summary:
      'A synthesis of the existing evidence on whether overconfident executives help or hurt the firms they run, and how that varies across countries.',
    summaryStatus: 'draft',
    award: null,
  },
  {
    id: 'informal-competition-innovation',
    title:
      'How does informal competition shape innovation? Exploring the roles of labour flexibility and special economic zones in emerging economies',
    authors: ['Bhattacharya, B.', 'Maheshwari, S.', 'Kaur, A.'],
    venue: 'IIMB Management Review',
    year: 2025,
    abdc: 'B',
    theme: 'sustainable-people-systems',
    type: 'journal',
    volumeIssue: null,
    pages: null,
    doi: null,
    pdf: null,
    summary:
      'How competition from the informal economy affects whether firms in emerging markets innovate, and what labour rules and special economic zones do to that relationship.',
    summaryStatus: 'draft',
    award: null,
  },
  {
    id: 'the-lonely-road-of-injustice',
    title:
      'The lonely road of injustice: How perceived unfairness influences knowledge hiding and psychological well-being',
    authors: ['Firoz, M.', 'Khan, A.', 'Maheshwari, S.', 'Kaur, A.'],
    venue: 'International Journal of Conflict Management',
    year: 2026,
    abdc: 'A',
    theme: 'sustainable-people-systems',
    type: 'journal',
    volumeIssue: null,
    pages: null,
    doi: null,
    pdf: null,
    summary:
      'What happens inside teams when people feel treated unfairly - what they stop sharing, and what it does to them.',
    summaryStatus: 'draft',
    award: null,
  },
  {
    id: 'invisible-norms-visible-challenges',
    title:
      'Invisible norms, visible challenges: unravelling multi-level barriers to career engagement of women in India',
    authors: ['Kaur, A.', 'Maheshwari, S.', 'Varma, A.'],
    venue: 'Asia Pacific Journal of Management',
    year: 2026,
    abdc: 'A',
    theme: 'careers-and-advancement',
    type: 'journal',
    volumeIssue: null,
    pages: null,
    doi: null,
    pdf: null,
    summary:
      'The layered barriers - some written down, most not - that shape how women build careers in India.',
    summaryStatus: 'draft',
    award: null,
  },
  {
    id: 'agility-in-new-ventures',
    title:
      'Agility in new ventures: examining the role of autonomy and trust using a job demands-resources lens',
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
    theme: 'sustainable-people-systems',
    type: 'journal',
    volumeIssue: null,
    pages: null,
    doi: null,
    pdf: null,
    summary:
      'What makes teams in young companies able to move fast, and how much of it comes down to autonomy and trust in the founder.',
    summaryStatus: 'draft',
    award: null,
  },
  {
    id: 'expatriate-selection-and-evaluation',
    title: 'Expatriate Selection and Evaluation',
    authors: ['Varma, A.', 'Kaur, A.', 'Maheshwari, S.'],
    venue: 'Oxford University Press',
    year: 2025,
    abdc: null,
    theme: 'careers-and-advancement',
    type: 'book-chapter',
    volumeIssue: null,
    pages: null,
    doi: null,
    pdf: null,
    summary:
      'A book chapter on how organisations choose the people they send on international assignments, and how they judge whether it worked.',
    summaryStatus: 'draft',
    award: null,
  },
  {
    id: 'amrg-associates-case',
    title:
      'AMRG & Associates: Crafting Professionalization Through HR Transformation',
    authors: ['Kaur, A.'],
    venue: 'Journal of Organizational Behavior Education',
    year: 2025,
    abdc: null,
    theme: 'sustainable-people-systems',
    type: 'case',
    volumeIssue: null,
    pages: null,
    doi: null,
    pdf: null,
    summary:
      'A teaching case on the professionalisation of a family-run business through HR transformation.',
    summaryStatus: 'draft',
    award: null,
  },
]

/** Validated at module load, so a malformed record fails the build. */
export const publications: Publication[] = RECORDS.map((record) =>
  publicationSchema.parse(record),
)

export const journalArticles = publications.filter(
  (publication) => publication.type === 'journal',
)

/** Newest first, then alphabetical so the order is stable across builds. */
export function byRecency(a: Publication, b: Publication): number {
  return b.year - a.year || a.title.localeCompare(b.title)
}

export const draftSummaryCount = publications.filter(
  (publication) => publication.summaryStatus === 'draft',
).length
