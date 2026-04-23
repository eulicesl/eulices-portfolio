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
1. Preload the Fraunces font weight used by the hero `h1` (`<link rel="preload" as="font" crossorigin>`), or use the `adjustFontFallback` + size-adjust pattern to avoid the layout-invisible-text window. Note: the Next.js `priority` prop is only valid on `next/image`, so it doesn't apply here — this is a font-preload play, not an image-priority one.
2. Move Shiki-rendered code to a chunk that loads after hero, so the syntax theme doesn't block initial paint.
3. Convert phone screenshots to WebP, or let `next/image` serve AVIF automatically by ensuring the `Accept: image/avif` path is hit.

None of these are worth shipping as part of this redesign — they're cosmetic gains on an already-passing score. Logged here so they're not silently forgotten.

## How to reproduce

```bash
# From the repo root
mkdir -p lighthouse

# Pin the Lighthouse version to match the captured report (currently 13.1.0)
# and point URL at either production or a local `npm run build && npm run start`.
URL="${URL:-https://eulices-portfolio.vercel.app}"

npx -y lighthouse@13.1.0 "$URL" \
  --output=json \
  --output-path=./lighthouse/desktop-report.json \
  --preset=desktop \
  --chrome-flags="--headless=new" --quiet

npx -y lighthouse@13.1.0 "$URL" \
  --output=json \
  --output-path=./lighthouse/mobile-report.json \
  --chrome-flags="--headless=new" --quiet
```

Full JSON reports are in this directory: `desktop-report.json`, `mobile-report.json`.
