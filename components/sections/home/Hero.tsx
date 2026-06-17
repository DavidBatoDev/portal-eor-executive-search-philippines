import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { RingWatermark } from "@/components/ui/RingWatermark";
import { hero, services } from "@/lib/content/home";
import { cx } from "@/lib/cx";

export function Hero() {
  return (
    <section
      id="top"
      className="hero-skyline on-dark relative overflow-hidden pt-[clamp(6.5rem,5rem+3vw,8rem)] pb-[clamp(3rem,2.25rem+2.5vw,4.5rem)]"
    >
      <RingWatermark
        circles={[22, 38, 54, 70, 86, 99]}
        className="right-[-12%] top-[-18%] h-195 w-195 opacity-[0.07]"
      />

      <Container className="relative z-2 grid items-center gap-[clamp(2.5rem,4.5vw,5rem)] lg:grid-cols-[1.04fr_.96fr]">
        <div>
          <Eyebrow tone="soft">{hero.eyebrow}</Eyebrow>
          <h1 className="mt-[1.2rem] max-w-[26ch] text-[clamp(1.85rem,1.3rem+1.6vw,2.6rem)] leading-[1.1] tracking-[-0.018em]">
            {hero.headlinePre}
            <em className="not-italic text-gold">{hero.headlineEm}</em>
            {hero.headlinePost}
          </h1>
          <p className="lead mt-[1.15rem] max-w-130 text-[1.02rem] leading-[1.6]">{hero.lead}</p>

          <div className="mt-7 flex flex-wrap gap-4">
            <Button href={hero.primaryCta.href} variant="primary" arrow>
              {hero.primaryCta.label}
            </Button>
            <Button href={hero.secondaryCta.href} variant="ghost-dark">
              {hero.secondaryCta.label}
            </Button>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/12 pt-5">
            {hero.tags.map((t) => (
              <span
                key={t.label}
                className="flex items-center gap-2 whitespace-nowrap font-head text-[.72rem] font-bold uppercase tracking-[.03em] text-white/82"
              >
                <Icon name={t.icon} strokeWidth={1.8} className="h-3.75 w-3.75 flex-none text-gold" />
                {t.label}
              </span>
            ))}
          </div>
        </div>

        {/* Service preview panel — hidden below lg; the same services appear in
            the nav dropdown and the ServiceGrid section directly below. */}
        <div className="edge-gold relative hidden rounded-lg border border-white/10 bg-white/4 p-5 shadow-[0_24px_60px_rgba(0,0,0,.28)] backdrop-blur-sm lg:block">
          <p className="flex items-center gap-[.55rem] px-[.35rem] pb-3 pt-[.2rem] font-body text-[.72rem] font-semibold uppercase tracking-[.14em] text-gold-soft before:h-0.5 before:w-5.5 before:flex-none before:bg-gold before:content-['']">
            {hero.previewLabel}
          </p>
          <div className="flex flex-col">
            {services.map((s, i) => (
              <Link
                key={s.href}
                href={s.href}
                className={cx(
                  "group relative flex items-center gap-3 rounded-xl p-[.6rem_.5rem] transition-colors hover:bg-gold/8",
                  i > 0 && "border-t border-white/7"
                )}
              >
                <span className="grid h-9 w-9 flex-none place-items-center rounded-sm border border-gold/24 bg-gold/13 text-gold-soft">
                  <Icon name={s.icon} className="h-4.5 w-4.5" />
                </span>
                <span className="min-w-0">
                  <span className="block font-head text-[.95rem] tracking-[-0.01em] text-white">
                    {s.title}
                  </span>
                  <span className="mt-[.05rem] block text-[.8rem] leading-[1.35] text-white/60">
                    {s.blurb}
                  </span>
                </span>
                <Icon
                  name="arrow-right"
                  strokeWidth={2.2}
                  className="ml-auto h-4 w-4 flex-none text-white/35 transition-[transform,color] duration-200 group-hover:translate-x-0.75 group-hover:text-gold"
                />
              </Link>
            ))}
          </div>
        </div>
      </Container>

      {/* bottom blend into the navy marquee that follows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-1 h-35 bg-gradient-to-b from-transparent to-navy-900"
      />
    </section>
  );
}
