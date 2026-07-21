"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AlertTriangle, ArrowLeft, Home, RefreshCcw } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050816] px-6 pt-40 pb-10">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,.08) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Floating Particles */}
      {Array.from({ length: 25 }).map((_, index) => (
        <motion.span
          key={index}
          className="absolute h-1.5 w-1.5 rounded-full bg-cyan-400"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -60, 0],
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.8, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 4 + Math.random() * 4,
            delay: Math.random() * 5,
          }}
        />
      ))}

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 w-full max-w-3xl rounded-[36px] border border-white/10 bg-white/[0.03] p-12 text-center backdrop-blur-2xl"
      >
        {/* Icon */}
        <motion.div
          animate={{
            rotate: [0, -10, 10, -10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 5,
          }}
          className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-500/10"
        >
          <AlertTriangle size={42} className="text-cyan-400" />
        </motion.div>

        {/* 404 */}
        <motion.h1
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          className="mt-8 bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-8xl font-black text-transparent md:text-9xl"
        >
          404
        </motion.h1>

        <h2 className="mt-6 text-3xl font-bold text-white">
          Intelligence Not Found
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-zinc-400">
          The page you're looking for doesn't exist or has been moved. The AI
          couldn't locate the requested resource.
        </p>

        {/* Action Buttons */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 font-semibold text-black transition hover:scale-105"
          >
            <Home size={18} />
            Back Home
          </Link>

          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 py-3 font-semibold text-white transition hover:border-cyan-400 hover:bg-white/10"
          >
            <RefreshCcw size={18} />
            Reload
          </button>
        </div>

        {/* Bottom Info */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-zinc-500 transition hover:text-cyan-400"
          >
            <ArrowLeft size={16} />
            Return to Intelligence Workspace
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
