import { caseStudy } from "@/lib/content";

export function Hero() {
  return (
    <section className="hero section">
      <div className="eyebrow">Applied AI Engineer · North Carolina</div>
      <h1>
        I build <em>privacy-first AI products</em> and production-grade mobile
        systems.
      </h1>
      <p className="lede">
        From deployed clinical workflows to native iOS assistants, I focus on
        real product value, rigorous architecture, and codebases meant to last.
        That includes a HIPAA-compliant scribe featured by Omi as a customer
        case study, plus two public TestFlight apps, including N.O.V.A. with
        <strong> ~5,160 LOC of custom Swift</strong> and a
        <strong> 1,885-test suite</strong>.
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
