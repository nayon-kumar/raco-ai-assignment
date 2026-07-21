"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { AlertOctagon, RefreshCw, Home, Bug } from "lucide-react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050816] px-6 pt-40 pb-10">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/10 blur-[180px]" />

        <div
          className="absolute inset-0 opacity-[0.05]"
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
      {Array.from({ length: 20 }).map((_, index) => (
        <motion.span
          key={index}
          className="absolute h-1.5 w-1.5 rounded-full bg-red-400"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -50, 0],
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.8, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 5 + Math.random() * 3,
            delay: Math.random() * 5,
          }}
        />
      ))}

      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-2xl rounded-[36px] border border-white/10 bg-white/[0.03] p-10 text-center backdrop-blur-2xl"
      >
        {/* Icon */}
        <motion.div
          animate={{
            rotate: [0, -5, 5, -5, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 5,
          }}
          className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-red-500/20 bg-red-500/10"
        >
          <AlertOctagon size={42} className="text-red-400" />
        </motion.div>

        <h1 className="mt-8 text-5xl font-bold text-white">Unexpected Error</h1>

        <p className="mt-6 text-lg leading-8 text-zinc-400">
          Something went wrong while loading this experience. Our AI workspace
          encountered an unexpected issue.
        </p>

        {/* Error Message */}
        {process.env.NODE_ENV === "development" && (
          <div className="mt-8 rounded-2xl border border-red-500/20 bg-red-500/5 p-5 text-left">
            <div className="mb-3 flex items-center gap-2 text-red-400">
              <Bug size={18} />
              <span className="font-semibold">Development Error</span>
            </div>

            <p className="break-words text-sm text-zinc-300">
              {error?.message}
            </p>
          </div>
        )}

        {/* Actions */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 font-semibold text-black transition hover:scale-105"
          >
            <RefreshCw size={18} />
            Try Again
          </button>

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 py-3 font-semibold text-white transition hover:border-cyan-400 hover:bg-white/10"
          >
            <Home size={18} />
            Go Home
          </Link>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <p className="text-sm text-zinc-500">
            If this problem persists, please refresh the page or return to the
            homepage.
          </p>
        </div>
      </motion.div>
    </main>
  );
}
