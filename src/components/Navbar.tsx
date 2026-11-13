"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import Link from "next/link";
import { Terminal, Sun, Moon, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { usePortfolio } from "../context/PortfolioContext";
import { CalligraphyLogo } from "./CalligraphyLogo";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Stack", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Connect", href: "#contact" },
];

export const Navbar = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const { isDark, isTerminalMode, toggleTheme, toggleTerminal } = usePortfolio();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>(isHomePage ? "about" : "projects");

  const navContainerRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({});
  const [indicatorStyle, setIndicatorStyle] = useState<{
    left: number;
    width: number;
    opacity: number;
  }>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const activeSectionKey = isHomePage ? activeSection : "projects";

  const updateIndicator = useCallback(() => {
    const activeEl = linkRefs.current[activeSectionKey];
    const container = navContainerRef.current;
    if (activeEl && container) {
      const activeRect = activeEl.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      const paddingInset = 8;
      const left = activeRect.left - containerRect.left + paddingInset;
      const width = Math.max(activeRect.width - paddingInset * 2, 16);
      setIndicatorStyle({
        left,
        width,
        opacity: 1,
      });
    }
  }, [activeSectionKey]);

  useEffect(() => {
    const frame = requestAnimationFrame(updateIndicator);
    return () => cancelAnimationFrame(frame);
  }, [updateIndicator]);

  useEffect(() => {
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [updateIndicator]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (!isHomePage) {
        setActiveSection("projects");
        return;
      }

      // Section IDs mapped to navigation
      const sectionIds = ["about", "experience", "projects", "skills", "education", "contact"];

      // If scrolled near page bottom, activate the contact section
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100) {
        setActiveSection("contact");
        return;
      }

      // Check sections from bottom to top
      const scrollPosition = window.scrollY + 180;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            return;
          }
        }
      }

      setActiveSection("about");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    setMobileMenuOpen(false);

    if (isHomePage) {
      e.preventDefault();
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", `#${sectionId}`);
        setActiveSection(sectionId);
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isTerminalMode
          ? "bg-black text-green-400 border-b border-green-500/30 py-2"
          : scrolled
          ? isDark
            ? "bg-[#050505]/85 backdrop-blur-md border-b border-white/[0.06] py-2 sm:py-2.5"
            : "bg-white/85 backdrop-blur-md border-b border-black/[0.06] py-2 sm:py-2.5"
          : "bg-transparent py-3 sm:py-4"
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 flex items-center justify-between">
        {/* Monogram Logo */}
        <Link
          href="/"
          onClick={(e) => {
            if (isTerminalMode) {
              e.preventDefault();
            } else if (isHomePage) {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              window.history.pushState(null, "", "#about");
              setActiveSection("about");
            }
          }}
          className="flex items-center"
        >
          <CalligraphyLogo />
        </Link>

        {/* Desktop Nav Links with Smooth Sliding Indicator */}
        {!isTerminalMode && (
          <div
            ref={navContainerRef}
            className="hidden md:flex items-center gap-1 relative py-1"
          >
            {/* Smooth Sliding Bottom Activation Line */}
            <span
              className="absolute bottom-0 h-[2.5px] bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.7)] pointer-events-none transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)]"
              style={{
                transform: `translateX(${indicatorStyle.left}px)`,
                width: `${indicatorStyle.width}px`,
                opacity: indicatorStyle.opacity,
              }}
            />

            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSectionKey === sectionId;
              const targetHref = isHomePage ? link.href : `/${link.href}`;
              return (
                <Link
                  key={link.name}
                  ref={(el) => {
                    linkRefs.current[sectionId] = el;
                  }}
                  href={targetHref}
                  onClick={(e) => handleNavClick(e, sectionId)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors duration-200 ${
                    isActive
                      ? "text-zinc-900 dark:text-white font-bold"
                      : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5"
                  }`}
                >
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </div>
        )}

        {/* Right Controls */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle Button with Circular Reveal */}
          <button
            type="button"
            onClick={toggleTheme}
            className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-all cursor-pointer"
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun size={15} className="text-amber-300" />
            ) : (
              <Moon size={15} className="text-blue-500" />
            )}
          </button>

          {/* Terminal Toggle Button */}
          <button
            type="button"
            onClick={toggleTerminal}
            className={`w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-xl border transition-all duration-300 cursor-pointer ${
              isTerminalMode
                ? "border-green-500/60 bg-green-500/20 text-green-400 shadow-[0_0_12px_rgba(34,197,94,0.3)]"
                : "border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:border-black/20 dark:hover:border-white/20"
            }`}
            title={isTerminalMode ? "Exit Terminal (Back to GUI)" : "Open Interactive Terminal (Shell Mode)"}
            aria-label="Toggle Terminal"
          >
            <Terminal size={15} />
          </button>

          {/* Mobile Menu Toggle */}
          {!isTerminalMode && (
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-8 h-8 flex items-center justify-center rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-all cursor-pointer"
              title="Toggle Menu"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && !isTerminalMode && (
        <div className="md:hidden max-w-4xl mx-auto px-4 mt-2">
          <div className="p-2.5 rounded-2xl border border-black/10 dark:border-white/10 bg-white/95 dark:bg-black/95 backdrop-blur-2xl shadow-2xl flex flex-col gap-0.5">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSectionKey === sectionId;
              const targetHref = isHomePage ? link.href : `/${link.href}`;
              return (
                <Link
                  key={link.name}
                  href={targetHref}
                  onClick={(e) => handleNavClick(e, sectionId)}
                  className={`px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all flex items-center justify-between ${
                    isActive
                      ? "text-zinc-900 dark:text-white bg-black/5 dark:bg-white/10 font-bold border-l-2 border-blue-500 pl-3"
                      : "text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5"
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};
