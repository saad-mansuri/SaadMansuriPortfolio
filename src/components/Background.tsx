"use client";

import React from "react";
import { usePortfolio } from "../context/PortfolioContext";

export const GlobalBackground = () => {
  const { isDark } = usePortfolio();

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-0 pointer-events-none overflow-hidden transition-colors duration-500 ${
        isDark ? "bg-[#050505]" : "bg-[#fafafa]"
      }`}
    >
      {/* Subtle Dot Matrix Pattern Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: isDark
            ? "radial-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px)"
            : "radial-gradient(rgba(0, 0, 0, 0.07) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Subtle Ambient Radial Gradients */}
      <div
        className={`absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] blur-[120px] rounded-full pointer-events-none transition-opacity duration-700 ${
          isDark
            ? "bg-gradient-to-b from-blue-600/12 via-sky-500/5 to-transparent opacity-80"
            : "bg-gradient-to-b from-blue-500/10 via-sky-400/5 to-transparent opacity-50"
        }`}
      />

      {/* Noise Texture Overlay using Data URI */}
      <div
        className={`absolute inset-0 pointer-events-none ${
          isDark ? "opacity-[0.02] mix-blend-overlay" : "opacity-[0.018] mix-blend-multiply"
        }`}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};
