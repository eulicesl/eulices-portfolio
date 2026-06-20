import { s } from "@/lib/redesign/cssString";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={s("background:#08080a;color:#8d8c92;border-top:1px solid rgba(255,255,255,0.08);padding:34px clamp(20px,5vw,72px);")}>
      <div style={s("max-width:1200px;margin:0 auto;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:14px;font-size:13.5px;")}>
        <span>&copy; {year} Eulices Lopez</span>
        <span style={s("font-family:var(--font-mono),ui-monospace,monospace;font-size:12.5px;color:#6f6e75;")}>Built with Next.js &middot; Deployed on Vercel</span>
      </div>
    </footer>
  );
}
