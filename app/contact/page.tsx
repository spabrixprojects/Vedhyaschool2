import type { Metadata } from "next";
import { Nav } from "../../components/nav";
import { Contact } from "../../components/contact";
import { Footer } from "../../components/footer";

export const metadata: Metadata = {
  title: "Contact Us — VEDHYA SCHOOL",
  description:
    "Get in touch with Vedhya School for enrollments, personal counseling, class schedules, and any queries about our arts and wellness programs.",
  keywords: ["contact Vedhya School", "enroll dance class", "music class enrollment", "arts school contact"],
  alternates: { canonical: "https://vedhyaschool.com/contact" },
  openGraph: {
    title: "Contact Us — VEDHYA SCHOOL",
    description: "Reach out to Vedhya School to begin your journey in arts and wellness.",
    url: "https://vedhyaschool.com/contact",
    images: [{ url: "/contact_diya.png", width: 600, height: 1200, alt: "Contact Vedhya School" }],
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-ink text-cream">
      <Nav activeSection="contact" />
      <main className="pt-20">
        <Contact isHeaderH1={true} />
      </main>
      <Footer />
    </div>
  );
}
