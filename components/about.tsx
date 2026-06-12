import { Reveal } from "./reveal";
import Link from "next/link";
import Image from "next/image";

export function About({ isHeaderH1 = false }: { isHeaderH1?: boolean }) {
  const HeadingTag = isHeaderH1 ? "h1" : "h2";

  return (
    <section id="about" className="relative py-20 md:py-32 bg-cream text-maroon overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-10 md:gap-12 items-center">

          {/* Left Column — Text */}
          <div className="md:col-span-4 space-y-5 md:space-y-6">
            <Reveal>
              <span className="text-[10px] font-bold tracking-[0.25em] text-saffron uppercase block">
                ABOUT US
              </span>
            </Reveal>

            <Reveal delay={0.15}>
              <HeadingTag className="font-serif text-3xl sm:text-4xl md:text-4xl lg:text-5xl leading-tight text-maroon">
                More than a tradition.{" "}
                <span className="font-display italic text-saffron block">A way of life.</span>
              </HeadingTag>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="text-maroon/80 text-sm md:text-base leading-relaxed font-sans">
                Vedhya School of Arts &amp; Wellness is a global online learning community led by
                experienced teachers and wellness professionals dedicated to nurturing artistic
                excellence and personal growth. We offer expert training in Carnatic music,
                classical dance, Indian instruments, yoga, home fitness, and personal counselling.
                With students across the world, Vedhya empowers individuals to unlock their
                potential, cultivate inner peace, and embrace a life of creativity, balance, and purpose.
              </p>
            </Reveal>

            <Reveal delay={0.45}>
              <Link
                href="/programs"
                className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-cream bg-ink px-6 py-3.5 rounded-full hover:bg-ink/90 transition-all shadow-md group font-sans"
              >
                <span>Know Our Story</span>
                <svg
                  className="w-3.5 h-3.5 bg-cream text-ink rounded-full p-0.5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </Reveal>
          </div>

          {/* Center Column: Arched Window */}
          <div className="md:col-span-4 flex justify-center order-first md:order-none">
            <Reveal delay={0.3}>
              <div className="relative w-[220px] sm:w-[260px] md:w-full md:max-w-[280px] aspect-[4/5] rounded-t-full border-[6px] border-gold/20 overflow-hidden shadow-2xl bg-cream">
                <Image
                  src="/about_nataraja.webp"
                  alt="Nataraja statue — symbol of classical dance at Vedhya School"
                  width={280}
                  height={350}
                  quality={85}
                  className="w-full h-full object-cover"
                  sizes="(max-width: 640px) 220px, (max-width: 768px) 260px, 280px"
                />
                <div className="absolute inset-0 border border-gold/30 rounded-t-full pointer-events-none" />
              </div>
            </Reveal>
          </div>

          {/* Right Column: Quote */}
          <div className="md:col-span-4 space-y-4 pt-6 md:pt-0 pl-0 md:pl-6 border-t md:border-t-0 md:border-l border-gold/20">
            <Reveal delay={0.45}>
              <span className="font-serif text-5xl sm:text-6xl text-gold/40 block leading-none">"</span>
              <blockquote className="font-serif italic text-xl sm:text-2xl lg:text-3xl text-maroon/90 leading-relaxed font-light">
                Rooted in lineage.
                <br />
                Guided by wisdom.
                <br />
                Expressed by you.
              </blockquote>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
