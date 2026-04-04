"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, SITE, cn } from "@/lib/utils";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-sm py-3"
          : "bg-transparent py-5"
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
          {NAV_LINKS.map((link) => (
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
          ))}
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
              {NAV_LINKS.map((link) => (
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
              ))}

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