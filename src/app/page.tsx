import Link from 'next/link'
import type { Route } from 'next'

import { Frame } from '@/components/Frame'
import { Marginalia, MarginRecord } from '@/components/Marginalia'
import { PendingNotice } from '@/components/PendingNotice'
import { Bleed, Surface } from '@/components/Surface'
import { byRecency, journalArticles } from '@/content/publications'
import type { ShotRef } from '@/lib/shots'

/**
 * Home. BUILD-PLAN.md §8.
 *
 * Opens on the screen surface and stays there through the contact sheet, then
 * moves to print for reading. Two surfaces, one switch.
 *
 * The positioning line is NOT on this page. She has not approved one, and
 * BUILD-PLAN.md §8 is explicit: do not ship a placeholder line — the hero
 * holds her name and her descriptor only. The descriptor below is her own
 * wording from the CV profile summary, not a line written for her.
 */

interface Pillar {
  href: Route
  label: string
  shot: ShotRef
  /** What this pillar is, in her register. Drawn from the CV. */
  note: string
}

/**
 * The contact sheet — six frames, one per pillar. The signature element, and
 * the reason the shot list is a blocking dependency. Six real photographs, not
 * six identical cards. BUILD-PLAN.md §8.
 *
 * All six are 3:2. A contact sheet is a sheet of identically-sized frames —
 * that is what makes it read as one. Mixing the 4:5 portrait in among them
 * pushed its row out of alignment and the grid stopped looking like a sheet
 * and started looking like a bug. The 4:5 ratio still carries every portrait
 * elsewhere on the site; it just cannot sit inside this particular grid.
 */
const PILLARS: Pillar[] = [
  {
    href: '/about',
    label: 'About',
    shot: 'E-04',
    note: 'SRCC to Delhi School of Economics, Deloitte, McKinsey, ATOS, a PhD at IIM Ahmedabad, and two ventures founded along the way.',
  },
  {
    href: '/research',
    label: 'Research',
    shot: 'D-02',
    note: 'What AI-driven systems do to employee privacy, trust and engagement, and the ethics of algorithmic decisions in HR.',
  },
  {
    href: '/training',
    label: 'Training',
    shot: 'C-01',
    note: 'Leadership through cinema, strategy through Indian cricket, resilience through turnaround stories. Three co-designed courses.',
  },
  {
    href: '/media',
    label: 'Media Articles',
    shot: 'D-03',
    note: 'Eight published pieces, from the vanishing first job in the age of AI to sustainable leadership.',
  },
  {
    href: '/speaker',
    label: 'Speaker',
    shot: 'S-01',
    note: 'Five Academy of Management annual meetings across six years, EGOS, EURAM, BCERC.',
  },
  {
    href: '/consulting',
    label: 'Consulting',
    shot: 'M-01',
    note: 'Management development programmes, and consulting engagements with ICAI, Bosch India, HURL and ATOS.',
  },
]

