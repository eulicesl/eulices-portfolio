import { stack, ciGates } from "@/lib/content";
import { RevealSection } from "./RevealSection";

export function Stack() {
  return (
    <RevealSection id="stack">
      <div className="section-label">
        <span className="section-num">05</span>Stack
      </div>
      <h2>Tools I reach for.</h2>
      <div className="stack-grid">
        {stack.map((s) => (
          <span
            key={s.label}
            className={`stack-pill${"accent" in s && s.accent ? " accent" : ""}`}
          >
            {s.label}
          </span>
        ))}
      </div>

      <div className="ci-section">
        <div className="subhead">CI / CD Pipeline</div>
        <div className="stack-grid">
          {ciGates.map((g) => (
            <span className="ci-pill" key={g}>
              {g}
            </span>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
