# BeyoneStyle — Typography & Motion Foundation

Date: 2026-11-20
Status: Awaiting approval
Size: Small foundational change (one scaffold + design layer)

## Intent

Give BeyoneStyle the editorial apparel foundation its roadmap (Phase 1.2) calls
for, and the calm, premium feel of InfinityFX's clean layout at roughly 90%
adaptation — same rhythm and restraint, original brand execution.

The request covers three things: a type system, a seamless marquee, and a light
surface/motion token set. This document is the agreed design for all three.

## Goals

- One type scale used everywhere, with a clear heading hierarchy.
- Tight display tracking on large headings; comfortable tracking in body text.
- Tabular numerals on every price, count, and comparison figure.
- A truly seamless marquee that pauses on hover/focus and respects
  `prefers-reduced-motion`.
- Light surfaces, hairline borders, and short transitions that never shift
  layout (CLS target < 0.1).
- A runnable app so the foundation can be seen, not just read.

## Non-goals

- No product pages, cart, auth, or database work.
- No dark theme in this pass (tokens are structured so it can be added later).
- No GSAP/Three.js, no page-transition framework, no custom cursor.
- No Shadcn component installation yet; tokens are Shadcn-compatible.
- No image assets or brand copywriting beyond demo content.

## Anti-goals

- Heavy animation libraries for a marquee that CSS does it better.
- Scroll-triggered transforms that move layout or cause reflow.
- Neon or high-contrast accents that fight the editorial light canvas.
- A "clever" token API that is hard to read in Tailwind classes.

## Constraints

- Greenfield: repo contains only the roadmap document.
- Next.js App Router, TypeScript strict, mobile-first.
- Motion must hold 60 FPS and avoid layout shifts.
- User direction supersedes the roadmap's dark `#0d0d0d` + neon palette for now.

## Approaches Considered

**A — Scaffold the app now (chosen).** Next.js 16 App Router + TypeScript +
Tailwind v4, fonts via `next/font`, tokens in `@theme`, a CSS-only `Marquee`,
and a demo page. Trade-off: more files up front, but the system is verifiable
and the repo becomes a real Phase 1 base.

**B — Design layer only.** Token CSS and component source with no app.
Trade-off: lighter, but nothing renders, so hierarchy and motion cannot be
checked.

B was rejected because typography and motion are visual decisions; they need a
running page to be judged.

## Design Decisions

### Stack

- Next.js 16 (latest stable, App Router) + React 19 + TypeScript strict.
- Tailwind CSS v4 (CSS-first `@theme`), no `tailwind.config.js` unless needed.
- `next/font/google` for self-hosted, zero-layout-shift fonts.
- No animation dependency; motion is CSS transitions/keyframes.

### Typography

- **Display:** Plus Jakarta Sans (`--font-display`), weights 500–800.
- **Body/UI:** Inter (`--font-sans`), weights 400–600.
- Display sizes use `clamp()` so they scale without media-query jumps.
- Tracking: display `-0.045em`, h2 `-0.03em`, h3 `-0.02em`, body `0`,
  eyebrow `+0.12em` uppercase at 11–12px.
- Line height: display `0.95–1.02`, headings `1.1`, body `1.6`.
- Prices/counters: `font-variant-numeric: tabular-nums` via a `.nums` utility
  and `font-feature-settings`.
- Scale (rem, clamp for display): display-xl, display-l, h1, h2, h3, body-lg,
  body, small, eyebrow, price.

### Color & Surface Tokens

Light editorial palette, warm-neutral rather than pure grey:

- `--surface` #ffffff, `--surface-muted` #f7f7f4, `--surface-sunken` #efefea
- `--ink` #111110, `--ink-muted` #5c5c56, `--ink-subtle` #8a8a82
- `--border` #e4e4dd, `--border-strong` #cfcfc6
- Accent kept minimal: `--accent` #111110 (ink-on-light) for this pass; a
  brand accent token exists but is unused.
- Radii: `--radius-sm 4px`, `--radius-md 8px`, `--radius-lg 14px`.
- Shadow: one soft elevation token only (`0 1px 2px rgba(17,17,16,.04)`).
- Tokens exposed as Tailwind theme colors (`bg-surface`, `text-ink`,
  `border-border`, etc.).

### Motion Tokens

- Durations: `--duration-fast 150ms`, `--duration-base 250ms`,
  `--duration-slow 400ms`, `--duration-marquee` set per instance.
- Easing: `--ease-out cubic-bezier(0.22, 1, 0.36, 1)`,
  `--ease-in-out cubic-bezier(0.65, 0, 0.35, 1)`.
- Rule: animate `opacity` and `transform` only; never width/height/top/left.
- Global `@media (prefers-reduced-motion: reduce)` disables transitions and
  animations, except the marquee's explicit static fallback.
- Hover language: underline grow, image scale ≤1.03 inside `overflow-hidden`,
  border darken, opacity 0.7→1. No lift/shadow jumps.

### Marquee

- One `Marquee` component, two visual variants via props: `announcement`
  (dark ink strip, light text, small uppercase labels) and `category`
  (light strip, hairline top/bottom borders, larger editorial labels).
- Structure: outer `overflow-hidden` with edge mask fade; inner track holds two
  identical groups; group two is `aria-hidden`.
- Animation: `translate3d(0,0,0) → translate3d(-50%,0,0)`, linear, infinite.
  Duplicate group makes the loop seamless.
- Pause on hover and `focus-within` (`animation-play-state: paused`), so
  keyboard users can read it.
- `prefers-reduced-motion`: animation removed; content wraps or scrolls
  horizontally with native scroll-snap instead of moving on its own.
