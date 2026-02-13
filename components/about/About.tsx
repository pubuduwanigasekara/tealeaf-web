import React from "react";

import { FounderImage } from "./FounderImage";
import { Stats } from "./Stats";

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Subtle background glow/gradient to give depth */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-primary/5 blur-3xl rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Content & Stats */}
          <div className="flex flex-col justify-center">
            <div className="mb-8">
              <h2 className="text-sm font-bold tracking-widest text-brand-accent uppercase mb-3">
                About Us
              </h2>
              <h3 className="text-4xl md:text-5xl font-serif text-white mb-6">
                Why Founders Trust Us
              </h3>
            </div>

            <div className="space-y-6 text-gray-300 text-lg leading-relaxed font-light mb-10 max-w-2xl">
              <p>
                When you partner with Tealeaf Consulting, you gain more than
                financial expertise. You gain a strategic ally who thinks like a
                CFO, operates like a builder, and helps founders scale with
                intention.
              </p>
              <p>
                Founded by{" "}
                <span className="text-white font-semibold">Angela Sweeney</span>
                , a visionary CFO and strategic operator, Tealeaf brings over
                two decades of hands-on experience across 14 startups and 16 M&A
                transactions.
              </p>
              <p>
                With more than $100 million raised in capital and a track record
                spanning SaaS, biotech, fintech, and emerging technologies,
                Angela builds the financial and operational frameworks that turn
                ambition into sustainable systems that actually scale.
              </p>
            </div>

            {/* Stats Grid - 2x2 Layout */}
            <Stats />
          </div>

          {/* Right Column: Image with Quote Overlay */}
          <FounderImage />
        </div>
      </div>
    </section>
  );
};
