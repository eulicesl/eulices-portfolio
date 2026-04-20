import { caseStudy } from "@/lib/content";

export function Hero() {
  return (
    <section className="hero section">
      <div className="eyebrow">Applied AI Engineer · North Carolina</div>
      <h1>
        I ship <em>production AI</em> in regulated industries — and it stays
        shipped.
      </h1>
      <p className="lede">
        Six apps shipped — four on the Omi platform with{" "}
        <strong>2,200+ users</strong>, plus two native iOS apps in public beta
        on TestFlight (one with <strong>~5,000 LOC of custom Swift</strong> and
        a comprehensive test suite). A HIPAA-compliant scribe integrated into
        an EMR workflow and{" "}
        <strong>featured as a customer case study on Omi</strong>. Built with
        Python, FastAPI, Swift, and React Native against real production
        constraints.
      </p>
      <div className="cta-row">
        <a
          href={caseStudy.url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Read the case study <span className="arrow">→</span>
        </a>
        <a href="#contact" className="btn btn-secondary">
          Get in touch
        </a>
      </div>
    </section>
  );
}
