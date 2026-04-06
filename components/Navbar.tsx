"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, SITE, cn } from "@/lib/utils";

// Service pages configuration
const SERVICE_PAGES = [
  {
    href: "cybershield",
    label: "CyberShield",
    description: "Advanced cybersecurity protection",
    icon: "🛡️",
  },
  {
    href: "/managedit",
    label: "ManagedIT",
    description: "Comprehensive IT management",
    icon: "💻",
  },
  {
    href: "/bizshield",
    label: "BizShield",
    description: "Business continuity solutions",
    icon: "🏢",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  // Check if current path is a service page
  const isServicePage = SERVICE_PAGES.some(service => pathname === service.href);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-lg border-b-2 border-gold-500 shadow-sm py-3"
          : "bg-white/95 backdrop-blur-lg border-b-2 border-gold-300 shadow-sm py-3"
      )}
    >
      <div className="container-wide flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-md bg-gold-500 flex items-center justify-center text-white font-display font-bold text-sm shadow-sm">
            {SITE.logoText}
          </div>
          <span className="font-display font-semibold text-gray-900 text-lg tracking-tight group-hover:text-gold-500 transition-colors">
            {SITE.shortName}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => {
            // Check if this is the Services link (assuming you have one in NAV_LINKS)
            if (link.label === "Services") {
              return (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    className={cn(
                      "text-sm font-medium transition-colors duration-200 flex items-center gap-1",
                      isServicePage
                        ? "text-gray-900"
                        : "text-gray-500 hover:text-gray-900"
                    )}
                  >
                    {link.label}
                    <svg
                      className={cn(
                        "w-4 h-4 transition-transform duration-200",
                        servicesOpen && "rotate-180"
                      )}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* Dropdown menu */}
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden"
                      >
                        <div className="py-2">
                          {SERVICE_PAGES.map((service) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              className={cn(
                                "flex items-start gap-3 px-4 py-3 hover:bg-gray-50 transition-colors",
                                pathname === service.href && "bg-gray-50"
                              )}
                            >
                              <span className="text-2xl">{service.icon}</span>
                              <div className="flex-1">
                                <div className="font-semibold text-gray-900">
                                  {service.label}
                                </div>
                                <div className="text-sm text-gray-500">
                                  {service.description}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-200 relative",
                  pathname === link.href
                    ? "text-gray-900"
                    : "text-gray-500 hover:text-gray-900"
                )}
              >
                {link.label}

                {/* Active underline */}
                {pathname === link.href && (
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gold-500 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={`tel:${SITE.phone1}`}
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            {SITE.phone1}
          </a>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gray-900 hover:bg-black text-white text-sm font-medium px-5 py-2.5 rounded-md transition-all duration-200 shadow-sm hover:shadow-md"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              animate={{
                rotate: open && i !== 1 ? (i === 0 ? 45 : -45) : 0,
                translateY: open && i !== 1 ? (i === 0 ? 7 : -7) : 0,
                opacity: open && i === 1 ? 0 : 1,
              }}
              transition={{ duration: 0.2 }}
              className="block w-6 h-0.5 bg-gray-900 origin-center"
            />
          ))}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-t border-gray-200 bg-white shadow-lg"
          >
            <nav className="container-wide py-5 flex flex-col gap-2">
              {NAV_LINKS.map((link) => {
                // For mobile, show Services as a section with sub-items
                if (link.label === "Services") {
                  return (
                    <div key={link.href} className="flex flex-col gap-1">
                      <div className="px-4 py-3 text-sm font-semibold text-gray-900">
                        {link.label}
                      </div>
                      <div className="ml-4 flex flex-col gap-1">
                        {SERVICE_PAGES.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className={cn(
                              "px-4 py-3 rounded-md text-sm font-medium transition-colors flex items-center gap-2",
                              pathname === service.href
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                            )}
                          >
                            <span>{service.icon}</span>
                            <span>{service.label}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "px-4 py-3 rounded-md text-sm font-medium transition-colors",
                      pathname === link.href
                        ? "bg-gray-100 text-gray-900"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}

              <div className="pt-4 flex flex-col gap-3">
                <a
                  href={`tel:${SITE.phone1}`}
                  className="text-sm text-gray-500 text-center"
                >
                  {SITE.phone1}
                </a>

                <Link
                  href="/contact"
                  className="w-full text-center bg-gray-900 text-white py-3 rounded-md font-medium hover:bg-black transition"
                >
                  Get Started
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}