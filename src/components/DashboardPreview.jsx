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
    <section id="dashboard" className="bg-[#050816] py-32 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm font-medium">
            Product Preview
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Intelligence Dashboard
          </h2>

          <p className="mt-6 mx-auto max-w-3xl text-zinc-400 text-lg">
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
          className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl"
        >
          <div className="grid lg:grid-cols-[260px_1fr]">
            {/* Sidebar */}

            <aside className="border-r border-white/10 p-6">
              <div className="mb-10 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/20">
                  <BrainCircuit className="text-cyan-400" />
                </div>

                <div>
                  <h3 className="font-semibold text-white">Xai Workspace</h3>

                  <p className="text-xs text-zinc-500">AI Platform</p>
                </div>
              </div>

              <nav className="space-y-2">
                {[
                  [LayoutDashboard, "Dashboard"],
                  [Database, "Data Sources"],
                  [BrainCircuit, "AI Models"],
                  [BarChart3, "Analytics"],
                  [Settings, "Settings"],
                ].map(([Icon, label]) => (
                  <button
                    key={label}
                    className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-zinc-400 transition hover:bg-white/5 hover:text-white"
                  >
                    <Icon size={18} />
                    {label}
                  </button>
                ))}
              </nav>
            </aside>

            {/* Main */}

            <main className="p-8">
              {/* Top */}

              <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  <Search size={18} className="text-zinc-500" />
                  <span className="text-zinc-500">Search...</span>
                </div>

                <Bell className="text-zinc-400" />
              </div>

              {/* Tabs */}

              <div className="mb-8 flex gap-3">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActive(tab)}
                    className={`rounded-full cursor-pointer px-5 py-2 transition ${
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
                  <div className="grid gap-6 md:grid-cols-3">
                    {[
                      ["Revenue", active.revenue],
                      ["Accuracy", active.accuracy],
                      ["Automations", active.automation],
                    ].map(([title, value]) => (
                      <motion.div
                        whileHover={{ y: -5 }}
                        key={title}
                        className="rounded-2xl border border-white/10 bg-white/5 p-6"
                      >
                        <p className="text-sm text-zinc-500">{title}</p>

                        <div className="mt-4 flex items-center justify-between">
                          <h3 className="text-3xl font-bold text-white">
                            {value}
                          </h3>

                          <ArrowUpRight className="text-cyan-400" />
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Chart */}

                  <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8">
                    <div className="mb-8 flex items-center justify-between">
                      <h3 className="text-xl font-semibold text-white">
                        AI Performance
                      </h3>

                      <span className="text-cyan-400">Last 30 Days</span>
                    </div>

                    <div className="flex h-72 items-end justify-between gap-4">
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
