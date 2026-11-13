import React from "react";
import { Hero } from "../components/sections/Hero";
import { Experience } from "../components/sections/Experience";
import { Projects } from "../components/sections/Projects";
import { Skills } from "../components/sections/Skills";
import { EducationAndCerts } from "../components/sections/EducationAndCerts";
import { Contact } from "../components/sections/Contact";

export default function Home() {
  return (
    <main
      id="main-content"
      className="w-full max-w-4xl mx-auto px-4 sm:px-6 pt-16 sm:pt-20 pb-12 sm:pb-16 space-y-16 sm:space-y-24 relative z-10"
    >
      <section id="about" className="scroll-mt-28 relative">
        <div id="home" className="absolute -top-28" />
        <Hero />
      </section>

      <Experience />

      <Projects limit={5} />

      <Skills />

      <EducationAndCerts />

      <Contact />
    </main>
  );
}
