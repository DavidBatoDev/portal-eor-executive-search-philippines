// Portal ring-and-figure logo mark. Uses currentColor (gold in brand use).
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" aria-hidden="true" className={className}>
      <circle cx="50" cy="50" r="47" stroke="currentColor" strokeWidth="2" opacity="0.28" />
      <circle cx="50" cy="50" r="37" stroke="currentColor" strokeWidth="2.4" opacity="0.5" />
      <circle cx="50" cy="50" r="27" stroke="currentColor" strokeWidth="2.8" opacity="0.8" />
      <circle cx="50" cy="40.5" r="7.2" fill="currentColor" />
      <path
        d="M35.5 64.5c0-9.2 6.5-15.2 14.5-15.2s14.5 6 14.5 15.2c-4.3 2.6-9.2 4-14.5 4s-10.2-1.4-14.5-4Z"
        fill="currentColor"
      />
    </svg>
  );
}

// Full lockup: gold mark + PORTAL wordmark. `onDark` keeps the word white.
export function Logo({
  onDark = false,
  className = "",
}: {
  onDark?: boolean;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-[.62rem] ${className}`}>
      <LogoMark className="h-8.5 w-8.5 flex-none text-gold" />
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
