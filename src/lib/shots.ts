/**
 * The shot list. BUILD-PLAN.md §6.1.
 *
 * Photography is a blocking dependency, not an asset-gathering task at the end
 * — so the shots she owes us are declared here as data. Every <Frame> on the
 * site references one of these by ref. Until the photo arrives, the frame
 * renders a visible placeholder carrying the ref, so the outstanding list is
 * legible on every preview deploy.
 *
 * Adding a photo: drop the file in /public/photos and add an entry to
 * src/content/photos.ts keyed by the same ref. Nothing else changes.
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
  /** What the photograph is of. Shown in the placeholder, and the brief. */
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
  {
    ref: 'P-01',
    ratio: '4:5',
    description: 'Primary portrait, environmental, natural light, looking to camera',
    usedOn: ['Home hero', 'About', 'Press kit'],
    launchCritical: true,
  },
  {
    ref: 'P-02',
    ratio: '4:5',
    description: 'Secondary portrait, different setting and outfit',
    usedOn: ['Media bios', 'Board and Advisory'],
    launchCritical: false,
  },
  {
    ref: 'P-03',
    ratio: '3:2',
    description: 'Speaking portrait, mid-gesture, on a stage or at a podium',
    usedOn: ['Speaker hero', 'Press kit'],
    launchCritical: true,
  },

  {
    ref: 'C-01',
    ratio: '3:2',
    description: 'Classroom — teaching, participants visible, case discussion in progress',
    usedOn: ['Training', 'Home contact sheet'],
    launchCritical: true,
  },
  {
    ref: 'C-02',
    ratio: '3:2',
    description: 'Classroom — whiteboard or screen mid-session, students working',
    usedOn: ['Training', 'Home contact sheet'],
    launchCritical: true,
  },
  {
    ref: 'C-03',
    ratio: '3:2',
    description: 'Classroom — a film-based session, the three co-designed courses',
    usedOn: ['Training course strip'],
    launchCritical: true,
  },
  {
    ref: 'C-04',
    ratio: '3:2',
    description: 'Classroom — small-group or prototyping work, design thinking session',
    usedOn: ['Training', 'Gallery'],
    launchCritical: false,
  },

  {
    ref: 'S-01',
    ratio: '3:2',
    description: 'Stage — conference presentation at a lectern, slide visible behind',
    usedOn: ['Speaker', 'Gallery'],
    launchCritical: true,
  },
  {
    ref: 'S-02',
    ratio: '3:2',
    description: 'Stage — panel seating, in conversation',
    usedOn: ['Speaker', 'Gallery'],
    launchCritical: true,
  },
  {
    ref: 'S-03',
    ratio: '3:2',
    description: 'Stage — wide room shot showing the audience and the scale of the session',
    usedOn: ['Speaker', 'Gallery'],
    launchCritical: true,
  },
  {
    ref: 'S-04',
    ratio: '3:2',
    description: 'Stage — Academy of Management or EGOS session, badge or backdrop legible',
    usedOn: ['Speaker', 'Gallery'],
    launchCritical: false,
  },

  {
    ref: 'M-01',
    ratio: '3:2',
    description: 'MDP room — U-shaped table, senior participants, session underway',
    usedOn: ['Consulting', 'Training'],
    launchCritical: false,
  },
  {
    ref: 'M-02',
    ratio: '3:2',
    description: 'MDP room — facilitating at the board with executives responding',
    usedOn: ['Consulting'],
    launchCritical: false,
  },
  {
    ref: 'M-03',
    ratio: '3:2',
    description: 'MDP room — participants in group exercise, materials on the table',
    usedOn: ['Consulting', 'Gallery'],
    launchCritical: false,
  },

  {
    ref: 'E-01',
    ratio: '3:2',
    description: 'Best Paper Award, HR Division, Academy of Management 2023, Boston',
    usedOn: ['Gallery', 'Research'],
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
    description: 'Wharton Global Faculty Development Programme 2025, cohort or session',
    usedOn: ['Gallery', 'About'],
    launchCritical: false,
  },
  {
    ref: 'E-05',
    ratio: '3:2',
    description: 'Conference moment — with co-authors or colleagues between sessions',
    usedOn: ['Gallery'],
    launchCritical: false,
  },
  {
    ref: 'E-06',
    ratio: '3:2',
    description: 'Institutional event — convocation, panel or campus occasion',
    usedOn: ['Gallery'],
    launchCritical: false,
  },

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
