import type { Route } from 'next'

import type { Theme } from '@/content/schema'

/**
 * The four research themes. Copy from SITE-COPY.md.
 *
 * Theme statements are drafted in her voice and need her approval, as does the
 * assignment of papers to themes. Both are tracked in PENDING.md.
 */
export interface ThemeRecord {
  id: Theme
  title: string
  /** The one-line statement, in her voice. Draft. */
  statement: string
  /** Media pieces that came out of this strand. */
  relatedMedia: string[]
  /** Teaching and service attached to it. */
  relatedWork: string[]
}

export const THEMES: ThemeRecord[] = [
  {
    id: 'algorithms-at-work',
    title: 'Algorithms at work',
    statement:
      'Automated systems now watch, score and decide about people at work. I study what that costs, and where the ethical lines around it sit.',
    relatedMedia: [
      'Empowering HRM with Artificial Intelligence, Business Manager, 2024',
      'The vanishing first job in the age of AI, ET-HRWorld, 2026',
    ],
    relatedWork: [
      'Executive programmes on AI and human resource management',
      "SPJIMR's video podcast series on AI and digital transformation",
    ],
  },
  {
    id: 'sustainable-people-systems',
    title: 'Sustainable people systems',
    statement:
      'A great many HR systems work perfectly on paper. I study the conditions under which they work on the floor, and what happens to people when they do not.',
    relatedMedia: [
      'Navigating the Green Shift: The Role of Sustainable Leadership, People Matters, 2024',
    ],
    relatedWork: [
      'Sustainable Human Resource Management, University of Pécs',
      'Best Paper Award, Anusandhan RDAIS, 2025',
    ],
  },
  {
    id: 'careers-and-mobility',
    title: 'Careers and mobility',
    statement:
      'Careers are shaped by rules, and most of the rules are not written down. I study who advances, who does not, and what follows a person across a border.',
    relatedMedia: [
      'Beyond the check-list: Unlocking the secrets to Successful Global Assignments, Journal of Global Mobility Bitblog, 2024',
    ],
    relatedWork: [
      'Expatriate Selection and Evaluation, Oxford University Press, 2025',
    ],
  },
  {
    id: 'founders-ventures-growth',
    title: 'Founders, ventures and growth',
    statement:
      'Young firms grow or stall on things that do not appear on the balance sheet: whether people trust the founder, whether they are free to act, whether anyone is listening.',
    relatedMedia: [
      "Partnerships and Resourcefulness: A Venture's Ultimate Growth Hack, Management Practice Insight",
      'Entrepreneurial excellence: 11 principles for business success, CXO Today, 2024',
    ],
    relatedWork: [
      'Product Entrepreneurship Lab, and Start Your Business',
      'FiNovate Entrepreneurship Programme, SPJIMR, from 2024',
      'Best Paper Award, Academy of Management HR Division, 2023',
      'Best Paper Award, EDII Biennial Conference, 2023',
    ],
  },
]

/**
 * The URL for a theme page.
 *
 * `typedRoutes` types Route as a union of route *patterns*, so the pattern is
 * "/research/[theme]" and a concrete URL like "/research/algorithms-at-work"
 * is not assignable to it. One cast, in one place, rather than scattered at
 * every call site. The ids come from the Theme union, so the URL cannot be
 * wrong without the build failing somewhere else first.
 */
export function themeHref(id: Theme): Route {
  return `/research/${id}` as Route
}

export function getTheme(id: Theme): ThemeRecord {
  const theme = THEMES.find((record) => record.id === id)
  if (!theme) throw new Error(`Unknown theme "${id}".`)
  return theme
}
