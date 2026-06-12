import type { Metadata } from "next";
import { Nav } from "../../components/nav";
import { About } from "../../components/about";
import { Footer } from "../../components/footer";

export const metadata: Metadata = {
  title: "About Us — VEDHYA SCHOOL",
  description:
    "Learn about the heritage, philosophy, and mission of Vedhya School of Arts & Wellness — a global community rooted in Indian classical tradition.",
  keywords: ["about Vedhya School", "arts school mission", "classical arts heritage", "Indian classical tradition"],
  alternates: { canonical: "https://vedhyaschool.com/about" },
  openGraph: {
    title: "About Us — VEDHYA SCHOOL",
    description: "Discover the heritage and philosophy behind Vedhya School of Arts & Wellness.",
    url: "https://vedhyaschool.com/about",
    images: [{ url: "/about_nataraja.png", width: 800, height: 1000, alt: "Nataraja at Vedhya School" }],
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream text-maroon">
      <Nav activeSection="about" />
      <main className="pt-20">
        <About isHeaderH1={true} />
      </main>
      <Footer />
    </div>
  );
}
