import { aspectFor, getShot, type ShotRef } from '@/lib/shots'

interface PhotoPlaceholderProps {
  shot: ShotRef
  className?: string
}

/**
 * The missing-photograph block. BUILD-PLAN.md §6.2.
 *
 * Deliberately visible, deliberately ugly, deliberately unmissable. Two
 * reasons it looks like this: the client sees exactly what is outstanding on
 * every preview deploy, and nobody can mistake it for a design decision and
 * ship it. It holds the correct aspect ratio so the layout around it is the
 * layout the real photograph will land into.
 *
 * It is never a substitute for a photograph. It is a receipt for a missing one.
 */
export function PhotoPlaceholder({ shot, className }: PhotoPlaceholderProps) {
  const { ref, description, ratio, launchCritical } = getShot(shot)

  return (
    <div
      className={className}
      style={{ aspectRatio: aspectFor(ratio) }}
      data-placeholder={ref}
    >
      <div className="flex h-full w-full flex-col justify-between border-2 border-dashed border-graphite bg-screen-2 p-4">
        <p className="font-data text-meta text-print">
          MISSING — {ref} · {description}
        </p>
        <p className="font-data text-meta text-graphite-screen">
          {ratio}
          {launchCritical ? ' · required to launch' : ''}
        </p>
      </div>
      <span className="sr-only">
        Photograph not yet supplied: {description}.
      </span>
    </div>
  )
}
