import { useState, useEffect } from "react";

/**
 * Hook to track if the window/tab is currently active/focused.
 * @returns boolean - true if window is focused, false otherwise
 */
export function useWindowFocus(): boolean {
  const [focused, setFocused] = useState(() => {
    if (typeof window === "undefined") return false;
    return document.hasFocus();
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const onFocus = () => setFocused(true);
    const onBlur = () => setFocused(false);

    // Also listen to visibility change for tab switching
    const onVisibilityChange = () => {
      setFocused(document.visibilityState === "visible");
    };

    const controller = new AbortController();
    const signal = controller.signal;

    window.addEventListener("focus", onFocus, { signal });
    window.addEventListener("blur", onBlur, { signal });
    document.addEventListener("visibilitychange", onVisibilityChange, {
      signal,
    });

    return () => {
      controller.abort();
    };
  }, []);

  return focused;
}
