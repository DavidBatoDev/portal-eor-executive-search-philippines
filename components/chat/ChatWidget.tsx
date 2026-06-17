"use client";

import { useEffect, useRef, useState } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { LogoMark } from "@/components/ui/LogoMark";
import { Icon } from "@/components/ui/Icon";
import { footer } from "@/lib/content/home";
import { cx } from "@/lib/cx";

const GREETING =
  "Hi! I'm Portal's assistant. Ask me about our workforce services, the team, or how we can help you hire in the Philippines.";

const SUGGESTIONS = [
  "What does Portal do?",
  "Who's on the team?",
  "Do you offer payroll outsourcing?",
];

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const { messages, sendMessage, status, error } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  });

  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const busy = status === "submitted" || status === "streaming";

  // Auto-scroll to the latest message.
  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight });
  }, [messages, status]);

  // Focus the input when the panel opens.
  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  // Esc to close.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function submit(text: string) {
    const t = text.trim();
    if (!t || busy) return;
    sendMessage({ text: t });
    setInput("");
  }

  return (
    <>
      <button
        type="button"
        aria-label={open ? "Close chat" : "Open chat"}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-5 right-5 z-[110] grid h-14 w-14 place-items-center rounded-full bg-gold text-navy shadow-gold transition-transform duration-200 hover:-translate-y-0.5 hover:scale-105 motion-reduce:transition-none"
      >
        <Icon
          name="chat"
          strokeWidth={2}
          className={cx(
            "absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 transition-all duration-200 motion-reduce:transition-none",
            open ? "rotate-90 scale-50 opacity-0" : "rotate-0 scale-100 opacity-100"
          )}
        />
        <Icon
          name="close"
          strokeWidth={2}
          className={cx(
            "absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 transition-all duration-200 motion-reduce:transition-none",
            open ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-50 opacity-0"
          )}
        />
      </button>

        <div
          role="dialog"
          aria-label="Portal Assistant"
          aria-hidden={!open}
          inert={!open || undefined}
          className={cx(
            "fixed bottom-24 right-5 z-[110] flex h-[min(70vh,560px)] w-[min(92vw,400px)] origin-bottom-right flex-col overflow-hidden rounded-lg border border-border bg-white shadow-lg transition-[opacity,transform] duration-200 ease-out motion-reduce:transition-none motion-reduce:duration-0",
            open
              ? "translate-y-0 scale-100 opacity-100"
              : "pointer-events-none translate-y-3 scale-95 opacity-0"
          )}
        >
          {/* Header */}
          <div className="flex items-center gap-3 bg-navy px-5 py-4 text-white">
            <LogoMark className="h-7 w-7 flex-none text-gold" />
            <div className="flex-1">
              <p className="font-head text-[.95rem] font-bold leading-tight text-white">
                Portal Assistant
              </p>
              <p className="text-[.72rem] text-white/60">Ask about our workforce services</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="grid h-8 w-8 place-items-center rounded-sm text-white/70 transition-colors hover:bg-white/10 hover:text-white"
            >
              <Icon name="close" strokeWidth={2} className="h-4.5 w-4.5" />
            </button>
          </div>

          {/* Messages */}
          <div
            ref={listRef}
            aria-live="polite"
            className="flex-1 space-y-4 overflow-y-auto bg-soft px-4 py-5 text-[.92rem]"
          >
            <Bubble role="assistant">{GREETING}</Bubble>

            {messages.map((m) => (
              <Bubble key={m.id} role={m.role}>
                {m.parts.map((part, i) =>
                  part.type === "text" ? <span key={i}>{part.text}</span> : null
                )}
              </Bubble>
            ))}

            {status === "submitted" && <Typing />}

            {error && (
              <p className="text-[.85rem] text-copper">
                Chat is temporarily unavailable — please email{" "}
                <a className="font-semibold underline" href={`mailto:${footer.email}`}>
                  {footer.email}
                </a>
                .
              </p>
            )}
          </div>

          {/* Suggested prompts (only before the first message) */}
          {messages.length === 0 && (
            <div className="flex flex-wrap gap-2 border-t border-border bg-white px-4 py-3">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => submit(s)}
                  className="rounded-full border border-border px-3 py-1.5 text-[.8rem] text-navy transition-colors hover:border-gold hover:bg-gold-tint"
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              submit(input);
            }}
            className="flex items-end gap-2 border-t border-border bg-white p-3"
          >
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  submit(input);
                }
              }}
              rows={1}
              maxLength={500}
              placeholder="Ask about Portal…"
              className="max-h-28 flex-1 resize-none rounded-sm border border-border px-3 py-2 text-[.92rem] text-charcoal outline-none transition-colors placeholder:text-body/70 focus:border-gold"
            />
            <button
              type="submit"
              disabled={!input.trim() || busy}
              aria-label="Send message"
              className="grid h-10 w-10 flex-none place-items-center rounded-sm bg-gold text-navy transition-opacity hover:bg-gold-soft disabled:cursor-not-allowed disabled:opacity-40"
            >
              <Icon name="send" strokeWidth={2} className="h-5 w-5" />
            </button>
          </form>
        </div>
    </>
  );
}

function Bubble({ role, children }: { role: string; children: React.ReactNode }) {
  const isUser = role === "user";
  return (
    <div className={cx("flex", isUser ? "justify-end" : "justify-start")}>
      <div
        className={cx(
          "max-w-[85%] whitespace-pre-wrap rounded-lg px-3.5 py-2.5 leading-relaxed",
          isUser
            ? "bg-navy text-white"
            : "border border-border bg-white text-charcoal"
        )}
      >
        {children}
      </div>
    </div>
  );
}

function Typing() {
  return (
    <div className="flex justify-start">
      <div className="flex gap-1 rounded-lg border border-border bg-white px-3.5 py-3">
        <span className="h-2 w-2 animate-bounce rounded-full bg-gold [animation-delay:-0.2s]" />
        <span className="h-2 w-2 animate-bounce rounded-full bg-gold [animation-delay:-0.1s]" />
        <span className="h-2 w-2 animate-bounce rounded-full bg-gold" />
      </div>
    </div>
  );
}
