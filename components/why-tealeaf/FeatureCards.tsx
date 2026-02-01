"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";

export const FeatureCards = () => {
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
    { scope: containerRef, dependencies: [] }
  );

  return (
    <div ref={containerRef}>
      <div ref={gridRef} className="grid md:grid-cols-3 gap-6 cards-grid">
        {/* Card 1 */}
        <div
          ref={(el) => {
            cardsRef.current[0] = el;
          }}
          className="bg-white/5 rounded-2xl p-8 border border-white/5 hover:bg-white/10 transition-colors duration-300">
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
          className="bg-white/5 rounded-2xl p-8 border border-white/5 hover:bg-white/10 transition-colors duration-300">
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
          className="bg-white/5 rounded-2xl p-8 border border-white/5 hover:bg-white/10 transition-colors duration-300">
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
