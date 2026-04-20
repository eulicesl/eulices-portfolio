import { stack } from "@/lib/content";
import { RevealSection } from "./RevealSection";

export function Stack() {
  return (
    <RevealSection>
      <div className="section-label">Stack</div>
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
    </RevealSection>
  );
}
