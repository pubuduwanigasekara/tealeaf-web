import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Stats = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const statsGridRef = useRef<HTMLDivElement>(null);
  const numberRefs = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animate numbers
      numberRefs.current.forEach((el, index) => {
        if (!el) return;

        const finalValue = parseFloat(el.dataset.value || "0");
        const prefix = el.dataset.prefix || "";
        const suffix = el.dataset.suffix || "";

        const counter = { val: 0 };

        gsap.to(counter, {
          val: finalValue,
          duration: 2.5,
          delay: index * 0.3,
          ease: "power3.out", // Starts quickly, slows down at the end
          scrollTrigger: {
            trigger: statsGridRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          onUpdate: () => {
            el.innerText = `${prefix}${Math.floor(counter.val)}${suffix}`;
          },
        });
      });

      // Animate the cards entrance
      if (statsGridRef.current) {
        gsap.from(statsGridRef.current.children, {
          y: 20,
          opacity: 0,
          duration: 0.8,
          stagger: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: statsGridRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      }
    }, containerRef);

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    return () => {
      ctx.revert();
      clearTimeout(timer);
    };
  }, []);

  return (
    <div ref={containerRef}>
      <div ref={statsGridRef} className="grid sm:grid-cols-2 gap-4">
        {/* Stat 1 */}
        <div className="bg-white/5 p-6 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
          <div
            ref={(el) => {
              numberRefs.current[0] = el;
            }}
            data-value="14"
            data-suffix="+"
            className="text-3xl text-brand-accent font-bold mb-1"
          >
            0
          </div>
          <div className="text-sm text-gray-400 font-medium">
            Startups Scaled
          </div>
        </div>
        {/* Stat 2 */}
        <div className="bg-white/5 p-6 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
          <div
            ref={(el) => {
              numberRefs.current[1] = el;
            }}
            data-value="100"
            data-prefix="$"
            data-suffix="M+"
            className="text-3xl text-brand-accent font-bold mb-1"
          >
            $0
          </div>
          <div className="text-sm text-gray-400 font-medium">
            Capital Raised
          </div>
        </div>
        {/* Stat 3 */}
        <div className="bg-white/5 p-6 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
          <div
            ref={(el) => {
              numberRefs.current[2] = el;
            }}
            data-value="16"
            className="text-3xl text-brand-accent font-bold mb-1"
          >
            0
          </div>
          <div className="text-sm text-gray-400 font-medium">
            M&A Transactions
          </div>
        </div>
        {/* Stat 4 */}
        <div className="bg-white/5 p-6 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
          <div
            ref={(el) => {
              numberRefs.current[3] = el;
            }}
            data-value="20"
            data-suffix="+"
            className="text-3xl text-brand-accent font-bold mb-1"
          >
            0
          </div>
          <div className="text-sm text-gray-400 font-medium">
            Years Experience
          </div>
        </div>
      </div>
    </div>
  );
};
Stats.displayName = "Stats";

const FounderImg = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const dec1Ref = useRef<HTMLDivElement>(null);
  const dec2Ref = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (
        triggerRef.current &&
        dec1Ref.current &&
        dec2Ref.current &&
        imgRef.current
      ) {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: triggerRef.current,
              start: "top 50%",
              toggleActions: "play none none none",
            },
          })
          .to(imgRef.current, {
            duration: 1.2,
            filter: "grayscale(0)",
            ease: "power2.out",
          })
          .to(
            dec1Ref.current,
            {
              duration: 1.2,
              xPercent: -10,
              yPercent: -10,
              ease: "power2.out",
            },
            "<",
          )
          .to(
            dec2Ref.current,
            {
              duration: 1.2,
              xPercent: 10,
              yPercent: 10,
              ease: "power2.out",
            },
            "<",
          );
      }
    }, containerRef);

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    return () => {
      ctx.revert();
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center py-12 lg:py-0"
    >
      <div ref={triggerRef} className="relative">
        <div className="relative w-full max-w-md aspect-4/5 rounded-2xl overflow-hidden shadow-2xl z-10">
          <img
            ref={imgRef}
            src="https://res.cloudinary.com/deszn12rt/image/upload/v1767861739/tealeaf/founder_fn7bo7.png"
            alt="Angela Sweeney"
            className="w-full h-full object-cover filter grayscale"
          />

          {/* Gradient Overlay for text readability at bottom */}
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent opacity-90"></div>

          {/* Quote Text */}
          <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
            <p className="text-xl md:text-2xl font-serif font-medium italic text-white mb-4 leading-snug drop-shadow-sm">
              "We believe that growth should be deliberate, financially sound,
              and built to last."
            </p>
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-8 bg-brand-accent"></div>
              <p className="text-brand-accent font-bold tracking-wide text-sm uppercase">
                Angela Sweeney, Founder
              </p>
            </div>
          </div>
        </div>

        {/* Decorative background elements behind image - aligned to the constrained image */}
        <div
          ref={dec1Ref}
          className="absolute z-[-1] top-0 left-0 w-full max-w-md h-full aspect-4/5 border-2 border-white/5 rounded-2xl hidden md:block"
        ></div>
        <div
          ref={dec2Ref}
          className="absolute z-[-1] top-0 left-0 w-full max-w-md h-full aspect-4/5 border-2 border-white/5 rounded-2xl hidden md:block"
        ></div>
      </div>
    </div>
  );
};
FounderImg.displayName = "FounderImg";

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-24 bg-brand-dark relative overflow-hidden"
    >
      {/* Subtle background glow/gradient to give depth */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-primary/5 blur-3xl rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Content & Stats */}
          <div className="flex flex-col justify-center">
            <div className="mb-8">
              <h2 className="text-sm font-bold tracking-widest text-brand-accent uppercase mb-3">
                About Us
              </h2>
              <h3 className="text-4xl md:text-5xl font-serif text-white mb-6">
                Why Founders Trust Us
              </h3>
            </div>

            <div className="space-y-6 text-gray-300 text-lg leading-relaxed font-light mb-10 max-w-2xl">
              <p>
                When you partner with Tealeaf Consulting, you gain more than
                financial expertise. You gain a strategic ally who thinks like a
                CFO, operates like a builder, and helps founders scale with
                intention.
              </p>
              <p>
                Founded by{" "}
                <span className="text-white font-semibold">Angela Sweeney</span>
                , a visionary CFO and strategic operator, Tealeaf brings over
                two decades of hands-on experience across 14 startups and 16 M&A
                transactions.
              </p>
              <p>
                With more than $100 million raised in capital and a track record
                spanning SaaS, biotech, fintech, and emerging technologies,
                Angela builds the financial and operational frameworks that turn
                ambition into sustainable systems that actually scale.
              </p>
            </div>

            {/* Stats Grid - 2x2 Layout */}
            <Stats />
          </div>

          {/* Right Column: Image with Quote Overlay */}
          <FounderImg />
        </div>
      </div>
    </section>
  );
};
