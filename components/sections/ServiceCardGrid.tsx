import { ServiceCard, type ServiceCardData } from "@/components/sections/ServiceCard";

// Responsive 3-up grid of service cards (the homepage card layout).
export function ServiceCardGrid({ cards }: { cards: ServiceCardData[] }) {
  return (
    <div className="mt-14 grid gap-[clamp(1.25rem,2.5vw,1.75rem)] md:grid-cols-2 lg:grid-cols-3">
      {cards.map((c, i) => (
        <ServiceCard key={c.href} card={c} delay={((i % 3) + 1) as 1 | 2 | 3} />
      ))}
    </div>
  );
}
