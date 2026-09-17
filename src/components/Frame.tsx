import Image from 'next/image'

import { PhotoPlaceholder } from '@/components/PhotoPlaceholder'
import { getPhoto } from '@/content/photos'
import { aspectFor, getShot, type ShotRef } from '@/lib/shots'

interface FrameProps {
  shot: ShotRef
  /**
   * Responsive `sizes`. Required — an unsized frame on a photo-heavy site is
   * how the performance budget gets lost.
   */
  sizes: string
  /** Above-the-fold frames only. Currently the home hero. */
  priority?: boolean
  className?: string
  /** Applied to the image itself, e.g. the one hero motion moment. */
  imageClassName?: string
}

/**
 * A photographic frame. The only way an image reaches a page.
 *
 * Renders the real photograph when the manifest has a cleared one for this
 * shot ref, and the placeholder when it does not — so pages are written once,
 * against the shot list, and photographs fill in behind them as they arrive.
 *
 * The frame sets no radius of its own — whatever wraps it decides that, so the
 * component does not carry a design opinion the page then has to fight.
 */
export function Frame({
  shot,
  sizes,
  priority = false,
  className,
  imageClassName,
}: FrameProps) {
  const photo = getPhoto(shot)

  if (!photo) {
    return <PhotoPlaceholder shot={shot} className={className} />
  }

  const { ratio } = getShot(shot)

  return (
    <div
      className={className}
      style={{ aspectRatio: aspectFor(ratio) }}
      data-frame={shot}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        width={photo.width}
        height={photo.height}
        sizes={sizes}
        priority={priority}
        loading={priority ? undefined : 'lazy'}
        // The prepared files keep their own aspect ratio, so the frame crops
        // them. `focal` steers that crop per photograph — a judgement about
        // where her head and hands are, not something to automate.
        style={photo.focal ? { objectPosition: photo.focal } : undefined}
        className={`h-full w-full object-cover ${imageClassName ?? ''}`}
      />
    </div>
  )
}
