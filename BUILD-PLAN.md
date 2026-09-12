# Dr Ashneet Kaur — personal site
## Build plan for Claude Code

**Read `CLAUDE.md` first.** It holds the non-negotiable rules. This file is the roadmap.
`CONTENT-INVENTORY.md` holds every real fact extracted from the CV — use it instead of inventing content.

---

## 1. Who this is for

Dr Ashneet Kaur — scholar and educator in Organizational Behaviour and HRM. PhD from IIM Ahmedabad. Assistant Professor at SPJIMR Mumbai (Apr '23 – Mar '26), now at ISB. Independent Director on the board of Punjab Communications Limited (PUNCOM), a Government of Punjab PSU. Ten A/B-ranked journal papers, three best-paper awards, an Oxford University Press book chapter. Former McKinsey research analyst, Deloitte auditor, ATOS consultant, and twice a startup founder.

Her distinguishing thread: she teaches through **cinema, gamification, design thinking and rapid prototyping**. She co-designed *Netflix & Learn: The Art of Leadership through Movies*, *Pitch to Boardroom: Lessons from Indian Cricket*, and *Resilience and Turnaround*. She researches what algorithms do to people at work.

### Who the site has to convince

| Audience | Arrives from | Needs to find in under 30 seconds |
|---|---|---|
| L&D / CHRO buying an MDP | Referral, LinkedIn | What she runs, for whom, proof it lands |
| Conference programme chair | Speaker search | Topics, past stages, real photos, press kit |
| Board nomination committee | Search, referral | Governance credibility, plain register |
| Doctoral student / academic peer | Google Scholar | Papers, themes, how to reach her |
| Journalist | Byline, search | Two bios, a headshot, a clear specialism |

Five different people, one site. The nav has to route them apart within one click.

---

## 2. Authoritative sources, and which one wins

| Source | Status |
|---|---|
| `Site plan` markdown (six pillars + revised sitemap) | **Authoritative.** Reflects the client's own revisions. |
| `Full_sitemap_v2` PNG | **Superseded.** Still shows Teaching / Writing / Speaking / Now / Full CV. Useful only for the 404 and Search nodes. |
| `UpdatedCV_AshneetKaur_2026.pdf` | **Authoritative** for all facts. Never state anything about her that isn't in it. |
| `sudhanshumaheshwari.in` | **Structural reference only.** Content architecture and page-depth benchmark. **Do not copy its design, its copy, or its Bhagavad Gita section.** She is a different person with a different thesis. |

---

## 3. Design direction — "Reel & Frame"

The client already approved a concept called **Reel & Frame**. Build on it rather than inventing a new one. It is the right concept because it comes from her actual pedagogy — she teaches leadership through film. So the site is organised the way film is: as **frames**, arranged in **sequence**, on two surfaces — the **print** (light, for reading) and the **screen** (dark, for looking).

That single idea drives everything below. It is also the reason the site is photo-heavy: a frame needs something in it.

### 3.1 The two-surface system

This is the one bold move. Everything else stays quiet.

- **Screen surface** (dark) — hero, Gallery, Speaker, Training's course strip. Photographs live here, edge to edge, uninterrupted. This is where you *look*.
- **Print surface** (light) — About, Research, Publications, Media Articles, Consulting, Board, Privacy. Long-form reading with a narrow measure. This is where you *read*.

Pages switch surface deliberately, never decoratively. A page that is mostly reading is a print page start to finish; it may hold one screen-surface band if there is a real photograph worth the full width. Never alternate light/dark section by section — that's a template rhythm and it reads as generated.

### 3.2 Palette

Six values. Derived from a screening room and a print archive, not from a palette generator.

```css
--screen:    #14171A;  /* projection dark — the looking surface */
--screen-2:  #1E2327;  /* raised frame edge on dark */
--print:     #E9E7E0;  /* archival paper — the reading surface */
--ink:       #191A17;  /* body text on print */
--graphite:  #64686B;  /* meta, captions, marginalia */
--mark:      #1F3C8C;  /* ultramarine — links, active state, one accent only */
```

`--mark` earns its place by being scarce: links, the current nav item, form focus rings, the Gallery filter that's on. Nothing else. Do not introduce a second accent, a gradient, or a tint scale of `--mark` for decoration.

**Hard stop:** if the palette drifts toward `#F4F1EA` paper with a `#D97757` terracotta accent, you have landed on the current generated-design default. Revise and say what you changed.

