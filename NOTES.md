# Notes — what was tried, what was rejected, why

A running log. Future passes need the reasoning, not just the result.

---

## 2026-09-12 — Stack change: Astro 5 to Next.js 16

**Decided by the client, not by the build.** `CLAUDE.md` and `BUILD-PLAN.md`
originally specified Astro 5, hand-written CSS and no Tailwind. Both documents
were updated to Next.js 16 + Tailwind v4 + TypeScript on request.

What that cost, stated plainly so nobody relitigates it later:

- **JS.** Astro would have shipped ~0KB. Measured Next 16 + React 19 App Router
  baseline on this project, with the route skeleton in place and essentially no
  site code: **178KB gzipped first-load**. The budget in both docs was corrected
  from the 30KB Astro figure to **185KB**. The framework is nearly all of it.
- **What did not change.** The design system. Tailwind is configured CSS-first
  with the Reel & Frame tokens as the theme and Tailwind's own palette, type
  scale and spacing ramp switched off. `bg-slate-50` does not resolve. That was
  the actual risk in adopting Tailwind — its defaults, not Tailwind itself.

**Measurement worth keeping:** rebuilding the header as a server component
instead of a client one saved **0.4KB gzipped** (178.0 vs 178.4). The App Router
client runtime ships either way. So the client version stayed, with correct
`aria-current` on the current nav item. On this stack, trading accessibility for
bundle size does not pay — check before making that trade again.

---

## Tooling decisions forced by version conflicts

- **TypeScript pinned to 6.0.3, not 7.0.2.** `typescript-eslint` does not
  support the TS 7 API yet, and `npx eslint` fails outright on it. `CLAUDE.md`
  requires both `tsc --noEmit` and `eslint` to pass before a commit, so the
  lint gate wins. Revisit when typescript-eslint ships TS 7 support
  (typescript-eslint#10940).
- **ESLint pinned to 9, not 10.** ESLint 10 changed the scope manager API
  (`scopeManager.addGlobals`) and `eslint-config-next@16` crashes on it.
  `eslint-config-next` declares `eslint: >=9.0.0`; 9 is what actually works.
- **`next/font` cannot take `weight` and `axes` together.** Newsreader's `opsz`
  and Archivo's `wdth` axes are the whole reason those two families were chosen,
  so `weight` was dropped. Variable fonts carry the full weight range anyway.

---

## Design system notes

- **`--font-*: initial` also clears `--font-weight-*`.** Tailwind v4 matches
  theme namespaces by prefix, so switching off the font-family namespace took
  the weight scale with it. `--font-weight-regular/medium/semibold` are declared
  back explicitly. If `font-medium` ever stops working, this is why.
- **Archivo's width axis is a component-layer utility, not an inline style.**
  `.font-expanded` (112%) and `.font-expanded-max` (125%). Writing
  `style={{ fontStretch: '112%' }}` in a component would have been a raw value
  in markup, which `CLAUDE.md` forbids for the same reason it forbids
  `text-[17px]`.
- **The screen surface needed a seventh colour.** `--graphite` (#64686B) is the
  meta value on print, but it fails contrast on `--screen` (#14171A).
  `--graphite-screen` (#9AA0A5) exists so captions on the dark surface are
  readable without resorting to an opacity hack on `--print`. This is a
  legibility fix, not a second accent — `--mark` is still the only accent.
- **The header sits on print above every page, including the dark ones.** An
  overlaid transparent header would have to solve contrast against whatever
  photograph happens to be behind it, at every breakpoint, for photos nobody
  has seen yet. A print bar above the frame also reads as the log sheet above
  the frame, which is the concept rather than a workaround.
- **Styleguide lives at `/styleguide`, not `/_styleguide`.** App Router treats a
  leading underscore as a private folder and will not route it. Excluded from
  search with `robots: { index: false }` instead. It doubles as the outstanding
  photography report the client reads.

---

## Photography architecture

The thing that makes or breaks this site, so it was built first rather than
last. Three pieces:

1. `src/lib/shots.ts` — the 23 shots from `BUILD-PLAN.md` §6.1 as typed data,
   each with its ratio, what it is, where it appears, and whether it is
   launch-critical.
2. `src/content/photos.ts` — the manifest. Empty. The only place a real
   photograph enters the site. A photo whose `consent` is `pending` is treated
   as no photo at all, so an uncleared image cannot reach a deploy by being
   merged early.
3. `<Frame shot="S-01" />` — renders the real photograph when the manifest has
   a cleared one, and the visible placeholder when it does not.

So pages get written now, against the shot list, and photographs fill in behind
them as they arrive. Adding one is: drop the file in `/public/photos`, add an
entry keyed by the ref, write real alt text. Nothing else changes.

The placeholder is deliberately ugly — dashed border, `MISSING — S-01 · …`,
the ratio, and whether it is required to launch. Two reasons, both from
`BUILD-PLAN.md` §6.2: the client sees exactly what is outstanding on every
preview deploy, and nobody can mistake it for a design decision and ship it.

Note on the placeholder text: it uses a middle-dot meta string, which the
anti-AI checklist bans. The ban is about shipped design; `BUILD-PLAN.md` §6.2
specifies this exact string for the placeholder, and the placeholder never
reaches production. Kept as specified.

---

## Not done yet

Home is the only real page. Everything else is the honest skeleton — each
route states on the page what belongs there and what is blocking it, per
`PENDING.md`. No lorem ipsum anywhere in the repo.

Phase 0's two-competing-spikes exercise has **not** been run. The Home hero and
contact sheet are a first direction, not a chosen one. `BUILD-PLAN.md` Phase 0
requires two spikes, screenshots at 390px and 1280px, a written critique against
§3.6, and the loser deleted. That is the next design task, and it should happen
before more pages are built on top of this direction.
