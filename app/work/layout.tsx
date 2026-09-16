import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description: "A selection of recent web apps, automation systems, and internal tools.",
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
