import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";

interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  const brandName = "Tealeaf Consulting";

  useGSAP(
    () => {
      const tl = gsap.timeline({
        onComplete: () => {
          onComplete();
        },
      });

      // 1. Initial State
      gsap.set(containerRef.current, { yPercent: 0 });
      gsap.set(logoRef.current, { opacity: 0, y: 20 });
      gsap.set(lineRef.current, { scaleX: 0, transformOrigin: "left" });

      // Set initial state for characters
      gsap.set(".char", { opacity: 0, y: 40 });

      // 2. Animation Sequence
      tl.to(logoRef.current, {
        duration: 1.2,
        opacity: 1,
        y: 0,
        ease: "power3.out",
      })
        .to(
          ".char",
          {
            duration: 1.0,
            opacity: 1,
            y: 0,
            stagger: 0.03,
            ease: "back.out(1.2)",
          },
          "-=0.8",
        )
        // Draw the accent line
        .to(
          lineRef.current,
          {
            duration: 1.2,
            scaleX: 1,
            ease: "expo.inOut",
          },
          "-=0.6",
        )
        // Hold for a moment to let the brand register
        .to({}, { duration: 1.5 })
        // Exit animation: Line zips away, text fades
        .to([logoRef.current, textRef.current], {
          duration: 0.5,
          opacity: 0,
          y: -20,
          ease: "power2.in",
        })
        .to(
          lineRef.current,
          {
            duration: 0.4,
            scaleX: 0,
            transformOrigin: "right",
            ease: "power2.in",
          },
          "<",
        )
        // The Curtain Lift
        .to(containerRef.current, {
          duration: 1.2,
          yPercent: -100,
          ease: "power4.inOut", // Dramatic, elegant easing
        });
    },
    { scope: containerRef, dependencies: [] },
  );

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-linear-to-br from-[#fffdfa] via-[#fff5f0] to-[#fceee9] text-brand-dark overflow-hidden"
    >
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
          className="absolute inset-0 hidden lg:block"
        >
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
          className="absolute inset-0 hidden sm:block lg:hidden"
        >
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
          className="absolute inset-0 sm:hidden"
        >
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
        <img
          ref={logoRef}
          src="/static/logo_small.png"
          alt="Tealeaf Logo"
          className="h-16 w-auto mb-10"
          fetchPriority="high"
        />

        <div className="overflow-hidden mb-2">
          <h1
            ref={textRef}
            className="text-4xl md:text-5xl font-serif italic font-medium leading-normal! text-brand-dark"
            aria-label={brandName}
          >
            {brandName.split("").map((char, index) => (
              <span
                key={index}
                className="char inline-block whitespace-pre will-change-transform"
              >
                {char}
              </span>
            ))}
          </h1>
        </div>

        {/* Accent Line */}
        <div
          ref={lineRef}
          className="h-1 bg-brand-accent w-24 md:w-32 rounded-full mt-6"
        />
      </div>
    </div>
  );
};
