import type { Metadata } from "next";
import { LegalSection } from "@/components/sections/legal/LegalSection";
import { Footer } from "@/components/layout/Footer";
import { meta, hero, sections, contactInfo } from "@/lib/content/terms";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: meta.title,
  description: meta.description,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <main>
        <LegalSection hero={hero} sections={sections} contactInfo={contactInfo} />
      </main>
      <Footer />
    </>
  );
}
