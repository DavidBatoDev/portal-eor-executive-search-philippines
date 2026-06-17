"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { cx } from "@/lib/cx";

type Option = string | { label: string; value: string };

/**
 * Themed, accessible select replacement (listbox pattern). Matches the shared
 * form-field styling — soft fill, gold focus ring, gold-tint selected option —
 * and is reusable across forms. Works uncontrolled (with `name` it renders a
 * hidden input so it submits like a native <select>) or controlled (`value` +
 * `onChange`). Supports keyboard navigation and click-outside to close.
 */
export function Dropdown({
  options,
  value: controlledValue,
  defaultValue = "",
  onChange,
  placeholder = "Select an option",
  name,
  id,
  className,
}: {
  options: Option[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  name?: string;
  id?: string;
  className?: string;
}) {
  const items = options.map((o) =>
    typeof o === "string" ? { label: o, value: o } : o
  );
  const isControlled = controlledValue !== undefined;
  const [internal, setInternal] = useState(defaultValue);
  const value = isControlled ? controlledValue : internal;
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);

  const rootRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const reactId = useId();
  const buttonId = id ?? reactId;
  const listId = `${buttonId}-listbox`;

  const selected = items.find((it) => it.value === value);

  function commit(v: string) {
    if (!isControlled) setInternal(v);
    onChange?.(v);
    setOpen(false);
  }

  function openMenu() {
    setActive(items.findIndex((it) => it.value === value));
    setOpen(true);
  }

  // Close on outside click.
  useEffect(() => {
    if (!open) return;
    function onDoc(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  // Keep the highlighted option in view.
  useEffect(() => {
    if (open && active >= 0 && listRef.current) {
      const el = listRef.current.children[active] as HTMLElement | undefined;
      el?.scrollIntoView({ block: "nearest" });
    }
  }, [active, open]);

  function onKeyDown(e: React.KeyboardEvent<HTMLButtonElement>) {
    if (!open) {
      if (["ArrowDown", "ArrowUp", "Enter", " "].includes(e.key)) {
        e.preventDefault();
        openMenu();
      }
      return;
    }
    switch (e.key) {
      case "Escape":
        e.preventDefault();
        setOpen(false);
        break;
      case "ArrowDown":
        e.preventDefault();
        setActive((a) => Math.min(a + 1, items.length - 1));
        break;
      case "ArrowUp":
        e.preventDefault();
        setActive((a) => Math.max(a - 1, 0));
        break;
      case "Home":
        e.preventDefault();
        setActive(0);
        break;
      case "End":
        e.preventDefault();
        setActive(items.length - 1);
        break;
      case "Enter":
      case " ":
        e.preventDefault();
        if (active >= 0) commit(items[active].value);
        break;
    }
  }

  return (
    <div ref={rootRef} className={cx("relative", className)}>
      {name && <input type="hidden" name={name} value={value} />}

      <button
        type="button"
        id={buttonId}
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => (open ? setOpen(false) : openMenu())}
        onKeyDown={onKeyDown}
        className={cx(
          "flex w-full items-center justify-between gap-2 rounded-[11px] border bg-soft px-[1rem] py-[.85rem] text-left font-body text-[.96rem] outline-none transition-[border-color,box-shadow] duration-200",
          open
            ? "border-gold/60 shadow-[0_0_0_4px_rgba(217,164,55,.14)]"
            : "border-border",
          selected ? "text-charcoal" : "text-body/70"
        )}
      >
        <span className="truncate">{selected ? selected.label : placeholder}</span>
        <Icon
          name="caret-down"
          strokeWidth={2.4}
          className={cx(
            "h-3.5 w-3.5 flex-none text-body transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </button>

      {open && (
        <ul
          ref={listRef}
          id={listId}
          role="listbox"
          tabIndex={-1}
          className="absolute z-20 mt-[.4rem] max-h-[16rem] w-full overflow-auto rounded-[11px] border border-border bg-white py-[.4rem] shadow-lg"
        >
          {items.map((it, i) => {
            const isSelected = it.value === value;
            const isActive = i === active;
            return (
              <li
                key={it.value}
                role="option"
                aria-selected={isSelected}
                onMouseEnter={() => setActive(i)}
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => commit(it.value)}
                className={cx(
                  "flex cursor-pointer items-center justify-between gap-2 px-[1rem] py-[.6rem] font-body text-[.95rem] transition-colors",
                  isActive ? "bg-gold-tint" : "bg-transparent",
                  isSelected ? "font-semibold text-gold-deep" : "text-charcoal"
                )}
              >
                <span className="truncate">{it.label}</span>
                {isSelected && (
                  <Icon
                    name="check"
                    strokeWidth={2.4}
                    className="h-[15px] w-[15px] flex-none text-gold-deep"
                  />
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
