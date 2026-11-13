"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  personalInfo,
  experiences,
  projects,
  skillCategories,
  education,
  certifications,
} from "../data/portfolioData";
import { usePortfolio } from "../context/PortfolioContext";
import { ExternalLink, Mail, Phone, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

interface TerminalLine {
  text?: string;
  type?: "info" | "error" | "success" | "command";
  component?: React.ReactNode;
}

const TERMINAL_THEMES: Record<string, { bg: string; text: string; prompt: string }> = {
  blackboard: {
    bg: "bg-[#0c1021]",
    text: "text-[#f8f8f8]",
    prompt: "text-[#8da6ce]",
  },
  matrix: {
    bg: "bg-[#050e05]",
    text: "text-[#22c55e]",
    prompt: "text-[#4ade80]",
  },
  onedark: {
    bg: "bg-[#1e1e1e]",
    text: "text-[#abb2bf]",
    prompt: "text-[#61afef]",
  },
  dracula: {
    bg: "bg-[#282a36]",
    text: "text-[#f8f8f2]",
    prompt: "text-[#bd93f9]",
  },
  cyberpunk: {
    bg: "bg-[#0b0c10]",
    text: "text-[#66fcf1]",
    prompt: "text-[#45a29e]",
  },
};

export const TerminalMode = () => {
  const { setTerminalMode } = usePortfolio();
  const [history, setHistory] = useState<TerminalLine[]>([]);
  const [input, setInput] = useState("");
  const [glow, setGlow] = useState(true);
  const [theme, setTheme] = useState<string>("matrix");
  const [cursorPos, setCursorPos] = useState(0);

  const [commandHistory, setCommandHistory] = useState<string[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("sm-terminal-history");
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch {
          return [];
        }
      }
    }
    return [];
  });
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);

  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const currentTheme = TERMINAL_THEMES[theme] || TERMINAL_THEMES.matrix;

  const pushLine = (line: TerminalLine) => setHistory((prev) => [...prev, line]);

  // Command execution logic
  const handleCommand = (rawCmd: string) => {
    const trimmed = rawCmd.trim();
    if (!trimmed) return;

    pushLine({ text: `saad@terminal:~$ ${trimmed}`, type: "command" });

    // Update history
    setCommandHistory((prev) => {
      const updated = [...prev, trimmed];
      if (typeof window !== "undefined") {
        localStorage.setItem("sm-terminal-history", JSON.stringify(updated));
      }
      return updated;
    });

    setInput("");
    setHistoryIndex(null);
    setCursorPos(0);

    const lower = trimmed.toLowerCase();

    if (lower === "clear") {
      setHistory([]);
      return;
    }

    if (lower === "gui" || lower === "exit") {
      pushLine({ text: "Switching back to GUI presentation mode...", type: "info" });
      setTimeout(() => setTerminalMode(false), 400);
      return;
    }

    if (lower === "glow on") {
      setGlow(true);
      pushLine({ text: "[Enabled] Atmospheric phosphor glow active", type: "success" });
      return;
    }

    if (lower === "glow off") {
      setGlow(false);
      pushLine({ text: "[Disabled] Atmospheric phosphor glow off", type: "info" });
      return;
    }

    if (lower.startsWith("themes")) {
      const parts = lower.split(" ");
      const action = parts[1];
      const target = parts[2];

      if (action === "list" || !action) {
        pushLine({
          component: (
            <div className="space-y-1 my-1">
              <p className="font-bold text-emerald-400">Available Themes:</p>
              <div className="flex flex-wrap gap-2 pt-1">
                {Object.keys(TERMINAL_THEMES).map((t) => (
                  <span
                    key={t}
                    onClick={() => {
                      setTheme(t);
                      pushLine({ text: `Theme set to: ${t}`, type: "success" });
                    }}
                    className={`px-2 py-0.5 rounded cursor-pointer border text-xs ${
                      theme === t
                        ? "border-emerald-400 bg-emerald-500/20 text-emerald-300 font-bold"
                        : "border-white/10 hover:border-white/30 text-zinc-400"
                    }`}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <p className="text-xs text-zinc-500 mt-1">Usage: themes set &lt;name&gt; (or click a badge)</p>
            </div>
          ),
          type: "info",
        });
        return;
      }

      if (action === "set" && target && TERMINAL_THEMES[target]) {
        setTheme(target);
        pushLine({ text: `Theme updated to '${target}'`, type: "success" });
        return;
      }

      pushLine({
        text: `Invalid theme. Type 'themes list' to see available options.`,
        type: "error",
      });
      return;
    }

    // Standard commands
    switch (lower) {
      case "whoami":
        pushLine({
          component: (
            <div className="space-y-2 my-1">
              <div className="text-sm font-bold text-emerald-400 flex items-center gap-2">
                <span>saad-mansuri (uid=1000, gid=1000, roles=[developer, architect, builder])</span>
              </div>
              <p className="text-xs leading-relaxed max-w-xl text-zinc-300">
                Welcome to Saad Mansuri&apos;s interactive developer shell. Here you can explore my 5+ years of enterprise SaaS architecture, cybersecurity risk management platforms, and technical skill graph.
              </p>
              <p className="text-xs text-zinc-400">
                Type <span className="text-emerald-400 font-bold">help</span> to view all commands, or <span className="text-emerald-400 font-bold">gui</span> to return to the web interface.
              </p>
            </div>
          ),
          type: "info",
        });
        break;

      case "about":
        pushLine({
          component: (
            <div className="space-y-3 my-2 border-l-2 border-emerald-500/50 pl-3">
              <div>
                <h3 className="text-base font-bold text-white">{personalInfo.name}</h3>
                <p className="text-xs text-emerald-400">{personalInfo.title} | {personalInfo.experienceYears}</p>
                <p className="text-xs text-zinc-400">{personalInfo.location} | Status: <span className="text-emerald-400 font-semibold">{personalInfo.status}</span></p>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed max-w-2xl">{personalInfo.bio}</p>
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono pt-1">
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline flex items-center gap-1.5">
                  <LinkedinIcon size={14} /> LinkedIn
                </a>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:underline flex items-center gap-1.5">
                  <GithubIcon size={14} /> GitHub
                </a>
                <a href={`mailto:${personalInfo.email}`} className="text-amber-300 hover:underline flex items-center gap-1.5">
                  <Mail size={13} /> {personalInfo.email}
                </a>
              </div>
            </div>
          ),
          type: "info",
        });
        break;

      case "experience":
        pushLine({
          component: (
            <div className="space-y-4 my-2">
              <p className="font-bold text-emerald-400 text-sm">Work Experience (5+ Years):</p>
              {experiences.map((exp) => (
                <div key={exp.company} className="border-l-2 border-emerald-500/40 pl-3 space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                    <span className="font-bold text-white text-sm">
                      {exp.role}{" "}
                      <span className="text-emerald-400 font-normal">
                        @{" "}
                        {exp.companyUrl ? (
                          <a
                            href={exp.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-emerald-300 hover:underline"
                          >
                            {exp.company}
                          </a>
                        ) : (
                          exp.company
                        )}
                      </span>
                    </span>
                    <span className="text-zinc-500 font-mono">{exp.period}</span>
                  </div>
                  <ul className="list-disc ml-4 space-y-1 text-xs text-zinc-300">
                    {exp.points.map((p, idx) => (
                      <li key={idx} className="leading-relaxed">{p}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ),
          type: "info",
        });
        break;

      case "projects":
        pushLine({
          component: (
            <div className="space-y-3 my-2">
              <p className="font-bold text-emerald-400 text-sm">Featured Enterprise Platforms & Systems:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-4xl">
                {projects.map((proj) => (
                  <div key={proj.name} className="p-3 rounded-lg border border-white/10 bg-white/[0.02] space-y-1.5 text-left">
                    <div className="flex items-center justify-between">
                      {proj.url ? (
                        <a
                          href={proj.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold text-white hover:text-blue-400 text-xs sm:text-sm inline-flex items-center gap-1 transition-colors"
                        >
                          <span>{proj.name}</span>
                          <ExternalLink size={11} className="text-zinc-500" />
                        </a>
                      ) : (
                        <h4 className="font-bold text-white text-xs sm:text-sm">{proj.name}</h4>
                      )}
                    </div>
                    <p className="text-[11px] text-zinc-400 leading-normal">{proj.description}</p>
                    {proj.links && proj.links.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-1 text-[10px]">
                        {proj.links.map((link) => (
                          <a
                            key={link.url}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:underline inline-flex items-center gap-0.5 font-mono"
                          >
                            <span>{link.label}</span>
                            <ExternalLink size={9} />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ),
          type: "info",
        });
        break;

      case "skills":
      case "stack":
        pushLine({
          component: (
            <div className="space-y-3 my-2">
              <p className="font-bold text-emerald-400 text-sm">Technical Capabilities & Tooling:</p>
              <div className="space-y-2">
                {skillCategories.map((cat) => (
                  <div key={cat.category} className="text-xs">
                    <span className="text-zinc-400 font-mono font-bold uppercase tracking-wider block sm:inline sm:w-44">
                      {cat.category}:{" "}
                    </span>
                    <span className="text-zinc-200">{cat.skills.join(", ")}</span>
                  </div>
                ))}
              </div>
            </div>
          ),
          type: "info",
        });
        break;

      case "education":
        pushLine({
          component: (
            <div className="space-y-2 my-2">
              <p className="font-bold text-emerald-400 text-sm">Academic Background:</p>
              {education.map((edu) => (
                <div key={edu.degree} className="border-l-2 border-white/10 pl-3 text-xs space-y-0.5">
                  <div className="font-bold text-white">{edu.degree}</div>
                  <div className="text-zinc-400">{edu.institution} ({edu.period}) | {edu.location}</div>
                </div>
              ))}
            </div>
          ),
          type: "info",
        });
        break;

      case "certifications":
      case "certs":
        pushLine({
          component: (
            <div className="space-y-2 my-2">
              <p className="font-bold text-emerald-400 text-sm">Certifications & Specialized Training:</p>
              <ul className="list-disc ml-4 space-y-1 text-xs text-zinc-300">
                {certifications.map((c) => (
                  <li key={c.title}>
                    <strong className="text-white">{c.title}</strong> - {c.issuer} ({c.topics})
                  </li>
                ))}
              </ul>
            </div>
          ),
          type: "info",
        });
        break;

      case "contact":
        pushLine({
          component: (
            <div className="space-y-2 my-2 border-l-2 border-emerald-500/50 pl-3 text-xs">
              <p className="font-bold text-emerald-400 text-sm">Direct Contact Channels:</p>
              <div className="space-y-1 text-zinc-300">
                <p>Email: <a href={`mailto:${personalInfo.email}`} className="text-white hover:underline">{personalInfo.email}</a></p>
                <p>Phone: <a href={`tel:${personalInfo.phone}`} className="text-white hover:underline">{personalInfo.phoneDisplay}</a></p>
                <p>LinkedIn: <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">{personalInfo.linkedin}</a></p>
                <p>GitHub: <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-zinc-200 hover:underline">{personalInfo.github}</a></p>
                <p>Base: <span className="text-zinc-200">{personalInfo.location}</span></p>
              </div>
            </div>
          ),
          type: "info",
        });
        break;

      case "help":
        pushLine({
          component: (
            <div className="space-y-2 my-2 text-xs">
              <p className="font-bold text-emerald-400">Available Commands:</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-1.5 font-mono">
                <div><span className="text-white font-bold">whoami</span> - Identity & summary</div>
                <div><span className="text-white font-bold">about</span> - Detailed bio</div>
                <div><span className="text-white font-bold">experience</span> - Work history & impact</div>
                <div><span className="text-white font-bold">projects</span> - Enterprise platforms</div>
                <div><span className="text-white font-bold">skills</span> - Tech stack breakdown</div>
                <div><span className="text-white font-bold">education</span> - Degrees & colleges</div>
                <div><span className="text-white font-bold">certs</span> - Certifications</div>
                <div><span className="text-white font-bold">contact</span> - Email, phone, socials</div>
                <div><span className="text-white font-bold">themes</span> - Switch terminal theme</div>
                <div><span className="text-white font-bold">glow on/off</span> - Toggle ambient glow</div>
                <div>
                  <span
                    onClick={() => setTerminalMode(false)}
                    className="text-blue-400 font-bold hover:underline cursor-pointer"
                  >
                    gui
                  </span>{" "}
                  - Switch back to visual site
                </div>
                <div><span className="text-white font-bold">clear</span> - Clear terminal window</div>
              </div>
            </div>
          ),
          type: "info",
        });
        break;

      default:
        pushLine({
          text: `'${trimmed}' is not recognized. Type 'help' to see all commands.`,
          type: "error",
        });
    }
  };

  const updateCursor = () => {
    if (inputRef.current) {
      setCursorPos(inputRef.current.selectionStart || 0);
    }
  };

  // Initial welcome command run
  const didMountRef = useRef(false);
  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      handleCommand("whoami");
    }
  }, []);

  // Scroll to bottom whenever history or input updates
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history, input]);

  const handleContainerClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div
      onClick={handleContainerClick}
      className={`terminal-shell relative h-dvh w-full flex flex-col pt-16 pb-6 px-4 md:px-12 font-mono overflow-hidden transition-colors duration-500 z-40 ${currentTheme.bg} ${currentTheme.text}`}
    >
      {/* Glow Effect */}
      {glow && (
        <div aria-hidden="true" className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute -inset-24 bg-green-500/10 blur-[100px] rounded-full" />
        </div>
      )}

      {/* Terminal Title Bar Sub-header */}
      <div className="z-10 flex items-center justify-between pb-3 mb-2 border-b border-white/10 text-xs">
        <div className="flex items-center gap-2">
          <Terminal size={14} className="text-emerald-400" />
          <span className="font-semibold text-zinc-300">saad@terminal-session-v2.0</span>
          <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-400 font-mono">
            active
          </span>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setTerminalMode(false);
            }}
            className="px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-white text-xs transition-colors cursor-pointer"
          >
            Switch to GUI
          </button>
        </div>
      </div>

      {/* Terminal Output Log Area */}
      <div
        ref={terminalRef}
        className="z-10 relative flex-1 overflow-y-auto whitespace-pre-wrap space-y-2 pr-2 scrollbar-thin"
      >
        {history.map((line, i) => (
          <div
            key={i}
            className={`transition-all ${
              line.type === "error"
                ? "text-red-400"
                : line.type === "success"
                ? "text-emerald-400"
                : line.type === "command"
                ? `${currentTheme.prompt} font-bold`
                : "text-zinc-300"
            }`}
          >
            {line.text}
            {line.component}
          </div>
        ))}

        {/* Input Line with Realistic Retro Block Cursor */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleCommand(input);
          }}
          className="flex items-center pt-2 pb-6"
        >
          <span className={`pr-2 shrink-0 ${currentTheme.prompt}`}>saad@terminal:~$</span>
          <div className="relative flex-1 min-h-[1.5rem] flex items-center">
            {/* Visual block cursor layer */}
            <div className="absolute inset-0 pointer-events-none flex items-center whitespace-pre text-sm">
              <span>{input.slice(0, cursorPos)}</span>
              <span
                className="bg-red-500 text-black animate-[pulse_1s_step-end_infinite] inline-block text-center font-bold"
                style={{ minWidth: "0.65em", lineHeight: "1.2" }}
              >
                {input.slice(cursorPos, cursorPos + 1) || " "}
              </span>
              <span>{input.slice(cursorPos + 1)}</span>
            </div>

            {/* Invisible real HTML input */}
            <input
              ref={inputRef}
              type="text"
              autoFocus
              spellCheck={false}
              autoComplete="off"
              className="absolute inset-0 w-full bg-transparent text-transparent caret-transparent focus:outline-none font-mono text-sm"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                setCursorPos(e.target.selectionStart || 0);
              }}
              onKeyUp={updateCursor}
              onClick={updateCursor}
              onKeyDown={(e) => {
                if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
                  setTimeout(updateCursor, 0);
                }
                if (e.key === "ArrowUp") {
                  e.preventDefault();
                  if (commandHistory.length) {
                    setHistoryIndex((i) => {
                      const newIndex =
                        i === null ? commandHistory.length - 1 : Math.max(i - 1, 0);
                      setInput(commandHistory[newIndex]);
                      setTimeout(() => {
                        if (inputRef.current) {
                          inputRef.current.selectionStart = commandHistory[newIndex].length;
                          setCursorPos(commandHistory[newIndex].length);
                        }
                      }, 0);
                      return newIndex;
                    });
                  }
                } else if (e.key === "ArrowDown") {
                  e.preventDefault();
                  if (commandHistory.length) {
                    setHistoryIndex((i) => {
                      if (i === null) return null;
                      if (i === commandHistory.length - 1) {
                        setInput("");
                        setCursorPos(0);
                        return null;
                      }
                      const newIndex = Math.min(i + 1, commandHistory.length - 1);
                      setInput(commandHistory[newIndex]);
                      setTimeout(() => {
                        if (inputRef.current) {
                          inputRef.current.selectionStart = commandHistory[newIndex].length;
                          setCursorPos(commandHistory[newIndex].length);
                        }
                      }, 0);
                      return newIndex;
                    });
                  }
                }
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
};
