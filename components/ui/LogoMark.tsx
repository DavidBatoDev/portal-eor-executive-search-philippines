import { cx } from "@/lib/cx";

/*
 * The approved FINAL PORTAL mark (client pick, 2026-09-24), path for path from
 * the brand master helprof-brand/docs/brand/marks/portal/final.svg. Do not
 * edit, recolour, outline or rebuild it here: change the master and copy again.
 *
 * Its colours are fixed (#E8BB4D PORTAL amber, #515353 family gray), so this
 * component no longer takes a text colour. Size it by height only; the width
 * follows the artwork's own ratio (169.5 x 239.25). Minimum 32px tall.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="44 6.75 169.5 239.25"
      aria-hidden="true"
      className={cx("block aspect-[169.5/239.25] w-auto", className)}
    >
      <path
        fill="#E8BB4D"
        d="M152.988 242.197A84 84 0 1 1 208.197 186.988A10.5 10.5 0 0 1 188.148 180.741A63 63 0 1 0 146.741 222.148A10.5 10.5 0 0 1 152.988 242.197Z"
      />
      <path
        fill="#515353"
        fillRule="evenodd"
        d="M181 162C181 191.271 157.271 215 128 215C98.7289 215 75 191.271 75 162C75 132.729 98.7289 109 128 109C157.271 109 181 132.729 181 162ZM160 162C160 179.673 145.673 194 128 194C110.327 194 96 179.673 96 162C96 144.327 110.327 130 128 130C145.673 130 160 144.327 160 162Z"
      />
      <path
        fill="#E8BB4D"
        d="M136.132 184.982L183.861 232.71A21 21 0 0 0 213.559 232.71L150.982 170.132A10.5 10.5 0 0 0 136.132 184.982Z"
      />
      <path fill="#E8BB4D" d="M106 162A22 22 0 1 1 150 162A22 22 0 1 1 106 162Z" />
      <path
        fill="#E8BB4D"
        d="M99 35.841A29 29 0 1 1 157 35.841A29 29 0 1 1 99 35.841Z"
      />
    </svg>
  );
}

/*
 * The mark with its clear space: half the mark's height on every side.
 *
 * On a dark ground the tile is WHITE. The mark's gray inner ring is 2.26:1 on
 * this site's navy and disappears, and no approved knockout version of any
 * group mark exists, so the mark keeps a light ground of its own. The squared
 * top-right corner is the brand board's own logo-slot shape (the group sites'
 * footers use the same tile). On a light ground the tile is transparent, so
 * the box (and the layout) is identical in both states.
 *
 * 32px mark + 16px clear space each side = 64px tall, 55px wide.
 */
export function MarkTile({
  onDark = false,
  className = "",
}: {
  onDark?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cx(
        "inline-flex h-16 w-[55px] flex-none items-center justify-center rounded-[14px] rounded-tr-none transition-colors duration-300",
        onDark ? "bg-white" : "bg-transparent",
        className
      )}
    >
      <LogoMark className="h-8" />
    </span>
  );
}

// Full lockup: the mark + PORTAL name. `onDark` keeps the word white.
// `tile` sets the mark on its white tile - the FOOTER only (owner's call,
// 2026-10-14). Everywhere else the mark stands on its own, dark grounds too.
export function Logo({
  onDark = false,
  tile = false,
  className = "",
}: {
  onDark?: boolean;
  tile?: boolean;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-[.62rem] ${className}`}>
      {tile ? <MarkTile onDark={onDark} /> : <LogoMark className="h-8" />}
      <span
        className={`font-head text-[1.42rem] font-extrabold tracking-[.16em] pl-[.04em] ${
          onDark ? "text-white" : "text-navy"
        }`}
      >
        PORTAL
      </span>
    </span>
  );
}
