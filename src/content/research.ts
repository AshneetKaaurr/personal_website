import type { Route } from 'next'

import type { ThemeId } from '@/content/schema'
import type { ShotRef } from '@/lib/shots'

/**
 * Research themes. Each is derived from her CV research statement and the
 * titles of the papers assigned to it in publications.ts. Questions describe
 * what the work examines; none states a finding. "Concepts" are only those
 * named in a paper's own title or in the CV.
 */

export interface ResearchTheme {
  id: ThemeId
  title: string
  /** One line for cards. */
  short: string
  intro: string[]
  questions: string[]
  concepts: { term: string; source: string }[]
  /** Where the theme shows up in her teaching and service. */
  practice: string[]
  shot: ShotRef
}

export const THEMES: ResearchTheme[] = [
  {
    id: 'ai-and-work',
    title: 'AI, privacy and trust at work',
    short: 'What AI-driven systems do to privacy, trust and engagement inside organisations.',
    intro: [
      'This strand examines how AI-driven systems affect employee engagement, trust and the way organisational culture evolves, particularly in fast-growing and digitally enabled firms.',
      'It also asks about the ethical and emotional side of algorithmic decision-making in HR, with privacy, fairness and well-being at the centre. Her lead-authored paper in Communications of the Association for Information Systems looks at what AI means for the privacy of employees.',
    ],
    questions: [
      'What happens to employee privacy when AI systems are used to observe and evaluate work?',
      'Where should the ethical lines around algorithmic monitoring and decision-making in HR sit?',
      'How do AI-driven systems shape engagement, trust and culture in digitally enabled firms?',
      'How do digital behaviours at work, such as cyberloafing, connect with the strain people experience from their workplace?',
    ],
    concepts: [
      { term: 'Employee privacy and AI', source: 'Communications of the AIS, 2024' },
      { term: 'Algorithmic decision-making in HR', source: 'CV research statement' },
      { term: 'Cyberloafing', source: 'Evidence-based HRM, 2026' },
    ],
    practice: [
      'Domain-specific MDPs on Artificial Intelligence and Human Resource Management at SPJIMR.',
      "SPJIMR's video podcast series on AI and Digital Transformation, which she leads.",
      'Strategic HRM on the PGDM-Online, with an emphasis on digital-first HR systems.',
    ],
    shot: 'W-01',
  },
  {
    id: 'sustainable-hrm',
    title: 'Green and sustainable HRM',
    short: 'How people systems and culture connect with an organisation’s environmental goals.',
    intro: [
      'This strand looks at sustainability from the side of people management: how green human resource management and organisational culture relate to environmental performance.',
      'Her 2024 paper in Organization & Environment, with Sudhanshu Maheshwari and Douglas Renwick, develops an integrative framework for green HRM and green culture and sets out directions for future research. It is the most-cited paper in her record. A 2025 conference paper turns to the ethical risks that can sit behind green goals.',
    ],
    questions: [
      'How do green HRM systems and organisational culture relate to environmental performance?',
      'What does an integrative framework for green HRM and green culture need to account for?',
      'What ethical implications follow when abusive supervision occurs in workplaces pursuing green goals?',
    ],
    concepts: [
      { term: 'Green human resource management (GHRM)', source: 'Organization & Environment, 2024' },
      { term: 'Green culture', source: 'Organization & Environment, 2024' },
      { term: 'Sustainable competing values framework', source: 'Organization & Environment, 2024' },
      { term: 'Abusive supervision', source: 'Anusandhan RDAIS, 2025' },
    ],
    practice: [
      'Visiting faculty for Sustainable Human Resource Management, University of Pécs, Hungary, 2025.',
      'Track Chair, HR/OB, 3rd Annual Winter Conference on Sustainable Business, Great Lakes Gurgaon, December 2024.',
      'Presented at the International Conference on Green HRM and Sustainable Behaviour, Vienna University of Economics and Business, March 2022.',
    ],
    shot: 'C-03',
  },
  {
    id: 'fairness-and-wellbeing',
    title: 'Fairness, well-being and workplace behaviour',
    short: 'Unfairness, bullying, gossip and loneliness, and what they mean for the people who live with them.',
    intro: [
      'This strand follows the everyday experiences that shape how people feel and behave at work: perceived unfairness, bullying, workplace gossip and the loneliness that can come with them.',
      'The papers use mediation and moderated-mediation designs to trace how one experience connects to another, for example how meaningful work figures in bullying during work-from-home, and how workplace loneliness connects unfair workplaces to their costs.',
    ],
    questions: [
      'What role does the meaningfulness of work play when bullying happens during home-based telework?',
      'How does perceived unfairness connect with workplace loneliness, and what toll does that take?',
      'How do cyberloafing and gossip-induced emotional exhaustion relate, and where does self-esteem fit?',
      'What are the ethical implications of abusive supervision in hospitality workplaces?',
    ],
    concepts: [
      { term: 'Meaningfulness of work', source: 'Personnel Review, 2024' },
      { term: 'Moderated mediation', source: 'Personnel Review, 2024' },
      { term: 'Workplace loneliness', source: 'International Journal of Conflict Management, 2026' },
      { term: 'Gossip-induced emotional exhaustion', source: 'Evidence-based HRM, 2026' },
    ],
    practice: [
      'People & Performance and Managing High-Performing Teams on the PGDM.',
      'MDPs on stress and time management for senior and mid-level executives.',
    ],
    shot: 'C-02',
  },
  {
    id: 'careers-and-mobility',
    title: 'Careers, gender and global mobility',
    short: 'Women’s career engagement in India, and what helps people settle into an international assignment.',
    intro: [
      'This strand looks at careers from two directions. One is the multi-level barriers, many of them unwritten, that shape the career engagement of women in India, the subject of her 2026 lead-authored paper in the Asia Pacific Journal of Management.',
      'The other is global mobility: how perceived credibility figures in expatriate adjustment and socialisation in the host country, and how organisations select and evaluate the people they send abroad, the subject of an Oxford University Press chapter with Arup Varma and Sudhanshu Maheshwari.',
    ],
    questions: [
      'What multi-level barriers, visible and invisible, shape the career engagement of women in India?',
      'What role does perceived credibility play in expatriate adjustment and socialisation in the host country?',
      'How do organisations select and evaluate expatriates?',
    ],
    concepts: [
      { term: 'Career engagement', source: 'Asia Pacific Journal of Management, 2026' },
      { term: 'Multi-level barriers', source: 'Asia Pacific Journal of Management, 2026' },
      { term: 'Perceived credibility', source: 'Journal of Global Mobility, 2024' },
      { term: 'Expatriate adjustment and socialisation', source: 'Journal of Global Mobility, 2024' },
    ],
    practice: [
      'Talent Management on the PGDM.',
      'Organization Behaviour on the Global Management Program, focused on cross-cultural collaboration.',
      'Presented at the 5th Global Conference on International HRM, Pennsylvania State University, May 2022.',
    ],
    shot: 'E-05',
  },
  {
    id: 'ventures-and-governance',
    title: 'Founders, new ventures and governance',
    short: 'Agility, autonomy and trust in young firms, and how leadership and competition shape organisations.',
    intro: [
      'Two of her three best-paper awards come from this strand. It looks at what lets people in new ventures work with agility: autonomy, trust in the founder, work engagement, the freedom to work and the quality of a founder’s listening.',
      'It widens to governance and competition: a meta-analysis of executive overconfidence and firm performance, the role of informal competition in innovation in emerging economies, and a teaching case on professionalising a business through HR transformation. It also draws on her own experience of founding two ventures.',
    ],
    questions: [
      'What roles do autonomy and trust play in agility in new ventures, seen through a job demands-resources lens?',
      'How do work engagement and trust in the founder relate to employee agility across cultural settings?',
      'How do entrepreneurial freedom to work and founders’ quality of listening relate in start-ups, and where does learning goal orientation fit?',
      'What does the evidence say, in aggregate, about executive overconfidence and firm performance?',
      'How does informal competition shape innovation, and what roles do labour flexibility and special economic zones play?',
    ],
    concepts: [
      { term: 'Job demands-resources lens', source: 'Evidence-based HRM, 2026' },
      { term: 'Trust in founder', source: 'AOM Best Paper, 2023' },
      { term: 'Learning goal orientation', source: 'EDII Best Paper, 2023' },
      { term: 'Meta-analysis', source: 'Cross-Cultural & Strategic Management, 2025' },
      { term: 'Informal competition', source: 'IIMB Management Review, 2026' },
    ],
    practice: [
      'Product Entrepreneurship Lab on the PGPM and PGPDM, and Start Your Business at SPJIMR.',
      'FiNovate Entrepreneurship Program, SPJIMR, from 2024.',
      'Designed a course on HRM in new ventures at Masters Union, 2022.',
      'Editor-in-Chief, NewsBlast, Academy of Management Entrepreneurship Division, 2025.',
    ],
    shot: 'S-01',
  },
]

export function getTheme(id: string): ResearchTheme | undefined {
  return THEMES.find((t) => t.id === id)
}

/** typedRoutes knows the pattern, not each concrete theme path. */
export function themeHref(id: ThemeId): Route {
  return `/research/${id}` as Route
}
