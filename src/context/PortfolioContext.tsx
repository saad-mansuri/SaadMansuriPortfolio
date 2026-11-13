"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

interface PortfolioContextType {
  isDark: boolean;
  isTerminalMode: boolean;
  toggleTheme: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  setTerminalMode: (val: boolean) => void;
  toggleTerminal: () => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const PortfolioProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("sm-theme");
      if (savedTheme) return savedTheme === "dark";
      return !document.documentElement.classList.contains("light");
    }
    return true;
  });

  const [isTerminalMode, setIsTerminalMode] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("sm-terminal-mode") === "true";
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }, [isDark]);

  const toggleTheme = (e?: React.MouseEvent<HTMLButtonElement>) => {
    const nextDark = !isDark;
    const applyThemeChange = () => {
      setIsDark(nextDark);
      localStorage.setItem("sm-theme", nextDark ? "dark" : "light");
      if (nextDark) {
        document.documentElement.classList.add("dark");
        document.documentElement.classList.remove("light");
      } else {
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.add("light");
      }
    };

    const doc = document as Document & {
      startViewTransition?: (updateCallback: () => void) => { ready?: Promise<void> };
    };

    const isViewTransitionSupported =
      typeof document !== "undefined" &&
      typeof doc.startViewTransition === "function" &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!isViewTransitionSupported || !e || !doc.startViewTransition) {
      applyThemeChange();
      return;
    }

    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = doc.startViewTransition(() => {
      applyThemeChange();
    });

    transition.ready?.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ];

      document.documentElement.animate(
        {
          clipPath: clipPath,
        },
        {
          duration: 650,
          easing: "cubic-bezier(0.4, 0, 0.2, 1)",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    });
  };

  const setTerminalMode = (val: boolean) => {
    setIsTerminalMode(val);
    localStorage.setItem("sm-terminal-mode", String(val));
  };

  const toggleTerminal = () => {
    setTerminalMode(!isTerminalMode);
  };

  return (
    <PortfolioContext.Provider
      value={{
        isDark,
        isTerminalMode,
        toggleTheme,
        setTerminalMode,
        toggleTerminal,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error("usePortfolio must be used within a PortfolioProvider");
  }
  return context;
};
