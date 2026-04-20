import { caseStudy } from "@/lib/content";
import { RevealSection } from "./RevealSection";

export function CaseStudy() {
  return (
    <section className="section">
      <div className="section-label">Featured work</div>
      <h2>
        Graham Dermatology <em>×</em> Omi
      </h2>
      <p className="section-sub">
        Designed and deployed an always-on AI scribe for a dermatology clinic
        seeing 70 patients a day. Structured prompts, EMR-compatible note
        generation, and a real workflow that clinicians actually use.
        Deployed 2024–2025; case study published November 2025.
      </p>

      <RevealSectionInner>
        <div className="featured">
          <div className="featured-header">
            <div className="featured-title">
              AI scribing for a 70-patient/day dermatology clinic
            </div>
            <div className="featured-partner">Partner · Omi</div>
          </div>
          <p className="desc">{caseStudy.description}</p>

          <div className="metrics">
            {caseStudy.metrics.map((m) => (
              <div className="metric" key={m.label}>
                <div className="label">{m.label}</div>
                <div className="value">
                  {m.value}
                  {"after" in m && m.after ? (
                    <>
                      {" "}
                      <span className="arrow-change">→</span> {m.after}
                    </>
                  ) : null}
                </div>
              </div>
            ))}
          </div>

          <blockquote>
            {caseStudy.quote.text}
            <cite>— {caseStudy.quote.cite}</cite>
          </blockquote>

          <a
            href={caseStudy.url}
            target="_blank"
            rel="noopener noreferrer"
            className="case-link"
          >
            Full case study on omi.me <span>→</span>
          </a>
        </div>
      </RevealSectionInner>
    </section>
  );
}

// Inner reveal without adding another <section> wrapper
function RevealSectionInner({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
