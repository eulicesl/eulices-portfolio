import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eulices Lopez — Founding Engineer",
  description:
    "Founding Engineer · Built & deployed an AI scribe at Graham Dermatology (featured case study on Omi). 6 products shipped, 2,200+ users. Python, FastAPI, Swift, React Native.",
  openGraph: {
    title: "Eulices Lopez — Founding Engineer",
    description:
      "Featured case study on Omi. 6 products shipped. 2,200+ users. Find the problem, ship the product, own it in production.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..700&family=Geist:wght@300..600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
