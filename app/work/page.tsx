"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay: i * 0.1 },
  }),
};

export default function Work() {
  return (
    <div className="page-shell flex flex-col flex-1 items-center bg-background font-sans transition-colors duration-500 overflow-hidden min-h-screen pt-36 md:pt-44 pb-24">
      <main className="flex flex-1 w-full max-w-7xl flex-col px-6 md:px-12 gap-24 md:gap-32">

        {/* Hero */}
        <div className="flex flex-col gap-8">
          <motion.div className="flex flex-col gap-2" variants={fadeUp} custom={0} initial="hidden" animate="show">
            <span className="page-kicker">Work / Selected Builds</span>
            <h1 className="font-norwester text-[3.5rem] sm:text-[5rem] md:text-[6rem] lg:text-[7rem] leading-[0.92] tracking-tighter text-black dark:text-white uppercase">
              Selected <span className="text-[#80eb34]">Projects.</span>
            </h1>
          </motion.div>

          <motion.p className="font-balgin text-lg md:text-xl leading-relaxed text-neutral-700 dark:text-neutral-300 max-w-2xl mt-4" variants={fadeUp} custom={1} initial="hidden" animate="show">
            A collection of web applications, automations, and internal tools I&apos;ve built recently. Full case studies coming soon.
          </motion.p>
        </div>

        {/* Coming Soon Block */}
        <motion.div 
          className="sketch-dash relative flex flex-col items-center justify-center text-center py-20 px-6 border-neutral-300 dark:border-neutral-800 bg-white/30 dark:bg-white/[0.02]"
          variants={fadeUp} 
          custom={2} 
          initial="hidden" 
          animate="show"
        >
          <div className="w-16 h-16 mb-6 rounded-2xl bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center">
            <svg className="w-8 h-8 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <h2 className="font-norwester text-2xl uppercase tracking-wider text-black dark:text-white mb-3">Case Studies in Progress</h2>
          <p className="font-balgin text-neutral-500 max-w-md">I am currently documenting my recent client work and side projects. Check back soon for detailed breakdowns of the architecture and code.</p>
        </motion.div>

        {/* CTA Strip */}
        <motion.section className="sketch-panel flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 py-12 px-10 md:px-14 bg-[#80eb34]" variants={fadeUp} custom={3} initial="hidden" animate="show">
          <div className="flex flex-col gap-2">
            <h2 className="font-norwester text-2xl md:text-3xl uppercase tracking-wide text-black">Need something similar?</h2>
            <p className="font-balgin text-base text-black/70">Let me know what you are building.</p>
          </div>
          <Link href="/contact" className="sketch-button shrink-0 inline-flex items-center gap-2 bg-black text-white font-norwester text-lg uppercase tracking-widest px-8 py-4 hover:-translate-y-1 hover:shadow-xl active:translate-y-0 transition-all duration-300">
            Start a Project &rarr;
          </Link>
        </motion.section>

      </main>
    </div>
  );
}
