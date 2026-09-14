import type { FrameRatio, ShotRef } from '@/lib/shots'

/**
 * The photo manifest — the one place a real photograph enters the site.
 *
 * Nothing here may be stock, Unsplash, Pexels, an AI-generated image, an
 * illustration or a texture. Real photographs of her, or the placeholder stays.
 *
 * ---------------------------------------------------------------------------
 * To add a photograph
 * ---------------------------------------------------------------------------
 * 1. Drop the file in /public/photos/ and add it to the INTAKE list in
 *    scripts/prepare-photos.mjs, then run that script. It applies EXIF
 *    rotation, strips metadata (phone photos carry GPS), and caps the long
 *    edge at 2400px.
 * 2. Add an entry below keyed by the shot ref from src/lib/shots.ts.
 * 3. Write real alt text: what is happening in the frame. Not "Dr Ashneet
 *    Kaur". A screen-reader user should learn what the photograph shows.
 * 4. Set `consent` honestly. See the note below.
 *
 * ---------------------------------------------------------------------------
 * Consent
 * ---------------------------------------------------------------------------
 * CLAUDE.md and BUILD-PLAN.md §6.3 both require written confirmation from the
 * client before publishing a photograph in which participants or students are
 * identifiable. `getPhoto` treats `consent: 'pending'` as no photograph at
 * all, so an uncleared image renders the placeholder and cannot reach a deploy
 * by being merged early.
 *
 * Photographs where she is the only identifiable person are marked
 * 'none-required' and are live now. Photographs containing identifiable third
 * parties — students, cohorts, executive participants, colleagues — are marked
 * THIRD_PARTY below and are held. Once she confirms consent in writing, change
 * the single constant and all of them go live together.
 */

/**
 * Flip to 'confirmed' once the client confirms, in writing, that the people
 * visible in the group photographs consent to appearing on a public website.
 * Tracked as item 15 in PENDING.md.
 */
const THIRD_PARTY: Photo['consent'] = 'pending'

export interface Photo {
  /** Path under /public, e.g. '/photos/p-01-campus-terrace.jpg'. */
  src: string
  /** What is happening in the frame. Never just her name. */
  alt: string
  /** The frame ratio this photo is used at. */
  ratio: FrameRatio
  /** Intrinsic pixel dimensions of the prepared file. */
  width: number
  height: number
  /**
   * CSS object-position. The prepared files keep their original aspect ratio;
   * the frame crops them to 3:2 or 4:5 with object-fit: cover. This steers
   * that crop so it never takes the top of her head or cuts at a joint —
   * a judgement per photograph, which is why it is not automated.
   */
  focal?: string
  /** Photographer credit, where one is owed. Shown on the press kit. */
  credit?: string
  /** Where and when, for gallery captions. */
  caption?: string
  /**
   * 'none-required' — she is the only identifiable person.
   * 'confirmed'     — client has confirmed consent in writing.
   * 'pending'       — not cleared; the frame keeps rendering the placeholder.
   */
  consent: 'none-required' | 'confirmed' | 'pending'
}

