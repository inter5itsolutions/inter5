"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, SITE, cn } from "@/lib/utils";

// Service pages configuration
const SERVICE_PAGES = [
  {
    href: "/cybershield",
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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  // Check if current path is a service page
  const isServicePage = SERVICE_PAGES.some(service => pathname === service.href);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-white/98 backdrop-blur-xl border-b border-brand-orange/20 shadow-lg py-3"
            : "bg-white/95 backdrop-blur-md border-b border-brand-orange/10 shadow-sm py-4"
        )}
      >
        <div className="container-wide flex items-center justify-between">
          {/* Logo with Image Support */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* Logo Image */}
            <div className="relative w-10 h-10 rounded-lg overflow-hidden shadow-md transition-all duration-300 group-hover:shadow-lg group-hover:scale-105">
              <Image
                src="/inter5_logo.png"
                alt={SITE.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Company Name */}
            <div className="flex flex-col">
              <span className="font-display font-bold text-dark-blue text-lg tracking-tight group-hover:text-brand-orange transition-colors duration-300">
                {SITE.shortName}
              </span>
              {!scrolled && (
                <span className="text-[10px] text-gray-400 tracking-wider uppercase hidden sm:block">
                  IT Solutions
                </span>
              )}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              // Services Dropdown
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
                        "text-sm font-medium transition-all duration-300 flex items-center gap-1.5 px-2 py-1 rounded-lg",
                        isServicePage
                          ? "text-brand-orange"
                          : "text-gray-600 hover:text-brand-orange hover:bg-brand-orange/5"
                      )}
                    >
                      {link.label}
                      <motion.svg
                        animate={{ rotate: servicesOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="w-4 h-4"
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
                      </motion.svg>
                    </button>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -15, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -15, scale: 0.95 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute left-0 mt-3 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden"
                        >
                          <div className="py-2">
                            {SERVICE_PAGES.map((service, idx) => (
                              <motion.div
                                key={service.href}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.05 }}
                              >
                                <Link
                                  href={service.href}
                                  className={cn(
                                    "flex items-start gap-3 px-5 py-3.5 hover:bg-gradient-to-r hover:from-brand-orange/5 hover:to-transparent transition-all duration-300 group/item",
                                    pathname === service.href && "bg-brand-orange/5"
                                  )}
                                >
                                  <span className="text-2xl transition-transform duration-300 group-hover/item:scale-110">
                                    {service.icon}
                                  </span>
                                  <div className="flex-1">
                                    <div className="font-semibold text-dark-blue group-hover/item:text-brand-orange transition-colors">
                                      {service.label}
                                    </div>
                                    <div className="text-xs text-gray-500 mt-0.5">
                                      {service.description}
                                    </div>
                                  </div>
                                  {pathname === service.href && (
                                    <motion.div
                                      layoutId="activeService"
                                      className="w-1 h-8 bg-brand-orange rounded-full"
                                    />
                                  )}
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                          
                          {/* Dropdown Footer */}
                          <div className="border-t border-gray-100 bg-gray-50 px-5 py-3">
                            <Link
                              href="/services"
                              className="text-xs text-brand-orange hover:text-brand-orange/80 font-medium flex items-center gap-1"
                            >
                              View All Services
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              // Regular Navigation Links
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-all duration-300 relative px-2 py-1 rounded-lg",
                    pathname === link.href
                      ? "text-brand-orange"
                      : "text-gray-600 hover:text-brand-orange hover:bg-brand-orange/5"
                  )}
                >
                  {link.label}

                  {/* Active Indicator */}
                  {pathname === link.href && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-orange rounded-full"
                      transition={{ type: "spring" as const, stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-5">
            <a
              href={`tel:${SITE.phone1}`}
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-brand-orange transition-colors group"
            >
              <svg className="w-4 h-4 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {SITE.phone1}
            </a>

            <Link
              href="/contact"
              className="relative group overflow-hidden bg-brand-orange hover:shadow-lg text-white text-sm font-medium px-6 py-2.5 rounded-full transition-all duration-300"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-teal-blue to-brand-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="md:hidden relative w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none z-50"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  animate={{
                    rotate: open && i !== 1 ? (i === 0 ? 45 : -45) : 0,
                    translateY: open && i !== 1 ? (i === 0 ? 8 : -8) : 0,
                    opacity: open && i === 1 ? 0 : 1,
                    width: open && i !== 1 ? 24 : 24,
                  }}
                  transition={{ duration: 0.3 }}
                  className="block h-0.5 bg-dark-blue rounded-full mb-1.5 last:mb-0 origin-center"
                  style={{ width: i === 1 ? 20 : 24 }}
                />
              ))}
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Drawer - Moved outside header for better positioning */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween" as const, duration: 0.3, ease: "easeOut" }}
              className="fixed top-0 left-0 bottom-0 w-full max-w-sm bg-white shadow-2xl z-50 md:hidden overflow-y-auto"
              style={{ marginTop: "73px" }}
            >
              <nav className="flex flex-col py-6 px-4">
                {NAV_LINKS.map((link, idx) => {
                  // Mobile Services Section
                  if (link.label === "Services") {
                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex flex-col gap-2 mb-2"
                      >
                        <div className="px-4 py-3 text-sm font-bold text-dark-blue bg-gradient-to-r from-brand-orange/5 to-transparent rounded-lg">
                          {link.label}
                        </div>
                        <div className="ml-4 flex flex-col gap-1 border-l-2 border-brand-orange/20 pl-4">
                          {SERVICE_PAGES.map((service) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              onClick={() => setOpen(false)}
                              className={cn(
                                "px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-3 group",
                                pathname === service.href
                                  ? "bg-brand-orange/10 text-brand-orange"
                                  : "text-gray-600 hover:bg-gray-50 hover:text-brand-orange"
                              )}
                            >
                              <span className="text-xl transition-transform duration-300 group-hover:scale-110">
                                {service.icon}
                              </span>
                              <span>{service.label}</span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    );
                  }

                  // Regular Mobile Links
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 flex items-center justify-between group",
                          pathname === link.href
                            ? "bg-brand-orange/10 text-brand-orange"
                            : "text-gray-600 hover:bg-gray-50 hover:text-brand-orange"
                        )}
                      >
                        <span>{link.label}</span>
                        {pathname === link.href && (
                          <motion.div
                            layoutId="mobileActive"
                            className="w-1 h-6 bg-brand-orange rounded-full"
                          />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}

                {/* Mobile CTA Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="pt-6 mt-4 border-t border-gray-200"
                >
                  <a
                    href={`tel:${SITE.phone1}`}
                    className="flex items-center justify-center gap-2 text-gray-600 hover:text-brand-orange transition-colors py-3"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {SITE.phone1}
                  </a>

                  <Link
                    href="/contact"
                    onClick={() => setOpen(false)}
                    className="w-full text-center bg-gradient-to-r from-brand-orange to-teal-blue hover:shadow-lg text-white py-3.5 rounded-xl font-semibold transition-all duration-300 mt-3 block"
                  >
                    Get Started
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}