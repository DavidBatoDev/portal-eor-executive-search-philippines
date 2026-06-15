import { Reveal } from "@/components/ui/Reveal";
import { Icon, type IconName } from "@/components/ui/Icon";
import { IconFrame } from "@/components/ui/IconFrame";
import { LinkArrow } from "@/components/ui/LinkArrow";

export type ServiceCardData = {
  href: string;
  title: string;
  body: string;
  linkLabel: string;
  icon: IconName;
};

// Single service card (icon, title, description, "Learn more" link). The whole
// card is clickable via the stretched-link ::before. Used by the homepage grid
// and the "Explore Our Other Services" section so both match exactly.
export function ServiceCard({
  card,
  delay,
}: {
  card: ServiceCardData;
  delay?: 1 | 2 | 3;
}) {
  return (
    <Reveal
      as="article"
      delay={delay}
      className="group relative flex h-full flex-col overflow-hidden rounded border border-border bg-white p-8 shadow-sm transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-1 hover:border-[#dfe2e7] hover:shadow-lg"
    >
      <span className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gold transition-transform duration-[350ms] group-hover:scale-x-100" />
      <IconFrame tone="navy" className="mb-6">
        <Icon name={card.icon} />
      </IconFrame>
      <h3 className="mb-[.7rem]">{card.title}</h3>
      <p className="mb-6 flex-1 text-[.98rem]">{card.body}</p>
      {/* Stretched link: ::before covers the whole card so the entire card is
          clickable, while keeping one accessible link. */}
      <LinkArrow
        href={card.href}
        className="before:absolute before:inset-0 before:content-['']"
      >
        {card.linkLabel}
      </LinkArrow>
    </Reveal>
  );
}
