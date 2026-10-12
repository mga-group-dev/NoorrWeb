import { Instrument_Serif, Hanken_Grotesk, Parisienne } from "next/font/google";
import "./globals.css";
import ClientProviders from "@/components/ClientProviders";

// A light, narrow serif for titles: quiet but cinematic at large sizes.
const display = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-display", display: "swap" });
const body = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-body", display: "swap" });
// One cursive accent, used for the motto only.
const hand = Parisienne({ subsets: ["latin"], weight: "400", variable: "--font-hand", display: "swap" });

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const DESCRIPTION =
  "Bollywood choreographer working with Ganesh Acharya since 2011. 55K+ students trained, 60+ films and albums. Founder of Dance Desire and NR Institute of Dance.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Noor Khan | Dance Choreographer and Celebrity Trainer",
    template: "%s | Noor Khan",
  },
  description: DESCRIPTION,
  keywords: [
    "Noor Khan choreographer",
    "dance choreographer Navi Mumbai",
    "Bollywood choreographer",
    "school annual day choreography",
    "college dance choreography",
    "corporate dance workshop",
    "Dance Desire",
    "NR Institute of Dance",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Noor Khan",
    title: "Noor Khan | Dance Choreographer",
    description: "Where anyone can dance. Workshops, school programs, corporate shows and film choreography.",
    images: [{ url: "/media/stage-pose.webp", alt: "Noor Khan on stage" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Noor Khan | Dance Choreographer",
    description: "Where anyone can dance. Workshops, school programs, corporate shows and film choreography.",
    images: ["/media/stage-pose.webp"],
  },
  robots: { index: true, follow: true },
};

// Structured data so search engines can show Noor as a person with a bookable dance service.
const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#noor`,
      name: "Noor Khan",
      jobTitle: "Dance Choreographer and Celebrity Trainer",
      url: SITE_URL,
      image: `${SITE_URL}/media/portrait.webp`,
      email: "choreographernoorkhan@gmail.com",
      telephone: "+91-9167439223",
      address: { "@type": "PostalAddress", addressLocality: "Navi Mumbai", addressRegion: "Maharashtra", addressCountry: "IN" },
      sameAs: ["https://instagram.com/noorkhaanofficial", "https://facebook.com/noordanceislife"],
      founder: [
        { "@type": "Organization", name: "Dance Desire" },
        { "@type": "Organization", name: "NR Institute of Dance" },
      ],
    },
    {
      "@type": "ProfessionalService",
      name: "Noor Khan Choreography",
      url: SITE_URL,
      image: `${SITE_URL}/media/stage-pose.webp`,
      telephone: "+91-9167439223",
      areaServed: "IN",
      address: { "@type": "PostalAddress", addressLocality: "Navi Mumbai", addressRegion: "Maharashtra", addressCountry: "IN" },
      founder: { "@id": `${SITE_URL}/#noor` },
      serviceType: ["School dance programs", "College choreography", "Corporate shows", "Dance workshops"],
    },
  ],
};

export const viewport = { themeColor: "#ffffff" };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${hand.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
