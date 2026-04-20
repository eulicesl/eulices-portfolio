# eulices.dev — portfolio

Source for my personal portfolio at [your-domain].

**Live:** https://your-domain.com
**Stack:** Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS · deployed on Vercel.

## Why this repo is public

A portfolio people can't inspect is a claim without a receipt. The source is here so anyone deciding whether to interview me can see how I actually structure code — component boundaries, type discipline, content/presentation separation.

## Architecture

```
app/
  layout.tsx      # Root layout + font preconnect
  page.tsx        # Composes sections
  globals.css     # Design tokens + component styles
components/
  Nav.tsx
  Hero.tsx
  CaseStudy.tsx       # Graham Dermatology × Omi, with metrics
  NativeApps.tsx      # Lumen + N.O.V.A. TestFlight cards
  NovaDeepDive.tsx    # Architecture details for N.O.V.A.
  OmiApps.tsx         # Four Omi-platform apps
  Stack.tsx
  Contact.tsx
  Footer.tsx
  RevealSection.tsx   # Client component — IntersectionObserver fade-in
lib/
  content.ts      # All site content as typed, `as const` data
```

### A few design choices worth calling out

**Content lives in `lib/content.ts`, not JSX.** Everything I want to update — metrics, app names, module lists — is in one typed file. Changing copy doesn't require touching layout. Swapping to an MDX or headless CMS source later is a drop-in replacement.

**Server components by default.** Only `RevealSection` is a client component, because only it needs `IntersectionObserver`. Every other section renders on the server and ships zero JS to the browser for content.

**Design tokens as CSS variables, not Tailwind theme values.** The palette is warm-dark editorial (`#0a0907` bg, `#d97757` accent) and Fraunces serif display — distinctive enough that standard Tailwind tokens would fight the aesthetic. Tokens live in `:root` so they're easy to fork.

**No framework overreach.** No state management library, no animation library, no icon library, no UI kit. Custom CSS, one `IntersectionObserver`, `React.Fragment`. About 60 prod dependencies I could name on request; zero incidental ones.

**Accessibility baseline.** `prefers-reduced-motion` disables all fade-up reveals. Semantic sectioning. Color contrast meets WCAG AA on all text surfaces.

## Local dev

```bash
npm install
npm run dev        # localhost:3000
npm run typecheck  # tsc --noEmit
npm run build      # production build
```

Node 20+ recommended.

## Deploy

Connected to Vercel — every push to `main` deploys to production. Preview URLs for PRs.

To deploy your own fork: `vercel` from the repo root, accept the defaults. Custom domain set via Vercel dashboard.

## License

Code is MIT. Content (case study quotes, metrics, app descriptions) is mine and not licensed for reuse.
