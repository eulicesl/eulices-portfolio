import { useEffect, RefObject } from "react";

type EngineOpts = {
  accent?: string;
  reduceMotion?: boolean;
  showProgress?: boolean;
  defaultDark?: boolean;
};

// Drives every cross-cutting and section interaction (three.js hero, contact plexus,
// flow diagram, tilt, lightbox, count-ups, progress rail, magnetic, custom cursor,
// scroll-reveal, theme) over the mounted subtree of wrapRef.
export function useRedesignEngine(wrapRef: RefObject<HTMLElement | null>, opts: EngineOpts = {}) {
  const { accent = "#3b6fe0", reduceMotion = false, showProgress = true, defaultDark = false } = opts;
  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const root = wrap.querySelector("[data-theme]") as HTMLElement | null;
    if (!root) return;

    const nav = root.querySelector('nav[aria-label="Primary"]') as HTMLElement | null;
    const bar = root.querySelector("[data-bar]") as HTMLElement | null;
    const heroCanvas = root.querySelector("[data-hero-canvas]") as HTMLCanvasElement | null;
    const heroSection = root.querySelector("#top") as HTMLElement | null;
    const contactCanvas = root.querySelector("[data-contact-canvas]") as HTMLCanvasElement | null;
    const contactSection = root.querySelector("#contact") as HTMLElement | null;

    const cleanups: Array<() => void> = [];
    const onCleanup = (fn: () => void) => cleanups.push(fn);
    const prefersReduced = () =>
      reduceMotion === true ||
      (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);

    root.style.setProperty("--accent", accent || "#3b6fe0");

    // ---------- count-ups + scan ----------
    const animateCount = (el: any) => {
      if (el.__counted) return;
      el.__counted = true;
      const target = parseFloat(el.getAttribute("data-count"));
      if (isNaN(target)) return;
      const dec = parseInt(el.getAttribute("data-decimals") || "0", 10);
      const sep = el.getAttribute("data-sep") === "1";
      const pre = el.getAttribute("data-prefix") || "";
      const suf = el.getAttribute("data-suffix") || "";
      const fmt = (v: number) => {
        let n = dec > 0 ? v.toFixed(dec) : String(Math.round(v));
        if (sep) n = n.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return pre + n + suf;
      };
      if (prefersReduced()) { el.textContent = fmt(target); return; }
      const dur = 1300, start = performance.now();
      const step = (now: number) => {
        const t = Math.min(1, (now - start) / dur);
        const e = 1 - Math.pow(1 - t, 3);
        el.textContent = fmt(target * e);
        if (t < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    const kickCounts = (el: any) => {
      if (!el || !el.querySelectorAll) return;
      if (el.hasAttribute && el.hasAttribute("data-count")) animateCount(el);
      const list = el.querySelectorAll("[data-count]");
      for (let i = 0; i < list.length; i++) animateCount(list[i]);
      if (!prefersReduced()) {
        const scans = el.querySelectorAll("[data-scan]");
        for (let i = 0; i < scans.length; i++) {
          const s = scans[i] as HTMLElement;
          s.style.animation = "none";
          void s.offsetWidth;
          s.style.animation = "scanSweep 1.5s ease-in-out";
        }
      }
    };

    // ---------- reveal-on-scroll ----------
    const items = Array.prototype.slice.call(root.querySelectorAll("[data-reveal]"));
    let pending = items;
    const revealAll = (arr: any[]) => arr.forEach((el) => { el.setAttribute("data-shown", "1"); kickCounts(el); });
    if (prefersReduced()) { revealAll(items); pending = []; }
    let revealInterval: any = null;
    const checkReveals = () => {
      if (!pending.length) { if (revealInterval) { clearInterval(revealInterval); revealInterval = null; } return; }
      const trigger = (window.innerHeight || document.documentElement.clientHeight) * 0.92;
      const still: any[] = [];
      pending.forEach((el) => {
        if (el.getBoundingClientRect().top < trigger) { el.setAttribute("data-shown", "1"); kickCounts(el); }
        else still.push(el);
      });
      pending = still;
    };
    if (!prefersReduced()) revealInterval = setInterval(checkReveals, 180);

    // ---------- section rail ----------
    const rail = Array.prototype.slice.call(root.querySelectorAll("[data-rail-link]")).map((link: any) => ({
      id: link.getAttribute("data-rail-for"),
      tick: link.querySelector("[data-rail-tick]") as HTMLElement | null,
      label: link.querySelector("[data-rail-label]") as HTMLElement | null,
    }));
    const updateRail = () => {
      if (!rail.length) return;
      const trig = window.innerHeight * 0.42;
      let activeIdx = 0;
      for (let i = 0; i < rail.length; i++) {
        const sec = document.getElementById(rail[i].id);
        if (sec && sec.getBoundingClientRect().top <= trig) activeIdx = i;
      }
      for (let i = 0; i < rail.length; i++) {
        const r = rail[i], on = i === activeIdx;
        if (r.tick) { r.tick.style.width = on ? "28px" : "14px"; r.tick.style.opacity = on ? "1" : "0.4"; }
        if (r.label) r.label.style.opacity = on ? "1" : "";
      }
    };

    // ---------- nav + progress bar on scroll ----------
    const showBar = showProgress !== false;
    if (bar && !showBar) bar.style.display = "none";
    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset || 0;
      if (nav) {
        const on = y > 24;
        nav.style.background = on ? "var(--nav-scrolled)" : "transparent";
        nav.style.borderBottomColor = on ? "var(--hair)" : "transparent";
        const blur = on ? "saturate(180%) blur(20px)" : "none";
        nav.style.backdropFilter = blur;
        (nav.style as any).webkitBackdropFilter = blur;
        if (on) nav.removeAttribute("data-top"); else nav.setAttribute("data-top", "1");
      }
      if (bar && showBar) {
        const h = document.documentElement.scrollHeight - window.innerHeight;
        const p = h > 0 ? Math.min(1, Math.max(0, y / h)) : 0;
        bar.style.transform = "scaleX(" + p + ")";
      }
      updateRail();
      checkReveals();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    onCleanup(() => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); });
    onScroll();
    const t1 = setTimeout(onScroll, 250);
    const t2 = setTimeout(onScroll, 800);
    const fb = setTimeout(() => { if (pending.length) { revealAll(pending); pending = []; } }, 3500);
    const railTimer = setInterval(updateRail, 200);
    onCleanup(() => { clearTimeout(t1); clearTimeout(t2); clearTimeout(fb); clearInterval(railTimer); if (revealInterval) clearInterval(revealInterval); });

    // ---------- theme ----------
    const applyTheme = (theme: string) => {
      root.setAttribute("data-theme", theme);
      try { localStorage.setItem("elx-theme", theme); } catch (e) {}
      document.body.style.background = theme === "dark" ? "#0a0a0b" : "#f4f3f0";
      onScroll();
    };
    const toggleTheme = () => applyTheme((root.getAttribute("data-theme") || "light") === "dark" ? "light" : "dark");

    // ---------- hover (style-hover attr) ----------
    const parseStyle = (str: string) => {
      const o: Record<string, string> = {};
      str.split(";").forEach((r) => { if (!r.trim()) return; const i = r.indexOf(":"); o[r.slice(0, i).trim()] = r.slice(i + 1).trim(); });
      return o;
    };
    root.querySelectorAll("[data-hover]").forEach((el: any) => {
      const hov = parseStyle(el.getAttribute("data-hover"));
      const keys = Object.keys(hov);
      const prev: Record<string, string> = {};
      const enter = () => keys.forEach((k) => { prev[k] = el.style.getPropertyValue(k); el.style.setProperty(k, hov[k]); });
      const leave = () => keys.forEach((k) => el.style.setProperty(k, prev[k] || ""));
      el.addEventListener("pointerenter", enter);
      el.addEventListener("pointerleave", leave);
      onCleanup(() => { el.removeEventListener("pointerenter", enter); el.removeEventListener("pointerleave", leave); });
    });

    // ---------- lightbox ----------
    let lightboxEl: HTMLElement | null = null;
    const closeLightbox = () => { if (lightboxEl) { lightboxEl.remove(); lightboxEl = null; document.body.style.overflow = ""; } };
    const openLightbox = (src: string, alt: string | null) => {
      closeLightbox();
      const ov = document.createElement("div");
      ov.setAttribute("role", "dialog"); ov.setAttribute("aria-modal", "true"); ov.setAttribute("aria-label", "Enlarged screenshot");
      ov.style.cssText = "position:fixed;inset:0;z-index:300;background:rgba(6,7,12,0.88);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);display:flex;align-items:center;justify-content:center;padding:6vh 6vw;cursor:zoom-out;";
      const img = document.createElement("img");
      img.src = src; img.alt = alt || "";
      img.style.cssText = "max-width:100%;max-height:88vh;border-radius:26px;box-shadow:0 50px 130px -30px rgba(0,0,0,0.85);";
      const btn = document.createElement("button");
      btn.type = "button"; btn.setAttribute("aria-label", "Close enlarged image"); btn.textContent = "Close \u2715";
      btn.style.cssText = "position:fixed;top:26px;right:30px;cursor:pointer;font-family:var(--font-mono),ui-monospace,monospace;font-size:13px;color:#d4d3d9;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.2);border-radius:999px;padding:9px 16px;";
      ov.appendChild(img); ov.appendChild(btn);
      ov.addEventListener("click", closeLightbox);
      document.body.appendChild(ov); lightboxEl = ov; document.body.style.overflow = "hidden";
    };

    // ---------- delegated clicks (zoom / copy / theme toggle) ----------
    const onRootClick = (e: any) => {
      const zoom = e.target.closest && e.target.closest("img[data-zoom]");
      if (zoom) { openLightbox(zoom.currentSrc || zoom.src, zoom.getAttribute("alt")); return; }
      const copy = e.target.closest && e.target.closest("[data-copy]");
      if (copy) {
        const pre = root.querySelector("[data-code]");
        const text = pre ? (pre as HTMLElement).textContent || "" : "";
        const done = () => { copy.textContent = "Copied"; setTimeout(() => { copy.textContent = "Copy"; }, 1600); };
        try { if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(done, done); else done(); }
        catch (_) { done(); }
        return;
      }
      const tog = e.target.closest && e.target.closest("[data-theme-toggle]");
      if (tog) { toggleTheme(); return; }
    };
    root.addEventListener("click", onRootClick);
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeLightbox(); };
    window.addEventListener("keydown", onKey);
    onCleanup(() => { root.removeEventListener("click", onRootClick); window.removeEventListener("keydown", onKey); closeLightbox(); });

    // ---------- tilt ----------
    if (!prefersReduced() && window.matchMedia && window.matchMedia("(pointer: fine)").matches) {
      root.querySelectorAll("[data-tilt]").forEach((el: any) => {
        el.style.transformStyle = "preserve-3d"; el.style.willChange = "transform";
        const glare = el.querySelector("[data-glare]") as HTMLElement | null;
        const onMove = (e: any) => {
          const r = el.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
          el.style.transition = "transform .1s linear";
          el.style.transform = "perspective(1000px) rotateX(" + (0.5 - py) * 11 + "deg) rotateY(" + (px - 0.5) * 11 + "deg) scale(1.03)";
          if (glare) { glare.style.opacity = "1"; glare.style.background = "radial-gradient(circle at " + px * 100 + "% " + py * 100 + "%, rgba(255,255,255,0.28), rgba(255,255,255,0) 55%)"; }
        };
        const onLeave = () => {
          el.style.transition = "transform .55s cubic-bezier(.16,1,.3,1)";
          el.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
          if (glare) glare.style.opacity = "0";
        };
        el.addEventListener("pointermove", onMove); el.addEventListener("pointerleave", onLeave);
        onCleanup(() => { el.removeEventListener("pointermove", onMove); el.removeEventListener("pointerleave", onLeave); });
      });
    }

    // ---------- magnetic ----------
    if (!prefersReduced() && window.matchMedia && window.matchMedia("(pointer: fine)").matches) {
      root.querySelectorAll("[data-magnetic]").forEach((el: any) => {
        const onMove = (e: any) => {
          const r = el.getBoundingClientRect();
          const x = e.clientX - (r.left + r.width / 2), y = e.clientY - (r.top + r.height / 2);
          el.style.transition = "transform .15s ease";
          el.style.transform = "translate(" + x * 0.28 + "px," + y * 0.4 + "px)";
        };
        const onLeave = () => { el.style.transition = "transform .5s cubic-bezier(.16,1,.3,1)"; el.style.transform = "translate(0,0)"; };
        el.addEventListener("pointermove", onMove); el.addEventListener("pointerleave", onLeave);
        onCleanup(() => { el.removeEventListener("pointermove", onMove); el.removeEventListener("pointerleave", onLeave); });
      });
    }

    // ---------- custom cursor ----------
    if (!prefersReduced() && window.matchMedia && window.matchMedia("(pointer: fine)").matches) {
      const ring = document.createElement("div");
      ring.style.cssText = "position:fixed;top:0;left:0;width:34px;height:34px;border:1.5px solid rgba(255,255,255,0.9);border-radius:50%;pointer-events:none;z-index:9998;transform:translate(-50%,-50%);transition:width .25s ease,height .25s ease,background .25s ease;will-change:transform;mix-blend-mode:difference;";
      const dot = document.createElement("div");
      dot.style.cssText = "position:fixed;top:0;left:0;width:6px;height:6px;border-radius:50%;background:#fff;pointer-events:none;z-index:9999;transform:translate(-50%,-50%);will-change:transform;mix-blend-mode:difference;";
      ring.setAttribute("aria-hidden", "true"); dot.setAttribute("aria-hidden", "true");
      document.body.appendChild(ring); document.body.appendChild(dot);
      document.documentElement.style.cursor = "none";
      let mx = window.innerWidth / 2, my = window.innerHeight / 2, rx = mx, ry = my, craf = 0;
      const sel = "a,button,[data-tilt],[data-zoom],[data-magnetic],[role='button']";
      const cMove = (e: any) => { mx = e.clientX; my = e.clientY; dot.style.transform = "translate(" + mx + "px," + my + "px) translate(-50%,-50%)"; };
      const cOver = (e: any) => { if (e.target.closest && e.target.closest(sel)) { ring.style.width = "56px"; ring.style.height = "56px"; ring.style.background = "rgba(255,255,255,0.18)"; } };
      const cOut = (e: any) => { if (e.target.closest && e.target.closest(sel)) { ring.style.width = "34px"; ring.style.height = "34px"; ring.style.background = "transparent"; } };
      window.addEventListener("pointermove", cMove, { passive: true });
      root.addEventListener("pointerover", cOver); root.addEventListener("pointerout", cOut);
      const cloop = () => { rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18; ring.style.transform = "translate(" + rx + "px," + ry + "px) translate(-50%,-50%)"; craf = requestAnimationFrame(cloop); };
      craf = requestAnimationFrame(cloop);
      onCleanup(() => { cancelAnimationFrame(craf); window.removeEventListener("pointermove", cMove); root.removeEventListener("pointerover", cOver); root.removeEventListener("pointerout", cOut); document.documentElement.style.cursor = ""; ring.remove(); dot.remove(); });
    }

    // ---------- flow diagram ----------
    (() => {
      const stage = root.querySelector("[data-flow-stage]");
      if (!stage) return;
      const q = (s: string) => stage.querySelector(s) as HTMLElement | null;
      const nodes = { request: q('[data-node="request"]'), fm: q('[data-node="fm"]'), ollama: q('[data-node="ollama"]'), response: q('[data-node="response"]') };
      const packet = q("[data-packet]"), fill = q('[data-track="mainfill"]'), branch = q('[data-track="branch"]'), fmStatus = q("[data-fm-status]");
      if (!packet || !nodes.request || !nodes.fm || !nodes.ollama || !nodes.response || !fill || !branch) return;
      const center = (el: HTMLElement) => { const r = el.getBoundingClientRect(), s = stage.getBoundingClientRect(); return { x: r.left + r.width / 2 - s.left, y: r.top + r.height / 2 - s.top }; };
      const setPhase = (fallback: boolean) => {
        if (fallback) {
          nodes.fm!.style.opacity = "0.5"; nodes.fm!.style.borderColor = "rgba(245,180,90,0.55)";
          if (fmStatus) { fmStatus.textContent = "unavailable"; fmStatus.style.color = "#f0b46a"; }
          nodes.ollama!.style.opacity = "1"; nodes.ollama!.style.borderColor = "rgba(120,150,255,0.6)";
          branch.style.background = "var(--accent,#3b6fe0)"; branch.style.boxShadow = "0 0 12px var(--accent,#3b6fe0)";
        } else {
          nodes.fm!.style.opacity = "1"; nodes.fm!.style.borderColor = "rgba(120,150,255,0.6)";
          if (fmStatus) { fmStatus.textContent = "on-device"; fmStatus.style.color = "oklch(0.72 0.16 150)"; }
          nodes.ollama!.style.opacity = "0.45"; nodes.ollama!.style.borderColor = "rgba(255,255,255,0.12)";
          branch.style.background = "rgba(255,255,255,0.12)"; branch.style.boxShadow = "none";
        }
      };
      if (prefersReduced()) { setPhase(false); packet.style.opacity = "0"; fill.style.width = "82%"; return; }
      let phase = false, lapStart = performance.now(), fraf = 0;
      const lapDur = 3000, pause = 750;
      setPhase(false);
      const run = (now: number) => {
        const el = now - lapStart;
        if (el < lapDur) {
          const t = el / lapDur;
          const wps = phase
            ? [center(nodes.request!), center(nodes.fm!), center(nodes.ollama!), center(nodes.response!)]
            : [center(nodes.request!), center(nodes.fm!), center(nodes.response!)];
          const segs = wps.length - 1, st = Math.min(segs - 1, Math.floor(t * segs)), lt = t * segs - st;
          const a = wps[st], b = wps[st + 1];
          packet.style.opacity = "1";
          packet.style.transform = "translate(" + (a.x + (b.x - a.x) * lt) + "px," + (a.y + (b.y - a.y) * lt) + "px) translate(-50%,-50%)";
          fill.style.width = (9 + t * 82) + "%";
        } else if (el < lapDur + pause) { packet.style.opacity = "0"; }
        else { phase = !phase; setPhase(phase); fill.style.width = "9%"; lapStart = performance.now(); }
        fraf = requestAnimationFrame(run);
      };
      fraf = requestAnimationFrame(run);
      onCleanup(() => cancelAnimationFrame(fraf));
    })();

    // ---------- contact plexus ----------
    (() => {
      const canvas = contactCanvas, area = contactSection;
      if (!canvas || !area || !canvas.getContext) return;
      const ctx = canvas.getContext("2d")!;
      const hexToRgb = (hex: string) => { hex = (hex || "").replace("#", ""); if (hex.length === 3) hex = hex.split("").map((c) => c + c).join(""); const n = parseInt(hex, 16); if (isNaN(n)) return { r: 59, g: 111, b: 224 }; return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 }; };
      const c = hexToRgb(accent || "#3b6fe0"); const rgb = c.r + "," + c.g + "," + c.b;
      let w = 0, h = 0, dpr = 1, raf = 0;
      const pts: any[] = [];
      const resize = () => { dpr = Math.min(window.devicePixelRatio || 1, 2); w = area.clientWidth; h = area.clientHeight; canvas.width = Math.max(1, Math.floor(w * dpr)); canvas.height = Math.max(1, Math.floor(h * dpr)); ctx.setTransform(dpr, 0, 0, dpr, 0, 0); };
      resize();
      const count = Math.round(Math.min(84, Math.max(32, (w * h) / 15000)));
      for (let i = 0; i < count; i++) pts.push({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - 0.5) * 0.22, vy: (Math.random() - 0.5) * 0.22, g: Math.random() < 0.14 });
      const mouse = { x: -9999, y: -9999 };
      const mMove = (e: any) => { const r = area.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; };
      const mLeave = () => { mouse.x = -9999; mouse.y = -9999; };
      area.addEventListener("mousemove", mMove); area.addEventListener("mouseleave", mLeave);
      let ro: any = null;
      if (typeof ResizeObserver !== "undefined") { ro = new ResizeObserver(() => resize()); ro.observe(area); } else window.addEventListener("resize", resize);
      const maxD = 128;
      const frame = (loop: boolean) => {
        ctx.clearRect(0, 0, w, h);
        for (let i = 0; i < pts.length; i++) { const p = pts[i]; p.x += p.vx; p.y += p.vy; if (p.x <= 0) { p.x = 0; p.vx *= -1; } else if (p.x >= w) { p.x = w; p.vx *= -1; } if (p.y <= 0) { p.y = 0; p.vy *= -1; } else if (p.y >= h) { p.y = h; p.vy *= -1; } }
        for (let i = 0; i < pts.length; i++) for (let j = i + 1; j < pts.length; j++) { const a = pts[i], b = pts[j], dx = a.x - b.x, dy = a.y - b.y, d = Math.sqrt(dx * dx + dy * dy); if (d < maxD) { ctx.strokeStyle = "rgba(" + rgb + "," + (1 - d / maxD) * 0.3 + ")"; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); } }
        if (mouse.x > -1000) for (let i = 0; i < pts.length; i++) { const p = pts[i], dx = p.x - mouse.x, dy = p.y - mouse.y, d = Math.sqrt(dx * dx + dy * dy); if (d < 185) { ctx.strokeStyle = "rgba(" + rgb + "," + (1 - d / 185) * 0.55 + ")"; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke(); p.vx += (mouse.x - p.x) * 0.00003; p.vy += (mouse.y - p.y) * 0.00003; } const sp = Math.sqrt(p.vx * p.vx + p.vy * p.vy); if (sp > 0.55) { p.vx = p.vx / sp * 0.55; p.vy = p.vy / sp * 0.55; } }
        for (let i = 0; i < pts.length; i++) { const p = pts[i]; ctx.beginPath(); ctx.fillStyle = p.g ? "rgba(47,191,107,0.9)" : "rgba(" + rgb + ",0.85)"; ctx.arc(p.x, p.y, p.g ? 2.3 : 1.6, 0, 6.2832); ctx.fill(); }
        if (loop) raf = requestAnimationFrame(() => frame(true));
      };
      frame(false);
      if (!prefersReduced()) raf = requestAnimationFrame(() => frame(true));
      onCleanup(() => { if (raf) cancelAnimationFrame(raf); area.removeEventListener("mousemove", mMove); area.removeEventListener("mouseleave", mLeave); if (ro) ro.disconnect(); else window.removeEventListener("resize", resize); });
    })();

    // ---------- hero 3D (three.js) ----------
    const glowTexture = (THREE: any) => { const cv = document.createElement("canvas"); cv.width = cv.height = 64; const x = cv.getContext("2d")!; const g = x.createRadialGradient(32, 32, 0, 32, 32, 32); g.addColorStop(0, "rgba(255,255,255,1)"); g.addColorStop(0.22, "rgba(255,255,255,0.85)"); g.addColorStop(1, "rgba(255,255,255,0)"); x.fillStyle = g; x.beginPath(); x.arc(32, 32, 32, 0, Math.PI * 2); x.fill(); const t = new THREE.Texture(cv); t.needsUpdate = true; return t; };
    const initHero3D = (THREE: any) => {
      if (!THREE || !heroCanvas || !heroSection) return;
      let w = heroSection.clientWidth || window.innerWidth, h = heroSection.clientHeight || window.innerHeight;
      let renderer: any;
      try { renderer = new THREE.WebGLRenderer({ canvas: heroCanvas, alpha: true, antialias: true, preserveDrawingBuffer: true }); } catch (e) { return; }
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setSize(w, h, false);
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(55, w / h, 0.1, 100); camera.position.z = 17;
      const group = new THREE.Group(); scene.add(group);
      const accentC = new THREE.Color(accent || "#3b6fe0"), white = new THREE.Color("#eaf1ff");
      const N = 2600, radius = 6.6;
      const positions = new Float32Array(N * 3), colors = new Float32Array(N * 3), phase = new Float32Array(N), baseR = new Float32Array(N), dir = new Float32Array(N * 3);
      for (let i = 0; i < N; i++) {
        const t = (i + 0.5) / N, inc = Math.acos(1 - 2 * t), az = Math.PI * (1 + Math.sqrt(5)) * i, rr = radius * (0.84 + Math.random() * 0.24);
        const ux = Math.sin(inc) * Math.cos(az), uy = Math.cos(inc), uz = Math.sin(inc) * Math.sin(az);
        dir[i * 3] = ux; dir[i * 3 + 1] = uy; dir[i * 3 + 2] = uz; baseR[i] = rr;
        positions[i * 3] = ux * rr; positions[i * 3 + 1] = uy * rr; positions[i * 3 + 2] = uz * rr;
        const mix = Math.pow(Math.random(), 2.2), col = accentC.clone().lerp(white, mix * 0.9);
        colors[i * 3] = col.r; colors[i * 3 + 1] = col.g; colors[i * 3 + 2] = col.b; phase[i] = Math.random() * Math.PI * 2;
      }
      const geo = new THREE.BufferGeometry(); const posAttr = new THREE.BufferAttribute(positions, 3);
      geo.setAttribute("position", posAttr); geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
      const mat = new THREE.PointsMaterial({ size: 0.17, map: glowTexture(THREE), vertexColors: true, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0.92 });
      group.add(new THREE.Points(geo, mat));
      const ico = new THREE.IcosahedronGeometry(3.9, 1), edges = new THREE.EdgesGeometry(ico);
      const lineMat = new THREE.LineBasicMaterial({ color: accentC, transparent: true, opacity: 0.26 });
      const wire = new THREE.LineSegments(edges, lineMat); group.add(wire);
      const target = { x: 0, y: 0 }, ease = { x: 0, y: 0 };
      const hMove = (e: any) => { const r = heroSection.getBoundingClientRect(); target.y = ((e.clientX - r.left) / r.width - 0.5) * 0.7; target.x = ((e.clientY - r.top) / r.height - 0.5) * 0.45; };
      window.addEventListener("pointermove", hMove, { passive: true });
      let ro: any = null, heroH = h;
      const resize = () => { w = heroSection.clientWidth; h = heroSection.clientHeight; if (!w || !h) return; heroH = h; camera.aspect = w / h; camera.updateProjectionMatrix(); renderer.setSize(w, h, false); };
      if (typeof ResizeObserver !== "undefined") { ro = new ResizeObserver(resize); ro.observe(heroSection); } else window.addEventListener("resize", resize);
      let spin = 0, tt = 0, hraf = 0;
      const render = (loop: boolean) => {
        tt += 0.012;
        const prog = Math.min(1, Math.max(0, (window.scrollY || 0) / Math.max(1, heroH)));
        spin += 0.0016 + prog * 0.006;
        ease.x += (target.x - ease.x) * 0.045; ease.y += (target.y - ease.y) * 0.045;
        group.rotation.y = spin + ease.y; group.rotation.x = ease.x; group.position.y = prog * 1.8;
        wire.rotation.y -= 0.0026; wire.rotation.x += 0.0012;
        const expand = 1 + prog * 0.95, pos = posAttr.array;
        for (let i = 0; i < N; i++) { const r = baseR[i] * expand + Math.sin(tt + phase[i]) * 0.16; pos[i * 3] = dir[i * 3] * r; pos[i * 3 + 1] = dir[i * 3 + 1] * r; pos[i * 3 + 2] = dir[i * 3 + 2] * r; }
        posAttr.needsUpdate = true;
        mat.opacity = 0.92 * (1 - prog * 0.82); lineMat.opacity = 0.26 * (1 - prog);
        const s = 1 + Math.sin(tt * 0.6) * 0.015; group.scale.set(s, s, s);
        renderer.render(scene, camera);
        if (loop) hraf = requestAnimationFrame(() => render(true));
      };
      render(false);
      heroCanvas.style.opacity = "1";
      if (!prefersReduced()) hraf = requestAnimationFrame(() => render(true));
      onCleanup(() => { if (hraf) cancelAnimationFrame(hraf); window.removeEventListener("pointermove", hMove); if (ro) ro.disconnect(); else window.removeEventListener("resize", resize); geo.dispose(); mat.dispose(); edges.dispose(); ico.dispose(); lineMat.dispose(); if (mat.map) mat.map.dispose(); renderer.dispose(); });
    };
    // three.js is bundled and loaded on demand so the hero WebGL never depends on a CDN.
    let heroCancelled = false;
    if (heroCanvas && heroSection) {
      import("three")
        .then((THREE) => { if (!heroCancelled) { try { initHero3D(THREE); } catch (e) {} } })
        .catch(() => {});
    }
    onCleanup(() => { heroCancelled = true; });

    // ---------- initial theme ----------
    let saved: string | null = null;
    try { saved = localStorage.getItem("elx-theme"); } catch (e) {}
    applyTheme(saved || (defaultDark ? "dark" : "light"));

    return () => cleanups.forEach((fn) => { try { fn(); } catch (e) {} });
  }, [accent, reduceMotion, showProgress, defaultDark]);
}
