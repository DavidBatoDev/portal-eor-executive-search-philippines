/**
 * Smoothly scrolls to an element by id, offsetting for the sticky nav.
 * Default offset (70px) matches the original portal.js anchor behavior (§8).
 */
export function scrollToId(id: string, offset = 70) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: "smooth" });
}