### 3.3 Typography

Two families, both variable, both free, neither a default reach.

- **Newsreader** (variable, optical size axis) — display and long-form body. Headlines at large optical size, tight tracking, weight 400–500 not 700. Body at small optical size, 18–19px, line-height 1.65, measure under 72 characters.
- **Archivo** (variable, has a width axis) — navigation, captions, metadata, buttons, publication records. Use **Archivo Expanded** for the film-title-card treatment on the hero and section openers; that width axis is the personality and almost nobody uses it.

Numerals: Archivo's tabular figures for years, page ranges, counts. **No monospace face for labels** — that's a tell.

Type scale, modular, ratio 1.25 from an 18px base:
`14 / 18 / 22.5 / 28 / 35 / 44 / 55 / 69` — hero display may break scale up to `clamp(3.5rem, 9vw, 7.5rem)`.

### 3.4 Layout

Asymmetric 12-column grid with a **persistent left marginalia column** (2 cols on desktop, collapses above content on mobile). The margin carries the log-sheet data: year, journal, theme, ABDC rank, city, programme. This is where "Reel & Frame" stops being decorative and becomes structural — a film log sheet is exactly this.

Everything left-aligned, ragged right. No centred body text anywhere. Centre only a single hero line if it sits over a full-bleed frame.

Photographs use two fixed ratios and nothing else: **3:2** (landscape frames — stages, classrooms, events) and **4:5** (portrait frames — headshots, single-subject). Consistent ratio across the site is what makes the frame idea read.

Radius: `2px` on frames, `0` on rules, `999px` on nothing. Not a rounded-card site.

### 3.5 Motion

**One** orchestrated moment, on the home hero only: the hero frame advances once on load, like a projector pulling a single frame — a 180ms vertical settle with a 40ms hold, then nothing. Every other transition is a response to a user action (filter applied, accordion opened, form submitted).

No fade-and-slide-up on scroll for each section. No hover lift on cards. `prefers-reduced-motion: reduce` kills the hero moment entirely.

### 3.6 The anti-AI checklist

Before shipping any page, check it against this. Every item is a current generated-design signature.

- [ ] No tracked-out ALL-CAPS eyebrow label above headings
- [ ] No `A · B · C` middle-dot meta strings
- [ ] No `→` appended to link or button text
- [ ] No `01 / 02 / 03` numbering unless the content genuinely is a sequence (the Consulting method — diagnostic, design, delivery, follow-through — is; the six pillars are not)
- [ ] No identical rounded cards with identical `rgba(0,0,0,.1)` shadows
- [ ] No single word in a headline italicised or coloured for emphasis
- [ ] No gradient used as decoration
- [ ] No stock photography, anywhere, ever (see §6)
- [ ] No AI-generated imagery, illustration, or texture
- [ ] Not every section the same height with the same padding rhythm

---

## 4. Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | **Next.js 16**, App Router, TypeScript | Server Components keep the shipped JS near the content; static export per route; the ecosystem the client can hire into later |
| Rendering | Fully prerendered — every route static at build time | A résumé site has no per-request state. No middleware, no route handlers, no warm server |
| Styling | **Tailwind CSS v4**, CSS-first config, Reel & Frame tokens declared in `@theme` | Tailwind's *defaults* are what pull a design toward the generated look — so the defaults get turned off and only these tokens exist. See `CLAUDE.md → Stack conventions` for the rules that keep it disciplined |
| Content | Markdown + YAML in `src/content/`, read at build time, Zod-validated | Client-editable via git or a CMS later; type-safe; a schema violation fails the build |
| Images | `next/image` → AVIF + WebP, responsive `sizes`, `loading="lazy"` below fold | Photo-heavy site must still hit the perf budget |
| Forms | Formspree or Netlify Forms, honeypot + provider-side validation | No backend to maintain, and no server runtime to keep the static guarantee |
| Search | Optional, Pagefind (static index) | Only if publication count justifies it; skip in v1 |
| Host | Cloudflare Pages or Netlify | Preview deploys per branch for client review |
| Analytics | Plausible or Cloudflare Web Analytics | No cookie banner needed; respects the Privacy notice's promise |

React is the cost of this stack, not a licence to spend: no component library, no animation library, no CMS in v1. `'use client'` appears only on the publication filters, the gallery lightbox and copy-to-clipboard.

