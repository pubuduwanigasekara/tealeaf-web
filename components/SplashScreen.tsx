import React, { useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";

import logoSmall from "@/public/static/logo_small2.png";

interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) {
        return;
      }

      // 1. Initial State
      gsap.set(containerRef.current, { yPercent: 0 });

      // Draw the accent line
      gsap
        .timeline({
          onComplete: () => {
            onComplete();
          },
        })
        // Hold for a moment to let the brand register
        .to({}, { duration: 2 })
        // The Curtain Lift
        .to(containerRef.current, {
          duration: 0.9,
          yPercent: -100,
          ease: "power4.inOut", // Dramatic, elegant easing
        });
    },
    { scope: containerRef }
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
          src={logoSmall}
          alt="Tealeaf Logo"
          className="h-16 w-auto mb-10"
          loading="eager"
        />

        <div className="overflow-hidden mb-2">
          <p
            className="text-4xl md:text-5xl font-serif italic leading-normal! text-center sm:text-left text-brand-dark"
            aria-label="Tealeaf Consulting">
            Tealeaf Consulting
          </p>
        </div>

        {/* Accent Line */}
        <div className="h-1 bg-brand-accent w-24 md:w-32 rounded-full mt-6" />
      </div>
    </div>
  );
};
