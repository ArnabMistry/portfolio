"use client";
import AboutReveal from "@/components/section/aboutreveal";
import ArsenalSection from "@/components/section/ArsenalSection";
import Hero from "@/components/section/hero";
export default function Home() {
  return (
    <main>
      <Hero />
      <AboutReveal />
      <ArsenalSection />
    </main>
  );
}
