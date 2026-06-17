import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { LinkArrow } from "@/components/ui/LinkArrow";
import { RingWatermark } from "@/components/ui/RingWatermark";
import { services } from "@/lib/content/home";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for doesn't exist or has moved.",
};

// Root 404 — catches all unmatched URLs and renders inside the layout (Nav
// stays). Mirrors the navy "on-dark" hero/CTA treatment used across the site.
export default function NotFound() {
  return (
    <main className="on-dark relative flex min-h-screen items-center overflow-hidden bg-navy pt-[clamp(8rem,6rem+6vw,11rem)] pb-[clamp(4rem,3rem+4vw,7rem)]">
      <RingWatermark
        circles={[22, 38, 54, 70, 86, 99]}
        className="left-1/2 top-1/2 h-195 w-195 -translate-x-1/2 -translate-y-1/2 opacity-[0.07]"
      />
      <Container className="relative z-2">
        <div className="mx-auto max-w-200 text-center">
          <Eyebrow center tone="soft">
            Error 404
          </Eyebrow>

          <p className="mt-6 font-head text-[clamp(4.5rem,3rem+10vw,8rem)] font-extrabold leading-none tracking-[-0.03em] text-gold">
            404
          </p>

          <h1 className="mt-4 text-[clamp(1.7rem,1.25rem+1.8vw,2.4rem)] leading-[1.2]">
            This page couldn&apos;t be found
          </h1>
          <p className="lead mx-auto mt-6 max-w-150 leading-[1.7]">
            The page you&apos;re looking for doesn&apos;t exist or may have moved.
            Let&apos;s get you back to building your Philippine team.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Button href="/" variant="primary" arrow>
              Back to Home
            </Button>
            <Button href="/#contact" variant="ghost-dark">
              Book a Consultation
            </Button>
          </div>

          <div className="mx-auto mt-14 max-w-220 border-t border-white/12 pt-10">
            <p className="font-body text-[.78rem] font-semibold uppercase tracking-[.14em] text-gold-soft">
              Explore our services
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <LinkArrow
                  key={s.href}
                  href={s.href}
                  className="flex w-full justify-between rounded-xl border border-white/10 bg-white/4 p-[.85rem_1.1rem] text-left text-white transition-colors hover:border-gold/40 hover:bg-gold/8"
                >
                  {s.title}
                </LinkArrow>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
