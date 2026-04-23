import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { CaseStudy } from "@/components/CaseStudy";
import { NativeApps } from "@/components/NativeApps";
import { NovaDeepDive } from "@/components/NovaDeepDive";
import { OmiApps } from "@/components/OmiApps";
import { Stack } from "@/components/Stack";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Nav />
      <main id="main-content">
        <Hero />
        <CaseStudy />
        <NativeApps />
        <NovaDeepDive />
        <OmiApps />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
