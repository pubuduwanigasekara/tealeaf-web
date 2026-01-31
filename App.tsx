import React, { useState, useLayoutEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from 'react-router-dom';
import { gsap, ScrollTrigger, ScrollSmoother } from './lib/gsap';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SplashScreen } from './components/SplashScreen';
import { HomePage } from './pages/Home';
// import { PrivacyPolicyPage } from './pages/PrivacyPolicy';
import { NotFoundPage } from './pages/NotFound';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

/**
 * Global GSAP Configuration
 * - force3D: Ensures hardware acceleration for smoother animations
 * - nullTargetWarn: Prevents console warnings for dynamic React rendering
 */
gsap.config({
  force3D: true,
  nullTargetWarn: false,
});

// Layout component - Navbar is now outside smooth-content, so layout only has main + footer
const MainLayoutWithoutNavbar = () => (
  <>
    <main className="grow">
      <Outlet />
    </main>
    <Footer />
  </>
);

function App() {
  // Always show splash screen on initial load/refresh
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  useLayoutEffect(() => {
    // Initialize ScrollSmoother after component mounts
    // Wait a bit for the DOM to be ready
    const timer = setTimeout(() => {
      /**
       * Global ScrollTrigger Configuration
       * Set the default scroller AFTER the DOM elements exist
       * This prevents null reference errors
       */
      ScrollTrigger.defaults({
        scroller: '#smooth-content',
      });

      ScrollSmoother.create({
        wrapper: '#smooth-wrapper',
        content: '#smooth-content',
        smooth: 1, // How long (in seconds) it takes to "catch up" to native scroll - faster than 1.2
        effects: true, // Enable data-speed and data-lag attributes
        smoothTouch: 0.1, // Smooth scrolling on touch devices
        normalizeScroll: true, // Forces scrolling to happen on the main JS thread
      });
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {/* Splash screen stays outside smooth-wrapper since it's position: fixed */}
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}

      <Navbar />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="min-h-screen font-sans bg-brand-cream text-brand-dark selection:bg-brand-accent selection:text-white flex flex-col">
            <Routes>
              {/* Routes wrapped in MainLayout will have Footer */}
              <Route element={<MainLayoutWithoutNavbar />}>
                <Route path="/" element={<HomePage />} />
              </Route>

              {/* <Route path="/privacy" element={<PrivacyPolicyPage />} /> */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
