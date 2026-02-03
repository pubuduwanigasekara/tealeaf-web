import { useState, useEffect, RefObject } from "react";

interface UseIntersectionObserverArgs {
  ref: RefObject<Element | null>;
  options?: IntersectionObserverInit;
}

const DEFAULT_OPTIONS: IntersectionObserverInit = {
  root: null,
  rootMargin: "0px",
  threshold: 0,
};

/**
 * Hook to track if an element is visible in the viewport.
 * @param ref - React ref to the element to observe
 * @param options - IntersectionObserver options
 * @returns boolean - true if element is intersecting, false otherwise
 */
export function useIntersectionObserver({
  ref,
  options = DEFAULT_OPTIONS,
}: UseIntersectionObserverArgs): boolean {
  const [isIntersecting, setIntersecting] = useState(false);

  const { root, rootMargin, threshold } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      { root, rootMargin, threshold }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [ref, root, rootMargin, threshold]); // Re-create observer if options change

  return isIntersecting;
}
