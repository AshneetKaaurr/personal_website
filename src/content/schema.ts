import { z } from 'zod'

/**
 * Content schemas. BUILD-PLAN.md §7.
 *
 * These validate at build time. A malformed record fails the build rather than
 * rendering wrong — this is an academic's public record and a mangled author
 * list or a wrong ABDC rank is a real problem, not a cosmetic one.
 */

/**
 * Four themes, not three.
 *
 * BUILD-PLAN.md assumed three. The CV supports four: two of her three
 * best-paper awards are on new ventures and founders, and with the agility
 * paper, the Product Entrepreneurship Lab, Start Your Business, FiNovate,
 * BCERC, the AOM Entrepreneurship Division editorship and two ventures she
 * founded herself, entrepreneurship is not a sideline in this record. Under a
 * three-theme structure it disappears. See SITE-COPY.md.
 *
 * Proposed, not confirmed by her. PENDING.md carries it.
 */
export const themeSchema = z.enum([
  'algorithms-at-work',
  'sustainable-people-systems',
  'careers-and-mobility',
  'founders-ventures-growth',
])

export type Theme = z.infer<typeof themeSchema>

export const publicationSchema = z.object({
  id: z.string(),
  title: z.string(),
  /** Exact author order from the CV. Never reordered to put her first. */
  authors: z.array(z.string()).min(1),
  venue: z.string(),
  year: z.number().int(),
  abdc: z.enum(['A*', 'A', 'B', 'C']).nullable(),
  theme: themeSchema,
  type: z.enum(['journal', 'book-chapter', 'case', 'working-paper']),
  volumeIssue: z.string().nullable(),
  pages: z.string().nullable(),
  /** Not on the CV. Retrieve from Google Scholar or the client. */
  doi: z.string().nullable(),
  pdf: z.string().nullable(),
  /**
   * The plain-English line. Describes what the paper LOOKS AT. Never a finding,
   * an effect size or a conclusion that has not been read in the paper itself.
   */
  summary: z.string(),
  /** Gate: a draft summary fails the production build. CLAUDE.md hard rule 2. */
  summaryStatus: z.enum(['draft', 'approved']),
  award: z.string().nullable(),
})

export type Publication = z.infer<typeof publicationSchema>

export const HER_NAME_IN_AUTHORS = 'Kaur, A.'
