"use client";

import React, { useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import { useIsMobile } from "@/lib/hooks";

const CallToActionBackgroundDesktop: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useGSAP(
    () => {
      // Setup quick setters for performance
      const xTo = gsap.quickTo(svgRef.current, "x", {
        duration: 1.2,
        ease: "power2",
      });
      const yTo = gsap.quickTo(svgRef.current, "y", {
        duration: 1.2,
        ease: "power2",
      });
      const skewTo = gsap.quickTo(svgRef.current, "skewX", {
        duration: 1.5,
        ease: "power2",
      });
      const rotateTo = gsap.quickTo(svgRef.current, "rotation", {
        duration: 1.5,
        ease: "power2",
      });

      const handleMouseMove = (e: MouseEvent) => {
        if (!containerRef.current) return;

        const parent =
          containerRef.current.closest("section") ||
          containerRef.current.parentElement;
        if (!parent) return;

        const rect = parent.getBoundingClientRect();

        const isInside =
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom;

        if (isInside) {
          const { innerWidth, innerHeight } = window;
          const startX = innerWidth / 2;
          const startY = innerHeight / 2;

          // Normalized values (-1 to 1)
          const xNorm = (e.clientX - startX) / startX;
          const yNorm = (e.clientY - startY) / startY;

          // Parallax Effect (Opposite movement = depth)
          // Moves more dramatically now
          xTo(xNorm * -40);
          yTo(yNorm * -20);

          // Lean/focus effect
          // Skew more aggressively
          skewTo(xNorm * 10); // Max 10deg skew

          // More rotation for organic feel
          rotateTo(xNorm * 2);
        } else {
          xTo(0);
          yTo(0);
          skewTo(0);
          rotateTo(0);
        }
      };

      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="absolute w-full h-full left-0 top-[5%] z-0 opacity-10">
      <svg
        ref={svgRef}
        className="w-full h-full origin-bottom"
        viewBox="0 0 100 100"
        preserveAspectRatio="none">
        <path d="M0 100 C 20 0 50 0 100 100 Z" fill="#00429B" />
      </svg>
    </div>
  );
};

CallToActionBackgroundDesktop.displayName = "CallToActionBackgroundDesktop";

export const CallToActionBackground: React.FC = () => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="absolute w-full h-1/2 left-0 bottom-0 z-0 opacity-10">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none">
          <path d="M0 100 C 20 0 50 0 100 100 Z" fill="#00429B" />
        </svg>
      </div>
    );
  }

  return <CallToActionBackgroundDesktop />;
};
