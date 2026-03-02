"use client";
import Hero from "@/components/section/hero";
// import TextRevealByWord from "@/components/ui/text-reveal";
import AboutReveal from "@/components/ui/aboutreveal";
export default function Home() {
  return (
    <main>
      <Hero />
      <AboutReveal />
      {/* add a scroll to explore text at the bottom right of page */}
      {/* <div className="pt-30 pr-10 flex justify-end">
        <h1 className="text-white text-sm font-semibold tracking-widest font-brolimo animate-pulse">
          SCROLL TO EXPLORE
        </h1>
      </div> */}
    </main>
  );
}
