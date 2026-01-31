import React, { useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";

const FeatureCards = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      // Filter out any null refs just in case
      const cards = cardsRef.current.filter(Boolean);

      // Ensure elements exist before animating
      if (cards.length > 0) {
        // Set initial state to avoid FOUC (Flash of Unstyled Content)
        // usage of useLayoutEffect ensures this happens before paint
        gsap.set(cards, { opacity: 0, y: 50 });

        // Use ScrollTrigger.batch to handle elements individually or in groups
        ScrollTrigger.batch(cards, {
          start: "top 85%",
          onEnter: (batch) => {
            gsap.to(batch, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.2,
              ease: "power3.out",
              overwrite: true,
            });
          },
          once: true,
        });
      }

      // Force a refresh after a short delay to ensure layout (fonts/images) is settled.
      // This fixes the issue where animation only works after resize.
      const timer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 200);

      return () => {
        clearTimeout(timer);
      };
    },
    { scope: containerRef, dependencies: [] },
  );

  return (
    <div ref={containerRef}>
      <div ref={gridRef} className="grid md:grid-cols-3 gap-6 cards-grid">
        {/* Card 1 */}
        <div
          ref={(el) => {
            cardsRef.current[0] = el;
          }}
          className="bg-white/5 rounded-2xl p-8 border border-white/5 hover:bg-white/10 transition-colors duration-300"
        >
          <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6">
            <span className="text-white font-bold">01</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">
            Foundation Building
          </h3>
          <p className="text-gray-400 leading-relaxed">
            Building scalable financial systems from day one.
          </p>
        </div>

        {/* Card 2 */}
        <div
          ref={(el) => {
            cardsRef.current[1] = el;
          }}
          className="bg-white/5 rounded-2xl p-8 border border-white/5 hover:bg-white/10 transition-colors duration-300"
        >
          <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6">
            <span className="text-white font-bold">02</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">
            Growth Operations
          </h3>
          <p className="text-gray-400 leading-relaxed">
            Financial Controller Services.
          </p>
        </div>

        {/* Card 3 */}
        <div
          ref={(el) => {
            cardsRef.current[2] = el;
          }}
          className="bg-white/5 rounded-2xl p-8 border border-white/5 hover:bg-white/10 transition-colors duration-300"
        >
          <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6">
            <span className="text-white font-bold">03</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">
            Strategic Advisory
          </h3>
          <p className="text-gray-400 leading-relaxed">
            Fractional CFO Partnership.
          </p>
        </div>
      </div>
    </div>
  );
};

FeatureCards.displayName = "FeatureCards";

export const WhyTealeaf: React.FC = () => {
  return (
    <section
      id="why"
      className="py-24 bg-brand-dark text-brand-cream relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#00429B"
            d="M42.7,-62.9C50.9,-52.8,50.1,-34.4,51.7,-19.2C53.4,-4,57.4,8,54.5,18.7C51.6,29.3,41.8,38.7,30.8,45.8C19.8,52.9,7.6,57.7,-3.4,62.4C-14.4,67.1,-24.1,71.7,-35.1,66.6C-46.1,61.5,-58.4,46.7,-65.4,30.3C-72.4,13.9,-74.2,-4.1,-67.9,-19.6C-61.6,-35.1,-47.2,-48.1,-33.5,-56.3C-19.8,-64.5,-6.8,-67.9,5.2,-75.1L17.2,-82.3"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Top Section: Split Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Headline */}
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-6xl font-serif font-medium leading-[1.15] tracking-tight">
              We don't just handle your finances, we{" "}
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
              <p className="text-xl text-white font-medium tracking-wide">
                "Our comprehensive approach ensures every financial decision
                strengthens your competitive position and accelerates your path
                to scale."
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
