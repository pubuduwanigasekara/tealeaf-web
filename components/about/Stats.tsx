"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export const Stats = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const statsGridRef = useRef<HTMLDivElement>(null);
  const numberRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      // Animate numbers
      numberRefs.current.forEach((el, index) => {
        if (!el) return;

        const finalValue = parseFloat(el.dataset.value || "0");
        const prefix = el.dataset.prefix || "";
        const suffix = el.dataset.suffix || "";

        const counter = { val: 0 };

        gsap.to(counter, {
          val: finalValue,
          duration: 2.0,
          delay: index * 0.3,
          ease: "power1.out", // Starts quickly, slows down at the end
          scrollTrigger: {
            trigger: statsGridRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          onUpdate: () => {
            el.innerText = `${prefix}${Math.floor(counter.val)}${suffix}`;
          },
        });
      });

      // Animate the cards entrance
      if (statsGridRef.current) {
        gsap.from(statsGridRef.current.children, {
          y: 20,
          opacity: 0,
          duration: 0.8,
          stagger: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: statsGridRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      }

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
      <div ref={statsGridRef} className="grid sm:grid-cols-2 gap-4">
        {/* Stat 1 */}
        <div className="bg-white/5 p-6 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
          <div
            ref={(el) => {
              numberRefs.current[0] = el;
            }}
            data-value="14"
            data-suffix="+"
            className="text-3xl text-brand-accent font-bold mb-1">
            0
          </div>
          <div className="text-sm text-gray-400 font-medium">
            Startups Scaled
          </div>
        </div>
        {/* Stat 2 */}
        <div className="bg-white/5 p-6 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
          <div
            ref={(el) => {
              numberRefs.current[1] = el;
            }}
            data-value="100"
            data-prefix="$"
            data-suffix="M+"
            className="text-3xl text-brand-accent font-bold mb-1">
            $0
          </div>
          <div className="text-sm text-gray-400 font-medium">
            Capital Raised
          </div>
        </div>
        {/* Stat 3 */}
        <div className="bg-white/5 p-6 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
          <div
            ref={(el) => {
              numberRefs.current[2] = el;
            }}
            data-value="16"
            className="text-3xl text-brand-accent font-bold mb-1">
            0
          </div>
          <div className="text-sm text-gray-400 font-medium">
            M&A Transactions
          </div>
        </div>
        {/* Stat 4 */}
        <div className="bg-white/5 p-6 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
          <div
            ref={(el) => {
              numberRefs.current[3] = el;
            }}
            data-value="20"
            data-suffix="+"
            className="text-3xl text-brand-accent font-bold mb-1">
            0
          </div>
          <div className="text-sm text-gray-400 font-medium">
            Years Experience
          </div>
        </div>
      </div>
    </div>
  );
};
