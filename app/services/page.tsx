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

export default function Services() {
  return (
    <div className="flex flex-col flex-1 items-center bg-background font-sans transition-colors duration-500 overflow-hidden min-h-screen pt-36 md:pt-44 pb-24">
      <main className="flex flex-1 w-full max-w-7xl flex-col px-6 md:px-12 gap-24 md:gap-32">

        {/* Hero */}
        <div className="flex flex-col gap-8">
          <motion.div className="flex flex-col gap-2" variants={fadeUp} custom={0} initial="hidden" animate="show">
            <span className="font-mono text-xs uppercase tracking-widest text-[#80eb34] font-bold">Services</span>
            <h1 className="font-norwester text-[3.5rem] sm:text-[5rem] md:text-[6rem] lg:text-[7rem] leading-[0.92] tracking-tighter text-black dark:text-white uppercase">
              How I can <span className="text-[#80eb34]">help.</span>
            </h1>
          </motion.div>

          <motion.p className="font-balgin text-lg md:text-xl leading-relaxed text-neutral-700 dark:text-neutral-300 max-w-2xl mt-4" variants={fadeUp} custom={1} initial="hidden" animate="show">
            I specialize in building clean web applications, automating internal workflows, and integrating AI into practical tools. Below is a breakdown of the specific areas I work in.
          </motion.p>
        </div>

        {/* Web Development Section */}
        <motion.section id="web-development" className="flex flex-col gap-10 scroll-mt-32" variants={fadeUp} custom={2} initial="hidden" animate="show">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-5 border-b-2 border-black dark:border-white">
            <h2 className="font-norwester text-2xl md:text-3xl uppercase tracking-wider text-black dark:text-white">Web Development</h2>
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">01</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            <div id="fullstack" className="flex flex-col gap-4 scroll-mt-32">
              <h3 className="font-norwester text-xl uppercase tracking-wide text-black dark:text-white">Full Stack Development</h3>
              <p className="font-balgin text-base leading-relaxed text-neutral-600 dark:text-neutral-400">End-to-end web apps, custom platforms, and robust APIs built with Next.js, React, Node, and TypeScript.</p>
            </div>
            <div id="ui-enhancement" className="flex flex-col gap-4 scroll-mt-32">
              <h3 className="font-norwester text-xl uppercase tracking-wide text-black dark:text-white">UI Enhancement</h3>
              <p className="font-balgin text-base leading-relaxed text-neutral-600 dark:text-neutral-400">Refining interactions, improving responsiveness, and adding visual polish to existing web applications.</p>
            </div>
            <div id="migration" className="flex flex-col gap-4 scroll-mt-32">
              <h3 className="font-norwester text-xl uppercase tracking-wide text-black dark:text-white">Migration &amp; Modernization</h3>
              <p className="font-balgin text-base leading-relaxed text-neutral-600 dark:text-neutral-400">Upgrading legacy codebases and migrating them to modern, fast Next.js stacks.</p>
            </div>
          </div>
        </motion.section>

        {/* AI & Automation Section */}
        <motion.section id="ai-automation" className="flex flex-col gap-10 scroll-mt-32" variants={fadeUp} custom={3} initial="hidden" animate="show">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-5 border-b-2 border-black dark:border-white">
            <h2 className="font-norwester text-2xl md:text-3xl uppercase tracking-wider text-black dark:text-white">AI &amp; Automation</h2>
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">02</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            <div id="marketing-automation" className="flex flex-col gap-4 scroll-mt-32">
              <h3 className="font-norwester text-xl uppercase tracking-wide text-black dark:text-white">Marketing Automation</h3>
              <p className="font-balgin text-base leading-relaxed text-neutral-600 dark:text-neutral-400">Automated email funnels, lead scoring, and campaign workflows connected through Make or n8n.</p>
            </div>
            <div id="crm-integration" className="flex flex-col gap-4 scroll-mt-32">
              <h3 className="font-norwester text-xl uppercase tracking-wide text-black dark:text-white">CRM Integration</h3>
              <p className="font-balgin text-base leading-relaxed text-neutral-600 dark:text-neutral-400">Seamless two-way syncs and custom data pipelines with HubSpot, Salesforce, Airtable, and Notion.</p>
            </div>
            <div id="sales-automation" className="flex flex-col gap-4 scroll-mt-32">
              <h3 className="font-norwester text-xl uppercase tracking-wide text-black dark:text-white">Sales Automation</h3>
              <p className="font-balgin text-base leading-relaxed text-neutral-600 dark:text-neutral-400">Outreach pipelines, automatic follow-ups, and meeting syncs to keep your pipeline moving without manual work.</p>
            </div>
          </div>
        </motion.section>

        {/* CTA Strip */}
        <motion.section className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 py-12 px-10 md:px-14 bg-[#80eb34] rounded-[2rem] md:rounded-[3rem]" variants={fadeUp} custom={4} initial="hidden" animate="show">
          <div className="flex flex-col gap-2">
            <h2 className="font-norwester text-2xl md:text-3xl uppercase tracking-wide text-black">Ready to build?</h2>
            <p className="font-balgin text-base text-black/70">Let me know what you need help with.</p>
          </div>
          <Link href="/contact" className="shrink-0 inline-flex items-center gap-2 bg-black text-white font-norwester text-lg uppercase tracking-widest px-8 py-4 rounded-2xl hover:-translate-y-1 hover:shadow-xl active:translate-y-0 transition-all duration-300">
            Discuss a Project &rarr;
          </Link>
        </motion.section>

      </main>
    </div>
  );
}
