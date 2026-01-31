import React, { useEffect } from 'react';
import { Hero } from '../components/Hero';
import { WhyTealeaf } from '../components/WhyTealeaf';
import { Services } from '../components/Services';
import { About } from '../components/About';
import { Testimonials } from '../components/Testimonials';
import { FounderPain } from '../components/FounderPain';
import { CallToAction } from '../components/CallToAction';
import { useLocation } from 'react-router-dom';
import { ScrollSmoother } from '@/lib/gsap';

export const HomePage: React.FC = () => {
  const location = useLocation();
  const smoother = ScrollSmoother.get();

  useEffect(() => {
    // Check for state passed from navigation (e.g., from Privacy Policy page)
    const state = location.state as { scrollTo?: string } | null;

    if (state?.scrollTo) {
      const element = document.getElementById(state.scrollTo);
      if (element) {
        // Use a small timeout to ensure DOM is fully ready
        setTimeout(() => {
          smoother?.scrollTo(element, true);
        }, 100);
      }
      // Clear history state to prevent scrolling on reload?
      // Optionally could replace state, but let's keep it simple.
    } else if (location.hash) {
      // Fallback for hash based navigation if manually entered
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          smoother?.scrollTo(element, true);
        }, 100);
      }
    } else {
      // Default scroll to top
      smoother?.scrollTo(0, true);
    }
  }, [location, smoother]);

  return (
    <>
      <Hero />
      <FounderPain />
      <WhyTealeaf />
      <Services />
      <About />
      <Testimonials />
      <CallToAction />
    </>
  );
};
