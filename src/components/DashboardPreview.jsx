"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Database,
  BrainCircuit,
  BarChart3,
  Settings,
  Bell,
  Search,
  ArrowUpRight,
} from "lucide-react";

const tabs = [
  {
    id: "overview",
    title: "Overview",
    revenue: "$2.4M",
    accuracy: "98.7%",
    automation: "142",
  },
  {
    id: "insights",
    title: "Insights",
    revenue: "$3.1M",
    accuracy: "99.2%",
    automation: "187",
  },
  {
    id: "automation",
    title: "Automation",
    revenue: "$4.0M",
    accuracy: "99.8%",
    automation: "243",
  },
];

export default function DashboardPreview() {
  const [active, setActive] = useState(tabs[0]);

  return (
    <section
      id="dashboard"
      className="bg-[#050816] py-16 px-4 sm:py-20 sm:px-6 md:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center sm:mb-14 md:mb-20"
        >
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-400 sm:text-sm sm:tracking-[0.3em]">
            Product Preview
          </p>

          <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
            Intelligence Dashboard
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm text-zinc-400 sm:text-base md:mt-6 md:text-lg">
            A clean workspace where AI transforms complex data into decisions,
            insights, and automations.
          </p>
        </motion.div>

        {/* Dashboard */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl sm:rounded-3xl"
        >
          <div className="grid lg:grid-cols-[260px_1fr]">
            {/* Sidebar */}
            <aside className="border-b border-white/10 p-4 sm:p-5 md:p-6 lg:border-r lg:border-b-0">
              <div className="mb-6 flex items-center gap-3 sm:mb-8 md:mb-10">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/20 sm:h-10 sm:w-10 md:h-11 md:w-11">
                  <BrainCircuit className="h-4 w-4 text-cyan-400 sm:h-5 sm:w-5" />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-white sm:text-base">
                    Xai Workspace
                  </h3>
                  <p className="text-[10px] text-zinc-500 sm:text-xs">
                    AI Platform
                  </p>
                </div>
              </div>

              <nav className="space-y-1 sm:space-y-2">
                {[
                  [LayoutDashboard, "Dashboard"],
                  [Database, "Data Sources"],
                  [BrainCircuit, "AI Models"],
                  [BarChart3, "Analytics"],
                  [Settings, "Settings"],
                ].map(([Icon, label]) => (
                  <button
                    key={label}
                    className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-xs text-zinc-400 transition hover:bg-white/5 hover:text-white sm:px-4 sm:py-2.5 sm:text-sm md:py-3"
                  >
                    <Icon size={16} className="sm:h-[18px] sm:w-[18px]" />
                    <span className="hidden sm:inline">{label}</span>
                    <span className="sm:hidden">{label.charAt(0)}</span>
                  </button>
                ))}
              </nav>
            </aside>

            {/* Main */}
            <main className="p-4 sm:p-5 md:p-6 lg:p-8">
              {/* Top */}
              <div className="mb-6 flex flex-wrap items-center justify-between gap-3 sm:mb-8">
                <div className="flex flex-1 items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2 sm:px-4 sm:py-3">
                  <Search
                    size={16}
                    className="text-zinc-500 sm:h-[18px] sm:w-[18px]"
                  />
                  <span className="text-xs text-zinc-500 sm:text-sm">
                    Search...
                  </span>
                </div>

                <Bell className="h-4 w-4 text-zinc-400 sm:h-5 sm:w-5" />
              </div>

              {/* Tabs */}
              <div className="mb-6 flex flex-wrap gap-2 sm:mb-8 sm:gap-3">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActive(tab)}
                    className={`cursor-pointer rounded-full px-3 py-1.5 text-xs transition sm:px-4 sm:py-2 sm:text-sm ${
                      active.id === tab.id
                        ? "bg-cyan-500 text-black"
                        : "bg-white/5 text-zinc-400 hover:bg-white/10"
                    }`}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>

              {/* Stats */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -25 }}
                  transition={{ duration: 0.35 }}
                >
                  <div className="grid gap-4 sm:gap-5 md:grid-cols-3 md:gap-6">
                    {[
                      ["Revenue", active.revenue],
                      ["Accuracy", active.accuracy],
                      ["Automations", active.automation],
                    ].map(([title, value]) => (
                      <motion.div
                        whileHover={{ y: -5 }}
                        key={title}
                        className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 md:p-6"
                      >
                        <p className="text-xs text-zinc-500 sm:text-sm">
                          {title}
                        </p>

                        <div className="mt-3 flex items-center justify-between sm:mt-4">
                          <h3 className="text-xl font-bold text-white sm:text-2xl md:text-3xl">
                            {value}
                          </h3>

                          <ArrowUpRight className="h-4 w-4 text-cyan-400 sm:h-5 sm:w-5" />
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Chart */}
                  <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 sm:mt-8 sm:p-6 md:mt-10 md:p-8">
                    <div className="mb-4 flex flex-wrap items-center justify-between gap-2 sm:mb-6 md:mb-8">
                      <h3 className="text-base font-semibold text-white sm:text-lg md:text-xl">
                        AI Performance
                      </h3>

                      <span className="text-xs text-cyan-400 sm:text-sm">
                        Last 30 Days
                      </span>
                    </div>

                    <div className="flex h-48 items-end justify-between gap-2 sm:h-56 sm:gap-3 md:h-64 md:gap-4 lg:h-72">
                      {[40, 70, 55, 95, 65, 120, 90, 140].map(
                        (height, index) => (
                          <motion.div
                            key={index}
                            initial={{ height: 0 }}
                            whileInView={{ height }}
                            viewport={{ once: true }}
                            transition={{
                              delay: index * 0.08,
                              duration: 0.5,
                            }}
                            className="flex-1 rounded-t-full bg-gradient-to-t from-cyan-500 to-violet-500"
                            style={{ height: `${height * 0.3}px` }}
                          />
                        ),
                      )}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </main>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
