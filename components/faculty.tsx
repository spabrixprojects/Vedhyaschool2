"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect, Suspense } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { STAFF } from "../data/vedhya";

type StaffMember = typeof STAFF[number];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
}

function FacultyCard({ s, i }: { s: StaffMember; i: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay: (i % 6) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative bg-white border border-maroon/5 rounded-2xl overflow-hidden flex flex-col shadow-md hover:shadow-lg transition-all duration-300 h-full font-sans text-maroon"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-maroon to-ink">
        {/* Faculty Image */}
        <div className="absolute inset-0">
          <Image
            src={s.image}
            alt={s.name}
            fill
            className="w-full h-full object-cover object-top"
            sizes="320px"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent pointer-events-none" />
        {/* Pillar tag */}
        <div className="absolute top-4 left-4 bg-ink/75 backdrop-blur-sm text-[9px] font-bold tracking-wider uppercase text-gold px-2.5 py-1 rounded-full z-20">
          {s.pillar}
        </div>

        {/* Bio overlay */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
              className="absolute inset-0 bg-ink/80 backdrop-blur-md border border-white/10 p-6 flex flex-col justify-start text-cream overflow-y-auto scrollbar-none z-10"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-[9px] font-bold tracking-[0.15em] text-gold uppercase">
                  {s.role}
                </span>
                <button
                  onClick={() => setOpen(false)}
                  className="text-cream/60 hover:text-cream text-sm transition-colors cursor-pointer font-sans"
                  aria-label="Close bio"
                >
                  ✕
                </button>
              </div>
              <p className="text-xs text-cream/90 leading-relaxed font-sans">{s.bio}</p>

              {s.credentials && s.credentials.length > 0 && (
                <div className="mt-4 pt-4 border-t border-white/10 space-y-1.5">
                  <div className="text-[10px] font-bold tracking-wider text-gold uppercase">Credentials</div>
                  {s.credentials.map((c, idx) => (
                    <div key={idx} className="flex gap-2 items-start text-[10px] text-cream/70 leading-normal">
                      <span className="text-gold flex-shrink-0 mt-1">•</span>
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
              )}

              {s.videoUrl && (
                <div className="mt-5 pt-4 border-t border-white/10">
                  <div className="text-[10px] font-bold tracking-wider text-gold uppercase mb-3">Featured Video</div>
                  <div className="relative aspect-video rounded-lg overflow-hidden border border-white/10 shadow-lg">
                    <iframe
                      src={s.videoUrl}
                      title={`${s.name} Video`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between bg-white relative">
        <div>
          <h4 className="font-serif text-xl font-semibold text-maroon leading-snug">{s.name}</h4>
          <p className="text-[10px] font-bold tracking-[0.15em] text-saffron uppercase mt-1">
            {s.role}
          </p>
        </div>

        <div className="flex justify-between items-center mt-4 pt-4 border-t border-maroon/5">
          <button
            onClick={() => setOpen(!open)}
            className="text-[10px] font-bold tracking-wider uppercase text-gold hover:text-maroon transition-colors cursor-pointer"
          >
            {open ? "Close Bio" : "View Bio"}
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="w-8 h-8 rounded-full border border-maroon/10 flex items-center justify-center text-maroon hover:bg-gold hover:text-ink hover:border-gold transition-all duration-300 cursor-pointer"
            aria-label={open ? "Close bio" : "View bio"}
          >
            <span className={`text-lg font-light leading-none transform transition-transform duration-300 ${open ? "rotate-45" : ""}`}>
              +
            </span>
          </button>
        </div>
      </div>
    </motion.article>
  );
}

function FilterTracker({ setFilter }: { setFilter: (f: string) => void }) {
  const searchParams = useSearchParams();

  useEffect(() => {
    const f = searchParams.get("filter");
    if (f && ["Dance", "Music", "Wellness", "All"].includes(f)) {
      setFilter(f);
    }
  }, [searchParams, setFilter]);

  return null;
}

export function Faculty({ isHeaderH1 = false }: { isHeaderH1?: boolean }) {
  const HeadingTag = isHeaderH1 ? "h1" : "h2";
  const sliderRef = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState("All");

  const scrollLeft = () => {
    if (sliderRef.current) sliderRef.current.scrollBy({ left: -340, behavior: "smooth" });
  };

  const scrollRight = () => {
    if (sliderRef.current) sliderRef.current.scrollBy({ left: 340, behavior: "smooth" });
  };

  const filteredStaff = filter === "All" ? STAFF : STAFF.filter((s) => s.pillar === filter);

  return (
    <section id="staff" className="relative py-20 md:py-32 bg-cream text-maroon overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 relative">
        <Suspense fallback={null}>
          <FilterTracker setFilter={setFilter} />
        </Suspense>

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8 md:mb-12">
          <div className="space-y-3 sm:space-y-4">
            <span className="text-[10px] font-bold tracking-[0.25em] text-saffron uppercase block font-sans">
              OUR FACULTY
            </span>
            <HeadingTag className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-maroon">
              Guides who inspire. Artists who{" "}
              <span className="font-display italic text-saffron">elevate.</span>
            </HeadingTag>
          </div>

          <div className="flex gap-3">
            <button
              onClick={scrollLeft}
              className="w-10 h-10 rounded-full border border-maroon/10 flex items-center justify-center hover:bg-gold hover:text-ink hover:border-gold transition-all text-maroon cursor-pointer"
              aria-label="Scroll left"
            >
              <span>←</span>
            </button>
            <button
              onClick={scrollRight}
              className="w-10 h-10 rounded-full border border-maroon/10 flex items-center justify-center hover:bg-gold hover:text-ink hover:border-gold transition-all text-maroon cursor-pointer"
              aria-label="Scroll right"
            >
              <span>→</span>
            </button>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-2 mb-8 md:mb-12">
          {["All", "Dance", "Music", "Wellness"].map((f) => (
            <button
              key={f}
              onClick={() => {
                setFilter(f);
                if (sliderRef.current) sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
              }}
              className={`px-5 py-2.5 rounded-full text-[10px] sm:text-xs font-bold tracking-wider uppercase transition-all duration-300 font-sans ${
                filter === f
                  ? "bg-maroon text-cream shadow-md"
                  : "bg-transparent text-maroon/60 border border-maroon/20 hover:border-maroon hover:text-maroon"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Faculty Slider */}
        <div
          ref={sliderRef}
          className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory gap-6 md:gap-8 pb-6 md:pb-8 scrollbar-none"
        >
          {filteredStaff.map((s, i) => (
            <div key={s.name} className="flex-shrink-0 w-[260px] sm:w-[300px] md:w-[320px] snap-start">
              <FacultyCard s={s} i={i} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
