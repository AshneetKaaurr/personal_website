/**
 * The shot list.
 *
 * Originally the set of photographs requested from the client
 * (BUILD-PLAN.md §6.1). Now that real photography has arrived, each ref that
 * has a photograph describes *that photograph*, and the refs still waiting
 * keep their original request wording so the outstanding list stays readable.
 *
 * Every <Frame> on the site references one of these by ref. Until a photo
 * arrives, the frame renders a visible placeholder carrying the ref, so the
 * outstanding list is legible on every preview deploy.
 *
 * Adding a photo: run `node scripts/prepare-photos.mjs` to slug and downsize
 * it, then add an entry to src/content/photos.ts keyed by the ref.
 */

export const FRAME_RATIOS = {
  /** Landscape frames — stages, classrooms, events. */
  landscape: '3:2',
  /** Portrait frames — headshots, single subject. */
  portrait: '4:5',
} as const

export type FrameRatio = (typeof FRAME_RATIOS)[keyof typeof FRAME_RATIOS]

export interface Shot {
  ref: string
  ratio: FrameRatio
  /** What the photograph is of. Shown in the placeholder when one is missing. */
  description: string
  /** Where it appears on the site. */
  usedOn: string[]
  /**
   * Part of the minimum viable set to launch. BUILD-PLAN.md §6.1: below
   * P-01, P-03, three classroom and three stage, the design cannot carry itself.
   */
  launchCritical: boolean
}