export default function Home() {
  const recentPapers = [...journalArticles].sort(byRecency).slice(0, 3)

  return (
    <>
      {/* ---------------------------------------------------------------- */}
      {/* Hero — screen surface, full bleed. The one motion moment, §3.5.  */}
      {/* ---------------------------------------------------------------- */}
      <Surface surface="screen" as="header" className="pb-9 pt-8 lg:pb-10">
        <Bleed>
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-7">
            <div className="lg:col-span-4">
              <Frame
                shot="P-01"
                sizes="(min-width: 64rem) 32vw, 100vw"
                priority
                className="frame-advance"
              />
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <h1 className="font-data font-expanded-max text-hero tracking-tight text-print">
                Ashneet Kaur
              </h1>
              <p className="mt-5 max-w-measure-wide font-display text-lead text-print">
                Scholar and educator in Organizational Behaviour and HRM,
                working at the intersection of human systems, technological
                change and sustainable organization design.
              </p>
            </div>
          </div>
        </Bleed>
      </Surface>

      {/* ---------------------------------------------------------------- */}
      {/* Contact sheet — six frames, one per pillar.                      */}
      {/* ---------------------------------------------------------------- */}
      <Surface surface="screen" className="border-t border-rule py-9">
        <Bleed>
          <h2 className="sr-only">Sections of this site</h2>
          <ul className="grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {PILLARS.map(({ href, label, shot, note }) => (
              <li key={href}>
                <Link href={href} className="group block no-underline">
                  <Frame
                    shot={shot}
                    sizes="(min-width: 64rem) 30vw, (min-width: 30rem) 48vw, 100vw"
                  />
                  <h3 className="mt-3 font-data font-expanded text-h3 text-print group-hover:underline">
                    {label}
                  </h3>
                  <p className="mt-2 font-display text-body text-muted">
                    {note}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </Bleed>
      </Surface>

      {/* ---------------------------------------------------------------- */}
      {/* Credentials band — print surface. Set as type; logos pending.    */}
      {/* ---------------------------------------------------------------- */}
      <Surface surface="print" className="py-9">
        <Bleed>
          <Marginalia
            margin={
              <MarginRecord label="Record" value={<span>2013 to present</span>} />
            }
          >
            <h2 className="font-display text-h2 tracking-tight">
              Where the work has been done
            </h2>
            <dl className="mt-6 grid gap-x-6 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <dt className="font-data text-meta text-muted">Doctorate</dt>
                <dd className="font-display text-body">
                  PhD, Human Resource Management, IIM Ahmedabad, 2018 to 2023
                </dd>
              </div>
              <div>
                <dt className="font-data text-meta text-muted">Faculty</dt>
                <dd className="font-display text-body">
                  Assistant Professor, Organisation and Leadership Studies,
                  SPJIMR Mumbai, April 2023 to March 2026
                </dd>
              </div>
              <div>
                <dt className="font-data text-meta text-muted">Board</dt>
                <dd className="font-display text-body">
                  Independent Director, Punjab Communications Limited, April
                  2026 to present
                </dd>
              </div>
              <div>
                <dt className="font-data text-meta text-muted">
                  Certification
                </dt>
                <dd className="font-display text-body">
                  SHRM Senior Certified Professional, August 2024 to August 2027
                </dd>
              </div>
              <div>
                <dt className="font-data text-meta text-muted">
                  Faculty development
                </dt>
                <dd className="font-display text-body">
                  Wharton Global Faculty Development Programme, 2025
                </dd>
              </div>
              <div>
                <dt className="font-data text-meta text-muted">Recognition</dt>
                <dd className="font-display text-body">
                  Three best-paper awards: Academy of Management 2023, EDII
                  2023, Anusandhan RDAIS 2025
                </dd>
              </div>
            </dl>

            <PendingNotice item="current institutional affiliation" owner="Client">
              The CV lists SPJIMR to March 2026 and an ISB email address. The
              current title and institution have to be confirmed before any bio,
              this band, or the page metadata states one.
            </PendingNotice>
          </Marginalia>
        </Bleed>
      </Surface>

      {/* ---------------------------------------------------------------- */}
      {/* Recent research — three papers, newest first.                    */}
      {/* ---------------------------------------------------------------- */}
      <Surface surface="print" className="border-t border-rule py-9">
        <Bleed>
          <Marginalia
            margin={
              <MarginRecord
                label="Published"
                value={<span>{journalArticles.length} journal papers</span>}
              />
            }
          >
            <h2 className="font-display text-h2 tracking-tight">
              Recent research
            </h2>

            <ul className="mt-6 grid gap-6 lg:grid-cols-3">
              {recentPapers.map((paper) => (
                <li key={paper.id}>
                  <p
                    className="font-data text-meta text-muted"
                    data-figures="tabular"
                  >
                    {paper.year}
                    {paper.abdc ? ` — ABDC ${paper.abdc}` : ''}
                  </p>
                  <h3 className="mt-2 font-display text-h3 tracking-tight">
                    {paper.title}
                  </h3>
                  <p className="mt-2 font-data text-meta text-muted">
                    {paper.venue}
                  </p>
                  <p className="mt-3 font-display text-body">{paper.summary}</p>
                </li>
              ))}
            </ul>

            <p className="mt-7">
              <Link href="/publications" className="font-data text-meta text-accent">
                All publications
              </Link>
            </p>
          </Marginalia>
        </Bleed>
      </Surface>

      {/* ---------------------------------------------------------------- */}
      {/* Recent activity — the freshness signal the old Now page served.  */}
      {/* Built last, because a stale strip does more damage than none.    */}
      {/* ---------------------------------------------------------------- */}
      <Surface surface="print" className="border-t border-rule py-9">
        <Bleed>
          <h2 className="font-display text-h2 tracking-tight">Recent activity</h2>
          <PendingNotice item="the recent activity strip" owner="Build">
            This strip surfaces the newest item across publications, media,
            speaking and social, with its real date. It is deliberately not
            built from hardcoded entries — BUILD-PLAN.md §8 is clear that a
            stale strip does more damage than no strip. It ships once the media,
            speaking and social collections are populated.
          </PendingNotice>
        </Bleed>
      </Surface>
    </>
  )
}
