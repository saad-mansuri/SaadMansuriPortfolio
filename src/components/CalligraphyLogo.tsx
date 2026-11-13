"use client";

import React from "react";
import { usePortfolio } from "../context/PortfolioContext";

export const CalligraphyLogo = () => {
  const { isTerminalMode, isDark } = usePortfolio();
  const gradId = "sm-calligraphy-grad";

  return (
    <div className="flex items-center group cursor-pointer select-none py-1">
      <div className="relative w-11 h-8 sm:w-12 sm:h-9 flex items-center justify-center">
        {/* Soft Ambient Glow Behind Monogram */}
        <div
          className={`absolute -inset-1 blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300 rounded-full ${
            isTerminalMode
              ? "bg-green-500/30"
              : isDark
              ? "bg-blue-500/25"
              : "bg-blue-600/15"
          }`}
        />

        <svg
          viewBox="0 0 54 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative w-full h-full transition-transform duration-300 group-hover:scale-105"
        >
          <defs>
            <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop
                offset="0%"
                stopColor={
                  isTerminalMode
                    ? "#22c55e"
                    : isDark
                    ? "#38bdf8"
                    : "#2563eb"
                }
              />
              <stop
                offset="100%"
                stopColor={
                  isTerminalMode
                    ? "#4ade80"
                    : isDark
                    ? "#818cf8"
                    : "#1d4ed8"
                }
              />
            </linearGradient>
          </defs>

          {/* Stroke 1: Stylized Cursive 'S' */}
          <path
            d="M 18 10 C 13 6, 7 8, 7 13 C 7 19, 19 18, 19 24 C 19 28, 11 30, 6 26"
            stroke={`url(#${gradId})`}
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="sm-stroke-1"
          />

          {/* Stroke 2: Interconnected Cursive 'M' */}
          <path
            d="M 23 26 V 11 C 25 15, 29 22, 32 23 C 35 22, 39 15, 41 11 V 26"
            stroke={`url(#${gradId})`}
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="sm-stroke-2"
          />

          {/* Stroke 3: Dynamic Underline Swoosh */}
          <path
            d="M 6 32 C 18 30, 32 30, 48 33"
            stroke={`url(#${gradId})`}
            strokeWidth="1.6"
            strokeLinecap="round"
            className="sm-stroke-3"
          />

          {/* Calligraphy Accent Flourish Dot */}
          <circle
            cx="49"
            cy="11"
            r="1.7"
            fill={
              isTerminalMode
                ? "#22c55e"
                : isDark
                ? "#38bdf8"
                : "#2563eb"
            }
            className="transition-transform duration-300 group-hover:scale-125"
          />
        </svg>
      </div>
      <span className="ml-2 font-mono text-xs font-semibold text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-200 transition-colors hidden xs:inline">
        saad.mansuri
      </span>
    </div>
  );
};
