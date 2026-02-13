import { Button } from "./Button";

export const ErrorCom = ({ reset }: { reset: () => void }) => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-[#f8fcfd] overflow-hidden text-center px-6">
      {/* Subtle Background Pattern - Light grid/mesh */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%">
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse">
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Decorative blurred circle - lighter accent/red for error state */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-160 h-160 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto space-y-2">
        {/* Large Background Text */}
        <h1 className="text-[10rem] sm:text-[13rem] md:text-[18rem] leading-none font-serif text-brand-primary/5 font-medium tracking-tighter select-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 whitespace-nowrap">
          Paused
        </h1>

        {/* Text Content */}
        <div className="space-y-6 relative z-20">
          <h2 className="text-4xl md:text-5xl font-serif text-brand-dark font-bold tracking-tight">
            System Interrupted.
          </h2>
          <p className="text-lg md:text-xl text-brand-gray/70 leading-relaxed max-w-lg mx-auto font-light">
            Even the best strategies encounter friction.{" "}
            <br className="hidden sm:block" />
            We&apos;ve logged this issue. Let&apos;s get you back on track.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="pt-12 flex flex-col sm:flex-row gap-4 justify-center items-center relative z-20">
          <Button
            onClick={reset}
            variant="primary"
            icon
            className="px-10 py-4 text-lg shadow-xl hover:shadow-2xl hover:shadow-brand-accent/20 transition-transform hover:-translate-y-1">
            Try Again
          </Button>

          <Button
            href="/"
            variant="outline"
            className="px-10 py-4 text-lg bg-white/50 backdrop-blur-sm">
            Return to Home
          </Button>
        </div>
      </div>
    </div>
  );
};
