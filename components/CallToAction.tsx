import React from 'react';
import { Button } from './ui/Button';
import { Check } from 'lucide-react';

export const CallToAction: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-24 bg-brand-dark text-white relative overflow-hidden lg:min-h-screen grid place-items-center">
      {/* Abstract Background */}
      <div className="absolute w-full h-1/2 left-0 bottom-0 lg:w-full lg:h-full lg:inset-0 z-0 opacity-10">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none">
          <path d="M0 100 C 20 0 50 0 100 100 Z" fill="#00429B" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">
            Ready to scale with{' '}
            <span className="text-brand-accent italic">intention?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            In 30 minutes, we'll identify gaps in your financial foundation and
            outline exactly what's needed to support your next stage of growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10 max-w-5xl mx-auto">
          <div className="space-y-6">
            <h3 className="text-2xl font-serif mb-6">
              In this session, we will:
            </h3>
            <ul className="space-y-4">
              {[
                'Assess your current financial infrastructure',
                'Identify your biggest growth opportunities',
                'Outline a clear path to bulletproof foundations',
                'Get personalized recommendations',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="bg-brand-accent/20 p-1 rounded-full mt-0.5">
                    <Check className="w-4 h-4 text-brand-accent" />
                  </div>
                  <p className="text-gray-300">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center md:text-left">
            <div className="bg-brand-cream/10 p-8 md:p-10 lg:p-12 rounded-xl text-center space-y-8">
              <h4 className="text-2xl md:text-3xl lg:text-4xl font-serif">
                Schedule your free discovery call
              </h4>
              <div className="space-y-4">
                <Button
                  variant="primary"
                  href="https://calendly.com/angelatealeaf/angela-tealeaf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden lg:inline-flex w-full text-lg py-4">
                  Book Consultation Now
                </Button>
                <Button
                  variant="primary"
                  href="https://calendly.com/angelatealeaf/angela-tealeaf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lg:hidden w-full text-lg py-4">
                  Book Now
                </Button>
                <p className="text-sm text-gray-400">
                  Or email us at{' '}
                  <a
                    href="mailto:hello@tealeafconsult.com"
                    className="text-brand-accent hover:text-white transition-colors">
                    hello@tealeafconsult.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
