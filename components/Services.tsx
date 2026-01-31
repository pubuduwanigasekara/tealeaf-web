import React, { useRef } from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { gsap, ScrollTrigger, ScrollSmoother } from '@/lib/gsap'
import { useGSAP } from '@gsap/react'

import { ServiceItem } from '@/lib/types'

const services: ServiceItem[] = [
  {
    id: '01',
    title: 'Foundation Building',
    subtitle: 'Bookkeeping and Accounting',
    highlightLine: 'Building scalable financial systems from day one.',
    description:
      'This level of service is designed to build and support the operational foundation of your organization on your growth trajectory. We design robust financial systems, establish key performance metrics, and create cash flow visibility that gives you complete control over your runway and burn rate. Your financial foundation becomes a competitive advantage, not an operational burden.',
    details: [
      'Month-end close',
      'Accounts payable/receivable',
      'Payroll services',
      'Employee benefits management',
      'Expense reporting',
      'Fixed asset tracking',
      'Business software system implementation',
    ],
    ctaText: 'Build Your Financial Foundation',
  },
  {
    id: '02',
    title: 'Growth Operations',
    subtitle: 'Financial Controller Services',
    highlightLine:
      'Optimizing performance through strategic financial management.',
    description:
      'Scale your business with confidence through robust financial controls and performance insights. We implement the internal systems, reporting frameworks, and process improvements that turn your financial data into strategic intelligence. Our controller-level oversight ensures operational excellence while identifying opportunities to optimize cash flow, reduce costs, and accelerate growth.',
    details: [
      'Internal financial audits',
      'Variance analysis & reporting',
      'Internal controls implementation',
      'Banking & payments optimization',
      'Contract management',
      'Maximizing operational efficiency',
      'Optimize Your Financial Operations',
      'Stock option administration',
    ],
    ctaText: 'Optimize Your Financial Operations',
  },
  {
    id: '03',
    title: 'Strategic Advisory',
    subtitle: 'Fractional CFO Partnership',
    highlightLine: 'Partner with financial leadership for critical decisions.',
    description:
      'As your CFO partner, we deliver strategic financial leadership to guide fundraising, acquisition opportunities, and long-term planning. Our executive-level analysis and forecasting provide the clarity you need to make confident decisions that accelerate growth and maximize enterprise value.',
    details: [
      'Financial review & analysis',
      'Custom financial metrics design',
      'Budgeting & forecasting',
      'Cash burn & runway projections',
      'Strategic financial planning',
      'Exit preparation & M&A readiness',
      'Fund Raising Preparation',
      'Tax strategy advisory',
      'Depth and perspective of a seasoned CFO',
    ],
    ctaText: 'Access Fractional CFO Expertise',
  },
]

// We forward ref to allow the parent to track the card for GSAP
const ServiceCard = React.forwardRef<
  HTMLDivElement,
  { service: ServiceItem; index: number }
