import type { Metadata } from "next";
import { Nav } from "../../components/nav";
import { Programs } from "../../components/programs";
import { Footer } from "../../components/footer";

export const metadata: Metadata = {
  title: "Programs — VEDHYA SCHOOL",
  description:
    "Explore our classical dance (Bharatanatyam, Kathak, Kuchipudi), traditional music (Carnatic, instruments), and wellness programs at Vedhya School.",
  keywords: [
    "classical dance programs",
    "Bharatanatyam classes",
    "Kathak",
    "Carnatic music",
    "yoga classes",
    "online arts programs",
  ],
  alternates: { canonical: "https://vedhyaschool.com/programs" },
  openGraph: {
    title: "Programs — VEDHYA SCHOOL",
    description:
      "Dance, music, and wellness programs rooted in Indian classical tradition.",
    url: "https://vedhyaschool.com/programs",
    images: [{ url: "/program_dance.png", width: 800, height: 500, alt: "Dance programs at Vedhya School" }],
  },
};

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-ink text-cream">
      <Nav activeSection="programs" />
      <main className="pt-20">
        <Programs isHeaderH1={true} />
      </main>
      <Footer />
    </div>
  );
}
