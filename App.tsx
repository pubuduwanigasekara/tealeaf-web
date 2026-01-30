import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { SplashScreen } from "./components/SplashScreen";
import { HomePage } from "./pages/Home";
// import { PrivacyPolicyPage } from './pages/PrivacyPolicy';
import { NotFoundPage } from "./pages/NotFound";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

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

  useEffect(() => {
    // Initialize ScrollSmoother after component mounts
    // Wait a bit for the DOM to be ready
    const timer = setTimeout(() => {
      /**
       * Global ScrollTrigger Configuration
       * Set the default scroller AFTER the DOM elements exist
       * This prevents null reference errors
       */
      ScrollTrigger.defaults({
        scroller: "#smooth-content",
      });

      ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 0.8, // How long (in seconds) it takes to "catch up" to native scroll - faster than 1.2
        effects: true, // Enable data-speed and data-lag attributes
        smoothTouch: 0.1, // Smooth scrolling on touch devices
      });
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {/* Splash screen stays outside smooth-wrapper since it's position: fixed */}
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}

      <div id="smooth-wrapper">
        {/* Navbar goes inside wrapper but outside content for proper fixed positioning */}
        <Navbar />

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
