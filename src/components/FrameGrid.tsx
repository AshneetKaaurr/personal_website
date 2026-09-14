import { Frame } from '@/components/Frame'
import { getShot, type FrameRatio, type ShotRef } from '@/lib/shots'

export interface FrameGridItem {
  shot: ShotRef
  /** What the frame is. Every frame on this site is captioned. */
  label: string
}

interface FrameGridProps {
  items: FrameGridItem[]
  /** Caption colour follows the surface; the grid itself does not care. */
  className?: string
}

const RATIO_ORDER: FrameRatio[] = ['3:2', '4:5']

/**
 * A contact sheet of frames.
 *
 * One grid per aspect ratio, never a mixed one. A sheet reads as a sheet
 * because every frame on it is the same size — put a 4:5 portrait in a row of
 * 3:2 landscapes and that row falls out of alignment with its neighbours, and
 * the grid stops looking deliberate and starts looking broken. The same bug
 * was fixed on the home contact sheet by hand; this exists so it cannot come
 * back on any other page.
 *
 * Order within a ratio is the order given. Ratios run landscape then portrait.
 */
export function FrameGrid({ items, className }: FrameGridProps) {
  const groups = RATIO_ORDER.map((ratio) => ({
    ratio,
    items: items.filter((item) => getShot(item.shot).ratio === ratio),
  })).filter((group) => group.items.length > 0)

  return (
    <div className={className}>
      {groups.map((group) => (
        <ul
          key={group.ratio}
          className="mt-6 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {group.items.map(({ shot, label }) => (
            <li key={shot}>
              <Frame
                shot={shot}
                sizes="(min-width: 64rem) 30vw, (min-width: 30rem) 48vw, 100vw"
              />
              <p className="mt-3 font-display text-body">{label}</p>
            </li>
          ))}
        </ul>
      ))}
    </div>
  )
}
