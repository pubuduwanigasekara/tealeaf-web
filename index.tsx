import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import gsap from 'gsap';

/**
 * Global GSAP Configuration
 * Setting force3D: true ensures that GSAP applies a 3D transform 
 * (like translate3d or matrix3d) to all elements it animates.
 * This triggers hardware acceleration in the browser, leading 
 * to significantly smoother animations, especially for 
 * scroll-triggered stacking effects and complex reveals.
 */
gsap.config({
  force3D: true,
  nullTargetWarn: false, // Prevents console warnings if targets aren't found immediately (useful with dynamic React rendering)
});

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);