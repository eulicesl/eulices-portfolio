import { s } from "@/lib/redesign/cssString";

export default function NativeApps() {
  return (
      <section id="apps" data-screen-label="Native iOS apps" style={s("scroll-margin-top:72px;background:linear-gradient(180deg,#0a0a0b 0,rgba(10,10,11,0) 104px);padding:clamp(90px,13vh,170px) clamp(20px,5vw,72px);")}>
          <div style={s("max-width:1200px;margin:0 auto;")}>
            <div data-reveal style={s("opacity:0;transform:translateY(20px);transition:opacity .9s cubic-bezier(.16,1,.3,1),transform .9s cubic-bezier(.16,1,.3,1);display:flex;align-items:center;gap:14px;font-family:var(--font-mono),ui-monospace,monospace;font-size:13px;letter-spacing:0.04em;color:var(--ink-3);")}>
              <span style={s("color:var(--accent,#3b6fe0);")}>02</span><span style={s("width:28px;height:1px;background:var(--hair-2);")}></span>Native iOS · public beta
            </div>
            <h2 data-reveal style={s("opacity:0;transform:translateY(22px);transition:opacity .95s cubic-bezier(.16,1,.3,1) .06s,transform .95s cubic-bezier(.16,1,.3,1) .06s;margin:26px 0 0;font-size:clamp(2.1rem,5vw,4rem);line-height:1.04;letter-spacing:-0.03em;font-weight:600;max-width:18ch;")}>
              Built end-to-end. <span style={s("font-style:italic;font-weight:500;color:var(--ink-2);")}>Installable today.</span>
            </h2>
            <p data-reveal style={s("opacity:0;transform:translateY(20px);transition:opacity .95s cubic-bezier(.16,1,.3,1) .12s,transform .95s cubic-bezier(.16,1,.3,1) .12s;margin:22px 0 0;max-width:60ch;font-size:clamp(1.02rem,1.5vw,1.2rem);line-height:1.6;color:var(--ink-2);")}>
              Two native iOS apps, architected and shipped to TestFlight. No operated backend, no analytics pipeline, no tracking &mdash; privacy-first from the ground up.
            </p>
      
      
            <div data-reveal style={s("opacity:0;transform:translateY(26px);transition:opacity 1s cubic-bezier(.16,1,.3,1),transform 1s cubic-bezier(.16,1,.3,1);margin-top:72px;display:grid;grid-template-columns:1fr 0.85fr;gap:clamp(28px,5vw,72px);align-items:center;")}>
              <div>
                <div style={s("display:flex;align-items:center;gap:16px;")}>
                  <img src="/apps/lumen-icon.png" alt="Lumen icon" style={s("width:62px;height:62px;border-radius:14px;box-shadow:0 6px 18px rgba(20,20,25,0.12);")} />
                  <div>
                    <h3 style={s("margin:0;font-size:1.7rem;font-weight:600;letter-spacing:-0.02em;")}>Lumen Personal AI</h3>
                    <div style={s("margin-top:4px;font-family:var(--font-mono),ui-monospace,monospace;font-size:12.5px;color:var(--ink-3);")}>SwiftUI · iOS 26 · iPadOS 26</div>
                  </div>
                </div>
                <p style={s("margin:24px 0 0;font-size:1.08rem;line-height:1.6;color:var(--ink-2);max-width:48ch;")}>Privacy-first AI assistant for iPhone and iPad. Apple Intelligence on-device by default, optional Ollama local or cloud. Conversation search, memories, document import, voice input, image attachments, and built-in tools.</p>
                <a href="https://testflight.apple.com/join/v8mYExkK" target="_blank" rel="noopener" style={s("margin-top:26px;text-decoration:none;display:inline-flex;align-items:center;gap:8px;background:var(--btn-bg);color:var(--btn-ink);font-size:14.5px;font-weight:500;padding:12px 22px;border-radius:999px;transition:transform .2s,background .2s;")} data-hover="background:#000;transform:translateY(-2px);">Join the beta on TestFlight <span style={s("opacity:.7;")}>&#8599;</span></a>
              </div>
              <div data-tilt style={s("justify-self:center;position:relative;border-radius:46px;padding:11px;background:linear-gradient(160deg,#26262a,#0e0e10);box-shadow:0 30px 70px -24px rgba(20,20,25,0.5),0 0 0 1px rgba(20,20,25,0.06);max-width:300px;")}>
                <img data-zoom src="/apps/lumen-01-conversation.png" alt="Lumen conversation view on iPhone" style={s("display:block;width:100%;border-radius:36px;cursor:zoom-in;")} />
                <div data-glare style={s("position:absolute;inset:0;border-radius:46px;pointer-events:none;opacity:0;transition:opacity .3s ease;mix-blend-mode:screen;")}></div>
              </div>
            </div>
      
      
            <div data-reveal style={s("opacity:0;transform:translateY(26px);transition:opacity 1s cubic-bezier(.16,1,.3,1),transform 1s cubic-bezier(.16,1,.3,1);margin-top:72px;display:grid;grid-template-columns:0.85fr 1fr;gap:clamp(28px,5vw,72px);align-items:center;")}>
              <div data-tilt style={s("justify-self:center;position:relative;border-radius:46px;padding:11px;background:linear-gradient(160deg,#26262a,#0e0e10);box-shadow:0 30px 70px -24px rgba(20,20,25,0.5),0 0 0 1px rgba(20,20,25,0.06);max-width:300px;order:2;")}>
                <img data-zoom src="/apps/nova-01.png" alt="N.O.V.A. home screen on iPhone" style={s("display:block;width:100%;border-radius:36px;cursor:zoom-in;")} />
                <div data-glare style={s("position:absolute;inset:0;border-radius:46px;pointer-events:none;opacity:0;transition:opacity .3s ease;mix-blend-mode:screen;")}></div>
              </div>
              <div>
                <div style={s("display:flex;align-items:center;gap:16px;")}>
                  <img src="/apps/nova-icon.png" alt="N.O.V.A. icon" style={s("width:62px;height:62px;border-radius:14px;box-shadow:0 6px 18px rgba(20,20,25,0.12);")} />
                  <div>
                    <h3 style={s("margin:0;font-size:1.7rem;font-weight:600;letter-spacing:-0.02em;")}>N.O.V.A. AI</h3>
                    <div style={s("margin-top:4px;font-family:var(--font-mono),ui-monospace,monospace;font-size:12.5px;color:var(--ink-3);")}>React Native · Expo SDK 54 · Swift modules</div>
                  </div>
                </div>
                <p style={s("margin:24px 0 0;font-size:1.08rem;line-height:1.6;color:var(--ink-2);max-width:48ch;")}>Private-by-default iOS AI assistant. Dual on-device inference (Apple Foundation Models + Ollama), 8 custom Swift modules, Live Activities, Vision OCR. Comprehensive test suite, ~5,000 LOC of native Swift.</p>
                <a href="https://testflight.apple.com/join/FnAEfXf2" target="_blank" rel="noopener" style={s("margin-top:26px;text-decoration:none;display:inline-flex;align-items:center;gap:8px;background:var(--btn-bg);color:var(--btn-ink);font-size:14.5px;font-weight:500;padding:12px 22px;border-radius:999px;transition:transform .2s,background .2s;")} data-hover="background:#000;transform:translateY(-2px);">Join the beta on TestFlight <span style={s("opacity:.7;")}>&#8599;</span></a>
              </div>
            </div>
          </div>
        </section>
  );
}
