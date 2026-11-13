import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Projects } from "../../components/sections/Projects";
import { SITE_URL } from "../../data/portfolioData";

export const metadata: Metadata = {
  title: "Key Projects & Platforms",
  description:
    "Explore enterprise SaaS platforms, cybersecurity risk modeling architectures, dynamic survey engines, and production web applications built by Saad Mansuri.",
  alternates: {
    canonical: `${SITE_URL}/projects`,
  },
  openGraph: {
    title: "Key Projects & Platforms | Saad Mansuri",
    description:
      "Enterprise systems engineered for cybersecurity intelligence, risk modeling, dynamic survey workflows, and multi-tenant SaaS.",
    url: `${SITE_URL}/projects`,
  },
};

export default function ProjectsPage() {
  return (
    <main
      id="main-content"
      className="w-full max-w-4xl mx-auto px-4 sm:px-6 pt-20 sm:pt-24 pb-16 space-y-10 relative z-10"
    >
      {/* Full Projects Ledger */}
      <Projects showAllLink={false} />

      {/* Footer Navigation */}
      <footer className="pt-8 border-t border-black/5 dark:border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-zinc-600 dark:text-zinc-500 font-mono">
        <p>&copy; 2026 Saad Mansuri | Ahmedabad, India</p>
        <div className="flex items-center gap-4">
          <Link
            href="/#projects"
            className="text-zinc-700 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors inline-flex items-center gap-1"
          >
            <span>&larr; Back to Portfolio</span>
          </Link>
          <span className="text-zinc-300 dark:text-zinc-700">|</span>
          <a
            href="#main-content"
            className="text-zinc-700 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
          >
            Back to Top &uarr;
          </a>
        </div>
      </footer>
    </main>
  );
}
