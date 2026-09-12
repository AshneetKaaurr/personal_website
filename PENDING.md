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
| 1 | **Photography — the full shot list.** 23 shots declared in `src/lib/shots.ts`. None supplied. 8 are marked launch-critical: P-01, P-03, C-01, C-02, C-03, S-01, S-02, S-03. | Client | Home, Speaker, Training, Gallery, Press kit | Shoot the 8 launch-critical frames first. Below that set the design cannot carry itself and those sections have to be rebuilt as type. |
| 2 | **Current institutional affiliation.** The CV shows SPJIMR to March 2026 and an ISB email address. | Client | About, Home, every bio, page metadata | Nothing states a current institution until she confirms. The Home credentials band currently states the SPJIMR dates as a closed range, which is accurate either way. |
| 3 | **Plain-English summaries, all 12.** Every one is a draft written by Claude, describing what the paper looks at. None describes a finding. | Client | Publications, Research, Home, production build | She approves or rewrites each. The production build fails while any remains `draft`. |
| 4 | **Research theme assignment for all 12 records.** Proposed by Claude, not stated by her. | Client | Research and its three theme pages | Current proposal is in `CONTENT-INVENTORY.md` §3 and encoded in `src/content/publications.ts`. |
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
| 15 | Photo consent for identifiable participants and students | Client | Gallery, Training | Written confirmation. The manifest refuses to publish any photo whose `consent` is `pending`. |
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
| 25 | Pages still on the skeleton | Build | Everything except Home. Phase 3 order: Research, Publications, Training, Speaker, Consulting, About, Media, Gallery, Contact, Board, Social, Privacy, 404. |
