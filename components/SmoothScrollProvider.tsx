"use client";

import React, { useState, useLayoutEffect, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap, ScrollTrigger, ScrollSmoother } from "@/lib/gsap";
import { SplashScreen } from "./SplashScreen";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

/**
 * Global GSAP Configuration
 * - force3D: Ensures hardware acceleration for smoother animations
 * - nullTargetWarn: Prevents console warnings for dynamic React rendering
 */
gsap.config({
  force3D: true,
  nullTargetWarn: false,
});

export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // Always show splash screen on initial load/refresh
  const [showSplash, setShowSplash] = useState(true);
  const smoothScrollRef = useRef<ScrollSmoother | null>(null);
  const pathname = usePathname();

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  // Scroll to top on route change
  useEffect(() => {
    const smoother = smoothScrollRef.current;
    if (smoother) {
      smoother.scrollTo(0, false); // Instant scroll to top, no animation
    }
  }, [pathname]);

  useLayoutEffect(() => {
    // Initialize ScrollSmoother after component mounts
    // Wait a bit for the DOM to be ready
    const timer = setTimeout(() => {
      /**
       * Global ScrollTrigger Configuration
       * Set the default scroller AFTER the DOM elements exist
       * This prevents null reference errors
       */
      ScrollTrigger.defaults({
        scroller: "#smooth-content",
      });

      smoothScrollRef.current = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1, // How long (in seconds) it takes to "catch up" to native scroll - faster than 1.2
        effects: true, // Enable data-speed and data-lag attributes
        smoothTouch: false, // Disable smooth scrolling on touch devices
        normalizeScroll: false, // Disabled to respect smoothTouch: false on mobile
      });
    }, 100);

    const smRef = smoothScrollRef.current;

    return () => {
      clearTimeout(timer);
      smRef?.kill();
    };
  }, []);

  return (
    <>
      {/* Splash screen */}
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}

      {/* Main content */}
      <div id="smooth-wrapper">
        <div id="smooth-content">{children}</div>
      </div>
    </>
  );
}
