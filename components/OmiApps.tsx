import { omiApps } from "@/lib/content";
import { RevealSection } from "./RevealSection";

export function OmiApps() {
  return (
    <RevealSection id="omi">
      <div className="section-label">On the Omi platform</div>
      <h2>
        Four apps. <em>2,200+ installs.</em>
      </h2>
      <p className="section-sub">
        Two clinical workflow tools for dermatology practices and two consumer
        AI assistants. Each one is live, installed, and getting used today.
      </p>

      <div className="apps">
        {omiApps.map((app) => (
          <div className="app" key={app.name}>
            <div className="app-name">{app.name}</div>
            <div className="app-desc">{app.description}</div>
            <div className="app-stats">
              <span className="stat">
                <strong>{app.installs}</strong> installs
              </span>
              {app.rating && (
                <span className="stat rating">
                  <strong>{app.rating}</strong> rating
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </RevealSection>
  );
}
