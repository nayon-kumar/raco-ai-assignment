"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const navItems = [
  { label: "Overview", href: "#overview" },
  { label: "Flow", href: "#flow" },
  { label: "Dashboard", href: "#dashboard" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="mx-auto mt-5 max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between rounded-full border border-white/10 bg-black/20 px-6 backdrop-blur-xl">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-semibold tracking-tight text-white"
          >
            Xai
          </Link>

          {/* Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="relative text-sm font-medium text-zinc-400 transition-colors duration-300 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="rounded-full bg-white px-5 py-2 text-sm font-medium text-black transition-colors hover:bg-zinc-200"
          >
            Launch Workspace
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
}
