import type { Metadata, Viewport } from "next";
import { Italiana, Cormorant_Garamond, Inter } from "next/font/google";
import { WhatsAppButton } from "../components/whatsapp-button";
import { LoadingScreen } from "../components/loading-screen";
import "./globals.css";

const italiana = Italiana({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-italiana",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-cormorant",
  display: "swap",
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#090e0a",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://vedhyaschool.com"),
  title: {
    default: "VEDHYA SCHOOL — Sanctuary of Classical Arts & Wellness",
    template: "%s | VEDHYA SCHOOL",
  },
  description:
    "A sanctuary for Indian classical dance, traditional music, and holistic wellness — where lineage meets the living pulse of expression. Enroll today.",
  keywords: [
    "Vedhya School",
    "classical dance",
    "Bharatanatyam",
    "Kathak",
    "Indian classical music",
    "Carnatic music",
    "yoga",
    "wellness",
    "arts school",
    "online music classes",
    "online dance classes",
    "Bangalore arts school",
  ],
  authors: [{ name: "Vedhya School", url: "https://vedhyaschool.com" }],
  creator: "Vedhya School",
  publisher: "Vedhya School",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "VEDHYA SCHOOL — School of Arts & Wellness",
    description:
      "A sanctuary where lineage meets the living pulse of expression. Classical dance, music, and wellness.",
    type: "website",
    url: "https://vedhyaschool.com",
    siteName: "Vedhya School",
    locale: "en_IN",
    images: [
      {
        url: "/school_logo.png",
        width: 400,
        height: 400,
        alt: "Vedhya School Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VEDHYA SCHOOL — Sanctuary of Classical Arts & Wellness",
    description:
      "Indian classical dance, music, and wellness. Rooted in tradition. Alive in practice.",
    images: ["/school_logo.png"],
  },
  alternates: {
    canonical: "https://vedhyaschool.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Vedhya School of Arts & Wellness",
  url: "https://vedhyaschool.com",
  logo: "https://vedhyaschool.com/school_logo.png",
  description:
    "A global online learning community offering classical dance, music, yoga and wellness programs rooted in Indian heritage.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-90617-80845",
    contactType: "customer service",
    email: "connect@vedhyaschool.com",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bangalore",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.instagram.com/vedhyaschool",
    "https://www.facebook.com/vedhyaschool",
    "https://www.youtube.com/@vedhyaschool",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${italiana.variable} ${cormorant.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen bg-cream text-maroon selection:bg-maroon selection:text-cream">
        <LoadingScreen />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
