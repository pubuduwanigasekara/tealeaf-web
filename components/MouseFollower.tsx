"use client";

import React, { useRef, useState, useEffect } from "react";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import { useIsMobile } from "@/lib/hooks/useMediaQuery";

export const MouseFollower: React.FC = () => {
  const isMobile = useIsMobile();
  const followerRef = useRef<HTMLDivElement>(null);
  const rippleRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Synced with SplashScreen duration approximately (3s hold + animations ~ 7-8s total)
  // User requested 10 seconds.
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  useGSAP(
    () => {
      if (isMobile || !isVisible) return;

      // 1. Initial State: Hidden and at current mouse position if known, else center/hidden
      gsap.set(followerRef.current, {
        xPercent: -50,
        yPercent: -50,
        scale: 0,
        opacity: 0,
      });

      // QuickTo setters for performance
      const xTo = gsap.quickTo(followerRef.current, "x", {
        duration: 0.6,
        ease: "power3",
      });
      const yTo = gsap.quickTo(followerRef.current, "y", {
        duration: 0.6,
        ease: "power3",
      });

      let isRevealed = false;

      const handleMouseMove = (e: MouseEvent) => {
        // 2. First Movement: Snap to position instantly and reveal
        if (!isRevealed) {
          gsap.set(followerRef.current, { x: e.clientX, y: e.clientY });
          isRevealed = true;

          gsap.to(followerRef.current, {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: "back.out(1.7)",
          });
        }

        // 3. Normal tracking
        xTo(e.clientX);
        yTo(e.clientY);
      };

      // Click ripple effect
      const handleClick = (e: MouseEvent) => {
        if (!rippleRef.current) return;

        // Move ripple to click spot instantly
        gsap.set(rippleRef.current, {
          x: e.clientX,
          y: e.clientY,
          xPercent: -50,
          yPercent: -50,
          scale: 0.5,
          opacity: 1,
          borderWidth: "2px",
        });

        // Animate expansion and fade
        gsap.to(rippleRef.current, {
          scale: 2.5,
          opacity: 0,
          borderWidth: "0px",
          duration: 0.8,
          ease: "power2.out",
        });
      };

      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("click", handleClick);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("click", handleClick);
      };
    },
    { dependencies: [isMobile, isVisible] }
  );

  if (isMobile || !isVisible) return null;

  return (
    <>
      {/* Main Follower Cursor */}
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-18 h-18 border border-brand-accent rounded-full pointer-events-none z-9999 hidden lg:block opacity-0 scale-0"
        style={{ willChange: "transform" }}
      />

      {/* Click Ripple */}
      <div
        ref={rippleRef}
        className="fixed top-0 left-0 w-18 h-18 border border-brand-accent/50 rounded-full pointer-events-none z-9998 opacity-0 hidden lg:block"
        style={{ willChange: "transform, opacity" }}
      />
    </>
  );
};
