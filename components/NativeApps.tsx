import Image from "next/image";
import { nativeApps } from "@/lib/content";
import { RevealSection } from "./RevealSection";

export function NativeApps() {
  return (
    <RevealSection id="native">
      <div className="section-label">
        <span className="section-num">02</span>Native iOS apps · public beta
      </div>
      <h2>
        Built end-to-end. <em>Installable today.</em>
      </h2>
      <p className="section-sub">
        Two native iOS apps, architected and shipped to TestFlight. No
        developer-operated backend, no analytics pipeline, no tracking —
        privacy-first from the ground up.
      </p>

      <div className="native-stack">
        {nativeApps.map((app) => (
          <article className="native-app" key={app.name}>
            <div className="native-app-content">
              <div className="native-app-header">
                <Image
                  src={app.icon}
                  alt=""
                  width={56}
                  height={56}
                  className="app-icon"
                />
                <div>
                  <h3 className="native-app-name">{app.name}</h3>
                  <div className="native-app-stack">{app.stack}</div>
                </div>
              </div>
              <p className="native-app-desc">{app.description}</p>
              <a
                href={app.testflight}
                target="_blank"
                rel="noopener noreferrer"
                className="case-link"
              >
                Join the beta on TestFlight <span>↗</span>
              </a>
            </div>
            {app.screenshot ? (
              <div className="native-app-preview">
                <Image
                  src={app.screenshot}
                  alt={app.screenshotAlt}
                  width={260}
                  height={563}
                  className="native-app-shot"
                  sizes="(max-width: 820px) 220px, 320px"
                />
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </RevealSection>
  );
}
