import { caseStudy, heroHighlights, profile } from "@/lib/content";
import { Stagger } from "./Stagger";

export function Hero() {
  return (
    <section className="hero section" id="top">
      <div className="hero-ambient" aria-hidden="true">
        <span className="hero-orb hero-orb-a" />
        <span className="hero-orb hero-orb-b" />
      </div>

      <div className="wrap hero-inner">
        <div className="eyebrow">{profile.eyebrow}</div>
        <h1>
          I find the problem, <em>ship the product</em>, and own it in
          production.
        </h1>
        <p className="lede">
          At a dermatology clinic seeing 70 patients a day, I identified the
          documentation bottleneck, built an AI scribe against it, and got it{" "}
          <strong>featured as a customer case study on Omi</strong>. Same-day
          chart completion moved from 60% to 95%. Since then:{" "}
          <strong>six AI products shipped</strong> — four Omi agents (
          <strong>2,200+ users</strong>) and two native iOS apps in public
          beta on TestFlight. I own every step: customer interview → prompt
          design → native module → deploy → iterate.
        </p>

        <Stagger className="hero-highlights" stagger={80}>
          {heroHighlights.map((h) => (
            <div className="hero-highlight stagger-child" key={h.label}>
              <span className="hero-highlight-value">{h.value}</span>
              <span className="hero-highlight-label">{h.label}</span>
            </div>
          ))}
        </Stagger>

        <div className="cta-row">
          <a
            href={caseStudy.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Read the case study <span className="arrow" aria-hidden="true">↗</span>
          </a>
          <a href="#contact" className="btn btn-secondary">
            Get in touch <span className="arrow" aria-hidden="true">→</span>
          </a>
        </div>
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
