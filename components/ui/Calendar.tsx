"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { cx } from "@/lib/cx";

const WEEKDAY_LABELS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const MONTH_LABELS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function pad(n: number) {
  return `${n}`.padStart(2, "0");
}

function toISO(date: Date): string {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

function parseISO(iso: string): Date | null {
  if (!iso) return null;
  const d = new Date(`${iso}T00:00:00`);
  return Number.isNaN(d.getTime()) ? null : d;
}

function isWeekend(date: Date): boolean {
  const day = date.getDay();
  return day === 0 || day === 6;
}

function addMonths(date: Date, delta: number): Date {
  return new Date(date.getFullYear(), date.getMonth() + delta, 1);
}

function formatDisplay(iso: string): string {
  const d = parseISO(iso);
  if (!d) return "";
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

/**
 * Themed calendar popover replacing the native <input type="date">. Weekend /
 * past-date restrictions are visible up front (dimmed, unclickable) instead of
 * only surfacing as a validation error after submit. Mirrors Dropdown's
 * trigger+panel mechanics (click-outside, mousedown-preventDefault so the
 * trigger never blurs mid-click) for a consistent feel across form fields.
 */
export function Calendar({
  value,
  onChange,
  onBlur,
  min,
  disableWeekends,
  name,
  id,
  className,
  invalid,
  required,
  describedById,
  placeholder = "Select a date",
}: {
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  min?: string;
  disableWeekends?: boolean;
  name?: string;
  id?: string;
  className?: string;
  invalid?: boolean;
  required?: boolean;
  describedById?: string;
  placeholder?: string;
}) {
  const [open, setOpen] = useState(false);
  const [viewDate, setViewDate] = useState<Date | null>(null);
  const [focusedISO, setFocusedISO] = useState<string | null>(null);

  const rootRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const reactId = useId();
  const buttonId = id ?? reactId;
  const panelId = `${buttonId}-panel`;

  function isDisabled(date: Date) {
    const iso = toISO(date);
    if (min && iso < min) return true;
    if (disableWeekends && isWeekend(date)) return true;
    return false;
  }

  function openPanel() {
    const today = new Date();
    const selected = parseISO(value);
    const base = selected ?? today;
    setViewDate(new Date(base.getFullYear(), base.getMonth(), 1));
    const anchor = selected ?? (!isDisabled(today) ? today : base);
    setFocusedISO(toISO(anchor));
    setOpen(true);
  }

  // Every internal control prevents mousedown's default focus-shift (like
  // Dropdown's options), so real DOM focus stays pinned on a day cell for
  // the whole time the panel is open. Closing the panel then unmounts that
  // focused cell — which browsers don't reliably fire a normal blur for —
  // so we always explicitly return focus to the trigger ourselves instead of
  // depending on that blur to fire.
  function closeAndRefocus() {
    setOpen(false);
    triggerRef.current?.focus();
  }

  function commit(date: Date) {
    if (isDisabled(date)) return;
    onChange(toISO(date));
    closeAndRefocus();
  }

  // Fallback for clicks on non-focusable blank space (nothing gains focus,
  // so no blur/focusout ever fires there). Listens on "click" rather than
  // "mousedown" specifically so it runs AFTER the browser's native
  // mousedown-triggered focus-shift has already completed — closing the
  // panel here first would unmount the still-focused day cell before that
  // native focus-shift/blur had a chance to fire, which is what caused the
  // validation-on-leave below to fire inconsistently.
  useEffect(() => {
    if (!open) return;
    function onDocClick(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, [open]);

  // Move real DOM focus to the roving-tabindex cell for keyboard users.
  useEffect(() => {
    if (open && focusedISO && gridRef.current) {
      const el = gridRef.current.querySelector<HTMLElement>(`[data-iso="${focusedISO}"]`);
      el?.focus();
    }
  }, [open, focusedISO, viewDate]);

  function moveFocus(days: number) {
    if (!focusedISO) return;
    const current = parseISO(focusedISO);
    if (!current) return;
    const next = new Date(current);
    next.setDate(next.getDate() + days);
    setFocusedISO(toISO(next));
    if (viewDate && (next.getMonth() !== viewDate.getMonth() || next.getFullYear() !== viewDate.getFullYear())) {
      setViewDate(new Date(next.getFullYear(), next.getMonth(), 1));
    }
  }

  function onGridKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    switch (e.key) {
      case "Escape":
        e.preventDefault();
        closeAndRefocus();
        break;
      case "ArrowLeft":
        e.preventDefault();
        moveFocus(-1);
        break;
      case "ArrowRight":
        e.preventDefault();
        moveFocus(1);
        break;
      case "ArrowUp":
        e.preventDefault();
        moveFocus(-7);
        break;
      case "ArrowDown":
        e.preventDefault();
        moveFocus(7);
        break;
      case "Enter":
      case " ":
        e.preventDefault();
        if (focusedISO) {
          const d = parseISO(focusedISO);
          if (d) commit(d);
        }
        break;
    }
  }

  function onTriggerKeyDown(e: React.KeyboardEvent<HTMLButtonElement>) {
    if (!open && ["ArrowDown", "ArrowUp", "Enter", " "].includes(e.key)) {
      e.preventDefault();
      openPanel();
    }
  }

  const view = viewDate ?? new Date();
  const year = view.getFullYear();
  const month = view.getMonth();
  const firstOfMonth = new Date(year, month, 1);
  const startOffset = firstOfMonth.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells: { date: Date; inMonth: boolean }[] = [];
  for (let i = startOffset; i > 0; i--) {
    cells.push({ date: new Date(year, month, 1 - i), inMonth: false });
  }
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({ date: new Date(year, month, d), inMonth: true });
  }
  let trailing = 1;
  while (cells.length < 42) {
    cells.push({ date: new Date(year, month + 1, trailing), inMonth: false });
    trailing++;
  }

  const today = new Date();
  const todayISOStr = toISO(today);
  const todayDisabled = isDisabled(today);

  return (
    <div
      ref={rootRef}
      className={cx("relative", className)}
      onBlur={(e) => {
        // React's onBlur is focusout-based and bubbles, so this fires for
        // ANY descendant losing focus (the trigger itself when closed+tabbed
        // past, or a day cell while open). relatedTarget tells us whether
        // focus is moving to something still inside this component (e.g.
        // trigger <-> day cell as the panel opens/closes) or genuinely
        // leaving — only the latter should count as "left the field".
        if (!rootRef.current?.contains(e.relatedTarget as Node)) {
          setOpen(false);
          onBlur?.();
        }
      }}
    >
      {name && <input type="hidden" name={name} value={value} />}

      <button
        type="button"
        ref={triggerRef}
        id={buttonId}
        role="combobox"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={panelId}
        aria-invalid={invalid || undefined}
        aria-required={required || undefined}
        aria-describedby={describedById}
        onClick={() => (open ? setOpen(false) : openPanel())}
        onKeyDown={onTriggerKeyDown}
        className={cx(
          "flex w-full items-center justify-between gap-2 rounded-[11px] border bg-soft px-4 py-[.85rem] text-left font-body text-[.96rem] outline-none transition-[border-color,box-shadow] duration-200",
          open
            ? "border-gold/60 shadow-[0_0_0_4px_rgba(217,164,55,.14)]"
            : invalid
              ? "border-danger"
              : "border-border",
          value ? "text-charcoal" : "text-body"
        )}
      >
        <span className="truncate">{value ? formatDisplay(value) : placeholder}</span>
        <Icon name="calendar" strokeWidth={1.8} className="h-4.5 w-4.5 flex-none text-body" />
      </button>

      {open && (
        <div
          id={panelId}
          role="dialog"
          aria-label="Choose a date"
          className="absolute z-20 mt-[.4rem] w-76 rounded-[11px] border border-border bg-white p-4 shadow-lg"
        >
          <div className="mb-3 flex items-center justify-between">
            <button
              type="button"
              aria-label="Previous month"
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => setViewDate(addMonths(view, -1))}
              className="grid h-8 w-8 place-items-center rounded-md text-body transition-colors hover:bg-gold-tint hover:text-gold-deep"
            >
              <Icon name="chevron-right" strokeWidth={2.2} className="h-4 w-4 rotate-180" />
            </button>
            <p className="font-head text-[.92rem] font-bold text-navy">
              {MONTH_LABELS[month]} {year}
            </p>
            <button
              type="button"
              aria-label="Next month"
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => setViewDate(addMonths(view, 1))}
              className="grid h-8 w-8 place-items-center rounded-md text-body transition-colors hover:bg-gold-tint hover:text-gold-deep"
            >
              <Icon name="chevron-right" strokeWidth={2.2} className="h-4 w-4" />
            </button>
          </div>

          <div className="grid grid-cols-7 gap-y-1 text-center">
            {WEEKDAY_LABELS.map((w) => (
              <span key={w} className="py-1 font-head text-[.72rem] font-bold uppercase text-body/70">
                {w}
              </span>
            ))}
          </div>

          <div
            ref={gridRef}
            role="group"
            aria-label={`${MONTH_LABELS[month]} ${year}`}
            onKeyDown={onGridKeyDown}
            className="grid grid-cols-7 gap-y-1 text-center"
          >
            {cells.map(({ date, inMonth }) => {
              const iso = toISO(date);
              const disabled = isDisabled(date);
              const isSelected = iso === value;
              const isToday = iso === todayISOStr;
              const isFocusable = iso === focusedISO;

              return (
                <button
                  key={iso}
                  type="button"
                  data-iso={iso}
                  disabled={disabled}
                  tabIndex={isFocusable ? 0 : -1}
                  aria-current={isToday ? "date" : undefined}
                  aria-pressed={isSelected}
                  aria-label={date.toLocaleDateString("en-US", {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                  onFocus={() => setFocusedISO(iso)}
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => commit(date)}
                  className={cx(
                    "mx-auto grid h-9 w-9 place-items-center rounded-full font-body text-[.88rem] outline-none transition-colors",
                    !inMonth && "text-body/35",
                    inMonth && !disabled && !isSelected && "text-charcoal",
                    disabled && "cursor-not-allowed text-body/30",
                    !disabled && !isSelected && "hover:bg-gold-tint",
                    isSelected && "bg-gold font-bold text-navy",
                    !isSelected && isToday && "font-bold text-gold-deep ring-1 ring-inset ring-gold/50",
                    isFocusable && !isSelected && "ring-2 ring-inset ring-gold/40"
                  )}
                >
                  {date.getDate()}
                </button>
              );
            })}
          </div>

          <div className="mt-3 flex items-center justify-between border-t border-border pt-3">
            <button
              type="button"
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => onChange("")}
              className="font-head text-[.82rem] font-bold text-body transition-colors hover:text-navy"
            >
              Clear
            </button>
            <button
              type="button"
              disabled={todayDisabled}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => commit(today)}
              className="font-head text-[.82rem] font-bold text-gold-deep transition-colors hover:text-navy disabled:cursor-not-allowed disabled:text-body/40 disabled:hover:text-body/40"
            >
              Today
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
