import { caseStudy } from "@/lib/content";
import { RevealSection } from "./RevealSection";

export function CaseStudy() {
  return (
    <RevealSection id="case-study">
      <div className="section-label">
        <span className="section-num">01</span>Featured work
      </div>
      <h2>
        Graham Dermatology <em>×</em> Omi
      </h2>
      <p className="section-sub">
        Designed and deployed an always-on AI scribe for a dermatology clinic
        seeing 70 patients a day. Structured prompts, EMR-compatible note
        generation, and a real workflow that clinicians actually use.
        Deployed 2024–2025; case study published November 2025.
      </p>

      <div className="metrics-poster" aria-label="Clinic outcomes">
        {caseStudy.metrics.map((m) => (
          <figure className="metric-card" key={m.label}>
            <figcaption className="metric-card-label">{m.label}</figcaption>
            <div className="metric-card-value">
              <span className="metric-card-before">{m.value}</span>
              {"after" in m && m.after ? (
                <>
                  <span className="metric-card-arrow" aria-hidden="true">
                    →
                  </span>
                  <span className="metric-card-after">{m.after}</span>
                </>
              ) : null}
            </div>
          </figure>
        ))}
      </div>

      <div className="featured">
        <div className="featured-header">
          <div className="featured-title">
            AI scribing for a 70-patient/day dermatology clinic
          </div>
          <div className="featured-partner">Partner · Omi</div>
        </div>
        <p className="desc">{caseStudy.description}</p>
        <a
          href={caseStudy.url}
          target="_blank"
          rel="noopener noreferrer"
          className="case-link"
        >
          Full case study on omi.me <span>↗</span>
        </a>
      </div>

      <figure className="quote-stage">
        <blockquote className="pull-quote">
          {caseStudy.quote.text}
        </blockquote>
        <figcaption className="pull-quote-cite">
          — {caseStudy.quote.cite}
        </figcaption>
      </figure>
    </RevealSection>
  );
}
