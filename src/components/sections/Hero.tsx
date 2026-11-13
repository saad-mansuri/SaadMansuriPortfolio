"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../Icons";
import { RainbowRevealText } from "../RainbowRevealText";
import { personalInfo, BASE_PATH } from "../../data/portfolioData";

export const Hero = () => {
  const [imgSrc, setImgSrc] = useState(`${BASE_PATH}/images/saad-mansuri.webp`);
  return (
    <header className="w-full text-left pt-6 sm:pt-10 pb-4 relative z-10">
      <div className="flex flex-col-reverse md:flex-row md:items-center justify-between gap-8 md:gap-10">
        {/* Left Column: Identity & Bio */}
        <div className="flex-1 space-y-6">
          {/* Top Status & Location Pill */}
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-600 dark:text-emerald-400 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>{personalInfo.status}</span>
            </div>

            <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-black/5 dark:bg-black/50 border border-black/10 dark:border-white/10 text-zinc-700 dark:text-zinc-300">
              {personalInfo.location}
            </span>
          </div>

          {/* Main Headline & Identity with Fastfolio Rainbow Cursor Reveal Hover Effect */}
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-900 dark:text-white tracking-tight drop-shadow-sm">
              <RainbowRevealText text={personalInfo.name} />
            </h1>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-base sm:text-lg font-medium text-zinc-800 dark:text-zinc-200">
              <span className="text-blue-600 dark:text-blue-400 font-semibold drop-shadow-sm">{personalInfo.title}</span>
              <span className="text-zinc-400 dark:text-zinc-600 hidden sm:inline">|</span>
              <span className="text-zinc-600 dark:text-zinc-300 text-sm sm:text-base">5+ Years in Enterprise Cybersecurity SaaS</span>
            </div>
          </div>

          {/* High-Impact Summary with Enhanced Contrast & Sharp Typography */}
          <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-200 leading-relaxed max-w-2xl font-normal">
            {personalInfo.bio}
          </p>

          {/* Network Direct Links */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.03] hover:bg-black/[0.07] dark:hover:bg-white/[0.08] hover:border-black/20 dark:hover:border-white/20 text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-all text-xs font-mono group"
              title="LinkedIn Profile"
            >
              <LinkedinIcon size={14} className="text-blue-600 dark:text-blue-400" />
              <span>LinkedIn</span>
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.03] hover:bg-black/[0.07] dark:hover:bg-white/[0.08] hover:border-black/20 dark:hover:border-white/20 text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-all text-xs font-mono group"
              title="GitHub Profile"
            >
              <GithubIcon size={14} className="text-zinc-500 dark:text-zinc-400 group-hover:text-black dark:group-hover:text-white" />
              <span>GitHub</span>
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.03] hover:bg-black/[0.07] dark:hover:bg-white/[0.08] hover:border-black/20 dark:hover:border-white/20 text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-all text-xs font-mono group"
              title="Send Direct Email"
            >
              <Mail size={14} className="text-amber-500 dark:text-amber-400" />
              <span>Email</span>
            </a>
          </div>
        </div>

        {/* Right Column: Profile Image as a Clean Content Element */}
        <div className="shrink-0 flex justify-start md:justify-end">
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full overflow-hidden bg-zinc-800/20">
            <Image
              src={imgSrc}
              alt="Saad Mansuri - Senior Fullstack Developer"
              width={360}
              height={360}
              priority
              unoptimized
              onError={() => {
                setImgSrc((current) => {
                  if (current === `${BASE_PATH}/images/saad-mansuri.webp`) return `${BASE_PATH}/images/saad-mansuri.jpg`;
                  if (current === `${BASE_PATH}/images/saad-mansuri.jpg`) return `${BASE_PATH}/saad-mansuri.webp`;
                  if (current === `${BASE_PATH}/saad-mansuri.webp`) return `${BASE_PATH}/saad-mansuri.jpg`;
                  return current;
                });
              }}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
