import React from "react";
import dynamic from "next/dynamic";
import { FeatureCards } from "./FeatureCards";

const WhyTealeafBackground = dynamic(() => import("./WhyTealeafBackground"), {
  ssr: true,
  loading: () => null,
});

export const WhyTealeaf: React.FC = () => {
  return (
    <section
      id="why"
      className="py-24 bg-brand-dark text-brand-cream relative overflow-hidden">
      {/* Background decoration */}
      <WhyTealeafBackground />

      <div className="container mx-auto px-6 relative z-10">
        {/* Top Section: Split Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Headline */}
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-6xl font-serif font-medium leading-[1.15] tracking-tight">
              We don&apos;t just handle your finances, we{" "}
              <span className="relative inline-block">
                <span className="relative z-10">architect</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-brand-accent/90 rounded-sm z-0"></span>
              </span>{" "}
              your growth.
            </h2>
          </div>

          {/* Description Text */}
          <div className="space-y-8 text-lg text-gray-300 font-light leading-relaxed max-w-2xl">
            <p className="tracking-wide">
              Tealeaf Consulting is the strategic financial partner for
              venture-backed founders ready to scale boldly. Our mission is to
              build the financial backbone that transforms promising startups
              into market-leading companies.
            </p>
            <p className="tracking-wide">
              From fundraising preparation to building investor-ready financial
              infrastructure, we deliver the CFO-level expertise that gives
              founders complete confidence in their financial foundation.
            </p>

            {/* Quote Block */}
            <blockquote className="border-l-4 border-brand-accent pl-6 py-1 my-6">
              <p className="text-xl text-white font-medium italic tracking-wide">
                &quot;Our comprehensive approach ensures every financial
                decision strengthens your competitive position and accelerates
                your path to scale.&quot;
              </p>
            </blockquote>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <FeatureCards />
      </div>
    </section>
  );
};
