"use client";

import React from "react";
import { PortfolioProvider, usePortfolio } from "../context/PortfolioContext";
import { GlobalBackground } from "./Background";
import { Navbar } from "./Navbar";
import { TerminalMode } from "./TerminalMode";

const PortfolioShellContent = ({ children }: { children: React.ReactNode }) => {
  const { isTerminalMode } = usePortfolio();

  return (
    <>
      <GlobalBackground />
      <Navbar />
      {isTerminalMode ? <TerminalMode /> : children}
    </>
  );
};

export const PortfolioShell = ({ children }: { children: React.ReactNode }) => {
  return (
    <PortfolioProvider>
      <PortfolioShellContent>{children}</PortfolioShellContent>
    </PortfolioProvider>
  );
};
