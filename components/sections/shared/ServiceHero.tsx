import { Fragment } from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Icon } from "@/components/ui/Icon";
import { RingWatermark } from "@/components/ui/RingWatermark";

type Crumb = { label: string; href: string };
type RoleSearch = {
  service: string;
  placeholder: string;
  submitLabel: string;
  hint: string;
};

// Inner service-page hero: single centered column, compact height, skyline
// parallax background (§6). Optional role-search bar GETs to /assessment.
export function ServiceHero({
  breadcrumb,
  current,
  titlePre,
  titleEm,
  titlePost,
  lead,
  roleSearch,
}: {
  breadcrumb: Crumb[];
  current: string;
  titlePre: string;
  titleEm?: string;
  titlePost?: string;
  lead: string;
  roleSearch?: RoleSearch;
}) {
  return (
    <section className="hero-skyline on-dark relative overflow-hidden pt-[clamp(8.5rem,7rem+6vw,11rem)] pb-[clamp(5rem,3.5rem+4vw,7rem)]">
      <RingWatermark
        circles={[22, 38, 54, 70, 86, 99]}
        className="left-1/2 top-[-26%] h-[780px] w-[780px] -translate-x-1/2 opacity-[0.07]"
      />
      <Container className="relative z-[2]">
        <div className="mx-auto max-w-[940px] text-center">
          <nav
            aria-label="Breadcrumb"
            className="mb-[1.6rem] flex flex-wrap items-center justify-center gap-2 font-body text-[.82rem] text-white/55"
          >
            {breadcrumb.map((b) => (
              <Fragment key={b.href}>
                <Link href={b.href} className="text-white/70 transition-colors hover:text-gold">
                  {b.label}
                </Link>
                <Icon name="chevron-right" strokeWidth={2.2} className="h-[14px] w-[14px] opacity-60" />
              </Fragment>
            ))}
            <span className="font-semibold text-gold-soft">{current}</span>
          </nav>

          <h1 className="mx-auto max-w-[32ch] break-words text-[clamp(1.95rem,1.25rem+2.3vw,2.85rem)] leading-[1.2]">
            {titlePre}
            {titleEm && <em className="not-italic text-gold">{titleEm}</em>}
            {titlePost}
          </h1>

          <p className="lead mx-auto mt-8 max-w-[760px] leading-[1.7]">{lead}</p>

          {roleSearch && <RoleSearch {...roleSearch} />}
        </div>
      </Container>
    </section>
  );
}

function RoleSearch({ service, placeholder, submitLabel, hint }: RoleSearch) {
  return (
    <>
      <form
        action="/assessment"
        method="get"
        role="search"
        aria-label="Start your workforce assessment"
        className="mx-auto mt-[2.6rem] flex max-w-[660px] items-center gap-2 rounded-full border border-white/[.18] bg-white/[.06] p-[.5rem_.5rem_.5rem_1.35rem] text-left shadow-[0_18px_50px_rgba(0,0,0,.32)] backdrop-blur-[8px] transition-[border-color,box-shadow] focus-within:border-gold/60 focus-within:shadow-[0_0_0_4px_rgba(217,164,55,.14),0_18px_50px_rgba(0,0,0,.34)] max-[560px]:flex-col max-[560px]:items-stretch max-[560px]:gap-[.7rem] max-[560px]:rounded-[16px] max-[560px]:p-[.85rem]"
      >
        <input type="hidden" name="service" value={service} />
        <span className="grid flex-none place-items-center text-gold-soft max-[560px]:hidden" aria-hidden="true">
          <Icon name="search" strokeWidth={1.8} className="h-[22px] w-[22px]" />
        </span>
        <input
          type="text"
          name="role"
          autoComplete="off"
          required
          placeholder={placeholder}
          aria-label="Role you want to hire for"
          className="min-w-0 flex-1 border-none bg-transparent p-[.75rem_.3rem] font-body text-[1.05rem] text-white outline-none placeholder:text-white/55 max-[560px]:rounded-[11px] max-[560px]:border max-[560px]:border-white/[.16] max-[560px]:bg-white/[.06] max-[560px]:p-[.9rem_1rem] max-[560px]:text-center max-[560px]:text-base"
        />
        <button
          type="submit"
          className="inline-flex flex-none items-center justify-center gap-[.6rem] rounded-full bg-gold px-[1.55rem] py-[.85rem] font-head font-bold text-navy shadow-gold transition-[transform,box-shadow,background-color] duration-200 hover:-translate-y-0.5 hover:bg-gold-soft max-[560px]:w-full"
        >
          {submitLabel}
          <Icon name="arrow-right" strokeWidth={2.2} className="h-[18px] w-[18px]" />
        </button>
      </form>
      <p className="mt-[1.1rem] flex flex-wrap items-center justify-center gap-[.55rem] text-[.85rem] text-white/60">
        {hint}
      </p>
    </>
  );
}
