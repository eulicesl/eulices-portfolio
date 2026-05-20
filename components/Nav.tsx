"use client";

import { useCallback, useEffect, useState } from "react";
import { profile } from "@/lib/content";
import { navSections } from "@/lib/navigation";

export function Nav() {
  const [activeId, setActiveId] = useState<string>("top");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionEls = navSections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[];

    const hero = document.getElementById("top");
    const targets = hero ? [hero, ...sectionEls] : sectionEls;
    if (targets.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.15, 0.4] },
    );

    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("nav-open", menuOpen);
    return () => document.documentElement.classList.remove("nav-open");
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen, closeMenu]);

  return (
    <header className={`nav-shell${scrolled ? " nav-shell-scrolled" : ""}`}>
      <nav className="nav-bar" aria-label="Primary">
        <div className="wrap nav-bar-inner">
          <a href="#top" className="sig" onClick={closeMenu}>
            {profile.name}
          </a>

          <div className="nav-links" aria-label="Sections">
            {navSections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={activeId === s.id ? "nav-link-active" : undefined}
                aria-current={activeId === s.id ? "true" : undefined}
              >
                {s.shortLabel ?? s.label}
              </a>
            ))}
          </div>

          <div className="nav-actions">
            <button
              type="button"
              className="nav-cmd-hint"
              onClick={() =>
                window.dispatchEvent(new Event("open-command-palette"))
              }
              aria-label="Open command palette (⌘K)"
            >
              <span className="nav-cmd-label">Jump</span>
              <kbd>⌘K</kbd>
            </button>

            <span className="nav-status">
              <span className="dot" aria-hidden="true" />
              Available
            </span>

            <button
              type="button"
              className="nav-menu-btn"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span className="nav-menu-icon" aria-hidden="true">
                <span />
                <span />
              </span>
              <span className="sr-only">
                {menuOpen ? "Close menu" : "Open menu"}
              </span>
            </button>
          </div>
        </div>
      </nav>

      <div
        id="mobile-nav"
        className={`nav-sheet${menuOpen ? " nav-sheet-open" : ""}`}
        hidden={!menuOpen}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          className="nav-sheet-backdrop"
          aria-label="Close menu"
          onClick={closeMenu}
          tabIndex={menuOpen ? 0 : -1}
        />
        <div className="nav-sheet-panel" role="dialog" aria-label="Navigation">
          <div className="nav-sheet-header">
            <span className="nav-sheet-title">Sections</span>
            <button
              type="button"
              className="nav-sheet-close"
              onClick={closeMenu}
              aria-label="Close"
            >
              Done
            </button>
          </div>
          <ul className="nav-sheet-list">
            {navSections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className={`nav-sheet-link${activeId === s.id ? " nav-sheet-link-active" : ""}`}
                  onClick={closeMenu}
                  aria-current={activeId === s.id ? "true" : undefined}
                >
                  <span className="nav-sheet-link-label">{s.label}</span>
                  <span className="nav-sheet-link-chev" aria-hidden="true">
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <div className="nav-sheet-footer">
            <button
              type="button"
              className="btn btn-secondary nav-sheet-cmd"
              onClick={() => {
                closeMenu();
                window.dispatchEvent(new Event("open-command-palette"));
              }}
            >
              Command palette <kbd className="nav-sheet-kbd">⌘K</kbd>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
