import type { Metadata } from "next";
import Redesign from "@/components/Redesign";

export const metadata: Metadata = {
  title: "Eulices Lopez — Founding Engineer",
  description:
    "Founding Engineer · Forward Deployed. Built an AI scribe featured as an Omi case study — six AI products shipped, 2,200+ users. Python, FastAPI, Swift, React Native.",
  openGraph: {
    title: "Eulices Lopez — Founding Engineer",
    description: "I find the problem, ship the product, and own it in production.",
    type: "website",
    url: "/redesign",
    siteName: "Eulices Lopez",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eulices Lopez — Founding Engineer",
    description: "Interactive portfolio — Omi case study, 6 AI products shipped, 2,200+ users.",
    images: ["/og.png"],
  },
};

export default function RedesignPage() {
  return <Redesign />;
}
