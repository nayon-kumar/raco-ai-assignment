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
      className="relative overflow-hidden bg-[#050816] py-16 sm:py-24 md:py-32"
    >
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[120px] sm:h-[450px] sm:w-[450px] md:h-[650px] md:w-[650px] md:blur-[170px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center sm:mb-12 md:mb-16"
        >
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-400 sm:text-sm sm:tracking-[0.35em]">
            Signature Interaction
          </p>

          <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
            Intelligence Organizes Itself
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm text-zinc-400 sm:text-base md:mt-6 md:text-lg">
            Move your cursor and watch scattered intelligence reorganize into a
            structured AI network.
          </p>
        </motion.div>

        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleLeave}
          className="flex justify-center px-0 sm:px-4"
        >
          <motion.div
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            className="relative flex h-[400px] w-full max-w-5xl items-center justify-center rounded-[28px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl sm:h-[450px] sm:rounded-[32px] md:h-[500px] md:rounded-[36px] lg:h-[550px] lg:rounded-[40px]"
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
              className="absolute z-20 flex h-20 w-20 items-center justify-center rounded-full bg-cyan-500 text-base font-semibold text-black shadow-[0_0_60px_rgba(6,182,212,.45)] sm:h-24 sm:w-24 sm:text-lg md:shadow-[0_0_80px_rgba(6,182,212,.45)]"
            >
              AI
            </motion.div>

            {/* Orbit Rings */}
            {[120, 180, 170, 250].map((size, index) => {
              // Use different sizes for mobile
              const ringSize =
                index < 2 ? (index === 0 ? 120 : 180) : index === 2 ? 170 : 250;
              const isMobileRing = index < 2;

              return (
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
                    width: isMobileRing ? ringSize : ringSize,
                    height: isMobileRing ? ringSize : ringSize,
                  }}
                >
                  {[0, 90, 180, 270].map((deg, i) => (
                    <div
                      key={i}
                      className="absolute h-3 w-3 rounded-full bg-cyan-400 shadow-lg sm:h-4 sm:w-4 md:h-5 md:w-5"
                      style={{
                        top: "50%",
                        left: "50%",
                        transform: `rotate(${deg}deg) translate(${isMobileRing ? ringSize / 2 : ringSize / 2}px)`,
                        transformOrigin: "0 0",
                      }}
                    />
                  ))}
                </motion.div>
              );
            })}

            {/* Floating Cards */}
            {[
              "Raw Data",
              "Analytics",
              "Predictions",
              "Automation",
              "Insights",
              "Security",
            ].map((item, index) => {
              // Adjusted positions for mobile
              const isMobile =
                typeof window !== "undefined" && window.innerWidth < 640;
              const leftPos = isMobile
                ? `${15 + (index % 3) * 30}%`
                : `${18 + (index % 3) * 28}%`;
              const topPos = isMobile
                ? `${15 + Math.floor(index / 3) * 70}%`
                : `${18 + Math.floor(index / 3) * 68}%`;

              return (
                <motion.div
                  key={item}
                  animate={{
                    y: [0, -12, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3 + index * 0.4,
                  }}
                  className="absolute rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-zinc-300 backdrop-blur-xl sm:px-4 sm:py-2.5 sm:text-sm md:px-5 md:py-3"
                  style={{
                    left: leftPos,
                    top: topPos,
                    transform: "translateZ(60px)",
                  }}
                >
                  {item}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
