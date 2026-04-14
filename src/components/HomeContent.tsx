"use client";

import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectSection } from "@/components/sections/ProjectSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ScrollProgressBar } from "@/components/ui/ScrollProgressBar";
import { SectionDots } from "@/components/ui/SectionDots";
import { SectionBreak } from "@/components/ui/SectionBreak";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { useScrollBrake } from "@/hooks/useScrollBrake";

export function HomeContent() {
  const scrollY = useSmoothScroll();
  useScrollBrake();

  return (
    <>
      <ScrollProgressBar scrollY={scrollY} />
      <SectionDots scrollY={scrollY} />
      <main>
        <HeroSection scrollY={scrollY} />
        <SectionBreak id="brake-about" label="About Me" />
        <AboutSection />
        <SectionBreak id="brake-project" label="Project" />
        <ProjectSection scrollY={scrollY} />
        <SectionBreak id="brake-blog" label="Blog" />
        <BlogSection />
        <SectionBreak id="brake-contact" label="Contact" />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
