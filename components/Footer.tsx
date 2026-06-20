export function Footer() {
  return (
    <footer className="footer-outer">
      <div className="wrap footer">
        <span>© {new Date().getFullYear()} Eulices Lopez</span>
        <span>
          Next.js · Vercel · <kbd className="footer-kbd">⌘K</kbd> to navigate
        </span>
      </div>
    </footer>
  );
}
