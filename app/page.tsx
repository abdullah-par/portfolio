"use client";

import { motion, type Variants } from "framer-motion";
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay: i * 0.1 },
  }),
};

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center bg-background font-sans transition-colors duration-500 overflow-hidden">
      <main className="flex flex-1 w-full max-w-7xl flex-col lg:flex-row items-center justify-between py-32 px-6 md:px-12 bg-background pt-40 gap-12 lg:gap-20 transition-colors duration-500">

        {/* Left side text content */}
        <div className="flex flex-col items-start gap-6 max-w-xl lg:max-w-2xl mt-8 md:mt-16 w-full">

          {/* Headline */}
          <motion.h1
            className="font-norwester text-[3rem] sm:text-[4rem] md:text-[4.5rem] lg:text-[5rem] leading-[1.05] tracking-tighter text-black dark:text-white"
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
            <span className="whitespace-nowrap">
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
            I build modern websites, automate repetitive workflows, and integrate AI where it actually makes a difference.
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
        </div>

        {/* Right Side Area */}
        <div className="flex flex-col items-center mt-12 lg:mt-0 w-full max-w-[320px] sm:max-w-[380px] md:max-w-[460px]">
          {/* Right side graphic — floats perpetually */}
          <div className="relative w-full aspect-square flex items-center justify-center">
            
            {/* Decorative Elements (Orbit, Slashes, Star) */}
            <motion.div 
              className="absolute inset-0 w-full h-full pointer-events-none z-0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            >
              {/* Orbital Ring Background */}
              <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] text-[#80eb34]" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="0.75">
                <ellipse cx="100" cy="100" rx="95" ry="70" transform="rotate(-20 100 100)" />
              </svg>
              
              {/* Top Left Slashes */}
              <svg className="absolute -top-4 -left-4 w-12 h-12 text-[#80eb34]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M14 32 L4 18 M24 28 L20 8 M34 32 L44 18" />
              </svg>

              {/* Right Sparkle */}
              <svg className="absolute top-[60%] -right-4 w-10 h-10 text-[#80eb34]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
                <path d="M12 2 Q12 12 2 12 Q12 12 12 22 Q12 12 22 12 Q12 12 12 2 Z" />
              </svg>
            </motion.div>

            <motion.div
              className="relative w-full h-full flex items-center justify-center z-10"
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
                className="absolute w-[75%] h-[75%] bg-black dark:bg-white rounded-[2rem] sm:rounded-[3rem] shadow-2xl overflow-hidden relative"
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
              >
                <motion.img
                  src="/logo/profile.jpg"
                  alt="Profile"
                  className="absolute inset-0 w-full h-full object-cover scale-[1.35]"
                  animate={{ 
                    rotate: [-15, -11, -15]
                  }}
                  transition={{ 
                    rotate: { duration: 5, ease: "easeInOut", repeat: Infinity, repeatType: "loop" }
                  }}
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Availability line */}
          <motion.div
            className="mt-12 flex items-center justify-center gap-x-3 text-xs sm:text-sm font-bold text-neutral-900 dark:text-neutral-100 uppercase tracking-widest"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#80eb34] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-[#80eb34]"></span>
            </span>
            <span>Available for freelance projects</span>
          </motion.div>
        </div>

      </main>
    </div>
  );
}
