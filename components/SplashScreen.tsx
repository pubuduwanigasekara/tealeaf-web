import React, { useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import { useIsMobile } from "@/lib/hooks";

import logoSmall from "@/public/static/logo_small2.png";

interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useGSAP(
    () => {
      if (
        !containerRef.current ||
        !logoRef.current ||
        !lineRef.current ||
        !textRef.current
      ) {
        return;
      }

      let titleSplit: SplitType | null = null;

      const tl = gsap.timeline({
        onComplete: () => {
          onComplete();
        },
      });

      // 1. Initial State
      gsap.set(containerRef.current, { yPercent: 0 });
      gsap.set(logoRef.current, { opacity: 0, y: 20 });
      gsap.set(lineRef.current, { scaleX: 0, transformOrigin: "left" });

      let textTarget: HTMLElement | HTMLElement[] | null = textRef.current;
      let textFromVars: gsap.TweenVars = { opacity: 0, y: 20 };
      let textToVars: gsap.TweenVars = {
        duration: 0.7,
        opacity: 1,
        y: 0,
        ease: "back.out(1.2)",
      };

      if (!isMobile) {
        titleSplit = new SplitType(textRef.current, {
          types: "words,chars",
        });

        // Keep parent visible so split text is rendered, but chars start invisible
        gsap.set(textRef.current, { opacity: 1 });

        textTarget = titleSplit.chars;
        textFromVars = { opacity: 0, y: 40 };
        textToVars = {
          duration: 0.7,
          opacity: 1,
          y: 0,
          stagger: 0.02,
          ease: "back.out(1.2)",
        };
      } else {
        // Mobile: ensure parent starts invisible and set up for simple fade
        gsap.set(textRef.current, { opacity: 0, y: 20 });
      }

      // 2. Animation Sequence (Optimized for faster display)
      tl.to(logoRef.current, {
        duration: 0.8,
        opacity: 1,
        y: 0,
        ease: "power3.out",
      })
        .fromTo(textTarget, textFromVars, textToVars, "-=0.6")
        // Draw the accent line
        .to(
          lineRef.current,
          {
            duration: 0.8,
            scaleX: 1,
            ease: "expo.inOut",
          },
          "-=0.5"
        )
        // Hold for a moment to let the brand register and rest of the page load
        .to({}, { duration: 1 })
        // Exit animation: Line zips away, text fades
        .to([logoRef.current, textRef.current], {
          duration: 0.4,
          opacity: 0,
          y: -20,
          ease: "power2.in",
        })
        .to(
          lineRef.current,
          {
            duration: 0.3,
            scaleX: 0,
            transformOrigin: "right",
            ease: "power2.in",
          },
          "<"
        )
        // The Curtain Lift
        .to(containerRef.current, {
          duration: 0.9,
          yPercent: -100,
          ease: "power4.inOut", // Dramatic, elegant easing
        });

      return () => {
        if (titleSplit) titleSplit.revert();
      };
    },
    { scope: containerRef, dependencies: [isMobile] }
  );

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-linear-to-br from-[#fffdfa] via-[#fff5f0] to-[#fceee9] text-brand-dark overflow-hidden translate-y-[0%]">
      {/* Background decoration */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Warm main glow - Top Right */}
        <div className="absolute -top-[10%] -right-[10%] w-[80vh] h-[80vh] rounded-full bg-linear-to-b from-brand-accent/10 to-transparent blur-3xl opacity-60"></div>

        {/* Secondary glow - Center Left - subtle depth */}
        <div className="absolute top-[40%] -left-[10%] w-[60vh] h-[60vh] rounded-full bg-brand-primary/5 blur-3xl opacity-30"></div>

        {/* Bottom warmth - Bottom Right */}
        <div className="absolute -bottom-[20%] right-[20%] w-[70vh] h-[70vh] rounded-full bg-[#ffecd6]/50 blur-[100px] pointer-events-none"></div>

        <svg
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 hidden lg:block">
          <circle
            cx="90%"
            cy="10%"
            r="400"
            className="stroke-brand-primary/10"
            strokeWidth="2"
            fill="none"
          />
          <circle
            cx="10%"
            cy="90%"
            r="300"
            className="stroke-brand-primary/10"
            strokeWidth="2"
            fill="none"
          />
        </svg>

        <svg
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 hidden sm:block lg:hidden">
          <circle
            cx="90%"
            cy="10%"
            r="230"
            className="stroke-brand-primary/10"
            strokeWidth="2"
            fill="none"
          />
          <circle
            cx="10%"
            cy="90%"
            r="200"
            className="stroke-brand-primary/10"
            strokeWidth="2"
            fill="none"
          />
        </svg>

        <svg
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 sm:hidden">
          <circle
            cx="90%"
            cy="10%"
            r="160"
            className="stroke-brand-primary/10"
            strokeWidth="2"
            fill="none"
          />
          <circle
            cx="10%"
            cy="90%"
            r="130"
            className="stroke-brand-primary/10"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      <div className="relative flex flex-col items-center justify-center p-10 z-10">
        <Image
          ref={logoRef}
          src={logoSmall}
          alt="Tealeaf Logo"
          className="h-16 w-auto mb-10 opacity-0 translate-y-[20px]"
          loading="eager"
        />

        <div className="overflow-hidden mb-2">
          <p
            ref={textRef}
            className="text-4xl md:text-5xl font-serif italic leading-normal! text-center sm:text-left text-brand-dark opacity-0 [&_.char]:opacity-0 [&_.char]:translate-y-[40px] [&_.char]:will-change-transform"
            aria-label="Tealeaf Consulting">
            Tealeaf Consulting
          </p>
        </div>

        {/* Accent Line */}
        <div
          ref={lineRef}
          className="h-1 bg-brand-accent w-24 md:w-32 rounded-full mt-6 scale-x-0 transform-origin-left"
        />
      </div>
    </div>
  );
};
