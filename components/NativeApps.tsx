import { nativeApps } from "@/lib/content";
import { RevealSection } from "./RevealSection";

export function NativeApps() {
  return (
    <RevealSection id="native">
      <div className="section-label">Native iOS apps · public beta</div>
      <h2>
        Built end-to-end. <em>Installable today.</em>
      </h2>
      <p className="section-sub">
        Two native iOS apps, architected and shipped to TestFlight. No
        developer-operated backend, no analytics pipeline, no tracking —
        privacy-first from the ground up.
      </p>

      <div className="apps">
        {nativeApps.map((app) => (
          <div className="app" key={app.name}>
            <div className="app-name">{app.name}</div>
            <div className="app-desc">{app.description}</div>
            <div className="app-stats">
              <span className="stat">{app.stack}</span>
            </div>
            <a
              href={app.testflight}
              target="_blank"
              rel="noopener noreferrer"
              className="case-link"
            >
              Join the beta on TestFlight <span>↗</span>
            </a>
          </div>
        ))}
      </div>
    </RevealSection>
  );
}
