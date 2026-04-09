"use client";
import Link from "next/link";
import { SITE, NAV_LINKS } from "@/lib/utils";
import { SERVICES } from "@/lib/data";

const SERVICES_LINKS = SERVICES.map((s) => ({
  label: s.title,
  href: `/services#${s.id}`,
}));

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">

      {/* MAIN FOOTER */}
      <div className="container-wide py-10 grid grid-cols-1 md:grid-cols-5 gap-6">
        
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-brand-orange rounded-md flex items-center justify-center text-white font-display font-bold text-sm">
              {SITE.logoText}
            </div>
            <span className="font-display font-semibold text-gray-900 text-lg">
              {SITE.name}
            </span>
          </div>

          <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
            {SITE.tagline} Built for Nigerian business.
          </p>

          {/* Socials */}
          <div className="flex gap-3 pt-2">
            {[ 
              { href: SITE.linkedin, label: "in" },
              { href: SITE.twitter, label: "𝕏" },
              { href: SITE.facebook, label: "f" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md bg-brand-orange border flex items-center justify-center text-white hover:text-white hover:bg-gray-900 hover:border-gray-900 transition-all text-xs font-mono"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-100 my-5 "></div>

        {/* Company */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-4">
            Company
          </h3>
          <ul className="space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-gray-500 hover:text-gray-900 text-sm transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-4">
            Services
          </h3>
          <ul className="space-y-2">
            {SERVICES_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-gray-500 hover:text-gray-900 text-sm transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-4">
            Contact
          </h3>

          <ul className="space-y-3 text-sm text-gray-500">
            <li>
              <a
                href={SITE.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-900 transition-colors block leading-snug"
              >
                {SITE.address}
              </a>
            </li>

            <li>
              <a
                href={`tel:${SITE.phone1}`}
                className="hover:text-gray-900 transition-colors font-mono"
              >
                {SITE.phone1}
              </a>
            </li>

            <li>
              <a
                href={`tel:${SITE.phone2}`}
                className="hover:text-gray-900 transition-colors font-mono"
              >
                {SITE.phone2}
              </a>
            </li>

            <li>
              <a
                href={`mailto:${SITE.email}`}
                className="hover:text-gray-900 transition-colors"
              >
                {SITE.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="container-wide py-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
        <p>
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </p>

        <p className="font-mono">Ikeja, Lagos · Nigeria</p>
      </div>
    </footer>
  );
}