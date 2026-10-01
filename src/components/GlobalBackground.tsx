'use client'

import { usePathname } from 'next/navigation'
import Image from 'next/image'

export function GlobalBackground() {
  const pathname = usePathname()
  
  if (pathname === '/') return null

  return (
    <>
      <div className="fixed inset-0 z-[-10] pointer-events-none">
        <Image
          src="/photos/research_section.jpg"
          alt=""
          fill
          className="object-cover opacity-40 grayscale"
          priority
        />
      </div>
      <div className="fixed inset-0 z-[-5] pointer-events-none bg-light-bg/60 backdrop-blur-xl" />
    </>
  )
}
