"use client";

import { ArrowUp } from "lucide-react";
import { ScrollSmoother } from "@/lib/gsap";

export const ScrollTopButton: React.FC = () => {
  const scrollToTop = () => {
    const smoother = ScrollSmoother.get();
    smoother?.scrollTo(0, true);
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="hidden md:flex w-11 h-11 rounded-full bg-white/5 border border-white/5 items-center justify-center text-gray-400 hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-[background,color,border-color] duration-300"
      aria-label="Back to top">
      <ArrowUp size={18} />
    </button>
  );
};
