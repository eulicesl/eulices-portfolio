import { s } from "@/lib/redesign/cssString";

export default function CaseStudy() {
  return (
      <section id="case-study" data-screen-label="Case study" style={s("scroll-margin-top:72px;background:#0a0a0b;color:#f5f4f2;padding:clamp(90px,13vh,170px) clamp(20px,5vw,72px);")}>
          <div style={s("max-width:1200px;margin:0 auto;")}>
            <div data-reveal style={s("opacity:0;transform:translateY(20px);transition:opacity .9s cubic-bezier(.16,1,.3,1),transform .9s cubic-bezier(.16,1,.3,1);display:flex;align-items:center;gap:14px;font-family:var(--font-mono),ui-monospace,monospace;font-size:13px;letter-spacing:0.04em;color:#76757c;")}>
              <span style={s("color:var(--accent,#3b6fe0);")}>01</span><span style={s("width:28px;height:1px;background:rgba(255,255,255,0.2);")}></span>Featured work
            </div>
      
            <h2 data-reveal style={s("opacity:0;transform:translateY(22px);transition:opacity .95s cubic-bezier(.16,1,.3,1) .06s,transform .95s cubic-bezier(.16,1,.3,1) .06s;margin:26px 0 0;font-size:clamp(2.1rem,5vw,4rem);line-height:1.04;letter-spacing:-0.03em;font-weight:600;")}>
              Graham Dermatology <span style={s("font-style:italic;font-weight:400;color:#a1a0a6;")}>&times;</span> Omi
            </h2>
      
            <p data-reveal style={s("opacity:0;transform:translateY(20px);transition:opacity .95s cubic-bezier(.16,1,.3,1) .12s,transform .95s cubic-bezier(.16,1,.3,1) .12s;margin:24px 0 0;max-width:64ch;font-size:clamp(1.02rem,1.6vw,1.28rem);line-height:1.6;color:#b5b4ba;")}>
              An always-on AI scribe for a clinic seeing 70 patients a day. Structured prompts, EMR-compatible note generation, and a workflow clinicians actually use. Deployed 2024&ndash;2025; case study published November 2025.
            </p>
      
            <div data-reveal style={s("opacity:0;transform:translateY(22px);transition:opacity 1s cubic-bezier(.16,1,.3,1) .18s,transform 1s cubic-bezier(.16,1,.3,1) .18s;margin-top:64px;display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1px;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.1);border-radius:18px;overflow:hidden;")}>
              <div style={s("background:#0a0a0b;padding:34px 28px;")}>
                <div style={s("font-size:12px;letter-spacing:0.04em;text-transform:uppercase;color:#76757c;font-family:var(--font-mono),ui-monospace,monospace;")}>Same-day charts</div>
                <div style={s("margin-top:18px;display:flex;align-items:baseline;gap:10px;")}><span style={s("font-size:1.4rem;color:#6a696f;text-decoration:line-through;text-decoration-color:rgba(255,255,255,0.25);")}>60%</span><span style={s("color:var(--accent,#3b6fe0);")}>&rarr;</span><span style={s("font-size:2.7rem;font-weight:600;letter-spacing:-0.03em;")}><span data-count="95" data-suffix="%">95%</span></span></div>
              </div>
              <div style={s("background:#0a0a0b;padding:34px 28px;")}>
                <div style={s("font-size:12px;letter-spacing:0.04em;text-transform:uppercase;color:#76757c;font-family:var(--font-mono),ui-monospace,monospace;")}>Note error rate</div>
                <div style={s("margin-top:18px;display:flex;align-items:baseline;gap:10px;")}><span style={s("font-size:1.4rem;color:#6a696f;text-decoration:line-through;text-decoration-color:rgba(255,255,255,0.25);")}>15&ndash;20%</span><span style={s("color:var(--accent,#3b6fe0);")}>&rarr;</span><span style={s("font-size:2.7rem;font-weight:600;letter-spacing:-0.03em;")}>&lt;3%</span></div>
              </div>
              <div style={s("background:#0a0a0b;padding:34px 28px;")}>
                <div style={s("font-size:12px;letter-spacing:0.04em;text-transform:uppercase;color:#76757c;font-family:var(--font-mono),ui-monospace,monospace;")}>Time saved</div>
                <div style={s("margin-top:18px;display:flex;align-items:baseline;gap:8px;")}><span style={s("font-size:2.7rem;font-weight:600;letter-spacing:-0.03em;")}>3&ndash;4</span><span style={s("font-size:1rem;color:#a1a0a6;")}>hrs / clinician / wk</span></div>
              </div>
              <div style={s("background:#0a0a0b;padding:34px 28px;")}>
                <div style={s("font-size:12px;letter-spacing:0.04em;text-transform:uppercase;color:#76757c;font-family:var(--font-mono),ui-monospace,monospace;")}>Throughput</div>
                <div style={s("margin-top:18px;display:flex;align-items:baseline;gap:8px;")}><span style={s("font-size:2.7rem;font-weight:600;letter-spacing:-0.03em;")}><span data-count="70">70</span></span><span style={s("font-size:1rem;color:#a1a0a6;")}>patients / day</span></div>
              </div>
            </div>
      
            <div data-reveal style={s("opacity:0;transform:translateY(22px);transition:opacity 1s cubic-bezier(.16,1,.3,1) .1s,transform 1s cubic-bezier(.16,1,.3,1) .1s;margin-top:36px;display:grid;grid-template-columns:1.4fr 1fr;gap:28px;align-items:start;")}>
              <blockquote style={s("margin:0;padding:36px 38px;background:#141416;border:1px solid rgba(255,255,255,0.08);border-radius:18px;")}>
                <p style={s("margin:0;font-size:clamp(1.15rem,1.9vw,1.5rem);line-height:1.5;letter-spacing:-0.01em;font-weight:400;color:#ecebef;")}>&ldquo;Our notes are way more accurate and complete &mdash; no longer dependent on someone&rsquo;s good or bad day. The AI gives us the same high-quality structure every time.&rdquo;</p>
                <footer style={s("margin-top:22px;font-size:14px;color:#8d8c92;")}>&mdash; Eulices Lopez, as quoted in the Omi case study</footer>
              </blockquote>
              <div style={s("padding:36px 32px;background:#141416;border:1px solid rgba(255,255,255,0.08);border-radius:18px;")}>
                <div style={s("font-size:12px;letter-spacing:0.04em;text-transform:uppercase;color:#76757c;font-family:var(--font-mono),ui-monospace,monospace;")}>What I owned</div>
                <p style={s("margin:16px 0 0;font-size:15px;line-height:1.6;color:#b5b4ba;")}>Records, transcribes, and generates structured HPI notes matched to the clinic&rsquo;s EZDERM EMR templates. HIPAA-compliant. Used daily by doctors, nurses, and medical assistants.</p>
                <a href="https://www.omi.me/blogs/case-studies/how-graham-dermatology-uses-omi-to-transform-medical-scribing-and-patient-care" target="_blank" rel="noopener" style={s("margin-top:22px;text-decoration:none;display:inline-flex;align-items:center;gap:7px;color:var(--accent,#3b6fe0);font-size:14px;font-weight:500;")}>Full case study on omi.me <span>&#8599;</span></a>
              </div>
            </div>
          </div>
        </section>
  );
}
