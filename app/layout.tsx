import type { Metadata } from "next";
import { Fraunces, Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Fraunces uses display: "optional" to prioritize LCP. On the Lighthouse
// mobile profile (Slow 4G), the italic variable file (~149 KB) blows past
// the swap window and stretches LCP to ~3.3 s. With "optional" the browser
// enforces a ~100 ms block window and falls back to the size-adjusted
// system serif if Fraunces hasn't arrived — LCP lands at FCP (~945 ms).
// The only cost: slow-mobile first-time visitors see the fallback for
// that session. On every other viewport and repeat visit, Fraunces wins
// well within the block window and renders as intended.
// Tradeoff documented in docs/DESIGN.md.
const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["SOFT", "opsz"],
  variable: "--font-serif",
  display: "optional",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://eulices-portfolio.vercel.app"),
  title: "Eulices Lopez — Founding Engineer",
  description:
    "Founding Engineer · Built & deployed an AI scribe at Graham Dermatology (featured case study on Omi). 6 products shipped, 2,200+ users. Python, FastAPI, Swift, React Native.",
  openGraph: {
    title: "Eulices Lopez — Founding Engineer",
    description:
      "Featured case study on Omi. 6 products shipped. 2,200+ users. Find the problem, ship the product, own it in production.",
    type: "website",
    url: "/",
    siteName: "Eulices Lopez",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eulices Lopez — Founding Engineer",
    description:
      "Built & deployed an AI scribe at Graham Dermatology (featured on Omi). 6 products shipped, 2,200+ users.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${geist.variable} ${jetbrains.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
