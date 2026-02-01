"use client";

import React from "react";
import { Button } from "./Button";
import { ScrollSmoother } from "@/lib/gsap";

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Video Background - Light Mode Approach */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover opacity-45 grayscale-40">
          <source src="/static/hero.mp4" type="video/mp4" />
        </video>
        {/* Creative Gradient Overlay: 
            Angled gradient (135deg) - a little towards top-left to bottom-right.
            Starts solid cream on left/top-left for text readability, 
            blends into a soft cream, 
            and ends with a warm accent tint on the bottom-right. 
        */}
        <div className="absolute inset-0 bg-linear-135 from-brand-cream via-brand-cream/90 to-brand-accent/20 z-10 mix-blend-normal" />

        {/* Subtle radial glow of accent color from the top right to enhance the creative feel */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-linear-to-bl from-brand-accent/10 via-transparent to-transparent z-10" />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-10 2xl:col-span-9 space-y-8 2xl:space-y-12">
          <div className="hidden sm:inline-flex items-center px-3 py-1 2xl:px-4 2xl:py-2 bg-brand-primary/10 backdrop-blur-sm border border-brand-primary/10 text-brand-primary rounded-full text-sm 2xl:text-base font-semibold tracking-wide uppercase shadow-sm">
            <span className="relative flex h-2 w-2 mr-3">
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent animate-pulse"></span>
            </span>
            Financial Leadership
          </div>
          <h1 className="text-5xl md:text-7xl 2xl:text-8xl font-serif text-brand-dark leading-[1.1] 2xl:leading-[1.05]">
            Helping founders <br />
            <span className="text-brand-primary italic">
              scale with intention.
            </span>
          </h1>
          <p className="text-lg md:text-xl 2xl:text-2xl text-brand-gray leading-relaxed! max-w-2xl 2xl:max-w-4xl text-pretty tracking-wide">
            We provide strategic financial leadership that transforms your
            vision into a fundable, scalable business. With
            <span className="relative inline-block px-1 mx-1">
              <span className="relative z-10 font-semibold text-brand-dark">
                20+ years
              </span>
              <svg
                className="absolute -bottom-1 left-0 w-full h-2 z-0 text-brand-accent/40"
                viewBox="0 0 100 10"
                preserveAspectRatio="none">
                <path
                  d="M0 5 Q 25 0 50 5 T 100 5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            of experience, we build the financial foundation that gives you the
            confidence to scale boldly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Button
              variant="primary"
              icon
              onClick={() => {
                const smoother = ScrollSmoother.get();
                smoother?.scrollTo("#contact", true, "top 80px");
              }}
              className="hidden sm:inline-flex 2xl:py-4">
              Book a Founder Financial Readiness Call
            </Button>
            <Button
              variant="primary"
              icon
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="sm:hidden">
              Book a Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
