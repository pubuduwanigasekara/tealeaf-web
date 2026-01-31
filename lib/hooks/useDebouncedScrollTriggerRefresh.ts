import { useCallback, useRef } from 'react';
import { ScrollTrigger } from '../gsap';

// ---- tiny debounce: avoids spam-refreshing ScrollTrigger ----
export function useDebouncedScrollTriggerRefresh(delay = 120) {
  const t = useRef<number | null>(null);

  return useCallback(() => {
    if (t.current) window.clearTimeout(t.current);
    t.current = window.setTimeout(() => {
      ScrollTrigger.refresh();
      t.current = null;
    }, delay);
  }, [delay]);
}
