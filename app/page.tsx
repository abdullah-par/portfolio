"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay: i * 0.1 },
  }),
};

const services = [
  {
    id: "01",
    title: "Web Development",
    description:
      "I build modern, performant websites and web applications using React and Next.js. Clean code, polished experiences, and production-ready delivery.",
  },
  {
    id: "02",
    title: "Automation",
    description:
      "I identify repetitive manual work and replace it with reliable automation systems using tools like n8n, Make, Zapier, or custom scripts.",
  },
  {
    id: "03",
    title: "AI Integration",
    description:
      "I connect LLMs and AI workflows into real products, from smart document processing and chat experiences to retrieval systems and automation.",
  },
];

const skillGroups = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { category: "Backend", items: ["Node.js", "Python", "REST APIs", "PostgreSQL", "MongoDB"] },
  { category: "Automation", items: ["n8n", "Make", "Zapier", "Web Scraping", "Workflow Design"] },
  { category: "AI Tools", items: ["OpenAI API", "LangChain", "Prompt Engineering", "RAG Systems"] },
];

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center bg-background font-sans transition-colors duration-500 overflow-hidden">
      <main className="flex flex-1 w-full max-w-7xl flex-col lg:flex-row items-center justify-between py-32 px-6 md:px-12 bg-background pt-40 gap-12 lg:gap-20 transition-colors duration-500">
        <div className="flex flex-col items-start gap-6 max-w-xl lg:max-w-2xl mt-8 md:mt-16 w-full">
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
                <motion.span
                  className="absolute bottom-2 md:bottom-3 -left-2 -right-3 md:-left-4 md:-right-5 h-[16px] md:h-[24px] bg-[#b1f08a] dark:bg-[#5cba1d] -z-10 rounded-[20px] -rotate-1"
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.55 }}
                />
              </span>
            </span>
          </motion.h1>

          <motion.p
            className="font-balgin max-w-lg md:max-w-xl text-base md:text-[1.15rem] leading-relaxed text-neutral-700 dark:text-neutral-400 tracking-wide mt-2"
            variants={fadeUp}
            custom={2}
            initial="hidden"
            animate="show"
          >
            I build modern websites, automate repetitive workflows, and integrate AI where it actually makes a difference.
          </motion.p>

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
              Let&apos;s work together
            </a>
          </motion.div>
        </div>

        <div className="flex flex-col items-center mt-12 lg:mt-0 w-full max-w-[320px] sm:max-w-[380px] md:max-w-[460px]">
          <div className="relative w-full aspect-square flex items-center justify-center">
            <motion.div
              className="absolute inset-0 w-full h-full pointer-events-none z-0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            >
              <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] text-[#80eb34]" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="0.75">
                <ellipse cx="100" cy="100" rx="95" ry="70" transform="rotate(-20 100 100)" />
              </svg>

              <svg className="absolute -top-4 -left-4 w-12 h-12 text-[#80eb34]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M14 32 L4 18 M24 28 L20 8 M34 32 L44 18" />
              </svg>

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
                <motion.div
                  className="absolute inset-0 w-full h-full scale-[1.35]"
                  animate={{
                    rotate: [-15, -11, -15],
                  }}
                  transition={{
                    rotate: { duration: 5, ease: "easeInOut", repeat: Infinity, repeatType: "loop" },
                  }}
                >
                  <Image
                    src="/logo/profile.webp"
                    alt="Abdullah - Software Developer & Automation Specialist"
                    fill
                    priority
                    sizes="(max-width: 640px) 480px, (max-width: 768px) 600px, 800px"
                    className="object-cover"
                    quality={95}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

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

      <div className="flex w-full max-w-7xl flex-col gap-24 px-6 pb-24 md:px-12 md:pb-32">
        <motion.section
          className="flex flex-col gap-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col justify-between gap-3 border-b-2 border-black pb-5 dark:border-white sm:flex-row sm:items-end">
            <h2 className="font-norwester text-2xl uppercase tracking-[0.12em] text-black dark:text-white md:text-3xl">What I Do</h2>
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500">Capabilities</span>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service) => (
              <motion.div
                key={service.id}
                className="group rounded-[2rem] border border-black/5 bg-white/50 p-6 shadow-[0_16px_40px_rgba(17,17,17,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#80eb34]/40 hover:bg-[#80eb34]/5 dark:border-white/10 dark:bg-white/5 dark:hover:border-[#80eb34]/40"
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="font-norwester text-xs uppercase tracking-[0.28em] text-[#80eb34]">{service.id}</span>
                <h3 className="mt-5 font-norwester text-2xl uppercase tracking-[0.08em] text-black dark:text-white">{service.title}</h3>
                <p className="mt-4 font-balgin text-base leading-relaxed text-neutral-600 dark:text-neutral-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="flex flex-col gap-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col justify-between gap-3 border-b-2 border-black pb-5 dark:border-white sm:flex-row sm:items-end">
            <h2 className="font-norwester text-2xl uppercase tracking-[0.12em] text-black dark:text-white md:text-3xl">Skills and Tools</h2>
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500">Tech</span>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map((group) => (
              <div key={group.category} className="rounded-[1.5rem] border border-black/5 bg-white/50 p-5 dark:border-white/10 dark:bg-white/5">
                <h3 className="font-norwester text-xs uppercase tracking-[0.28em] text-[#5cba1d] dark:text-[#80eb34]">{group.category}</h3>
                <ul className="mt-5 space-y-3">
                  {group.items.map((skill) => (
                    <li key={skill} className="flex items-center gap-3 font-mono text-sm text-neutral-700 dark:text-neutral-200">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#80eb34]" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="flex flex-col gap-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col justify-between gap-3 border-b-2 border-black pb-5 dark:border-white sm:flex-row sm:items-end">
            <h2 className="font-norwester text-2xl uppercase tracking-[0.12em] text-black dark:text-white md:text-3xl">How I Work</h2>
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500">Engagement</span>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-[2rem] border border-black/5 bg-white/50 p-6 dark:border-white/10 dark:bg-white/5">
              <h3 className="font-norwester text-xl uppercase tracking-[0.08em] text-black dark:text-white">Freelance Projects</h3>
              <p className="mt-4 font-balgin text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
                End-to-end ownership of a defined scope. You bring the idea; I handle the planning, build, and delivery. Ideal for new products, MVPs, landing pages, automation systems, or one-time builds.
              </p>
            </div>
            <div className="rounded-[2rem] border border-black/5 bg-white/50 p-6 dark:border-white/10 dark:bg-white/5">
              <h3 className="font-norwester text-xl uppercase tracking-[0.08em] text-black dark:text-white">Contract Engagements</h3>
              <p className="mt-4 font-balgin text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
                Embedded with your team for a defined period. Ideal for ongoing development, technical support, or when you need consistent capacity without a full-time hire.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="flex flex-col items-start justify-between gap-8 rounded-[2rem] bg-[#80eb34] px-8 py-10 md:flex-row md:items-center md:px-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <h2 className="font-norwester text-2xl uppercase tracking-[0.08em] text-black md:text-3xl">Have a project in mind?</h2>
            <p className="mt-2 font-balgin text-base text-black/75">Tell me what you are building. I will get back within 1-2 business days.</p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-2xl bg-black px-7 py-4 font-norwester text-lg uppercase tracking-[0.18em] text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.18)]"
          >
            Start a project
          </Link>
        </motion.section>
      </div>
    </div>
  );
}
