import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/ui/LogoMark";
import { Icon } from "@/components/ui/Icon";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from "@/components/ui/SocialIcons";
import { footer } from "@/lib/content/home";

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  const className =
    "text-[.95rem] text-white/70 transition-colors hover:text-gold";
  return href.startsWith("/") ? (
    <Link href={href} className={className}>
      {children}
    </Link>
  ) : (
    <a href={href} className={className}>
      {children}
    </a>
  );
}

const SOCIAL = [
  { label: "Portal on LinkedIn", Icon: LinkedInIcon },
  { label: "Portal on Facebook", Icon: FacebookIcon },
  { label: "Portal on Instagram", Icon: InstagramIcon },
  { label: "Portal on X", Icon: XIcon },
];

export function Footer() {
  return (
    <footer className="bg-navy-900 pt-[clamp(3.5rem,5vw,5rem)] text-white/60">
      <Container>
        <div className="grid grid-cols-1 gap-10 pb-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="max-w-80 md:col-span-2 lg:col-span-1">
            <Logo onDark />
            <p className="mt-[1.2rem] text-[.95rem] leading-[1.7]">{footer.about}</p>

            <div className="mt-[1.4rem] flex flex-col gap-[.6rem] text-[.92rem]">
              <a href={`mailto:${footer.email}`} className="flex items-center gap-[.6rem]">
                <Icon name="mail" strokeWidth={1.7} className="h-4.25 w-4.25 flex-none text-gold" />
                {footer.email}
              </a>
              <a href={footer.phoneHref} className="flex items-center gap-[.6rem]">
                <Icon name="phone" strokeWidth={1.7} className="h-4.25 w-4.25 flex-none text-gold" />
                {footer.phoneDisplay}
              </a>
              <span className="flex items-start gap-[.6rem]">
                <Icon name="map-pin" strokeWidth={1.7} className="mt-0.5 h-4.25 w-4.25 flex-none text-gold" />
                <span>{footer.location}</span>
              </span>
            </div>

            <div className="mt-6 flex gap-[.7rem]" aria-label="Portal on social media">
              {SOCIAL.map(({ label, Icon: SvgIcon }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid h-9.5 w-9.5 flex-none place-items-center rounded-full border border-white/16 text-white/75 transition-[color,border-color,background-color,transform] duration-200 hover:-translate-y-0.5 hover:border-gold hover:bg-gold hover:text-navy"
                >
                  <SvgIcon className="h-4.25 w-4.25" />
                </a>
              ))}
            </div>
          </div>

          {footer.columns.map((col) => (
            <div key={col.heading}>
              <h5 className="mb-[1.2rem] font-head text-[.82rem] font-bold uppercase tracking-[.12em] text-white/50">
                {col.heading}
              </h5>
              <ul className="flex flex-col gap-[.8rem]">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <FooterLink href={l.href}>{l.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 py-[1.8rem] text-[.86rem] text-white/50">
          <span>{footer.copyright}</span>
          <div className="flex gap-[1.6rem]">
            {footer.legal.map((l) => (
              <a key={l.label} href={l.href} className="transition-colors hover:text-gold">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
