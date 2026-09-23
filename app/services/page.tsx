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

const services = [
  {
    id: "01",
    anchor: "web-development",
    title: "Web Development",
    description:
      "I build modern, performant websites and web applications with clear structure, responsive detail, and production-ready delivery.",
    detail: "Websites, custom platforms, and digital products.",
  },
  {
    id: "02",
    anchor: "automation",
    title: "Automation",
    description:
      "I identify repetitive manual work and replace it with reliable systems that keep your team moving without constant follow-up.",
    detail: "Workflows that remove busywork.",
  },
  {
    id: "03",
    anchor: "ai-integration",
    title: "AI Integration",
    description:
      "I connect practical AI experiences to real products, from smart document processing and chat experiences to useful internal assistants.",
    detail: "AI features built around real business needs.",
  },
  {
    id: "04",
    anchor: "ui-enhancement",
    title: "UI Enhancement",
    description:
      "I refine existing interfaces with clearer layouts, smoother interactions, and responsive design that feels polished on every screen.",
    detail: "A sharper, more considered experience for your existing product.",
  },
  {
    id: "05",
    anchor: "migration",
    title: "Migration & Modernization",
    description:
      "I upgrade legacy applications into modern, maintainable products with better performance, accessibility, and scalability.",
    detail: "A cleaner foundation without losing what already works.",
  },
  {
    id: "06",
    anchor: "ai-chatbots",
    title: "AI Chatbot Services",
    description:
      "I build practical AI chatbots for businesses that answer questions, support customers, qualify leads, and connect with your existing tools.",
    detail: "Business chatbots that are useful, focused, and connected.",
  },
];

export default function Services() {
  return (
    <div className="page-shell flex flex-col flex-1 items-center bg-background font-sans transition-colors duration-500 overflow-hidden min-h-screen pt-36 md:pt-44 pb-24">
      <main className="flex flex-1 w-full max-w-7xl flex-col px-6 md:px-12 gap-24 md:gap-32">

        {/* Hero */}
        <div className="flex flex-col gap-8">
          <motion.div className="flex flex-col gap-2" variants={fadeUp} custom={0} initial="hidden" animate="show">
            <span className="page-kicker">What I Do</span>
            <h1 className="font-norwester text-[3.5rem] sm:text-[5rem] md:text-[6rem] lg:text-[7rem] leading-[0.92] tracking-tighter text-black dark:text-white uppercase">
              Build better.<br /><span className="text-[#80eb34]">Automate smarter.</span>
            </h1>
          </motion.div>

          <motion.p className="font-balgin text-lg md:text-xl leading-relaxed text-neutral-700 dark:text-neutral-300 max-w-2xl mt-4" variants={fadeUp} custom={1} initial="hidden" animate="show">
            I build modern websites, automate repetitive workflows, and integrate AI where it actually makes a difference. Choose the kind of problem you want to solve.
          </motion.p>
        </div>

        <motion.section className="grid gap-5 md:grid-cols-2 lg:grid-cols-3" variants={fadeUp} custom={2} initial="hidden" animate="show">
          {services.map((service) => (
            <motion.article
              key={service.id}
              id={service.anchor}
              className="sketch-panel group relative flex scroll-mt-32 flex-col overflow-hidden bg-white/50 p-6 shadow-[0_16px_40px_rgba(17,17,17,0.04)] transition-all duration-300 hover:-translate-y-2 hover:border-[#80eb34]/60 hover:bg-[#80eb34]/10 hover:shadow-[0_22px_45px_rgba(128,235,52,0.12)] dark:border-white/10 dark:bg-white/5 dark:hover:border-[#80eb34]/40"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 18 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: Number(service.id) * 0.05 }}
            >
              <span className="absolute right-5 top-5 font-mono text-[10px] text-neutral-400 transition-colors group-hover:text-[#5cba1d] dark:group-hover:text-[#80eb34]">[ / / / ]</span>
              <span className="font-norwester text-xs uppercase tracking-[0.28em] text-[#80eb34]">{service.id}</span>
              <h2 className="mt-5 font-norwester text-2xl uppercase tracking-[0.08em] text-black dark:text-white">{service.title}</h2>
              <p className="mt-4 font-balgin text-base leading-relaxed text-neutral-600 dark:text-neutral-300">{service.description}</p>
              <p className="mt-auto pt-8 font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-500">{service.detail}</p>
            </motion.article>
          ))}
        </motion.section>

        {/* CTA Strip */}
        <motion.section className="sketch-panel flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 py-12 px-10 md:px-14 bg-[#80eb34]" variants={fadeUp} custom={4} initial="hidden" animate="show">
          <div className="flex flex-col gap-2">
            <h2 className="font-norwester text-2xl md:text-3xl uppercase tracking-wide text-black">Ready to build?</h2>
            <p className="font-balgin text-base text-black/70">Let me know what you need help with.</p>
          </div>
          <Link href="/contact" className="sketch-button shrink-0 inline-flex items-center gap-2 bg-black text-white font-norwester text-lg uppercase tracking-widest px-8 py-4 hover:-translate-y-1 hover:shadow-xl active:translate-y-0 transition-all duration-300">
            Discuss a Project &rarr;
          </Link>
        </motion.section>

      </main>
    </div>
  );
}
