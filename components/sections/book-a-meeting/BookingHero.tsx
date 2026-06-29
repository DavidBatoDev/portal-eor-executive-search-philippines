import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icon";
import { RingWatermark } from "@/components/ui/RingWatermark";
import { hero } from "@/lib/content/book-a-meeting";

export function BookingHero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-cream pt-[clamp(7rem,5rem+4vw,9.5rem)] pb-[clamp(3.5rem,2.5rem+2vw,5rem)]"
    >
      <RingWatermark
        circles={[22, 38, 54, 70, 86, 99]}
        colorClass="text-navy"
        className="left-1/2 top-1/2 h-[min(180vw,900px)] w-[min(180vw,900px)] -translate-x-1/2 -translate-y-1/2 opacity-[0.05]"
      />

      <Container className="relative z-2 flex flex-col items-center text-center">
        <Eyebrow center>{hero.eyebrow}</Eyebrow>
        <h1 className="mt-[1.1rem] max-w-3xl text-[clamp(2rem,1.3rem+2.5vw,3rem)] leading-[1.06] tracking-[-0.02em] text-navy">
          {hero.heading}
        </h1>
        <p className="lead mt-5 max-w-xl text-body">{hero.lead}</p>

        <a
          href="#schedule"
          className="mt-8 inline-flex flex-col items-center gap-[.4rem] font-head text-[.75rem] font-bold uppercase tracking-[.14em] text-gold-deep transition-opacity hover:opacity-70"
        >
          {hero.scrollLabel}
          <Icon name="caret-down" className="h-4 w-4" strokeWidth={2.4} />
        </a>
      </Container>
    </section>
  );
}
