import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Linkedin, Mail } from 'lucide-react';
import { gsap, ScrollSmoother } from '@/lib/gsap';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import { useGSAP } from '@gsap/react';

import { Button } from './ui/Button';

const navLinks = [
  { name: 'Why Tealeaf', href: '#why', id: 'why', offset: 80 },
  { name: 'Services', href: '#services', id: 'services' },
  { name: 'About Us', href: '#about', id: 'about', offset: 80 },
  {
    name: 'Testimonials',
    href: '#testimonials',
    id: 'testimonials',
    offset: 80,
  },
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  isScrolled: boolean;
  onNavigate: (id: string) => void;
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
  const paddingClass = isScrolled ? 'py-4' : 'py-6';

  useGSAP(
    () => {
      // Initialize timeline in paused state
      timeline.current = gsap
        .timeline({ paused: true })
        .to(containerRef.current, {
          y: '0%',
          duration: 1.2, // Slowed down from 0.6
          ease: 'power4.inOut',
        })
        // Animate links
        .from(
          '.mobile-link-item',
          {
            y: 40,
            opacity: 0,
            stagger: 0.15, // Slowed stagger
            duration: 1.0, // Slowed down from 0.5
            ease: 'power3.out',
          },
          '-=0.8'
        ) // Adjusted overlap
        // Animate footer
        .from(
          footerRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 1.0, // Slowed down from 0.5
            ease: 'power2.out',
          },
          '-=0.8'
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
          'w-full flex-none transition-padding duration-300',
          paddingClass,
          'relative z-10'
        )}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl flex items-center gap-3">
            <img
              src="/static/logo.png"
              alt="Tealeaf Logo"
              className="h-10 sm:h-12 w-auto"
              fetchPriority="high"
            />
          </div>

          {/* Close Button */}
          <button
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
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              to={link.href}
              className="mobile-link-item group flex items-baseline gap-4 sm:gap-6 pl-2 will-change-transform"
              onClick={(e) => handleLinkClick(e, link.id, link.offset)}>
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
                  onNavigate('contact', 80);
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
  const [scrollbarWidth, setScrollbarWidth] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Scrollbar Width compensation & Body Lock
  useEffect(() => {
    if (isMobileMenuOpen) {
      const width = window.innerWidth - document.documentElement.clientWidth;
      setScrollbarWidth(width);
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${width}px`;
    } else {
      const timer = setTimeout(() => {
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
        setScrollbarWidth(0);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isMobileMenuOpen]);

  // Unified navigation handler
  const handleNavigation = (id: string, offset?: number) => {
    if (location.pathname !== '/') {
      // If we are not on home, navigate to home and pass the target ID in state
      navigate('/', { state: { scrollTo: id } });
    } else {
      const smoother = ScrollSmoother.get();
      smoother?.scrollTo(`#${id}`, true, offset ? `top ${offset}px` : 'top');
    }
  };

  const paddingClass = isScrolled ? 'py-4' : 'py-6';

  // Background Logic:
  const bgClass = isScrolled
    ? 'bg-brand-cream/95 backdrop-blur-md shadow-sm'
    : 'bg-transparent';

  return (
    <>
      <nav
        data-scroll-section="false"
        className={twMerge(
          'fixed w-full z-40 transition-all duration-300',
          paddingClass,
          bgClass
        )}
        style={{ paddingRight: isMobileMenuOpen ? `${scrollbarWidth}px` : '' }}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation('hero');
            }}
            className="flex items-center gap-3 transition-colors">
            <img
              src="/static/logo.png"
              alt="Tealeaf Logo"
              className="h-12 w-auto"
              fetchPriority="high"
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation(link.id, link.offset);
                }}
                className={twMerge(
                  'text-sm font-medium transition-colors uppercase tracking-wider',
                  isScrolled ? 'text-brand-dark/80' : 'text-brand-dark/90'
                )}>
                {link.name}
              </Link>
            ))}
            <Button
              variant="primary"
              onClick={() => handleNavigation('contact', 80)}>
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
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
