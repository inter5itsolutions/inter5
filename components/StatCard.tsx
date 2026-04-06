import { cn } from "@/lib/utils";

interface Props {
  value:     string;
  label:     string;
  className?: string;
}

export default function StatCard({ value, label, className }: Props) {
  return (
    <div className={cn("border-l-2 border-gold-500 pl-4 py-1", className)}>
      <p className="font-display font-black text-3xl md:text-4xl text-white leading-none mb-1">
        {value}
      </p>
      <p className="text-xs text-slate-400 leading-snug">{label}</p>
    </div>
  );
}