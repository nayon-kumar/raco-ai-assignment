"use client";

import { motion } from "framer-motion";
import { Database, BrainCircuit, Sparkles, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Database,
    title: "Ingest Data",
    description:
      "Collect structured and unstructured data from multiple sources in real time.",
  },
  {
    icon: BrainCircuit,
    title: "Analyze with AI",
    description:
      "AI understands patterns, relationships, and anomalies to generate intelligence.",
  },
  {
    icon: Sparkles,
    title: "Generate Insight",
    description:
      "Actionable recommendations and automations help teams make faster decisions.",
  },
];

export default function InsightFlow() {
  return (
    <section id="flow" className="relative overflow-hidden bg-[#050816] py-32">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-1/3 top-32 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute right-1/4 bottom-24 h-72 w-72 rounded-full bg-violet-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <p className="mb-4 text-cyan-400 font-medium uppercase tracking-[0.3em]">
            Intelligence Flow
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            From Raw Signals to
            <span className="text-cyan-400"> AI Decisions</span>
          </h2>

          <p className="mt-6 text-lg text-zinc-400">
            Every piece of information passes through a carefully orchestrated
            intelligence pipeline before becoming actionable insight.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
              >
                {/* Glow */}
                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-violet-500/10" />
                </div>

                <div className="relative z-10">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10">
                    <Icon className="h-8 w-8 text-cyan-400" />
                  </div>

                  <h3 className="mt-8 text-2xl font-semibold text-white">
                    {step.title}
                  </h3>

                  <p className="mt-4 leading-7 text-zinc-400">
                    {step.description}
                  </p>

                  <div className="mt-10 flex items-center text-cyan-400">
                    <span className="text-sm font-medium">Learn More</span>

                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
                  </div>
                </div>

                {/* Step Number */}
                <span className="absolute right-8 top-8 text-6xl font-bold text-white/5">
                  0{index + 1}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Connection Line */}
        <div className="mt-20 hidden items-center justify-center lg:flex">
          <div className="flex w-full max-w-5xl items-center">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