**Budget shift, stated plainly and measured:** an Astro build of this site would ship ~0KB of JS. Next 16 + React 19 ships **178KB gzipped first-load** on this project measured with the route skeleton in place and essentially no site code — that is the framework floor, not a number to optimise away. The budget is therefore **185KB gzipped first-load per route**. The perf targets in §6 stay where they are; static HTML, real image sizing and almost no client code are what carry them now.

One measurement worth keeping: making the header a server component instead of a client one saved **0.4KB**. The App Router client runtime ships regardless, so the accessible version with correct `aria-current` is effectively free. Do not trade accessibility for bundle size on this stack — the trade does not pay.

---

## 5. Routes

Per the client's approved sitemap. Six pillars, plus Gallery, Contact, Board, Privacy, 404.

```
/                        Home
/about                   About
/research                Research — programme statement + three themes
/research/algorithms-at-work
/research/sustainable-people-systems
/research/careers-and-advancement
/publications            Filterable, one plain-English line per record
/training                Training (was Teaching)
/training/visiting
/training/flagship
/training/new-courses
/media                   Media Articles (was Writing) + two bios + podcast
/speaker                 Speaker (was Speaking)
/speaker/press-kit       Press kit
/consulting              Consulting — promoted to top pillar
/social                  Social Media (replaces Now)
/gallery                 Gallery (new)
/contact                 Routed enquiry
/board-and-advisory      Plainer register
/privacy                 Privacy notice
/404
```

**Nav resolution (open item — propose this to the client):** top nav carries five — About, Research, Training, Speaker, Consulting. Media Articles, Social Media, Gallery, Board & Advisory, Contact and Privacy sit in a full-width footer, with Gallery and Media Articles also reached from Home. Six pillars in a top bar plus a logo plus a CTA is eight items, which breaks at tablet and buries everything. Ship it this way behind a one-line note in the review deploy and let her overrule it.

**Full CV is not a page.** Do not create one, do not link a PDF, do not add a "Download CV" button. The client instructed this explicitly. About carries the bio.

---

## 6. Photography — the thing that makes or breaks this

The brief says *full of ma'am's pictures* and the research findings say *real event photography, not stock*. The design concept is literally about frames. So photography is not an asset-gathering task at the end; it is a **blocking dependency from Phase 1**.

### 6.1 Shot list to request from the client

| Ref | Shot | Ratio | Used on |
|---|---|---|---|
| P-01 | Primary portrait, environmental, natural light, looking to camera | 4:5 | Home hero, About, press kit |
| P-02 | Secondary portrait, different setting/outfit | 4:5 | Media bios, Board page |
| P-03 | Speaking portrait, mid-gesture, on a stage or podium | 3:2 | Speaker hero, press kit |
| C-01…04 | Classroom — her teaching, participants visible, whiteboard or case discussion | 3:2 | Training, Home pillar frames |
| S-01…04 | Stage — AOM, EGOS, BCERC, HRxAI-type conferences, lectern or panel | 3:2 | Speaker, Gallery |
| M-01…03 | MDP / executive room — U-shaped table, senior participants | 3:2 | Consulting, Training |
| E-01…06 | Events, award moments, the three best-paper awards, Wharton FDP | 3:2 | Gallery |
| D-01…03 | Detail frames — her hands on a case, a slide, a whiteboard, her notes | 3:2 | Section breaks, Gallery texture |

Minimum viable set to launch: **P-01, P-03, three classroom, three stage.** Below that the design cannot carry itself.

### 6.2 Placeholder policy

Until real photos arrive, render a **visible, ugly, unmissable** placeholder block: correct aspect ratio, `--screen-2` fill, and the shot ref in Archivo (`MISSING — S-02 · stage, AOM Copenhagen 2025`). Two reasons: the client sees exactly what's outstanding on every preview deploy, and nobody can accidentally ship stock.

**Never** substitute stock, Unsplash, AI-generated images, or illustrations. If a section has no photo and no prospect of one, redesign that section to work as type, not to work with a filler image.

### 6.3 Technical

- Source at 3000px on the long edge minimum; the build pipeline handles the rest
- `next/image` → AVIF primary, WebP fallback, `deviceSizes` at 640 / 1024 / 1600 / 2400 and an explicit `sizes` on every frame
- Every image needs real alt text describing what is happening, not "Dr Ashneet Kaur"
- Faces of participants and students: get consent confirmed by the client in writing before publishing. Flag any photo where identifiable third parties appear.
- Portrait crops: never crop the top of her head, never crop at a joint

---

