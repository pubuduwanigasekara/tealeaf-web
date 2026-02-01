"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { Menu, X, Linkedin, Mail } from "lucide-react";
import { gsap, ScrollSmoother } from "@/lib/gsap";
import { twMerge } from "tailwind-merge";
import { useGSAP } from "@gsap/react";

import { Button } from "./Button";
import logo from "@/public/static/logo2.png";

const NAV_LINKS = [
  { name: "Why Tealeaf", href: "#why", id: "why", offset: 80 },
  { name: "Services", href: "#services", id: "services" },
  { name: "About Us", href: "#about", id: "about", offset: 80 },
  {
    name: "Testimonials",
    href: "#testimonials",
    id: "testimonials",
    offset: 80,
  },
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  isScrolled: boolean;
  onNavigate: (id: string, offset?: number) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  isScrolled,
  onNavigate,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);

  // Sync padding with main navbar
  const paddingClass = isScrolled ? "py-4" : "py-6";

  useGSAP(
    () => {
      // Initialize timeline in paused state
      timeline.current = gsap
        .timeline({ paused: true })
        .to(containerRef.current, {
          y: "0%",
          duration: 1.2, // Slowed down from 0.6
          ease: "power4.inOut",
        })
        // Animate links
        .from(
          ".mobile-link-item",
          {
            y: 40,
            opacity: 0,
            stagger: 0.15, // Slowed stagger
            duration: 1.0, // Slowed down from 0.5
            ease: "power3.out",
          },
          "-=0.8"
        ) // Adjusted overlap
        // Animate footer
        .from(
          footerRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 1.0, // Slowed down from 0.5
            ease: "power2.out",
          },
          "-=0.8"
        );
    },
    { scope: containerRef, dependencies: [] }
  );

  useEffect(() => {
    if (isOpen) {
      timeline.current?.timeScale(1).play();
    } else {
      timeline.current?.timeScale(1.5).reverse(); // Make closing slightly faster than opening
    }
  }, [isOpen]);

  const handleLinkClick = (
    e: React.MouseEvent,
    id: string,
    offset?: number
  ) => {
    e.preventDefault();
    onClose();
    onNavigate(id, offset);
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 bg-linear-to-br from-[#fffdfa] via-[#fff5f0] to-[#fceee9] text-brand-dark flex flex-col h-dvh -translate-y-full transform-gpu overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Warm main glow - Top Right */}
        <div className="absolute -top-[10%] -right-[10%] w-[80vh] h-[80vh] rounded-full bg-linear-to-b from-brand-accent/10 to-transparent blur-3xl opacity-60"></div>

        {/* Secondary glow - Center Left - subtle depth */}
        <div className="absolute top-[40%] -left-[10%] w-[60vh] h-[60vh] rounded-full bg-brand-primary/5 blur-3xl opacity-30"></div>

        {/* Bottom warmth - Bottom Right */}
        <div className="absolute -bottom-[20%] right-[20%] w-[70vh] h-[70vh] rounded-full bg-[#ffecd6]/50 blur-[100px] pointer-events-none"></div>
      </div>

      {/* 
        Independent Header Section 
        We mimic the main Navbar structure here to ensure perfect alignment.
      */}
      <div
        className={twMerge(
          "w-full flex-none transition-padding duration-300",
          paddingClass,
          "relative z-10"
        )}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl flex items-center gap-3">
            <Image
              src={logo}
              alt="Tealeaf Logo"
              className="h-10 sm:h-12 w-auto"
              loading="eager"
            />
          </div>

          {/* Close Button */}
          <button
            type="button"
            className="p-2 text-brand-dark hover:text-brand-accent transition-colors"
            onClick={onClose}
            aria-label="Close menu">
            <X size={28} />
          </button>
        </div>
      </div>

      {/* Scrollable Content Container */}
      <div className="container mx-auto px-6 flex-1 overflow-y-auto overflow-x-hidden flex flex-col relative z-10">
        {/* Navigation Links */}
        <div
          ref={contentRef}
          className="flex-1 flex flex-col justify-center space-y-6 min-h-[300px]">
          {NAV_LINKS.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              className="mobile-link-item group flex items-baseline gap-4 sm:gap-6 pl-2 will-change-transform"
              onClick={(e: React.MouseEvent) =>
                handleLinkClick(e, link.id, link.offset)
              }>
              <span className="text-xl sm:text-2xl font-serif italic text-brand-accent font-medium min-w-[2ch]">
                0{index + 1}
              </span>
              <span className="text-4xl sm:text-5xl md:text-6xl font-sans font-normal text-brand-dark group-hover:text-brand-accent transition-colors">
                {link.name}
              </span>
            </Link>
          ))}
        </div>

        {/* Footer / CTA Section */}
        <div
          ref={footerRef}
          className="pb-10 pt-8 flex-none will-change-transform">
          <div className="border-t border-brand-dark/10 w-full mb-8"></div>

          <div className="space-y-8">
            {/* Tagline */}
            <div>
              <p className="font-serif italic text-brand-gray/80 text-lg leading-relaxed">
                Strategic financial leadership for founders.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center gap-8">
              {/* Contact Button */}
              <Button
                variant="primary"
                className="w-full sm:w-fit py-4! px-20!"
                onClick={() => {
                  onClose();
                  onNavigate("contact", 80);
                }}>
                Contact Us
              </Button>

              {/* Bottom Row: Socials */}
              <div className="flex gap-6 text-brand-gray/40">
                <a
                  href="https://www.linkedin.com/in/angelajsweeney?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  className="hover:text-brand-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Linkedin">
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:hello@tealeafconsult.com"
                  className="hover:text-brand-primary transition-colors"
                  aria-label="Email">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle Body Lock
  useEffect(() => {
    if (isMobileMenuOpen) {
      const width = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${width}px`;
    } else {
      const timer = setTimeout(() => {
        document.body.style.overflow = "";
        document.body.style.paddingRight = "";
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isMobileMenuOpen]);

  // Calculate scrollbar width when needed
  const getScrollbarWidth = () => {
    return isMobileMenuOpen
      ? window.innerWidth - document.documentElement.clientWidth
      : 0;
  };

  // Unified navigation handler
  const handleNavigation = (id: string, offset?: number) => {
    if (pathname !== "/") {
      // If we are not on home, navigate to home and pass the target ID in state
      router.push(`/?scrollTo=${id}`);
    } else {
      const smoother = ScrollSmoother.get();
      smoother?.scrollTo(`#${id}`, true, offset ? `top ${offset}px` : "top");
    }
  };

  const paddingClass = isScrolled ? "py-4" : "py-6";

  // Background Logic:
  const bgClass = isScrolled
    ? "bg-brand-cream/95 backdrop-blur-md shadow-sm"
    : "bg-transparent";

  return (
    <>
      <nav
        data-scroll-section="false"
        className={twMerge(
          "fixed w-full z-40 transition-all duration-300",
          paddingClass,
          bgClass
        )}
        style={{
          paddingRight: isMobileMenuOpen ? `${getScrollbarWidth()}px` : "",
        }}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            onClick={(e: React.MouseEvent) => {
              e.preventDefault();
              handleNavigation("hero");
            }}
            className="flex items-center gap-3 transition-colors">
            <Image
              src={logo}
              alt="Tealeaf Logo"
              className="h-12 w-auto"
              loading="eager"
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e: React.MouseEvent) => {
                  e.preventDefault();
                  handleNavigation(link.id, link.offset);
                }}
                className={twMerge(
                  "text-sm font-medium transition-colors uppercase tracking-wider hover:text-brand-accent",
                  isScrolled ? "text-brand-dark/80" : "text-brand-dark/90"
                )}>
                {link.name}
              </Link>
            ))}
            <Button
              variant="primary"
              onClick={() => handleNavigation("contact", 80)}>
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden text-brand-dark hover:text-brand-accent transition-colors p-2"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu">
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Component */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        isScrolled={isScrolled}
        onNavigate={handleNavigation}
      />
    </>
  );
};
