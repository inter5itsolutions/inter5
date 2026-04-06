import { cn } from "@/lib/utils";

interface Props {
  label?:    string;
  title:     string;
  highlight?: string;
  subtitle?: string;
  className?: string;
}

export default function PageHero({ label, title, highlight, subtitle, className }: Props) {
  const parts = highlight ? title.split(highlight) : null;

  return (
    <section className={cn("relative pt-28 pb-16 md:pt-36 md:pb-20 bg-navy-900 overflow-hidden border-b border-navy-700/50", className)}>
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-50 pointer-events-none" />
      <div className="absolute right-0 top-0 w-2/3 h-full bg-gradient-to-l from-navy-700/20 to-transparent pointer-events-none" />

      <div className="container-wide relative z-10">
        {label && <p className="section-label mb-4">{label}</p>}
        <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-5 max-w-3xl">
          {parts ? (
            <>{parts[0]}<span className="text-gold-500">{highlight}</span>{parts[1]}</>
          ) : title}
        </h1>
        <div className="divider-gold mb-5" />
        {subtitle && (
          <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  );
}