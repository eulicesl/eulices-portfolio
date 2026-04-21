import { profile } from "@/lib/content";

export function Nav() {
  return (
    <nav className="nav-bar">
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
    </nav>
  );
}
