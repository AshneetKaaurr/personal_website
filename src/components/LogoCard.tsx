import Image from 'next/image'

import { CARD_STATIC } from '@/components/ui'
import type { LogoEntry } from '@/content/logos'

/** A logo card on the light ground: lifts, brightens and takes a coral edge on hover. */
export const LOGO_CARD = `group/logo relative flex h-full flex-col overflow-hidden p-5 transition-[translate,background-color,border-color,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:border-coral/40 hover:bg-white/75 hover:shadow-[0_18px_40px_-16px_rgba(26,35,31,0.3)] ${CARD_STATIC}`

/** The inside of a logo card, centred: logo (or name as text), name and caption. */
export function LogoCardBody({ entry }: { entry: LogoEntry }) {
  return (
    <div className="flex flex-1 flex-col items-center text-center">
      <div className="flex h-16 w-full items-center justify-center">
        {entry.logo ? (
          <span className="relative block h-14 w-40">
            <Image
              src={entry.logo}
              alt={`${entry.name} logo`}
              fill
              sizes="160px"
              className="object-contain object-center mix-blend-multiply transition-transform duration-500 ease-out group-hover/logo:scale-110"
            />
          </span>
        ) : (
          <span className="font-serif text-[17px] leading-tight text-dark-text">{entry.name}</span>
        )}
      </div>
      {entry.logo ? (
        <p className="mt-3 font-sans text-[13px] font-medium text-dark-text transition-colors group-hover/logo:text-coral">{entry.name}</p>
      ) : null}
      <p className="mt-1 font-sans text-[12.5px] leading-snug text-dark-text/70">{entry.caption}</p>
      <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-coral transition-transform duration-500 ease-out group-hover/logo:scale-x-100" />
    </div>
  )
}
