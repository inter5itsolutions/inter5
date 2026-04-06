import { cn } from "@/lib/utils";

interface Props {
  label?:     string;
  title:      string;
  highlight?: string;
  subtitle?:  string;
  center?:    boolean;
  light?:     boolean;
  className?: string;
}

export default function SectionHeader({ label, title, highlight, subtitle, center, light, className }: Props) {
  const titleParts = highlight ? title.split(highlight) : null;

  return (
    <div className={cn("max-w-2xl", center && "mx-auto text-center", className)}>
      {label && <p className="section-label">{label}</p>}
      <h2 className={cn("text-2xl sm:text-4xl md:text-5xl font-display font-bold leading-tight mb-4")}>
        {titleParts ? (
          <>
            {titleParts[0]}
            <span className="gold-text">{highlight}</span>
            {titleParts[1]}
          </>
        ) : title}
      </h2>
      {!center && <div className="divider-gold mb-4" />}
      {subtitle && (
        <p className={cn("text-sm md:text-lg leading-relaxed text-navy-500")}>
          {subtitle}
        </p>
      )}
    </div>
  );
}