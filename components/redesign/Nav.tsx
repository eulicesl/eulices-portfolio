import { s } from "@/lib/redesign/cssString";

export default function Nav() {
  return (
      <nav aria-label="Primary" style={s("position:fixed;top:0;left:0;right:0;z-index:100;border-bottom:1px solid rgba(20,20,25,0);background:rgba(244,243,240,0);transition:background .35s ease,border-color .35s ease;")}>
          <div style={s("max-width:1200px;margin:0 auto;padding:16px clamp(20px,5vw,72px);display:flex;align-items:center;justify-content:space-between;gap:24px;")}>
            <a href="#top" data-nav-name style={s("text-decoration:none;color:var(--ink);font-size:15px;font-weight:600;letter-spacing:-0.01em;transition:color .35s ease;")}>Eulices Lopez</a>
            <div style={s("display:flex;align-items:center;gap:clamp(14px,2.4vw,34px);")}>
              <a href="#case-study" data-nav-link style={s("text-decoration:none;color:var(--nav-link);font-size:14px;font-weight:450;letter-spacing:-0.01em;transition:color .2s;")} data-hover="color:var(--ink);">Case study</a>
              <a href="#nova" data-nav-link style={s("text-decoration:none;color:var(--nav-link);font-size:14px;font-weight:450;letter-spacing:-0.01em;transition:color .2s;")} data-hover="color:var(--ink);">N.O.V.A.</a>
              <a href="#stack" data-nav-link style={s("text-decoration:none;color:var(--nav-link);font-size:14px;font-weight:450;letter-spacing:-0.01em;transition:color .2s;")} data-hover="color:var(--ink);">Stack</a>
              <button data-theme-toggle type="button" aria-label="Toggle dark mode" style={s("cursor:pointer;display:inline-flex;align-items:center;justify-content:center;width:34px;height:34px;border-radius:999px;background:transparent;border:1px solid var(--hair-2);color:var(--ink);transition:border-color .2s,color .35s ease;")} data-hover="border-color:var(--ink-3);"><span style={s("display:block;width:13px;height:13px;border-radius:50%;border:1.5px solid currentColor;background:linear-gradient(90deg,currentColor 0 50%,transparent 50% 100%);")}></span></button>
              <a href="#contact" data-nav-cta data-magnetic style={s("text-decoration:none;color:var(--btn-ink);background:var(--btn-bg);font-size:14px;font-weight:500;letter-spacing:-0.01em;padding:9px 16px;border-radius:999px;transition:transform .2s,background .2s,color .35s ease;")} data-hover="transform:translateY(-1px);">Get in touch</a>
            </div>
          </div>
        </nav>
  );
}
