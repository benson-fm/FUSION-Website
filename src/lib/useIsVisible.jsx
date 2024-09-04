import { useEffect, useState, useCallback } from "react";

export function useIsVisible({ triggerOnce = true } = {}) {
  const [isIntersecting, setIntersecting] = useState(false);

  const callbackRef = useCallback((node) => {
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIntersecting(true);
        if (triggerOnce) {
          observer.disconnect();
        }
      } else {
        if (!triggerOnce) {
          setIntersecting(false);
        }
      }
    });

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [triggerOnce]);

  return { ref: callbackRef, isIntersecting };
}
