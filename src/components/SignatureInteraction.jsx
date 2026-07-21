"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function SignatureInteraction() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [12, -12]));
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-12, 12]));

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="interaction"
      className="relative overflow-hidden bg-[#050816] py-32"
    >
      {/* Background Glow */}

      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[170px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-sm font-medium uppercase tracking-[0.35em] text-cyan-400">
            Signature Interaction
          </p>

          <h2 className="mt-5 text-5xl font-bold text-white">
            Intelligence Organizes Itself
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-zinc-400">
            Move your cursor and watch scattered intelligence reorganize into a
            structured AI network.
          </p>
        </motion.div>

        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleLeave}
          className="flex justify-center"
        >
          <motion.div
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            className="relative flex h-[550px] w-full max-w-5xl items-center justify-center rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl"
          >
            {/* Center */}

            <motion.div
              animate={{
                scale: [1, 1.08, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="absolute z-20 flex h-28 w-28 items-center justify-center rounded-full bg-cyan-500 text-lg font-semibold text-black shadow-[0_0_80px_rgba(6,182,212,.45)]"
            >
              AI
            </motion.div>

            {/* Orbit Rings */}

            {[170, 250].map((size, index) => (
              <motion.div
                key={size}
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  ease: "linear",
                  duration: 18 + index * 8,
                }}
                className="absolute rounded-full border border-cyan-400/20"
                style={{
                  width: size,
                  height: size,
                }}
              >
                {[0, 90, 180, 270].map((deg, i) => (
                  <div
                    key={i}
                    className="absolute h-5 w-5 rounded-full bg-cyan-400 shadow-lg"
                    style={{
                      top: "50%",
                      left: "50%",
                      transform: `rotate(${deg}deg) translate(${size / 2}px)`,
                      transformOrigin: "0 0",
                    }}
                  />
                ))}
              </motion.div>
            ))}

            {/* Floating Cards */}

            {[
              "Raw Data",
              "Analytics",
              "Predictions",
              "Automation",
              "Insights",
              "Security",
            ].map((item, index) => (
              <motion.div
                key={item}
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3 + index * 0.4,
                }}
                className="absolute rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-zinc-300 backdrop-blur-xl"
                style={{
                  left: `${18 + (index % 3) * 28}%`,
                  top: `${18 + Math.floor(index / 3) * 48}%`,
                  transform: "translateZ(60px)",
                }}
              >
                {item}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
