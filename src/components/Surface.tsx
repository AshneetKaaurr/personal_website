interface SurfaceProps {
  /**
   * 'screen' — the dark looking surface. Photographs live here, edge to edge.
   * 'print'  — the light reading surface. Long-form, narrow measure.
   *
   * A page picks a surface and stays on it. The one exception is a single
   * screen band inside a print page, when there is a real photograph worth
   * the full width. Never alternate section by section — that is a template
   * rhythm and it reads as generated. BUILD-PLAN.md §3.1.
   */
  surface: 'screen' | 'print'
  children: React.ReactNode
  className?: string
  as?: 'section' | 'div' | 'article' | 'header'
}

const SURFACE_CLASS = {
  screen: 'bg-screen text-print',
  print: 'bg-print text-ink',
} as const

export function Surface({
  surface,
  children,
  className,
  as: Tag = 'section',
}: SurfaceProps) {
  return (
    <Tag
      data-surface={surface}
      className={`${SURFACE_CLASS[surface]} ${className ?? ''}`}
    >
      {children}
    </Tag>
  )
}

/** The page gutter. One value, so every band lines up down the site. */
export function Bleed({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={`mx-auto max-w-page px-5 lg:px-7 ${className ?? ''}`}>
      {children}
    </div>
  )
}
