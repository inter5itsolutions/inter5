import { cn } from "@/lib/utils";
import Image from "next/image";

interface Props {
  label?:    string;
  title:     string;
  highlight?: string;
  subtitle?: string;
  className?: string;
  backgroundImage?: string;
  overlayOpacity?: number; // 0 to 1, default 0.85
  overlayColor?: string; // e.g., "dark-blue", "orange", "teal-blue"
}

export default function PageHero({ 
  label, 
  title, 
  highlight, 
  subtitle, 
  className,
  backgroundImage,
  overlayOpacity = 0.85,
  overlayColor = "dark-blue"
}: Props) {
  const parts = highlight ? title.split(highlight) : null;

  return (
    <section className={cn("relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden", className)}>
      {/* Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt={title}
            fill
            className="object-cover"
            priority
            quality={100}
          />
          {/* Dynamic overlay */}
          <div 
            className="absolute inset-0"
            style={{ 
              backgroundColor: overlayColor === "dark-blue" ? "#023047" :
                             overlayColor === "orange" ? "#FB8500" :
                             overlayColor === "teal-blue" ? "#219EBC" :
                             overlayColor === "light-blue" ? "#8ECAE6" : "#023047",
              opacity: overlayOpacity
            }}
          />
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30" />
        </div>
      )}

      {/* Background pattern (always visible) */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20 pointer-events-none z-0" />
      
      {/* Decorative gradient elements */}
      {!backgroundImage && (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-dark-blue to-dark-blue/95" />
          <div className="absolute right-0 top-0 w-2/3 h-full bg-gradient-to-l from-orange/10 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-teal-blue/5 to-transparent pointer-events-none" />
        </>
      )}
      
      {/* Optional: Decorative circle blobs */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-orange/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-teal-blue/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-wide relative z-10">
        {label && (
          <p className="text-orange text-sm font-mono tracking-widest uppercase mb-4 font-semibold">
            {label}
          </p>
        )}
        
        <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-5 max-w-4xl">
          {parts ? (
            <>{parts[0]}<span className="text-orange">{highlight}</span>{parts[1]}</>
          ) : title}
        </h1>
        
        {/* Divider with brand color */}
        <div className="w-20 h-1 bg-orange rounded-full mb-6" />
        
        {subtitle && (
          <p className="text-gray-100 text-lg md:text-xl max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}