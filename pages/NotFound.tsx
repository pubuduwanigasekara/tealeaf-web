import React from 'react'
import { Button } from '../components/ui/Button'
import { useNavigate } from 'react-router-dom'

export const NotFoundPage: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-[#f8fcfd] overflow-hidden text-center px-6">
      {/* Subtle Background Pattern - Light grid/mesh */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%">
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
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

      {/* Decorative blurred circle behind 404 - warm glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto space-y-2">
        {/* The 404 Number */}
        <h1 className="text-[10rem] sm:text-[13rem] md:text-[16rem] leading-none font-serif text-brand-primary font-medium tracking-tighter select-none">
          404
        </h1>

        {/* Text Content */}
        <div className="space-y-6 relative z-20">
          <h2 className="text-4xl md:text-5xl font-serif text-brand-dark font-bold tracking-tight">
            Strategic Detour.
          </h2>
          <p className="text-lg md:text-xl text-brand-gray/70 leading-relaxed max-w-lg mx-auto font-light">
            The path to scaling isn't always linear.{' '}
            <br className="hidden sm:block" />
            Let's get you back to the right trajectory.
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-10">
          <Button
            onClick={() => navigate('/')}
            variant="primary"
            icon
            className="!px-10 !py-4 text-lg shadow-xl hover:shadow-2xl hover:shadow-brand-accent/20 transition-transform hover:-translate-y-1"
          >
            Return to Home
          </Button>
        </div>
      </div>
    </div>
  )
}
