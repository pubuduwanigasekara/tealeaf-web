import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SplashScreen } from './components/SplashScreen';
import { HomePage } from './pages/Home';
import { PrivacyPolicyPage } from './pages/PrivacyPolicy';
import { NotFoundPage } from './pages/NotFound';

// Layout component for standard pages that include Navbar and Footer
const MainLayout = () => (
  <>
    <Navbar />
    <main className="flex-grow">
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

  return (
    <Router>
      <div className="min-h-screen font-sans bg-brand-cream text-brand-dark selection:bg-brand-accent selection:text-white flex flex-col">
        {showSplash && <SplashScreen onComplete={handleSplashComplete} />}

        <Routes>
          {/* Routes wrapped in MainLayout will have Navbar and Footer */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
          </Route>
          
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;