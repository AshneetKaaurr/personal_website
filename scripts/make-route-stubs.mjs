/**
 * One-shot generator for the route skeleton.
 *
 * Every route in BUILD-PLAN.md §5 needs to exist before typedRoutes will
 * type-check a link to it, and before the nav can route anyone anywhere. Each
 * generated page states, on the page, what is going to be there and what is
 * blocking it — no lorem ipsum, no placeholder prose pretending to be copy.
 *
 * Pages are replaced by real ones in the Phase 3 order:
 * Home, Research, Publications, Training, Speaker, Consulting, About, Media,
 * Gallery, Contact, Board, Social, Privacy, 404.
 *
 * Safe to re-run: it never overwrites a page that already exists.
 */
import { mkdirSync, writeFileSync, existsSync } from 'node:fs'
import { dirname, join } from 'node:path'

const ROUTES = [
  {
    path: 'about',
    title: 'About',
    surface: 'print',
    planned: [
      'A 400-word first-person bio at a 68-character measure, with P-01 or P-02 set in the margin.',
      'The route-here timeline: SRCC, Delhi School of Economics, Deloitte, McKinsey, ATOS, the IIM Ahmedabad PhD, SPJIMR, the PUNCOM board, and the two ventures founded in 2013 to 2015. Presented as an asset, not an apology.',
      'Credentials at a glance.',
    ],
    blockedBy:
      'Her current institutional affiliation, and her sign-off on the bio.',
  },
  {
    path: 'research',
    title: 'Research',
    surface: 'print',
    planned: [
      'A programme statement in her own voice.',
      'Three themes, each bundled with its papers, a why-it-matters note, the related recognition and the related media — together on one page, not scattered across the site.',
      'Work in progress, and the three best-paper awards with the actual paper titles.',
    ],
    blockedBy:
      'Confirmation of the theme assignment for all twelve records, which Claude proposed and she has not reviewed.',
  },
  {
    path: 'research/algorithms-at-work',
    title: 'Algorithms at work',
    surface: 'print',
    planned: [
      'The theme statement, its papers, the recognition attached to it, and the media pieces that came out of it.',
    ],
    blockedBy: 'Theme confirmation, as above.',
  },
  {
    path: 'research/sustainable-people-systems',
    title: 'Sustainable people systems',
    surface: 'print',
    planned: [
      'The theme statement, its papers, the recognition attached to it, and the media pieces that came out of it.',
    ],
    blockedBy: 'Theme confirmation, as above.',
  },
  {
    path: 'research/careers-and-advancement',
    title: 'Careers and advancement',
    surface: 'print',
    planned: [
      'The theme statement, its papers, the recognition attached to it, and the media pieces that came out of it.',
    ],
    blockedBy: 'Theme confirmation, as above.',
  },
  {
    path: 'publications',
    title: 'Publications',
    surface: 'print',
    planned: [
      'Every record with its exact author order, her name in ink and co-authors in graphite, the venue, the year, the ABDC rank and the plain-English line.',
      'Filters by type, theme and year, synced to the URL so a filtered view can be linked.',
      'DOI, PDF and a Cite action that copies a formatted APA string.',
    ],
    blockedBy:
      'DOIs, which are not on the CV, and her approval of all twelve plain-English summaries.',
  },
  {
    path: 'training',
    title: 'Training',
    surface: 'print',
    planned: [
      'The teaching philosophy in her voice, drawn from the CV profile rather than paraphrased into corporate-speak.',
      'Three routes set by her: Visiting, Flagship Courses or Programs, and New Innovative Courses.',
      'The three co-designed courses on the screen surface with real classroom photography — Netflix and Learn, Pitch to Boardroom, and Resilience and Turnaround.',
      'The eight SPJIMR programmes, and the MDP themes as a separate group.',
      'Student feedback given real placement on the page, not a footnote.',
    ],
    blockedBy:
      'Two student and two MDP testimonials, and classroom photography (C-01 to C-04).',
  },
  {
    path: 'training/visiting',
    title: 'Visiting appointments',
    surface: 'print',
    planned: [
      'University of Pecs, Great Lakes Chennai, Masters Union and Bharti College, with what was taught at each.',
      'Guest lectures, including the K.R. Mangalam session that scored 4.44 out of 5 across 100-plus participants.',
    ],
    blockedBy: 'Nothing. Builds from the CV record.',
  },
  {
    path: 'training/flagship',
    title: 'Flagship courses and programmes',
    surface: 'print',
    planned: [
      'PGDM, PGPM, PGEMP, PGPDM, PGDM-Online, GMP, FPM and SYB, with the subjects taught on each.',
    ],
    blockedBy: 'Nothing. Builds from the CV record.',
  },
  {
    path: 'training/new-courses',
    title: 'New innovative courses',
    surface: 'screen',
    planned: [
      'The three co-designed courses at full width on the screen surface: Netflix and Learn, Pitch to Boardroom, and Resilience and Turnaround.',
      'These are the most distinctive thing she has and currently the least visible.',
    ],
    blockedBy: 'Classroom photography (C-03 in particular).',
  },
  {
    path: 'media',
    title: 'Media Articles',
    surface: 'print',
    planned: [
      'Eight published articles, each with her framing note on why she wrote it. The note is the differentiator; a bare link list is what every academic has.',
      'The MPI piece with 5,900-plus downloads, the highest of 30-plus published there since March 2024, given real prominence.',
      'A short bio and a long bio, both one-click copyable, with word counts — the page a journalist on deadline lands on.',
      'The SPJIMR video podcast series on AI and digital transformation.',
    ],
    blockedBy: 'Her framing notes, the podcast episode list, and both bios.',
  },
  {
    path: 'speaker',
    title: 'Speaker',
    surface: 'screen',
    planned: [
      'Topics written as headline-ready sentences, the way a programme chair would print them.',
      'Stages grouped by conference: five Academy of Management annual meetings with Philadelphia 2026 upcoming, EGOS Vienna and Cagliari, EURAM Dublin, BCERC Knoxville, Penn State, WU Vienna, NASPAA and ICODO.',
      'Built around real photography from her actual talks. If the stage photos do not arrive, this page is type-only and honest about it.',
    ],
    blockedBy:
      'Stage photography (S-01 to S-04), and her approval of the topic lines.',
  },
  {
    path: 'speaker/press-kit',
    title: 'Press kit',
    surface: 'print',
    planned: [
      'Both bios, three photographs at print resolution, a one-line descriptor, the headshot credit line, and her preferred name and title spelling.',
    ],
    blockedBy: 'Both bios, P-01 and P-03 at print resolution, and the credit line.',
  },
  {
    path: 'consulting',
    title: 'Consulting',
    surface: 'print',
    planned: [
      'Five programme themes from her MDP record: team leadership and collaboration, emotional intelligence, design thinking and innovation, AI and HRM, and strategic people systems.',
      'How she works — diagnostic, design, delivery, follow-through. A genuine four-step sequence.',
      'The corporate record: ICAI, Bosch India, HURL and ATOS, presented as engagements with what was examined, not as logo wallpaper.',
      'An enquiry form routed to the consulting queue.',
    ],
    blockedBy:
      'The four-step method in her words, and confirmation of the ATOS dates, which show a one-month span on the CV.',
  },
  {
    path: 'social',
    title: 'Social Media',
    surface: 'print',
    planned: [
      'This page takes on the old Now page job: proving the site is alive. A decorative feed is worse than nothing.',
      'Two honest options, one to be picked with her: a curated collection of four to six items she adds to, each with a real date, a link and one line of her framing; or a LinkedIn embed, which needs no maintenance but renders as a widget outside the design.',
      'Whichever ships, a visible last-updated date. If the newest item passes 90 days old, the build warns.',
    ],
    blockedBy: 'Her choice between the two options.',
  },
  {
    path: 'gallery',
    title: 'Gallery',
    surface: 'screen',
    planned: [
      'A contact-sheet grid at the two fixed ratios, filtered by teaching moments, events and stages, press appearances and award moments.',
      'A lightbox with keyboard navigation and a real close affordance.',
      'Every image captioned with what it is, where and when. An uncaptioned gallery is a screensaver.',
    ],
    blockedBy:
      'Photography, and written consent for any identifiable participants or students in frame.',
  },
  {
    path: 'contact',
    title: 'Contact',
    surface: 'print',
    planned: [
      'Enquiries routed by type: executive education, speaking, doctoral supervision, research collaboration, board, other.',
      'An honest response-time expectation against each one.',
      'Direct email, LinkedIn and Google Scholar also visible, because some people will not use a form.',
    ],
    blockedBy:
      'Her real response-time commitments per enquiry type, and her LinkedIn and Google Scholar URLs.',
  },
  {
    path: 'board-and-advisory',
    title: 'Board and Advisory',
    surface: 'print',
    planned: [
      'A deliberately plainer register: quieter type, a tighter measure, nothing above 35px, and no photography beyond P-02.',
      'The role statement, and what she brings to a board — governance, HR systems, organisational risk, and technology and workforce transformation.',
      'Her appointment framed exactly as the CV frames it: Independent Director, Punjab Communications Limited, Government of Punjab, appointed under Section 149 of the Companies Act 2013 and the SEBI LODR Regulations, April 2026 to present.',
      'No commentary on the company. It is a listed PSU and she is an independent director.',
    ],
    blockedBy: 'Nothing. Builds from the CV record.',
  },
  {
    path: 'privacy',
    title: 'Privacy',
    surface: 'print',
    planned: [
      'A genuinely readable privacy notice that accurately describes what the analytics actually do. If it says no cookies, the implementation sets no cookies.',
    ],
    blockedBy: 'The analytics decision, and the form provider.',
  },
]

const template = ({ title, surface, planned, blockedBy }) => `import { PendingNotice } from '@/components/PendingNotice'
import { Bleed, Surface } from '@/components/Surface'

export const metadata = {
  title: ${JSON.stringify(title)},
}

export default function Page() {
  return (
    <Surface surface="${surface}" className="py-9">
      <Bleed>
        <h1 className="font-display text-h1 tracking-tight">${title}</h1>

        <PendingNotice item="this page" owner="Build">
          <p>What goes here:</p>
          <ul className="mt-2 list-disc pl-5">
${planned.map((line) => `            <li className="mt-1">${line.replace(/'/g, '&apos;')}</li>`).join('\n')}
          </ul>
          <p className="mt-3">Blocked by: ${blockedBy.replace(/'/g, '&apos;')}</p>
        </PendingNotice>
      </Bleed>
    </Surface>
  )
}
`

let created = 0
let skipped = 0

for (const route of ROUTES) {
  const file = join('src', 'app', route.path, 'page.tsx')
  if (existsSync(file)) {
    skipped += 1
    continue
  }
  mkdirSync(dirname(file), { recursive: true })
  writeFileSync(file, template(route), 'utf8')
  created += 1
}

console.log(`routes created: ${created}, already present: ${skipped}`)
