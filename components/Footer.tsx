import Link from "next/link";

const footerLinks = [
  {
    heading: "What I Do",
    links: [
      { label: "Web Development", href: "/services#web-development" },
      { label: "Automation", href: "/services#automation" },
      { label: "AI Systems", href: "/services#ai-integration" },
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

export const socialLinks = [

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
    <footer className="w-full bg-[#101110] text-white transition-colors duration-500 dark:bg-[#080908]">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr] lg:gap-24">
          <div className="flex flex-col items-start">
            <h2 className="max-w-xl font-norwester text-5xl uppercase leading-[0.88] tracking-[0.01em] text-white sm:text-7xl md:text-8xl">
              Let&apos;s <span className="text-[#80eb34]">talk.</span>
            </h2>
            <p className="mt-7 max-w-md font-balgin text-base leading-[1.65] text-white/60 md:text-lg">
              Have a product, process, or idea that needs a better system? Tell me what you are building.
            </p>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=abdullahbuilds786%40gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-9 flex max-w-full items-center gap-3 border-b border-white/25 pb-3 font-mono text-sm tracking-[0.03em] text-white transition-colors hover:border-[#80eb34] hover:text-[#80eb34] md:text-base"
            >
              <span className="truncate">abdullahbuilds786@gmail.com</span>
              <span className="text-[#80eb34] transition-transform group-hover:translate-x-1">-&gt;</span>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:pt-3">
            {footerLinks.map((col) => (
              <div key={col.heading} className="flex flex-col gap-4">
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">{col.heading}</p>
                {col.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="w-fit font-balgin text-[15px] leading-tight text-white/70 transition-colors hover:text-[#80eb34]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
            <div className="col-span-2 flex flex-col gap-4 sm:col-span-3">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">Find me online</p>
              <div className="flex items-center gap-3">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/60 transition-all duration-200 hover:-translate-y-1 hover:border-[#80eb34] hover:bg-[#80eb34] hover:text-black"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 border-t border-white/15 pt-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <p className="font-norwester text-3xl tracking-[0.03em] text-white/90 md:text-5xl">ABDULLAH<span className="text-[#80eb34]">.DEV</span></p>
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-white/35">© {new Date().getFullYear()} / Built with intent</p>
          </div>
        </div>
      </div>

    </footer>
  );
}
