// Content source of truth. Keep data typed and separate from presentation.

export const profile = {
  name: "Eulices Lopez",
  location: "Burlington, NC",
  eyebrow: "Applied AI Engineer · North Carolina",
  email: "leulices@gmail.com",
  github: "https://github.com/eulicesl",
  linkedin: "https://www.linkedin.com/in/euliceslopez",
} as const;

export const caseStudy = {
  title: "Graham Dermatology × Omi",
  partner: "Omi",
  url: "https://www.omi.me/blogs/case-studies/how-graham-dermatology-uses-omi-to-transform-medical-scribing-and-patient-care",
  description:
    "Replaced manual charting with an AI workflow that records, transcribes, and generates structured HPI notes formatted to match the clinic's EZDERM EMR templates. HIPAA-compliant. Now used daily by the clinic's doctors, nurses, and medical assistants.",
  metrics: [
    { label: "Same-day chart completion", value: "60%", after: "95%" },
    { label: "Note error rate", value: "15–20%", after: "<3%" },
    { label: "Time saved per clinician", value: "3–4 hrs / week" },
    { label: "Patients per day", value: "Up to 70" },
  ],
  quote: {
    text: "Our notes are way more accurate and complete — no longer dependent on someone's good or bad day. The AI gives us the same high-quality structure every time.",
    cite: "Eulices Lopez, as quoted in the Omi case study",
  },
} as const;

export type NativeApp = {
  name: string;
  description: string;
  stack: string;
  testflight: string;
  icon: string;
  screenshot?: string;
  screenshotAlt: string;
};

export const nativeApps: NativeApp[] = [
  {
    name: "Lumen Personal AI",
    description:
      "Privacy-first AI assistant for iPhone and iPad. Apple Intelligence on-device by default, optional Ollama local or cloud. Conversation search, memories, document import, voice input, image attachments, and built-in tools.",
    stack: "SwiftUI · iOS 26 · iPadOS 26",
    testflight: "https://testflight.apple.com/join/v8mYExkK",
    icon: "/apps/lumen-icon.png",
    screenshot: "/apps/lumen-01-conversation.png",
    screenshotAlt: "Lumen conversation view on iPhone",
  },
  {
    name: "N.O.V.A. AI",
    description:
      "Private-by-default iOS AI assistant. Dual on-device inference (Apple Foundation Models + Ollama), 8 custom Swift modules, Live Activities, Vision OCR. Comprehensive test suite, ~5,000 LOC of native Swift.",
    stack: "React Native · Expo SDK 54 · Swift native modules",
    testflight: "https://testflight.apple.com/join/FnAEfXf2",
    icon: "/apps/nova-icon.png",
    screenshot: "/apps/nova-01.png",
    screenshotAlt: "N.O.V.A. home screen on iPhone — Ollama connected",
  },
];

export const novaMetrics = [
  { label: "Test suite", value: "1,800+ passing · 28 suites" },
  { label: "Native Swift", value: "~5,000 LOC · 8 modules" },
  { label: "Screens / routes", value: "21 (Expo Router, typed)" },
  { label: "Reusable components", value: "71" },
  { label: "Dependencies", value: "60 prod · 44 dev" },
] as const;

export const ciGates = [
  "TypeScript strict",
  "ESLint",
  "Jest",
  "CodeQL",
  "Dependency review",
] as const;

export const novaModules = [
  "Foundation Models",
  "Live Activities",
  "EventKit · Reminders",
  "EventKit · Calendar",
  "Vision · OCR",
  "Speech",
  "Siri Shortcuts",
  "Native chat input",
  "Activity controller",
] as const;

export const novaShots = [
  {
    src: "/apps/nova-settings.png",
    alt: "N.O.V.A. Settings · Advanced with 12 tool permissions, Documents + OCR, Memory, Calendar access granted",
    caption: "Settings · Advanced",
    note: "12 tool permissions · Calendar granted · OCR + Memory",
  },
  {
    src: "/apps/nova-reminders.png",
    alt: "N.O.V.A. invoking the Get Reminders tool via EventKit",
    caption: "EventKit in use",
    note: "Tool call: Get Reminders · native iOS Reminders bridge",
  },
  {
    src: "/apps/nova-code.png",
    alt: "N.O.V.A. rendering JavaScript samples with syntax highlighting",
    caption: "Code rendering",
    note: "Syntax-highlighted markdown · Hello World → Fibonacci",
  },
] as const;

export const novaArchitecture = [
  "Dual AI provider with graceful fallback — Apple Intelligence → Ollama",
  "Local-first state: Jotai atoms + MMKV + iOS Keychain (web crypto fallback)",
  "Clean deep-link migration (legacy scheme → novaai, backwards-compatible)",
  "Cross-platform stubs — .web.ts shadows for every native module so the app builds on web for testing",
] as const;

export type OmiApp = {
  name: string;
  description: string;
  installs: string;
  rating?: string;
};

export const omiApps: OmiApp[] = [
  {
    name: "NEVA Dermatology Assistant",
    description:
      "AI scribe for medical dermatology. Generates structured progress notes from provider–patient transcripts, formatted to match the clinic's EZDERM EMR templates.",
    installs: "110+",
    rating: "5.0★",
  },
  {
    name: "NEVA Cosmetic Assistant",
    description:
      "AI scribe specialized for cosmetic dermatology consults. Captures procedure documentation and structured consultation notes.",
    installs: "90+",
    rating: "5.0★",
  },
  {
    name: "Brain",
    description:
      "Personal AI memory assistant that turns everyday conversations into a searchable knowledge graph.",
    installs: "900+",
  },
  {
    name: "J.A.R.V.I.S.",
    description:
      "Voice-activated, context-aware AI companion. Surfaces reminders, calendar context, and ambient assistance.",
    installs: "1,100+",
  },
];

export const stack = [
  { label: "Python", accent: true },
  { label: "FastAPI", accent: true },
  { label: "LLMs / Prompt Engineering", accent: true },
  { label: "Swift" },
  { label: "SwiftUI" },
  { label: "React Native" },
  { label: "Expo SDK 54" },
  { label: "TypeScript" },
  { label: "Apple Foundation Models" },
  { label: "Ollama" },
  { label: "Vision / OCR" },
  { label: "EventKit" },
  { label: "Live Activities" },
  { label: "Jotai + MMKV" },
  { label: "NLP" },
  { label: "Knowledge graphs" },
  { label: "HIPAA workflows" },
  { label: "EMR-compatible output" },
] as const;
