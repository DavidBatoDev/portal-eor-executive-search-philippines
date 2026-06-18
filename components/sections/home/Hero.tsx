import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { RingWatermark } from "@/components/ui/RingWatermark";
import { hero } from "@/lib/content/home";

export function Hero() {
  return (
    <section
      id="top"
      className="hero-skyline on-dark relative overflow-hidden pt-[clamp(7.5rem,5.5rem+4vw,10rem)] pb-[clamp(4rem,3rem+3vw,5.5rem)]"
    >
      <RingWatermark
        circles={[22, 38, 54, 70, 86, 99]}
        className="left-1/2 top-1/2 h-200 w-200 -translate-x-1/2 -translate-y-1/2 opacity-[0.06]"
      />

      <Container className="relative z-2 flex flex-col items-center text-center">
        <Eyebrow tone="soft" center>
          {hero.eyebrow}
        </Eyebrow>
        <h1 className="mt-[1.2rem] max-w-6xl text-[clamp(2.15rem,1.5rem+2.7vw,3.4rem)] leading-[1.06] tracking-[-0.02em]">
          {hero.headline.map((seg, i) =>
            seg.em ? (
              <em key={i} className="not-italic text-gold">
                {seg.text}
              </em>
            ) : (
              <span key={i}>{seg.text}</span>
            )
          )}
        </h1>
        <p className="lead mt-[1.3rem] max-w-5xl">{hero.lead}</p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href={hero.primaryCta.href} variant="primary" arrow>
            {hero.primaryCta.label}
          </Button>
          <Button href={hero.secondaryCta.href} variant="ghost-dark">
            {hero.secondaryCta.label}
          </Button>
        </div>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-white/12 pt-6">
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
      </Container>

      {/* bottom blend into the navy marquee that follows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-1 h-35 bg-gradient-to-b from-transparent to-navy-900"
      />
    </section>
  );
}
