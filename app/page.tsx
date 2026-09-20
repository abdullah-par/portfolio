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
  {
    id: "04",
    title: "UI Enhancement",
    description:
      "I refine existing interfaces with clearer layouts, smoother interactions, and responsive design that feels polished on every screen.",
  },
  {
    id: "05",
    title: "Migration & Modernization",
    description:
      "I upgrade legacy applications and move them to modern, maintainable stacks with better performance, accessibility, and scalability.",
  },
  {
    id: "06",
    title: "AI Chatbot Services",
    description:
      "I build practical AI chatbots for businesses that answer questions, support customers, qualify leads, and connect with your existing tools.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center bg-background font-sans transition-colors duration-500 overflow-hidden">
      <main className="relative flex min-h-[min(820px,calc(100vh-5rem))] flex-1 w-full max-w-7xl flex-col justify-center lg:flex-row items-center justify-between px-6 py-24 md:px-12 md:py-32 bg-background gap-14 lg:gap-20 transition-colors duration-500">
        <div className="mt-8 flex min-w-0 w-full max-w-xl flex-col items-start gap-6 md:mt-16 lg:w-[52%] lg:max-w-none">
          <motion.p
            className="max-w-sm border-l-2 border-[#80eb34] pl-4 font-balgin text-lg leading-snug text-neutral-600 dark:text-neutral-400 md:text-xl"
            variants={fadeUp}
            custom={0}
            initial="hidden"
            animate="show"
          >
            Good work starts where the obvious solution ends.
          </motion.p>
          <motion.h1
            className="font-norwester text-[3.25rem] leading-[0.98] tracking-tighter text-black dark:text-white sm:text-[4.5rem] md:text-[5rem] lg:text-[4.75rem] xl:text-[5rem]"
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate="show"
          >
            Build{" "}
            <span className="text-[#80eb34] underline decoration-[#80eb34] decoration-[4px] md:decoration-[8px] underline-offset-[8px] md:underline-offset-[12px]">
              BETTER,
            </span>
            <br />
            <span className="lg:whitespace-nowrap">
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
            className="max-w-lg font-balgin text-base leading-relaxed tracking-wide text-neutral-700 dark:text-neutral-400 md:text-[1.15rem]"
            variants={fadeUp}
            custom={2}
            initial="hidden"
            animate="show"
          >
            I build modern websites, automate repetitive workflows, and integrate AI where it actually makes a difference.
          </motion.p>

          <motion.div
            className="mt-6 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row"
            variants={fadeUp}
            custom={3}
            initial="hidden"
            animate="show"
          >
            <a
              href="/work"
              className="flex w-full items-center justify-center rounded-xl bg-[#80eb34] px-7 py-4 font-norwester text-base uppercase tracking-widest text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#80eb34]/30 active:translate-y-0 sm:w-auto"
            >
              View my work
            </a>
            <a
              href="/contact"
              className="flex w-full items-center justify-center rounded-xl bg-black px-7 py-4 font-norwester text-base uppercase tracking-widest text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:translate-y-0 dark:bg-white dark:text-black sm:w-auto"
            >
              Let&apos;s work together
            </a>
          </motion.div>

        </div>

        <div className="mt-12 flex w-full max-w-[320px] shrink-0 flex-col items-center sm:max-w-[380px] md:max-w-[420px] lg:mt-0 lg:w-[40%] lg:max-w-none">
          <div className="relative h-[min(82vw,320px)] w-full shrink-0 aspect-square sm:h-auto">
              <motion.div
                className="absolute left-[-4%] top-[8%] h-[78%] w-[112%] rounded-[50%] border-2 border-[#80eb34]"
                initial={{ opacity: 0, scale: 0.9, rotate: -12 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            />
              <motion.div
                className="absolute bottom-[8%] left-[5%] h-[68%] w-[68%] rounded-[2rem] bg-[#80eb34] sm:rounded-[3rem]"
                initial={{ opacity: 0, scale: 0.85, rotate: -18 }}
                animate={{ opacity: 1, scale: 1, rotate: -10 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            />
              <motion.div
                className="absolute right-[6%] top-[10%] h-[76%] w-[70%] rotate-[9deg] overflow-hidden rounded-[2rem] border-4 border-black bg-black shadow-[0_28px_60px_rgba(17,17,17,0.28)] dark:border-white sm:rounded-[3rem]"
                initial={{ opacity: 0, scale: 0.82, rotate: 18 }}
                animate={{ opacity: 1, scale: 1, rotate: 9 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            >
              <motion.div
                className="absolute inset-0 h-full w-full"
                  animate={{ scale: [1, 1.025, 1] }}
                transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
              >
                <Image
                  src="/logo/profile.webp"
                  alt="Abdullah - Software Developer & Automation Specialist"
                  fill
                  priority
                  sizes="(max-width: 640px) 62vw, (max-width: 768px) 280px, 360px"
                  className="object-cover object-[center_30%]"
                  quality={100}
                />
              </motion.div>
            </motion.div>

            <motion.span
              className="absolute left-[7%] top-[4%] z-20 h-7 w-1 rotate-[-24deg] rounded-full bg-[#80eb34]"
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              transition={{ delay: 0.8, duration: 0.3 }}
            />
            <motion.span
              className="absolute left-[14%] top-[1%] z-20 h-6 w-1 rotate-[-8deg] rounded-full bg-[#80eb34]"
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              transition={{ delay: 0.9, duration: 0.3 }}
            />
            <motion.span
              className="absolute left-[21%] top-[4%] z-20 h-6 w-1 rotate-[34deg] rounded-full bg-[#80eb34]"
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              transition={{ delay: 1, duration: 0.3 }}
            />
          </div>

          <motion.div
            className="mt-4 flex items-center gap-3 font-norwester text-xs uppercase tracking-[0.16em] text-black dark:text-white"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#80eb34] opacity-60" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-[#80eb34]" />
            </span>
            Available for freelance projects
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

          <div className="grid gap-5 md:grid-cols-3">
            {services.map((service) => (
              <motion.div
                key={service.id}
                className="group relative overflow-hidden rounded-[1.5rem] border border-black/5 bg-white/50 p-6 shadow-[0_16px_40px_rgba(17,17,17,0.04)] transition-all duration-300 hover:-translate-y-2 hover:border-[#80eb34]/60 hover:bg-[#80eb34]/10 hover:shadow-[0_22px_45px_rgba(128,235,52,0.12)] dark:border-white/10 dark:bg-white/5 dark:hover:border-[#80eb34]/40"
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: Number(service.id) * 0.05 }}
              >
                <span className="absolute right-5 top-5 font-mono text-[10px] text-neutral-400 transition-colors group-hover:text-[#5cba1d] dark:group-hover:text-[#80eb34]">/ / /</span>
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
