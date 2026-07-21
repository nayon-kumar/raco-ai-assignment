"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {/* Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed left-0 top-0 z-[9999] h-[3px] w-full origin-left bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500"
      />

      {/* Glow */}
      <motion.div
        style={{ scaleX }}
        className="fixed left-0 top-0 z-[9998] h-[6px] w-full origin-left bg-cyan-400/50 blur-md"
      />
    </>
  );
}
