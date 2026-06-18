import { Fragment } from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { RingWatermark } from "@/components/ui/RingWatermark";

type Crumb = { label: string; href: string };
type Cta = { label: string; href: string };

// Inner service-page hero: single centered column, compact height, skyline
// parallax background (§6). Optional primary/secondary CTAs below the lead.
export function ServiceHero({
  breadcrumb,
  current,
  titlePre,
  titleEm,
  titlePost,
  lead,
  ctas,
}: {
  breadcrumb: Crumb[];
  current: string;
  titlePre: string;
  titleEm?: string;
  titlePost?: string;
  lead: string;
  ctas?: { primary: Cta; secondary?: Cta };
}) {
  return (
    <section className="hero-skyline on-dark relative overflow-hidden pt-[clamp(8.5rem,7rem+6vw,11rem)] pb-[clamp(5rem,3.5rem+4vw,7rem)]">
      <RingWatermark
        circles={[22, 38, 54, 70, 86, 99]}
        className="left-1/2 top-[-26%] h-195 w-195 -translate-x-1/2 opacity-[0.07]"
      />
      <Container className="relative z-2">
        <div className="mx-auto max-w-235 text-center">
          <nav
            aria-label="Breadcrumb"
            className="mb-[1.6rem] flex flex-wrap items-center justify-center gap-2 font-body text-[.82rem] text-white/55"
          >
            {breadcrumb.map((b) => (
              <Fragment key={b.href}>
                <Link href={b.href} className="text-white/70 transition-colors hover:text-gold">
                  {b.label}
                </Link>
                <Icon name="chevron-right" strokeWidth={2.2} className="h-3.5 w-3.5 opacity-60" />
              </Fragment>
            ))}
            <span className="font-semibold text-gold-soft">{current}</span>
          </nav>

          <h1 className="mx-auto max-w-[32ch] wrap-break-word text-[clamp(1.95rem,1.25rem+2.3vw,2.85rem)] leading-[1.2]">
            {titlePre}
            {titleEm && <em className="not-italic text-gold">{titleEm}</em>}
            {titlePost}
          </h1>

          <p className="lead mx-auto mt-8 max-w-190 leading-[1.7]">{lead}</p>

          {ctas && (
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Button href={ctas.primary.href} variant="primary" arrow>
                {ctas.primary.label}
              </Button>
              {ctas.secondary && (
                <Button href={ctas.secondary.href} variant="ghost-dark">
                  {ctas.secondary.label}
                </Button>
              )}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
