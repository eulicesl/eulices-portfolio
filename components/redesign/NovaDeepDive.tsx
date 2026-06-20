import { s } from "@/lib/redesign/cssString";

export default function NovaDeepDive() {
  return (
      <section id="nova" data-screen-label="N.O.V.A. deep dive" style={s("scroll-margin-top:72px;background:linear-gradient(180deg,var(--page) 0,rgba(10,10,11,0) 110px),#0a0a0b;color:#f5f4f2;padding:clamp(90px,13vh,170px) clamp(20px,5vw,72px);")}>
          <div style={s("max-width:1200px;margin:0 auto;")}>
            <div data-reveal style={s("opacity:0;transform:translateY(20px);transition:opacity .9s cubic-bezier(.16,1,.3,1),transform .9s cubic-bezier(.16,1,.3,1);display:flex;align-items:center;gap:14px;font-family:var(--font-mono),ui-monospace,monospace;font-size:13px;letter-spacing:0.04em;color:#76757c;")}>
              <span style={s("color:var(--accent,#3b6fe0);")}>03</span><span style={s("width:28px;height:1px;background:rgba(255,255,255,0.2);")}></span>Deep dive · N.O.V.A.
            </div>
            <h2 data-reveal style={s("opacity:0;transform:translateY(22px);transition:opacity .95s cubic-bezier(.16,1,.3,1) .06s,transform .95s cubic-bezier(.16,1,.3,1) .06s;margin:26px 0 0;font-size:clamp(2.1rem,5vw,4rem);line-height:1.04;letter-spacing:-0.03em;font-weight:600;max-width:16ch;")}>
              The <span style={s("font-style:italic;font-weight:400;color:#a1a0a6;")}>native</span> half of &ldquo;React Native.&rdquo;
            </h2>
            <p data-reveal style={s("opacity:0;transform:translateY(20px);transition:opacity .95s cubic-bezier(.16,1,.3,1) .12s,transform .95s cubic-bezier(.16,1,.3,1) .12s;margin:22px 0 0;max-width:62ch;font-size:clamp(1.02rem,1.5vw,1.2rem);line-height:1.6;color:#b5b4ba;")}>
              Most &ldquo;React Native&rdquo; apps lean on JavaScript wrappers. N.O.V.A. ships 8 custom Swift modules &mdash; real platform integration, not Expo plugins &mdash; plus a test suite guarding every change.
            </p>
      
      
            <div data-reveal style={s("opacity:0;transform:translateY(22px);transition:opacity 1s cubic-bezier(.16,1,.3,1) .16s,transform 1s cubic-bezier(.16,1,.3,1) .16s;margin-top:60px;display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:1px;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.1);border-radius:18px;overflow:hidden;")}>
              <div style={s("background:#0a0a0b;padding:28px 24px;")}><div style={s("font-size:2.4rem;font-weight:600;letter-spacing:-0.03em;")}><span data-count="1800" data-sep="1">1,800</span><span style={s("color:var(--accent,#3b6fe0);")}>+</span></div><div style={s("margin-top:6px;font-size:13px;color:#8d8c92;")}>tests passing · 28 suites</div></div>
              <div style={s("background:#0a0a0b;padding:28px 24px;")}><div style={s("font-size:2.4rem;font-weight:600;letter-spacing:-0.03em;")}><span data-count="5000" data-sep="1" data-prefix="~">~5,000</span></div><div style={s("margin-top:6px;font-size:13px;color:#8d8c92;")}>LOC native Swift · 8 modules</div></div>
              <div style={s("background:#0a0a0b;padding:28px 24px;")}><div style={s("font-size:2.4rem;font-weight:600;letter-spacing:-0.03em;")}><span data-count="21">21</span></div><div style={s("margin-top:6px;font-size:13px;color:#8d8c92;")}>screens · typed Expo Router</div></div>
              <div style={s("background:#0a0a0b;padding:28px 24px;")}><div style={s("font-size:2.4rem;font-weight:600;letter-spacing:-0.03em;")}><span data-count="71">71</span></div><div style={s("margin-top:6px;font-size:13px;color:#8d8c92;")}>reusable components</div></div>
            </div>
      
            <div data-reveal style={s("opacity:0;transform:translateY(22px);transition:opacity 1s cubic-bezier(.16,1,.3,1),transform 1s cubic-bezier(.16,1,.3,1);margin-top:36px;background:#0e0e10;border:1px solid rgba(255,255,255,0.08);border-radius:18px;padding:30px 32px 34px;overflow:hidden;")}>
              <div style={s("display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap;")}>
                <div style={s("font-size:12px;letter-spacing:0.04em;text-transform:uppercase;color:#76757c;font-family:var(--font-mono),ui-monospace,monospace;")}>Dual-provider inference · graceful fallback</div>
                <div style={s("font-size:12px;color:#5f5e64;font-family:var(--font-mono),ui-monospace,monospace;")}>live routing</div>
              </div>
              <div data-flow-stage style={s("position:relative;margin-top:26px;height:206px;")}>
                <div data-track="main" style={s("position:absolute;left:9%;right:9%;top:40px;height:2px;background:rgba(255,255,255,0.12);")}></div>
                <div data-track="mainfill" style={s("position:absolute;left:9%;width:8%;top:40px;height:2px;background:var(--accent,#3b6fe0);box-shadow:0 0 12px var(--accent,#3b6fe0);")}></div>
                <div data-track="branch" style={s("position:absolute;left:50%;top:42px;width:2px;height:110px;background:rgba(255,255,255,0.12);transform:translateX(-50%);transition:background .4s ease,box-shadow .4s ease;")}></div>
                <div data-node="request" style={s("position:absolute;left:9%;top:40px;transform:translate(-50%,-50%);background:#16161a;border:1px solid rgba(255,255,255,0.16);border-radius:12px;padding:11px 15px;font-size:13px;color:#e6e5ea;white-space:nowrap;text-align:center;box-shadow:0 6px 20px -10px rgba(0,0,0,0.6);")}>Prompt</div>
                <div data-node="fm" style={s("position:absolute;left:50%;top:40px;transform:translate(-50%,-50%);background:#16161a;border:1px solid rgba(120,150,255,0.6);border-radius:12px;padding:10px 16px;font-size:13px;color:#e6e5ea;white-space:nowrap;text-align:center;transition:opacity .4s ease,border-color .4s ease;box-shadow:0 6px 20px -10px rgba(0,0,0,0.6);")}>Apple Foundation Models<br /><span data-fm-status style={s("font-family:var(--font-mono),ui-monospace,monospace;font-size:11px;color:oklch(0.72 0.16 150);")}>on-device</span></div>
                <div data-node="response" style={s("position:absolute;left:91%;top:40px;transform:translate(-50%,-50%);background:#16161a;border:1px solid rgba(255,255,255,0.16);border-radius:12px;padding:11px 15px;font-size:13px;color:#e6e5ea;white-space:nowrap;text-align:center;box-shadow:0 6px 20px -10px rgba(0,0,0,0.6);")}>Response</div>
                <div data-node="ollama" style={s("position:absolute;left:50%;top:154px;transform:translate(-50%,-50%);background:#16161a;border:1px solid rgba(255,255,255,0.12);border-radius:12px;padding:10px 16px;font-size:13px;color:#e6e5ea;white-space:nowrap;text-align:center;transition:opacity .4s ease,border-color .4s ease;opacity:0.45;box-shadow:0 6px 20px -10px rgba(0,0,0,0.6);")}>Ollama<br /><span style={s("font-family:var(--font-mono),ui-monospace,monospace;font-size:11px;color:#8d8c92;")}>local fallback</span></div>
                <div data-packet style={s("position:absolute;top:0;left:0;width:12px;height:12px;border-radius:50%;background:#fff;box-shadow:0 0 16px 5px var(--accent,#3b6fe0);transform:translate(-50%,-50%);opacity:0;")}></div>
              </div>
              <p style={s("margin:8px 0 0;font-size:13.5px;line-height:1.55;color:#8d8c92;")}>Apple Intelligence runs on-device by default. When Foundation Models are unavailable, requests fall back to a local Ollama model &mdash; no dropped prompts, no developer-operated backend.</p>
            </div>
      
            <div style={s("margin-top:36px;display:grid;grid-template-columns:1fr 1fr;gap:28px;align-items:start;")}>
      
              <div data-reveal style={s("opacity:0;transform:translateY(22px);transition:opacity 1s cubic-bezier(.16,1,.3,1),transform 1s cubic-bezier(.16,1,.3,1);padding:32px;background:#141416;border:1px solid rgba(255,255,255,0.08);border-radius:18px;")}>
                <div style={s("font-size:12px;letter-spacing:0.04em;text-transform:uppercase;color:#76757c;font-family:var(--font-mono),ui-monospace,monospace;")}>Native iOS modules</div>
                <div style={s("margin-top:20px;display:flex;flex-wrap:wrap;gap:9px;")}>
                  <span style={s("font-size:13.5px;padding:7px 13px;border-radius:999px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.09);color:#d4d3d9;")}>Foundation Models</span>
                  <span style={s("font-size:13.5px;padding:7px 13px;border-radius:999px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.09);color:#d4d3d9;")}>Live Activities</span>
                  <span style={s("font-size:13.5px;padding:7px 13px;border-radius:999px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.09);color:#d4d3d9;")}>EventKit · Reminders</span>
                  <span style={s("font-size:13.5px;padding:7px 13px;border-radius:999px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.09);color:#d4d3d9;")}>EventKit · Calendar</span>
                  <span style={s("font-size:13.5px;padding:7px 13px;border-radius:999px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.09);color:#d4d3d9;")}>Vision · OCR</span>
                  <span style={s("font-size:13.5px;padding:7px 13px;border-radius:999px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.09);color:#d4d3d9;")}>Speech</span>
                  <span style={s("font-size:13.5px;padding:7px 13px;border-radius:999px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.09);color:#d4d3d9;")}>Siri Shortcuts</span>
                  <span style={s("font-size:13.5px;padding:7px 13px;border-radius:999px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.09);color:#d4d3d9;")}>Native chat input</span>
                  <span style={s("font-size:13.5px;padding:7px 13px;border-radius:999px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.09);color:#d4d3d9;")}>Activity controller</span>
                </div>
                <div style={s("margin-top:30px;font-size:12px;letter-spacing:0.04em;text-transform:uppercase;color:#76757c;font-family:var(--font-mono),ui-monospace,monospace;")}>Architecture</div>
                <ul style={s("margin:18px 0 0;padding:0;list-style:none;display:flex;flex-direction:column;gap:13px;")}>
                  <li style={s("display:flex;gap:11px;font-size:14.5px;line-height:1.5;color:#c2c1c7;")}><span style={s("color:var(--accent,#3b6fe0);flex:none;")}>&mdash;</span>Dual AI provider with graceful fallback &mdash; Apple Intelligence &rarr; Ollama</li>
                  <li style={s("display:flex;gap:11px;font-size:14.5px;line-height:1.5;color:#c2c1c7;")}><span style={s("color:var(--accent,#3b6fe0);flex:none;")}>&mdash;</span>Local-first state: Jotai atoms + MMKV + iOS Keychain</li>
                  <li style={s("display:flex;gap:11px;font-size:14.5px;line-height:1.5;color:#c2c1c7;")}><span style={s("color:var(--accent,#3b6fe0);flex:none;")}>&mdash;</span>Clean deep-link migration &mdash; legacy scheme &rarr; <code style={s("font-family:var(--font-mono),ui-monospace,monospace;font-size:13px;color:#e6e5ea;")}>novaai</code>, backwards-compatible</li>
                  <li style={s("display:flex;gap:11px;font-size:14.5px;line-height:1.5;color:#c2c1c7;")}><span style={s("color:var(--accent,#3b6fe0);flex:none;")}>&mdash;</span>Cross-platform stubs &mdash; <code style={s("font-family:var(--font-mono),ui-monospace,monospace;font-size:13px;color:#e6e5ea;")}>.web.ts</code> shadows so the app builds on web for testing</li>
                </ul>
              </div>
      
      
              <div data-reveal style={s("opacity:0;transform:translateY(22px);transition:opacity 1s cubic-bezier(.16,1,.3,1) .08s,transform 1s cubic-bezier(.16,1,.3,1) .08s;background:#0e0e10;border:1px solid rgba(255,255,255,0.08);border-radius:18px;overflow:hidden;position:relative;")}>
                <div data-scan style={s("position:absolute;left:0;right:0;top:0;height:60px;pointer-events:none;background:linear-gradient(180deg,rgba(120,150,255,0),rgba(120,150,255,0.16),rgba(120,150,255,0));opacity:0;z-index:4;")}></div>
                <div style={s("display:flex;align-items:center;gap:8px;padding:14px 18px;border-bottom:1px solid rgba(255,255,255,0.07);")}>
                  <span style={s("width:11px;height:11px;border-radius:50%;background:#3a393f;")}></span>
                  <span style={s("width:11px;height:11px;border-radius:50%;background:#3a393f;")}></span>
                  <span style={s("width:11px;height:11px;border-radius:50%;background:#3a393f;")}></span>
                  <span style={s("margin-left:8px;font-family:var(--font-mono),ui-monospace,monospace;font-size:12.5px;color:#8d8c92;")}>hooks/use-ai.ts</span>
                  <span style={s("margin-left:auto;display:flex;align-items:center;gap:14px;")}><span style={s("font-family:var(--font-mono),ui-monospace,monospace;font-size:11px;color:#5f5e64;")}>Foundation Models &rarr; Ollama fallback</span><button data-copy type="button" style={s("cursor:pointer;font-family:var(--font-mono),ui-monospace,monospace;font-size:11px;color:#b5b4ba;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.12);border-radius:7px;padding:5px 11px;transition:background .2s,color .2s;")} data-hover="background:rgba(255,255,255,0.12);color:#fff;">Copy</button></span>
                </div>
                <pre data-code style={s("margin:0;padding:22px 22px 24px;overflow:auto;font-family:var(--font-mono),ui-monospace,monospace;font-size:12.5px;line-height:1.7;color:#c9c8cf;")} dangerouslySetInnerHTML={{ __html: "<span style=\"color:#6f6e75;\">// pick the usable provider, fall back cleanly</span>\n<span style=\"color:#9aa7ff;\">function</span> getAIProviderStatus(aiProvider, ollamaStatus, fmAvailable) {\n  <span style=\"color:#9aa7ff;\">const</span> selected   = aiProvider?.provider ?? AIProvider.<span style=\"color:#7fd0a8;\">FOUNDATION_MODELS</span>;\n  <span style=\"color:#9aa7ff;\">const</span> usable     = selected === AIProvider.<span style=\"color:#7fd0a8;\">FOUNDATION_MODELS</span> &amp;&amp; fmAvailable;\n  <span style=\"color:#9aa7ff;\">const</span> effective  = usable\n    ? AIProvider.<span style=\"color:#7fd0a8;\">FOUNDATION_MODELS</span>\n    : AIProvider.<span style=\"color:#7fd0a8;\">OLLAMA</span>;\n  <span style=\"color:#9aa7ff;\">const</span> fallback   = !usable &amp;&amp; ollamaStatus === ConnectStatus.<span style=\"color:#7fd0a8;\">SUCCESSFUL</span>;\n  <span style=\"color:#9aa7ff;\">return</span> { selected, effective, fallback };\n}" }} />
                <div style={s("padding:13px 18px;border-top:1px solid rgba(255,255,255,0.07);font-size:12px;color:#6f6e75;")}>Source private &mdash; full file shared in interviews.</div>
              </div>
            </div>
      
      
            <div data-reveal style={s("opacity:0;transform:translateY(24px);transition:opacity 1s cubic-bezier(.16,1,.3,1),transform 1s cubic-bezier(.16,1,.3,1);margin-top:54px;")}>
              <div style={s("font-size:12px;letter-spacing:0.04em;text-transform:uppercase;color:#76757c;font-family:var(--font-mono),ui-monospace,monospace;")}>Running on device</div>
              <div style={s("margin-top:24px;display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:24px;")}>
                <figure style={s("margin:0;")}>
                  <div style={s("border-radius:34px;padding:9px;background:linear-gradient(160deg,#26262a,#0e0e10);box-shadow:0 24px 50px -22px rgba(0,0,0,0.6);")}><img data-zoom src="/apps/nova-settings.png" alt="N.O.V.A. advanced settings" style={s("display:block;width:100%;border-radius:26px;cursor:zoom-in;")} /></div>
                  <figcaption style={s("margin-top:14px;font-size:13px;line-height:1.5;color:#8d8c92;")}>Settings · Advanced &mdash; 12 tool permissions, Calendar + OCR + Memory granted</figcaption>
                </figure>
                <figure style={s("margin:0;")}>
                  <div style={s("border-radius:34px;padding:9px;background:linear-gradient(160deg,#26262a,#0e0e10);box-shadow:0 24px 50px -22px rgba(0,0,0,0.6);")}><img data-zoom src="/apps/nova-reminders.png" alt="N.O.V.A. Get Reminders tool" style={s("display:block;width:100%;border-radius:26px;cursor:zoom-in;")} /></div>
                  <figcaption style={s("margin-top:14px;font-size:13px;line-height:1.5;color:#8d8c92;")}>EventKit in use &mdash; Get Reminders via native iOS Reminders bridge</figcaption>
                </figure>
                <figure style={s("margin:0;")}>
                  <div style={s("border-radius:34px;padding:9px;background:linear-gradient(160deg,#26262a,#0e0e10);box-shadow:0 24px 50px -22px rgba(0,0,0,0.6);")}><img data-zoom src="/apps/nova-code.png" alt="N.O.V.A. code rendering" style={s("display:block;width:100%;border-radius:26px;cursor:zoom-in;")} /></div>
                  <figcaption style={s("margin-top:14px;font-size:13px;line-height:1.5;color:#8d8c92;")}>Code rendering &mdash; syntax-highlighted markdown, Hello World &rarr; Fibonacci</figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>
  );
}
