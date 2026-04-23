# eulices.dev — portfolio

Source for my personal portfolio at [eulices-portfolio.vercel.app](https://eulices-portfolio.vercel.app).

**Stack:** Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS · Shiki · deployed on Vercel.

## Why this repo is public

A portfolio people can't inspect is a claim without a receipt. The source is here so anyone deciding whether to interview me can see how I actually structure code — component boundaries, type discipline, motion + accessibility, commit hygiene, and the small decisions that add up.

The site itself is a portfolio piece. The audit trail is part of the work.

## Design goals

This is modeled on Apple's product-page aesthetic (apple.com/macbook-pro), adapted for a senior-engineer portfolio:

- **One claim per stage.** Each section makes a single point with a single visual and a single receipt. No grids-of-six.
- **Oversized editorial typography.** Fluid display scale via `clamp()` with a tracking ladder that tightens as the type gets bigger — the same spacing discipline SF Pro uses on apple.com.
- **Proof over polish.** Real code snippets (rendered with Shiki at build time), real screenshots, real metrics — no decorative Three.js or placeholder "Lorem Ipsum" energy.
- **Stagecraft, not scroll-jacking.** Reveal animations run through `IntersectionObserver` and are universally suppressed under `prefers-reduced-motion`. Nothing hijacks the user's scroll velocity.
- **Audit-friendly Git history.** Conventional commits. Atomic, revertable. Each PR tells a story with design rationale in the body.

## Architecture

```
app/
  layout.tsx          # Root layout, fonts, metadata, OG image link
  page.tsx            # Composes sections
  globals.css         # Design tokens + component styles
  opengraph-image.tsx # Edge-runtime OG image (1200×630)
  icon.svg            # Programmatic favicon
components/
  Nav.tsx
  Hero.tsx            # Display-xl stage, anchored scroll hint
  CaseStudy.tsx       # Graham Dermatology × Omi — poster metrics + pull-quote stage
  NativeApps.tsx      # Lumen + N.O.V.A. — alternating app stages with dominant phone shots
  NovaDeepDive.tsx    # N.O.V.A. internals — metrics, modules, architecture, code, proof row
  OmiApps.tsx         # Four Omi-platform apps
  Stack.tsx           # Primary stack + CI/CD receipts
  Contact.tsx
  Footer.tsx
  RevealSection.tsx   # IntersectionObserver fade-in
  CodeWindow.tsx      # Shiki-rendered code blocks (server component)
lib/
  content.ts          # All site content as typed, `as const` data
  code.ts             # Code snippets rendered by CodeWindow
```

### Design choices worth calling out

**Token-first CSS.** Everything that could drift — type scale, letter-spacing, vertical rhythm, chapter background modulations, motion durations/easings — lives in `:root` as CSS variables. Components consume tokens, never hard-coded values. This is what lets the redesign land in one place.

**Fluid type scale.** Seven steps from `--t-display-xl` (clamp 56→128px) to `--t-caption` (13px mono), each with its own letter-spacing token (`--tr-*`) tuned tighter at display sizes. Same discipline Apple uses on product pages.

**Content lives in `lib/content.ts`, not JSX.** Metrics, app names, module lists — all in one typed file. Changing copy doesn't require touching layout. Swapping to MDX or a headless CMS is a drop-in replacement.

**Server components by default.** Only `RevealSection` is a client component, because only it needs `IntersectionObserver`. `CodeWindow` renders Shiki HAST at build time via `hast-util-to-jsx-runtime` — no raw HTML string injection, no client-side syntax highlighter shipped to the browser.

**No framework overreach.** No state library, no animation library, no icon library, no UI kit. Custom CSS, one `IntersectionObserver`, one Shiki pipeline. 60 production dependencies I could name on request; zero incidental ones.

**Motion that respects users.**
- All animations use tokenized easings (`--ease-out-quart`, `--ease-out-expo`) and durations (`--dur-quick/med/slow/stage`).
- A universal `@media (prefers-reduced-motion: reduce)` block at the bottom of `globals.css` zeros out every `animation-duration` and `transition-duration` on the page. No per-component opt-in needed.
- No scroll-jacking, no parallax-everything, no autoplay video.

**Accessibility baseline.**
- Semantic sectioning (`<section>`, `<figure>`, `<figcaption>`, `<blockquote>`).
- `:focus-visible` rings tuned to accent color at 3px offset, never removed.
- `color-scheme: dark` honored by form controls + scrollbars.
- WCAG AA contrast verified on all text surfaces.
- `aria-hidden` on decorative arrows/icons.

## Local dev

```bash
npm install
npm run dev        # localhost:3000
npm run typecheck  # tsc --noEmit
npm run build      # production build + static generation
npm run lint
```

Node 20+ recommended.

## Deploy

Connected to Vercel — every push to `main` deploys to production. Preview URLs for PRs.

To deploy your own fork: `vercel` from the repo root, accept the defaults. Custom domain set via Vercel dashboard.

## Redesign log

The current design landed as PR [#2](https://github.com/eulicesl/eulices-portfolio/pull/2), shipped in six atomic phases on a single `redesign` branch:

1. **Foundation** — fluid type scale, tracking ladder, vertical-rhythm tokens, chapter + motion tokens, reduced-motion override. Opt-in only.
2. **Hero** — 100svh stage, display-xl headline, anchored scroll hint.
3. **Case study** — lifted metrics into a 2×2 poster grid, split Dr. Shih's quote into its own tall stage.
4. **Native apps** — each app its own 60svh stage with a 320px phone shot; odd/even alternation for rhythm.
5. **NOVA deep dive** — hero-scaled metrics with hairline grid, pill tags, bigger arch list, code window + in-the-wild shot row.
6. **Polish** — reveal motion upgraded to `--ease-out-expo` with 24px travel, README rewrite.

Each phase is a single commit with full rationale in the message body. Reads like a changelog.

## License

Code is MIT. Content (case study quotes, metrics, app descriptions, screenshots) is mine and not licensed for reuse.
