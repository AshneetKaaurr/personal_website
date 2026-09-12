# CLAUDE.md — working rules for this repo

Personal website for **Dr Ashneet Kaur**, scholar and educator in Organizational Behaviour and HRM.
Roadmap: `BUILD-PLAN.md`. Facts: `CONTENT-INVENTORY.md`. Outstanding client items: `PENDING.md`.

---

## Hard rules

1. **Never invent a fact about her.** Every credential, date, title, award, venue, client, number and affiliation comes from the CV or from the client. If it isn't in `CONTENT-INVENTORY.md`, it doesn't go on the site — add it to `PENDING.md` instead.

2. **Never fabricate a research finding.** Publication summaries describe what a paper examines, not what it concluded, unless the conclusion is in a source you actually read. Every summary ships as `summaryStatus: 'draft'` until she approves it. The production build fails on any remaining draft.

3. **No stock photography. No AI-generated imagery. Ever.** Not Unsplash, not Pexels, not a generated portrait, not a generated texture, not an illustration standing in for a photo. Missing photos render as the visible placeholder component with the shot ref. If a section can't work without a photo it doesn't have, redesign the section.

4. **No Full CV page and no CV download.** The client instructed this explicitly. Don't add it as a "helpful" extra.

5. **Board and Advisory page: no commentary on PUNCOM.** State the role, the statute, the dates. Nothing about the company's business, performance, strategy or outlook. It's a listed PSU and she's an independent director.

6. **No lorem ipsum, ever, in any commit.** Real content or a visible pending marker.

7. **Don't copy `sudhanshumaheshwari.in`.** It's a structural reference for page depth only. Not its design, not its copy, not its sections.

---

## Design guardrails

The concept is **Reel & Frame** (client-approved): two surfaces — dark **screen** for looking, light **print** for reading. Fixed photographic ratios, 3:2 and 4:5. Asymmetric grid with a persistent left marginalia column carrying log-sheet data. Left-aligned, ragged right. See `BUILD-PLAN.md §3`.

Tokens live in the `@theme` block in `src/app/globals.css` and are the only source of colour, type and spacing values — they surface as Tailwind utilities and as CSS custom properties. No hardcoded hex, no arbitrary px, in components or in class names.

### Do not ship any of these

- Tracked-out ALL-CAPS eyebrow labels above headings
- `A · B · C` middle-dot meta strings
- `→` appended to link or button text
- `01 / 02 / 03` markers on anything that isn't genuinely a sequence
- Identical rounded cards with identical soft grey shadows
- A single headline word italicised or coloured for emphasis
- Gradients as decoration
- Fade-and-slide-up entrance on every section, or hover-lift on every card
- A warm cream background with a terracotta accent — that is the current generated-design signature and it is an automatic revise
- Monospace faces for small data labels
- Tinted near-black (`#0B0B0B`, `#111`) standing in for the token palette

### Motion

One orchestrated moment: the home hero frame advance on load. Everything else responds to user action. `prefers-reduced-motion: reduce` removes the hero moment.

---

## Working method

- **Screenshot before you judge.** After any visual change, screenshot at 390px and 1280px and look at it. A picture is worth a thousand tokens.
- **Two options, then pick.** For any significant visual decision, build two and write down why one won. Delete the loser.
- **Critique against the anti-AI checklist** (`BUILD-PLAN.md §3.6`) before calling a page done. Say what you changed and why.
- **Keep `NOTES.md`** — a running log of what you tried, what got rejected, and the reasoning. Future passes will need it.
- Small commits, conventional messages, one concern per commit.

---

## Stack conventions

- **Next.js 16, App Router, TypeScript.** Server Components by default. `'use client'` only where an interaction genuinely needs it — the publication filters, the gallery lightbox, copy-to-clipboard. No CMS in v1.
- **Static output.** Every route prerenders. No route handler, middleware or server runtime the host has to keep warm.
- **Tailwind CSS v4, configured CSS-first.** The Reel & Frame tokens *are* the Tailwind theme — declared once in an `@theme` block in `src/app/globals.css`. Tailwind is the delivery mechanism for the design system, not a replacement for it:
  - Tailwind's default palette, type scale and spacing scale are **turned off**. If `bg-slate-50` or `text-gray-600` still resolves, the theme is misconfigured — fix it before building on top.
  - **No arbitrary values in markup.** Not `text-[17px]`, not `bg-[#F4F1EA]`, not `mt-[13px]`. If a value isn't in the theme, either it belongs in the theme or it doesn't belong on the site.
  - Anything repeated across more than two elements — the frame, the marginalia grid, the placeholder, a publication record — is a React component, not a copy-pasted utility string.
  - Cascade layer order: `@layer theme, base, components, utilities`.
- Content in `src/content/` as Markdown + YAML, Zod-validated at build time. A schema violation fails the build.
- Images through `next/image` only — AVIF primary, WebP fallback, responsive `sizes`. Real photos in `public/photos/`; every missing one renders the placeholder component (hard rule 3), never a gap and never a substitute.
- **JS budget: 185KB gzipped first-load on any route.** Measured, not estimated: Next 16 + React 19's App Router baseline is **178KB gzipped** on this project with almost no site code in it, so the budget is that floor plus headroom. Nearly all of it is framework and it cannot be opted out of — which means every kilobyte the site adds is one it chose. Interactive code stays small and hand-written; each client-side dependency is argued for individually. No animation library, no UI kit, no carousel.
- `npm run check` (`tsc --noEmit`) and `npm run lint` must both pass before any commit.

---

## Quality floor — non-negotiable, not a final phase

- Responsive from 320px up
- Visible keyboard focus on every interactive element
- Contrast 4.5:1 body / 3:1 large text, verified on **both** surfaces
- Real alt text describing what's happening in the image, never just her name
- Semantic HTML: one `h1` per page, correct heading order, landmarks, skip link
- Lighthouse mobile: Performance ≥ 95, Accessibility 100, SEO 100

---

## Tone of voice

First person on About and the teaching philosophy. Third person in the bios (they're for other people to paste). Plain verbs, sentence case, no filler, no consultant-speak. Specific beats clever every time.

She is a scholar who teaches leadership through cinema, cricket and turnaround stories, and researches what algorithms do to people at work. The copy should sound like that person — not like a leadership-consulting landing page.

---

## When you're unsure

Add it to `PENDING.md` with a proposed answer and build the rest. Don't guess at a fact, don't fill a gap with plausible-sounding content, and don't silently drop a requirement.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
