import type { FrameRatio, ShotRef } from '@/lib/shots'

/**
 * The photo manifest — the one place a real photograph enters the site.
 *
 * Empty by design. Every <Frame> currently renders a visible placeholder
 * carrying its shot ref, exactly as CLAUDE.md hard rule 3 and BUILD-PLAN.md
 * §6.2 require. Nothing here may be filled with stock, Unsplash, Pexels,
 * an AI-generated image, an illustration or a texture. Real photographs of
 * her, or the placeholder stays.
 *
 * ---------------------------------------------------------------------------
 * To add a photograph
 * ---------------------------------------------------------------------------
 * 1. Put the file in /public/photos/ — source at 3000px on the long edge
 *    minimum, cropped to exactly 3:2 or 4:5 to match the shot's ratio.
 *    Never crop the top of her head. Never crop at a joint.
 * 2. Add an entry below keyed by the shot ref from src/lib/shots.ts.
 * 3. Write real alt text: what is happening in the frame. Not "Dr Ashneet
 *    Kaur". A screen-reader user should learn what the photo shows.
 * 4. If identifiable participants or students appear, `consent` must be
 *    'confirmed' — written confirmation from the client. Anything else and
 *    the build refuses to publish the image.
 *
 * That is the whole integration. Every page using that ref picks it up.
 */

export interface Photo {
  /** Path under /public, e.g. '/photos/p-01-portrait.jpg'. */
  src: string
  /** What is happening in the frame. Never just her name. */
  alt: string
  /** Must match the shot's declared ratio in src/lib/shots.ts. */
  ratio: FrameRatio
  /** Intrinsic pixel dimensions of the source file. */
  width: number
  height: number
  /** Photographer credit, where one is owed. Shown on the press kit. */
  credit?: string
  /** Where and when, for gallery captions. */
  caption?: string
  /**
   * Consent status for identifiable third parties in the frame.
   * 'none-required' — she is the only identifiable person.
   * 'confirmed'     — client has confirmed consent in writing.
   * 'pending'       — not cleared; the frame keeps rendering the placeholder.
   */
  consent: 'none-required' | 'confirmed' | 'pending'
}

export const photos: Partial<Record<ShotRef, Photo>> = {
  // Awaiting client. See PENDING.md — photography is the largest open item.
}

/**
 * Returns a photo only when it is genuinely publishable. An uncleared consent
 * status is treated as no photo at all, so a pending clearance can never slip
 * into a deploy by being merged early.
 */
export function getPhoto(ref: ShotRef): Photo | null {
  const photo = photos[ref]
  if (!photo) return null
  if (photo.consent === 'pending') return null
  return photo
}
