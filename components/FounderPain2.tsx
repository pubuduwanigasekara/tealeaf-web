import React, { useLayoutEffect, useRef } from "react";
import {
  MessageCircleQuestion,
  TrendingDown,
  FileSpreadsheet,
  UserCog,
  ArrowRight,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const painPoints = [
  {
    id: 1,
    text: "Investors asking questions you can’t confidently answer.",
    icon: MessageCircleQuestion,
  },
  {
    id: 2,
    text: "Cash burn feels unclear month-to-month.",
    icon: TrendingDown,
  },
  {
    id: 3,
    text: "Financials held together by spreadsheets and workarounds.",
    icon: FileSpreadsheet,
  },
  {
    id: 4,
    text: "You know you need CFO-level insight, just not full-time.",
    icon: UserCog,
  },
];

export const FounderPain: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Title Animation
      const title = titleRef.current;
      if (title) {
        // Set visible immediately before split to avoid issues, but start with opacity 0 in CSS via initial render or set here
        gsap.set(title, { opacity: 1 });
        const titleSplit = new SplitType(title, { types: "words,chars" });

        gsap.fromTo(
          titleSplit.chars,
          { y: 30, opacity: 0 },
          {
            scrollTrigger: {
              trigger: title,
              start: "top 80%",
            },
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.02,
            ease: "back.out(1.2)",
          },
        );
      }

      // 2. Rows Animation
      const rows = gsap.utils.toArray<HTMLElement>(".pain-row");

      rows.forEach((row) => {
        const icon = row.querySelector(".pain-icon");
        const text = row.querySelector(".pain-text");

        // Initial states
        gsap.set(icon, { scale: 0, opacity: 0 });

        if (text) {
          const split = new SplitType(text as HTMLElement, { types: "words" });
          // Ensure words are hidden initially
          gsap.set(split.words, { opacity: 0, y: 15 });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: row,
              start: "top 80%", // Trigger slightly earlier
            },
          });

          // Icon Pop
          tl.to(icon, {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
          });

          // Word by word reveal
          tl.to(
            split.words,
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              stagger: 0.04,
              ease: "power2.out",
            },
            "-=0.4",
          );
        }
      });

      // 3. CTA Animation
      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: listRef.current,
              start: "bottom 80%",
            },
          },
        );
      }
    }, containerRef);

    // Refresh needed for SplitType calculation sometimes
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    return () => {
      ctx.revert();
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div ref={containerRef} className="container mx-auto px-6 relative z-10">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl font-serif text-brand-dark text-center mb-20 opacity-0 [&>div]:will-change-transform"
        >
          Does This Sound Familiar?
        </h2>

        <div
          ref={listRef}
          className="flex flex-col gap-12 max-w-3xl mx-auto mb-20"
        >
          {painPoints.map((point) => (
            <div
              key={point.id}
              className="pain-row flex items-center gap-6 md:gap-8 group"
            >
              {/* Icon */}
              <div className="pain-icon shrink-0 w-16 h-16 rounded-2xl bg-brand-cream border border-brand-dark/5 flex items-center justify-center text-brand-accent shadow-sm group-hover:bg-brand-accent group-hover:text-white transition-colors duration-500">
                <point.icon size={32} strokeWidth={1.5} />
              </div>

              {/* Text */}
              <p className="pain-text text-2xl md:text-3xl font-light text-brand-dark leading-tight [&>div]:will-change-transform">
                {point.text}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div ref={ctaRef} className="flex justify-center opacity-0">
          <button
            onClick={() =>
              document
                .getElementById("why")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group relative flex items-center gap-4 py-4 px-8 rounded-full transition-colors duration-500 hover:bg-brand-cream/50"
          >
            <span className="text-2xl md:text-3xl font-serif italic text-brand-gray group-hover:text-brand-primary transition-colors duration-300">
              You are not alone.
            </span>

            <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-full border border-brand-dark/10 text-brand-accent bg-white shadow-sm transition-all duration-300 transform-gpu will-change-transform group-hover:scale-110 group-hover:border-brand-accent group-hover:bg-brand-accent group-hover:text-white">
              <ArrowRight className="w-5 h-5" />
            </div>

            <span className="absolute bottom-4 left-8 right-20 h-1px bg-brand-primary/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left hidden md:block"></span>
          </button>
        </div>
      </div>
    </section>
  );
};
