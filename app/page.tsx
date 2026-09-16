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
                <motion.div
                  className="absolute inset-0 w-full h-full scale-[1.35]"
                  animate={{ 
                    rotate: [-15, -11, -15]
                  }}
                  transition={{ 
                    rotate: { duration: 5, ease: "easeInOut", repeat: Infinity, repeatType: "loop" }
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

      {/* Sections moved from About */}
      <div className="flex flex-col w-full max-w-7xl px-6 md:px-12 pb-24 md:pb-32 gap-24 md:gap-32">
        
        {/* What I Do */}
        <motion.section 
          className="flex flex-col gap-10" 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
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
        <motion.section 
          className="flex flex-col gap-10" 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-5 border-b-2 border-black dark:border-white">
            <h2 className="font-norwester text-2xl md:text-3xl uppercase tracking-wider text-black dark:text-white">Skills and Tools</h2>
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">Tech</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
            {[
              { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
              { category: "Backend", items: ["Node.js", "Python", "REST APIs", "PostgreSQL", "MongoDB"] },
              { category: "Automation", items: ["n8n", "Make", "Zapier", "Web Scraping", "Workflow Design"] },
              { category: "AI Tools", items: ["OpenAI API", "LangChain", "Prompt Engineering", "RAG Systems"] },
            ].map((group) => (
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
        <motion.section 
          className="flex flex-col gap-10" 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
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
        <motion.section 
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 py-12 px-10 md:px-14 bg-[#80eb34] rounded-[2rem] md:rounded-[3rem]" 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col gap-2">
            <h2 className="font-norwester text-2xl md:text-3xl uppercase tracking-wide text-black">Have a project in mind?</h2>
            <p className="font-balgin text-base text-black/70">Tell me what you are building. I will get back within 1-2 business days.</p>
          </div>
          <Link href="/contact" className="shrink-0 inline-flex items-center gap-2 bg-black text-white font-norwester text-lg uppercase tracking-widest px-8 py-4 rounded-2xl hover:-translate-y-1 hover:shadow-xl active:translate-y-0 transition-all duration-300">
            Start a Project
          </Link>
        </motion.section>

      </div>
    </div>
  );
}
