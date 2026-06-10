import { useEffect, useState } from "react";

/**
 * Observes the given section ids and returns the id of the section currently
 * in view, so the matching nav link can be highlighted (gold-deep) per §8.
 * Pass a stable `sectionIds` array (memoize at the call site) to avoid
 * re-subscribing on every render.
 */
export function useScrollSpy(
  sectionIds: string[],
  rootMargin = "-45% 0px -50% 0px"
) {
  const [activeId, setActiveId] = useState<string | null>(null);
  useEffect(() => {
    const els = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (els.length === 0) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin, threshold: 0 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [sectionIds, rootMargin]);
  return activeId;
}
