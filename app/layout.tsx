import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import Script from "next/script";

import "./globals.css";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import { ROOT_URL } from "@/lib/data";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
// import { MouseFollower } from "@/components/MouseFollower";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
});

const title =
  "Tealeaf Consulting | Strategic Financial Leadership for Founders";
const description =
  "Strategic financial leadership for venture-backed founders. We build the investor-ready financial infrastructure you need to scale, raise capital, and exit with confidence.";

export const metadata: Metadata = {
  metadataBase: new URL(ROOT_URL),
  title,
  description,
  keywords: [
    "financial leadership",
    "venture-backed founders",
    "CFO services",
    "fundraising",
    "financial strategy",
    "startup finance",
    "investor relations",
    "financial infrastructure",
  ],
  authors: [{ name: "Tealeaf Consulting" }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: ROOT_URL,
    title,
    description,
    siteName: "Tealeaf Consulting",
    locale: "en_US",
    images: [
      {
        url: "/static/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tealeaf Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/static/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  other: {
    "apple-mobile-web-app-title": "Tealeaf",
  },
};

const jsonld = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${ROOT_URL}/#organization`,
      name: "Tealeaf Consulting",
      legalName: "Tealeaf Consulting",
      url: ROOT_URL,
      logo: {
        "@type": "ImageObject",
        url: `${ROOT_URL}/static/logo.png`,
        width: 864,
        height: 327,
      },
      description,
      founder: {
        "@type": "Person",
        "@id": `${ROOT_URL}/#founder`,
        name: "Angela Sweeney",
        jobTitle: "Founder & Strategic Financial Advisor",
        image: `${ROOT_URL}/static/founder.png`,
      },
      areaServed: [
        {
          "@type": "Place",
          name: "North America",
        },
        {
          "@type": "Place",
          name: "International",
        },
      ],
      contactPoint: {
        "@type": "ContactPoint",
        email: "hello@tealeafconsult.com",
        contactType: "customer service",
        availableLanguage: "English",
      },
      sameAs: ["https://www.linkedin.com/in/angelajsweeney"],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${ROOT_URL}/#service`,
      name: "Tealeaf Consulting",
      url: ROOT_URL,
      logo: `${ROOT_URL}/static/logo.png`,
      description: "Strategic financial leadership for venture-backed founders",
      areaServed: [
        {
          "@type": "Place",
          name: "North America",
        },
        {
          "@type": "Place",
          name: "International",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Financial Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Bookkeeping and Accounting",
              description: "Building scalable financial systems from day one.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Financial Controller Services",
              description:
                "Optimizing performance through strategic financial management.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Fractional CFO Partnership",
              description:
                "Partner with financial leadership for critical decisions.",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${ROOT_URL}/#website`,
      url: ROOT_URL,
      name: "Tealeaf Consulting",
      description: "Strategic Financial Leadership for Founders",
      publisher: {
        "@id": `${ROOT_URL}/#organization`,
      },
      inLanguage: "en-US",
    },
    {
      "@type": "Review",
      "@id": `${ROOT_URL}/#review1`,
      itemReviewed: {
        "@id": `${ROOT_URL}/#organization`,
      },
      author: {
        "@type": "Person",
        name: "Sean S. Murphy",
        jobTitle: "CEO",
        worksFor: {
          "@type": "Organization",
          name: "Helix Decision Science",
        },
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: 5,
        bestRating: 5,
      },
      reviewBody:
        'Angela does not just "manage the financial infrastructure" - she stewards value creation. She understands the "tollgate" fundraising model, ensuring that a company hits specific, measurable milestones at every phase to unlock new rounds of capital.',
    },
    {
      "@type": "Review",
      "@id": `${ROOT_URL}/#review2`,
      itemReviewed: {
        "@id": `${ROOT_URL}/#organization`,
      },
      author: {
        "@type": "Person",
        name: "Angela Nibbs",
        jobTitle: "Founder & CEO",
        worksFor: {
          "@type": "Organization",
          name: "Maven PR",
        },
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: 5,
        bestRating: 5,
      },
      reviewBody:
        "Angela Sweeney has been an invaluable partner to Maven. She brings clarity to our financial picture while always keeping the long-term vision in focus. Her guidance helps me make confident decisions about growth, investment, and where I'm taking the business next.",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="apple-mobile-web-app-title" content="Tealeaf" />

        {/* JSON-LD Structured Data */}
        <Script
          id="root-json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonld),
          }}
        />
      </head>
      <body
        className={`${manrope.variable} ${playfairDisplay.variable} antialiased min-h-[calc(100vh+1rem)] 
      font-sans bg-brand-cream text-brand-dark selection:bg-brand-accent selection:text-white tracking-[0.025em]`}
        suppressHydrationWarning>
        <Navbar />

        <SmoothScrollProvider>
          <main>{children}</main>
          <Footer />
        </SmoothScrollProvider>

        {/* <MouseFollower /> */}
      </body>
    </html>
  );
}
