import React, { useState, useRef, useLayoutEffect, useCallback } from 'react';
import { Plus, ChevronDown } from 'lucide-react';
import { gsap } from '@/lib/gsap';
import { twMerge } from 'tailwind-merge';
import { useGSAP } from '@gsap/react';

import { TestimonialItem } from '@/lib/types';
import { useDebouncedScrollTriggerRefresh } from '@/lib/hooks/useDebouncedScrollTriggerRefresh';

// Extended interface for the rich content
interface ExtendedTestimonialItem extends Omit<TestimonialItem, 'quote'> {
  quote: string; // The preview text
  content: React.ReactNode; // The full rich text content
}

const testimonials: ExtendedTestimonialItem[] = [
  {
    id: '1',
    author: 'Sean S. Murphy',
    role: 'CEO',
    company: 'Helix Decision Science',
    quote: `Angela does not just "manage the financial infrastructure" - she stewards value creation. She understands the "tollgate" fundraising model, ensuring that a company hits specific, measurable milestones at every phase to unlock new rounds of capital.`,
    content: (
      <div className="space-y-8 [&_p]:leading-normal">
        <div className="hidden lg:block">
          <h3 className="text-2xl font-bold text-brand-dark mb-4">
            Strategic Financial Leadership: A CEO&apos;s Perspective on Angela
            Sweeney
          </h3>
          <p className="text-brand-dark mb-4">
            In the high-stakes world of AI-powered decision science, technical
            innovation must be matched by operational rigor. As the Founder and
            CEO of Helix Decision Science, I have seen firsthand how the right
            financial leadership transforms a company from a pre-revenue R&D
            startup into a high-velocity, early-revenue organization. Angela
            Sweeney has been the architect of that transformation for us.
          </p>
          <p className="text-brand-dark">
            For any founder or board looking to scale, Angela provides the
            bridge between visionary product development and the
            institutional-grade discipline required for a successful exit.
          </p>
        </div>

        <div className="hidden lg:block bg-brand-cream/50 p-6 rounded-2xl border border-brand-dark/5">
          <h4 className="text-lg font-bold text-brand-dark mb-4 border-b border-brand-accent/20 pb-2 inline-block">
            The Impact: From Prototype to Profitability
          </h4>
          <p className="text-brand-dark mb-6 text-base">
            Angela&apos;s mandate at Helix was clear: lay the enduring financial
            foundations needed to reach break-even profitability point and
            prepare for institutional fundraising. Her impact was immediate
            across four critical pillars:
          </p>

          <ul className="space-y-4">
            {[
              {
                title: 'Institutional Readiness & Governance',
                desc: 'Angela implemented the reporting and compliance protocols demanded by top-tier investors. She led our 409A preparation, data cleansing, and audit-readiness, ensuring our valuation is both defensible and market-ready.',
              },
              {
                title: 'Scalable Financial Infrastructure',
                desc: 'She moved us beyond basic accounting to a sophisticated, reconciled system across Carta, QuickBooks, Brex, and Shield. This "audit-ready" environment is vital for maintaining investor confidence during rapid scaling.',
              },
              {
                title: 'Strategic Budgeting & Forecasting',
                desc: 'Rather than static spreadsheets, Angela built adaptive forecasting tools and scenario analyses. These models allow us to anticipate capital requirements and tie financial strategy directly to our ARR progress.',
              },
              {
                title: 'Capital Table & Incentive Management',
                desc: 'She managed the complexity of our equity and options programs, providing the clarity necessary to attract and retain elite talent while aligning incentives for future acquirers.',
              },
            ].map((item, i) => (
              <li key={i} className="flex gap-4 items-start">
                <span className="text-brand-accent font-serif italic text-xl shrink-0 pt-0.5">
                  0{i + 1}.
                </span>
                <div>
                  <strong className="block text-brand-dark font-semibold text-base mb-1">
                    {item.title}
                  </strong>
                  <p className="text-brand-dark text-base block">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold text-brand-dark mb-3">
            Why Angela is the &quot;Ideal Fractional CFO&quot;
          </h4>
          <p className="text-brand-dark mb-4">
            Angela does not just &quot;manage the financial
            infrastructure&quot;—she stewards value creation. She understands
            the &quot;tollgate&quot; fundraising model, ensuring that a company
            hits specific, measurable milestones at every phase to unlock new
            rounds of capital.
          </p>
          <p className="text-brand-dark">
            Her experience in high-growth SaaS and technology, combined with a
            global perspective on cross-border financial management, makes her
            uniquely suited for companies with international ambitions.
          </p>
        </div>

        <blockquote className="border-l-4 border-brand-accent pl-6 pr-4 py-2 my-6 bg-brand-accent/5 rounded-r-lg">
          <p className="text-lg text-brand-dark font-medium">
            &quot;Angela&apos;s hands-on financial stewardship and
            milestone-based planning are essential for rapid scaling and future
            value realization.&quot;
          </p>
        </blockquote>
      </div>
    ),
  },
  {
    id: '2',
    author: 'Angela Nibbs',
    role: 'Founder & CEO',
    company: 'Maven PR',
    quote:
      "Angela Sweeney has been an invaluable partner to Maven. She brings clarity to our financial picture while always keeping the long-term vision in focus. Her guidance helps me make confident decisions about growth, investment, and where I'm taking the business next.",
    content: (
      <div className="leading-normal space-y-4">
        <p>Angela Sweeney has been an invaluable partner to Maven.</p>
        <p>
          She brings clarity to our financial picture while always keeping the
          long-term vision in focus. Her guidance helps me make confident
          decisions about growth, investment, and where I&apos;m taking the
          business next.
        </p>
        <p>
          She understands what founders are actually navigating day to day and
          helps you build a business that&apos;s both ambitious and grounded.
        </p>
      </div>
    ),
  },
];

// --- Mobile/Tablet Card Component ---
const MobileTestimonialCard: React.FC<{ item: ExtendedTestimonialItem }> = ({
  item,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const refresh = useDebouncedScrollTriggerRefresh();

  const toggle = useCallback(() => setIsOpen((v) => !v), []);

  useLayoutEffect(() => {
    const el = contentRef.current;
    const inner = innerRef.current;
    if (!el || !inner) return;

    gsap.killTweensOf(el);

    if (isOpen) {
      const h = inner.scrollHeight;
      gsap.to(el, {
        height: h,
        duration: 0.5,
        ease: 'power2.out',
        onComplete: () => {
          // let it adapt if content wraps differently
          gsap.set(el, { height: 'auto' });
          refresh();
        },
      });
    } else {
      // if it's auto, lock it first before collapsing
      const current = el.getBoundingClientRect().height;
      gsap.set(el, { height: current });
      gsap.to(el, {
        height: 0,
        duration: 0.4,
        ease: 'power2.out',
        onComplete: refresh,
      });
    }
  }, [isOpen, refresh]);

  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-brand-dark/5 flex flex-col gap-6">
      {/* Quote Section */}
      <div className="relative pt-4">
        <span className="text-6xl text-brand-primary/10 font-serif absolute -top-4 -left-2 font-bold select-none leading-none">
          “
        </span>
        <p className="text-xl md:text-2xl font-serif text-brand-dark leading-relaxed relative z-10">
          {item.quote}
        </p>
      </div>

      {/* Author Section */}
      <div className="flex items-center gap-4 border-t border-brand-dark/5 pt-6">
        <div className="h-10 w-10 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent font-serif font-bold text-lg">
          {item.author.charAt(0)}
        </div>
        <div>
          <h4 className="font-bold text-brand-dark text-lg leading-tight">
            {item.author}
          </h4>
          <p className="text-sm text-brand-gray uppercase tracking-wider font-medium">
            {item.company}
          </p>
        </div>
      </div>

      {/* Expandable Content */}
      <div ref={contentRef} className="h-0 overflow-hidden">
        <div
          ref={innerRef}
          className="pt-2 text-brand-gray text-base md:text-lg leading-relaxed space-y-4">
          {item.content}
        </div>
      </div>

      {/* Toggle Button */}
      <button
        type="button"
        onClick={toggle}
        className="w-full py-3 mt-auto rounded-xl border border-brand-dark/10 text-brand-primary font-bold hover:bg-brand-cream hover:border-brand-primary/20 transition-[background-color,border-color] duration-300 flex items-center justify-center gap-2 group">
        <span className="text-sm uppercase tracking-widest">
          {isOpen ? 'Read Less' : 'Read Full Story'}
        </span>
        <ChevronDown
          size={16}
          className={twMerge(
            'transition-transform duration-300',
            isOpen ? 'rotate-180' : 'group-hover:translate-y-0.5'
          )}
        />
      </button>
    </div>
  );
};

// --- Desktop Accordion Item ---
interface AccordionItemProps {
  item: ExtendedTestimonialItem;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  item,
  isOpen,
  onClick,
}) => {
  const contentOuterRef = useRef<HTMLDivElement>(null);
  const contentInnerRef = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);
  const refresh = useDebouncedScrollTriggerRefresh();

  // set initial state once
  useLayoutEffect(() => {
    const outer = contentOuterRef.current;
    if (!outer) return;
    gsap.set(outer, { height: 0, opacity: 0 });
  }, []);

  // Animate Height on Open/Close
  useGSAP(
    () => {
      const outer = contentOuterRef.current;
      const inner = contentInnerRef.current;
      const row = rowRef.current;
      if (!outer || !inner || !row) return;

      const h = inner.scrollHeight;

      const t = gsap.timeline({
        onComplete: refresh,
      });

      if (isOpen) {
        // if outer is auto from a previous open, lock it
        const current = outer.getBoundingClientRect().height;
        gsap.set(outer, { height: current });

        t.to(outer, {
          height: h,
          opacity: 1,
          duration: 0.6,
          ease: 'expo.out',
        }).set(outer, { height: 'auto' });

        t.set(row, { backgroundColor: '#ffffff' }, 0);
      } else {
        const current = outer.getBoundingClientRect().height;
        gsap.set(outer, { height: current });

        t.to(outer, {
          height: 0,
          opacity: 0,
          duration: 0.5,
          ease: 'power3.inOut',
        });
        t.set(row, { backgroundColor: 'transparent' }, 0);
      }
    },
    { scope: rowRef, dependencies: [isOpen, refresh] }
  );

  return (
    <div
      ref={rowRef}
      className="border-b border-brand-dark/10 overflow-hidden transition-colors">
      {/* Header / Trigger */}
      <button
        type="button"
        onClick={onClick}
        className={twMerge(
          'w-full py-12 px-4 md:px-0 grid grid-cols-12 gap-6 items-start text-left group transition-[background-color,color] duration-300',
          isOpen ? 'text-brand-dark' : 'text-brand-dark hover:bg-white'
        )}>
        {/* 1. Info (Col 1-3) - Name & Company - Sticky-ish alignment */}
        <div className="col-span-3 flex flex-col justify-center pl-8 pt-1">
          <h4 className="font-bold text-2xl leading-tight text-brand-dark/80">
            {item.author}
          </h4>
          <div className="flex items-center gap-2 mt-2">
            <span className="h-px w-4 bg-brand-accent"></span>
            <p className="text-xs uppercase tracking-wider font-bold text-brand-accent">
              {item.company}
            </p>
          </div>
        </div>

        {/* 2. Large Quote Preview (Col 4-11) */}
        <div className="col-span-8 px-4">
          <p
            className={twMerge(
              'max-w-3xl font-serif text-2xl/8 text-brand-dark line-clamp-4 transition-opacity duration-100',
              isOpen ? 'opacity-0' : 'opacity-100'
            )}>
            <span className="text-brand-accent pr-2"> &ldquo;</span>
            {item.quote}
            <span className="text-brand-accent pl-2"> &rdquo;</span>
          </p>
        </div>

        {/* 3. Toggle (Col 12) */}
        <div className="col-span-1 flex items-start justify-end pr-8 pt-1">
          <div
            className={twMerge(
              'relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500',
              isOpen
                ? 'rotate-45 bg-brand-dark/5'
                : 'group-hover:bg-brand-dark/5'
            )}>
            <Plus
              className={twMerge(
                'w-6 h-6',
                isOpen ? 'text-brand-dark' : 'text-brand-dark/40'
              )}
            />
          </div>
        </div>
      </button>

      {/* Expandable Content */}
      <div ref={contentOuterRef} className="h-0 overflow-hidden">
        <div
          ref={contentInnerRef}
          className="pb-16 px-8 grid grid-cols-12 gap-12 bg-white">
          {/* Left Spacer / Author Details Context (Col 1-3) */}
          <div className="col-span-3 pl-8">
            <div className="sticky top-8 space-y-4 animate-[fadeIn_0.5s_ease-out_0.3s_forwards]">
              <div className="h-12 w-[3px] bg-brand-accent/30"></div>
              <div>
                <p className="text-sm font-bold text-brand-dark uppercase tracking-widest">
                  Role
                </p>
                <p className="text-brand-gray">{item.role}</p>
              </div>
              <div>
                <p className="text-sm font-bold text-brand-dark uppercase tracking-widest">
                  Company
                </p>
                <p className="text-brand-gray">{item.company}</p>
              </div>
            </div>
          </div>

          {/* Right: Rich Content (Col 4-11) */}
          <div className="col-span-8 pr-12">
            <div className="text-xl/8 font-serif text-brand-dark max-w-4xl">
              {item.content}
            </div>
          </div>

          {/* Spacer (Col 12) */}
          <div className="col-span-1"></div>
        </div>
      </div>
    </div>
  );
};

export const Testimonials: React.FC = () => {
  // Use a state array to allow multiple items to be open at once
  const [activeIndices, setActiveIndices] = useState<number[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const desktopListRef = useRef<HTMLDivElement>(null);
  const mobileListRef = useRef<HTMLDivElement>(null);

  const handleToggle = useCallback((index: number) => {
    setActiveIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  }, []);

  useGSAP(
    () => {
      const root = containerRef.current;
      if (!root) return;

      // Header Animation
      gsap.from(headerRef.current, {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
      });

      // Desktop List Entrance
      if (desktopListRef.current) {
        gsap.from(desktopListRef.current.children, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: desktopListRef.current,
            start: 'top 85%',
          },
        });
      }

      // Mobile List Entrance
      if (mobileListRef.current) {
        gsap.from(mobileListRef.current.children, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: mobileListRef.current,
            start: 'top 85%',
          },
        });
      }
    },
    { scope: containerRef, dependencies: [] }
  );

  return (
    <section
      id="testimonials"
      ref={containerRef}
      className="py-24 md:py-32 bg-brand-cream text-brand-dark relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div ref={headerRef} className="mb-16 md:mb-20">
          <h2 className="text-sm font-bold tracking-widest text-brand-accent uppercase mb-3">
            Client Stories
          </h2>
          <h3 className="text-4xl md:text-6xl font-serif text-brand-dark">
            Trusted by Founders
          </h3>
        </div>

        {/* Mobile/Tablet View (Cards) - Visible below LG */}
        <div ref={mobileListRef} className="lg:hidden flex flex-col gap-6">
          {testimonials.map((item) => (
            <MobileTestimonialCard key={item.id} item={item} />
          ))}
        </div>

        {/* Desktop View (Accordion) - Visible LG+ */}
        <div
          ref={desktopListRef}
          className="hidden lg:block border-t border-brand-dark/10">
          {testimonials.map((item, index) => (
            <AccordionItem
              key={item.id}
              item={item}
              index={index}
              isOpen={activeIndices.includes(index)}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
