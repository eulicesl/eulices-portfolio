import { s } from "@/lib/redesign/cssString";

export default function Hero() {
  return (
      <header id="top" data-screen-label="Hero" style={s("position:relative;overflow:hidden;min-height:100vh;display:flex;flex-direction:column;justify-content:center;padding:140px clamp(20px,5vw,72px) 80px;background:#06070c;color:#f5f4f2;")}>
          <canvas data-hero-canvas aria-hidden="true" style={s("position:absolute;inset:0;width:100%;height:100%;z-index:0;pointer-events:none;display:block;opacity:0;transition:opacity 1.4s ease;")}></canvas>
          <div style={s("position:absolute;inset:0;z-index:0;pointer-events:none;background:radial-gradient(78% 58% at 70% 42%, rgba(59,111,224,0.20), rgba(6,7,12,0) 60%);")}></div>
          <div style={s("position:absolute;inset:0;z-index:0;pointer-events:none;background:linear-gradient(95deg, rgba(6,7,12,0.86) 0%, rgba(6,7,12,0.55) 36%, rgba(6,7,12,0.06) 70%, rgba(6,7,12,0) 100%);")}></div>
          <div style={s("position:absolute;left:0;right:0;bottom:0;height:170px;z-index:0;pointer-events:none;background:linear-gradient(180deg, rgba(6,7,12,0), #06070c);")}></div>
      
          <div style={s("position:relative;z-index:1;max-width:1200px;margin:0 auto;width:100%;")}>
            <div data-reveal style={s("opacity:0;transform:translateY(20px);transition:opacity .9s cubic-bezier(.16,1,.3,1),transform .9s cubic-bezier(.16,1,.3,1);display:inline-flex;align-items:center;gap:9px;padding:7px 14px 7px 12px;border:1px solid rgba(255,255,255,0.16);border-radius:999px;background:rgba(255,255,255,0.05);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);font-size:13px;font-weight:500;letter-spacing:0.01em;color:#d4d3d9;")}>
              <span style={s("width:8px;height:8px;border-radius:50%;background:oklch(0.72 0.16 150);animation:pulseDot 2.4s ease-in-out infinite;")}></span>
              Open to side projects &amp; contract work
            </div>
      
            <div data-reveal style={s("opacity:0;transform:translateY(20px);transition:opacity .9s cubic-bezier(.16,1,.3,1) .06s,transform .9s cubic-bezier(.16,1,.3,1) .06s;margin-top:30px;font-family:var(--font-mono),ui-monospace,monospace;font-size:13px;letter-spacing:0.04em;color:var(--accent,#3b6fe0);text-transform:uppercase;")}>
              Founding Engineer · Forward Deployed · 2024&ndash;2026
            </div>
      
            <h1 data-reveal style={s("opacity:0;transform:translateY(24px);transition:opacity 1s cubic-bezier(.16,1,.3,1) .12s,transform 1s cubic-bezier(.16,1,.3,1) .12s;margin:18px 0 0;font-size:clamp(2.6rem,7.2vw,6.1rem);line-height:1.02;letter-spacing:-0.035em;font-weight:600;max-width:15ch;text-wrap:balance;color:#f6f5f3;")}>
              I find the problem, <span style={s("font-style:italic;font-weight:500;color:var(--accent,#3b6fe0);text-shadow:0 0 38px rgba(59,111,224,0.55);")}>ship the product</span>, and own it in production.
            </h1>
      
            <p data-reveal style={s("opacity:0;transform:translateY(20px);transition:opacity 1s cubic-bezier(.16,1,.3,1) .2s,transform 1s cubic-bezier(.16,1,.3,1) .2s;margin:32px 0 0;max-width:60ch;font-size:clamp(1.05rem,1.7vw,1.3rem);line-height:1.55;color:#b8b7bd;font-weight:400;")}>
              At a dermatology clinic seeing 70 patients a day, I built an AI scribe against the documentation bottleneck and got it <strong style={s("font-weight:600;color:#f4f3f1;")}>featured as a customer case study on Omi</strong>. Same-day chart completion moved from 60% to 95%. Since: <strong style={s("font-weight:600;color:#f4f3f1;")}>six AI products shipped</strong> &mdash; four Omi agents (2,200+ users) and two native iOS apps in public beta.
            </p>
      
            <div data-reveal style={s("opacity:0;transform:translateY(20px);transition:opacity 1s cubic-bezier(.16,1,.3,1) .28s,transform 1s cubic-bezier(.16,1,.3,1) .28s;margin-top:40px;display:flex;flex-wrap:wrap;gap:14px;")}>
              <a href="https://www.omi.me/blogs/case-studies/how-graham-dermatology-uses-omi-to-transform-medical-scribing-and-patient-care" target="_blank" rel="noopener" data-magnetic style={s("text-decoration:none;display:inline-flex;align-items:center;gap:8px;background:#f4f3f0;color:#16151a;font-size:15px;font-weight:500;letter-spacing:-0.01em;padding:14px 24px;border-radius:999px;transition:transform .2s,box-shadow .2s;box-shadow:0 0 0 0 rgba(59,111,224,0);")} data-hover="transform:translateY(-2px);box-shadow:0 14px 40px -12px rgba(59,111,224,0.5);">Read the case study <span style={s("opacity:.6;")}>&#8599;</span></a>
              <a href="#contact" data-magnetic style={s("text-decoration:none;display:inline-flex;align-items:center;gap:8px;background:rgba(255,255,255,0.03);color:#f5f4f2;font-size:15px;font-weight:500;letter-spacing:-0.01em;padding:14px 24px;border-radius:999px;border:1px solid rgba(255,255,255,0.22);transition:transform .2s,border-color .2s,background .2s;")} data-hover="border-color:rgba(255,255,255,0.5);background:rgba(255,255,255,0.07);transform:translateY(-2px);">Get in touch <span style={s("opacity:.6;")}>&rarr;</span></a>
            </div>
          </div>
      
          <a href="#case-study" style={s("position:absolute;bottom:34px;left:50%;transform:translateX(-50%);text-decoration:none;color:#8d8c92;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;display:flex;flex-direction:column;align-items:center;gap:8px;font-family:var(--font-mono),ui-monospace,monospace;z-index:1;")}>
            Scroll
            <span style={s("display:block;width:1px;height:34px;background:linear-gradient(180deg,rgba(255,255,255,0.5),rgba(255,255,255,0));")}></span>
          </a>
        </header>
  );
}
