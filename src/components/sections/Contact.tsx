"use client";

import React, { useState } from "react";
import { personalInfo } from "../../data/portfolioData";
import { ArrowUpRight, Copy, Check, Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../Icons";

export const Contact = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="w-full text-left space-y-8 pt-4 pb-12 scroll-mt-28">
      {/* Header */}
      <div className="space-y-2 border-b border-black/5 dark:border-white/5 pb-4">
        <h2 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white tracking-tight">
          Get in Touch
        </h2>
        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 max-w-xl">
          Available for opportunities in senior frontend, fullstack engineering, or enterprise SaaS architecture.
        </p>
      </div>

      {/* Direct Communication Strip */}
      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Email Card */}
          <div className="p-4 rounded-xl border border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.02] space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-600 dark:text-zinc-400 font-semibold flex items-center gap-1.5">
              <Mail size={13} className="text-blue-600 dark:text-blue-400" /> Direct Email
            </span>
            <div className="flex items-center justify-between gap-2">
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 font-mono transition-colors truncate"
              >
                {personalInfo.email}
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-800 dark:text-zinc-500 dark:hover:text-zinc-300 font-mono transition-colors cursor-pointer shrink-0"
                title="Copy email"
              >
                {copiedEmail ? (
                  <>
                    <Check size={12} className="text-emerald-600 dark:text-emerald-400" />
                    <span className="text-emerald-600 dark:text-emerald-400">copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={12} />
                    <span>copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Phone Card */}
          <div className="p-4 rounded-xl border border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.02] space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-600 dark:text-zinc-400 font-semibold flex items-center gap-1.5">
              <Phone size={13} className="text-emerald-600 dark:text-emerald-400" /> Direct Phone / WhatsApp
            </span>
            <div className="flex items-center justify-between gap-2">
              <a
                href={`tel:${personalInfo.phone}`}
                className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 font-mono transition-colors"
              >
                {personalInfo.phoneDisplay}
              </a>
              <button
                type="button"
                onClick={handleCopyPhone}
                className="inline-flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-800 dark:text-zinc-500 dark:hover:text-zinc-300 font-mono transition-colors cursor-pointer shrink-0"
                title="Copy phone"
              >
                {copiedPhone ? (
                  <>
                    <Check size={12} className="text-emerald-600 dark:text-emerald-400" />
                    <span className="text-emerald-600 dark:text-emerald-400">copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={12} />
                    <span>copy</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Network Channels Strip */}
        <div className="pt-4 border-t border-black/5 dark:border-white/5 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-zinc-600 dark:text-zinc-400">
          <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 font-semibold mr-1">
            Network
          </span>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors"
          >
            <LinkedinIcon size={14} className="text-blue-600 dark:text-blue-400" />
            <span>LinkedIn</span>
            <ArrowUpRight size={11} className="text-zinc-400 dark:text-zinc-600" />
          </a>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors"
          >
            <GithubIcon size={14} className="text-zinc-500 dark:text-zinc-400" />
            <span>GitHub</span>
            <ArrowUpRight size={11} className="text-zinc-400 dark:text-zinc-600" />
          </a>
        </div>
      </div>

      {/* Editorial Colophon / Footer */}
      <footer className="pt-8 border-t border-black/5 dark:border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-zinc-600 dark:text-zinc-500 font-mono">
        <p>&copy; 2026 Saad Mansuri | Ahmedabad, India</p>
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="hover:text-zinc-900 dark:hover:text-zinc-300 transition-colors cursor-pointer"
          >
            Back to Top &uarr;
          </button>
        </div>
      </footer>
    </section>
  );
};
