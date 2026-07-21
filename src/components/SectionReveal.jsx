"use client";

import { motion } from "framer-motion";

const variants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.96,
    filter: "blur(12px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function SectionReveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
