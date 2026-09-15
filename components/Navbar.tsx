"use client";

import * as React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function Navbar() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

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
    <header className="absolute top-0 left-0 right-0 z-50 flex justify-center w-full pt-8 pb-4 border-b border-neutral-200/50 dark:border-neutral-800/50 bg-background/50 backdrop-blur-sm">
      <nav className="flex items-center justify-between w-full max-w-7xl px-6 md:px-12">
        
        {/* Logo */}
        <Link href="/" className="flex flex-col text-2xl md:text-3xl font-black leading-none tracking-tighter uppercase text-black dark:text-white">
          <span>ABDULLAH</span>
          <span>
            <span className="text-[#80eb34]">.</span>DEV
          </span>
        </Link>

        {/* Right side container */}
        <div className="flex items-center">
          
          {/* Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 mr-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="relative group font-norwester text-base lg:text-lg uppercase tracking-wide text-black hover:text-[#80eb34] dark:text-white dark:hover:text-[#80eb34] transition-colors"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-[#80eb34] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></span>
              </Link>
            ))}
          </div>

          {/* Theme Toggle Button */}
          <div className="relative">
            <div className="absolute inset-0 bg-[#80eb34] rounded-xl translate-x-[4px] translate-y-[4px] md:translate-x-[6px] md:translate-y-[6px]" />
            <button
              onClick={toggleTheme}
              className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-black dark:bg-white text-white dark:text-black rounded-xl hover:-translate-y-[1px] hover:-translate-x-[1px] active:translate-y-[2px] active:translate-x-[2px] transition-all"
              aria-label="Toggle theme"
            >
              {mounted ? (
                <div className="relative flex items-center justify-center w-5 h-5">
                  <Sun 
                    className={`absolute transition-all duration-500 ease-in-out ${resolvedTheme === 'dark' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}`} 
                    size={20} 
                    strokeWidth={2.5} 
                  />
                  <Moon 
                    className={`absolute transition-all duration-500 ease-in-out ${resolvedTheme === 'light' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-50'}`} 
                    size={20} 
                    strokeWidth={2.5} 
                  />
                </div>
              ) : (
                <div className="w-[20px] h-[20px]" />
              )}
            </button>
          </div>

        </div>
      </nav>
    </header>
  );
}
