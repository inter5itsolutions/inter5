import Link from "next/link";
import { cn } from "@/lib/utils";
import type { SERVICES } from "@/lib/data";

type Service = (typeof SERVICES)[number];

interface Props {
  service: Service;
  featured?: boolean;
  showTiers?: boolean;
}

export default function ServiceCard({ service, featured, showTiers }: Props) {
  return (
    <div className={cn(
      "bg-white p-6 h-[560px] rounded-lg md:p-8 flex flex-col group border border-gray-200 shadow-sm hover:shadow-md transition-shadow",
      featured && "border-2 border-brand-orange relative"
    )}>
      {featured && (
        <span className="absolute -top-3 left-6 tag rounded-lg bg-brand-orange text-white border-none px-3 py-1">
          Most Popular
        </span>
      )}

      <div>
        <div className="flex gap-4">
          <span className="text-3xl flex-shrink-0 mt-0.5">{service.icon}</span>
          <h3 className="font-display font-bold text-dark-blue text-lg md:text-xl leading-tight">
            {service.title}
          </h3>
        </div>
        <div className="gap-4 mb-5">
          <p className="text-dark-blue/70 text-sm font-mono mt-1">{service.tagline}</p>
        </div>
      </div>

      <p className="text-gray-600 text-sm leading-relaxed mb-6">{service.description}</p>

      <ul className="space-y-2 mb-6">
        {service.features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
            <span className="w-1.5 h-1.5 bg-brand-orange flex-shrink-0 rounded-full" />
            {f}
          </li>
        ))}
      </ul>

      {showTiers && (
        <div className="border-t border-gray-200 pt-5 mb-6">
          <p className="text-xs font-mono tracking-[0.25em] uppercase text-brand-orange mb-3">Pricing</p>
          <div className="space-y-2">
            {service.tiers.map((t) => (
              <div key={t.name} className="flex items-center justify-between text-sm">
                <span className="text-gray-600">
                  {t.name} <span className="text-gray-400 text-xs">· {t.target}</span>
                </span>
                <span className="font-mono text-brand-orange font-medium">
                  {t.price}<span className="text-gray-400 text-xs">{t.period}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-auto">
        <Link
          href={`/${service.slug}`}
          className="btn-outline w-full justify-center text-md rounded-lg"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}