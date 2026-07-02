import type { Metadata } from "next";

/**
 * Production origin. Set NEXT_PUBLIC_SITE_URL in your hosting environment
 * (e.g. https://www.your-domain.com) so canonical URLs, Open Graph tags, the
 * sitemap, and robots.txt resolve to absolute production URLs. Falls back to
 * localhost in development.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
).replace(/\/+$/, "");

export const SITE_NAME = "Portal Philippines";

export const DEFAULT_TITLE =
  "Portal | Employer of Record, Executive Search, Workforce Philippines";

export const DEFAULT_DESCRIPTION =
  "Comprehensive workforce solutions for foreign companies: Employer of Record (EOR), Executive Search, payroll outsourcing, and HR management in the Philippines.";

export const KEYWORDS = [
  "Employer of Record Philippines",
  "EOR Philippines",
  "Philippine payroll outsourcing",
  "manpower solutions Philippines",
  "executive search Philippines",
  "HR outsourcing Philippines",
  "shared services Philippines",
  "hire employees Philippines",
  "Philippine workforce solutions",
];

const OG_IMAGE = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "Portal — workforce solutions across the Philippines",
};

type PageMetaInput = {
  title: string;
  description: string;
  /** Route path beginning with "/", e.g. "/eor". Defaults to "/". */
  path?: string;
};

/**
 * Build per-page Metadata with a canonical URL plus Open Graph and Twitter
 * cards. Page titles already carry the brand, so `title.absolute` bypasses the
 * root layout's title template. Because Next merges metadata shallowly, the OG
 * image is set here on every page rather than via the root opengraph-image
 * convention (which a page's own `openGraph` would otherwise replace).
 */
export function pageMetadata({
  title,
  description,
  path = "/",
}: PageMetaInput): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: "en_PH",
      url: path,
      title,
      description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE.url],
    },
  };
}

/**
 * Organization + WebSite structured data (JSON-LD) for the whole site.
 * Rendered once in the root layout. Contact details mirror the footer content.
 */
export function siteJsonLd() {
  const orgId = `${SITE_URL}/#organization`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        name: SITE_NAME,
        alternateName: "Portal",
        url: SITE_URL,
        logo: `${SITE_URL}/logo.png`,
        image: `${SITE_URL}/og.png`,
        description: DEFAULT_DESCRIPTION,
        email: "portal@helprofgrp.com",
        telephone: "+63 976 653 7269",
        areaServed: { "@type": "Country", name: "Philippines" },
        address: {
          "@type": "PostalAddress",
          streetAddress: "42 10th Avenue, Brgy. Socorro, Cubao",
          addressLocality: "Quezon City",
          addressRegion: "Metro Manila",
          postalCode: "1109",
          addressCountry: "PH",
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          email: "portal@helprofgrp.com",
          telephone: "+63 976 653 7269",
          areaServed: "PH",
          availableLanguage: ["en", "fil"],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description: DEFAULT_DESCRIPTION,
        publisher: { "@id": orgId },
        inLanguage: "en-PH",
      },
    ],
  };
}
