"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay: i * 0.08 },
  }),
};

export default function About() {
  return (
    <div className="flex flex-col flex-1 items-center bg-background font-sans transition-colors duration-500 overflow-hidden min-h-screen pt-36 md:pt-44 pb-24">
      <main className="flex flex-1 w-full max-w-7xl flex-col px-6 md:px-12 gap-20 md:gap-28">

        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            
            {/* Title & Tag */}
            <motion.div className="flex flex-col gap-3" variants={fadeUp} custom={0} initial="hidden" animate="show">
              <span className="font-mono text-xs uppercase tracking-widest text-[#5cba1d] dark:text-[#80eb34] font-bold">
                ABOUT
              </span>
              <h1 className="font-norwester text-[3.5rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6.5rem] leading-[0.92] tracking-tighter text-black dark:text-white uppercase">
                ABDULLAH<br />
                <span className="text-[#80eb34]">PARVEZ.</span>
              </h1>
            </motion.div>

            {/* Brand Dot Status */}
            <motion.div 
              className="flex items-center gap-3 font-mono text-xs sm:text-sm font-bold tracking-widest uppercase text-black dark:text-white"
              variants={fadeUp} 
              custom={1} 
              initial="hidden" 
              animate="show"
            >
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#80eb34] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#80eb34]" />
              </span>
              <span>AVAILABLE FOR FREELANCE & CONTRACT PROJECTS</span>
            </motion.div>

            {/* Core Philosophy */}
            <motion.div 
              className="flex flex-col gap-6 border-t border-neutral-200 dark:border-neutral-800 pt-8" 
              variants={fadeUp} 
              custom={2} 
              initial="hidden" 
              animate="show"
            >
              <h2 className="font-norwester text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight text-black dark:text-white">
                I BUILD SYSTEMS, NOT JUST SOFTWARE.
              </h2>

              <div className="flex flex-col gap-4 font-balgin text-lg md:text-xl leading-relaxed text-neutral-700 dark:text-neutral-300">
                <p>
                  I&apos;m Abdullah a software engineer interested in the space where web development, automation and AI meet.
                </p>
                <p>
                  I like taking messy ideas, repetitive processes and manual workflows and turning them into simple systems that actually work.
                </p>
                <p>
                  Whether it&apos;s a web application, an internal tool or an automated workflow, I care about the same thing: <span className="text-black dark:text-white font-semibold">make the work simpler.</span>
                </p>
              </div>
            </motion.div>

            {/* Signature Statement Block */}
            <motion.div
              className="relative p-6 sm:p-8 rounded-3xl bg-neutral-100 dark:bg-neutral-900/70 border border-neutral-200 dark:border-neutral-800 flex flex-col gap-5 overflow-hidden"
              variants={fadeUp}
              custom={3}
              initial="hidden"
              animate="show"
            >
              <span className="font-mono text-xs uppercase tracking-widest text-[#5cba1d] dark:text-[#80eb34] font-bold">
                THE QUESTION I KEEP ASKING:
              </span>
              <p className="font-norwester text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight text-black dark:text-white leading-tight">
                WHERE IS THE MOST MANUAL EFFORT BEING WASTED?
              </p>
              <div className="flex items-center gap-3 text-neutral-400 font-mono text-xl">
                <span>↓</span>
              </div>
              <p className="font-norwester text-xl sm:text-2xl uppercase tracking-wide text-[#5cba1d] dark:text-[#80eb34]">
                THAT&apos;S WHERE I START BUILDING.
              </p>
            </motion.div>

          </div>

          {/* Right Column: Image & Details Panel */}
          <motion.div 
            className="lg:col-span-5 flex flex-col gap-8 lg:sticky lg:top-36"
            variants={fadeUp} 
            custom={3} 
            initial="hidden" 
            animate="show"
          >
            {/* Human element: Profile Image card */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-xl bg-neutral-900">
              <Image
                src="/logo/profile.webp"
                alt="Abdullah Parvez"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 450px"
                className="object-cover"
                quality={95}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-5 right-5 flex justify-between items-end text-white">
                <span className="font-norwester text-lg tracking-wide uppercase">Abdullah Parvez</span>
                <span className="font-mono text-xs text-[#80eb34] tracking-widest uppercase">Engineer · Builder</span>
              </div>
            </div>

            {/* Information Panel */}
            <div className="flex flex-col divide-y divide-neutral-200 dark:divide-neutral-800 border-t border-b border-neutral-200 dark:border-neutral-800">
              
              <div className="flex justify-between items-start py-4 gap-4">
                <span className="font-norwester text-xs sm:text-sm tracking-widest uppercase text-neutral-400 dark:text-neutral-500 shrink-0">
                  AVAILABLE FOR
                </span>
                <div className="font-mono text-sm sm:text-base text-right text-black dark:text-white flex flex-col">
                  <span>Freelance projects</span>
                  <span>Contract work</span>
                </div>
              </div>

              <div className="flex justify-between items-start py-4 gap-4">
                <span className="font-norwester text-xs sm:text-sm tracking-widest uppercase text-neutral-400 dark:text-neutral-500 shrink-0">
                  CURRENTLY
                </span>
                <div className="font-mono text-sm sm:text-base text-right text-black dark:text-white flex flex-col">
                  <span>Software Engineer</span>
                  <span className="text-neutral-500 dark:text-neutral-400">HCLTech</span>
                </div>
              </div>

              <div className="flex justify-between items-start py-4 gap-4">
                <span className="font-norwester text-xs sm:text-sm tracking-widest uppercase text-neutral-400 dark:text-neutral-500 shrink-0">
                  FOCUS
                </span>
                <div className="font-mono text-sm sm:text-base text-right text-black dark:text-white flex flex-col">
                  <span>Web Products</span>
                  <span>Automation</span>
                  <span>AI Integration</span>
                </div>
              </div>

              <div className="flex justify-between items-start py-4 gap-4">
                <span className="font-norwester text-xs sm:text-sm tracking-widest uppercase text-neutral-400 dark:text-neutral-500 shrink-0">
                  STACK
                </span>
                <div className="font-mono text-sm sm:text-base text-right text-black dark:text-white flex flex-col">
                  <span>Next.js</span>
                  <span>TypeScript</span>
                  <span>Node.js</span>
                  <span>Python</span>
                </div>
              </div>

              <div className="flex justify-between items-baseline py-4 gap-4">
                <span className="font-norwester text-xs sm:text-sm tracking-widest uppercase text-neutral-400 dark:text-neutral-500 shrink-0">
                  BASED
                </span>
                <span className="font-mono text-sm sm:text-base text-right text-black dark:text-white">
                  India
                </span>
              </div>

            </div>

            {/* Quick action button */}
            <Link
              href="/contact"
              className="flex items-center justify-center bg-black dark:bg-white text-white dark:text-black font-norwester text-base uppercase tracking-widest py-3.5 px-6 rounded-2xl hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 transition-all duration-300"
            >
              Let&apos;s Talk
            </Link>

          </motion.div>

        </div>

      </main>
    </div>
  );
}
