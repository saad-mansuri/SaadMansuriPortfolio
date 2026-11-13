"use client";

import React, { useId, useState } from "react";

interface RainbowRevealTextProps {
  text: string;
  className?: string;
}

const RAINBOW_STOPS = [
  "#BC82F3", // Pastel Purple
  "#F5B9EA", // Soft Pink
  "#8D9FFF", // Periwinkle Blue
  "#AA6EEE", // Electric Violet
  "#FF6778", // Coral Rose
  "#FFBA71", // Warm Amber
  "#C686FF", // Lavender
];

export const RainbowRevealText = ({ text, className = "" }: RainbowRevealTextProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [cursorPos, setCursorPos] = useState({ cx: "50%", cy: "50%" });

  // Unique sanitized ID for SVG defs to avoid collisions
  const rawId = useId();
  const id = "rr-" + rawId.replace(/[^a-zA-Z0-9_-]/g, "");

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    if (!rect.width || !rect.height) return;

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setCursorPos({
      cx: `${Math.max(0, Math.min(100, x))}%`,
      cy: `${Math.max(0, Math.min(100, y))}%`,
    });
  };

  const textStyle: React.SVGProps<SVGTextElement> = {
    x: "50%",
    y: "50%",
    textAnchor: "middle",
    dominantBaseline: "central",
    style: {
      font: "inherit",
      letterSpacing: "inherit",
      fontWeight: "inherit",
    },
  };

  return (
    <span className={`relative inline-block align-baseline ${className}`}>
      {/* 1. Transparent Placeholder to accurately reserve layout space */}
      <span className="text-transparent select-none pointer-events-none" aria-hidden="true">
        {text}
      </span>

      {/* 2. Interactive SVG Overlay */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 h-full w-full overflow-visible select-none cursor-default"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
      >
        <defs>
          {/* Multi-stop Pastel Neon Linear Gradient */}
          <linearGradient id={`${id}-gradient`} x1="0%" y1="0%" x2="100%" y2="0%">
            {RAINBOW_STOPS.map((color, idx) => (
              <stop
                key={color}
                offset={`${(idx / (RAINBOW_STOPS.length - 1)) * 100}%`}
                stopColor={color}
              />
            ))}
          </linearGradient>

          {/* Gaussian Blur Glow Filter */}
          <filter id={`${id}-glow`} x="-20%" y="-50%" width="140%" height="200%">
            <feGaussianBlur stdDeviation="3" />
          </filter>

          {/* Idle Auto-Sweeping Mask */}
          <radialGradient
            id={`${id}-sweep-radial`}
            r="30%"
            cx="50%"
            cy="50%"
          >
            <stop offset="0%" stopColor="white" />
            <stop offset="100%" stopColor="black" />
            <animate
              attributeName="cx"
              values="-20%; 120%; -20%"
              dur="4.5s"
              repeatCount="indefinite"
            />
          </radialGradient>
          <mask id={`${id}-sweep-mask`} maskUnits="userSpaceOnUse" x="-50%" y="-50%" width="200%" height="200%">
            <rect x="-50%" y="-50%" width="200%" height="200%" fill={`url(#${id}-sweep-radial)`} />
          </mask>

          {/* Cursor Interactive Reveal Mask */}
          <radialGradient
            id={`${id}-reveal-radial`}
            r="26%"
            cx={cursorPos.cx}
            cy={cursorPos.cy}
            style={{ transition: "cx 40ms ease-out, cy 40ms ease-out" }}
          >
            <stop offset="0%" stopColor="white" />
            <stop offset="70%" stopColor="white" stopOpacity="0.8" />
            <stop offset="100%" stopColor="black" />
          </radialGradient>
          <mask id={`${id}-reveal-mask`} maskUnits="userSpaceOnUse" x="-50%" y="-50%" width="200%" height="200%">
            <rect x="-50%" y="-50%" width="200%" height="200%" fill={`url(#${id}-reveal-radial)`} />
          </mask>
        </defs>

        {/* Base Static Text (Dark/Light Responsive Fill) */}
        <text
          {...textStyle}
          fill="currentColor"
          stroke="none"
          className="text-zinc-900 dark:text-white"
        >
          {text}
        </text>

        {/* Idle Sweep Shimmer Group (fades out on hover) */}
        <g
          className="transition-opacity duration-300 pointer-events-none"
          style={{ opacity: isHovered ? 0 : 0.85 }}
        >
          {/* Outer Shimmer Glow */}
          <text
            {...textStyle}
            fill="none"
            stroke={`url(#${id}-gradient)`}
            strokeWidth={6}
            filter={`url(#${id}-glow)`}
            mask={`url(#${id}-sweep-mask)`}
          >
            {text}
          </text>
          {/* Inner Shimmer Stroke */}
          <text
            {...textStyle}
            fill="currentColor"
            stroke={`url(#${id}-gradient)`}
            strokeWidth={3}
            style={{ paintOrder: "stroke" }}
            mask={`url(#${id}-sweep-mask)`}
            className="text-zinc-900 dark:text-white"
          >
            {text}
          </text>
        </g>

        {/* Active Cursor Reveal Group (fades in on hover and follows cursor) */}
        <g
          className="transition-opacity duration-200 pointer-events-none"
          style={{ opacity: isHovered ? 1 : 0 }}
        >
          {/* Outer Neon Bloom Glow under cursor */}
          <text
            {...textStyle}
            fill="none"
            stroke={`url(#${id}-gradient)`}
            strokeWidth={8}
            filter={`url(#${id}-glow)`}
            mask={`url(#${id}-reveal-mask)`}
          >
            {text}
          </text>

          {/* Sharp High-Contrast Rainbow Stroke under cursor */}
          <text
            {...textStyle}
            fill="currentColor"
            stroke={`url(#${id}-gradient)`}
            strokeWidth={3.5}
            strokeLinejoin="round"
            style={{ paintOrder: "stroke" }}
            mask={`url(#${id}-reveal-mask)`}
            className="text-zinc-900 dark:text-white"
          >
            {text}
          </text>
        </g>
      </svg>
    </span>
  );
};
