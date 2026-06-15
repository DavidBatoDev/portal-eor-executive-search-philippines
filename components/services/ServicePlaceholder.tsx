import { Container } from "@/components/layout/Container";
import { Icon } from "@/components/ui/Icon";
import { RingWatermark } from "@/components/ui/RingWatermark";
import type { ServiceInfo } from "@/lib/content/services";

// Light, compact "day" coming-soon hero for services without a full page build
// yet — matches the EOR service hero: cream wash, dark-blue accents, white
// emblem.
export function ServicePlaceholder({ service }: { service: ServiceInfo }) {
  return (
    <section className="hero-skyline-sub relative overflow-hidden border-b border-border pb-[clamp(3.25rem,2.5rem+2.5vw,4.5rem)] pt-[clamp(6rem,4.75rem+3vw,7.5rem)]">
      <RingWatermark
        circles={[22, 38, 54, 70, 86, 99]}
        colorClass="text-blue"
        className="left-1/2 top-[-30%] h-[560px] w-[560px] -translate-x-1/2 opacity-[0.16]"
      />
      <Container className="relative z-[2]">
        <div className="mx-auto max-w-[760px] text-center">
          <span className="mx-auto mb-[1.3rem] grid h-[62px] w-[62px] place-items-center rounded-full border border-white/60 bg-white text-navy shadow-[0_16px_38px_rgba(16,24,40,.2)]">
            <Icon name={service.icon} strokeWidth={1.7} className="h-[28px] w-[28px]" />
          </span>

          <span className="mb-[1.1rem] inline-flex items-center justify-center gap-[.6rem] font-body text-[.78rem] font-semibold uppercase tracking-[.14em] text-blue">
            <span aria-hidden className="h-[2px] w-[26px] bg-blue" />
            Portal Services
            <span aria-hidden className="h-[2px] w-[26px] bg-blue" />
          </span>

          <h2 className="text-navy">{service.name}</h2>

          <span className="mt-[1.6rem] inline-flex items-center gap-[.5rem] rounded-full border border-blue/30 bg-white/80 px-[1.1rem] py-[.55rem] font-head text-[.85rem] font-semibold uppercase tracking-[.1em] text-blue">
            <Icon name="search-clock" strokeWidth={1.9} className="h-[16px] w-[16px]" />
            Coming soon
          </span>
        </div>
      </Container>
    </section>
  );
}
