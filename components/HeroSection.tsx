"use client";
import Link from "next/link";
import { easeInOut, motion } from "framer-motion";
import { STATS, PARTNERS } from "@/lib/data";
import { SITE } from "@/lib/utils";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeInOut } },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-white overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 pointer-events-none" />

      {/* Gold accent line (optional) */}
      <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-transparent via-gold-500/40 to-transparent" />

      <div className="container-wide relative z-10 pt-20 pb-16 md:pt-36 md:pb-24">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-4xl">
          

          {/* Headline */}
          <motion.h1
            variants={item}
            className="font-display font-black text-2xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-900 leading-[1.05] mb-6 text-balance"
          >
            Enterprise Grade IT. <span className="text-gold-500">SME-Ready</span> Pricing.
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={item}
            className="text-gray-700 text-md md:text-xl leading-relaxed max-w-2xl mb-10"
          >
            {SITE.description}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-col  sm:flex-row gap-4 mb-8">
            <Link
              href="/assessment"
              className="btn-primary inline-flex items-center justify-center  bg-gold-500 text-white hover:bg-gold-400"
            >
              Book a Free Assessment 
            </Link>
            <Link
              href="/bizshield"
              className="inline-flex items-center justify-center btn-outline border  border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-white"
            >
              Explore Services
            </Link>
          </motion.div>

          {/* Stats row */}
          <motion.div variants={item} className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-gray-200">
            {STATS.map((s) => (
              <div key={s.label} className="pl-4 border-l-2 border-gold-500">
                <p className="font-display font-black text-2xl md:text-3xl text-gray-900 leading-none mb-1">
                  {s.value}
                </p>
                <p className="text-xs text-gray-500 leading-snug">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Partners strip */}
      <div className="relative z-10 border-t border-gray-200 bg-gray-50">
        <div className="container-wide py-5 flex flex-col sm:flex-row items-center gap-4">
          <span className="text-xs font-mono tracking-widest uppercase text-gray-400 flex-shrink-0">
            Official Partners
          </span>
          <div className="flex items-center gap-6 flex-wrap">
            {PARTNERS.map((p) => (
              <span
                key={p.name}
                className="text-gray-500 text-sm font-semibold opacity-70 hover:opacity-100 transition-opacity"
              >
                {p.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}