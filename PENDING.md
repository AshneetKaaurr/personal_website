# Pending — outstanding items

Everything the site needs and does not have. Nothing on this list gets guessed
at, filled with plausible-sounding content, or quietly dropped. Items marked
**Client** need her; items marked **Build** are ours.

Where a page needs one of these, it says so on the page, so this list is
visible on every preview deploy rather than only here.

---

## Blocking the launch

| # | Item | Owner | Blocks | Proposed answer |
|---|---|---|---|---|
| 1 | **Written consent for the group photographs.** 11 of the 22 supplied photographs show students, participants or colleagues who are identifiable. They are wired up but render as placeholders. | Client | Training (all 6 frames), Gallery, Home contact sheet (2 of 6), Speaker (3 of 6) | Confirm in writing that those people consent to appearing on a public site, then set `THIRD_PARTY` to `'confirmed'` in `src/content/photos.ts` — one constant releases all 11. |
| 1b | **Five converted PNGs need mapping.** The previously unreadable HEICs have been converted and now sit in `photo-intake/`. | Build | Gallery, and whichever pages they suit | They are 45MB as PNG against 6.8MB for all 22 JPEGs, so they must go through `scripts/prepare-photos.mjs` rather than straight into `public/`. Each one still needs looking at, a shot ref, and real alt text. |
| 1c | **Shots still not covered by any photograph.** S-03, M-03, E-02, E-03, E-04, D-01, D-02, D-03. | Client | Gallery, Research, Section breaks | The three best-paper award moments (E-02, E-03), the Wharton FDP (E-04) and the three detail frames are the notable gaps. |
| 2 | **Current institutional affiliation.** The CV shows SPJIMR to March 2026 and an ISB email address. | Client | About, Home, every bio, page metadata | Nothing states a current institution until she confirms. The Home credentials band currently states the SPJIMR dates as a closed range, which is accurate either way. |
| 3 | **Plain-English summaries, all 12.** Every one is a draft written by Claude, describing what the paper looks at. None describes a finding. | Client | Publications, Research, Home, production build | She approves or rewrites each. The production build fails while any remains `draft`. |
| 4 | **Research theme structure and assignment.** Now four themes, not three, and all twelve records assigned. Proposed, not stated by her. | Client | Research and its four theme pages | Reasoning in `SITE-COPY.md`; encoded in `src/content/themes.ts` and `src/content/publications.ts`. The executive-overconfidence meta-analysis is the weakest fit under any structure. |
| 5 | **DOIs.** Not on the CV. | Client or Build | Publications, Schema.org `ScholarlyArticle` | Retrieve from Google Scholar, then confirm each against the published record. |
| 6 | **Both bios — short and long.** The copy-paste pair a journalist needs. | Client | Media, Press kit | Draft from the CV profile summary once affiliation (#2) is settled. |
| 7 | **Positioning line for the Home hero.** | Client | Home hero | Draft offered in `BUILD-PLAN.md` §8. Until approved the hero holds her name and her own CV descriptor only — no placeholder line ships. |

---

## Blocking individual pages

| # | Item | Owner | Blocks | Proposed answer |
|---|---|---|---|---|
| 8 | Two student and two MDP testimonials | Client | Training | Given real placement on the page, not a footnote. |
| 9 | Podcast episode list — she leads SPJIMR's video podcast series on AI and digital transformation | Client | Media | List of episodes with dates, guests and links. |
| 10 | Her framing note on each of the 8 media articles — why she wrote it | Client | Media | This note is the differentiator. A bare link list is what every academic has. |
| 11 | Working-paper titles | Client | Research | For the work-in-progress section. |
| 12 | Response-time commitment per enquiry type | Client | Contact | Real numbers. Not "within 24 hours" because it reads well. |
| 13 | Google Scholar and LinkedIn URLs | Client | Contact, About, Research | On the CV as links; the URLs need extracting. |
| 14 | ATOS dates — the CV shows Apr 2019 to May 2019, a one-month span | Client | About, Consulting | Likely a typo. Confirm before publishing either way. |
| 15 | Dates and places for each photograph | Client | Gallery captions | Several captions say what is happening but not where or when. A gallery caption should carry all three. |
| 15b | Photographer credit line | Client | Press kit | Owed on the studio portraits if a photographer took them. |
| 15c | Print-resolution files for the press kit | Client | Press kit | The published files are capped at 2400px on the long edge — right for the web, too small for print. |
| 16 | Social Media page — curated collection or LinkedIn embed | Client | Social | Recommend the curated collection: 4 to 6 items she adds to, each with a real date, a link and one line of her framing. The embed needs no maintenance but renders as a widget and the design loses control of it. |
| 17 | Nav placement sign-off — five in the bar, the rest in the footer | Client | Header, final | Shipped as five: About, Research, Training, Speaker, Consulting. Six pillars plus a wordmark plus a CTA is eight items; it breaks at tablet and buries everything. She can overrule. |
| 18 | Sitemap sign-off as final | Client | Phase 3 | Routes as built match `BUILD-PLAN.md` §5. |

---

## Infrastructure

| # | Item | Owner | Blocks | Proposed answer |
|---|---|---|---|---|
| 19 | Domain, hosting account, email forwarding | Client | Deploy | `metadataBase` is currently a placeholder host and must be corrected before launch. |
| 20 | Analytics choice — Plausible or Cloudflare Web Analytics | Client | Privacy notice | Either sets no cookies, so the Privacy notice can promise that truthfully. Whichever ships, the implementation has to match what the notice says. |
| 21 | Form provider — Formspree or Netlify Forms | Build | Contact, Consulting | Must keep the site static. Honeypot plus provider-side validation. |

---

## Build items

| # | Item | Owner | Notes |
|---|---|---|---|
| 22 | Recent activity strip on Home | Build | Surfaces the newest item across publications, media, speaking and social with its real date. Deliberately not hardcoded — a stale strip does more damage than no strip. Ships once those collections are populated. |
| 23 | Production build gate on `summaryStatus: 'draft'` | Build | Must fail the build, not warn. Not yet wired. |
| 24 | Media, speaking, courses, social and bios collections | Build | Schemas exist for publications only so far. |
| 25 | Every page is a content skeleton | Build | All 23 routes carry their real copy in semantic markup with no design applied, by request. The home hero is the only designed surface. |
| 26 | The design system was replaced | Build | Reel & Frame (Newsreader/Archivo, screen/print surfaces, marginalia grid) has been swapped for Playfair/Inter with a sage and coral palette. `CLAUDE.md` and `BUILD-PLAN.md` §3 still describe the old one and now contradict the code. They need rewriting once the new direction settles. |
| 27 | Photography is not on the pages | Build | 22 prepared photographs sit in `public/photos`, wired to shot refs, but no page below the hero renders one. Held out while the pages are skeletons. |
