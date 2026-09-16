import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Web development, workflow automation, and AI integration services.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