export const photos: Partial<Record<ShotRef, Photo>> = {
  // -- Portraits: she is the only person in frame ---------------------------
  'P-01': {
    src: '/photos/p-01-campus-terrace.jpg',
    alt: 'Standing at the railing of an open campus terrace in a pale blue sari, turned towards the camera, with the concrete and brick façade of the building rising behind her.',
    ratio: '4:5',
    width: 1066,
    height: 1600,
    focal: '50% 45%',
    consent: 'none-required',
  },
  'P-02': {
    src: '/photos/p-02-office-portrait.jpg',
    alt: 'Seated in an office chair in a patterned sari with her hands clasped in her lap, a shelf of books and folders behind her.',
    ratio: '4:5',
    width: 1800,
    height: 2400,
    focal: '50% 40%',
    consent: 'none-required',
  },
  'P-03': {
    src: '/photos/p-03-lectern.jpg',
    alt: 'Speaking from a lectern with a microphone angled towards her and an open laptop in front of her, mid-sentence with one hand resting on the podium.',
    ratio: '3:2',
    width: 1600,
    height: 1066,
    caption: 'Speaking at a conference session',
    consent: 'none-required',
  },
  'P-04': {
    src: '/photos/p-04-outdoors.jpg',
    alt: 'Outdoors in a bright blue kurta, resting her forearms on a stone parapet and smiling towards the camera, a stone building out of focus behind her.',
    ratio: '3:2',
    width: 1600,
    height: 1066,
    consent: 'none-required',
  },
  'P-05': {
    src: '/photos/p-05-seated.jpg',
    alt: 'Seated on a wooden chair in a pale blue sari, leaning slightly forward with her arms on the chair back, in soft daylight from a window.',
    ratio: '3:2',
    width: 1600,
    height: 1066,
    consent: 'none-required',
  },
  'P-06': {
    src: '/photos/p-06-glass.jpg',
    alt: 'Standing with her arms folded beside a full-height glass partition that carries her reflection, in a pale blue sari.',
    ratio: '3:2',
    width: 1600,
    height: 1066,
    consent: 'none-required',
  },
  'P-07': {
    src: '/photos/p-07-daylight.jpg',
    alt: 'Seated full length on a wooden chair in a pale blue sari, hands folded, in daylight from a tall window behind her.',
    ratio: '4:5',
    width: 1066,
    height: 1600,
    focal: '50% 45%',
    consent: 'none-required',
  },

  // -- At work --------------------------------------------------------------
  'W-01': {
    src: '/photos/w-01-desk.jpg',
    alt: 'Working at a desk in a high-backed chair with an open laptop in front of her, one hand at her chin, reading from the screen.',
    ratio: '3:2',
    width: 1600,
    height: 1066,
    consent: 'none-required',
  },

  // -- Solo at conferences --------------------------------------------------
  'S-04': {
    src: '/photos/s-04-aom-signage.jpg',
    alt: 'Standing beside the floor-standing signage for the 86th Annual Meeting of the Academy of Management in Philadelphia, wearing a conference lanyard.',
    ratio: '4:5',
    width: 923,
    height: 1328,
    focal: '50% 45%',
    caption: '86th Annual Meeting of the Academy of Management, Philadelphia',
    consent: 'none-required',
  },
  'S-05': {
    src: '/photos/s-05-hric-backdrop.jpg',
    alt: 'Standing in front of a step-and-repeat conference backdrop printed with HRIC 2026, holding her notes.',
    ratio: '4:5',
    width: 960,
    height: 1280,
    focal: '50% 45%',
    caption: 'HRIC 2026',
    consent: 'none-required',
  },
  'E-05': {
    src: '/photos/e-05-cbs.jpg',
    alt: 'Walking down the front steps of Copenhagen Business School, the glass and concrete entrance and the CBS mark on the wall behind her.',
    ratio: '4:5',
    width: 1800,
    height: 2400,
    focal: '50% 45%',
    caption: 'Copenhagen Business School',
    consent: 'none-required',
  },

  // -- Identifiable third parties in frame: held pending written consent ----
  'C-01': {
    src: '/photos/c-01-boardroom-session.jpg',
    alt: 'Teaching at the head of a seminar room, standing beside a projection screen while participants seated around a U-shaped table turn towards her.',
    ratio: '3:2',
    width: 1280,
    height: 960,
    focal: '50% 45%',
    consent: THIRD_PARTY,
  },
  'C-02': {
    src: '/photos/c-02-lecture-theatre.jpg',
    alt: 'Standing with a full student cohort crowded together on the tiered steps of a lecture theatre, the lectern and its monitor in the foreground.',
    ratio: '3:2',
    width: 2400,
    height: 1800,
    focal: '50% 45%',
    consent: THIRD_PARTY,
  },
  'C-03': {
    src: '/photos/c-03-global-cohort.jpg',
    alt: 'Standing in a line with an international group of students in a high-ceilinged European classroom, their laptops and bags on the desks in front of them.',
    ratio: '3:2',
    width: 2400,
    height: 1800,
    focal: '50% 55%',
    consent: THIRD_PARTY,
  },
  'C-04': {
    src: '/photos/c-04-global-cohort-two.jpg',
    alt: 'A second group photograph with the same international class, taken across the front of the same classroom.',
    ratio: '3:2',
    width: 2400,
    height: 1800,
    focal: '50% 55%',
    consent: THIRD_PARTY,
  },
  'S-01': {
    src: '/photos/s-01-presenting.jpg',
    alt: 'Presenting beside a large screen at the front of a conference room to an audience seated in rows, several of them taking notes.',
    ratio: '3:2',
    width: 1600,
    height: 1200,
    focal: '50% 50%',
    consent: THIRD_PARTY,
  },
  'S-02': {
    src: '/photos/s-02-auditorium.jpg',
    alt: 'Wide view of an auditorium stage during a session on governance in the age of AI, panellists seated behind a flower-fronted dais under the event banners.',
    ratio: '3:2',
    width: 2400,
    height: 1800,
    focal: '50% 50%',
    consent: THIRD_PARTY,
  },
  'M-01': {
    src: '/photos/m-01-boardroom-group.jpg',
    alt: 'Group photograph at the end of a session, participants standing shoulder to shoulder behind a polished U-shaped seminar table.',
    ratio: '4:5',
    width: 1800,
    height: 2400,
    focal: '50% 45%',
    consent: THIRD_PARTY,
  },
  'M-02': {
    src: '/photos/m-02-office-visit.jpg',
    alt: 'Standing in the centre of a group of five in an institutional office, holding a folder of papers, an organisational crest on the glass partition behind.',
    ratio: '3:2',
    width: 2400,
    height: 1800,
    focal: '50% 45%',
    consent: THIRD_PARTY,
  },
  'E-01': {
    src: '/photos/e-01-stage.jpg',
    alt: 'On stage at a conference on governance in the age of AI, standing at the podium beside another speaker under the event banner.',
    ratio: '4:5',
    width: 1800,
    height: 2400,
    focal: '50% 40%',
    consent: THIRD_PARTY,
  },
  'E-06': {
    src: '/photos/e-06-cohort.jpg',
    alt: 'A large cohort assembled for a group photograph in a campus atrium, standing several rows deep on the steps, with her among them.',
    ratio: '3:2',
    width: 1504,
    height: 1000,
    consent: THIRD_PARTY,
  },
  'E-07': {
    src: '/photos/e-07-panel.jpg',
    alt: 'Standing with three colleagues in a studio room with a graphic feature wall, before a recorded session.',
    ratio: '4:5',
    width: 1145,
    height: 1280,
    consent: THIRD_PARTY,
  },
}

/**
 * Returns a photo only when it is genuinely publishable. An uncleared consent
 * status is treated as no photo at all.
 */
export function getPhoto(ref: ShotRef): Photo | null {
  const photo = photos[ref]
  if (!photo) return null
  if (photo.consent === 'pending') return null
  return photo
}

/** Photographs supplied but held back pending written consent. */
export const heldForConsent = Object.entries(photos)
  .filter(([, photo]) => photo.consent === 'pending')
  .map(([ref]) => ref)
