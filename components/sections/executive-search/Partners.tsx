import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";

type Consultant = {
  initials: string;
  name: string;
  role: string;
  bio: string;
  linkedin: string;
  meeting: string;
};

function LinkedInMark() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

// Dedicated-consultant cards: avatar initials, role, bio, and book/LinkedIn CTAs.
export function Partners({
  eyebrow,
  heading,
  lead,
  consultants,
  id = "partners",
}: {
  eyebrow: string;
  heading: string;
  lead: string;
  consultants: Consultant[];
  id?: string;
}) {
  return (
    <Section id={id} bg="cream">
      <Container>
        <Reveal>
          <SectionHead center eyebrow={eyebrow} heading={heading} lead={lead} />
        </Reveal>

        <div className="mt-[clamp(2.5rem,4vw,3.5rem)] grid gap-[clamp(1.25rem,2.5vw,1.75rem)] md:grid-cols-2">
          {consultants.map((c, i) => (
            <Reveal
              as="article"
              key={c.name}
              delay={((i % 2) + 1) as 1 | 2}
              className="rounded-lg border border-border bg-white p-[clamp(1.6rem,2.5vw,2rem)] shadow-sm transition-[transform,box-shadow] duration-200 hover:-translate-y-0.75 hover:shadow-lg"
            >
              <div className="flex items-start gap-5">
                <span className="grid h-18 w-18 flex-none place-items-center rounded-full border-2 border-gold/45 bg-navy font-head text-[1.3rem] font-extrabold text-gold">
                  {c.initials}
                </span>
                <div className="min-w-0">
                  <h3 className="text-[1.18rem]">{c.name}</h3>
                  <span className="mt-1 inline-flex items-center gap-2 font-head text-[.72rem] font-bold uppercase tracking-[.1em] text-gold-deep">
                    <span className="h-0.5 w-5 flex-none bg-gold" />
                    {c.role}
                  </span>
                  <p className="mt-3 text-[.96rem] leading-[1.6]">{c.bio}</p>
                  <div className="mt-5 flex gap-3">
                    <a
                      href={c.meeting}
                      className="inline-flex items-center gap-2 rounded-sm bg-navy px-[1.1rem] py-[.6rem] font-head text-[.9rem] font-bold text-white transition-colors duration-200 hover:bg-navy-900"
                    >
                      <Icon name="calendar" strokeWidth={2} className="h-4 w-4 text-gold" />
                      Book a meeting
                    </a>
                    <a
                      href={c.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-sm border border-border bg-white px-[1.1rem] py-[.6rem] font-head text-[.9rem] font-bold text-navy transition-colors duration-200 hover:border-gold hover:text-gold-deep"
                    >
                      <LinkedInMark />
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
