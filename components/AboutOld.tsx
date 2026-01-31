import React from 'react'

export const About: React.FC = () => {
  // Using a direct string path instead of an ESM import
  const founderImgPath = './assets/founder.png'

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-brand-primary/5 rounded-2xl transform rotate-3 scale-105"></div>
              <img
                src={founderImgPath}
                alt="Angela Sweeney"
                onError={e => {
                  ;(e.target as HTMLImageElement).src =
                    'https://picsum.photos/800/800?grayscale'
                }}
                className="w-full h-full object-cover rounded-2xl relative z-10 shadow-xl filter grayscale hover:grayscale-0 transition-[filter] duration-700"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-6 rounded-xl z-20 shadow-lg border-l-4 border-brand-accent">
                <h4 className="text-xl font-serif font-bold text-brand-dark">
                  Angela Sweeney
                </h4>
                <p className="text-sm text-brand-accent font-medium uppercase tracking-wide">
                  Founder & Visionary CFO
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="mb-8">
              <h2 className="text-sm font-bold tracking-widest text-brand-accent uppercase mb-3">
                About Us
              </h2>
              <h3 className="text-4xl md:text-5xl font-serif text-brand-dark mb-6">
                Why Founders Trust Us
              </h3>
            </div>

            <div className="space-y-6 text-brand-gray text-lg leading-relaxed">
              <p>
                When you partner with Tealeaf Consulting, you gain more than
                financial expertise. You gain a strategic ally who thinks like a
                CFO, operates like a builder, and helps founders scale with
                intention.
              </p>
              <p>
                Founded by Angela Sweeney, a visionary CFO and strategic
                operator, Tealeaf brings over two decades of hands-on experience
                across{' '}
                <span className="font-semibold text-brand-dark">
                  14 startups
                </span>{' '}
                and{' '}
                <span className="font-semibold text-brand-dark">
                  16 M&A transactions
                </span>
                .
              </p>
              <p>
                With more than{' '}
                <span className="text-brand-primary font-bold">
                  $100 million
                </span>{' '}
                raised in capital and a track record spanning SaaS, biotech,
                fintech, and emerging technologies, Angela builds the financial
                and operational frameworks that turn ambition into sustainable
                systems that actually scale.
              </p>
              <p className="font-medium italic text-brand-dark">
                "We believe that growth should be deliberate, financially sound,
                well-supported, and most importantly - built to last."
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-gray-100 pt-8">
              <div>
                <div className="text-3xl font-serif text-brand-primary font-bold">
                  20+
                </div>
                <div className="text-xs text-brand-gray uppercase tracking-wide mt-1">
                  Years Experience
                </div>
              </div>
              <div>
                <div className="text-3xl font-serif text-brand-primary font-bold">
                  $100M+
                </div>
                <div className="text-xs text-brand-gray uppercase tracking-wide mt-1">
                  Capital Raised
                </div>
              </div>
              <div>
                <div className="text-3xl font-serif text-brand-primary font-bold">
                  16
                </div>
                <div className="text-xs text-brand-gray uppercase tracking-wide mt-1">
                  M&A Transactions
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
