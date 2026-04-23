# Portfolio — Product Requirements Document

**Owner:** Eulices Lopez
**Status:** Shipped (v1 — redesign 2026-04-22)
**Last updated:** 2026-04-23

---

## 1. Why this document exists

A personal portfolio is a product. It has users, goals, constraints, and success criteria. Treating it as such — with a PRD — is itself part of the signal: it shows how I'd frame any other piece of work.

This document captures the *what* and *why*. The companion [`DESIGN.md`](./DESIGN.md) captures the *how*.

## 2. Users

Two primary audiences, in order of importance:

### 2.1 Senior hiring managers at AI / product companies
They read carefully. They're looking for evidence of: ownership, taste, technical range, ability to go from customer → code → production.
**They will:** scroll slowly, click through to the Omi case study, open the repo, read the README, read a few commit messages, skim PR descriptions.

### 2.2 Founders / recruiters triaging inbound
They scan fast. They need the headline and one proof point within 10 seconds.
**They will:** read the hero, glance at the metric tiles, bounce — or click through to contact.

### 2.3 Not audiences
- Consumer visitors browsing AI-assistant products — the two iOS apps are linked, but this site is not a product landing page.
- Prospective clients for freelance consulting — not open to that right now.

## 3. Goals

In priority order:

1. **Establish credibility for a Founding Engineer / Forward Deployed Engineer role.** The hero, case study, and NOVA deep dive are all in service of this. The quote from Dr. Shih is the strongest external validation and gets its own stage.
2. **Demonstrate full-stack + native range.** Python + FastAPI on the clinic AI; Swift + SwiftUI on Lumen; React Native + Swift modules on N.O.V.A.; the site itself is Next.js + React 19. The Stack section exists for this.
3. **Drive a qualified contact event.** One clear CTA pair in the hero, plus the dedicated Contact section at the end. "Qualified" means they've read at least the case study or NOVA section.
4. **Be evidence in itself.** Public repo, atomic commits, PR discipline, Lighthouse receipts, semantic HTML, WCAG AA contrast. A recruiter who inspects the repo should come away impressed by the craft, not just the copy.

## 4. Success criteria

Not tracked via analytics (site is analytics-free by design — see Constraints). Judged qualitatively via:

- Inbound contact rate on the roles I'm targeting.
- Whether the reader mentions the case study or NOVA in the first message.
- Whether they mention the site itself (copy, pacing, design) — a "this site is also good" comment signals the craft landed.

## 5. Non-goals

- Not a product marketing page. Autoplay video, 3D hero, decorative flourishes skipped.
- Not a blog. Articles would drift away from the evidence framing.
- Not a SEO-optimized capture funnel. No analytics, no tracking, no newsletter popup.
- Not multilingual. Current role target is English-speaking US-based teams.

## 6. Information architecture

Six sections, numbered 01–06, each making **one claim** with **one visual** and **one receipt**. Order is deliberate:

| # | Section | Claim | Receipt |
| --- | --- | --- | --- |
| 00 | Hero | "I find the problem, ship the product, and own it in production" | Six products, 2,200+ users |
| 01 | Case study | Real clinical workflow improved by an AI system I built | Omi's published case study + Dr. Shih's quote |
| 02 | Native apps | Two native iOS apps, architected and shipped | TestFlight links |
| 03 | NOVA deep dive | The native half of React Native is real Swift work | 1,800+ tests passing, 8 modules, live-device screenshots |
| 04 | Omi apps | Platform range, not just one-off | 4 apps, 2,200+ installs across them |
| 05 | Stack | Languages and tools with receipts | CI gate list |
| 06 | Contact | What I'm looking for, how to reach me | Email + GitHub + LinkedIn |

## 7. Constraints

- **Privacy-first.** No analytics, no tracking scripts, no third-party fonts served from CDN (all self-hosted via `next/font`). Fits the brand claim I make in the Native Apps section.
- **Accessibility: WCAG AA as the minimum.** See [`DESIGN.md`](./DESIGN.md#accessibility) for specifics. Never shipped a regression through `prefers-reduced-motion` or contrast.
- **Performance budget: Lighthouse 95+ on desktop, 90+ on mobile.** Current scores captured in [`../lighthouse/`](../lighthouse/).
- **Content is content.** Every number, quote, and installable count is real and attributable. No "1,000,000 developers" vibes-metrics.
- **Built with zero framework overreach.** No animation library, no icon library, no UI kit. Custom CSS, one `IntersectionObserver`, one Shiki pipeline. See [`DESIGN.md`](./DESIGN.md#philosophy).

## 8. Engineering principles

- **Conventional commits, atomic scope.** Each commit compiles, passes tests, and does one thing. Reads like a changelog.
- **Every change lands via PR.** No direct-to-main for trivial changes — the PR graph is portfolio evidence. See PR [#3](https://github.com/eulicesl/eulices-portfolio/pull/3) where this rule was corrected after I broke it.
- **Each PR has design rationale in the body.** What changed, why, tradeoffs considered.
- **Receipts over claims.** Lighthouse JSON in the repo. Commit messages cite flagged issues. External quotes link to their source.

## 9. Known gaps / roadmap

Tracked here so they're not silently forgotten:

1. **NOVA proof shots** — no capture yet for Live Activity / Dynamic Island / Vision OCR. These are the most distinctive architectural claims and deserve visible receipts.
2. **Lumen shots** — current three screenshots are all the same conversation at different timestamps. Need 2 additional distinct screens (conversation list + settings).
3. **Mobile LCP (3.3 s)** — the only Lighthouse metric below its "good" threshold. Candidate fix: preload the Fraunces weight used by the hero h1. Documented in [`../lighthouse/README.md`](../lighthouse/README.md).
4. **Nano AI → N.O.V.A. rebrand** in the private `nova-private` repo (6 remaining user-visible strings). Separate from this site; tracked privately.

## 10. Revision history

- **2026-04-23** — Initial PRD written alongside `DESIGN.md` as part of establishing senior-engineering documentation discipline for the portfolio repo.
- **2026-04-22** — Redesign v1 shipped (PR [#2](https://github.com/eulicesl/eulices-portfolio/pull/2), Apple-feel pass across 7 phases).
- **2026-04-20** — Original portfolio site shipped to Vercel.
