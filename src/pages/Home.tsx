import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { Services } from "@/components/sections/Services";
import { BusinessInquiry } from "@/components/sections/BusinessInquiry";
import { CursorSpotlight } from "@/components/CursorSpotlight";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function Home() {
  const isTouch =
    typeof window !== "undefined" &&
    ("ontouchstart" in window || navigator.maxTouchPoints > 0);

  return (
    <div className={`bg-background min-h-screen text-foreground selection:bg-primary/30 ${isTouch ? "" : "cursor-none"}`}>
      <CursorSpotlight />
      <FloatingWhatsApp />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Services />
        <BusinessInquiry />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
