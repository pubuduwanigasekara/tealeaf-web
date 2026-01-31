import React from 'react';

export const WhyTealeaf: React.FC = () => {
  return (
    <section
      id="why"
      className="py-24 bg-brand-dark text-brand-cream relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#00429B"
            d="M42.7,-62.9C50.9,-52.8,50.1,-34.4,51.7,-19.2C53.4,-4,57.4,8,54.5,18.7C51.6,29.3,41.8,38.7,30.8,45.8C19.8,52.9,7.6,57.7,-3.4,62.4C-14.4,67.1,-24.1,71.7,-35.1,66.6C-46.1,61.5,-58.4,46.7,-65.4,30.3C-72.4,13.9,-74.2,-4.1,-67.9,-19.6C-61.6,-35.1,-47.2,-48.1,-33.5,-56.3C-19.8,-64.5,-6.8,-67.9,5.2,-75.1L17.2,-82.3"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5">
            <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-8">
              Founders bring passion.
              <br />
              <span className="text-brand-accent">We bring insights.</span>
            </h2>
          </div>
          <div className="md:col-span-7 space-y-8 text-lg text-gray-300 font-light leading-relaxed">
            <p className="text-xl text-white font-medium border-l-4 border-brand-accent pl-6">
              Tealeaf Consulting is the strategic financial partner for
              venture-backed founders ready to scale boldly.
            </p>
            <p>
              Our mission is to build the financial backbone that transforms
              promising startups into market-leading companies. We don't just
              handle your finances; we architect the systems, strategies, and
              insights that fuel sustainable growth from seedling to successful
              exit.
            </p>
            <p>
              From fundraising preparation to building investor-ready financial
              infrastructure, we deliver the CFO-level expertise that gives
              founders complete confidence in their financial foundation. Our
              comprehensive approach ensures every financial decision
              strengthens your competitive position and accelerates your path to
              scale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
