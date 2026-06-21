"use client";

import { useRef } from "react";
import { s } from "@/lib/redesign/cssString";
import { useRedesignEngine } from "@/lib/redesign/useRedesignEngine";
import RedesignStyles from "@/components/redesign/RedesignStyles";
import Nav from "@/components/redesign/Nav";
import Rail from "@/components/redesign/Rail";
import Hero from "@/components/redesign/Hero";
import CaseStudy from "@/components/redesign/CaseStudy";
import NativeApps from "@/components/redesign/NativeApps";
import NovaDeepDive from "@/components/redesign/NovaDeepDive";
import OmiApps from "@/components/redesign/OmiApps";
import Stack from "@/components/redesign/Stack";
import Contact from "@/components/redesign/Contact";
import Footer from "@/components/redesign/Footer";

type RedesignProps = {
  accent?: string;
  reduceMotion?: boolean;
  showProgress?: boolean;
  defaultDark?: boolean;
};

export default function Redesign(props: RedesignProps) {
  const { accent = "#3b6fe0", defaultDark = false } = props;
  const wrapRef = useRef<HTMLDivElement>(null);
  useRedesignEngine(wrapRef, props);
  return (
    <>
      <RedesignStyles />
      <div ref={wrapRef}>
        <div data-theme={defaultDark ? "dark" : "light"} style={s(`--accent:${accent};font-family:var(--font-sans),-apple-system,BlinkMacSystemFont,'SF Pro Display','Segoe UI','Helvetica Neue',Helvetica,sans-serif;background:var(--page);color:var(--ink);overflow-x:hidden;position:relative;`)}>
          <a href="#main-content" className="skip-link">Skip to content</a>
          <div data-bar aria-hidden="true" style={s("position:fixed;top:0;left:0;right:0;height:2px;background:var(--accent,#3b6fe0);transform:scaleX(0);transform-origin:0 50%;z-index:200;will-change:transform;")}></div>
          <Nav />
          <Rail />
          <main id="main-content" tabIndex={-1}>
            <Hero />
            <CaseStudy />
            <NativeApps />
            <NovaDeepDive />
            <OmiApps />
            <Stack />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
