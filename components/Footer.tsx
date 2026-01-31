import React from 'react'
import { Linkedin, ArrowUp, Mail } from 'lucide-react'
import { ScrollSmoother } from '@/lib/gsap'

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    const smoother = ScrollSmoother.get()
    smoother?.scrollTo(0, true)
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0b1120] text-white py-12 border-t border-white/5 font-sans relative">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center relative">
        {/* 1. Left Section: Logo */}
        <div className="flex flex-col items-center md:items-start gap-4 order-1">
          <div className="flex items-center gap-3">
            <img
              src="/static/logo.png"
              alt="Tealeaf Logo"
              className="h-12 w-auto brightness-25 invert"
              loading="lazy"
            />
          </div>
          {/* Tablet-Only Copyright: Stacked under logo (Matches "current" layout for tablet) */}
          <p className="hidden md:block lg:hidden text-gray-500 text-sm">
            &copy; {currentYear} Tealeaf Consulting. All rights reserved.
          </p>
        </div>

        {/* 2. Desktop-Only Copyright: Absolutely Centered */}
        <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 text-gray-400 text-sm whitespace-nowrap">
          &copy; {currentYear} Tealeaf Consulting. All rights reserved.
        </div>

        {/* 3. Right Section: Socials & Actions */}
        <div className="flex items-center gap-4 order-2 md:order-last mt-8 md:mt-0">
          <a
            href="https://www.linkedin.com/in/angelajsweeney?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Linkedin"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:hello@tealeafconsult.com"
            className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>

          {/* Divider - hidden on mobile */}
          <div className="h-6 w-px bg-white/10 mx-1 hidden md:block"></div>

          {/* Scroll To Top - Hidden on Mobile */}
          <button
            onClick={scrollToTop}
            className="hidden md:flex w-11 h-11 rounded-full bg-white/5 border border-white/5 items-center justify-center text-gray-400 hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-[background,color,border-color] duration-300"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>

        {/* 4. Mobile-Only Copyright: Bottom of stack */}
        <p className="md:hidden order-3 mt-8 text-gray-400 text-sm text-center">
          &copy; {currentYear} Tealeaf Consulting.
          <br />
          All rights reserved.
        </p>
      </div>
    </footer>
  )
}
