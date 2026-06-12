"use client";

import { Reveal } from "./reveal";
import Image from "next/image";

export function Hero() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-ink text-cream overflow-hidden"
    >
      {/* Background illustration */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero_illustration.webp"
          alt="Classical Bharatanatyam dancer — Vedhya School"
          fill
          priority
          quality={90}
          className="object-cover object-top md:object-right opacity-60 md:opacity-100 select-none pointer-events-none"
          sizes="(max-width: 768px) 100vw, 60vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 md:via-ink/75 to-ink/30 md:to-transparent" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 w-full relative z-10 py-28 md:py-0">
        <div className="max-w-lg md:max-w-2xl space-y-5 md:space-y-8">

          <Reveal>
            <span className="text-[10px] font-bold tracking-[0.25em] text-saffron uppercase block font-sans">
              ROOTED IN TRADITION. ALIVE IN PRACTICE.
            </span>
          </Reveal>

          <Reveal delay={0.15}>
            <h1 className="font-serif text-[2rem] sm:text-4xl md:text-5xl lg:text-[3.8rem] leading-[1.15] text-cream font-light">
              A sanctuary where{" "}
              <br className="hidden sm:block" />
              lineage meets the{" "}
              <br />
              <span className="font-display italic text-gold font-normal">
                living pulse of expression.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="text-cream/80 text-xs sm:text-sm leading-relaxed font-light font-sans max-w-md">
              Discover the harmony of art and wellness. Through music, dance,
              movement, and mindful practice, Vedhya inspires growth, expression,
              and inner balance.
            </p>
          </Reveal>

          <Reveal delay={0.45}>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 md:gap-8">
              <button
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center gap-2 sm:gap-3 bg-gold hover:bg-gold/90 text-ink px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-[10px] font-bold tracking-[0.18em] uppercase transition-all duration-300 shadow-lg shadow-gold/10 hover:shadow-gold/20 cursor-pointer font-sans"
              >
                <span>Begin Your Journey</span>
                <span className="text-xs">➔</span>
              </button>

              <button
                onClick={() => scrollToSection("about")}
                className="inline-flex items-center gap-2 sm:gap-3 text-[10px] font-bold tracking-[0.18em] uppercase text-cream hover:text-gold transition-colors group cursor-pointer font-sans"
              >
                <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gold flex items-center justify-center bg-transparent group-hover:bg-gold/10 transition-all duration-300 shrink-0">
                  <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gold fill-current ml-0.5" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                <span>Watch Our Story</span>
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
