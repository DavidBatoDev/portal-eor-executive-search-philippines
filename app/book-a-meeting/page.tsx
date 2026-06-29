import type { Metadata } from "next";
import { BookingHero } from "@/components/sections/book-a-meeting/BookingHero";
import { BookingForm } from "@/components/sections/book-a-meeting/BookingForm";
import { WhyBook } from "@/components/sections/book-a-meeting/WhyBook";
import { Footer } from "@/components/layout/Footer";
import { meta } from "@/lib/content/book-a-meeting";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: meta.title,
  description: meta.description,
  path: "/book-a-meeting",
});

export default function BookAMeetingPage() {
  return (
    <>
      <main>
        <BookingHero />
        <BookingForm />
        <WhyBook />
      </main>
      <Footer />
    </>
  );
}
