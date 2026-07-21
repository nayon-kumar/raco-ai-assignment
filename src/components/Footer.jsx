"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const footerLinks = [
  {
    title: "Product",
    links: ["Overview", "Features", "Workspace", "Automation"],
  },
  {
    title: "Resources",
    links: ["Documentation", "API", "Guides", "Support"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Contact", "Privacy"],
  },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden border-t border-white/10 bg-[#050816]"
    >
      {/* Glow */}

      <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-24">
        {/* CTA */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 rounded-3xl border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl md:flex md:items-center md:justify-between"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">
              Ready to Explore?
            </p>

            <h2 className="mt-4 text-4xl font-bold text-white">
              Build Smarter With AI
            </h2>

            <p className="mt-4 max-w-xl text-zinc-400">
              Turn fragmented data into intelligent decisions using Xai
              Intelligence Workspace.
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 flex items-center gap-2 rounded-full bg-white px-7 py-3 cursor-pointer font-semibold text-black md:mt-0"
          >
            Launch Workspace
            <ArrowUpRight size={18} />
          </motion.button>
        </motion.div>

        {/* Footer */}

        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}

          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-white">Xai</h2>

            <p className="mt-5 max-w-sm leading-7 text-zinc-400">
              Intelligence Workspace designed for modern organizations.
              Transform raw information into meaningful insights and AI-powered
              automation.
            </p>
            <div className="mt-8 flex gap-4">
              {[FaGithub, FaLinkedin, FaTwitter].map((Icon, index) => (
                <motion.a
                  whileHover={{
                    y: -4,
                  }}
                  key={index}
                  href="#"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-400 transition hover:border-cyan-400 hover:text-cyan-400"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="mb-5 font-semibold text-white">{group.title}</h3>

              <ul className="space-y-3">
                {group.links.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-zinc-500 transition hover:text-white"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}

        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 text-sm text-zinc-500 md:flex-row text-center">
          <p>© 2026 Xai Intelligence Workspace. All rights reserved.</p>

          <p>Made with ❤️ by Nayon</p>
        </div>
      </div>
    </footer>
  );
}
