import type { Metadata } from "next";
import "./globals.css";
import { SITE } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title:       { default: SITE.name, template: `%s | ${SITE.name}` },
  description: SITE.description,
  keywords: [
    "cybersecurity Nigeria", "managed IT services Lagos", "disaster recovery Nigeria",
    "IT support Lagos", "BCDR Nigeria", "cloud services Nigeria",
    "NDPA compliance", "Inter5 IT Solutions", "BizShield", "CyberShield",
  ],
  authors:   [{ name: SITE.name, url: SITE.url }],
  metadataBase: new URL(SITE.url),
  openGraph: {
    type:     "website",
    locale:   "en_NG",
    url:      SITE.url,
    siteName: SITE.name,
    title:    SITE.name,
    description: SITE.description,
  },
  twitter: {
    card:    "summary_large_image",
    creator: SITE.twitterHandle,
    title:   SITE.name,
    description: SITE.description,
  },
  robots: { index: true, follow: true },
  verification: { google: "YOUR_GOOGLE_VERIFICATION_TOKEN" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-NG">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type":    "Organization",
              name:       SITE.name,
              url:        SITE.url,
              logo:       `${SITE.url}/logo.png`,
              description: SITE.description,
              address: {
                "@type":         "PostalAddress",
                streetAddress:   "Oluwalogbon House, Plot A, Obafemi Awolowo Way",
                addressLocality: "Ikeja",
                addressRegion:   "Lagos",
                addressCountry:  "NG",
              },
              contactPoint: [
                { "@type": "ContactPoint", telephone: SITE.phone1, contactType: "customer service" },
                { "@type": "ContactPoint", telephone: SITE.phone2, contactType: "technical support" },
              ],
              email:   SITE.email,
              sameAs:  [SITE.linkedin, SITE.twitter, SITE.facebook],
              serviceArea: { "@type": "Country", name: "Nigeria" },
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}