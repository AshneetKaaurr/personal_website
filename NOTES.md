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

## 2026-09-12 — First visual pass on Home, 320/390/768/1280

Screenshotted with real viewport emulation (puppeteer-core driving the
installed Chrome) rather than `chrome --headless --window-size`. That matters:
Windows Chrome enforces a minimum window width of roughly 500px, so the first
round of "390px" screenshots showed a cut-off page and a two-column grid that
did not exist. Two of the three bugs found in that round were artefacts of the
screenshot method. **Do not trust `--window-size` below ~500px.**

Three real defects, all fixed:

1. **The contact sheet had a ragged row.** About was mapped to P-02, a 4:5
   portrait, sitting among five 3:2 landscapes — so its tile ran taller and the
   headings in that row fell off the baseline of their neighbours. A contact
   sheet is a sheet of identically-sized frames; that uniformity is the whole
   reason it reads as one object. About now uses E-04, and all six are 3:2. The
   4:5 ratio still carries portraits everywhere else; it just cannot sit inside
   this grid.

2. **`/styleguide` scrolled horizontally at 320px.** The type specimens show
   the display sizes at their real size, which is genuinely wider than a 320px
   viewport. Correct fix is to let the specimen scroll in its own track, not to
   shrink it and lie about the size.

3. **`min-w-0` did not exist**, which is why fix 2 did not work at first.
   Switching off Tailwind's dynamic `--spacing` also removes the zero step, so
   `min-w-0`, `p-0` and `gap-0` silently stop generating — no error, the class
   just does nothing. Grid items default to `min-width: auto` and will not
   shrink below their content, so one wide child widens the entire page.
   `--spacing-0: 0px` is now declared explicitly, and both Marginalia columns
   carry `min-w-0`.

The third one is the one to remember: **switching off a Tailwind namespace
removes utilities silently.** A class that generates nothing looks identical to
a class that is working until something overflows.

The audit script lives in the session scratchpad, not the repo. It walks every
element at 320/390/768/1280 and reports anything extending past the viewport.
Worth rebuilding as a committed script when there are more pages to check.

---

## 2026-09-14 — Real photography arrives

30 files supplied. 22 are in the site; 5 are HEIC that will not decode and 2
were byte-identical duplicates of files already in the set
(`IMG_8090_Original[35]_personal.jpg`, `IMG_8897_Original_Consulting.jpg`).

**HEIC is a dead end on this machine.** sharp reads the container and reports
4032x3024, then fails the pixel decode — its bundled libheif has no HEVC
decoder, which is a patent-licensing thing rather than corruption. Windows'
own WIC stack fails too (`0xC00D5212`), because HEVC Video Extensions is a paid
Store add-on. Not worth retrying: those five need re-exporting as JPEG at
source.

**An intake step now exists** (`scripts/prepare-photos.mjs`) and the originals
live in a gitignored `photo-intake/`, not in `public/`. Three reasons, the
first being the one that matters:

1. **EXIF.** The originals carry it and phone EXIF carries GPS. Everything in
   `public/` is downloadable by anyone, coordinates included. The prepared
   files have all metadata stripped — verified after the fact, not assumed.
2. **Weight.** 43MB of originals became 6.8MB of web-ready files. Several
   originals were 4032px and 4MB when the largest size `deviceSizes` will ever
   serve is 2400px.
3. **Orientation.** Rotation is baked into the pixels rather than left as an
   EXIF flag that some pipelines honour and others ignore.

**Aspect ratios are not cropped in the file.** Only 6 of the 22 arrived at 3:2
and none at 4:5; the rest are 4:3, 3:4 or 2:3. Automating a crop to the two
fixed ratios would eventually take the top of someone's head, so the files keep
their own ratio and the frame crops them with `object-fit: cover`, steered by a
per-photograph `focal` in the manifest. A judgement per photo, recorded as
data, and reversible.

