import type { ReactNode } from "react";

/**
 * Centered content column: max 1300px with a fluid gutter (§5).
 * Wrap every section's content in this — never crowd content edge-to-edge.
 */
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto w-full max-w-container px-[clamp(20px,5vw,40px)] ${className}`}
    >
      {children}
    </div>
  );
}