- Speed controlled by `--marquee-duration` (default ~38s) and `speed` prop.
- Content is real text nodes (not images) for SEO and selection.

### Demo Page

A single `/` page that shows: the type scale, an eyebrow + display headline,
price rows with tabular numerals and strikethrough compare-at prices, both
marquee variants, and hover states on a few cards/links. No fake commerce logic.

### File Layout

```
app/layout.tsx            fonts, metadata, base classes
app/globals.css           @theme tokens, base styles, reduced-motion, utilities
app/page.tsx              typography + marquee demo
components/ui/marquee.tsx Marquee component
lib/utils.ts              cn() helper (no dependency)
```

## What Is Left to the Builder

- Exact demo copy and any product names.
- Whether the marquee speed defaults feel right at real viewport widths.
- Dark theme tokens and a brand accent, in a later pass.
- Adding Shadcn components on top of these tokens.

## Direction Change — 2026-11-20 (user request)

The user overrode the light-first direction after seeing the first build. These
points supersede the corresponding statements above:

- **Dark-first surface.** `#0d0d0d` page, `#141413` muted, `#1b1b19` sunken,
  ink `#f4f4ef`, hairlines `#2a2a25` / `#3d3d36`. The neon accent stays deferred.
- **Marquee never pauses.** Hover and focus no longer stop the track; the loop is
  continuous. The viewport is edge-masked (transparent -> opaque by 12% -> opaque
  to 88% -> transparent), so items fade in from the right, read at full colour in
  the middle, and fade out at the left.
- **Hover brightens.** A hovered item goes to pure white with a soft 18px glow.
- **Scroll reveals.** `[data-reveal]` elements fade and rise 24px over 700ms once
  they intersect, with optional `--reveal-delay` stagger. The behaviour is gated
  by `@media (scripting: enabled)` so no-JS visitors see everything, and is
  disabled under `prefers-reduced-motion`.
- **Branded "N" control.** The Next.js dev badge is disabled and replaced by a
  fixed bottom-left "N" back-to-top button that scales to 1.1 on hover.
- **Demo page.** The demo now uses the dark palette and the reveal system on
  every section, including the type specimens, price rows, and product cards.
- **16:9 stage.** A centered `90rem` shell with `1.5rem` / `2.5rem` gutters keeps
  the editorial column balanced at 1600x900 and 1920x1080. The hero is roughly
  `74svh` tall so the category strip and the next section peek into the first
  screen, and every marquee group is at least `100vw` wide with `space-around`
  distribution so the loop never opens a gap on wide displays.

## Editorial Storefront — 2026-11-25

The demo page is now a finished editorial storefront shell. This addendum records
the scope that sits on top of the typography and motion foundation.

### Pages and shell

- `/` is a long editorial homepage: announcement marquee, hero, category
  marquee, Spring Edit grid, approach, lookbook, atelier process, journal, and a
  private-fitting call to action.
- `/shop` lists the four pieces by category; `/shop/[slug]` is a statically
  generated product page with sizing, care, delivery, and related pieces.
- `/about`, `/journal`, `/care`, `/privacy`, `/terms`, and a branded 404 complete
  the navigation.
- A sticky, blurred `Header` and a multi-column `Footer` wrap every page.
  The footer carries the newsletter form, client-care links, and the oversized
  wordmark. The form validates locally and confirms in place; there is no list
  backend yet.
- Product pages use a reservation flow (`ReservePiece`) that opens a pre-filled
  email with the chosen size. There is deliberately no cart, checkout, auth, or
  database in this pass; those remain Phase 2/6 work.

### Imagery

- The four supplied photographs in `img/` are imported as static assets and
  rendered through `next/image` with `fill` and explicit `sizes`.
- The hero images use `preload` plus `loading="eager"` because they are the LCP
  candidate; everything below the fold stays lazy.
- Images sit in `aspect-[4/5]`, `16/10`, or `16/9` frames with `object-cover`, so
  the layout never shifts while the asset loads.

### Per-letter scramble

- `components/ui/scramble-hover.tsx` implements the requested interaction. The
  text is split into lines, words, and characters. Only the character under the
  pointer scrambles, through the configured `characters` set, for
  `maxIterations`; it then returns to its original glyph.
- API: `text`, `scrambleSpeed`, `maxIterations`, `useOriginalCharsOnly`,
  `characters`, `className`, `scrambledClassName`. Newlines in `text` create
  deliberate display lines.
- The animated characters are `aria-hidden`; a visually hidden copy of the full
  text keeps the headline readable to assistive technology. The interaction is
  disabled under `prefers-reduced-motion`.
- The homepage applies it to the hero headline, not the whole string and not
  right-to-left.
- Each character keeps the width of its original glyph while it scrambles. The
  original is reserved with a hidden `::before` (`content: attr(data-character)`)
  and the replacement is absolutely positioned over the same box, so swapping
  glyphs can never reflow the line. Chrome measurement before the fix showed the
  rest of the headline shifting by up to ~60px on every 32ms tick.
- The marquee transitions only `color`. Its glow is applied instantly, because
  transitioning `text-shadow` on the moving track forced a layout on every frame
  of the 150ms transition (~27 layouts) and made the marquee visibly stutter.

### Reveal and routing

- `RevealObserver` now watches the DOM with a `MutationObserver` in addition to
  the `IntersectionObserver`. The App Router keeps the layout mounted across
  route changes, so new page content must be registered when it enters the DOM.
- Above-the-fold content still paints synchronously; below-the-fold content
  still fades and rises once.
