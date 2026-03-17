"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function MultiCursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  // different spring physics for each follower
  const spring1X = useSpring(mouseX, { stiffness: 600, damping: 35 });
  const spring1Y = useSpring(mouseY, { stiffness: 600, damping: 35 });

  const spring2X = useSpring(mouseX, { stiffness: 300, damping: 25 });
  const spring2Y = useSpring(mouseY, { stiffness: 300, damping: 25 });

  const spring3X = useSpring(mouseX, { stiffness: 130, damping: 20 });
  const spring3Y = useSpring(mouseY, { stiffness: 130, damping: 20 });

  return (
    <>
      {/* fast follower */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-9999"
        style={{
          x: spring1X,
          y: spring1Y,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* medium follower */}
      <motion.div
        className="fixed top-0 left-0 w-5 h-5 border-2 border-orange-500 rounded-full pointer-events-none z-9998"
        style={{
          x: spring2X,
          y: spring2Y,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* slow follower */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border-2 border-orange-800 rounded-full pointer-events-none z-9997"
        style={{
          x: spring3X,
          y: spring3Y,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
}
