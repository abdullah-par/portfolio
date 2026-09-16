import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Abdullah Parvez, a software engineer specializing in web development, automation, and AI.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
