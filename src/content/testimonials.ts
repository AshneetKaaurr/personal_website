/**
 * Testimonials and course feedback, quoted as written.
 *
 * Sources:
 *   - Emails after an ISB session (2026), supplied as a screenshot. Names are
 *     given as the writers signed them; first names only.
 *   - An anonymous course-feedback sheet, supplied as a screenshot. Wording is
 *     kept, including the respondents' own grammar. The one mixed comment and
 *     the one-word answers ("Good", "Everything") are left out. The sheet is
 *     unsigned, so these are credited to the course, never to an invented name.
 */

export interface Testimonial {
  id: string
  /** One string per paragraph. */
  quote: string[]
  /** As signed, or the course when the feedback is unsigned. */
  name: string
  role?: string
  /** Programme or setting, e.g. "Session at the Indian School of Business". */
  context: string
  /** Month and year, or year, when known. */
  date?: string
  source: 'Email' | 'Course feedback'
  /** Unsigned feedback: shown with a quote mark instead of initials. */
  anonymous?: boolean
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'isb-jay',
    quote: [
      'I would like to express my sincere thanks to the ISB team for organising the session by Prof. Ashneet Kaur. It was not only insightful and timely, but also deeply relevant in today’s evolving business environment.',
      'For someone like me, with over 25 years of global experience, the session offered a valuable opportunity to reflect on familiar business challenges through a fresh and contemporary lens. Prof. Kaur’s perspectives connected strongly with the realities of leadership, decision-making, and transformation.',
      'Please convey my warm appreciation and gratitude to Prof. Kaur for sharing her knowledge so generously. The session was meaningful, thought-provoking, and personally enriching, and we look forward to many more such engaging interactions with ISB in the future.',
    ],
    name: 'Jay',
    role: 'Session participant, over 25 years of global experience',
    context: 'Session at the Indian School of Business',
    date: '2026',
    source: 'Email',
  },
  {
    id: 'course-best-faculty',
    quote: [
      'Dr Ashneet Kaur was one of best faculty we interacted with this time. Her teaching style is unique and she keeps the class alive. We got to discuss real cases scenarios from our Organizations and discovered a different perspective on leadership styles.',
    ],
    name: 'Leadership course',
    context: 'End-of-course feedback',
    source: 'Course feedback',
    anonymous: true,
  },
  {
    id: 'isb-deepa',
    quote: [
      'Thank you once again for leading us through such a thought provoking and timely session. Looking forward to working with you again.',
    ],
    name: 'Deepa',
    role: 'Indian School of Business',
    context: 'After a session at ISB',
    date: '2026',
    source: 'Email',
  },
  {
    id: 'course-paradoxes',
    quote: [
      'Leadership explained well through case study. Type of leadership, leading through paradoxes are some of the aspects that I felt very useful in our work place.',
    ],
    name: 'Leadership course',
    context: 'End-of-course feedback',
    source: 'Course feedback',
    anonymous: true,
  },
  {
    id: 'course-interactive',
    quote: [
      'A very innovative and interactive approach to keep the class engaged. Really liked the managerial style class work activity.',
    ],
    name: 'Leadership course',
    context: 'End-of-course feedback',
    source: 'Course feedback',
    anonymous: true,
  },
  {
    id: 'course-knack',
    quote: ['She has a knack of getting attention in the class and getting class involved.'],
    name: 'Leadership course',
    context: 'End-of-course feedback',
    source: 'Course feedback',
    anonymous: true,
  },
]

/** Shorter lines from the same anonymous feedback sheet. */
export const FEEDBACK_LINES: string[] = [
  'Subjective concept were aptly explained through case studies.',
  'Teaching style and course outline is very good.',
  'Good engagement in class.',
]
