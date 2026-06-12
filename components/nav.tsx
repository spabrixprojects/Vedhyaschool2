"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NAV = [
  { id: "home", label: "Home", href: "/", sectionId: "home" },
  { id: "about", label: "About", href: "/about", sectionId: "about" },
  { id: "programs", label: "Programs", href: "/programs", sectionId: "programs" },
  { id: "staff", label: "Staffs", href: "/staff", sectionId: "staff" },
  { id: "contact", label: "Contact", href: "/contact", sectionId: "contact" },
];

export function Nav({ activeSection = "home" }: { activeSection?: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const handleNavClick = (e: React.MouseEvent, item: typeof NAV[number]) => {
    if (isHomePage) {
      e.preventDefault();
      const el = document.getElementById(item.sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const getIsActive = (item: typeof NAV[number]) => {
    if (isHomePage) return activeSection === item.id;
    return pathname === item.href;
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 md:px-12 flex justify-between items-center transition-all duration-300 ${
          scrolled
            ? "py-2 backdrop-blur-md bg-ink/90 shadow-lg border-b border-white/5"
            : "py-4 bg-transparent"
        }`}
      >
        {/* Logo / Brand */}
        <Link href="/" className="flex items-center gap-2 sm:gap-3 group shrink-0">
          <Image
            src="/school_logo.webp"
            alt="VEDHYA SCHOOL Logo"
            width={56}
            height={56}
            priority
            className="h-14 w-14 sm:h-16 sm:w-16 object-contain"
          />
          <div className="flex flex-col font-serif leading-[1.1] text-cream">
            <span className="text-sm sm:text-base font-bold tracking-widest uppercase">
              VEDHYA SCHOOL
            </span>
            <span className="text-[8px] sm:text-[10px] font-medium tracking-[0.18em] text-gold uppercase mt-0.5">
              of ARTS &amp; WELLNESS
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 lg:gap-8 text-[11px] font-bold uppercase tracking-[0.2em] text-cream/80 items-center font-sans">
          {NAV.map((n) => {
            const isActive = getIsActive(n);
            return (
              <Link
                key={n.id}
                href={n.href}
                onClick={(e) => handleNavClick(e, n)}
                className={`relative py-1.5 transition-colors duration-300 ${
                  isActive ? "text-cream" : "text-cream/60 hover:text-cream"
                }`}
              >
                <span>{n.label}</span>
                <span
                  className={`absolute -bottom-0.5 left-0 right-0 h-[2px] bg-gold transition-all duration-300 origin-left ${
                    isActive ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </Link>
            );
          })}
        </div>


        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="md:hidden text-cream p-1 transition-colors cursor-pointer"
          aria-label="Open menu"
          aria-expanded={mobileMenuOpen}
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </nav>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", ease: "easeOut", duration: 0.3 }}
              className="fixed top-0 bottom-0 right-0 z-50 w-72 max-w-[85vw] bg-ink/95 backdrop-blur-lg border-l border-white/10 flex flex-col shadow-2xl rounded-l-2xl md:hidden font-sans"
            >
              {/* Drawer Header */}
              <div className="flex justify-between items-center px-6 pt-6 pb-5 border-b border-white/8">
                <div className="flex flex-col font-serif leading-[1.1] text-cream">
                  <span className="text-sm font-bold tracking-widest uppercase">VEDHYA SCHOOL</span>
                  <span className="text-[9px] font-medium tracking-[0.15em] text-gold uppercase mt-0.5">
                    of ARTS &amp; WELLNESS
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-cream p-1.5 border border-cream/10 rounded-md hover:bg-white/5 transition-colors cursor-pointer"
                  aria-label="Close menu"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Links */}
              <nav className="flex flex-col px-6 pt-6 gap-1 text-sm font-semibold uppercase tracking-[0.2em]">
                {NAV.map((n) => {
                  const isActive = getIsActive(n);
                  return (
                    <Link
                      key={n.id}
                      href={n.href}
                      onClick={(e) => handleNavClick(e, n)}
                      className={`py-3.5 flex items-center justify-between border-b border-white/5 transition-colors ${
                        isActive ? "text-gold" : "text-cream/70 hover:text-gold"
                      }`}
                    >
                      <span>{n.label}</span>
                      <motion.span
                        className="text-gold text-[10px]"
                        whileHover={{ x: 4 }}
                      >
                        ➔
                      </motion.span>
                    </Link>
                  );
                })}
              </nav>

              {/* CTA in drawer */}
              <div className="px-6 mt-8">
                <Link
                  href="/contact"
                  onClick={(e) => handleNavClick(e, NAV[4])}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 border border-gold/60 rounded-full text-[10px] font-bold tracking-[0.15em] uppercase text-cream hover:bg-gold/10 hover:border-gold transition-all duration-300"
                >
                  <span>Join Our Journey</span>
                  <span className="text-gold">➔</span>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
