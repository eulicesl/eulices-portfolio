import Image from "next/image";
import {
  novaMetrics,
  novaModules,
  novaArchitecture,
  novaShots,
} from "@/lib/content";
import { novaFallbackSnippet } from "@/lib/code";
import { RevealSection } from "./RevealSection";
import { CodeWindow } from "./CodeWindow";

export function NovaDeepDive() {
  return (
    <RevealSection id="nova">
      <div className="section-label">
        <span className="section-num">03</span>Deep dive · N.O.V.A.
      </div>
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
              <div className="value">
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

        <div style={{ marginBottom: 32 }}>
          <div className="subhead">Architecture</div>
          <ul className="arch-list">
            {novaArchitecture.map((line) => (
              <li key={line}>{renderArchLine(line)}</li>
            ))}
          </ul>
        </div>

        <div style={{ marginBottom: 32 }}>
          <div className="subhead">
            Apple Foundation Models → Ollama fallback
          </div>
          <CodeWindow
            code={novaFallbackSnippet.code}
            lang={novaFallbackSnippet.lang}
            fileName={novaFallbackSnippet.fileName}
            note={novaFallbackSnippet.note}
          />
        </div>

        <div>
          <div className="subhead">Running on device</div>
          <div className="nova-shots">
            {novaShots.map((shot) => (
              <figure className="nova-shot" key={shot.src}>
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={260}
                  height={563}
                  className="nova-shot-img"
                  sizes="(max-width: 640px) 140px, 200px"
                />
                <figcaption>
                  <span className="nova-shot-caption">{shot.caption}</span>
                  <span className="nova-shot-note">{shot.note}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </RevealSection>
  );
}

function renderValueWithDividers(value: string) {
  const parts = value.split(/\s·\s/);
  return parts.map((part, i) => (
    <span key={i}>
      {part}
      {i < parts.length - 1 && <span className="arrow-change">·</span>}
    </span>
  ));
}

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
          merged.push(
            <code key={`${idx}-${cIdx}-${pIdx}`}>{matches[pIdx]}</code>,
          );
        }
      });
      return merged;
    });
  });
  return out;
}
