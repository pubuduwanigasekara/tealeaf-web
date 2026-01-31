import { useState, useEffect } from 'react';

/**
 * Custom hook to track media query state
 * @param query - The media query string (e.g., '(min-width: 1024px)')
 * @returns boolean - Whether the media query matches
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(() => {
    // Check if window is available (SSR check)
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches;
    }
    return false;
  });

  useEffect(() => {
    // Check if window is available (SSR check)
    if (typeof window === 'undefined') {
      return;
    }

    const mediaQuery = window.matchMedia(query);

    // Create event listener
    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Add event listener
    mediaQuery.addEventListener('change', handleChange);

    // Cleanup
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [query]);

  return matches;
}

/**
 * Custom hook to check if the screen is mobile size (below lg breakpoint)
 * Using Tailwind's default lg breakpoint: 1024px
 * @returns boolean - Whether the screen is mobile/tablet size
 */
export function useIsMobile(): boolean {
  return useMediaQuery('(max-width: 1023px)');
}