export const SHOTS = [
  // -- Portraits ------------------------------------------------------------
  {
    ref: 'P-01',
    ratio: '4:5',
    description: 'Standing at a campus terrace railing, looking to camera',
    usedOn: ['Home hero', 'About', 'Press kit'],
    launchCritical: true,
  },
  {
    ref: 'P-02',
    ratio: '4:5',
    description: 'Seated in an office against a bookshelf, hands clasped',
    usedOn: ['Media bios', 'Board and Advisory'],
    launchCritical: false,
  },
  {
    ref: 'P-03',
    ratio: '3:2',
    description: 'Speaking at a lectern with a microphone, mid-sentence',
    usedOn: ['Speaker hero', 'Press kit'],
    launchCritical: true,
  },
  {
    ref: 'P-04',
    ratio: '3:2',
    description: 'Outdoors against a stone building, leaning on a railing',
    usedOn: ['Home contact sheet', 'About'],
    launchCritical: false,
  },
  {
    ref: 'P-05',
    ratio: '3:2',
    description: 'Seated in a wooden chair in daylight, looking to camera',
    usedOn: ['About', 'Press kit'],
    launchCritical: false,
  },
  {
    ref: 'P-06',
    ratio: '3:2',
    description: 'Standing beside a glass wall, arms folded, reflection visible',
    usedOn: ['Home contact sheet', 'Media'],
    launchCritical: false,
  },
  {
    ref: 'P-07',
    ratio: '4:5',
    description: 'Seated in a wooden chair in full daylight, full length',
    usedOn: ['Press kit', 'Board and Advisory'],
    launchCritical: false,
  },

  // -- At work --------------------------------------------------------------
  {
    ref: 'W-01',
    ratio: '3:2',
    description: 'At a desk with a laptop, reading, nameplate in frame',
    usedOn: ['Home contact sheet', 'Research'],
    launchCritical: false,
  },

  // -- Classroom ------------------------------------------------------------
  {
    ref: 'C-01',
    ratio: '3:2',
    description: 'Teaching a seminar room session at a U-shaped table',
    usedOn: ['Training', 'Home contact sheet'],
    launchCritical: true,
  },
  {
    ref: 'C-02',
    ratio: '3:2',
    description: 'With a full cohort in a tiered lecture theatre',
    usedOn: ['Training', 'Gallery'],
    launchCritical: true,
  },
  {
    ref: 'C-03',
    ratio: '3:2',
    description: 'With an international cohort in a European classroom',
    usedOn: ['Training course strip', 'Training visiting'],
    launchCritical: true,
  },
  {
    ref: 'C-04',
    ratio: '3:2',
    description: 'Second frame with the same international cohort',
    usedOn: ['Training visiting', 'Gallery'],
    launchCritical: false,
  },

  // -- Stage ----------------------------------------------------------------
  {
    ref: 'S-01',
    ratio: '3:2',
    description: 'Presenting from a screen to a seated conference audience',
    usedOn: ['Speaker', 'Home contact sheet', 'Gallery'],
    launchCritical: true,
  },
  {
    ref: 'S-02',
    ratio: '3:2',
    description: 'Auditorium stage during a conference session, seen wide',
    usedOn: ['Speaker', 'Gallery'],
    launchCritical: true,
  },
  {
    ref: 'S-03',
    ratio: '3:2',
    description:
      'Stage — wide room shot showing the audience and the scale of the session',
    usedOn: ['Speaker', 'Gallery'],
    launchCritical: true,
  },
  {
    ref: 'S-04',
    ratio: '4:5',
    description:
      'Beside the signage for the 86th Annual Meeting of the Academy of Management',
    usedOn: ['Speaker', 'Gallery'],
    launchCritical: false,
  },
  {
    ref: 'S-05',
    ratio: '4:5',
    description: 'In front of an HRIC 2026 conference backdrop',
    usedOn: ['Speaker', 'Gallery'],
    launchCritical: false,
  },

  // -- Executive rooms ------------------------------------------------------
  {
    ref: 'M-01',
    ratio: '4:5',
    description: 'Group photograph with participants around a seminar table',
    usedOn: ['Consulting', 'Training'],
    launchCritical: false,
  },
  {
    ref: 'M-02',
    ratio: '3:2',
    description: 'Group photograph during an organisational visit',
    usedOn: ['Consulting', 'Home contact sheet'],
    launchCritical: false,
  },
  {
    ref: 'M-03',
    ratio: '3:2',
    description:
      'MDP room — participants in group exercise, materials on the table',
    usedOn: ['Consulting', 'Gallery'],
    launchCritical: false,
  },

  // -- Events ---------------------------------------------------------------
  {
    ref: 'E-01',
    ratio: '4:5',
    description: 'On stage at a conference on governance in the age of AI',
    usedOn: ['Gallery', 'Speaker'],
    launchCritical: false,
  },
  {
    ref: 'E-02',
    ratio: '3:2',
    description: 'Best Paper Award, EDII Biennial Conference 2023',
    usedOn: ['Gallery', 'Research'],
    launchCritical: false,
  },
  {
    ref: 'E-03',
    ratio: '3:2',
    description: 'Best Paper Award, Anusandhan RDAIS 2025',
    usedOn: ['Gallery', 'Research'],
    launchCritical: false,
  },
  {
    ref: 'E-04',
    ratio: '3:2',
    description: 'Wharton Global Faculty Development Programme 2025',
    usedOn: ['Gallery', 'About'],
    launchCritical: false,
  },
  {
    ref: 'E-05',
    ratio: '4:5',
    description: 'Outside Copenhagen Business School during a conference trip',
    usedOn: ['Gallery', 'Speaker'],
    launchCritical: false,
  },
  {
    ref: 'E-06',
    ratio: '3:2',
    description: 'Full cohort group photograph in a campus atrium',
    usedOn: ['Gallery', 'Training'],
    launchCritical: false,
  },
  {
    ref: 'E-07',
    ratio: '4:5',
    description: 'With three colleagues at a recording or panel session',
    usedOn: ['Gallery', 'Media'],
    launchCritical: false,
  },

  // -- Details --------------------------------------------------------------
  {
    ref: 'D-01',
    ratio: '3:2',
    description: 'Detail — her hands on a printed case, annotations visible',
    usedOn: ['Section breaks', 'Gallery'],
    launchCritical: false,
  },
  {
    ref: 'D-02',
    ratio: '3:2',
    description: 'Detail — a whiteboard mid-session, her handwriting',
    usedOn: ['Section breaks', 'Research'],
    launchCritical: false,
  },
  {
    ref: 'D-03',
    ratio: '3:2',
    description: 'Detail — her notes, slide deck or lectern setup before a session',
    usedOn: ['Section breaks', 'Gallery'],
    launchCritical: false,
  },
] as const satisfies readonly Shot[]

export type ShotRef = (typeof SHOTS)[number]['ref']

const SHOTS_BY_REF = new Map<string, Shot>(SHOTS.map((shot) => [shot.ref, shot]))

export function getShot(ref: ShotRef): Shot {
  const shot = SHOTS_BY_REF.get(ref)
  if (!shot) {
    // Unreachable while ShotRef is derived from SHOTS, but a typo in a
    // hand-written ref should fail loudly at build rather than render nothing.
    throw new Error(`Unknown shot ref "${ref}". Add it to src/lib/shots.ts.`)
  }
  return shot
}

/** CSS aspect-ratio value for a frame ratio. The site ships these two only. */
export function aspectFor(ratio: FrameRatio): string {
  return ratio === '4:5' ? '4 / 5' : '3 / 2'
}
