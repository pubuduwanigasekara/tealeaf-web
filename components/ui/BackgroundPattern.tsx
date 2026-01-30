import React from 'react';

export const BackgroundPattern: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 z-0 pointer-events-none overflow-hidden ${className}`}>
       <svg width="100%" height="100%" viewBox="0 0 1440 800" xmlns="http://www.w3.org/2000/svg">
        <path d="M-100,600 C200,400 400,800 800,500 S1200,200 1600,400" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M-100,650 C200,450 400,850 800,550 S1200,250 1600,450" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M-100,700 C200,500 400,900 800,600 S1200,300 1600,500" fill="none" stroke="currentColor" strokeWidth="1" />
        
        <circle cx="1200" cy="200" r="300" stroke="currentColor" strokeWidth="0.5" fill="none" />
        <circle cx="1200" cy="200" r="350" stroke="currentColor" strokeWidth="0.5" fill="none" />
        <circle cx="1200" cy="200" r="400" stroke="currentColor" strokeWidth="0.5" fill="none" />
       </svg>
    </div>
  );
};