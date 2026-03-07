"use client";

import { motion, type Transition } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ReactNode, useState } from "react";

interface FooterRowProps {
  title: string;
  label: string;
  icon: ReactNode;
}

export default function FooterRow({ title, label, icon }: FooterRowProps) {
  const [isHovered, setIsHovered] = useState(false);
  const arrowTransition: Transition = {
    type: "spring",
    stiffness: 700,
    damping: 46,
    mass: 0.45,
  };
  const overlayTransition: Transition = {
    type: "spring",
    stiffness: 520,
    damping: 40,
    mass: 0.6,
  };

  return (
    <div className="overflow-hidden">
      <div
        className="relative w-full border-t border-white/20 py-8 md:py-12 overflow-hidden cursor-pointer block"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
      >
        {/* Top Content */}
        <div className="relative z-10 flex justify-between items-center w-full px-4 md:px-12">
          <h2 className="font-soria font-black text-4xl sm:text-6xl md:text-[6vw] leading-none uppercase tracking-normal pt-2 text-white">
            {title}
          </h2>

          <div className="flex items-center gap-4">
            <span className="font-sans font-semibold text-[10px] md:text-sm uppercase tracking-widest hidden sm:block text-white">
              {label}
            </span>

            {/* Arrow animation */}
            <div className="relative overflow-hidden w-6 h-6 md:w-10 md:h-10">
              <motion.div
                className="absolute inset-0"
                animate={
                  isHovered ? { x: "120%", y: "-120%" } : { x: "0%", y: "0%" }
                }
                transition={arrowTransition}
              >
                <ArrowRight className="absolute inset-0 -rotate-45" />
              </motion.div>

              <motion.div
                className="absolute inset-0"
                animate={
                  isHovered ? { x: "0%", y: "0%" } : { x: "-120%", y: "120%" }
                }
                transition={arrowTransition}
              >
                <ArrowRight className="absolute inset-0 -rotate-45" />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Hover Overlay */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-orange-700 z-20 overflow-hidden"
          animate={isHovered ? { y: "0%" } : { y: "101%" }}
          transition={overlayTransition}
        >
          <div className="h-full w-fit flex items-center animate-marquee">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="flex items-center shrink-0">
                <span
                  className="whitespace-nowrap uppercase font-soria font-black
                text-4xl sm:text-6xl md:text-[6vw] tracking-normal pt-2 px-[4vw] text-white"
                >
                  {title}
                </span>

                <div className="flex items-center justify-center">{icon}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
