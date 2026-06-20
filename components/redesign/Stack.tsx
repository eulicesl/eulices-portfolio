import { s } from "@/lib/redesign/cssString";

export default function Stack() {
  return (
      <section id="stack" data-screen-label="Stack" style={s("scroll-margin-top:72px;background:linear-gradient(180deg,var(--page) 0,rgba(10,10,11,0) 110px),#0a0a0b;color:#f5f4f2;padding:clamp(90px,13vh,170px) clamp(20px,5vw,72px);")}>
          <div style={s("max-width:1200px;margin:0 auto;")}>
            <div data-reveal style={s("opacity:0;transform:translateY(20px);transition:opacity .9s cubic-bezier(.16,1,.3,1),transform .9s cubic-bezier(.16,1,.3,1);display:flex;align-items:center;gap:14px;font-family:var(--font-mono),ui-monospace,monospace;font-size:13px;letter-spacing:0.04em;color:#76757c;")}>
              <span style={s("color:var(--accent,#3b6fe0);")}>05</span><span style={s("width:28px;height:1px;background:rgba(255,255,255,0.2);")}></span>Stack
            </div>
            <h2 data-reveal style={s("opacity:0;transform:translateY(22px);transition:opacity .95s cubic-bezier(.16,1,.3,1) .06s,transform .95s cubic-bezier(.16,1,.3,1) .06s;margin:26px 0 44px;font-size:clamp(2.1rem,5vw,4rem);line-height:1.04;letter-spacing:-0.03em;font-weight:600;")}>
              Tools I reach for.
            </h2>
            <div data-reveal style={s("opacity:0;transform:translateY(20px);transition:opacity 1s cubic-bezier(.16,1,.3,1),transform 1s cubic-bezier(.16,1,.3,1);display:flex;flex-wrap:wrap;gap:11px;max-width:920px;")}>
              <span style={s("font-size:15px;padding:9px 17px;border-radius:999px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);color:#e6e5ea;")}>Python</span>
              <span style={s("font-size:15px;padding:9px 17px;border-radius:999px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);color:#e6e5ea;")}>FastAPI</span>
              <span style={s("font-size:15px;padding:9px 17px;border-radius:999px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);color:#e6e5ea;")}>LLMs / Prompt Engineering</span>
              <span style={s("font-size:15px;padding:9px 17px;border-radius:999px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);color:#e6e5ea;")}>Swift</span>
              <span style={s("font-size:15px;padding:9px 17px;border-radius:999px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);color:#e6e5ea;")}>SwiftUI</span>
              <span style={s("font-size:15px;padding:9px 17px;border-radius:999px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);color:#e6e5ea;")}>React Native</span>
              <span style={s("font-size:15px;padding:9px 17px;border-radius:999px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);color:#e6e5ea;")}>Expo SDK 54</span>
              <span style={s("font-size:15px;padding:9px 17px;border-radius:999px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);color:#e6e5ea;")}>TypeScript</span>
              <span style={s("font-size:15px;padding:9px 17px;border-radius:999px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);color:#e6e5ea;")}>Apple Foundation Models</span>
              <span style={s("font-size:15px;padding:9px 17px;border-radius:999px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);color:#e6e5ea;")}>Ollama</span>
              <span style={s("font-size:15px;padding:9px 17px;border-radius:999px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);color:#e6e5ea;")}>Vision / OCR</span>
              <span style={s("font-size:15px;padding:9px 17px;border-radius:999px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);color:#e6e5ea;")}>EventKit</span>
              <span style={s("font-size:15px;padding:9px 17px;border-radius:999px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);color:#e6e5ea;")}>Live Activities</span>
              <span style={s("font-size:15px;padding:9px 17px;border-radius:999px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);color:#e6e5ea;")}>Jotai + MMKV</span>
              <span style={s("font-size:15px;padding:9px 17px;border-radius:999px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);color:#e6e5ea;")}>NLP</span>
              <span style={s("font-size:15px;padding:9px 17px;border-radius:999px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);color:#e6e5ea;")}>Knowledge graphs</span>
              <span style={s("font-size:15px;padding:9px 17px;border-radius:999px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);color:#e6e5ea;")}>HIPAA workflows</span>
              <span style={s("font-size:15px;padding:9px 17px;border-radius:999px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);color:#e6e5ea;")}>EMR-compatible output</span>
            </div>
            <div data-reveal style={s("opacity:0;transform:translateY(20px);transition:opacity 1s cubic-bezier(.16,1,.3,1) .08s,transform 1s cubic-bezier(.16,1,.3,1) .08s;margin-top:40px;")}>
              <div style={s("font-size:12px;letter-spacing:0.04em;text-transform:uppercase;color:#76757c;font-family:var(--font-mono),ui-monospace,monospace;margin-bottom:16px;")}>CI / CD pipeline</div>
              <div style={s("display:flex;flex-wrap:wrap;gap:10px;")}>
                <span style={s("font-family:var(--font-mono),ui-monospace,monospace;font-size:13px;padding:7px 14px;border-radius:8px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);color:#b5b4ba;")}>TypeScript strict</span>
                <span style={s("font-family:var(--font-mono),ui-monospace,monospace;font-size:13px;padding:7px 14px;border-radius:8px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);color:#b5b4ba;")}>ESLint</span>
                <span style={s("font-family:var(--font-mono),ui-monospace,monospace;font-size:13px;padding:7px 14px;border-radius:8px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);color:#b5b4ba;")}>Jest</span>
                <span style={s("font-family:var(--font-mono),ui-monospace,monospace;font-size:13px;padding:7px 14px;border-radius:8px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);color:#b5b4ba;")}>CodeQL</span>
                <span style={s("font-family:var(--font-mono),ui-monospace,monospace;font-size:13px;padding:7px 14px;border-radius:8px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);color:#b5b4ba;")}>Dependency review</span>
              </div>
            </div>
          </div>
        </section>
  );
}
