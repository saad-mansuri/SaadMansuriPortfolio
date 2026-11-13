"use client";

import React from "react";
import { experiences } from "../../data/portfolioData";
import { Calendar, MapPin, ArrowUpRight } from "lucide-react";

export const Experience = () => {
  return (
    <section id="experience" className="w-full text-left space-y-6 scroll-mt-28">
      {/* Header */}
      <div className="border-b border-black/5 dark:border-white/5 pb-4">
        <h2 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white tracking-tight">
          Work Experience
        </h2>
        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1">
          5+ years building and scaling enterprise platforms, design systems, and cloud-connected dashboards.
        </p>
      </div>

      {/* Experience Ledger */}
      <div className="divide-y divide-black/5 dark:divide-white/5">
        {experiences.map((exp) => (
          <article key={exp.company} className="py-6 first:pt-2 last:pb-2 space-y-4 group">
            {/* Top Info Bar */}
            <div className="space-y-1">
              <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white">
                <span>{exp.role}</span> <span className="text-zinc-500 font-normal">at</span>{" "}
                {exp.companyUrl ? (
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-900 dark:text-zinc-200 hover:text-blue-600 dark:hover:text-blue-400 underline decoration-black/20 dark:decoration-white/20 hover:decoration-blue-600 dark:hover:decoration-blue-400 underline-offset-4 transition-colors inline-flex items-center gap-1 group/company font-bold"
                  >
                    <span>{exp.company}</span>
                    <ArrowUpRight
                      size={14}
                      className="text-zinc-400 dark:text-zinc-500 group-hover/company:text-blue-600 dark:group-hover/company:text-blue-400 group-hover/company:translate-x-0.5 group-hover/company:-translate-y-0.5 transition-transform"
                    />
                  </a>
                ) : (
                  <span className="text-zinc-900 dark:text-zinc-200">{exp.company}</span>
                )}
              </h3>
              <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-600 dark:text-zinc-500 font-mono">
                <span className="flex items-center gap-1">
                  <MapPin size={12} className="text-zinc-400 dark:text-zinc-600" />
                  {exp.location}
                </span>
                <span className="text-zinc-300 dark:text-zinc-600">|</span>
                <span className="flex items-center gap-1 text-zinc-700 dark:text-zinc-400 font-medium">
                  <Calendar size={12} className="text-zinc-400 dark:text-zinc-600" />
                  {exp.period}
                </span>
              </div>
            </div>

            {/* Bullets */}
            <ul className="space-y-2 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal">
              {exp.points.map((pt, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-500 mt-2 shrink-0 group-hover:bg-blue-500 transition-colors" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};
