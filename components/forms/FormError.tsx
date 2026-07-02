"use client";

import { Icon } from "@/components/ui/Icon";

/**
 * Error panel shown when a form submission fails server-side. Mirrors
 * FormSuccess's layout but uses the danger palette and an assertive live
 * region, since a failure needs immediate attention (unlike a success
 * confirmation, which can be polite).
 */
export function FormError({ message }: { message: string }) {
  return (
    <div
      role="alert"
      aria-live="assertive"
      className="rounded-md border border-danger/40 bg-danger-tint p-4"
    >
      <div className="flex items-start gap-3">
        <Icon
          name="alert-triangle"
          className="h-5 w-5 flex-none text-danger"
        />
        <p className="text-[.92rem] text-charcoal">{message}</p>
      </div>
    </div>
  );
}
