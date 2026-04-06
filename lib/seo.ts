import type { Metadata } from "next";
import { SITE } from "./utils";

interface PageSEO {
  title:       string;
  description: string;
  path?:       string;
  keywords?:   string[];
}

export function buildMetadata({ title, description, path = "", keywords = [] }: PageSEO): Metadata {
  const url = `${SITE.url}${path}`;
  const fullTitle = title === SITE.name ? title : `${title} | ${SITE.name}`;

  return {
    title: fullTitle,
    description,
    keywords: [
      "cybersecurity Nigeria",
      "managed IT services Lagos",
      "disaster recovery Nigeria",
      "IT support Lagos",
      "BCDR services Nigeria",
      "cloud services Nigeria",
      "Inter5 IT Solutions",
      ...keywords,
    ],
    authors:   [{ name: SITE.name, url: SITE.url }],
    creator:   SITE.name,
    publisher: SITE.name,
    metadataBase: new URL(SITE.url),
    alternates: { canonical: url },
    openGraph: {
      title:       fullTitle,
      description,
      url,
      siteName:    SITE.name,
      locale:      "en_NG",
      type:        "website",
    },
    twitter: {
      card:        "summary_large_image",
      title:       fullTitle,
      description,
      creator:     SITE.twitterHandle,
    },
    robots: {
      index:  true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  };
}