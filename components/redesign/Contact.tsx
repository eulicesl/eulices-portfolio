import { s } from "@/lib/redesign/cssString";

export default function Contact() {
  return (
      <section id="contact" data-screen-label="Contact" style={s("scroll-margin-top:72px;position:relative;overflow:hidden;background:#08080a;color:#f5f4f2;padding:clamp(110px,16vh,210px) clamp(20px,5vw,72px) clamp(96px,12vh,150px);")}>
          <canvas data-contact-canvas aria-hidden="true" style={s("position:absolute;inset:0;width:100%;height:100%;z-index:0;pointer-events:none;")}></canvas>
          <div style={s("position:absolute;inset:0;z-index:0;background:radial-gradient(120% 78% at 50% -10%, rgba(59,111,224,0.16), rgba(8,8,10,0) 62%);pointer-events:none;")}></div>
          <div style={s("position:absolute;left:0;right:0;top:0;height:1px;background:linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,0.18),rgba(255,255,255,0));z-index:1;pointer-events:none;")}></div>
      
          <div style={s("position:relative;z-index:1;max-width:1200px;margin:0 auto;")}>
            <div data-reveal style={s("opacity:0;transform:translateY(20px);transition:opacity .9s cubic-bezier(.16,1,.3,1),transform .9s cubic-bezier(.16,1,.3,1);display:flex;align-items:center;gap:14px;font-family:var(--font-mono),ui-monospace,monospace;font-size:13px;letter-spacing:0.04em;color:#76757c;")}>
              <span style={s("color:var(--accent,#3b6fe0);")}>06</span><span style={s("width:28px;height:1px;background:rgba(255,255,255,0.2);")}></span>Get in touch
            </div>
      
            <div data-reveal style={s("opacity:0;transform:translateY(20px);transition:opacity .9s cubic-bezier(.16,1,.3,1) .05s,transform .9s cubic-bezier(.16,1,.3,1) .05s;margin-top:26px;display:inline-flex;align-items:center;gap:10px;padding:8px 16px 8px 13px;border:1px solid rgba(255,255,255,0.14);border-radius:999px;background:rgba(255,255,255,0.04);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);font-size:13.5px;letter-spacing:0.005em;color:#d4d3d9;")}>
              <span style={s("width:8px;height:8px;border-radius:50%;background:oklch(0.72 0.16 150);animation:pulseDot 2.4s ease-in-out infinite;")}></span>
              Currently building full-time &mdash; open to the occasional side quest
            </div>
      
            <h2 data-reveal style={s("opacity:0;transform:translateY(24px);transition:opacity .95s cubic-bezier(.16,1,.3,1) .1s,transform .95s cubic-bezier(.16,1,.3,1) .1s;margin:28px 0 0;font-size:clamp(2.5rem,6.6vw,5.2rem);line-height:1.0;letter-spacing:-0.04em;font-weight:600;max-width:15ch;text-wrap:balance;")}>
              Off the clock, <span style={s("font-style:italic;font-weight:500;color:var(--accent,#3b6fe0);text-shadow:0 0 34px rgba(59,111,224,0.55);")}>still shipping.</span>
            </h2>
      
            <p data-reveal style={s("opacity:0;transform:translateY(20px);transition:opacity .95s cubic-bezier(.16,1,.3,1) .16s,transform .95s cubic-bezier(.16,1,.3,1) .16s;margin:28px 0 0;max-width:58ch;font-size:clamp(1.05rem,1.6vw,1.28rem);line-height:1.62;color:#b5b4ba;")}>
              Happily heads-down in my current role &mdash; but the itch to build doesn&rsquo;t clock out. I take on <strong style={s("font-weight:600;color:#f2f1f5;")}>select contract work</strong> and team up on <strong style={s("font-weight:600;color:#f2f1f5;")}>side projects</strong> in my spare time. Especially anything where a real user&rsquo;s workflow is on the line.
            </p>
      
            <div data-reveal style={s("opacity:0;transform:translateY(20px);transition:opacity 1s cubic-bezier(.16,1,.3,1) .2s,transform 1s cubic-bezier(.16,1,.3,1) .2s;margin-top:30px;display:flex;flex-wrap:wrap;gap:10px;")}>
              <span style={s("font-size:13.5px;padding:8px 15px;border-radius:999px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);color:#d4d3d9;")}>Contract &amp; freelance</span>
              <span style={s("font-size:13.5px;padding:8px 15px;border-radius:999px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);color:#d4d3d9;")}>Side-project collaborations</span>
              <span style={s("font-size:13.5px;padding:8px 15px;border-radius:999px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);color:#d4d3d9;")}>Applied-AI experiments</span>
            </div>
      
            <div data-reveal style={s("opacity:0;transform:translateY(22px);transition:opacity 1s cubic-bezier(.16,1,.3,1) .26s,transform 1s cubic-bezier(.16,1,.3,1) .26s;margin-top:46px;display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:1px;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.1);border-radius:18px;overflow:hidden;")}>
              <a href="mailto:leulices@gmail.com" style={s("text-decoration:none;background:#0e0e10;padding:26px 26px;display:flex;flex-direction:column;gap:6px;transition:background .2s;")} data-hover="background:#141416;">
                <span style={s("font-size:12px;letter-spacing:0.04em;text-transform:uppercase;color:#76757c;font-family:var(--font-mono),ui-monospace,monospace;")}>Email</span>
                <span style={s("font-size:1.05rem;font-weight:500;color:#f5f4f2;")}>leulices@gmail.com</span>
              </a>
              <a href="https://github.com/eulicesl" target="_blank" rel="noopener" style={s("text-decoration:none;background:#0e0e10;padding:26px 26px;display:flex;flex-direction:column;gap:6px;transition:background .2s;")} data-hover="background:#141416;">
                <span style={s("font-size:12px;letter-spacing:0.04em;text-transform:uppercase;color:#76757c;font-family:var(--font-mono),ui-monospace,monospace;")}>GitHub &#8599;</span>
                <span style={s("font-size:1.05rem;font-weight:500;color:#f5f4f2;")}>github.com/eulicesl</span>
              </a>
              <a href="https://www.linkedin.com/in/euliceslopez" target="_blank" rel="noopener" style={s("text-decoration:none;background:#0e0e10;padding:26px 26px;display:flex;flex-direction:column;gap:6px;transition:background .2s;")} data-hover="background:#141416;">
                <span style={s("font-size:12px;letter-spacing:0.04em;text-transform:uppercase;color:#76757c;font-family:var(--font-mono),ui-monospace,monospace;")}>LinkedIn &#8599;</span>
                <span style={s("font-size:1.05rem;font-weight:500;color:#f5f4f2;")}>in/euliceslopez</span>
              </a>
              <a href="https://www.omi.me/blogs/case-studies/how-graham-dermatology-uses-omi-to-transform-medical-scribing-and-patient-care" target="_blank" rel="noopener" style={s("text-decoration:none;background:#0e0e10;padding:26px 26px;display:flex;flex-direction:column;gap:6px;transition:background .2s;")} data-hover="background:#141416;">
                <span style={s("font-size:12px;letter-spacing:0.04em;text-transform:uppercase;color:#76757c;font-family:var(--font-mono),ui-monospace,monospace;")}>Case study &#8599;</span>
                <span style={s("font-size:1.05rem;font-weight:500;color:#f5f4f2;")}>Omi &times; Graham Dermatology</span>
              </a>
            </div>
          </div>
        </section>
  );
}
