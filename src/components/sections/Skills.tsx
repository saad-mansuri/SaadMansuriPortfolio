"use client";

import React from "react";
import { skillCategories } from "../../data/portfolioData";

export const Skills = () => {
  return (
    <section id="skills" className="w-full text-left space-y-6 scroll-mt-28">
      {/* Header */}
      <div className="border-b border-black/5 dark:border-white/5 pb-4">
        <h2 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white tracking-tight">
          Technical Stack & Capabilities
        </h2>
        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1">
          Core toolchain, state architectures, and engineering specializations refined over 5+ years of SaaS development.
        </p>
      </div>

      {/* Domain Ledger */}
      <div className="divide-y divide-black/5 dark:divide-white/5">
        {skillCategories.map((group) => (
          <div
            key={group.category}
            className="py-4 first:pt-2 last:pb-2 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8 group"
          >
            {/* Domain Label */}
            <div className="w-44 shrink-0 font-mono text-xs font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {group.category}
            </div>

            {/* Technologies Flow */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 flex-1">
              {group.skills.map((skill) => (
                <div
                  key={skill}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/[0.03] dark:bg-white/[0.03] hover:bg-black/[0.07] dark:hover:bg-white/[0.08] border border-black/5 dark:border-white/5 hover:border-black/15 dark:hover:border-white/20 transition-all cursor-default text-xs text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white font-mono"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600/70 dark:bg-blue-500/60" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
