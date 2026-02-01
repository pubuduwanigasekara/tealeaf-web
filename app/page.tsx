import Script from "next/script";

import { Hero } from "@/components/Hero";
import { WhyTealeaf } from "@/components/whytealeaf/WhyTealeaf";
import { Services } from "@/components/Services";
import { About } from "@/components/about/About";
import { Testimonials } from "@/components/Testimonials";
import { FounderPain } from "@/components/FounderPain";
import { CallToAction } from "@/components/CallToAction";
import { ROOT_URL } from "@/lib/data";

const jsonld = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": `${ROOT_URL}/#breadcrumblist`,
      itemListElement: [
        {
          "@type": "ListItem",
          "@id": `${ROOT_URL}/#listItem`,
          position: 1,
          name: "Home",
          item: ROOT_URL,
        },
      ],
    },
  ],
};

export default function HomePage() {
  return (
    <div className="grow">
      <Script
        id="home-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonld),
        }}
      />

      <Hero />
      <FounderPain />
      <WhyTealeaf />
      <Services />
      <About />
      <Testimonials />
      <CallToAction />
    </div>
  );
}
