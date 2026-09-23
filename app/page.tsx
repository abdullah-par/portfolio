"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, Terminal, Cpu, Layers, Workflow, Bot } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const, delay: i * 0.08 },
  }),
};

const services = [
  {
    id: "01",
    icon: Terminal,
    title: "Web Development",
    tagline: "High Performance & Scalability",
    description:
      "Crafting production-ready web applications and websites with a focus on speed, responsive detail, and clear structure.",
    tags: ["Web Apps", "Responsive Systems", "Product Sites"],
    colSpan: "md:col-span-2",
    highlight: true,
  },
  {
    id: "02",
    icon: Workflow,
    title: "Automation Systems",
    tagline: "End-to-End Orchestration",
    description:
      "Replacing manual bottlenecks with dependable workflows that keep information moving and teams focused.",
    tags: ["Process Design", "Workflow Systems", "Operations"],
    colSpan: "md:col-span-1",
    highlight: false,
  },
  {
    id: "03",
    icon: Bot,
    title: "AI Integration & Agents",
    tagline: "Practical LLM Implementations",
    description:
      "Integrating cutting-edge LLMs, structured document extraction, and autonomous agent loops that solve real business operational overhead.",
    tags: ["AI Workflows", "Knowledge Systems", "Assistants"],
    colSpan: "md:col-span-1",
    highlight: false,
  },
  {
    id: "04",
    icon: Layers,
    title: "UI / UX Polish & Modernization",
    tagline: "Editorial & Interactive Elegance",
    description:
      "Elevating legacy digital experiences with fluid micro-interactions, responsive design systems, and aesthetic craft that instills buyer trust.",
    tags: ["Interaction Design", "Clarity", "Accessibility"],
    colSpan: "md:col-span-2",
    highlight: true,
  },
  {
    id: "05",
    icon: Cpu,
    title: "AI Chatbots & Assistants",
    tagline: "Smart Lead Gen & Support",
    description:
      "Autonomous, context-grounded AI chatbots tailored for product demos, client qualification, and 24/7 customer resolution with CRM sync.",
    tags: ["Customer Support", "Lead Qualification", "Useful Answers"],
    colSpan: "md:col-span-3",
    highlight: false,
  },
];

