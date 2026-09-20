"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Close mobile menu on route changes
  React.useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is active
  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const toggleTheme = (e: React.MouseEvent) => {
    const isDark = resolvedTheme === "dark";
    const nextTheme = isDark ? "light" : "dark";

    if (!document.startViewTransition) {
      setTheme(nextTheme);
      return;
    }

    const x = e.clientX;
    const y = e.clientY;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = document.startViewTransition(() => {
      setTheme(nextTheme);
    });

    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ];

      document.documentElement.animate(
        {
          clipPath: clipPath,
        },
        {
          duration: 750,
          easing: "cubic-bezier(0.8, 0, 0.2, 1)",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    });
  };

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    { name: "WORK", href: "/work" },
    { name: "SERVICES", href: "/services" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-50 flex justify-center w-full pt-8 pb-4 border-b border-neutral-200/50 dark:border-neutral-800/50 bg-background/50 backdrop-blur-sm">
        <nav className="flex items-center justify-between w-full max-w-7xl px-6 md:px-12">
          
          {/* Logo */}
          <Link 
            href="/" 
            className="flex flex-col text-2xl md:text-3xl font-black leading-none tracking-tighter uppercase text-black dark:text-white z-50"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span>ABDULLAH</span>
            <span>
              <span className="text-[#80eb34]">.</span>DEV
            </span>
          </Link>

          {/* Right side container */}
          <div className="flex items-center gap-3">
            
            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8 mr-4">
              {navLinks.map((link) => {
                const isServices = link.name === "SERVICES";
                const isActive = pathname === link.href || (isServices && pathname.startsWith("/services"));

                if (isServices) {
                  return (
                    <div
                      key={link.name}
                      className="relative group py-2"
                    >
                      <Link
                        href={link.href}
                        className={`relative flex items-center gap-1.5 font-norwester text-base lg:text-lg uppercase tracking-wide transition-colors ${
                          isActive
                            ? "text-[#5cba1d] dark:text-[#80eb34]"
                            : "text-black hover:text-[#80eb34] dark:text-white dark:hover:text-[#80eb34]"
                        }`}
                      >
                        {link.name}
                        <svg
                          className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 text-neutral-500 group-hover:text-[#80eb34]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                        <span
                          className={`absolute -bottom-1 left-0 w-full h-[3px] bg-[#80eb34] transition-transform origin-left duration-300 ease-out ${
                            isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                          }`}
                        />
                      </Link>

                      {/* Minimal Stripe-style Dropdown Menu */}
                      <div className="absolute top-full right-0 pt-4 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 ease-out z-50">
                        <div className="w-[min(720px,calc(100vw-2rem))] max-h-[calc(100vh-8rem)] overflow-y-auto p-6 sm:p-8 bg-white dark:bg-[#0d0d0d] border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-2xl backdrop-blur-xl">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
                            
                            {/* Column 1: Web Development (6 cols) */}
                            <div className="flex flex-col gap-4">
                              <span className="font-norwester text-xs uppercase tracking-widest text-neutral-400 dark:text-neutral-500 font-semibold">
                                Web Development
                              </span>
                              <div className="flex flex-col gap-3.5">
                                <Link
                                  href="/services#fullstack"
                                  className="group/link flex flex-col"
                                >
                                  <span className="font-norwester text-base tracking-wide text-neutral-900 dark:text-neutral-100 group-hover/link:text-[#5cba1d] dark:group-hover/link:text-[#80eb34] transition-colors">
                                    Full Stack Development
                                  </span>
                                  <span className="font-balgin text-xs text-neutral-500 dark:text-neutral-400">
                                    End-to-end web apps, custom platforms & APIs
                                  </span>
                                </Link>

                                <Link
                                  href="/services#ui-enhancement"
                                  className="group/link flex flex-col"
                                >
                                  <span className="font-norwester text-base tracking-wide text-neutral-900 dark:text-neutral-100 group-hover/link:text-[#5cba1d] dark:group-hover/link:text-[#80eb34] transition-colors">
                                    UI Enhancement
                                  </span>
                                  <span className="font-balgin text-xs text-neutral-500 dark:text-neutral-400">
                                    Refining interactions, responsiveness & visual polish
                                  </span>
                                </Link>

                                <Link
                                  href="/services#migration"
                                  className="group/link flex flex-col"
                                >
                                  <span className="font-norwester text-base tracking-wide text-neutral-900 dark:text-neutral-100 group-hover/link:text-[#5cba1d] dark:group-hover/link:text-[#80eb34] transition-colors">
                                    Migration & Modernization
                                  </span>
                                  <span className="font-balgin text-xs text-neutral-500 dark:text-neutral-400">
                                    Upgrading legacy codebases to modern Next.js stacks
                                  </span>
                                </Link>
                              </div>
                            </div>

                            {/* Column 2: AI & Automation (6 cols) */}
                            <div className="flex flex-col gap-4 border-t border-neutral-100 dark:border-neutral-800/80 pt-8 sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0">
                              <span className="font-norwester text-xs uppercase tracking-widest text-neutral-400 dark:text-neutral-500 font-semibold">
                                AI & Automation
                              </span>
                              <div className="flex flex-col gap-3">
                                <Link
                                  href="/services#marketing-automation"
                                  className="group/link flex flex-col"
                                >
                                  <span className="font-norwester text-base tracking-wide text-neutral-900 dark:text-neutral-100 group-hover/link:text-[#5cba1d] dark:group-hover/link:text-[#80eb34] transition-colors">
                                    Marketing Automation
                                  </span>
                                  <span className="font-balgin text-xs text-neutral-500 dark:text-neutral-400">
                                    Automated email funnels, lead scoring & campaign workflows
                                  </span>
                                </Link>

                                <Link
                                  href="/services#crm-integration"
                                  className="group/link flex flex-col"
                                >
                                  <span className="font-norwester text-base tracking-wide text-neutral-900 dark:text-neutral-100 group-hover/link:text-[#5cba1d] dark:group-hover/link:text-[#80eb34] transition-colors">
                                    CRM Integration
                                  </span>
                                  <span className="font-balgin text-xs text-neutral-500 dark:text-neutral-400">
                                    Seamless sync with HubSpot, Salesforce, Airtable & Notion
                                  </span>
                                </Link>

                                <Link
                                  href="/services#sales-automation"
                                  className="group/link flex flex-col"
                                >
                                  <span className="font-norwester text-base tracking-wide text-neutral-900 dark:text-neutral-100 group-hover/link:text-[#5cba1d] dark:group-hover/link:text-[#80eb34] transition-colors">
                                    Sales Automation
                                  </span>
                                  <span className="font-balgin text-xs text-neutral-500 dark:text-neutral-400">
                                    Outreach pipelines, automatic follow-ups & meeting sync
                                  </span>
                                </Link>

                                <Link
                                  href="/contact"
                                  className="mt-1 font-norwester text-xs uppercase tracking-widest text-[#5cba1d] dark:text-[#80eb34] hover:underline flex items-center gap-1"
                                >
                                  Discuss a Project →
                                </Link>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <Link 
                    key={link.name} 
                    href={link.href}
                    className={`relative group font-norwester text-base lg:text-lg uppercase tracking-wide transition-colors ${
                      isActive 
                        ? "text-[#5cba1d] dark:text-[#80eb34]" 
                        : "text-black hover:text-[#80eb34] dark:text-white dark:hover:text-[#80eb34]"
                    }`}
                  >
                    {link.name}
                    <span className={`absolute -bottom-1 left-0 w-full h-[3px] bg-[#80eb34] transition-transform origin-left duration-300 ease-out ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`} />
                  </Link>
                );
              })}
            </div>

            {/* Theme Toggle Button */}
            <div className="relative">
              <div className="absolute inset-0 bg-[#80eb34] rounded-xl translate-x-[3px] translate-y-[3px] md:translate-x-[5px] md:translate-y-[5px]" />
              <button
                onClick={toggleTheme}
                className="relative w-10 h-10 md:w-11 md:h-11 flex items-center justify-center bg-black dark:bg-white text-white dark:text-black rounded-xl hover:-translate-y-[1px] hover:-translate-x-[1px] active:translate-y-[2px] active:translate-x-[2px] transition-all cursor-pointer"
                aria-label="Toggle theme"
              >
                {mounted ? (
                  <div className="relative flex items-center justify-center w-5 h-5">
                    <Sun 
                      className={`absolute transition-all duration-500 ease-in-out ${resolvedTheme === 'dark' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}`} 
                      size={18} 
                      strokeWidth={2.5} 
                    />
                    <Moon 
                      className={`absolute transition-all duration-500 ease-in-out ${resolvedTheme === 'light' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-50'}`} 
                      size={18} 
                      strokeWidth={2.5} 
                    />
                  </div>
                ) : (
                  <div className="w-[18px] h-[18px]" />
                )}
              </button>
            </div>

            {/* Mobile Hamburger / Close Button */}
            <div className="relative md:hidden">
              <div className="absolute inset-0 bg-[#80eb34] rounded-xl translate-x-[3px] translate-y-[3px]" />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="relative w-10 h-10 flex items-center justify-center bg-black dark:bg-white text-white dark:text-black rounded-xl hover:-translate-y-[1px] hover:-translate-x-[1px] active:translate-y-[2px] active:translate-x-[2px] transition-all cursor-pointer z-50"
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X size={20} strokeWidth={2.5} />
                ) : (
                  <Menu size={20} strokeWidth={2.5} />
                )}
              </button>
            </div>

          </div>
        </nav>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden flex flex-col justify-between px-8 pt-36 pb-12 overflow-y-auto"
          >
            {/* Background Decorative Accent */}
            <div className="absolute top-1/4 -right-20 w-72 h-72 bg-[#80eb34]/10 rounded-full blur-3xl pointer-events-none" />

            {/* Links List */}
            <div className="flex flex-col gap-5 my-auto">
              <span className="font-mono text-xs uppercase tracking-widest text-[#5cba1d] dark:text-[#80eb34] font-semibold">
                Menu Navigation
              </span>

              {navLinks.map((link, idx) => {
                const isServices = link.name === "SERVICES";
                const isActive = pathname === link.href || (isServices && pathname.startsWith("/services"));
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -25 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.06 + 0.1, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`group flex items-center justify-between font-norwester text-3xl sm:text-4xl uppercase tracking-tight py-2 border-b border-neutral-200/60 dark:border-neutral-800/60 transition-colors ${
                        isActive
                          ? "text-[#5cba1d] dark:text-[#80eb34]"
                          : "text-black dark:text-white hover:text-[#5cba1d] dark:hover:text-[#80eb34]"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ArrowUpRight 
                        size={24} 
                        className={`transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${
                          isActive ? "text-[#5cba1d] dark:text-[#80eb34]" : "text-neutral-400 dark:text-neutral-600"
                        }`} 
                      />
                    </Link>

                    {isServices && (
                      <div className="flex flex-col pl-4 pt-2 pb-1 gap-2.5 border-l-2 border-[#80eb34]/40 mt-2 ml-1">
                        <div className="flex flex-col gap-1.5">
                          <span className="font-mono text-[10px] uppercase tracking-wider text-[#5cba1d] dark:text-[#80eb34] font-bold">
                            Web Development
                          </span>
                          <Link
                            href="/services#fullstack"
                            onClick={() => setMobileMenuOpen(false)}
                            className="font-norwester text-base tracking-wide text-neutral-700 dark:text-neutral-300 hover:text-[#5cba1d] dark:hover:text-[#80eb34] transition-colors flex items-center gap-2 pl-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#80eb34]" />
                            Full Stack Development
                          </Link>
                          <Link
                            href="/services#ui-enhancement"
                            onClick={() => setMobileMenuOpen(false)}
                            className="font-norwester text-base tracking-wide text-neutral-700 dark:text-neutral-300 hover:text-[#5cba1d] dark:hover:text-[#80eb34] transition-colors flex items-center gap-2 pl-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#80eb34]" />
                            UI Enhancement & Redesign
                          </Link>
                          <Link
                            href="/services#migration"
                            onClick={() => setMobileMenuOpen(false)}
                            className="font-norwester text-base tracking-wide text-neutral-700 dark:text-neutral-300 hover:text-[#5cba1d] dark:hover:text-[#80eb34] transition-colors flex items-center gap-2 pl-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#80eb34]" />
                            Migration & Modernization
                          </Link>
                        </div>

                        <div className="flex flex-col gap-1.5 pt-2 border-t border-neutral-200 dark:border-neutral-800">
                          <span className="font-mono text-[10px] uppercase tracking-wider text-[#5cba1d] dark:text-[#80eb34] font-bold">
                            AI & Automation
                          </span>
                          <Link
                            href="/services#marketing-automation"
                            onClick={() => setMobileMenuOpen(false)}
                            className="font-norwester text-base tracking-wide text-neutral-700 dark:text-neutral-300 hover:text-[#5cba1d] dark:hover:text-[#80eb34] transition-colors flex items-center gap-2 pl-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#80eb34]" />
                            Marketing Automation
                          </Link>
                          <Link
                            href="/services#crm-integration"
                            onClick={() => setMobileMenuOpen(false)}
                            className="font-norwester text-base tracking-wide text-neutral-700 dark:text-neutral-300 hover:text-[#5cba1d] dark:hover:text-[#80eb34] transition-colors flex items-center gap-2 pl-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#80eb34]" />
                            CRM Integration
                          </Link>
                          <Link
                            href="/services#sales-automation"
                            onClick={() => setMobileMenuOpen(false)}
                            className="font-norwester text-base tracking-wide text-neutral-700 dark:text-neutral-300 hover:text-[#5cba1d] dark:hover:text-[#80eb34] transition-colors flex items-center gap-2 pl-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#80eb34]" />
                            Sales Automation
                          </Link>
                        </div>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Drawer Footer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.4 }}
              className="flex flex-col gap-4 pt-8 border-t border-neutral-200 dark:border-neutral-800"
            >
              <div className="flex flex-col gap-1">
                <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
                  Direct Email
                </span>
                <a
                  href="mailto:abdullahbuilds786@gmail.com"
                  className="font-mono text-sm text-neutral-800 dark:text-neutral-200 hover:text-[#80eb34] transition-colors truncate"
                >
                  abdullahbuilds786@gmail.com
                </a>
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-neutral-400 dark:text-neutral-500 pt-2">
                <span>© {new Date().getFullYear()} ABDULLAH.DEV</span>
                <span className="text-[#80eb34] font-semibold">AVAILABLE FOR WORK</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

