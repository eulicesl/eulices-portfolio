"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Chapter = "a" | "b" | "c" | "d";

type Props = {
  children: ReactNode;
  className?: string;
  id?: string;
  chapter?: Chapter;
};

export function RevealSection({
  children,
  className = "",
  id,
  chapter,
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  const classes = [
    "section",
    "reveal",
    visible ? "visible" : "",
    chapter ? `chapter-${chapter}` : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section ref={ref} id={id} className={classes}>
      <div className="wrap">{children}</div>
    </section>
  );
}
