import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Projects | Saad Mansuri - Senior Fullstack Developer",
  description:
    "Complete portfolio of enterprise applications, SaaS platforms, and digital web portals engineered by Saad Mansuri.",
};

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
