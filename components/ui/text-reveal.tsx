"use client";

import { motion, useInView } from "framer-motion";
import { FC, useRef } from "react";

interface TextRevealProps {
  text: string;
}

const Word = ({ children }: { children: string }) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, {
    margin: "-10% 0px -10% 0px",
    once: true,
  });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0.15 }}
      animate={{ opacity: isInView ? 1 : 0.15 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="mx-[1vw] leading-[1.1] text-white font-soria tracking-tight text-[8vw] sm:text-[6vw] md:text-[4.5vw]"
    >
      {children}
    </motion.span>
  );
};

const TextRevealByWord: FC<TextRevealProps> = ({ text }) => {
  const words = text.split(" ");

  return (
    <section className="relative w-full min-h-screen py-32 px-8 md:px-16">
      <div className="flex flex-wrap gap-x-[1.5vw] gap-y-[1vw] items-baseline">
        {words.map((word, i) => (
          <Word key={i}>{word}</Word>
        ))}
      </div>
    </section>
  );
};

export default TextRevealByWord;
