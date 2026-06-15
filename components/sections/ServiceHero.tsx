import { Container } from "@/components/layout/Container";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { RingWatermark } from "@/components/ui/RingWatermark";

type RoleSearch = {
  service: string;
  placeholder: string;
  submitLabel: string;
  hint: string;
};

// Centered blue eyebrow (day theme) — the gold Eyebrow's counterpart.
function BlueEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="mb-[1.1rem] inline-flex items-center justify-center gap-[.6rem] font-body text-[.78rem] font-semibold uppercase tracking-[.14em] text-blue">
      <span aria-hidden className="h-[2px] w-[26px] bg-blue" />
      {children}
      <span aria-hidden className="h-[2px] w-[26px] bg-blue" />
    </span>
  );
}

// Light, compact "day" service-page hero — the counterpart to the dark "night"
// homepage hero, kept smaller so it never reads as another homepage. Dark text,
// dark-blue accents, white service emblem. Heading stays an <h2>; location is
// shown in the nav ("Services · <name>").
export function ServiceHero({
  icon,
  eyebrow,
  titlePre,
  titleEm,
  titlePost,
  lead,
  cta,
  roleSearch,
}: {
  icon: IconName;
  eyebrow: string;
  titlePre: string;
  titleEm?: string;
  titlePost?: string;
  lead: string;
  cta?: { label: string; href: string };
  roleSearch?: RoleSearch;
}) {
  return (
    <section className="hero-skyline-sub relative overflow-hidden border-b border-border pb-[clamp(2.75rem,2rem+2.5vw,4rem)] pt-[clamp(6rem,4.75rem+3vw,7.5rem)]">
      <RingWatermark
        circles={[22, 38, 54, 70, 86, 99]}
        colorClass="text-blue"
        className="left-1/2 top-[-30%] h-[560px] w-[560px] -translate-x-1/2 opacity-[0.16]"
      />
      <Container className="relative z-[2]">
        <div className="mx-auto max-w-[820px] text-center">
          <span className="mx-auto mb-[1.3rem] grid h-[62px] w-[62px] place-items-center rounded-full border border-white/60 bg-white text-navy shadow-[0_16px_38px_rgba(16,24,40,.2)]">
            <Icon name={icon} strokeWidth={1.7} className="h-[28px] w-[28px]" />
          </span>

          <BlueEyebrow>{eyebrow}</BlueEyebrow>

          <h2 className="mx-auto max-w-[24ch] break-words text-navy">
            {titlePre}
            {titleEm && <em className="not-italic text-blue">{titleEm}</em>}
            {titlePost}
          </h2>

          <p className="lead mx-auto mt-5 max-w-[660px] text-charcoal">{lead}</p>

          {roleSearch ? (
            <RoleSearch {...roleSearch} />
          ) : cta ? (
            <div className="mt-[2rem] flex justify-center">
              <Button href={cta.href} variant="primary" arrow>
                {cta.label}
              </Button>
            </div>
          ) : null}
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
        className="mx-auto mt-[2.2rem] flex max-w-[640px] items-center gap-2 rounded-full border border-border bg-white p-[.5rem_.5rem_.5rem_1.35rem] text-left shadow-lg transition-[border-color,box-shadow] focus-within:border-gold/60 focus-within:shadow-[0_0_0_4px_rgba(217,164,55,.14)] max-[560px]:flex-col max-[560px]:items-stretch max-[560px]:gap-[.7rem] max-[560px]:rounded-[16px] max-[560px]:p-[.85rem]"
      >
        <input type="hidden" name="service" value={service} />
        <span
          className="grid flex-none place-items-center text-gold-deep max-[560px]:hidden"
          aria-hidden="true"
        >
          <Icon name="search" strokeWidth={1.8} className="h-[22px] w-[22px]" />
        </span>
        <input
          type="text"
          name="role"
          autoComplete="off"
          required
          placeholder={placeholder}
          aria-label="Role you want to hire for"
          className="min-w-0 flex-1 border-none bg-transparent p-[.75rem_.3rem] font-body text-[1.05rem] text-charcoal outline-none placeholder:text-body/60 max-[560px]:rounded-[11px] max-[560px]:border max-[560px]:border-border max-[560px]:bg-soft max-[560px]:p-[.9rem_1rem] max-[560px]:text-center max-[560px]:text-base"
        />
        <button
          type="submit"
          className="inline-flex flex-none items-center justify-center gap-[.6rem] rounded-full bg-gold px-[1.55rem] py-[.85rem] font-head font-bold text-navy shadow-gold transition-[transform,box-shadow,background-color] duration-200 hover:-translate-y-0.5 hover:bg-gold-soft max-[560px]:w-full"
        >
          {submitLabel}
          <Icon name="arrow-right" strokeWidth={2.2} className="h-[18px] w-[18px]" />
        </button>
      </form>
      <p className="mt-[1.1rem] flex flex-wrap items-center justify-center gap-[.55rem] text-[.85rem] text-charcoal/70">
        {hint}
      </p>
    </>
  );
}
