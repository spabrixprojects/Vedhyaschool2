"use client";

import { useState, useEffect } from "react";
import { Nav } from "../components/nav";
import { Hero } from "../components/hero";
import { About } from "../components/about";
import { Programs } from "../components/programs";
import { Faculty } from "../components/faculty";
import { Contact } from "../components/contact";
import { Footer } from "../components/footer";

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "programs", label: "Programs" },
  { id: "staff", label: "Staffs" },
  { id: "contact", label: "Contact" },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = ["home", "about", "programs", "staff", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -55% 0px", // triggers when section is in active view area
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-cream text-maroon relative">
      <Nav activeSection={activeSection} />
      
      {/* Fixed Right-Side Indicator */}
      <div className="fixed right-6 md:right-12 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-4 z-40 font-sans">
        <span className="text-[11px] font-bold text-gold tracking-widest leading-none mb-1 select-none">
          {activeSection === "home" ? "01" :
           activeSection === "about" ? "02" :
           activeSection === "programs" ? "03" :
           activeSection === "staff" ? "04" : "05"}
        </span>
        <div className="flex flex-col gap-3.5">
          {NAV.map((n) => {
            const isActive = activeSection === n.id;
            return (
              <a
                key={n.id}
                href={`#${n.id}`}
                className={`w-2.5 h-2.5 rounded-full border transition-all duration-300 relative group flex items-center justify-center ${
                  isActive ? "bg-gold border-gold scale-110" : "border-gold/40 hover:border-gold"
                }`}
                aria-label={`Go to ${n.label}`}
              >
                {/* Tooltip on hover */}
                <span className="absolute right-6 px-2 py-1 rounded bg-ink/90 border border-white/10 text-[9px] font-semibold uppercase tracking-wider text-cream opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 shadow-md whitespace-nowrap">
                  {n.label}
                </span>
              </a>
            );
          })}
        </div>
      </div>

      <main>
        <Hero />
        <About />
        <Programs />
        <Faculty />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
