"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: (i: number) => ({
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut", delay: i * 0.1 },
  }),
};

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center bg-background font-sans transition-colors duration-500 overflow-hidden">
      <main className="flex flex-1 w-full max-w-7xl flex-col lg:flex-row items-center justify-between py-32 px-6 md:px-12 bg-background pt-40 gap-12 lg:gap-8 transition-colors duration-500">

        {/* Left side text content */}
        <div className="flex flex-col items-start gap-6 max-w-xl lg:max-w-2xl mt-8 md:mt-16 w-full shrink-0">

          {/* Headline */}
          <motion.h1
            className="font-norwester text-[3rem] sm:text-[4rem] md:text-[5.5rem] leading-[1.05] tracking-tighter text-black dark:text-white"
            variants={fadeUp}
            custom={0}
            initial="hidden"
            animate="show"
          >
            Build{" "}
            <span className="text-[#80eb34] underline decoration-[#80eb34] decoration-[4px] md:decoration-[8px] underline-offset-[8px] md:underline-offset-[12px]">
              BETTER,
            </span>
            <br />
            Automate{" "}
            <span className="relative inline-block z-10">
              SMARTER.
              {/* Marker swipe highlight — animates in after headline */}
              <motion.span
                className="absolute bottom-2 md:bottom-3 -left-2 -right-3 md:-left-4 md:-right-5 h-[16px] md:h-[24px] bg-[#b1f08a] dark:bg-[#5cba1d] -z-10 rounded-[20px] -rotate-1"
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.55 }}
              />
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="font-balgin max-w-lg md:max-w-xl text-base md:text-[1.15rem] leading-relaxed text-neutral-700 dark:text-neutral-400 tracking-wide mt-2"
            variants={fadeUp}
            custom={2}
            initial="hidden"
            animate="show"
          >
            I help businesses turn ideas and repetitive workflows into modern web
            experiences and AI Powered systems.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center gap-4 mt-8 w-full sm:w-auto"
            variants={fadeUp}
            custom={3}
            initial="hidden"
            animate="show"
          >
            <a
              href="/work"
              className="w-full sm:w-auto flex items-center justify-center bg-[#80eb34] text-black font-norwester text-lg uppercase tracking-widest px-8 py-4 rounded-2xl hover:-translate-y-1 hover:shadow-lg hover:shadow-[#80eb34]/30 active:translate-y-0 transition-all duration-300"
            >
              View my work
            </a>
            <a
              href="/contact"
              className="w-full sm:w-auto flex items-center justify-center bg-black dark:bg-white text-white dark:text-black font-norwester text-lg uppercase tracking-widest px-8 py-4 rounded-2xl hover:-translate-y-1 hover:shadow-lg active:translate-y-0 transition-all duration-300"
            >
              Let's work together
            </a>
          </motion.div>

          {/* Credibility line */}
          <motion.div
            className="mt-8 py-3 px-5 border border-neutral-200 dark:border-neutral-800 rounded-lg flex items-center flex-wrap gap-x-4 gap-y-2 text-xs font-mono text-neutral-500 dark:text-neutral-400 uppercase tracking-widest"
            variants={fadeIn}
            custom={5}
            initial="hidden"
            animate="show"
          >
            <span>Software Engineer</span>
            <span className="w-1.5 h-1.5 rounded-sm bg-[#80eb34]" />
            <span>Web Development</span>
            <span className="w-1.5 h-1.5 rounded-sm bg-[#80eb34]" />
            <span>Automation</span>
            <span className="w-1.5 h-1.5 rounded-sm bg-[#80eb34]" />
            <span>AI</span>
          </motion.div>
        </div>

        {/* Right side graphic — floats perpetually */}
        <motion.div
          className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[400px] aspect-square flex items-center justify-center mt-12 lg:mt-0"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          {/* Green square — slow counter-rotate float */}
          <motion.div
            className="absolute w-[75%] h-[75%] bg-[#80eb34] rounded-[2rem] sm:rounded-[3rem]"
            animate={{
              rotate: [-15, -11, -15],
              y: [0, -12, 0],
            }}
            transition={{
              duration: 5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            }}
            style={{ translateX: "-15%" }}
          />
          {/* Black square — float in opposite phase */}
          <motion.div
            className="absolute w-[75%] h-[75%] bg-black dark:bg-white rounded-[2rem] sm:rounded-[3rem] shadow-2xl"
            animate={{
              rotate: [15, 11, 15],
              y: [0, 12, 0],
            }}
            transition={{
              duration: 5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            }}
            style={{ translateX: "15%" }}
          />
        </motion.div>

      </main>
    </div>
  );
}