>(({ service }, ref) => {
  return (
    // GSAP ScrollTrigger pin handles the stacking effect
    // Each card pins at 96px from top while the next scrolls over it
    <div
      ref={ref}
      className="service-card relative bg-white border border-brand-dark/5 shadow-lg rounded-3xl overflow-hidden origin-top transform-gpu"
    >
      <div className="py-10 px-6 md:py-20 md:px-12">
        <div className="grid md:grid-cols-12 gap-8 lg:gap-16">
          {/* Step Index - Desktop */}
          <div className="hidden lg:block lg:col-span-2 pt-1">
            <span className="text-4xl lg:text-5xl font-serif text-brand-primary/80 transition-colors font-bold block">
              {service.id}
            </span>
          </div>

          {/* Content Area */}
          <div className="md:col-span-10 flex flex-col">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <p className="text-brand-accent font-bold tracking-widest uppercase text-xs">
                  {service.subtitle}
                </p>
                {/* Step Index - Mobile */}
                <span className="lg:hidden text-2xl font-serif text-brand-primary/30 font-bold">
                  {service.id}
                </span>
              </div>
              <h3 className="text-3xl lg:text-4xl font-serif text-brand-dark">
                {service.title}
              </h3>
            </div>

            {/* Highlight & Description */}
            <div className="mb-10 space-y-4 max-w-4xl">
              <div className="flex items-center gap-3">
                <div className="h-6 w-1.5 bg-brand-accent rounded-full shrink-0"></div>
                <p className="text-lg sm:text-xl font-bold text-brand-dark tracking-tight">
                  {service.highlightLine}
                </p>
              </div>
              <p className="text-brand-gray text-base sm:text-lg leading-relaxed max-w-3xl text-pretty tracking-wide">
                {service.description}
              </p>
            </div>

            {/* Capabilities Grid */}
            <div className="mb-12">
              <h4 className="hidden lg:block text-xs font-bold text-brand-primary uppercase tracking-[0.2em] mb-6">
                Service Deliverables
              </h4>
              <div className="grid sm:grid-cols-2 gap-x-12 gap-y-4">
                {service.details.map((detail, idx) => (
                  <div key={idx} className="flex items-center gap-3 group/item">
                    <CheckCircle2 className="w-5 h-5 text-brand-accent mt-0.5 shrink-0 opacity-80" />
                    <span className="text-brand-gray/90 text-sm md:text-base font-medium leading-snug tracking-wide">
                      {detail}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Action */}
            <div className="pt-2">
              <button
                className="group/btn inline-flex items-center gap-2 text-brand-primary font-bold hover:text-brand-accent transition-colors duration-500"
                onClick={() => {
                  const smoother = ScrollSmoother.get()
                  smoother?.scrollTo('#contact', true, 'top 80px')
                }}
              >
                <span className="relative pb-1 tracking-wide">
                  {service.ctaText}
                  {/* Default subtle border */}
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-primary/20"></span>
                  {/* Animated fill border */}
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-accent transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500 origin-left"></span>
                </span>
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1.5 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

ServiceCard.displayName = 'ServiceCard'

export const Services: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      // DESKTOP ANIMATION (>1024px) - Using ScrollTrigger Pin
      mm.add('(min-width: 1024px)', () => {
        const cards = cardsRef.current.filter(Boolean)

        // Ensure we reset any mobile styles if resizing from mobile to desktop
        gsap.set(cards, {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: 'brightness(1)',
        })

        cards.forEach((card, index) => {
          if (!card) return

          // Pin ALL cards until the section ends
          ScrollTrigger.create({
            trigger: card,
            start: 'top 96px',
            endTrigger: containerRef.current,
            end: 'bottom bottom', // All cards unpin when section exits viewport
            pin: true,
            pinSpacing: false,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            fastScrollEnd: true, // Prevents jank on fast scrolling
          })

          // Separate animation for scale/brightness (only for non-last cards)
          if (index < cards.length - 1) {
            const nextCard = cards[index + 1]
            if (nextCard) {
              ScrollTrigger.create({
                trigger: nextCard,
                start: 'top bottom', // When next card enters viewport
                end: 'top 96px', // Until next card reaches pin position
                scrub: true, // ScrollSmoother handles global smoothing, we just need instant response
                invalidateOnRefresh: true,
                fastScrollEnd: true,
                onUpdate: self => {
                  // Scale down and darken as next card approaches
                  const progress = self.progress
                  // Use gsap.set for instant updates without animation lag
                  gsap.set(card, {
                    scale: 1 - progress * 0.05,
                    filter: `brightness(${1 - progress * 0.1})`,
                    force3D: true, // GPU acceleration
                  })
                },
              })
            }
          }
        })
      })

      // MOBILE/TABLET ANIMATION (<= 1023px)
      mm.add('(max-width: 1023px)', () => {
        const cards = cardsRef.current.filter(Boolean)

        if (cards.length > 0) {
          gsap.set(cards, { opacity: 0, y: 50 })

          ScrollTrigger.batch(cards, {
            start: 'top 85%',
            onEnter: batch => {
              gsap.to(batch, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power3.out',
                overwrite: true,
              })
            },
            once: true,
          })
        }
      })

      const timer = setTimeout(() => {
        ScrollTrigger.refresh()
      }, 200)

      return () => {
        mm.revert()
        clearTimeout(timer)
      }
    },
    { scope: containerRef }
  )

  return (
    <section
      id="services"
      ref={containerRef}
      className="py-24 mb-32 bg-brand-cream relative"
    >
      <div className="container mx-auto px-6">
        <div className="mb-16 md:mb-24 max-w-2xl sticky top-20 z-0 opacity-40 mix-blend-multiply pointer-events-none hidden md:block">
          {/* 
                Visual trick: Keep the header sticky/faded in background as context 
                if we wanted, or just let it scroll away. 
                Let's keep it static flow for now but add a spacer.
             */}
        </div>

        {/* Static Header */}
        <div className="mb-16 md:mb-24 max-w-2xl relative z-10">
          <h2 className="text-sm font-bold tracking-widest text-brand-accent uppercase mb-3">
            Service Offerings
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-dark leading-tight">
            Three Strategic Pillars
          </h3>
        </div>

        {/* Cards Container */}
        {/* Added min-h-[150vh] and large bottom padding to ensure ample scroll space for sticky interactions */}
        <div className="relative pb-24 space-y-20 lg:space-y-32">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              ref={el => {
                cardsRef.current[index] = el
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
