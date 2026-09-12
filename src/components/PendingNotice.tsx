interface PendingNoticeProps {
  /** What is outstanding, in plain words. */
  item: string
  /** Who has to supply it. */
  owner: 'Client' | 'Build'
  /** What goes here once it arrives. */
  children?: React.ReactNode
}

/**
 * A visible marker for content that has not been supplied yet.
 *
 * CLAUDE.md hard rule 6 forbids lorem ipsum and placeholder copy, and rule 1
 * forbids inventing a fact to fill a gap. So a gap is stated as a gap — on
 * the page, on every preview deploy, where the client will see it. The same
 * logic as the photo placeholder: an obvious hole is safer than a plausible
 * fabrication.
 */
export function PendingNotice({ item, owner, children }: PendingNoticeProps) {
  return (
    <div className="my-6 border-l-2 border-accent bg-inset py-3 pl-4">
      <p className="font-data text-meta text-accent">
        Pending {owner === 'Client' ? 'from client' : 'in build'} — {item}
      </p>
      {children ? (
        <div className="mt-2 max-w-measure-wide font-data text-meta text-muted">
          {children}
        </div>
      ) : null}
    </div>
  )
}
