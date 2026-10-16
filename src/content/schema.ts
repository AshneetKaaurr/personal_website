import { z } from 'zod'

/**
 * Content schemas. BUILD-PLAN.md §7.
 *
 * These validate at build time. A malformed record fails the build rather than
 * rendering wrong — this is an academic's public record and a mangled author
 * list or a wrong ABDC rank is a real problem, not a cosmetic one.
 */

/**
 * Research themes, derived from her CV research statement and the published
 * record. A publication can sit in more than one. See src/content/research.ts.
 */
export const themeSchema = z.enum([
  'ai-and-work',
  'sustainable-hrm',
  'fairness-and-wellbeing',
  'careers-and-mobility',
  'ventures-and-governance',
])

export type ThemeId = z.infer<typeof themeSchema>

export const publicationSchema = z.object({
  id: z.string(),
  title: z.string(),
  /**
   * Exact author order from the CV. Never reordered to put her first. Empty
   * only for conference papers whose author list the CV does not give.
   */
  authors: z.array(z.string()),
  venue: z.string(),
  year: z.number().int(),
  abdc: z.enum(['A*', 'A', 'B', 'C']).nullable(),
  type: z.enum(['journal', 'book-chapter', 'case', 'conference']),
  themes: z.array(themeSchema).min(1),
  volumeIssue: z.string().nullable(),
  pages: z.string().nullable(),
  /** Not on the CV. Retrieve from Google Scholar or the client. */
  doi: z.string().nullable(),
  url: z.string().nullable().optional(),
  extraLinks: z
    .array(z.object({ label: z.string(), url: z.string() }))
    .optional(),
  /**
   * The plain-English line. Describes what the paper LOOKS AT. Never a finding,
   * an effect size or a conclusion that has not been read in the paper itself.
   */
  summary: z.string(),
  /**
   * Google Scholar count per paper, July 2026, as gathered for the content
   * map. G3: replace with her own profile figures once checked.
   */
  citations: z.number().int().nullable(),
  /** A short plain title for cards. Never a finding. */
  shortTitle: z.string(),
  /** Recognition the paper received, as worded on the CV. */
  award: z.string().optional(),
})

export type Publication = z.infer<typeof publicationSchema>

export const HER_NAME_IN_AUTHORS = 'Kaur, A.'
