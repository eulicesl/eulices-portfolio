"use client";

import { Children, cloneElement, isValidElement, useEffect, useRef, useState } from "react";
import type { ReactElement, ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  /** Stagger delay between children in ms */
  stagger?: number;
};

export function Stagger({ children, className = "", stagger = 70 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
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
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  const items = Children.toArray(children);

  return (
    <div
      ref={ref}
      className={`stagger${visible ? " stagger-visible" : ""}${className ? ` ${className}` : ""}`}
      style={
        {
          "--stagger-step": `${stagger}ms`,
        } as React.CSSProperties
      }
    >
      {items.map((child, i) => {
        if (!isValidElement(child)) return child;
        const el = child as ReactElement<{ style?: React.CSSProperties }>;
        return cloneElement(el, {
          key: child.key ?? i,
          style: {
            ...(el.props.style ?? {}),
            ["--stagger-i" as string]: i,
          },
        });
      })}
    </div>
  );
}
