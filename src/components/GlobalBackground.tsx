/**
 * The site wallpaper, fixed behind every page: large soft colour fields in
 * the palette, drifting slowly, in the manner of an iPhone wallpaper. The
 * glass cards blur and saturate whatever sits behind them, so these fields
 * are what give the glass its colour. Pure CSS gradients, no filters, so it
 * stays cheap to paint; the drift stops for reduced motion.
 */

const BLOBS = [
  // colour, position and size, drift animation
  { c: 'rgba(224,122,95,0.70)', cls: '-top-[18%] -left-[12%] h-[70vmax] w-[70vmax] animate-drift-a' },
  { c: 'rgba(129,152,139,0.65)', cls: 'top-[20%] -right-[20%] h-[65vmax] w-[65vmax] animate-drift-b' },
  { c: 'rgba(140,185,220,0.65)', cls: '-bottom-[25%] left-[10%] h-[60vmax] w-[60vmax] animate-drift-c' },
  { c: 'rgba(242,170,130,0.60)', cls: 'top-[45%] -left-[18%] h-[45vmax] w-[45vmax] animate-drift-b' },
  { c: 'rgba(190,165,230,0.55)', cls: '-top-[10%] right-[15%] h-[40vmax] w-[40vmax] animate-drift-c' },
]

/** Fine grain so the gradients don't band. */
const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"

export function GlobalBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-light-bg">
      {BLOBS.map((b, i) => (
        <div
          key={i}
          className={`absolute rounded-full motion-reduce:animate-none ${b.cls}`}
          style={{ background: `radial-gradient(closest-side, ${b.c}, transparent)` }}
        />
      ))}
      {/* A soft diagonal sheen across the top, like light on a phone screen. */}
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.55)_0%,rgba(255,255,255,0)_38%,rgba(255,255,255,0)_62%,rgba(255,255,255,0.35)_100%)]" />
      <div className="absolute inset-0 opacity-[0.05] mix-blend-multiply" style={{ backgroundImage: GRAIN }} />
    </div>
  )
}
