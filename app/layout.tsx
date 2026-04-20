import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eulices Lopez — Applied AI Engineer",
  description:
    "Applied AI Engineer shipping production AI for regulated healthcare and native iOS. 6 apps, 2,200+ users, featured case study on Omi.",
  openGraph: {
    title: "Eulices Lopez — Applied AI Engineer",
    description:
      "Production AI for healthcare workflows. Featured case study on Omi. 6 shipped apps. 2,200+ users.",
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
