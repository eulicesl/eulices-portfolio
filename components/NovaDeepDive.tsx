import { novaMetrics, novaModules, novaArchitecture } from "@/lib/content";
import { RevealSection } from "./RevealSection";

export function NovaDeepDive() {
  return (
    <RevealSection>
      <div className="section-label">Deep dive · N.O.V.A.</div>
      <h2>
        The <em>native</em> half of &ldquo;React Native.&rdquo;
      </h2>
      <p className="section-sub">
        Most &ldquo;React Native&rdquo; apps lean on JavaScript wrappers.
        N.O.V.A. ships 8 custom Swift modules — real platform integration, not
        Expo plugins — plus a comprehensive test suite guarding every change.
        Source is private while I finish cleaning it up; happy to share during
        interviews.
      </p>

      <div className="featured" style={{ marginTop: 32 }}>
        <div className="featured-header">
          <div className="featured-title">By the numbers</div>
          <div className="featured-partner">Verified · CI-gated</div>
        </div>

        <div className="metrics">
          {novaMetrics.map((m) => (
            <div className="metric" key={m.label}>
              <div className="label">{m.label}</div>
              <div
                className="value"
                style={m.label === "CI gates" ? { fontSize: 15 } : undefined}
              >
                {renderValueWithDividers(m.value)}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginBottom: 24 }}>
          <div className="subhead">Native iOS modules</div>
          <div className="building-tags">
            {novaModules.map((mod) => (
              <span className="tag" key={mod}>
                {mod}
              </span>
            ))}
          </div>
        </div>

        <div>
          <div className="subhead">Architecture</div>
          <ul className="arch-list">
            {novaArchitecture.map((line) => (
              <li key={line}>{renderArchLine(line)}</li>
            ))}
          </ul>
        </div>
      </div>
    </RevealSection>
  );
}

// Render "·" as orange accent dividers inside metric values
function renderValueWithDividers(value: string) {
  const parts = value.split(/\s·\s/);
  return parts.map((part, i) => (
    <span key={i}>
      {part}
      {i < parts.length - 1 && <span className="arrow-change">·</span>}
    </span>
  ));
}

// Wrap inline code-like tokens (novaai, .web.ts) in <code>
function renderArchLine(line: string) {
  const tokens = [/novaai/g, /\.web\.ts/g];
  let out: (string | React.ReactElement)[] = [line];
  tokens.forEach((re, idx) => {
    out = out.flatMap((chunk, cIdx) => {
      if (typeof chunk !== "string") return [chunk];
      const pieces = chunk.split(re);
      const matches = chunk.match(re) ?? [];
      const merged: (string | React.ReactElement)[] = [];
      pieces.forEach((p, pIdx) => {
        merged.push(p);
        if (pIdx < matches.length) {
          merged.push(<code key={`${idx}-${cIdx}-${pIdx}`}>{matches[pIdx]}</code>);
        }
      });
      return merged;
    });
  });
  return out;
}
