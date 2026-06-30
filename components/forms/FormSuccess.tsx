"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";

/**
 * Success panel shown after a form submits. Reuses the gold-tint confirmation
 * look, but moves focus to itself on mount (so screen-reader + keyboard users
 * land on the confirmation) and surfaces a clear next step.
 */
export function FormSuccess({
  title,
  message,
  action,
}: {
  title: string;
  message: string;
  action?: { label: string; href: string };
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    ref.current?.focus();
  }, []);

  return (
    <div
      ref={ref}
      tabIndex={-1}
      role="status"
      aria-live="polite"
      className="rounded-md border border-gold/40 bg-gold-tint p-6 outline-none"
    >
      <div className="flex items-start gap-3">
        <Icon
          name="check-circle"
          className="h-6 w-6 flex-none text-gold-deep"
        />
        <div>
          <p className="font-head font-bold text-navy">{title}</p>
          <p className="mt-1 text-[.95rem] text-body">{message}</p>
          {action && (
            <Link
              href={action.href}
              className="mt-3 inline-flex items-center gap-1.5 font-head text-[.92rem] font-bold text-gold-deep transition-colors hover:text-navy"
            >
              {action.label}
              <Icon name="arrow-right" strokeWidth={2.2} className="h-4 w-4" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
