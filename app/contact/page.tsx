"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { socialLinks } from "@/components/Footer";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay: i * 0.1 },
  }),
};

export default function Contact() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const services = [
    { id: "web", label: "WEB DEV" },
    { id: "automation", label: "AUTOMATION" },
    { id: "ai", label: "AI SOLUTIONS" },
    { id: "other", label: "OTHER" },
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("abdullahbuilds786@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage(null);

    if (!name.trim()) {
      setStatusMessage({ type: "error", text: "Please enter your name." });
      return;
    }
    if (!email.trim() || !email.includes("@")) {
      setStatusMessage({ type: "error", text: "Please provide a valid email address." });
      return;
    }
    if (!message.trim()) {
      setStatusMessage({ type: "error", text: "Please include a short message describing your project." });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          service: selectedService,
          message: message.trim(),
          budget,
          timeline,
          honeypot,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message. Please try again.");
      }

      setStatusMessage({
        type: "success",
        text: data.message || "Thank you! Your message has been sent successfully. I'll get back to you shortly.",
      });

      // Clear form inputs
      setName("");
      setEmail("");
      setMessage("");
      setSelectedService(null);
      setBudget("");
      setTimeline("");
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "Something went wrong. Please try again or email directly.";
      setStatusMessage({
        type: "error",
        text: errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col flex-1 items-center bg-background font-sans transition-colors duration-500 overflow-hidden min-h-screen pt-36 md:pt-44 pb-24">
      <main className="flex flex-1 w-full max-w-7xl flex-col px-6 md:px-12 transition-colors duration-500 gap-24 md:gap-32">
        
        {/* Split Editorial Layout: Left Anchor & Right Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          
          {/* Left Column — Visual Anchor (Huge Editorial Typography) */}
          <div className="lg:col-span-6 flex flex-col items-start gap-8 lg:sticky lg:top-36">
            
            <motion.h1
              className="font-norwester text-[3.5rem] sm:text-[5rem] md:text-[6rem] lg:text-[6.75rem] leading-[0.95] tracking-tighter text-black dark:text-white uppercase"
              variants={fadeUp}
              custom={0}
              initial="hidden"
              animate="show"
            >
              Let’s{" "}
              <span className="text-[#80eb34] underline decoration-[#80eb34] decoration-[4px] md:decoration-[8px] underline-offset-[8px] md:underline-offset-[14px]">
                Talk.
              </span>
            </motion.h1>

            <motion.p
              className="font-balgin text-lg sm:text-xl md:text-[1.35rem] leading-relaxed text-neutral-700 dark:text-neutral-300 max-w-lg mt-2"
              variants={fadeUp}
              custom={1}
              initial="hidden"
              animate="show"
            >
              Have something worth building? Tell me what you&apos;re working on. I&apos;ll help turn the idea into a clear plan and a working product.
            </motion.p>

            {/* Availability indicator */}
            <motion.div
              className="flex items-center gap-3 text-xs sm:text-sm font-mono font-bold tracking-widest uppercase text-black dark:text-white mt-1"
              variants={fadeUp}
              custom={2}
              initial="hidden"
              animate="show"
            >
              <span className="relative flex h-3 w-3 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#80eb34] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#80eb34]"></span>
              </span>
              <span>Available for freelance projects</span>
            </motion.div>

            {/* Direct Contact & Elsewhere Links */}
            <motion.div
              className="flex flex-col gap-8 pt-8 mt-4 border-t border-neutral-200 dark:border-neutral-800 w-full"
              variants={fadeUp}
              custom={3}
              initial="hidden"
              animate="show"
            >
              {/* Email */}
              <div className="flex flex-col gap-2">
                <span className="font-norwester text-xs tracking-widest uppercase text-neutral-400 dark:text-neutral-500">
                  Direct Email
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="group flex items-center gap-3 w-fit text-left focus:outline-none"
                  title="Click to copy email"
                >
                  <span className="text-base sm:text-lg font-mono text-neutral-900 dark:text-neutral-100 group-hover:text-[#5cba1d] dark:group-hover:text-[#80eb34] transition-colors duration-200">
                    abdullahbuilds786@gmail.com
                  </span>
                  <span className="text-[0.65rem] font-mono uppercase tracking-wider px-2.5 py-1 rounded bg-[#80eb34]/15 text-[#5cba1d] dark:text-[#80eb34] group-hover:bg-[#80eb34]/25 transition-all">
                    {copied ? "Copied!" : "Copy"}
                  </span>
                </button>
              </div>

              {/* Socials / Elsewhere */}
              <div className="flex flex-col gap-3">
                <span className="font-norwester text-xs tracking-widest uppercase text-neutral-400 dark:text-neutral-500">
                  Elsewhere
                </span>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                  {socialLinks.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs sm:text-sm uppercase tracking-wider font-semibold text-neutral-700 dark:text-neutral-300 hover:text-[#5cba1d] dark:hover:text-[#80eb34] transition-colors duration-200"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column — Editorial Line-Based Form */}
          <motion.div
            className="lg:col-span-6 flex flex-col w-full"
            variants={fadeUp}
            custom={2}
            initial="hidden"
            animate="show"
          >
            <div className="flex items-center justify-between pb-4 border-b-2 border-black dark:border-white mb-10">
              <h2 className="font-norwester text-2xl md:text-3xl tracking-wider text-black dark:text-white uppercase">
                Start a Project
              </h2>
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">
                Enquiry
              </span>
            </div>

            <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
              {/* Status feedback message */}
              {statusMessage && (
                <div
                  className={`p-4 rounded-xl font-mono text-sm border transition-all ${
                    statusMessage.type === "success"
                      ? "bg-[#80eb34]/15 border-[#80eb34] text-[#4ea816] dark:text-[#80eb34]"
                      : "bg-red-500/10 border-red-500/30 text-red-600 dark:text-red-400"
                  }`}
                >
                  {statusMessage.text}
                </div>
              )}

              {/* Honeypot field (hidden from real users) */}
              <div className="hidden" aria-hidden="true">
                <label>
                  Don&apos;t fill this out if you&apos;re human:
                  <input
                    type="text"
                    name="address"
                    tabIndex={-1}
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                  />
                </label>
              </div>

              {/* Your Name */}
              <div className="flex flex-col gap-2 group">
                <label className="font-norwester text-xs sm:text-sm tracking-widest uppercase text-neutral-500 dark:text-neutral-400 group-focus-within:text-black dark:group-focus-within:text-white transition-colors">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jane Doe"
                  className="w-full pb-3 pt-1 bg-transparent border-b border-neutral-300 dark:border-neutral-800 text-black dark:text-white placeholder:text-neutral-400/50 font-mono text-base sm:text-lg focus:outline-none focus:border-[#80eb34] transition-colors rounded-none"
                />
              </div>

              {/* Email Address */}
              <div className="flex flex-col gap-2 group">
                <label className="font-norwester text-xs sm:text-sm tracking-widest uppercase text-neutral-500 dark:text-neutral-400 group-focus-within:text-black dark:group-focus-within:text-white transition-colors">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jane@company.com"
                  className="w-full pb-3 pt-1 bg-transparent border-b border-neutral-300 dark:border-neutral-800 text-black dark:text-white placeholder:text-neutral-400/50 font-mono text-base sm:text-lg focus:outline-none focus:border-[#80eb34] transition-colors rounded-none"
                />
              </div>

              {/* Project Type */}
              <div className="flex flex-col gap-3">
                <label className="font-norwester text-xs sm:text-sm tracking-widest uppercase text-neutral-500 dark:text-neutral-400">
                  What Can I Help With?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                  {services.map((s) => {
                    const isSelected = selectedService === s.id;
                    return (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => setSelectedService(isSelected ? null : s.id)}
                        className={`py-3 px-3 text-center border font-mono text-xs tracking-wider uppercase transition-all duration-200 rounded-lg cursor-pointer ${
                          isSelected
                            ? "border-[#80eb34] bg-[#80eb34] text-black font-bold shadow-md shadow-[#80eb34]/25"
                            : "border-neutral-300 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:border-black dark:hover:border-white bg-transparent"
                        }`}
                      >
                        {s.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2 group">
                <label className="font-norwester text-xs sm:text-sm tracking-widest uppercase text-neutral-500 dark:text-neutral-400 group-focus-within:text-black dark:group-focus-within:text-white transition-colors">
                  Tell Me About Your Project *
                </label>
                <textarea
                  rows={3}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Overview, scope, goals, or problems you're looking to solve..."
                  className="w-full pb-3 pt-1 bg-transparent border-b border-neutral-300 dark:border-neutral-800 text-black dark:text-white placeholder:text-neutral-400/50 font-mono text-base sm:text-lg focus:outline-none focus:border-[#80eb34] transition-colors resize-none rounded-none"
                />
              </div>

              {/* Budget & Timeline Dropdowns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="font-norwester text-xs sm:text-sm tracking-widest uppercase text-neutral-500 dark:text-neutral-400">
                    Budget Range
                  </label>
                  <div className="relative">
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full pb-3 pt-1 bg-transparent border-b border-neutral-300 dark:border-neutral-800 text-black dark:text-white font-mono text-sm sm:text-base focus:outline-none focus:border-[#80eb34] transition-colors appearance-none cursor-pointer rounded-none"
                    >
                      <option value="" className="dark:bg-[#151515]">Select budget (Optional)</option>
                      <option value="under-10k" className="dark:bg-[#151515]">Under ₹10k</option>
                      <option value="10k-25k" className="dark:bg-[#151515]">₹10k – ₹25k</option>
                      <option value="25k-50k" className="dark:bg-[#151515]">₹25k – ₹50k</option>
                      <option value="50k-1L" className="dark:bg-[#151515]">₹50k – ₹1L</option>
                      <option value="1L-plus" className="dark:bg-[#151515]">₹1L+</option>
                      <option value="not-sure" className="dark:bg-[#151515]">Not sure yet</option>
                    </select>
                    <span className="absolute right-0 bottom-3 text-xs pointer-events-none text-neutral-400">
                      ▼
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-norwester text-xs sm:text-sm tracking-widest uppercase text-neutral-500 dark:text-neutral-400">
                    Timeline
                  </label>
                  <div className="relative">
                    <select
                      value={timeline}
                      onChange={(e) => setTimeline(e.target.value)}
                      className="w-full pb-3 pt-1 bg-transparent border-b border-neutral-300 dark:border-neutral-800 text-black dark:text-white font-mono text-sm sm:text-base focus:outline-none focus:border-[#80eb34] transition-colors appearance-none cursor-pointer rounded-none"
                    >
                      <option value="" className="dark:bg-[#151515]">Select timeline (Optional)</option>
                      <option value="asap" className="dark:bg-[#151515]">ASAP</option>
                      <option value="1-2-months" className="dark:bg-[#151515]">1–2 months</option>
                      <option value="3-plus-months" className="dark:bg-[#151515]">3+ months</option>
                      <option value="flexible" className="dark:bg-[#151515]">Flexible</option>
                    </select>
                    <span className="absolute right-0 bottom-3 text-xs pointer-events-none text-neutral-400">
                      ▼
                    </span>
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="flex justify-start sm:justify-end pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#80eb34] disabled:opacity-60 text-black font-norwester text-lg uppercase tracking-widest px-10 py-4 rounded-2xl hover:-translate-y-1 hover:shadow-lg hover:shadow-[#80eb34]/30 active:translate-y-0 disabled:hover:translate-y-0 disabled:cursor-not-allowed transition-all duration-300 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <span className="inline-block w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Enquiry →"
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Bottom Horizontal Process Strip */}
        <motion.div
          className="pt-16 border-t border-neutral-200 dark:border-neutral-800 flex flex-col gap-10"
          variants={fadeUp}
          custom={4}
          initial="hidden"
          animate="show"
        >
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <span className="font-norwester text-xs sm:text-sm tracking-widest uppercase text-[#5cba1d] dark:text-[#80eb34]">
              Workflow
            </span>
            <span className="font-norwester text-lg sm:text-xl tracking-wider text-black dark:text-white uppercase">
              From Idea → To Something Real.
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <span className="font-norwester text-sm text-[#80eb34]">01</span>
                <span className="font-norwester text-base uppercase tracking-wider text-black dark:text-white">
                  Discuss
                </span>
              </div>
              <p className="font-balgin text-sm text-neutral-600 dark:text-neutral-400 pl-7 leading-relaxed">
                You tell me about the project. A few details and constraints are plenty to begin with.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <span className="font-norwester text-sm text-[#80eb34]">02</span>
                <span className="font-norwester text-base uppercase tracking-wider text-black dark:text-white">
                  Plan
                </span>
              </div>
              <p className="font-balgin text-sm text-neutral-600 dark:text-neutral-400 pl-7 leading-relaxed">
                We clarify the scope, technical approach, timeline, and exact deliverables.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <span className="font-norwester text-sm text-[#80eb34]">03</span>
                <span className="font-norwester text-base uppercase tracking-wider text-black dark:text-white">
                  Build
                </span>
              </div>
              <p className="font-balgin text-sm text-neutral-600 dark:text-neutral-400 pl-7 leading-relaxed">
                Execution, clean codebase, automation pipelines, and delivery into production.
              </p>
            </div>
          </div>
        </motion.div>

      </main>
    </div>
  );
}
