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

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { category: "Backend", items: ["Node.js", "Python", "REST APIs", "PostgreSQL", "MongoDB"] },
  { category: "Automation", items: ["n8n", "Make", "Zapier", "Web Scraping", "Workflow Design"] },
  { category: "AI Tools", items: ["OpenAI API", "LangChain", "Prompt Engineering", "RAG Systems"] },
];

export default function About() {
  return (
    <div className="flex flex-col flex-1 items-center bg-background font-sans transition-colors duration-500 overflow-hidden min-h-screen pt-36 md:pt-44 pb-24">
      <main className="flex flex-1 w-full max-w-7xl flex-col px-6 md:px-12 gap-24 md:gap-32">

        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          <div className="lg:col-span-7 flex flex-col gap-8">
            <motion.div className="flex flex-col gap-2" variants={fadeUp} custom={0} initial="hidden" animate="show">
              <span className="font-mono text-xs uppercase tracking-widest text-[#80eb34] font-bold">About</span>
              <h1 className="font-norwester text-[3.5rem] sm:text-[5rem] md:text-[6rem] lg:text-[7rem] leading-[0.92] tracking-tighter text-black dark:text-white uppercase">
                Abdullah <span className="text-[#80eb34]">Parvez.</span>
              </h1>
            </motion.div>

            <motion.div className="flex items-center gap-3 font-mono text-xs sm:text-sm font-bold tracking-widest uppercase text-black dark:text-white" variants={fadeUp} custom={1} initial="hidden" animate="show">
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#80eb34] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#80eb34]" />
              </span>
              Available for Freelance and Contract Projects
            </motion.div>

            <motion.div className="flex flex-col gap-5 font-balgin text-lg md:text-xl leading-relaxed text-neutral-700 dark:text-neutral-300 max-w-2xl border-t border-neutral-200 dark:border-neutral-800 pt-8" variants={fadeUp} custom={2} initial="hidden" animate="show">
              <p>
                I am a software engineer and automation builder based in{" "}
                <span className="text-black dark:text-white font-semibold">India</span>.
                I work at the intersection of clean web development, intelligent automation, and practical AI.
              </p>
              <p>
                My work focuses on one question:{" "}
                <span className="text-black dark:text-white font-semibold">where is the most manual effort being wasted?</span>{" "}
                Then I build the system that eliminates it.
              </p>
              <p>
                I am open to{" "}
                <span className="text-black dark:text-white font-semibold">freelance projects</span>{" "}
                and{" "}
                <span className="text-black dark:text-white font-semibold">contract engagements</span>{" "}
                - short sprints or longer builds, solo or alongside your existing team.
              </p>
            </motion.div>
          </div>

          <motion.div className="lg:col-span-5 flex flex-col gap-0 lg:sticky lg:top-36 divide-y divide-neutral-200 dark:divide-neutral-800 border-t border-b border-neutral-200 dark:border-neutral-800 mt-4" variants={fadeUp} custom={3} initial="hidden" animate="show">
            {[
              { label: "Based In", value: "India" },
              { label: "Availability", value: "Freelance / Contract" },
              { label: "Response Time", value: "Within 1-2 business days" },
              { label: "Preferred Stack", value: "Next.js, TypeScript, Python" },
              { label: "Languages", value: "English, Hindi, Urdu" },
            ].map((item) => (
              <div key={item.label} className="flex justify-between items-baseline py-5 gap-4">
                <span className="font-norwester text-xs sm:text-sm tracking-widest uppercase text-neutral-400 dark:text-neutral-500 shrink-0">{item.label}</span>
                <span className="font-mono text-sm sm:text-base text-right text-black dark:text-white">{item.value}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* What I Do */}
        <motion.section className="flex flex-col gap-10" variants={fadeUp} custom={4} initial="hidden" animate="show">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-5 border-b-2 border-black dark:border-white">
            <h2 className="font-norwester text-2xl md:text-3xl uppercase tracking-wider text-black dark:text-white">What I Do</h2>
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">Capabilities</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            {[
              { id: "01", title: "Web Development", desc: "I build modern, performant websites and web applications using React and Next.js. Clean code, great UX, deployed and production-ready." },
              { id: "02", title: "Automation", desc: "I identify repetitive manual workflows and replace them with reliable automated systems using tools like n8n, Make, or custom scripts." },
              { id: "03", title: "AI Integration", desc: "I integrate LLMs and AI tooling into real products - from smart document processing to conversational interfaces and retrieval systems." },
            ].map((item) => (
              <div key={item.id} className="flex flex-col gap-4">
                <span className="font-norwester text-xs text-[#80eb34] tracking-widest">{item.id}</span>
                <h3 className="font-norwester text-xl uppercase tracking-wide text-black dark:text-white">{item.title}</h3>
                <p className="font-balgin text-base leading-relaxed text-neutral-600 dark:text-neutral-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Skills Grid */}
        <motion.section className="flex flex-col gap-10" variants={fadeUp} custom={5} initial="hidden" animate="show">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-5 border-b-2 border-black dark:border-white">
            <h2 className="font-norwester text-2xl md:text-3xl uppercase tracking-wider text-black dark:text-white">Skills and Tools</h2>
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">Tech</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
            {skills.map((group) => (
              <div key={group.category} className="flex flex-col gap-4">
                <h3 className="font-norwester text-sm uppercase tracking-widest text-[#5cba1d] dark:text-[#80eb34]">{group.category}</h3>
                <ul className="flex flex-col gap-2">
                  {group.items.map((skill) => (
                    <li key={skill} className="flex items-center gap-2.5 font-mono text-sm text-neutral-700 dark:text-neutral-300">
                      <span className="w-1 h-1 rounded-full bg-neutral-400 dark:bg-neutral-600 shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>

        {/* How I Work */}
        <motion.section className="flex flex-col gap-10" variants={fadeUp} custom={6} initial="hidden" animate="show">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-5 border-b-2 border-black dark:border-white">
            <h2 className="font-norwester text-2xl md:text-3xl uppercase tracking-wider text-black dark:text-white">How I Work</h2>
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">Engagement</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            <div className="flex flex-col gap-3">
              <h3 className="font-norwester text-lg uppercase tracking-wide text-black dark:text-white">Freelance Projects</h3>
              <p className="font-balgin text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
                End-to-end ownership of a defined scope. You bring the idea; I handle the planning, build, and delivery. Ideal for new products, MVPs, landing pages, automation systems, or one-time builds.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-norwester text-lg uppercase tracking-wide text-black dark:text-white">Contract Engagements</h3>
              <p className="font-balgin text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
                Embedded with your team for a defined period. Ideal for ongoing development, technical support, or when you need consistent capacity without a full-time hire.
              </p>
            </div>
          </div>
        </motion.section>

        {/* CTA Strip */}
        <motion.section className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 py-12 px-10 md:px-14 bg-[#80eb34] rounded-[2rem] md:rounded-[3rem]" variants={fadeUp} custom={7} initial="hidden" animate="show">
          <div className="flex flex-col gap-2">
            <h2 className="font-norwester text-2xl md:text-3xl uppercase tracking-wide text-black">Have a project in mind?</h2>
            <p className="font-balgin text-base text-black/70">Tell me what you are building. I will get back within 1-2 business days.</p>
          </div>
          <Link href="/contact" className="shrink-0 inline-flex items-center gap-2 bg-black text-white font-norwester text-lg uppercase tracking-widest px-8 py-4 rounded-2xl hover:-translate-y-1 hover:shadow-xl active:translate-y-0 transition-all duration-300">
            Start a Project
          </Link>
        </motion.section>

      </main>
    </div>
  );
}
