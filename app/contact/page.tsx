import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/contact/ContactSection";
import { Footer } from "@/components/layout/Footer";
import { meta } from "@/lib/content/contact";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: meta.title,
  description: meta.description,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <main>
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
