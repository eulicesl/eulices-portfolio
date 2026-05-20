/** Shared section registry for nav, scroll-spy, and ⌘K palette. */

export type SiteSection = {
  id: string;
  label: string;
  shortLabel?: string;
  keywords?: string[];
};

export const siteSections: SiteSection[] = [
  { id: "top", label: "Introduction", shortLabel: "Home", keywords: ["hero", "start"] },
  {
    id: "case-study",
    label: "Graham Dermatology × Omi",
    shortLabel: "Case study",
    keywords: ["omi", "dermatology", "featured"],
  },
  {
    id: "native",
    label: "Native iOS apps",
    shortLabel: "Apps",
    keywords: ["lumen", "testflight", "ios"],
  },
  {
    id: "nova",
    label: "N.O.V.A. deep dive",
    shortLabel: "N.O.V.A.",
    keywords: ["swift", "react native", "modules"],
  },
  {
    id: "omi",
    label: "Omi platform apps",
    shortLabel: "Omi apps",
    keywords: ["neva", "brain", "jarvis"],
  },
  { id: "stack", label: "Stack & tooling", shortLabel: "Stack", keywords: ["python", "fastapi"] },
  { id: "contact", label: "Contact", shortLabel: "Contact", keywords: ["email", "hire"] },
];

export const navSections = siteSections.filter((s) => s.id !== "top");
