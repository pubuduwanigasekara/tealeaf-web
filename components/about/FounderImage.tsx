"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import Image from "next/image";

import founderImg from "@/public/static/founder.png";

export const FounderImage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const dec1Ref = useRef<HTMLDivElement>(null);
  const dec2Ref = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useGSAP(
    () => {
      if (
        triggerRef.current &&
        dec1Ref.current &&
        dec2Ref.current &&
        imgRef.current
      ) {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: triggerRef.current,
              start: "top 60%",
              toggleActions: "play none none none",
            },
          })
          .to(imgRef.current, {
            duration: 1.2,
            filter: "grayscale(0)",
            ease: "power2.out",
          })
          .to(
            dec1Ref.current,
            {
              duration: 1.2,
              xPercent: -10,
              yPercent: -10,
              ease: "power2.out",
            },
            "<"
          )
          .to(
            dec2Ref.current,
            {
              duration: 1.2,
              xPercent: 10,
              yPercent: 10,
              ease: "power2.out",
            },
            "<"
          );
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
    <div
      ref={containerRef}
      className="relative flex items-center justify-center py-12 lg:py-0">
      <div ref={triggerRef} className="relative">
        <div className="relative w-full max-w-md aspect-4/5 rounded-2xl overflow-hidden shadow-2xl z-10">
          <Image
            ref={imgRef}
            src={founderImg}
            alt="Angela Sweeney"
            className="object-cover filter grayscale"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            loading="lazy"
          />

          {/* Gradient Overlay for text readability at bottom */}
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent opacity-90"></div>

          {/* Quote Text */}
          <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
            <p className="text-xl md:text-2xl font-serif font-medium italic text-white mb-4 leading-snug drop-shadow-sm">
              &quot;We believe that growth should be deliberate, financially
              sound, and built to last.&quot;
            </p>
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-8 bg-brand-accent"></div>
              <p className="text-brand-accent font-bold tracking-wide text-sm uppercase">
                Angela Sweeney, Founder
              </p>
            </div>
          </div>
        </div>

        {/* Decorative background elements behind image - aligned to the constrained image */}
        <div
          ref={dec1Ref}
          className="absolute z-[-1] top-0 left-0 w-full max-w-md h-full aspect-4/5 border-2 border-white/5 rounded-2xl hidden md:block"></div>
        <div
          ref={dec2Ref}
          className="absolute z-[-1] top-0 left-0 w-full max-w-md h-full aspect-4/5 border-2 border-white/5 rounded-2xl hidden md:block"></div>
      </div>
    </div>
  );
};
