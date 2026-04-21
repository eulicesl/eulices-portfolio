import { caseStudy } from "@/lib/content";

export function Hero() {
  return (
    <section className="hero section" id="top">
      <div className="eyebrow">Founding Engineer · Forward Deployed · 2024–2026</div>
      <h1>
        I find the problem, <em>ship the product</em>, and own it in production.
      </h1>
      <p className="lede">
        At a dermatology clinic seeing 70 patients a day, I identified the
        documentation bottleneck, built an AI scribe against it, and got it{" "}
        <strong>featured as a customer case study on Omi</strong>. Same-day
        chart completion moved from 60% to 95%. Since then:{" "}
        <strong>six AI products shipped</strong> — four Omi agents (
        <strong>2,200+ users</strong>) and two native iOS apps in public beta
        on TestFlight. I own every step: customer interview → prompt design →
        native module → deploy → iterate.
      </p>
      <div className="cta-row">
        <a
          href={caseStudy.url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Read the case study <span className="arrow">↗</span>
        </a>
        <a href="#contact" className="btn btn-secondary">
          Get in touch <span className="arrow">→</span>
        </a>
      </div>
      <a
        href="#case-study"
        className="scroll-hint"
        aria-label="Scroll to case study"
      >
        <span>Scroll</span>
        <span className="scroll-hint-chev" aria-hidden="true">
          ↓
        </span>
      </a>
    </section>
  );
}
