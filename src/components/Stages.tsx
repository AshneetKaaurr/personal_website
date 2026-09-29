import { type Appearance } from '@/content/record'

export function Stages({ items }: { items: Appearance[] }) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <div
          key={`${item.event}-${item.when}`}
          className="flex items-start gap-4 rounded-2xl bg-white/40 backdrop-blur-md border border-white/50 p-4 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:bg-white/60 transition-all duration-300"
        >
          <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-coral/60" />
          <div className="flex-1">
            <span className="leading-relaxed font-medium">{item.event}</span>
            <span className="flex flex-wrap items-center gap-2 mt-1">
              {item.place ? (
                <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-dark-text/5 text-xs text-sage">{item.place}</span>
              ) : null}
              <span className="text-xs text-sage">{item.when}</span>
              {item.upcoming ? (
                <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-coral/10 text-xs font-medium text-coral">upcoming</span>
              ) : null}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
