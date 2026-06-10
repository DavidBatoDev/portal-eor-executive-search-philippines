import { twMerge } from "tailwind-merge";

// Joins class names (filtering falsy) and resolves conflicting Tailwind
// utilities via tailwind-merge, so a component's `className` override wins
// over its defaults (e.g. passing `bg-cream` overrides a default `bg-white`).
// Unknown/custom classes (e.g. `lead`, `reveal`, `on-dark`) pass through.
export function cx(...parts: Array<string | false | null | undefined>) {
  return twMerge(parts.filter(Boolean).join(" "));
}