**The ragged-grid bug came back, exactly where it was predicted to.** The
Speaker strip mixed 4:5 and 3:2 frames in one grid and the rows fell out of
alignment — the same defect fixed by hand on the home contact sheet two days
ago. It is now a component, `FrameGrid`, which renders one grid per ratio and
cannot mix them. The lesson generalises: a rule enforced by hand on one page is
a rule that gets broken on the next one.

**Screenshot method, again.** A `fullPage` Puppeteer screenshot does not
scroll, so `loading="lazy"` frames below the fold never request their images
and the capture looks broken. The Gallery's Portraits section appeared
completely empty. The fix is to scroll the page, await every image, and assert
`naturalWidth > 0` before capturing — `scratchpad/shot.mjs` does that and
reports loaded/total. Second time a screenshot artefact has looked like a real
bug. Suspect the tool before the site.

**11 of the 22 are held.** Anything with an identifiable student, participant
or colleague in frame is `consent: 'pending'` and renders a placeholder, per
CLAUDE.md and BUILD-PLAN.md §6.3. One constant — `THIRD_PARTY` in
`src/content/photos.ts` — releases all of them once she confirms in writing.

---

## 2026-09-17 — New design direction, and every page built as a skeleton

The Reel & Frame system is gone. `globals.css` was rewritten around Playfair
Display and Inter with a sage and coral palette, glass panels and rounded
corners, and a new full-screen home hero was built on it. That is the client's
call and it stands.

**What it silently broke.** Tailwind does not error on a class it cannot
generate, it just emits nothing. So when the old `@theme` block went, every
utility built on it — `font-display`, `text-body`, `text-h1`, `bg-print`,
`text-muted`, `border-rule`, `max-w-measure`, `rounded-frame` — stopped
existing, and all 22 non-hero pages plus the header and footer rendered at
browser defaults on a white page. The build passed the whole time. This is the
second time this exact failure mode has cost real work; the first is logged
above under `min-w-0`.

Worth keeping: **a dead class and a working class look identical in source.**
The only reliable check is to grep the generated CSS for each class the source
uses. Doing that turned up eight genuinely dead ones, two of them inside the
new hero itself — `text-meta` on the section marker, and `no-scrollbar` on the
pillar rail, which had never been defined at all so the rail was showing a
scrollbar. Both fixed.

**Skeleton primitives.** `src/components/Page.tsx` holds Container, PageTitle,
Section, Prose, Draft, Note and Record. Every page below the hero is built from
them: semantic markup, a readable measure, no palette beyond what is already in
the theme. When the design lands it lands in that one file.

`Surface`, `Marginalia`, `PendingNotice` and `FrameGrid` were deleted rather
than patched. All four encoded Reel & Frame decisions — two surfaces, a
marginalia column, fixed 3:2 and 4:5 ratios — that the new direction does not
make. Keeping them would have meant carrying a design argument the project has
already moved past. Git has them.

The styleguide route went too. It documented a palette and type scale that no
longer exist. It should come back once the new system settles, because its
other job — showing what photography is still outstanding — is still needed.

**Four research themes, not three.** `BUILD-PLAN.md` assumed three. Two of her
three best-paper awards are on new ventures and founders, and with the agility
paper, the Product Entrepreneurship Lab, Start Your Business, FiNovate, BCERC,
the AOM Entrepreneurship Division editorship and two ventures she founded
herself, entrepreneurship is a genuine fourth strand that a three-theme
structure erases. The theme pages are now one dynamic route rather than four
near-identical files that would drift apart.

**typedRoutes and dynamic segments.** `Route` is a union of route *patterns*,
so `/research/[theme]` is assignable and `/research/algorithms-at-work` is not.
One cast in `themeHref()` rather than scattered at every call site.

**Documentation debt.** `CLAUDE.md` and `BUILD-PLAN.md` §3 still describe Reel
& Frame in detail — two surfaces, the six-value palette, Newsreader and
Archivo, the marginalia grid, the anti-AI checklist calibrated against that
palette. None of it matches the code any more. Both documents need rewriting
once the new direction settles, and until then they will misdirect anyone who
reads them as current.

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
