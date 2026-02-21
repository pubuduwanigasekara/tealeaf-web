import { TestimonialItem } from "./types";

export const ROOT_URL = "https://www.tealeafconsult.com";

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "1",
    author: "Sean S. Murphy",
    role: "CEO",
    company: "Helix Decision Science",
    profilePicLink: "/static/testi_sean.jpeg",
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
                title: "Institutional Readiness & Governance",
                desc: "Angela implemented the reporting and compliance protocols demanded by top-tier investors. She led our 409A preparation, data cleansing, and audit-readiness, ensuring our valuation is both defensible and market-ready.",
              },
              {
                title: "Scalable Financial Infrastructure",
                desc: 'She moved us beyond basic accounting to a sophisticated, reconciled system across Carta, QuickBooks, Brex, and Shield. This "audit-ready" environment is vital for maintaining investor confidence during rapid scaling.',
              },
              {
                title: "Strategic Budgeting & Forecasting",
                desc: "Rather than static spreadsheets, Angela built adaptive forecasting tools and scenario analyses. These models allow us to anticipate capital requirements and tie financial strategy directly to our ARR progress.",
              },
              {
                title: "Capital Table & Incentive Management",
                desc: "She managed the complexity of our equity and options programs, providing the clarity necessary to attract and retain elite talent while aligning incentives for future acquirers.",
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
          <p className="text-lg text-brand-dark font-medium italic">
            &quot;Angela&apos;s hands-on financial stewardship and
            milestone-based planning are essential for rapid scaling and future
            value realization.&quot;
          </p>
        </blockquote>
      </div>
    ),
  },
  {
    id: "2",
    author: "Angela Nibbs",
    role: "Founder & CEO",
    company: "Maven PR",
    profilePicLink: "/static/testi_angela.jpeg",
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
