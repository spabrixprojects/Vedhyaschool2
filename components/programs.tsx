"use client";

import { Reveal } from "./reveal";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

type ProgramItem = string | { category: string; list: string[] };

interface Program {
  id: string;
  label: string;
  num: string;
  img: string;
  imgAlt: string;
  items: ProgramItem[];
  linkLabel: string;
  gridCols: string;
}

const PROGRAMS: Program[] = [
  {
    id: "dance",
    label: "DANCE",
    num: "01",
    img: "/program_dance.webp",
    imgAlt: "Dance programs — Bharatanatyam, Kathak, Kuchipudi and more",
    items: [
      "Bharatanatyam", "Kathak", "Kathakali", "Mohiniyattam",
      "Kuchipudi", "Folk dance", "Bollywood Dance", "Contemporary Dance",
      "Hip-Hop", "Freestyle",
    ],
    linkLabel: "Explore Dance",
    gridCols: "grid-cols-1 sm:grid-cols-2",
  },
  {
    id: "wellness",
    label: "WELLNESS",
    num: "02",
    img: "/program_wellness.webp",
    imgAlt: "Wellness programs — Yoga, Home workout, Personal counselling",
    items: ["Yoga", "Home workout", "Personal counselling"],
    linkLabel: "Explore Wellness",
    gridCols: "grid-cols-1",
  },
  {
    id: "music",
    label: "MUSIC",
    num: "03",
    img: "/program_music.webp",
    imgAlt: "Music programs — Carnatic, instruments, keyboard, guitar",
    items: [
      {
        category: "Vocal",
        list: ["Indian Carnatic Music", "Lalithaganam", "Film Songs"]
      },
      {
        category: "Instruments",
        list: ["Carnatic Violin", "Keyboard / Piano", "Mridangam", "Kanjira", "Guitar"]
      }
    ],
    linkLabel: "Explore Music",
    gridCols: "grid-cols-1 sm:grid-cols-2",
  },
];

export function Programs({ isHeaderH1 = false }: { isHeaderH1?: boolean }) {
  const HeadingTag = isHeaderH1 ? "h1" : "h2";
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const getHref = (id: string) => {
    const filterValue = id.charAt(0).toUpperCase() + id.slice(1);
    if (isHomePage) {
      return `/?filter=${filterValue}#staff`;
    }
    return `/staff?filter=${filterValue}`;
  };

  return (
    <section id="programs" className="relative py-20 md:py-32 bg-ink text-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 relative z-10">

        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-5 mb-12 md:mb-16">
          <div className="space-y-3 sm:space-y-4">
            <span className="text-[10px] font-bold tracking-[0.25em] text-saffron uppercase block font-sans">
              OUR PROGRAMS
            </span>
            <HeadingTag className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-cream">
              Paths of Practice. Worlds of Possibility.
            </HeadingTag>
          </div>

        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {PROGRAMS.map((prog, idx) => (
            <Reveal
              key={prog.id}
              delay={idx * 0.1 + 0.1}
              className={`relative group bg-cream text-maroon rounded-[2rem] overflow-hidden shadow-xl border border-maroon/5 flex flex-col${prog.id === "music" ? " sm:col-span-2 md:col-span-1" : ""}`}
            >
              {/* Image */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-maroon/5 border-b border-maroon/5">
                <Image
                  src={prog.img}
                  alt={prog.imgAlt}
                  width={640}
                  height={400}
                  quality={85}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-3 sm:mb-4">
                    <h3 className="font-serif text-xl sm:text-2xl font-semibold tracking-wider uppercase">
                      {prog.label}
                    </h3>
                    <span className="w-8 h-8 rounded-full border border-maroon/20 flex items-center justify-center font-serif text-xs font-semibold">
                      {prog.num}
                    </span>
                  </div>
                  <div className="w-12 h-0.5 bg-saffron mb-4 sm:mb-5" />
                  <div className={`grid ${prog.gridCols} gap-x-2 gap-y-4 text-xs text-maroon/90 font-semibold font-sans`}>
                    {prog.items.map((item, i) => {
                      if (typeof item === "string") {
                        return (
                          <div key={item} className="flex items-center gap-1.5">
                            <span className="text-saffron text-[10px] shrink-0">➔</span>
                            <span>{item}</span>
                          </div>
                        );
                      }
                      return (
                        <div key={item.category} className="space-y-2 col-span-1">
                          <h4 className="text-maroon/50 font-bold uppercase tracking-wider text-[10px]">{item.category}</h4>
                          <ul className="space-y-1.5">
                            {item.list.map((d) => (
                              <li key={d} className="flex items-center gap-1.5">
                                <span className="text-saffron text-[10px] shrink-0">➔</span>
                                <span>{d}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="pt-5 border-t border-maroon/5 mt-5 font-sans">
                  <Link
                    href={getHref(prog.id)}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-saffron hover:text-maroon transition-colors"
                  >
                    <span>{prog.linkLabel}</span>
                    <span>➔</span>
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
