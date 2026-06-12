import type { Metadata } from "next";
import { Nav } from "../../components/nav";
import { Faculty } from "../../components/faculty";
import { Footer } from "../../components/footer";

export const metadata: Metadata = {
  title: "Faculty — VEDHYA SCHOOL",
  description:
    "Meet the experienced guides, artists, and wellness professionals at Vedhya School — dedicated to nurturing artistic excellence and personal growth.",
  keywords: ["faculty", "dance teachers", "music teachers", "yoga instructors", "arts school faculty"],
  alternates: { canonical: "https://vedhyaschool.com/staff" },
  openGraph: {
    title: "Faculty — VEDHYA SCHOOL",
    description: "Meet the guides and artists at Vedhya School of Arts & Wellness.",
    url: "https://vedhyaschool.com/staff",
    images: [{ url: "/school_logo.png", width: 400, height: 400, alt: "Vedhya School Faculty" }],
  },
};

export default function StaffPage() {
  return (
    <div className="min-h-screen bg-cream text-maroon">
      <Nav activeSection="staff" />
      <main className="pt-20">
        <Faculty isHeaderH1={true} />
      </main>
      <Footer />
    </div>
  );
}
