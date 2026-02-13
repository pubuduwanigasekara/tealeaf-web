"use client";

import React, { useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import {
  useIntersectionObserver,
  useIsMobile,
  useWindowFocus,
} from "@/lib/hooks";

const WhyTealeafBackgroundDesktop: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const blobRef = useRef<SVGPathElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  // Optimization hooks
  const isVisible = useIntersectionObserver({ ref: containerRef });
  const isFocused = useWindowFocus();
  const shouldAnimate = isVisible && isFocused;

  // console.log("shouldAnimate", shouldAnimate);

  // 1. Original (Round-ish)
  const path1 =
    "M42.7,-62.9C50.9,-52.8,50.1,-34.4,51.7,-19.2C53.4,-4,57.4,8,54.5,18.7C51.6,29.3,41.8,38.7,30.8,45.8C19.8,52.9,7.6,57.7,-3.4,62.4C-14.4,67.1,-24.1,71.7,-35.1,66.6C-46.1,61.5,-58.4,46.7,-65.4,30.3C-72.4,13.9,-74.2,-4.1,-67.9,-19.6C-61.6,-35.1,-47.2,-48.1,-33.5,-56.3C-19.8,-64.5,-6.8,-67.9,5.2,-75.1L17.2,-82.3";

  // 2. Subtle Variation 1
  const path2 =
    "M45.7,-64.1C55.6,-54.6,57.3,-36.4,56.1,-20.3C55,-4.2,51,9.8,45.3,21.9C39.6,34,32.3,44.2,22.4,51.1C12.5,58,-0.1,61.6,-12.3,59.3C-24.5,57,-36.3,48.8,-46,38.1C-55.7,27.4,-63.3,14.1,-62.7,0.9C-62.1,-12.2,-53.3,-25.2,-43.3,-35C-33.3,-44.8,-22.1,-51.5,-10.1,-55.8C1.9,-60.1,13.9,-61.9,26.9,-63.8Z";

  // 3. Subtle Variation 2
  const path3 =
    "M41.3,-59.5C52.6,-50.3,60.3,-37.2,62.8,-23.4C65.3,-9.6,62.6,4.9,56.1,17.2C49.6,29.5,39.3,39.6,27.9,46.5C16.5,53.4,4,57.1,-7.8,56.5C-19.6,56,-30.7,51.2,-40.5,43.3C-50.3,35.4,-58.8,24.3,-62.1,11.5C-65.4,-1.3,-63.5,-15.8,-56.3,-27.4C-49.1,-39,-36.6,-47.7,-24.1,-56.3C-11.6,-64.9,0.9,-73.4,13.4,-73.4C25.9,-73.4,38.4,-64.9,41.3,-59.5Z";

  // 4. Subtle Variation 3
  const path4 =
    "M39.6,-53.8C51.6,-46.3,61.8,-36.1,65.7,-23.6C69.6,-11.1,67.2,3.7,60.6,16.5C54,29.3,43.2,40.1,31.2,46.2C19.2,52.3,6,53.7,-6.2,52.8C-18.4,51.9,-29.6,48.7,-40.4,41.3C-51.2,33.9,-61.6,22.3,-65.1,8.7C-68.6,-4.9,-65.2,-20.5,-56.8,-32.4C-48.4,-44.3,-35,-52.5,-22.2,-57.4C-9.4,-62.3,2.8,-63.9,15.3,-63.8L27.8,-63.7Z";

  useGSAP(
    () => {
      // 1. Extreme Morphing Loop
      const tl = gsap.timeline({
        repeat: -1,
        yoyo: true,
        paused: !shouldAnimate,
      });

      tl.to(blobRef.current, {
        duration: 4,
        morphSVG: path2,
        ease: "sine.inOut",
      })
        .to(blobRef.current, {
          duration: 4,
          morphSVG: path3,
          ease: "sine.inOut",
        })
        .to(blobRef.current, {
          duration: 4,
          morphSVG: path4,
          ease: "sine.inOut",
        })
        .to(blobRef.current, {
          duration: 4,
          morphSVG: path1,
          ease: "sine.inOut",
        });

      // Store TL in a ref to access it outside useGSAP
      tlRef.current = tl;

      // 2. Strong Magnetic Snap & Rotation
      const xTo = gsap.quickTo(svgRef.current, "x", {
        duration: 1.2,
        ease: "power3.out",
      });
      const yTo = gsap.quickTo(svgRef.current, "y", {
        duration: 1.2,
        ease: "power3.out",
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
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;

          const distanceX = e.clientX - centerX;
          const distanceY = e.clientY - centerY;

          // Gentle Magnetic Pull
          // Move 15% of the distance towards the mouse for a floaty feel
          xTo(distanceX * 0.15);
          yTo(distanceY * 0.15);
        } else {
          xTo(0);
          yTo(0);
        }
      };

      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    },
    { scope: containerRef }
  );

  // Control animation playback
  React.useEffect(() => {
    const tl = tlRef.current;
    if (!tl) return;

    if (shouldAnimate) {
      tl.play();
    } else {
      tl.pause();
    }
  }, [shouldAnimate]);

  return (
    <div
      ref={containerRef}
      className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
      <svg
        ref={svgRef}
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        style={{ overflow: "visible" }}>
        <path
          ref={blobRef}
          fill="#00429B"
          d={path1}
          transform="translate(100 100)"
          style={{ transformOrigin: "center" }}
        />
      </svg>
    </div>
  );
};

WhyTealeafBackgroundDesktop.displayName = "WhyTealeafBackgroundDesktop";

const WhyTealeafBackground: React.FC = () => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#00429B"
            d="M42.7,-62.9C50.9,-52.8,50.1,-34.4,51.7,-19.2C53.4,-4,57.4,8,54.5,18.7C51.6,29.3,41.8,38.7,30.8,45.8C19.8,52.9,7.6,57.7,-3.4,62.4C-14.4,67.1,-24.1,71.7,-35.1,66.6C-46.1,61.5,-58.4,46.7,-65.4,30.3C-72.4,13.9,-74.2,-4.1,-67.9,-19.6C-61.6,-35.1,-47.2,-48.1,-33.5,-56.3C-19.8,-64.5,-6.8,-67.9,5.2,-75.1L17.2,-82.3"
            transform="translate(100 100)"
          />
        </svg>
      </div>
    );
  }

  return <WhyTealeafBackgroundDesktop />;
};

export default WhyTealeafBackground;
