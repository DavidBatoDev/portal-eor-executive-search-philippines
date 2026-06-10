import { useEffect, useState } from "react";

/**
 * Returns `true` once the page has scrolled past `threshold` px (default 24,
 * matching portal.js). Use it to toggle the nav's `scrolled` styling.
 */
export function useStickyNav(threshold = 24) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return scrolled;
}
