import Link from "next/link";
import { SERVICES } from "@/lib/data";
import ServiceCard from "@/components/ServiceCard";
import SectionHeader from "@/components/SectionHeader";
import AnimatedSection from "@/components/AnimatedSection";

export default function ServicesPreview() {
  return (
    <section className="section-pad bg-navy-50">
      <div className="container-wide">
        <AnimatedSection className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <SectionHeader
            label="What We Offer"
            title="Four service lines. One trusted partner."
            highlight="One trusted partner."
            subtitle="Every service is built on our Microsoft, Veeam, and ESET partnerships delivered with naira pricing and a team that follows up after every engagement."
          />
          <Link href="/services" className="btn-outline flex-shrink-0 self-start md:self-auto">
            View All Services 
          </Link>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES.map((service, i) => (
            <AnimatedSection key={service.id} delay={i * 0.1}>
              <ServiceCard slug={service.slug} service={service} featured={service.id === "cybershield"} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}