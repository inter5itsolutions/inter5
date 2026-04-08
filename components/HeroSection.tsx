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
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url('/landingpage.png')`, // Replace with your image filename
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-dark-blue/70 mix-blend-multiply" />
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-blue/50 via-transparent to-dark-blue/50" />
      </div>

      {/* Subtle background pattern overlay (optional) */}
      <div className="absolute inset-0 z-0 opacity-10 bg-grid-pattern bg-grid pointer-events-none" />

      {/* Orange accent line */}
      <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-transparent via-orange/60 to-transparent z-10" />

      <div className="container-wide relative z-10 pt-20 pb-16 md:pt-36 md:pb-24">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-4xl">
          
          {/* Headline - Changed text color to white for better contrast */}
          <motion.h1
            variants={item}
            className="font-display font-black text-2xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] mb-6 text-balance"
          >
            Enterprise Grade IT. <span className="text-orange">SME-Ready</span> Pricing.
          </motion.h1>

          {/* Subheading - Lighter text for contrast */}
          <motion.p
            variants={item}
            className="text-gray-100 text-md md:text-xl leading-relaxed max-w-2xl mb-10"
          >
            {SITE.description}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              href="/assessment"
              className="btn-primary inline-flex items-center justify-center bg-orange text-white hover:bg-orange/90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Book a Free Assessment 
            </Link>
            <Link
              href="/bizshield"
              className="inline-flex items-center justify-center btn-outline border-2 border-white text-white hover:bg-orange hover:border-orange hover:text-white transition-all duration-300"
            >
              Explore Services
            </Link>
          </motion.div>

          {/* Stats row - Light backgrounds with dark text for contrast */}
          <motion.div variants={item} className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/20">
            {STATS.map((s) => (
              <div key={s.label} className="pl-4 border-l-2 border-orange">
                <p className="font-display font-black text-2xl md:text-3xl text-white leading-none mb-1">
                  {s.value}
                </p>
                <p className="text-xs text-gray-200 leading-snug">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Partners strip - Semi-transparent background */}
      <div className="relative z-10 border-t border-white/20 bg-black/30 backdrop-blur-sm">
        <div className="container-wide py-5 flex flex-col sm:flex-row items-center gap-4">
          <span className="text-xs font-mono tracking-widest uppercase text-orange flex-shrink-0">
            Official Partners
          </span>
          <div className="flex items-center gap-6 flex-wrap">
            {PARTNERS.map((p) => (
              <span
                key={p.name}
                className="text-gray-200 text-sm font-semibold opacity-80 hover:opacity-100 hover:text-white transition-all duration-300 cursor-pointer"
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