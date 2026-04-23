# Portfolio — Design System Reference

Companion to [`PRD.md`](./PRD.md). This document is the *how*: the tokens, patterns, and decisions behind the site.

**Status:** Shipped (v1 redesign, 2026-04-22 → 2026-04-23)
**Source of truth:** [`app/globals.css`](../app/globals.css) — every token defined here lives in `:root` and has a consumer in a component.

---

## Philosophy

This design is modeled on [apple.com/macbook-pro](https://www.apple.com/macbook-pro/), adapted for a senior-engineer portfolio. The goal is not to *look* like Apple — it's to apply the discipline Apple applies:

1. **One claim per stage.** Every section makes a single point with a single visual.
2. **Oversized editorial typography.** Display type at fluid `clamp()` sizes with a tracking ladder that tightens at larger scales.
3. **Proof over polish.** Real code (Shiki at build time), real screenshots, real metrics. No decorative filler.
4. **Stagecraft, not scroll-jacking.** Motion is intentional, gated by IntersectionObserver, universally suppressed under `prefers-reduced-motion`.
5. **No framework overreach.** Custom CSS. One client component for reveal motion. One HAST pipeline for code. Everything else is server-rendered.

Things we explicitly do not do, even though Apple does them: autoplay video, 3D hero, parallax-on-everything, scroll-jacking, decorative gradients as wallpaper. Those require infinite production budget and a consumer product to sell; we have neither.

---

## Token architecture

All tokens live in `:root` in [`app/globals.css`](../app/globals.css). Components consume tokens via `var(--token-name)` — never hard-coded values. This is what makes a redesign land in one file instead of twelve.

### Color — foreground

| Token | Value | Purpose | Contrast vs `--bg` |
| --- | --- | --- | --- |
| `--fg` | `#f2ede3` | Primary text | 16.2 |
| `--fg-muted` | `#958d7e` | Secondary text, captions | 6.06 |
| `--fg-dim` | `#867e6e` | Tertiary (labels, metadata, footer) | 4.95 |
| `--accent` | `#d97757` | Italic emphasis, CTAs, section numbers | 6.9 |
| `--accent-hover` | `#e48865` | Hover state on primary CTA | — |
| `--accent-soft` | `rgba(217, 119, 87, 0.12)` | Inline `<code>` background | — |

All foreground tokens pass WCAG AA (≥ 4.5:1) against every chapter background. `--fg-dim` was tuned specifically to clear 4.5:1 on the darkest chapter bg (`#100d09` → 4.82:1). See commit `e4f85a6` for the contrast audit.

### Color — background

| Token | Value | Role |
| --- | --- | --- |
| `--bg` | `#0a0907` | Page default, neutral sections |
| `--bg-raised` | `#14110d` | Card surfaces (`.featured`, `.stack-pill`, `.metric`) |
| `--bg-blur` | `rgba(10, 9, 7, 0.72)` | Sticky nav gradient target |
| `--border` | `#26211a` | Primary dividers, card borders |
| `--border-soft` | `#1a1612` | Hairline section separators |

### Chapter backgrounds

Subtle warm/cool modulations applied as **punctuation between sections**, never as wallpaper. Four tokens + matching `.chapter-a..d` + `[data-chapter="a..d"]` selectors.

| Token | Value | Feel | Applied to |
| --- | --- | --- | --- |
| `--chapter-a` | `#0a0907` | Baseline (same as `--bg`) | Default |
| `--chapter-b` | `#100d09` | Warm | CaseStudy, OmiApps |
| `--chapter-c` | `#07070b` | Cool | NovaDeepDive (dev-internals feel) |
| `--chapter-d` | `#140f0a` | Strong warm | Reserved for accent sections |

Chapter assignment is opinionated: warm for editorial/product, cool for technical internals. See [`PRD.md#information-architecture`](./PRD.md#6-information-architecture) for the section order.

### Typography — fluid scale

Seven steps, each with a matching `--tr-*` letter-spacing token that tightens as the type grows:

| Token | Min | Max | Tracking | Role |
| --- | --- | --- | --- | --- |
| `--t-display-xl` | 56 px | 128 px | `-0.035em` | Hero h1 |
| `--t-display-lg` | 44 px | 96 px | `-0.035em` | Reserved |
| `--t-display-md` | 36 px | 72 px | `-0.035em` | Section h2 |
| `--t-headline` | 28 px | 48 px | `-0.022em` | Pull quote, native-app name, NOVA metric values |
| `--t-title` | 22 px | 32 px | `-0.014em` | Reserved (future use) |
| `--t-body-lg` | 18 px | 21 px | `-0.003em` | Lede, section-sub, app description, arch list |
| `--t-body` | 17 px | 17 px | `-0.003em` | Reserved base body size |
| `--t-caption` | 13 px | 13 px | `0.02em` | Labels, section num, mono captions |

Utility classes `.t-display-xl`, `.t-display-lg`, …, `.t-caption` apply the full token bundle (size + tracking + font-family + line-height). Prefer using the component-level rule where possible; utilities are for one-offs.

### Vertical rhythm

| Token | Value | Purpose |
| --- | --- | --- |
| `--stage-tall` | `100svh` | Hero stage |
| `--stage-md` | `80svh` | Native-app per-app stage |
| `--stage-sm` | `60svh` | Quote stage, fallback mobile hero |
| `--section-y` | `clamp(80px, 12vw, 160px)` | Reserved for future tall sections |
| `--section-y-sm` | `clamp(56px, 8vw, 96px)` | Default `.section` padding |

`svh` (small viewport height) is used instead of `vh` to avoid the iOS address-bar jump that `vh` causes.

### Motion

Four durations, three easings. All motion runs through the tokenized system, so `prefers-reduced-motion` can zero them in one block.

| Token | Value | Typical use |
| --- | --- | --- |
| `--dur-quick` | `200ms` | Hover transitions, link color shifts |
| `--dur-med` | `400ms` | Bg color transitions between chapters |
| `--dur-slow` | `700ms` | Reserved |
| `--dur-stage` | `900ms` | RevealSection entry |
| `--ease-out-quart` | `cubic-bezier(0.25, 1, 0.5, 1)` | Hero fade-ups, hover transitions |
| `--ease-out-expo` | `cubic-bezier(0.16, 1, 0.3, 1)` | Stage reveal (more dramatic tail) |
| `--ease-in-out-quart` | `cubic-bezier(0.76, 0, 0.24, 1)` | Scroll-hint bounce |

### Radii + layout

| Token | Value | Role |
| --- | --- | --- |
| `--r-xs` | `4px` | Inline `<code>` pills, focus rings |
| `--r-sm` | `6px` | Stack pills, small cards |
| `--r-md` | `10px` | Code window, mobile featured card |
| `--r-lg` | `16px` | Featured card, metrics-poster container |
| `--r-pill` | `999px` | CTA buttons, partner/tag pills |
| `--wrap-max` | `760px` | Default content measure |
| `--wrap-wide` | `1120px` | Reserved for future poster-scale stages |
| `--wrap-pad` | `32px` | Desktop gutter (steps down to 28/22 at breakpoints) |

---

## Components

The architecture is flat: one folder of server components with a single client component for reveal motion and a single server component for syntax-highlighted code.

| Component | Type | Role |
| --- | --- | --- |
| `Nav` | Server | Sticky top nav with skip link target |
| `Hero` | Server | 100svh hero stage |
| `CaseStudy` | Server | Omi case study — metrics poster + featured card + quote stage |
| `NativeApps` | Server | Two alternating app stages with dominant phone shots |
| `NovaDeepDive` | Server | Metrics + modules + arch list + code window + in-the-wild shot row |
| `OmiApps` | Server | Platform gallery (4 apps, 2x2) |
| `Stack` | Server | Primary stack + CI/CD pills |
| `Contact` | Server | Links grid + role-seeking note |
| `Footer` | Server | Copyright + build credits |
| `RevealSection` | **Client** | IntersectionObserver fade-in wrapper; accepts `chapter` prop |
| `CodeWindow` | Server | Shiki → HAST → React (no raw HTML-string injection) |

**Why server-first:** the entire content surface is static. Shipping `IntersectionObserver` as the only JS and Shiki's HAST as the only build-time processing keeps the first-load bundle at ~102 kB.

---

## Accessibility

Baseline commitments:

- **Semantic landmarks.** `<nav aria-label="Primary">`, `<main id="main-content">`, `<footer>`, plus a `.skip-link` as the first focusable element on the page.
- **WCAG AA contrast** on every text surface. Audited per chapter bg (worst case `--fg-dim` on `--chapter-b` = 4.82:1 ≥ 4.5 threshold).
- **Visible focus rings** via `:focus-visible` on every interactive element. Never `outline: none`.
- **`prefers-reduced-motion`** consolidated into one authoritative `@media` block that zeros `animation-delay`, `animation-duration`, `animation-iteration-count`, `transition-delay`, `transition-duration`, and `scroll-behavior`, and forces `.reveal` to visible as a hydration-fail fallback.
- **ARIA minimalism.** Use semantic HTML; reach for ARIA only when HTML alone is insufficient. Current uses: `aria-label="Primary"` on nav, `aria-hidden="true"` on decorative arrows, `aria-label` on the scroll hint.
- **Image alt text** is descriptive when the image carries information (screenshots), empty (`alt=""`) when purely decorative (app icons next to a labeled heading).
- **Copy discipline.** Headings are nested h1 → h2 only. No h3+ yet. No heading-skipping.

Current Lighthouse accessibility score: **100** on both desktop and mobile (post-`<main>` landmark fix, captured 2026-04-23).

### Font-loading tradeoff

Fraunces is loaded with `display: "optional"` rather than `"swap"`. This prioritizes LCP on the Lighthouse mobile profile (Slow 4G), where the italic variable file (~149 KB) otherwise stretches Largest Contentful Paint to ~3.3 s.

With `"optional"`, the browser enforces a tight ~100 ms block window; if Fraunces hasn't arrived, it uses the size-adjusted system-serif fallback for that session. On every viewport with a reasonable network and every repeat visit (font cached), Fraunces loads within the window and renders as designed.

The cost: slow-mobile first-time visitors see the system-serif fallback hero instead of Fraunces until their next visit. That's a deliberate tradeoff — LCP is an SEO/perceived-performance signal that matters, and the primary audience (senior hiring managers on fast desktop/laptop networks) always gets Fraunces. Geist and JetBrains Mono stay on `"swap"` because their smaller file sizes never miss the block window.

Revisit this decision if: (a) the font files shrink enough to reliably land inside a "swap" budget, or (b) mobile-first-time-visitor UX becomes a priority over LCP scoring.

---

## Responsive strategy

Mobile-first in intent, desktop-first in execution (progressive narrowing). Breakpoints:

| Width | What changes |
| --- | --- |
| ≥ 1024px | Default layout |
| ≤ 1024px | `.wrap` / `.wrap-wide` gutter narrows 32 → 28 |
| ≤ 820px | Native-app stages collapse to stacked; shot moves to top |
| ≤ 720px | Quote stage and featured card tighten; metrics drop to 1 col |
| ≤ 640px | Hero falls back to `--stage-md`; scroll-hint drops to 32px from bottom; outer gutters 28 → 22 |
| ≤ 480px | Nova proof shots stack to single column |

No component tries to render identically at all widths; each has a defined collapse behavior.

---

## Design do's and don'ts

### Do

- Consume tokens. `var(--t-display-md)`, not `font-size: 72px`.
- One claim per stage. If a section grows to two equal-weight points, split it.
- Use `figure` / `figcaption` / `blockquote` when the content is what they describe.
- Check contrast against the chapter bg, not just `--bg`.
- Write the commit message rationale before you start editing.

### Don't

- Don't hard-code colors or sizes that a token could cover.
- Don't decorate without purpose. A gradient is punctuation, not wallpaper.
- Don't add a component-level `@media (prefers-reduced-motion)` — the universal block handles it.
- Don't ship an animation without a tokenized duration + easing.
- Don't inject raw HTML strings into React. Use HAST → JSX runtime (see `CodeWindow.tsx` for the safe pattern).

---

## Revision history

- **2026-04-23** — Initial DESIGN.md written alongside [`PRD.md`](./PRD.md) to document the token system and patterns landed in the v1 redesign.
- **2026-04-22** — v1 redesign shipped across 7 phases ([PR #2](https://github.com/eulicesl/eulices-portfolio/pull/2)) — typographic scale, chapter system, motion tokens, full-bleed sections, metric poster, quote stage.
