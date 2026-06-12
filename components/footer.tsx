"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NAV_COLS = [
  {
    title: "Explore",
    items: [
      { label: "Home",     href: "/",         sectionId: "home"     },
      { label: "About",    href: "/about",     sectionId: "about"    },
      { label: "Programs", href: "/programs",  sectionId: "programs" },
      { label: "Staffs",   href: "/staff",     sectionId: "staff"    },
      { label: "Contact",  href: "/contact",   sectionId: "contact"  },
    ],
  },
  {
    title: "Programs",
    items: [
      { label: "Dance",    href: "/programs",  sectionId: "programs" },
      { label: "Wellness", href: "/programs",  sectionId: "programs" },
      { label: "Music",    href: "/programs",  sectionId: "programs" },
    ],
  },
];

export function Footer() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    if (isHomePage) {
      e.preventDefault();
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-ink text-cream/70 px-5 sm:px-6 md:px-12 pt-16 md:pt-20 pb-10 border-t border-white/5 relative font-sans">
      <div className="max-w-7xl mx-auto">

        {/* Main footer grid */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-y-10 gap-x-8 pb-14 border-b border-white/10">

          {/* Brand Info — full width on mobile, 6 cols on md */}
          <div className="col-span-2 md:col-span-6 space-y-5">
            <Link
              href="/"
              onClick={(e) => handleLinkClick(e, "home")}
              className="flex items-center gap-3 group w-fit"
            >
              <Image
                src="/school_logo.webp"
                alt="VEDHYA SCHOOL Logo"
                width={40}
                height={40}
                className="h-9 w-9 sm:h-10 sm:w-10 object-contain rounded-full border border-gold/20 p-0.5 bg-ink/50"
              />
              <div className="flex flex-col font-serif leading-[1.1] text-cream">
                <span className="text-sm font-bold tracking-widest uppercase">VEDHYA SCHOOL</span>
                <span className="text-[9px] font-medium tracking-[0.15em] text-gold uppercase mt-0.5">
                  of ARTS &amp; WELLNESS
                </span>
              </div>
            </Link>

            <p className="text-xs leading-relaxed max-w-sm text-cream/60">
              A sanctuary for classical arts, rooted in tradition, guided by lineage, and alive in every practice.
            </p>

            {/* Contact quick-links */}
            <div className="space-y-2 text-xs text-cream/50">
              <a
                href="mailto:connect@vedhyaschool.com"
                className="flex items-center gap-2 hover:text-gold transition-colors"
              >
                <svg className="w-3.5 h-3.5 text-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>connect@vedhyaschool.com</span>
              </a>
              <a
                href="tel:+919249027951"
                className="flex items-center gap-2 hover:text-gold transition-colors"
              >
                <svg className="w-3.5 h-3.5 text-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+91 92490 27951</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-1">
              {[
                {
                  name: "Facebook",
                  href: "https://www.facebook.com/VedhyaSchoolofArtsandWellness?rdid=2ubyqHRqxqlTlhKD&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Hkbanjkzc%2F#",
                  icon: (
                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  ),
                },
                {
                  name: "Instagram",
                  href: "https://www.instagram.com/vedhyaschoolofartsandwellness/",
                  icon: (
                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  ),
                },
                {
                  name: "YouTube",
                  href: "https://www.youtube.com/@VedhyaSchoolofArtsandWellness",
                  icon: (
                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true">
                      <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                    </svg>
                  ),
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:border-gold hover:text-gold transition-colors text-cream/60"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Columns — each 1 col on mobile, 3 cols on md */}
          {NAV_COLS.map((col, idx) => (
            <div key={idx} className="col-span-1 md:col-span-3">
              <h5 className="text-[10px] font-bold tracking-wider uppercase text-gold mb-4 sm:mb-5">
                {col.title}
              </h5>
              <ul className="space-y-2.5 sm:space-y-3 text-xs font-semibold">
                {col.items.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        onClick={(e) => handleLinkClick(e, item.sectionId)}
                        className={`transition-colors hover:text-gold hover:underline ${
                          isActive ? "text-gold" : "text-cream/60"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}

        </div>

        {/* Bottom footer */}
        <div className="pt-7 flex flex-col sm:flex-row justify-between items-center gap-3 text-[9px] tracking-wider uppercase text-cream/45 font-semibold">
          <span>© {new Date().getFullYear()} Vedhya School of Arts & Wellness . All rights reserved.</span>
          
        </div>

      </div>
    </footer>
  );
}
