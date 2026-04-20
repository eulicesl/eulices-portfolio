import { profile, caseStudy } from "@/lib/content";
import { RevealSection } from "./RevealSection";

export function Contact() {
  const links = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    {
      label: "GitHub",
      value: "github.com/eulicesl →",
      href: profile.github,
      external: true,
    },
    {
      label: "LinkedIn",
      value: "in/euliceslopez →",
      href: profile.linkedin,
      external: true,
    },
    {
      label: "Case study",
      value: "Omi × Graham Dermatology →",
      href: caseStudy.url,
      external: true,
    },
  ];

  return (
    <RevealSection id="contact">
      <div className="section-label">Get in touch</div>
      <h2>Looking for my next role.</h2>
      <p className="contact-intro">
        Open to <em>Applied AI</em>, <em>Forward Deployed</em>, and{" "}
        <em>Healthcare AI</em> engineering roles. Remote or hybrid (North
        Carolina Triangle). The best projects are ones where a real user&apos;s
        workflow is on the line.
      </p>

      <div className="links">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className="link-row"
            {...(l.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            <span className="link-label">{l.label}</span>
            <span className="link-value">{l.value}</span>
          </a>
        ))}
      </div>
    </RevealSection>
  );
}
