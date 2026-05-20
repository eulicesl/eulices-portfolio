"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  /** Display value when not animating (e.g. "95%", "<3%", "2,200+") */
  value: string;
  className?: string;
};

/** Subtle count-up for numeric portions; respects reduced motion. */
export function MetricCounter({ value, className = "" }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    const match = value.match(/^(\D*)([\d,.]+)(.*)$/);
    if (!match) return;

    const [, prefix, numStr, suffix] = match;
    const target = parseFloat(numStr.replace(/,/g, ""));
    if (Number.isNaN(target)) return;

    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        io.disconnect();

        const duration = 900;
        const start = performance.now();
        const hasComma = numStr.includes(",");
        const decimals = numStr.includes(".")
          ? (numStr.split(".")[1]?.length ?? 0)
          : 0;

        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          const current = target * eased;
          const formatted = hasComma
            ? Math.round(current).toLocaleString("en-US")
            : decimals > 0
              ? current.toFixed(decimals)
              : String(Math.round(current));
          setDisplay(`${prefix}${formatted}${suffix}`);
          if (t < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
