import React, { useLayoutEffect, useRef } from "react";
import { TestimonialItem } from "../types";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const testimonials: TestimonialItem[] = [
  {
    id: "1",
    quote:
      "Tealeaf was invaluable to us while we were going through our acquisition. We could not have done it without their support. They built the foundation we stood on.",
    author: "Guy Marion",
    role: "CEO",
    company: "Brightback",
  },
  {
    id: "2",
    quote:
      "Not your typical outsourced accounting services vendor, they are a true partner. The insights provided helped us pivot our strategy at a critical moment.",
    author: "Dana Quattrochi",
    role: "CFO",
    company: "Firefly Health",
  },
  {
    id: "3",
    quote:
      "Strategic, thoughtful, and incredibly experienced. Angela brings a level of rigor to the financials that gave our investors immediate confidence.",
    author: "Sarah Jenkins",
    role: "Founder",
    company: "TechFlow Solutions",
  },
];

export const Testimonials: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Filter out any null refs just in case
      const cards = cardsRef.current.filter(Boolean);

      // Ensure elements exist before animating
      if (cards.length > 0) {
        // Set initial state to avoid FOUC (Flash of Unstyled Content)
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
    }, containerRef);

    // Force a refresh after a short delay to ensure layout is settled.
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    return () => {
      ctx.revert();
      clearTimeout(timer);
    };
  }, []);

  return (
    <section
      id="testimonials"
      ref={containerRef}
      className="py-24 bg-brand-cream"
    >
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-sm font-bold tracking-widest text-brand-accent uppercase mb-3">
            Client Stories
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif text-brand-dark">
            What Founders Say
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={t.id}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="group bg-white p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between border-t-4 border-brand-accent will-change-transform"
            >
              <div>
                <div className="text-brand-primary text-6xl font-serif leading-none mb-4 opacity-30 group-hover:opacity-80 transition-opacity duration-300">
                  “
                </div>
                <p className="text-brand-gray text-lg italic mb-8 relative z-10 leading-relaxed">
                  {t.quote}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-1 rounded-full bg-brand-accent"></div>
                <div>
                  <h5 className="text-brand-dark font-bold font-serif">
                    {t.author}
                  </h5>
                  <p className="text-sm text-brand-gray/60 uppercase tracking-wide">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
