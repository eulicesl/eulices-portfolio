export function Footer() {
  return (
    <footer className="footer-outer">
      <div className="wrap footer">
        <span>© {new Date().getFullYear()} Eulices Lopez</span>
        <span>Built with Next.js · Deployed on Vercel</span>
      </div>
    </footer>
  );
}
