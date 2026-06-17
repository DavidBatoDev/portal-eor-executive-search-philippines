import { Fragment } from "react";
import { proof } from "@/lib/content/home";

// "Proven Philippine Workforce Support" stats marquee (homepage only — inner
// service pages omit it per §6).
export function ProofMarquee() {
  const loop = [...proof.stats, ...proof.stats];
  return (
    <div className="marquee-pause relative overflow-hidden border-t border-white/[.06] bg-navy py-[clamp(3rem,2.2rem+2.4vw,4.5rem)]">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent opacity-50"
      />
      <p className="mb-[2.2rem] flex items-center justify-center gap-[.8rem] font-body text-[.78rem] font-semibold uppercase tracking-[.18em] text-gold-soft before:h-px before:w-8.5 before:bg-gold/50 before:content-[''] after:h-px after:w-8.5 after:bg-gold/50 after:content-['']">
        {proof.label}
      </p>
      <div className="marquee-mask flex overflow-hidden">
        <div className="marquee-track flex flex-none items-center">
          {loop.map((s, i) => (
            <Fragment key={i}>
              <span className="flex items-center gap-[.85rem] whitespace-nowrap px-[clamp(1.6rem,3vw,2.8rem)]">
                <span className="font-head text-[clamp(1.5rem,1.2rem+1vw,2rem)] font-extrabold leading-none tracking-[-0.02em] text-gold">
                  {s.num}
                </span>
                <span className="text-base font-medium text-white/[.82]">{s.lbl}</span>
              </span>
              <span className="h-1.75 w-1.75 flex-none text-gold-deep opacity-85">
                <svg viewBox="0 0 8 8" className="h-full w-full">
                  <circle cx="4" cy="4" r="3" fill="currentColor" />
                </svg>
              </span>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
