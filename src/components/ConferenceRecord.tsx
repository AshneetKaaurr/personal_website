import { Reveal } from '@/components/Shell'
import { CARD_STATIC } from '@/components/ui'
import { AOM, AWARDS, EGOS, OTHER_CONFERENCES, type Appearance } from '@/content/record'

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

function sortKey(a: Appearance) {
  const [month, year] = a.when.split(' ')
  return Number(year) * 12 + MONTHS.indexOf(month ?? '')
}

function label(a: Appearance, isAom: boolean) {
  return isAom ? `${a.event} of the Academy of Management` : a.event
}

/** All 14 entries from the CV, grouped by year, newest first, with awards. */
export function ConferenceRecord() {
  const all = [
    ...AOM.map((a) => ({ ...a, isAom: true })),
    ...EGOS.map((a) => ({ ...a, isAom: false })),
    ...OTHER_CONFERENCES.map((a) => ({ ...a, isAom: false })),
  ].sort((a, b) => sortKey(b) - sortKey(a))

  const years = [...new Set(all.map((a) => a.when.split(' ')[1]!))]
  // Evaluated at build time: anything after the build month is upcoming.
  const now = new Date()
  const nowKey = now.getFullYear() * 12 + now.getMonth()
  const bostonAward = AWARDS.find((a) => a.year === 2023 && a.title.includes('Academy'))

  return (
    <div className="grid gap-5 md:grid-cols-2">
      {years.map((year, i) => (
        <Reveal key={year} delay={0.04 * i} className={`p-7 ${CARD_STATIC}`}>
          <h3 className="font-serif text-[26px] leading-none text-dark-text">{year}</h3>
          <ul className="mt-5 space-y-4">
            {all
              .filter((a) => a.when.endsWith(year))
              .map((a) => (
                <li key={`${a.event}-${a.when}`} className="border-t border-dark-text/[0.07] pt-4">
                  <p className="font-sans text-[14.5px] font-medium leading-snug text-dark-text">{label(a, a.isAom)}</p>
                  <p className="mt-1 font-sans text-[13px] text-dark-text/70">
                    {[a.place, a.when].filter(Boolean).join(', ')}
                  </p>
                  {sortKey(a) > nowKey ? (
                    <p className="mt-2 inline-block rounded-full border border-coral/40 px-2.5 py-0.5 font-sans text-[12px] font-medium text-dark-text">
                      Upcoming
                    </p>
                  ) : null}
                  {a.isAom && a.when === 'August 2023' && bostonAward ? (
                    <p className="mt-2 inline-block rounded-full bg-coral/15 px-2.5 py-0.5 font-sans text-[12px] font-medium text-dark-text">
                      Best Paper Award, HR Division
                    </p>
                  ) : null}
                </li>
              ))}
          </ul>
        </Reveal>
      ))}
    </div>
  )
}
