import { profile } from "@/lib/content";

export function Nav() {
  return (
    <nav className="nav-bar">
      <span className="sig">{profile.name}</span>
      <span>
        <span className="dot" />
        Available for work
      </span>
    </nav>
  );
}
