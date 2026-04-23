# Lighthouse receipts

Raw audit output for the production deploy. Kept in-repo so the portfolio's performance/accessibility claims are auditable rather than asserted.

## Latest run

- **URL:** https://eulices-portfolio.vercel.app
- **Captured:** 2026-04-23
- **Commit:** `ce29fdc` (`fix(a11y): wrap body sections in <main> landmark`)
- **Tool:** Lighthouse 13.1.0, headless Chrome, default throttling

### Scores

| Category | Desktop | Mobile |
| --- | :---: | :---: |
| Performance | **100** | **91** |
| Accessibility | **100** | **100** |
| Best Practices | **100** | **100** |
| SEO | **100** | **100** |

### Mobile Core Web Vitals

| Metric | Value | Threshold (good) |
| --- | :---: | :---: |
| First Contentful Paint | 945 ms | ≤ 1.8 s ✅ |
| Largest Contentful Paint | 3.3 s | ≤ 2.5 s ⚠️ |
| Total Blocking Time | 3 ms | ≤ 200 ms ✅ |
| Cumulative Layout Shift | 0.000 | ≤ 0.1 ✅ |
| Speed Index | 3.7 s | ≤ 3.4 s ⚠️ |

### Remaining opportunities

The mobile perf 91 is almost entirely framework overhead:

- `legacy-javascript-insight` — Next.js ships some legacy syntax for broad browser support.
- `unused-javascript` — route-level chunks include code paths that aren't used on `/`.
- `render-blocking-insight` — Fraunces + Geist are self-hosted via `next/font` but still require a render pass.
- `image-delivery-insight` — phone screenshots could compress further; raw PNGs > `next/image`-generated AVIF fallback.

LCP (3.3 s on mobile) is the single biggest lever. Candidates for a future optimization pass:
1. Use `priority` on the hero headline's parent element (or preload the font asset used by `h1`).
2. Move Shiki-rendered code to a chunk that loads after hero.
3. Convert phone screenshots to WebP or let `next/image` serve AVIF.

None of these are worth shipping as part of this redesign — they're cosmetic gains on an already-passing score. Logged here so they're not silently forgotten.

## How to reproduce

```bash
# From the repo root
mkdir -p lighthouse
npx lighthouse https://eulices-portfolio.vercel.app \
  --output=json \
  --output-path=./lighthouse/desktop-report.json \
  --preset=desktop \
  --chrome-flags="--headless=new" --quiet

npx lighthouse https://eulices-portfolio.vercel.app \
  --output=json \
  --output-path=./lighthouse/mobile-report.json \
  --chrome-flags="--headless=new" --quiet
```

Full JSON reports are in this directory: `desktop-report.json`, `mobile-report.json`.
