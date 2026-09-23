import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const norwester = localFont({
  src: "./font/norwester.otf",
  variable: "--font-norwester",
});

const balgin = localFont({
  src: "./font/balgin-clean.otf",
  variable: "--font-balgin",
});

export const metadata: Metadata = {
  title: {
    default: "Abdullah.dev | Web Development, Automation & AI",
    template: "%s — Abdullah.dev",
  },
  description:
    "Abdullah Parvez is a software engineer building modern web products, workflow automations and practical AI-powered systems.",
  keywords: [
    "Abdullah Parvez",
    "Abdullah.dev",
    "Web Development",
    "Automation",
    "AI Integration",
    "Software Engineer",
  ],
  openGraph: {
    title: "Abdullah.dev — Build Better. Automate Smarter.",
    description:
      "Modern web products, workflow automation and practical AI systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${norwester.variable} ${balgin.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div className="theme-figures" aria-hidden="true">
            <span className="theme-figure theme-figure-left" />
            <span className="theme-figure theme-figure-center" />
            <span className="theme-figure theme-figure-right" />
          </div>
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
