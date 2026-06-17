import type { Metadata } from "next";
import { Hero } from "@/components/sections/home/Hero";
import { ProofMarquee } from "@/components/sections/home/ProofMarquee";
import { Intro } from "@/components/sections/home/Intro";
import { ServiceGrid } from "@/components/sections/home/ServiceGrid";
import { Journey } from "@/components/sections/home/Journey";
import { Challenge } from "@/components/sections/home/Challenge";
import { NationwideMap } from "@/components/sections/home/NationwideMap";
import { WhoWeHelp } from "@/components/sections/home/WhoWeHelp";
import { UseCases } from "@/components/sections/home/UseCases";
import { WhyPortal } from "@/components/sections/home/WhyPortal";
import { Team } from "@/components/sections/home/Team";
import { Faq } from "@/components/sections/shared/Faq";
import { FinalCta } from "@/components/sections/shared/FinalCta";
import { Footer } from "@/components/layout/Footer";
import { meta, faq, finalCta } from "@/lib/content/home";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: meta.title,
  description: meta.description,
  path: "/",
});

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <ProofMarquee />
        <Intro />
        <ServiceGrid />
        <Journey />
        <Challenge />
        <NationwideMap />
        <WhoWeHelp />
        <UseCases />
        <WhyPortal />
        <Team />
        <Faq eyebrow={faq.eyebrow} heading={faq.heading} lead={faq.lead} items={faq.items} />
        <FinalCta
          eyebrow={finalCta.eyebrow}
          heading={finalCta.heading}
          lead={finalCta.lead}
          primary={finalCta.primaryCta}
          secondary={finalCta.secondaryCta}
        />
      </main>
      <Footer />
    </>
  );
}
