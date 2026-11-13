"use client";

import React from "react";
import { education, certifications } from "../../data/portfolioData";
import { GraduationCap, Award, ExternalLink } from "lucide-react";

export const EducationAndCerts = () => {
  return (
    <section id="education" className="w-full text-left space-y-8 scroll-mt-28">
      {/* Education Header */}
      <div className="space-y-4">
        <div className="border-b border-black/5 dark:border-white/5 pb-4">
          <h2 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white tracking-tight flex items-center gap-2">
            <GraduationCap size={22} className="text-blue-600 dark:text-blue-400" />
            <span>Education</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1">
            Formal computer science foundations and postgraduate degree.
          </p>
        </div>

        <div className="divide-y divide-black/5 dark:divide-white/5">
          {education.map((edu) => (
            <div key={edu.degree} className="py-4 first:pt-1 last:pb-1 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 group">
              <div>
                <h3 className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {edu.degree}
                </h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-0.5">{edu.institution} <span className="text-zinc-300 dark:text-zinc-600">|</span> {edu.location}</p>
              </div>
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-500">{edu.period}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications Header */}
      <div className="space-y-4 pt-2">
        <div className="border-b border-black/5 dark:border-white/5 pb-4">
          <h2 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white tracking-tight flex items-center gap-2">
            <Award size={20} className="text-emerald-600 dark:text-emerald-400" />
            <span>Certifications & Specialized Training</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1">
            Industry credentials in modern web layout, frontend libraries, and testing.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="p-3.5 rounded-xl border border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.02] hover:bg-black/[0.04] dark:hover:bg-white/[0.04] hover:border-black/10 dark:hover:border-white/10 transition-all space-y-1 group"
            >
              <div className="flex items-center justify-between">
                <h4 className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {cert.title}
                </h4>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/5 dark:bg-white/5 text-zinc-600 dark:text-zinc-400 font-medium">
                  {cert.issuer}
                </span>
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 font-mono">{cert.topics}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
