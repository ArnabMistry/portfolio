"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const words = [
  { text: "I", style: "normal" },
  { text: "build", style: "normal" },
  { text: "systems", style: "normal" },
  { text: "with", style: "normal" },
  { text: "precision", style: "normal" },
  { text: "and", style: "normal" },
  { text: "discipline.", style: "cursive" },

  { text: "I", style: "normal" },
  { text: "design", style: "normal" },
  { text: "interfaces", style: "normal" },
  { text: "that", style: "normal" },
  { text: "feel", style: "normal" },
  { text: "intentional,", style: "cursive" },
  { text: "responsive,", style: "normal" },
  { text: "and", style: "normal" },
  { text: "engineered", style: "cursive" },
  { text: "to", style: "normal" },
  { text: "perform.", style: "normal" },

  { text: "From", style: "normal" },
  { text: "real-time", style: "normal" },
  { text: "visuals", style: "normal" },
  { text: "to", style: "normal" },
  { text: "developer-first", style: "normal" },
  { text: "tools,", style: "normal" },
  { text: "I", style: "normal" },
  { text: "care", style: "normal" },
  { text: "about", style: "normal" },
  { text: "structure,", style: "normal" },
  { text: "clarity,", style: "normal" },
  { text: "and", style: "normal" },
  { text: "flow.", style: "cursive" },

  { text: "I", style: "normal" },
  { text: "don’t", style: "normal" },
  { text: "ship", style: "normal" },
  { text: "experiments.", style: "normal" },
  { text: "I", style: "normal" },
  { text: "ship", style: "normal" },
  { text: "execution.", style: "cursive" },
];

export default function AboutReveal() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 80%"],
  });

  // const words = text.split(" ");
  const total = words.length;

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[150vh] py-32 px-6 sm:px-12 md:px-24 mix-blend-difference"
    >
      <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* Left label */}
        <div className="md:col-span-4">
          <p className="text-white/55 uppercase text-sm font-semibold tracking-widest font-brolimo">
            01 // About Me
          </p>
        </div>

        {/* Word reveal */}
        <div className="md:col-span-8 flex flex-wrap gap-x-[1.5vw] gap-y-[1vw] items-baseline">
          {words.map((wordObj, i) => {
            return (
              <RevealWord
                key={i}
                index={i}
                total={total}
                text={wordObj.text}
                isCursive={wordObj.style === "cursive"}
                scrollYProgress={scrollYProgress}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function RevealWord({
  index,
  total,
  text,
  isCursive,
  scrollYProgress,
}: {
  index: number;
  total: number;
  text: string;
  isCursive: boolean;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const threshold = index / total;
  const opacity = useTransform(
    scrollYProgress,
    [threshold, threshold + 0.06],
    [0.15, 1],
  );

  return (
    <motion.span
      style={{ opacity }}
      className={`
        leading-[1.1]
        text-white
        tracking-tight
        text-[8vw] sm:text-[6vw] md:text-[4.5vw]
        ${isCursive ? "font-alexbrush" : "font-brolimo uppercase"}
      `}
    >
      {text}
    </motion.span>
  );
}
