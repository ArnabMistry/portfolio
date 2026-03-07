"use client";
import FooterContact from "@/components/FooterContact";
import AboutReveal from "@/components/section/aboutreveal";
import ArsenalSection from "@/components/section/ArsenalSection";
import Hero from "@/components/section/hero";
import ProjectShowcase from "@/components/section/projects";
export default function Home() {
  return (
    <main>
      <Hero />
      <AboutReveal />
      <ArsenalSection />
      <ProjectShowcase />
      <FooterContact />
    </main>
  );
}
