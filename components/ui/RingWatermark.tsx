import { cx } from "@/lib/cx";

// Concentric "ring" watermark motif. Positioning, size and opacity are applied
// by the caller via `className`; pass the exact circle radii per the drafts.
export function RingWatermark({
  circles,
  strokeWidth = 1.4,
  dot = 9,
  colorClass = "text-gold",
  className = "",
}: {
  circles: number[];
  strokeWidth?: number;
  dot?: number;
  colorClass?: string;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={cx("pointer-events-none absolute", colorClass, className)}
    >
      <svg viewBox="0 0 200 200" fill="none" className="h-full w-full">
        <g stroke="currentColor" strokeWidth={strokeWidth}>
          {circles.map((r) => (
            <circle key={r} cx="100" cy="100" r={r} />
          ))}
        </g>
        <circle cx="100" cy="100" r={dot} fill="currentColor" />
      </svg>
    </div>
  );
}
