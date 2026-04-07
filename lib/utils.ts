import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// ---------------------------------------------------------------------------
// cn — merge Tailwind classes safely (used across all UI components)
// ---------------------------------------------------------------------------
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ---------------------------------------------------------------------------
// SITE — single source of truth for all company-wide constants.
// Referenced by: layout.tsx, Navbar.tsx, Footer.tsx, contact/page.tsx,
//                seo.ts, sitemap.ts, robots.ts
// ---------------------------------------------------------------------------
export const SITE = {
  /** Full legal company name — used in metadata, footer, JSON-LD */
  name:        "Inter5 IT Solutions",

  /** Short display name — used in Navbar logo text */
  shortName:   "Inter5",

  /** Two-letter logo mark — used in Navbar and Footer brand block */
  logoText:    "I5",

  /** Primary tagline — used in hero section and OG metadata */
  tagline:     "Enterprise Grade IT. SME Ready Pricing.",

  /** Meta description — used as default for all pages in layout.tsx */
  description:
    "Inter5 IT Solutions delivers world-class cybersecurity, disaster recovery, and managed IT services to Nigerian businesses at naira-priced, SME accessible rates.",

  /** Canonical production URL — used in sitemap, robots, canonical tags */
  url:         "https://inter5it.com",

  /** Physical office address — used in Footer, contact/page.tsx, JSON-LD */
  address:     "Oluwalogbon House, Plot A, Obafemi Awolowo Way, Ikeja, Lagos",

  /** Primary phone — used in Navbar desktop CTA, Footer, JSON-LD */
  phone1:      "+234 903 347 5910",

  /** Secondary phone — used in Footer and contact/page.tsx */
  phone2:      "+234 901 303 7327",

  /** Contact email — used in Footer and contact/page.tsx */
  email:       "info@inter5it.com",

  /** LinkedIn company page — used in Footer and contact/page.tsx social links */
  linkedin:    "https://www.linkedin.com/company/inter5-it",

  /** X / Twitter handle URL — used in Footer and contact/page.tsx social links */
  twitter:     "https://x.com/inter5it",

  /** Twitter handle string — used in seo.ts twitter card metadata */
  twitterHandle: "@inter5it",

  /** Facebook page — reserved for future use */
  facebook:    "https://www.facebook.com/inter5it",

  /** Google Maps link — used in contact/page.tsx map section */
  mapsUrl:     "https://maps.google.com/?q=Oluwalogbon+House+Obafemi+Awolowo+Way+Ikeja+Lagos",
};

// ---------------------------------------------------------------------------
// NAV_LINKS — navigation items used by Navbar and Footer.
// Defined here (not in data.ts) so layout components only need one import.
// ---------------------------------------------------------------------------
export const NAV_LINKS = [
  { label: "Home",     href: "/"         },
  { label: "About Us", href: "/about"    },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Contact",  href: "/contact"  },
] as const;

export type NavLink = (typeof NAV_LINKS)[number];