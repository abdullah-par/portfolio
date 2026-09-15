import Link from "next/link";

const footerLinks = [
  {
    heading: "What I Do",
    links: [
      { label: "Web Development", href: "/services#web" },
      { label: "Automation", href: "/services#automation" },
      { label: "AI Systems", href: "/services#ai" },
    ],
  },
  {
    heading: "Work",
    links: [
      { label: "Case Studies", href: "/work" },
      { label: "Projects", href: "/work#projects" },
      { label: "Open Source", href: "/work#open-source" },
    ],
  },
  {
    heading: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/abdullah-par",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "https://x.com/aabdullahdev",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/aabdullah.dev/?hl=en",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "Reddit",
    href: "https://www.reddit.com/user/jackgig/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="w-full transition-colors duration-500">

      {/* Upper band — slightly darker off-white / slightly lighter dark for contrast */}
      <div className="bg-[#f0efe9] dark:bg-[#1a1a18] border-t border-[#e2e0d8] dark:border-[#2a2a28]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-14">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-16">

            {/* Left — CTA + Contact */}
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="font-norwester text-5xl md:text-6xl text-[#1c1c1c] dark:text-[#ededed] leading-tight tracking-tighter">
                  Let’s{" "}
                  {/* Primary green accent on the keyword */}
                  <span className="text-[#80eb34]">Talk.</span>
                </h2>
                {/* Subtext uses a step-down muted tone */}
                <p className="mt-3 font-balgin text-[#6b6b62] dark:text-[#8a8a80] text-base max-w-sm">
                  Got a project in mind? I’d love to hear what you’re building.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                {/* Label — lightest text tier */}
                <p className="font-norwester text-xs tracking-widest uppercase text-[#9a9a90] dark:text-[#6a6a60] mb-1">
                  Contact Info
                </p>
                {/* Freelance status */}
                <div className="flex items-center gap-2.5 text-xs font-mono tracking-wider text-[#3a3a36] dark:text-[#c8c8be]">
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#80eb34] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#80eb34]"></span>
                  </span>
                  AVAILABLE FOR FREELANCE PROJECTS
                </div>
                {/* Email — mail icon, mid-tone text */}
                <a
                  href="mailto:abdullahbuilds786@gmail.com"
                  className="group flex items-center gap-2.5 text-sm font-mono text-[#3a3a36] dark:text-[#c8c8be] hover:text-[#5cba1d] dark:hover:text-[#80eb34] transition-colors duration-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-[#80eb34]">
                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                  abdullahbuilds786@gmail.com
                </a>
              </div>
            </div>

            {/* Right — Nav columns */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
              {footerLinks.map((col) => (
                <div key={col.heading} className="flex flex-col gap-3">
                  <p className="font-norwester text-base tracking-widest uppercase text-[#1c1c1c] dark:text-[#ededed] mb-1">
                    {col.heading}
                  </p>
                  {col.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="relative group text-sm font-balgin text-[#5a5a52] dark:text-[#a0a096] hover:text-[#1c1c1c] dark:hover:text-[#ededed] transition-colors duration-200 w-fit"
                    >
                      {link.label}
                      {/* Underline uses mid-green shade */}
                      <span className="absolute -bottom-0.5 left-0 w-full h-[1px] bg-[#b1f08a] dark:bg-[#5cba1d] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lower band — even darker/lighter to create a second tonal layer */}
      <div className="bg-[#e8e7e0] dark:bg-[#0e0e0d] border-t border-[#d8d7cf] dark:border-[#222220]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-[#ccccc4] dark:border-[#2e2e2c] text-[#6b6b62] dark:text-[#6a6a60] hover:border-[#80eb34] hover:text-[#5cba1d] dark:hover:text-[#80eb34] hover:bg-[#d4f9b8]/40 dark:hover:bg-[#3d8a10]/20 hover:-translate-y-0.5 transition-all duration-200"
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* Copyright — softest text tier */}
          <p className="text-xs font-mono text-[#9a9a90] dark:text-[#4a4a46] tracking-widest uppercase">
            © {new Date().getFullYear()} Abdullah.dev — All rights reserved
          </p>
        </div>
      </div>

    </footer>
  );
}
