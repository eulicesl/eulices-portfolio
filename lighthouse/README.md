# Lighthouse receipts

Raw audit output for the production deploy. Kept in-repo so the portfolio's performance/accessibility claims are auditable rather than asserted.

## Latest run

- **URL:** https://eulices-portfolio.vercel.app
- **Captured:** 2026-04-24
- **Commit:** `32758b2` (`perf(motion): add will-change:opacity to guarantee compositor promotion`)
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
| First Contentful Paint | 970 ms | ≤ 1.8 s ✅ |
| Largest Contentful Paint | 3.3 s | ≤ 2.5 s ⚠️ |
| Total Blocking Time | 1 ms | ≤ 200 ms ✅ |
| Cumulative Layout Shift | 0.000 | ≤ 0.1 ✅ |
| Speed Index | 3.7 s | ≤ 3.4 s ⚠️ |

### Desktop Core Web Vitals

| Metric | Value | Threshold (good) |
| --- | :---: | :---: |
| First Contentful Paint | 351 ms | ≤ 1.8 s ✅ |
| Largest Contentful Paint | 747 ms | ≤ 2.5 s ✅ |
| Total Blocking Time | 0 ms | ≤ 200 ms ✅ |
| Cumulative Layout Shift | 0.000 | ≤ 0.1 ✅ |

### Remaining opportunities

The mobile perf 91 is framework + Lighthouse-simulation overhead:

- `legacy-javascript-insight` — Next.js ships some legacy syntax for broad browser support.
- `unused-javascript` — route-level chunks include code paths that aren't used on `/`.
- `render-blocking-insight` — Fraunces + Geist are self-hosted via `next/font` but still require a render pass.
- `image-delivery-insight` — phone screenshots could compress further; raw PNGs > `next/image`-generated AVIF fallback.

### LCP investigation — what was tried and what stuck

Mobile LCP sits at 3.3 s. PRs [#5](https://github.com/eulicesl/eulices-portfolio/pull/5) and [#6](https://github.com/eulicesl/eulices-portfolio/pull/6) landed two defensible perf changes aimed at moving this metric:

1. **PR #5** — Fraunces `display: "swap"` → `display: "optional"`. Rationale: if the h1 is LCP, forcing fallback inside the block window pins LCP at FCP.
2. **PR #6** — `.dot` pulse animation restricted to `opacity` + `will-change: opacity`. Rationale: animated `box-shadow` fires paint events that register with Chrome's LCP algorithm.

**Both landed. Neither moved the lab metric.** The \`lcp-breakdown-insight\` audit continues to report the LCP element as \`body > nav.nav-bar > div.wrap > span.nav-status\` even after the pulse was confined to the compositor. Lighthouse's simulated-Slow-4G measurement appears to pin LCP on the nav-status span regardless of compositor optimizations — possibly because the LCP algorithm treats opacity oscillations as element "re-rendering" events even when they run purely on the compositor layer.

Both PRs are kept because each is correct on its own merits: `display: "optional"` is the right choice when text-LCP is a real risk on slow networks, and compositor-safe animation (opacity-only with `will-change`) is best practice regardless of this particular LCP outcome.

**Further levers that would likely move the Lighthouse number but weren't shipped:**

1. Remove the nav pulse animation entirely. The element is decorative and not core to the design. Would eliminate the animated-element LCP candidate — at the cost of the subtle "availability" motion cue.
2. Move the availability indicator out of the top nav (below the fold), so whatever it does doesn't interact with initial-viewport LCP.
3. Reduce font payload by dropping the SOFT axis or splitting italic into a deferred load, at real editorial-typography cost.
4. Convert phone screenshots to WebP/AVIF (moderate effort; probably helps Speed Index more than LCP).

**Decision:** mobile Perf 91 is already in Lighthouse's "Good" range (≥ 90). The remaining cost/value ratio is poor — each further lever trades visible editorial or brand value for measurably-nothing-in-practice gains. Logged here so the next person (or next-me) doesn't re-enter the same loop without this context.

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
