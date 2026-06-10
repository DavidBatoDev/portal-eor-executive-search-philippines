import { useEffect, useRef } from "react";

/**
 * Adds the `.in` class to the element when it scrolls into view, then stops
 * observing. Pair with the `.reveal` / `.reveal.in` transition in globals.css.
 * Mirrors the IntersectionObserver settings from the original portal.js (§8).
 */
export function useScrollReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in");
          io.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}
