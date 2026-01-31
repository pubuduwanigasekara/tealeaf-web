import React from 'react';
import { Button } from './ui/Button';
import { BackgroundPattern } from './ui/BackgroundPattern';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background pattern in Primary Blue */}
      <BackgroundPattern className="text-brand-primary" />

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-block px-3 py-1 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-semibold tracking-wide uppercase">
            Financial Leadership
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-brand-dark leading-[1.1]">
            Helping founders <br />
            <span className="text-brand-accent italic">
              scale with intention.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-brand-gray leading-relaxed max-w-2xl text-pretty">
            We provide strategic financial leadership that transforms your
            vision into a fundable, scalable business. With
            <span className="relative inline-block px-1 mx-1">
              <span className="relative z-10 font-semibold text-brand-dark">
                20+ years
              </span>
              <svg
                className="absolute -bottom-1 left-0 w-full h-2 z-0 text-brand-accent/30"
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
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="primary"
              icon
              onClick={() =>
                document
                  .getElementById('contact')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }>
              Schedule Discovery Call
            </Button>
          </div>
        </div>

        <div className="relative hidden md:block">
          <div className="relative w-full aspect-[4/5] max-w-md mx-auto">
            {/* Decorative abstract elements - Mix of Primary and Accent */}
            <div className="absolute -top-10 -right-10 w-40 h-40 border border-brand-accent/30 rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 border border-brand-primary/20 rounded-full" />

            {/* Experience Badge Overlay */}
            <div className="absolute -right-6 top-1/4 z-30 bg-white p-4 rounded-xl shadow-xl border-l-4 border-brand-accent transform rotate-3 hidden lg:block">
              <div className="text-2xl font-serif font-bold text-brand-primary">
                20+
              </div>
              <div className="text-[10px] uppercase tracking-tighter font-bold text-brand-gray">
                Years of Strategic <br />
                Leadership
              </div>
            </div>

            {/* Use string paths for local assets in this environment */}
            <img
              src="./assets/hero-bg.jpg"
              onError={(e) => {
                // Fallback if the local asset doesn't exist yet
                (e.target as HTMLImageElement).src =
                  'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop';
              }}
              alt="Strategic Planning"
              className="w-full h-full object-cover rounded-lg shadow-2xl relative z-10 filter grayscale contrast-110"
            />

            {/* Overlay gradient - Primary Blue */}
            <div className="absolute inset-0 bg-brand-primary/20 rounded-lg z-20 pointer-events-none mix-blend-multiply"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
