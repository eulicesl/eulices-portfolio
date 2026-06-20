import type { CSSProperties } from "react";

// Parses an inline CSS string into a React style object so the ported design keeps
// its exact declarations verbatim while staying valid JSX.
export function s(css: string): CSSProperties {
  const out: Record<string, string> = {};
  css.split(";").forEach((rule) => {
    if (!rule.trim()) return;
    const i = rule.indexOf(":");
    if (i < 0) return;
    let key = rule.slice(0, i).trim();
    const val = rule.slice(i + 1).trim();
    if (!key.startsWith("--")) key = key.replace(/-([a-z])/g, (_m, c) => c.toUpperCase());
    out[key] = val;
  });
  return out as CSSProperties;
}
