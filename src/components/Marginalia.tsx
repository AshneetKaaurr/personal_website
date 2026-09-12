/**
 * The asymmetric grid. BUILD-PLAN.md §3.4.
 *
 * A persistent left column carries the log-sheet data — year, journal, theme,
 * ABDC rank, city, programme. On desktop it sits in the margin; below the lg
 * breakpoint it collapses above the content rather than being hidden, because
 * the data in it is content, not decoration.
 *
 * This is where Reel & Frame stops being a metaphor and becomes structure: a
 * film log sheet is exactly a margin of records beside a frame.
 */

interface MarginaliaProps {
  /** The log-sheet column. */
  margin: React.ReactNode
  children: React.ReactNode
  className?: string
}

export function Marginalia({ margin, children, className }: MarginaliaProps) {
  return (
    <div
      className={`grid gap-x-6 gap-y-4 lg:grid-cols-12 ${className ?? ''}`}
    >
      <div className="lg:col-span-2">{margin}</div>
      <div className="lg:col-span-9 lg:col-start-4">{children}</div>
    </div>
  )
}

/**
 * One record in the margin. A label and its value, stacked. Tabular figures
 * so years and page ranges align down the column.
 */
export function MarginRecord({
  label,
  value,
}: {
  label: string
  value: React.ReactNode
}) {
  return (
    <div className="mb-3">
      <dt className="font-data text-meta text-muted">{label}</dt>
      <dd className="font-data text-meta" data-figures="tabular">
        {value}
      </dd>
    </div>
  )
}
