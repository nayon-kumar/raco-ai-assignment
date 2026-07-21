"use client";

import { motion } from "framer-motion";
import DataVisualization from "./DataVisualization";

export default function Hero() {
  return (
    <section
      id="overview"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050816] px-6"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300 backdrop-blur-md"
        >
          AI-Powered Intelligence Workspace
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="max-w-5xl text-5xl font-bold leading-tight text-white md:text-7xl"
        >
          Transform
          <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
            {" "}
            Raw Data{" "}
          </span>
          Into Intelligent Decisions
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400"
        >
          Xai converts fragmented information into structured intelligence,
          helping teams discover insights, automate workflows, and make
          confident decisions with AI.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <button className="rounded-full bg-white px-7 py-3 font-medium text-black transition hover:scale-105 cursor-pointer">
            Launch Workspace
          </button>

          <button className="rounded-full border border-white/10 bg-white/5 px-7 py-3 font-medium text-white backdrop-blur-md transition hover:border-cyan-400/40 hover:bg-white/10 cursor-pointer">
            Explore Flow
          </button>
        </motion.div>

        {/* Placeholder for 3D Scene */}

        <div className="mt-20 w-full max-w-6xl">
          <DataVisualization />
        </div>
      </div>
    </section>
  );
}
