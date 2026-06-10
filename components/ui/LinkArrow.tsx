import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { cx } from "@/lib/cx";

// "Learn more about X →" inline link; arrow nudges right on hover.
export function LinkArrow({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cx(
        "group inline-flex items-center gap-[.5rem] font-head text-[.95rem] font-bold tracking-[-0.01em] text-gold-deep",
        className
      )}
    >
      {children}
      <Icon
        name="arrow-right"
        strokeWidth={2.2}
        className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
      />
    </Link>
  );
}
