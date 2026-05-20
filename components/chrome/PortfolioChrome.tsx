"use client";

import { ScrollProgress } from "./ScrollProgress";
import { CommandPalette } from "./CommandPalette";

/** Global interactive layer: scroll progress + ⌘K palette. */
export function PortfolioChrome() {
  return (
    <>
      <ScrollProgress />
      <CommandPalette />
    </>
  );
}
