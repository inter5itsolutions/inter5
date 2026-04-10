import type { Metadata } from "next";
import Image from "next/image";
import { buildMetadata } from "@/lib/seo";
import PageHero         from "@/components/PageHero";
import SectionHeader    from "@/components/SectionHeader";
import AnimatedSection  from "@/components/AnimatedSection";
import CTABanner        from "@/components/CTABanner";

export const metadata: Metadata = buildMetadata({
  title:       "About Inter5 IT Solutions",
  description: "Learn about Inter5 IT Solutions — our story, values, team credentials, and why Nigerian SMEs in manufacturing, oil & gas, and construction trust us for IT.",
  path:        "/about",
  keywords:    ["about Inter5 IT Solutions", "IT company Lagos Nigeria", "cybersecurity experts Nigeria"],
});

const VALUES = [
  { icon: "🤝", name: "Trust",           desc: "Deliberate post-sale follow-up ensures clients extract maximum value from every engagement. We do not disappear after the invoice." },
  { icon: "⭐", name: "Excellence",      desc: "Measurable client outcomes justify premium pricing. We target cost reduction over time, not quick transactions." },
  { icon: "🎯", name: "Accountability",  desc: "Our formal partnerships with Microsoft, Veeam, ESET, and Lenovo mean we deliver enterprise-grade solutions and stand behind every commitment." },
  { icon: "💡", name: "Innovation",      desc: "We stay ahead of emerging threats — from ransomware evolution to AI-generated attacks — so our clients don't have to." },
  { icon: "👥", name: "Customer Focus",  desc: "The client's operational reality shapes every recommendation. We understand production downtime, field operations, and Nigerian regulatory context." },
];



export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About Us"
        title="Not just an IT company."
        highlight="IT company."
        subtitle="We built Inter5 specifically for Nigerian businesses that need enterprise-grade IT without enterprise-grade pricing — and a partner that actually stays."
        backgroundImage="/contact.png" // Add your hero image path
      />

      {/* Story with Image */}
      <section className="section-pad bg-white">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left">
            <SectionHeader
              label="Our Story"
              title="Built for Nigerian business realities."
              highlight="Nigerian business realities."
              subtitle="Every IT company in Lagos chases enterprise contracts. We chose a different path building the only IT partner in the city designed from the ground up for SMEs in Nigeria's most vital sectors."
            />
            <p className="text-gray-600 text-base leading-relaxed mt-5">
              Inter5 was founded by technically proficient leaders who saw a clear gap: hundreds of thousands of
              Nigerian SMEs in manufacturing, oil & gas, and construction with zero access to affordable, credible
              IT support. All five major Lagos IT competitors serve enterprise clients exclusively. We built the
              infrastructure, the partnerships, and the pricing model to fill that gap.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mt-4">
              Today, we deliver managed IT, cybersecurity, and disaster recovery through formal partnerships with
              Microsoft, Veeam, and ESET all billed in naira, all backed by a team that picks up the phone.
            </p>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.15}>
            <div className="relative rounded-2xl overflow-hidden shadow-xl group">
              <div className="relative h-[400px] md:h-[500px] w-full">
                <Image
                  src="/landing.png" // Add your story image path
                  alt="Inter5 IT Solutions team at work"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/80 via-dark-blue/60 to-transparent" />
              </div>
              {/* Overlay with brand color */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-white text-sm font-semibold">Building Nigerian SMEs since 2015</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Values with Background Pattern */}
      <section className="section-pad bg-gray-50 border-y border-gray-200 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-blue rounded-full blur-3xl" />
        </div>
        
        <div className="container-wide relative z-10">
          <AnimatedSection className="mb-12">
            <SectionHeader
              label="Our Values"
              title="Five values. Operationalised daily."
              highlight="Operationalised daily."
              subtitle="These are not aspirational statements. They describe how we work with every client, on every engagement."
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {VALUES.map((v, i) => (
              <AnimatedSection key={v.name} delay={i * 0.08}>
                <div className="bg-white border border-gray-200 rounded-lg p-6 h-full shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <span className="text-3xl block mb-4">{v.icon}</span>
                  <h3 className="font-display font-bold text-orange text-lg mb-3">{v.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team with Images */}
      <section className="section-pad bg-white">
        <div className="container-wide">
          <AnimatedSection className="mb-12 text-center">
            <SectionHeader
              label="Our Team"
              title="The people behind your protection."
              highlight="your protection."
              subtitle="Inter5 is led by technically credentialed professionals not account managers who subcontract the work."
              center
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Partners with Images */}
      <section className="py-16 bg-gray-50 border-y border-gray-200">
        <div className="container-wide">
          <AnimatedSection className="mb-12 text-center">
            <p className="text-orange text-sm font-semibold uppercase tracking-wider mb-2">Technology Partners</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-dark-blue mb-3">
              Trusted by Industry Leaders
            </h2>
            <p className="text-gray-600 text-base max-w-2xl mx-auto">
              Formal partnerships not just reseller agreements. We are backed by the best in the industry.
            </p>
          </AnimatedSection>
          
          
        </div>
      </section>

      {/* Stats Section with Background Image */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about-stats-bg.jpg" // Add your stats background image
            alt="Technology background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-dark-blue/85" />
        </div>

        <div className="container-wide relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="text-white">
              <div className="text-4xl md:text-5xl font-bold text-orange mb-2">500+</div>
              <div className="text-sm uppercase tracking-wider opacity-90">Businesses Served</div>
            </div>
            <div className="text-white">
              <div className="text-4xl md:text-5xl font-bold text-orange mb-2">24/7</div>
              <div className="text-sm uppercase tracking-wider opacity-90">Support Available</div>
            </div>
            <div className="text-white">
              <div className="text-4xl md:text-5xl font-bold text-orange mb-2">15+</div>
              <div className="text-sm uppercase tracking-wider opacity-90">Years Experience</div>
            </div>
            <div className="text-white">
              <div className="text-4xl md:text-5xl font-bold text-orange mb-2">100%</div>
              <div className="text-sm uppercase tracking-wider opacity-90">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner/>
    </>
  );
}