export default function Home() {
  return (
    <div className="page-shell relative flex flex-col flex-1 items-center bg-background font-sans transition-colors duration-500 overflow-hidden">
      
      {/* Ambient background glow accents */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[720px] h-[450px] glow-spot rounded-full blur-3xl opacity-70 dark:opacity-40" />
      <div className="pointer-events-none absolute top-[700px] -right-40 w-[500px] h-[500px] glow-spot rounded-full blur-3xl opacity-50 dark:opacity-20" />

      {/* ── Sketchy Hero Section ── */}
      <main className="relative flex flex-col w-full max-w-7xl px-6 pt-32 pb-12 md:px-12 md:pt-40 md:pb-20">
        
        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Raw Typographic Statement */}
          <div className="lg:col-span-7 flex flex-col items-start gap-7">
            
            {/* Giant sketchy headline */}
            <motion.div variants={fadeUp} custom={1} initial="hidden" animate="show">
              <h1 className="font-norwester text-[3.5rem] sm:text-[5rem] md:text-[6rem] lg:text-[4.75rem] xl:text-[5.5rem] leading-[0.88] tracking-tighter uppercase text-neutral-950 dark:text-white">
                BUILD <span className="sketch-underline text-[#80eb34]">BETTER,</span>
                <br />
                <span className="inline-flex whitespace-nowrap">AUTOMATE <span className="relative inline-block text-[#80eb34]">
                  <span className="sketch-highlight">SMARTER.</span>
                  {/* Hand-drawn arrow SVG pointing to this */}
                  <svg className="absolute -right-10 -top-8 w-10 h-10 text-[#80eb34] rotate-[30deg] hidden md:block" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M5 35 Q 15 10, 35 8" />
                    <path d="M28 3 L35 8 L27 13" />
                  </svg>
                </span></span>
              </h1>
            </motion.div>

            {/* Subheading with sketchy personality */}
            <motion.p
              variants={fadeUp} custom={2} initial="hidden" animate="show"
              className="font-balgin text-lg md:text-xl text-neutral-700 dark:text-neutral-300 max-w-lg leading-relaxed"
            >
              I build modern websites, automate repetitive workflows, and integrate AI where it actually makes a difference.
            </motion.p>

            {/* Sketchy CTA buttons */}
            <motion.div
              variants={fadeUp} custom={3} initial="hidden" animate="show"
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2"
            >
              <Link
                href="/work"
                className="group inline-flex items-center justify-center gap-3 bg-neutral-950 text-white dark:bg-white dark:text-black px-8 py-4 font-norwester text-base uppercase tracking-widest transition-all duration-300 hover:bg-[#80eb34] hover:text-black sketch-border border-neutral-950 dark:border-white hover:border-[#80eb34]"
              >
                <span>View My Work</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>

              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 bg-transparent text-neutral-900 dark:text-neutral-100 px-8 py-4 font-norwester text-base uppercase tracking-widest transition-all duration-300 hover:bg-neutral-100 dark:hover:bg-neutral-900 sketch-dash border-neutral-400 dark:border-neutral-700"
              >
                Let&apos;s Work Together
              </Link>
            </motion.div>

            {/* Rough hand-drawn stat scribbles */}
            <motion.div
              variants={fadeUp} custom={4} initial="hidden" animate="show"
              className="flex flex-wrap items-center gap-6 pt-6 mt-2 border-t-2 border-dashed border-neutral-300 dark:border-neutral-800 w-full max-w-lg"
            >
              <div className="flex flex-col">
                <span className="font-norwester text-3xl text-neutral-950 dark:text-white">100%</span>
                <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">on-time delivery</span>
              </div>
              <div className="h-8 w-px bg-neutral-300 dark:bg-neutral-700" />
              <div className="flex flex-col">
                <span className="font-norwester text-3xl text-neutral-950 dark:text-white">SYSTEMS</span>
                <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">that reduce busywork</span>
              </div>
            </motion.div>

          </div>

          {/* Right: Sketchy Portrait with hand-drawn frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              variants={fadeUp} custom={2} initial="hidden" animate="show"
              className="relative w-full max-w-[380px]"
            >
              {/* Hand-drawn scribble circle behind the photo */}
              <svg className="absolute -inset-6 w-[calc(100%+48px)] h-[calc(100%+48px)] pointer-events-none -z-10" viewBox="0 0 400 500" fill="none">
                <ellipse cx="200" cy="250" rx="185" ry="230"
                  stroke="#80eb34" strokeWidth="2.5" strokeDasharray="8 6"
                  transform="rotate(-3 200 250)" opacity="0.5"
                />
                <ellipse cx="200" cy="250" rx="175" ry="220"
                  stroke="#80eb34" strokeWidth="1.5"
                  transform="rotate(2 200 250)" opacity="0.3"
                />
              </svg>

              {/* Main photo with rough organic border */}
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.5rem] border-[3px] border-neutral-950 dark:border-neutral-300 bg-neutral-200 dark:bg-neutral-900 shadow-[8px_8px_0px_0px_#80eb34] transition-shadow duration-300 hover:shadow-[12px_12px_0px_0px_#80eb34]">
                <Image
                  src="/logo/profile.webp"
                  alt="Abdullah Parvez"
                  fill
                  priority
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 380px, 440px"
                  className="object-cover object-[center_20%]"
                />
              </div>

              {/* Hand-drawn arrow annotation pointing to photo */}
              <div className="absolute -bottom-8 -left-4 flex items-center gap-2 rotate-[-4deg]">
                <svg className="w-8 h-8 text-[#80eb34]" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M4 28 Q 12 8, 28 6" />
                  <path d="M22 2 L28 6 L21 11" />
                </svg>
                <span className="font-mono text-xs uppercase tracking-wider text-neutral-600 dark:text-neutral-400 font-semibold whitespace-nowrap">
                  that&apos;s me!
                </span>
              </div>

              {/* Scribbled tag floating top-right */}
              <div className="absolute -top-3 -right-3 rotate-[3deg] bg-[#80eb34] text-black px-3 py-1 font-mono text-[10px] uppercase tracking-widest font-bold shadow-md">
                ✦ Available
              </div>

            </motion.div>
          </div>

        </div>

        {/* Sketchy infinite scrolling marquee ticker */}
        <div className="w-full mt-16 pt-6 border-t-2 border-dashed border-neutral-300 dark:border-neutral-800 overflow-hidden select-none">
          <div className="flex w-max animate-marquee">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-6 pr-6 whitespace-nowrap font-norwester text-xl md:text-2xl uppercase tracking-[0.12em] text-neutral-400/70 dark:text-neutral-600">
                <span>Web Engineering</span>
                <span className="text-[#80eb34] text-base">✦</span>
                <span>Workflow Systems</span>
                <span className="text-[#80eb34] text-base">✦</span>
                <span>LLM Agents</span>
                <span className="text-[#80eb34] text-base">✦</span>
                <span>Tailwind Systems</span>
                <span className="text-[#80eb34] text-base">✦</span>
                <span>React Architecture</span>
                <span className="text-[#80eb34] text-base">✦</span>
                <span>Bespoke Code</span>
                <span className="text-[#80eb34] text-base">✦</span>
              </div>
            ))}
          </div>
        </div>

      </main>

      {/* Bento-Box Capabilities & Services Section */}
      <div className="flex w-full max-w-7xl flex-col gap-24 px-6 pb-24 md:px-12 md:pb-32">
        <motion.section
          className="flex flex-col gap-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Section Header */}
          <div className="flex flex-col justify-between gap-3 border-b-2 border-neutral-950 pb-5 dark:border-white sm:flex-row sm:items-end">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#5cba1d] dark:text-[#80eb34] font-bold">
                [ 01 // CAPABILITIES ]
              </span>
              <h2 className="font-norwester text-3xl uppercase tracking-[0.06em] text-neutral-950 dark:text-white md:text-4xl">
                What I Engineer &amp; Deliver
              </h2>
            </div>
            <p className="font-balgin text-sm text-neutral-600 dark:text-neutral-400 max-w-sm">
              End-to-end technical execution across modern web engineering, workflow orchestration, and bespoke AI systems.
            </p>
          </div>

          {/* Silicon Valley Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  className={`bento-card group relative flex flex-col justify-between overflow-hidden p-8 transition-all duration-300 ${
                    service.highlight
                      ? "text-neutral-950 dark:text-white"
                      : "text-neutral-900 dark:text-white"
                  } ${service.colSpan} hover:border-[#80eb34]/80 dark:hover:border-[#80eb34]/60`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <div className="pointer-events-none absolute right-8 top-8 h-5 w-12 rotate-[-4deg] border-t-2 border-dashed border-[#80eb34]/60 transition-all duration-300 group-hover:w-16" />

                  {/* Top Bar */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-[0.55rem_0.75rem_0.45rem_0.65rem] bg-neutral-100/80 dark:bg-white/5 border border-neutral-300/70 dark:border-neutral-800 text-neutral-900 dark:text-neutral-100 group-hover:text-[#5cba1d] dark:group-hover:text-[#80eb34] group-hover:border-[#80eb34]/40 transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-400 group-hover:text-[#5cba1d] dark:group-hover:text-[#80eb34] transition-colors">
                      {service.id}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="mt-8">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#5cba1d] dark:text-[#80eb34] font-semibold">
                      {service.tagline}
                    </span>
                    <h3 className="mt-1 font-norwester text-2xl uppercase tracking-wide text-neutral-950 dark:text-white">
                      {service.title}
                    </h3>
                    <p className="mt-3 font-balgin text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                      {service.description}
                    </p>
                  </div>

                  {/* Tag Pills */}
                  <div className="mt-6 flex flex-wrap gap-1.5 pt-4 border-t border-neutral-100 dark:border-neutral-800/80">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-neutral-100 px-2 py-0.5 font-mono text-[10px] text-neutral-600 dark:bg-white/5 dark:text-neutral-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Engagement Models: High Contrast Studio Cards */}
        <motion.section
          className="flex flex-col gap-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col justify-between gap-3 border-b-2 border-neutral-950 pb-5 dark:border-white sm:flex-row sm:items-end">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#5cba1d] dark:text-[#80eb34] font-bold">
                [ 02 // COLLABORATION ]
              </span>
              <h2 className="font-norwester text-3xl uppercase tracking-[0.06em] text-neutral-950 dark:text-white md:text-4xl">
                How We Can Work Together
              </h2>
            </div>
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">Flexible Delivery</span>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="group rounded-[2rem] border border-neutral-300/80 bg-white/70 p-8 shadow-sm transition-all duration-300 hover:border-black dark:border-neutral-800 dark:bg-neutral-900/40 dark:hover:border-neutral-600">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-[#80eb34]/20 px-3 py-1 font-mono text-xs uppercase font-bold text-[#5cba1d] dark:text-[#80eb34]">
                  Fixed Scope
                </span>
                <span className="font-mono text-xs text-neutral-400">[01]</span>
              </div>
              <h3 className="mt-5 font-norwester text-2xl uppercase tracking-wide text-neutral-950 dark:text-white">
                Freelance &amp; Sprint Builds
              </h3>
              <p className="mt-3 font-balgin text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
                End-to-end execution with clear milestones. You supply the objectives; I shape the plan, build the solution, test, and ship it. Ideal for MVPs, customer portals, and workflow pipelines.
              </p>
            </div>

            <div className="group rounded-[2rem] border border-neutral-300/80 bg-white/70 p-8 shadow-sm transition-all duration-300 hover:border-black dark:border-neutral-800 dark:bg-neutral-900/40 dark:hover:border-neutral-600">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-neutral-200 dark:bg-white/10 px-3 py-1 font-mono text-xs uppercase font-bold text-neutral-800 dark:text-neutral-200">
                  Dedicated Retainer
                </span>
                <span className="font-mono text-xs text-neutral-400">[02]</span>
              </div>
              <h3 className="mt-5 font-norwester text-2xl uppercase tracking-wide text-neutral-950 dark:text-white">
                Contract &amp; Team Embedding
              </h3>
              <p className="mt-3 font-balgin text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
                Direct integration into your engineering sprints or product team for continuous feature rollout, automated system maintenance, and dedicated technical velocity without recruitment friction.
              </p>
            </div>
          </div>
        </motion.section>

        {/* High-Impact Studio CTA Banner */}
        <motion.section
          className="relative overflow-hidden flex flex-col items-start justify-between gap-8 rounded-[2.5rem] bg-neutral-950 px-8 py-12 text-white md:flex-row md:items-center md:px-14 md:py-16 shadow-2xl border border-neutral-800"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Subtle Electric Accent Glow in Corner */}
          <div className="pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-[#80eb34]/25 blur-3xl" />

          <div className="relative z-10 max-w-xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[#80eb34] font-semibold">
              Ready to Accelerate?
            </span>
            <h2 className="mt-2 font-norwester text-3xl uppercase tracking-tight text-white md:text-5xl">
              Let&apos;s build something exceptional.
            </h2>
            <p className="mt-3 font-balgin text-base text-neutral-300">
              Have an upcoming product, automation roadblock, or AI initiative? Reach out to start the conversation.
            </p>
          </div>

          <div className="relative z-10 flex shrink-0">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-2xl bg-[#80eb34] px-8 py-4 font-norwester text-base uppercase tracking-[0.16em] text-neutral-950 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(128,235,52,0.35)]"
            >
              <span>Initiate Project</span>
              <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </motion.section>

      </div>
    </div>
  );
}
