import Link from "next/link";
import { cn } from "@/lib/utils";
import type { SERVICES } from "@/lib/data";

type Service = (typeof SERVICES)[number];

interface Props {
  service:  Service;
  featured?: boolean;
  showTiers?: boolean;
}

export default function ServiceCard({ service, featured, showTiers, slug }: Props) {
  return (
    <div className={cn(
      "card-dark p-6 h-[560px] rounded-lg md:p-8 flex flex-col group ring-2 ring-navy-600",
      featured && " ring-2 ring-gold-500"
    )}>
      {featured && (
        <span className="tag rounded-lg -mt-4 mb-2 self-start">Most Popular</span>
      )}

      <div>
        <div className="flex gap-4">
          <span className="text-3xl flex-shrink-0 mt-0.5">{service.icon}</span>
          <h3 className="font-display font-bold text-navy-700 text-lg md:text-xl leading-tight">
            {service.title}
          </h3>
        </div>
        <div className="gap-4 mb-5">
          <p className="text-navy-700 text-sm font-mono mt-1">{service.tagline}</p>
        </div>
      </div>

      <p className="text-slate-500 text-sm leading-relaxed mb-6">{service.description}</p>

      <ul className="space-y-2 mb-6">
        {service.features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-sm text-slate-800">
            <span className="w-1.5 h-1.5 bg-gold-500 flex-shrink-0" />
            {f}
          </li>
        ))}
      </ul>

      {showTiers && (
        <div className="border-t border-navy-700 pt-5 mb-6">
          <p className="section-label mb-3">Pricing</p>
          <div className="space-y-2">
            {service.tiers.map((t) => (
              <div key={t.name} className="flex items-center justify-between text-sm">
                <span className="text-slate-400">{t.name} <span className="text-slate-500 text-xs">· {t.target}</span></span>
                <span className="font-mono text-gold-400 font-medium">{t.price}<span className="text-slate-500 text-xs">{t.period}</span></span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-auto">
        <Link
          href={`/${slug}`}
          className="btn-outline w-full justify-center text-md rounded-lg"
        >
          Learn More 
        </Link>
      </div>
    </div>
  );
}