## 7. Content model

Markdown + YAML read at build time, Zod-validated. All in `src/content/`.

```
src/content/
  publications/     one .md per paper — see schema below
  media/            one .md per article or podcast appearance
  courses/          one .md per course or programme
  speaking/         one .md per conference / stage appearance
  gallery/          one .yaml manifest, entries reference images + captions
  testimonials/     one .md per quote — PENDING client
  social/           one .md per surfaced post
  bios/             short.md, long.md — the two copy-ready bios
```

### publications schema

```ts
{
  title: string,
  authors: string[],            // exact author order from the CV
  venue: string,
  year: number,
  abdc: 'A*' | 'A' | 'B' | 'C' | null,
  theme: 'algorithms-at-work' | 'sustainable-people-systems' | 'careers-and-advancement',
  type: 'journal' | 'book-chapter' | 'case' | 'working-paper',
  doi: string | null,
  pdf: string | null,
  summary: string,              // the plain-English line
  summaryStatus: 'draft' | 'approved',   // gate: draft never ships
  award: string | null
}
```

### The plain-English summary line

The research flagged this as the single most-praised pattern. One sentence per publication, written for a CHRO or a journalist, not for a reviewer.

**Rule:** the summary describes **what the paper looks at**, never a finding you have not read in the paper. Draft summaries live at `summaryStatus: 'draft'`, render with a subtle marginal flag in preview builds, and **fail the production build** if any remain unapproved. Drafts for all ten papers are in `CONTENT-INVENTORY.md` — they are deliberately topic-descriptive, and she must approve or rewrite each.

Never fabricate a result, an effect size, or a conclusion. This is an academic's public record.

---

## 8. Page-by-page spec

### Home — screen surface, then print

Hero: full-bleed **P-01** on `--screen`, positioning line in Archivo Expanded overlaid lower-left, her name and current role beneath in Newsreader. The one motion moment lands here.

Positioning line — draft, for her approval: *"I study what algorithms do to people at work, and I teach leaders what to do about it."* Do not ship a placeholder line; if she hasn't approved one, the hero holds her name and role only.

Below: a **contact-sheet strip** — six frames, one per pillar, each a real photograph with the pillar name set in the margin beneath. This is the site's signature element and the reason the photo shot list matters. Not six identical rounded cards.

Then: a credentials band (IIMA · SPJIMR · ISB · PUNCOM · Wharton FDP · SHRM-SCP — as logos on print surface, sized down, no hover effects), a three-paper "recent research" row, and a **Recent activity** strip carrying the freshness signal the old Now page used to serve. That strip must show real dates. If it goes stale it does more damage than not existing — build it to surface the newest item across publications, media, speaking and social automatically.

### About — print surface

400-word first-person bio, single column, 68-character measure, **P-01** or **P-02** set in the margin at 4:5.

The **route-here timeline** is the important part: SRCC → DSE → Deloitte → McKinsey → ATOS → IIMA PhD → SPJIMR → ISB → PUNCOM board. Plus the two startups she founded in 2013–15. This is presented as an asset, not an apology — she has done the consulting work she now teaches. This is one of the few places numbered/sequenced markers are legitimate, because it genuinely is a sequence.

Credentials at a glance. **No CV page, no CV download.**

### Research — print, one screen band

Programme statement in her voice. Then three themes, each bundled with: its papers, a why-it-matters note, related recognition, and related media — **together, not scattered**. That bundling is a research finding; honour it.

Themes and their papers are mapped in `CONTENT-INVENTORY.md §3`.

In-progress work. The three best-paper awards (AOM 2023, EDII 2023, Anusandhan RDAIS 2025) with the actual paper titles. Links to Publications and Google Scholar.

### Publications — print

Filterable by type, theme, year. Filters are real HTML controls in one small client component, URL-synced via `searchParams` so a filtered view is linkable and works on a shared link.

Each record: title, authors with her name in `--ink` and co-authors in `--graphite`, venue, year, ABDC rank, the plain-English line, then DOI / PDF / Cite actions. Marginalia column carries year and rank.

Cite action copies a formatted APA string to clipboard with a confirmation that says "Citation copied".

### Training — screen for the course strip, print for the rest

Teaching philosophy in her voice — draw from her CV's third profile paragraph, don't paraphrase it into corporate-speak.

Three options set directly by the client: **Visiting**, **Flagship Courses or Programs**, **New Innovative Courses**.

