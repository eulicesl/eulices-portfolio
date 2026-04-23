import { profile } from "@/lib/content";

export function Nav() {
  return (
    <header className="nav-bar">
      <div className="wrap nav-bar-inner">
        <span className="sig">{profile.name}</span>
        <div className="nav-links">
          <a href="#case-study">Case study</a>
          <a href="#nova">N.O.V.A.</a>
          <a href="#contact">Contact</a>
        </div>
        <span className="nav-status">
          <span className="dot" />
          Available for work
        </span>
      </div>
    </header>
  );
}
