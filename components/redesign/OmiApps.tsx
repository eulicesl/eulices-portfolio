import { s } from "@/lib/redesign/cssString";

export default function OmiApps() {
  return (
      <section id="omi" data-screen-label="Omi platform" style={s("scroll-margin-top:72px;background:linear-gradient(180deg,#0a0a0b 0,rgba(10,10,11,0) 104px);padding:clamp(90px,13vh,170px) clamp(20px,5vw,72px);")}>
          <div style={s("max-width:1200px;margin:0 auto;")}>
            <div data-reveal style={s("opacity:0;transform:translateY(20px);transition:opacity .9s cubic-bezier(.16,1,.3,1),transform .9s cubic-bezier(.16,1,.3,1);display:flex;align-items:center;gap:14px;font-family:var(--font-mono),ui-monospace,monospace;font-size:13px;letter-spacing:0.04em;color:var(--ink-3);")}>
              <span style={s("color:var(--accent,#3b6fe0);")}>04</span><span style={s("width:28px;height:1px;background:var(--hair-2);")}></span>On the Omi platform
            </div>
            <h2 data-reveal style={s("opacity:0;transform:translateY(22px);transition:opacity .95s cubic-bezier(.16,1,.3,1) .06s,transform .95s cubic-bezier(.16,1,.3,1) .06s;margin:26px 0 0;font-size:clamp(2.1rem,5vw,4rem);line-height:1.04;letter-spacing:-0.03em;font-weight:600;")}>
              Four apps. <span style={s("font-style:italic;font-weight:500;color:var(--ink-2);")}>2,200+ installs.</span>
            </h2>
            <p data-reveal style={s("opacity:0;transform:translateY(20px);transition:opacity .95s cubic-bezier(.16,1,.3,1) .12s,transform .95s cubic-bezier(.16,1,.3,1) .12s;margin:22px 0 0;max-width:58ch;font-size:clamp(1.02rem,1.5vw,1.2rem);line-height:1.6;color:var(--ink-2);")}>
              Two clinical workflow tools for dermatology practices and two consumer AI assistants. Each one is live, installed, and getting used today.
            </p>
      
            <div data-reveal style={s("opacity:0;transform:translateY(24px);transition:opacity 1s cubic-bezier(.16,1,.3,1) .12s,transform 1s cubic-bezier(.16,1,.3,1) .12s;margin-top:56px;display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:20px;")}>
              <div style={s("padding:30px 30px 26px;background:var(--card);border:1px solid var(--card-hair);border-radius:18px;box-shadow:0 1px 3px rgba(20,20,25,0.04);transition:transform .25s,box-shadow .25s;")} data-hover="transform:translateY(-4px);box-shadow:0 18px 40px -20px rgba(20,20,25,0.25);">
                <h3 style={s("margin:0;font-size:1.25rem;font-weight:600;letter-spacing:-0.01em;")}>NEVA Dermatology Assistant</h3>
                <p style={s("margin:14px 0 0;font-size:14.5px;line-height:1.6;color:var(--ink-2);")}>AI scribe for medical dermatology. Generates structured progress notes from provider&ndash;patient transcripts, matched to EZDERM EMR templates.</p>
                <div style={s("margin-top:22px;display:flex;gap:22px;align-items:baseline;")}><span><strong style={s("font-size:1.4rem;font-weight:600;")} data-count="110" data-suffix="+">110+</strong> <span style={s("font-size:13px;color:var(--ink-3);")}>installs</span></span><span><strong style={s("font-size:1.4rem;font-weight:600;")}>5.0</strong><span style={s("color:var(--accent,#3b6fe0);")}>&#9733;</span> <span style={s("font-size:13px;color:var(--ink-3);")}>rating</span></span></div>
              </div>
              <div style={s("padding:30px 30px 26px;background:var(--card);border:1px solid var(--card-hair);border-radius:18px;box-shadow:0 1px 3px rgba(20,20,25,0.04);transition:transform .25s,box-shadow .25s;")} data-hover="transform:translateY(-4px);box-shadow:0 18px 40px -20px rgba(20,20,25,0.25);">
                <h3 style={s("margin:0;font-size:1.25rem;font-weight:600;letter-spacing:-0.01em;")}>NEVA Cosmetic Assistant</h3>
                <p style={s("margin:14px 0 0;font-size:14.5px;line-height:1.6;color:var(--ink-2);")}>AI scribe specialized for cosmetic dermatology consults. Captures procedure documentation and structured consultation notes.</p>
                <div style={s("margin-top:22px;display:flex;gap:22px;align-items:baseline;")}><span><strong style={s("font-size:1.4rem;font-weight:600;")} data-count="90" data-suffix="+">90+</strong> <span style={s("font-size:13px;color:var(--ink-3);")}>installs</span></span><span><strong style={s("font-size:1.4rem;font-weight:600;")}>5.0</strong><span style={s("color:var(--accent,#3b6fe0);")}>&#9733;</span> <span style={s("font-size:13px;color:var(--ink-3);")}>rating</span></span></div>
              </div>
              <div style={s("padding:30px 30px 26px;background:var(--card);border:1px solid var(--card-hair);border-radius:18px;box-shadow:0 1px 3px rgba(20,20,25,0.04);transition:transform .25s,box-shadow .25s;")} data-hover="transform:translateY(-4px);box-shadow:0 18px 40px -20px rgba(20,20,25,0.25);">
                <h3 style={s("margin:0;font-size:1.25rem;font-weight:600;letter-spacing:-0.01em;")}>Brain</h3>
                <p style={s("margin:14px 0 0;font-size:14.5px;line-height:1.6;color:var(--ink-2);")}>Personal AI memory assistant that turns everyday conversations into a searchable knowledge graph.</p>
                <div style={s("margin-top:22px;display:flex;gap:22px;align-items:baseline;")}><span><strong style={s("font-size:1.4rem;font-weight:600;")} data-count="900" data-suffix="+">900+</strong> <span style={s("font-size:13px;color:var(--ink-3);")}>installs</span></span></div>
              </div>
              <div style={s("padding:30px 30px 26px;background:var(--card);border:1px solid var(--card-hair);border-radius:18px;box-shadow:0 1px 3px rgba(20,20,25,0.04);transition:transform .25s,box-shadow .25s;")} data-hover="transform:translateY(-4px);box-shadow:0 18px 40px -20px rgba(20,20,25,0.25);">
                <h3 style={s("margin:0;font-size:1.25rem;font-weight:600;letter-spacing:-0.01em;")}>J.A.R.V.I.S.</h3>
                <p style={s("margin:14px 0 0;font-size:14.5px;line-height:1.6;color:var(--ink-2);")}>Voice-activated, context-aware AI companion. Surfaces reminders, calendar context, and ambient assistance.</p>
                <div style={s("margin-top:22px;display:flex;gap:22px;align-items:baseline;")}><span><strong style={s("font-size:1.4rem;font-weight:600;")} data-count="1100" data-sep="1" data-suffix="+">1,100+</strong> <span style={s("font-size:13px;color:var(--ink-3);")}>installs</span></span></div>
              </div>
            </div>
          </div>
        </section>
  );
}
