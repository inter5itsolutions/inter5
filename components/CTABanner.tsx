import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { ChevronRight, Sparkles} from "lucide-react";

interface Props {
  title?:    string;
  subtitle?: string;
  cta?:      string;
  href?:     string;
  variant?: "default" | "gradient" | "dark";
}

export default function CTABanner({
  title    = "Let's build your IT foundation",
  subtitle = "Talk to our team about your sector, your current setup and what a structured IT partnership would look like for your business.",
  cta      = "Book Free Assessment",
  href     = "/assessment",
}: Props) {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden inset-0 bg-gradient-to-br from-dark-blue/70 via-brand-orange/60 to-dark-blue">
      {/* Background based on variant */}
      <div className="absolute inset-0 z-0">        
        {/* Animated background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-dark-blue/20 rounded-full blur-3xl animate-pulse delay-1000" />
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-10 pointer-events-none" />
        
        {/* Diagonal accent lines */}
        <div className="absolute top-0 right-0 w-1/3 h-px bg-gradient-to-l from-white/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/3 h-px bg-gradient-to-r from-white/30 to-transparent" />
      </div>

      <AnimatedSection className="container-wide relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-white text-xs font-semibold uppercase tracking-wider">
                Trusted by 100+ Clients
              </span>
            </div>

            {/* Title */}
            <h2 className="font-display font-black text-3xl md:text-4xl lg:text-5xl text-white mb-4 leading-tight">
              {title}
            </h2>

            {/* Subtitle */}
            <p className="text-white/90 text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {subtitle}
            </p>

            {/* Trust indicators */}
            {/* <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-6 bg-light-blue p-2 w-fit rounded-lg ">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-white/80" />
                <span className="text-white/80 text-sm">No obligation</span>
              </div>
              <div className="w-1 h-1 bg-white/40 rounded-full" />
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm">30min consultation</span>
              </div>
              <div className="w-1 h-1 bg-white/40 rounded-full" />
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-white/80" />
                <span className="text-white/80 text-sm">Expert advice</span>
              </div>
            </div> */}
          </div>

          {/* CTA Button */}
          <div className="flex-shrink-0">
            <Link
              href={href}
              className="group relative inline-flex items-center gap-2 bg-white hover:shadow-2xl text-dark-blue font-bold px-8 py-4 rounded-xl transition-all duration-300 overflow-hidden"
            >
              {/* Button background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange to-teal-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Button content */}
              <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
                {cta}
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>
            
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </AnimatedSection>
    </section>
  );
}