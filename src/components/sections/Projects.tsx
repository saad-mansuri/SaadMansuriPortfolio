"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { projects, Project } from "../../data/portfolioData";
import { ArrowUpRight, ArrowRight, BookOpen, X, AlertCircle, CheckCircle2 } from "lucide-react";

interface ProjectsProps {
  limit?: number;
  showAllLink?: boolean;
}

export const Projects = ({ limit, showAllLink = true }: ProjectsProps) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  // Close modal on Escape key and lock body scroll
  useEffect(() => {
    if (!selectedProject) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="w-full text-left space-y-6 scroll-mt-28">
      {/* Header */}
      <div className="border-b border-black/5 dark:border-white/5 pb-4">
        <h2 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white tracking-tight">
          Key Projects & Platforms
        </h2>
        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1">
          Enterprise systems engineered for cybersecurity intelligence, risk modeling, and multi-tenant SaaS.
        </p>
      </div>

      {/* Projects Ledger */}
      <div className="divide-y divide-black/5 dark:divide-white/5">
        {displayedProjects.map((project) => (
          <article
            key={project.name}
            className="py-5 first:pt-2 last:pb-2 group transition-colors space-y-3"
          >
            {/* Title with Direct Live Website Link */}
            <div className="flex items-baseline gap-2 flex-wrap">
              {project.url ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-1.5 group/title"
                >
                  <span>{project.name}</span>
                  <ArrowUpRight
                    size={14}
                    className="text-zinc-400 dark:text-zinc-500 group-hover/title:text-blue-600 dark:group-hover/title:text-blue-400 group-hover/title:translate-x-0.5 group-hover/title:-translate-y-0.5 transition-all"
                  />
                </a>
              ) : (
                <span className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white inline-flex items-center gap-1.5">
                  <span>{project.name}</span>
                </span>
              )}
              <span className="text-zinc-300 dark:text-zinc-600 font-normal">|</span>
              <span className="text-xs text-zinc-600 dark:text-zinc-400 font-medium">
                {project.tagline}
              </span>
            </div>

            {/* Quick Action Strip: View Case Study & Live Links */}
            <div className="flex flex-wrap items-center gap-2 pt-0.5">
              {project.caseStudy && (
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-md bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-700 dark:bg-blue-500/10 dark:hover:bg-blue-500/20 dark:border-blue-500/30 dark:text-blue-400 dark:hover:text-blue-300 transition-all cursor-pointer font-medium"
                >
                  <BookOpen size={12} />
                  <span>View Case Study</span>
                </button>
              )}

              {project.links && project.links.length > 1 ? (
                project.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono px-2.5 py-1 rounded-md bg-black/[0.03] dark:bg-white/[0.04] hover:bg-black/[0.07] dark:hover:bg-white/[0.08] border border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-all group/link"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight
                      size={11}
                      className="text-zinc-400 dark:text-zinc-500 group-hover/link:text-black dark:group-hover/link:text-white group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
                    />
                  </a>
                ))
              ) : project.url ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono px-2.5 py-1 rounded-md bg-black/[0.03] dark:bg-white/[0.04] hover:bg-black/[0.07] dark:hover:bg-white/[0.08] border border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-all group/link"
                >
                  <span>Visit Website</span>
                  <ArrowUpRight
                    size={11}
                    className="text-zinc-400 dark:text-zinc-500 group-hover/link:text-black dark:group-hover/link:text-white group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
                  />
                </a>
              ) : null}
            </div>

            {/* Description (Purpose & Scope) */}
            <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-3xl font-normal">
              {project.description}
            </p>

            {/* Features & Functionality Highlights */}
            <ul className="space-y-1 text-xs text-zinc-600 dark:text-zinc-400 font-normal pl-4 list-disc marker:text-blue-600 dark:marker:text-blue-500">
              {project.highlights.map((h, i) => (
                <li key={i} className="leading-relaxed">{h}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      {/* View All Projects Action (When limited on Home Page) */}
      {showAllLink && limit && projects.length > limit && (
        <div className="pt-2 flex justify-start">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group"
          >
            <span>View All Projects</span>
            <ArrowRight
              size={13}
              className="text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      )}

      {/* Interactive Case Study Modal */}
      {selectedProject && selectedProject.caseStudy && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-title"
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 pt-20 pb-8 sm:p-6 sm:pt-24 sm:pb-10 bg-black/60 dark:bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="max-w-2xl w-full max-h-[calc(100vh-8rem)] overflow-y-auto rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#0a0a0c] text-zinc-900 dark:text-white p-5 sm:p-7 space-y-6 shadow-2xl relative scrollbar-thin mt-2 sm:mt-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-black/5 dark:border-white/5 pb-4">
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono text-blue-600 dark:text-blue-400 uppercase tracking-wider font-semibold">
                  <span>{selectedProject.caseStudy.client || selectedProject.name}</span>
                  {selectedProject.caseStudy.domain && (
                    <>
                      <span className="text-zinc-300 dark:text-zinc-600">|</span>
                      <span className="text-zinc-500 dark:text-zinc-400">{selectedProject.caseStudy.domain}</span>
                    </>
                  )}
                </div>
                <h3 id="case-study-title" className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white tracking-tight">
                  {selectedProject.name}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                  {selectedProject.tagline}
                </p>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="w-8 h-8 rounded-lg border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white flex items-center justify-center transition-all cursor-pointer shrink-0"
                aria-label="Close Case Study"
              >
                <X size={16} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="space-y-6 text-left">
              {/* Executive Overview */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-zinc-500 dark:text-zinc-400">
                  Executive Overview
                </h4>
                <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal">
                  {selectedProject.caseStudy.overview}
                </p>
              </div>

              {/* Challenges & Solutions */}
              {(selectedProject.caseStudy.challenges || selectedProject.caseStudy.solutions) && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {selectedProject.caseStudy.challenges && (
                    <div className="p-3.5 rounded-xl border border-amber-500/20 bg-amber-500/5 dark:bg-white/[0.02] dark:border-white/5 space-y-1.5">
                      <div className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
                        <AlertCircle size={13} />
                        <span>Core Challenge</span>
                      </div>
                      <p className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal">
                        {selectedProject.caseStudy.challenges}
                      </p>
                    </div>
                  )}

                  {selectedProject.caseStudy.solutions && (
                    <div className="p-3.5 rounded-xl border border-emerald-500/20 bg-emerald-500/5 dark:bg-white/[0.02] dark:border-white/5 space-y-1.5">
                      <div className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                        <CheckCircle2 size={13} />
                        <span>Architectural Solution</span>
                      </div>
                      <p className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal">
                        {selectedProject.caseStudy.solutions}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Key Features & Functional Modules */}
              {selectedProject.caseStudy.keyFeatures && selectedProject.caseStudy.keyFeatures.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-zinc-500 dark:text-zinc-400">
                    Key Features & Functional Modules
                  </h4>
                  <div className="space-y-2.5">
                    {selectedProject.caseStudy.keyFeatures.map((feat, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-lg border border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.02] space-y-1"
                      >
                        <h5 className="text-xs font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-500 shrink-0" />
                          <span>{feat.title}</span>
                        </h5>
                        <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed pl-3.5">
                          {feat.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Operational & User Impact */}
              {selectedProject.caseStudy.impact && selectedProject.caseStudy.impact.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-zinc-500 dark:text-zinc-400">
                    Operational & User Impact
                  </h4>
                  <ul className="space-y-1.5 text-xs text-zinc-700 dark:text-zinc-300 pl-4 list-disc marker:text-emerald-600 dark:marker:text-emerald-400 font-normal">
                    {selectedProject.caseStudy.impact.map((imp, idx) => (
                      <li key={idx} className="leading-relaxed">{imp}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="border-t border-black/5 dark:border-white/5 pt-4 flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white text-xs font-mono transition-all cursor-pointer"
              >
                Close
              </button>

              <div className="flex flex-wrap items-center gap-2">
                {selectedProject.links && selectedProject.links.length > 1 ? (
                  selectedProject.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-blue-50 dark:bg-blue-500/10 hover:bg-blue-100 dark:hover:bg-blue-500/20 border border-blue-200 dark:border-blue-500/30 text-blue-700 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-xs font-mono transition-all font-medium"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight size={13} />
                    </a>
                  ))
                ) : selectedProject.url ? (
                  <a
                    href={selectedProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium transition-all shadow-[0_0_15px_rgba(59,130,246,0.25)]"
                  >
                    <span>Visit Live Website</span>
                    <ArrowUpRight size={13} />
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
