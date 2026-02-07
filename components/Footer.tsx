"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Linkedin, Mail, Check, ArrowUp } from "lucide-react";
import Link from "next/link";
import { ScrollSmoother } from "gsap/ScrollSmoother";

import logo from "@/public/static/logo2.png";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("hello@tealeafconsult.com").catch(() => {
      console.error("Failed to copy email");
    });
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    const smoother = ScrollSmoother.get();
    smoother?.scrollTo(0, true);
  };

  return (
    <footer className="bg-[#0b1120] text-white py-12 font-sans relative -mt-px">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              src={logo}
              alt="Tealeaf Logo"
              className="h-12 w-auto brightness-25 invert"
              loading="lazy"
            />
          </div>

          {/* Socials & Actions */}
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Link
              href="https://www.linkedin.com/in/angelajsweeney?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              className="w-12 h-12 md:w-11 md:h-11 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Linkedin">
              <Linkedin size={18} />
            </Link>
            <button
              type="button"
              onClick={handleCopy}
              className="relative w-12 h-12 md:w-11 md:h-11 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors text-gray-400 hover:text-white cursor-pointer"
              aria-label="Copy Email">
              {copied ? (
                <Check size={18} className="text-emerald-400" />
              ) : (
                <Mail size={18} />
              )}
              {copied && (
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-white text-gray-900 text-xs font-medium rounded shadow-lg whitespace-nowrap">
                  Copied!
                </span>
              )}
            </button>

            <div className="h-6 w-px bg-white/10 mx-1 hidden md:block"></div>

            <button
              type="button"
              onClick={scrollToTop}
              className="hidden md:flex w-12 h-12 md:w-11 md:h-11 rounded-full bg-white/5 border border-white/5 items-center justify-center text-gray-400 hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-[background,color,border-color] duration-300"
              aria-label="Back to top">
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 my-8"></div>

        {/* Copyright & Credits */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
          <p className="order-2 md:order-1">
            &copy; {currentYear} Tealeaf Consulting. All rights reserved.
          </p>
          <p className="order-1 md:order-2 flex items-center gap-1">
            Developed by
            <Link
              href="https://en2h.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-200 transition-colors font-medium">
              EN2H
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};
