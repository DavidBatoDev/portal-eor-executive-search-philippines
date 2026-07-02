import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icon";

type LegalSectionItem = {
  heading: string;
  body: string;
  list?: string[];
};

type ContactInfo = {
  heading: string;
  intro: string;
  email: { label: string; display: string; href: string };
  phone: { label: string; display: string; href: string };
  address: { label: string; display: string };
};

/** Shared body layout for text-heavy legal pages (Terms & Conditions, Privacy Policy). */
export function LegalSection({
  hero,
  sections,
  contactInfo,
}: {
  hero: { eyebrow: string; heading: string; lead: string };
  sections: LegalSectionItem[];
  contactInfo: ContactInfo;
}) {
  return (
    <section className="relative bg-cream py-[clamp(5rem,4rem+6vw,9rem)]">
      <Container>
        <div className="max-w-190">
          <Eyebrow className="mb-[1.1rem]">{hero.eyebrow}</Eyebrow>
          <h1>{hero.heading}</h1>
          <p className="lead mt-5">{hero.lead}</p>
        </div>

        <div className="mt-12 max-w-[70ch] space-y-10">
          {sections.map((s) => (
            <div key={s.heading}>
              <h2 className="text-[clamp(1.3rem,1.1rem+0.6vw,1.6rem)]">{s.heading}</h2>
              <p className="mt-3 leading-[1.75] text-body">{s.body}</p>
              {s.list && (
                <ul className="mt-3 space-y-2">
                  {s.list.map((item) => (
                    <li key={item} className="flex gap-3 leading-[1.75] text-body">
                      <span className="mt-[.65em] h-1.5 w-1.5 flex-none rounded-full bg-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <div>
            <h2 className="text-[clamp(1.3rem,1.1rem+0.6vw,1.6rem)]">{contactInfo.heading}</h2>
            <p className="mt-3 leading-[1.75] text-body">{contactInfo.intro}</p>
            <div className="mt-5 flex flex-col gap-3 text-[.95rem]">
              <a href={contactInfo.email.href} className="flex items-center gap-[.6rem]">
                <Icon name="mail" strokeWidth={1.7} className="h-4.25 w-4.25 flex-none text-gold-deep" />
                <span className="font-medium text-navy">{contactInfo.email.display}</span>
              </a>
              <a href={contactInfo.phone.href} className="flex items-center gap-[.6rem]">
                <Icon name="phone" strokeWidth={1.7} className="h-4.25 w-4.25 flex-none text-gold-deep" />
                <span className="font-medium text-navy">{contactInfo.phone.display}</span>
              </a>
              <span className="flex items-start gap-[.6rem]">
                <Icon name="map-pin" strokeWidth={1.7} className="mt-0.5 h-4.25 w-4.25 flex-none text-gold-deep" />
                <span className="font-medium text-navy">{contactInfo.address.display}</span>
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