The three co-designed courses (*Netflix & Learn*, *Pitch to Boardroom*, *Resilience and Turnaround*) get the screen-surface strip with real classroom photography — these are the most distinctive thing she has and currently the least visible.

Subjects and programme levels: PGDM, PGPM, PGEMP, PGPDM, PGDM-Online, GMP, FPM, SYB. MDP themes as a separate group.

**Student feedback given real placement, not a footnote.** Pending from client — two student and two MDP quotes.

### Media Articles — print

Article records, each with **her framing note on why she wrote it**. That note is the differentiator; a bare link list is what every academic has.

Alongside the list, not buried: **a short bio and a long bio, both one-click copyable** — the media-kit pattern. Word counts shown. This is the page a journalist on deadline lands on.

Podcast episode list (pending content — she leads SPJIMR's video podcast series on AI and digital transformation). Clip shelf.

Eight published articles are listed in `CONTENT-INVENTORY.md §5`, including the MPI piece with 5,900+ downloads — the strongest single data point on the page.

### Speaker — screen surface throughout

Topics as **headline-ready sentences**, the way a programme chair would print them, not as noun phrases. Draft three to five from her research themes; she approves.

Stages grouped by conference — AOM (five meetings: Virtual '21, Seattle '22, Boston '23, Chicago '24, Denmark '25, Philadelphia '26 upcoming), EGOS (Vienna '22, Cagliari '23), EURAM Dublin '23, BCERC Knoxville '23, Penn State Global IHRM '22, WU Vienna '22, NASPAA '21, ICODO IIMA '22.

Built around **real photography from her actual talks**, fed by Gallery. If the stage photos don't arrive, this page is type-only and honest about it — it is not a stock photo page.

**Press kit** sub-page: two bios, three downloadable photos at print resolution, a one-line descriptor, headshot credit line, and her preferred name and title spelling.

### Consulting — print, one screen band

Top-level pillar now, not footer-only. Five programme themes drawn from her MDP record: team leadership and collaboration, emotional intelligence, design thinking and innovation, AI and HRM, strategic people systems.

**How she works — diagnostic, design, delivery, follow-through.** A genuine four-step sequence, so sequential markers are legitimate here.

Corporate consulting record: ICAI, Bosch India, HURL, ATOS. Present as engagements with what was examined, not as logo wallpaper.

Enquiry form routed to the Consulting queue.

### Social Media — print

Replaces Now, and takes on its job: proving the site is alive. **A decorative feed is worse than nothing.** Two honest options, pick one with the client:

1. A curated `social/` collection she adds to — four to six items, each with a real date, a link, and one line of her framing. Manual but authentic.
2. A LinkedIn embed. Zero maintenance, but it renders as a widget and the design loses control of it.

Whichever ships, show a visible "last updated" date. If the newest item is over 90 days old, the build emits a warning.

### Gallery — screen surface, full page

Contact-sheet grid at the two fixed ratios. Categories: teaching moments, events and stages, press appearances, award moments. Filterable, lightbox on click with keyboard navigation and a real close affordance.

Distinct from Media Articles' curated clip shelf — Gallery is photographs, the clip shelf is published writing.

Every image captioned with what it is, where, and when. An uncaptioned gallery is a screensaver.

### Board and Advisory — print, deliberately plainer

Different register: quieter type, tighter measure, no display sizes above 35px, no photography beyond **P-02**.

Role statement. What she brings to a board — governance, HR systems, organisational risk, technology and workforce transformation. Her appointment framed exactly as the CV frames it: Independent Director, Punjab Communications Limited (PUNCOM), Government of Punjab, appointed under Section 149 of the Companies Act 2013 and SEBI (LODR) Regulations, April 2026–present.

**No commentary on PUNCOM's business, performance, strategy or prospects.** It is a listed PSU and she is an independent director. State the role and stop. Any copy that reads as speaking for or about the company gets cut.

### Contact — print

Routed by enquiry type: executive education, speaking, doctoral supervision, research collaboration, board, other. **Each with an honest response-time expectation** — get the real numbers from her; don't write "within 24 hours" because it sounds good.

Direct email and LinkedIn also visible; some people won't use a form. Google Scholar link.

### Privacy notice

Kept as-is, genuinely readable. Must accurately describe what the analytics choice in §4 actually does — if it says no cookies, the implementation must set no cookies.

### 404

Her voice, a route back to the six pillars, one photograph. Not a joke page.

---

## 9. Phases

### Phase 0 — Design proof (before any page)
Set up the Next.js project, the `@theme` tokens, and the type scale. Build **two competing static spikes of the Home hero + contact-sheet strip only**, at desktop and 390px. Screenshot both. Critique against §3.6. Pick one, write down why, delete the other.

Do not proceed until the hero looks like it belongs to her and nobody else.

**Exit:** two screenshots, a written critique, a chosen direction.

### Phase 1 — Foundations
`@theme` token block, cascade-layer order, base typography, the marginalia grid, frame component, image pipeline, placeholder component, header, footer, skip link, focus styles.

**Exit:** a styleguide route at `/_styleguide` (excluded from sitemap and robots) showing every primitive.

### Phase 2 — Content
Content loaders with Zod schemas. Populate from `CONTENT-INVENTORY.md`: ten publications, one book chapter, one case study, eight media articles, fifteen-plus conference entries, three awards, course records, programme list.

Draft the ten plain-English summaries. Mark every one `draft`.

**Exit:** `npm run check` and `npm run lint` clean; a content report listing what's populated vs pending.

### Phase 3 — Pages
Build in this order — highest-stakes first, so the client reviews the pages that matter earliest: Home → Research → Publications → Training → Speaker → Consulting → About → Media → Gallery → Contact → Board → Social → Privacy → 404.

**Exit:** every route renders with real content or a visible pending marker. No lorem ipsum anywhere in the repo.

### Phase 4 — Photography
Integrate real images as they arrive. Re-crop, re-balance layouts around actual composition. Expect layouts to change — a real photograph is not a grey rectangle.

**Exit:** zero placeholders on Home, Speaker, Training, Gallery.

### Phase 5 — Interaction and infrastructure
Filters, lightbox, copy-to-clipboard, forms with validation and honeypot, thank-you states. SEO: per-page titles and descriptions, canonical URLs, `sitemap.xml`, `robots.txt`, OG images generated from the frame system. Schema.org: `Person` on Home and About, `ScholarlyArticle` per publication, `Article` per media piece, `Event` per speaking entry.

**Exit:** rich results test passes; every form submits and confirms.

### Phase 6 — Audit
- Lighthouse: Performance ≥ 95, Accessibility 100, Best Practices ≥ 95, SEO 100 on mobile
- LCP < 2.0s on 4G, CLS < 0.05, first-load JS < 185KB gzipped on every route
- Keyboard: every interactive element reachable, visible focus, logical order, lightbox traps and releases focus correctly
- Contrast: 4.5:1 body, 3:1 large text, **on both surfaces**
- Screen reader pass on Home, Publications, Gallery
- `prefers-reduced-motion` honoured
- 320px, 390px, 768px, 1280px, 1920px
- Safari, Chrome, Firefox, iOS Safari, Android Chrome
- All `summaryStatus: 'draft'` resolved — build fails otherwise

**Exit:** audit report committed to the repo.

### Phase 7 — Handoff
Deploy docs, how to add a publication, how to add a gallery image, how to update Social Media. A one-page client guide in plain English, no git jargon unless she wants it.

---

## 10. Open items blocking completion

Carry these visibly in the repo as `PENDING.md` and surface them on every preview deploy.

| Item | Blocks | Owner |
|---|---|---|
| Nav placement sign-off (five in bar vs six) | Header, final | Client |
| Sitemap sign-off as final | Phase 3 start | Client |
| Photography — full shot list per §6.1 | Home, Speaker, Training, Gallery | Client |
| Two student + two MDP testimonials | Training | Client |
| Podcast episode list | Media | Client |
| Working-paper titles | Research | Client |
| Positioning line approval | Home hero | Client |
| Plain-English summaries approval (×10) | Production build | Client |
| Response-time commitments per enquiry type | Contact | Client |
| Current institutional affiliation — CV shows SPJIMR to Mar '26 and an ISB email | About, Home, all bios | Client |
| Photo consent for identifiable participants | Gallery, Training | Client |
| Domain, hosting account, email forwarding | Deploy | Client |

---

## 11. Definition of done

- Every claim on the site traces to the CV or to client-supplied content
- No stock imagery, no AI imagery, no lorem ipsum, no placeholder copy in production
- No Full CV page or download exists
- Board page carries no commentary on the listed entity
- Every publication has an approved plain-English line
- The site passes §3.6 on every page
- A stranger can tell within ten seconds that this is a scholar who teaches leadership through film, and not a template with a different name on it
