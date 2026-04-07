import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { ChevronRight } from "lucide-react";

interface Props {
  title?:    string;
  subtitle?: string;
  cta?:      string;
  href?:     string;
}

export default function CTABanner({
  title    = "Ready to secure your business?",
  subtitle = "Book a free 30-minute IT assessment. No commitment. No pitch. Just an honest look at your current IT posture.",
  cta      = "Book Free Assessment",
  href     = "/assessment",
}: Props) {
  return (
    <section className="py-16 md:py-20 bg-gold-500 relative overflow-hidden">
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-10 pointer-events-none" />

      <AnimatedSection className="container-wide relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-xl">
          <h2 className="font-display font-black text-3xl md:text-4xl text-navy-900 mb-3 leading-tight">
            {title}
          </h2>
          <p className="text-navy-700 text-base leading-relaxed">{subtitle}</p>
        </div>
        <Link
          href={href}
          className="flex-shrink-0 flex items-center bg-navy-900 hover:bg-navy-700 text-gold-500 font-semibold px-8 py-4 text-sm tracking-wide uppercase transition-colors"
        >
          {cta}
          <ChevronRight className="h-5 "/>
        </Link>
      </AnimatedSection>
    </section>
  );
}