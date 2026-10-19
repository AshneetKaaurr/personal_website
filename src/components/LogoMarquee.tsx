'use client'

import { useState } from 'react'

import { LOGO_CARD, LogoCardBody } from '@/components/LogoCard'
import type { LogoEntry } from '@/content/logos'

/**
 * An endless, left-scrolling row of logo cards.
 *
 * Two identical lists sit side by side and both slide by their own width, so
 * the second picks up exactly where the first leaves off. The copy is hidden
 * from assistive tech. Hover, keyboard focus or the button pauses it (WCAG
 * 2.2.2); with reduced motion it stops and becomes a row you can scroll.
 */
export function LogoMarquee({ entries }: { entries: LogoEntry[] }) {
  const [paused, setPaused] = useState(false)
  // Roughly constant speed regardless of how many logos there are.
  const duration = `${entries.length * 4.5}s`

  const row = (copy: boolean) => (
    <ul
      aria-hidden={copy || undefined}
      className={`flex shrink-0 animate-marquee gap-3 pr-3 group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused] motion-reduce:animate-none ${copy ? 'motion-reduce:hidden' : ''}`}
      style={{ animationDuration: duration, animationPlayState: paused ? 'paused' : undefined }}
    >
      {entries.map((entry) => (
        <li key={entry.name} className={`w-56 shrink-0 ${LOGO_CARD}`}>
          <LogoCardBody entry={entry} />
        </li>
      ))}
    </ul>
  )

  return (
    <div>
      <div className="group flex overflow-hidden py-3 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] motion-reduce:overflow-x-auto motion-reduce:[mask-image:none]">
        {row(false)}
        {row(true)}
      </div>
      <button
        type="button"
        onClick={() => setPaused((p) => !p)}
        aria-pressed={paused}
        className="mx-auto mt-4 block rounded-full border border-dark-text/15 bg-white/55 px-4 py-1.5 font-sans text-[12.5px] font-medium text-dark-text/80 backdrop-blur-xl transition-colors hover:bg-white/85 motion-reduce:hidden"
      >
        {paused ? 'Play logo scroll' : 'Pause logo scroll'}
      </button>
    </div>
  )
}
