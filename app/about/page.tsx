import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PARTNERS, TEAM } from "@/lib/data";
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

const MILESTONES = [
  { year: "Founded",    text: "Inter5 IT Solutions established in Lagos, Nigeria." },
  { year: "Partners",   text: "Formal partnerships signed with Microsoft, Veeam, ESET, and Lenovo." },
  { year: "Enterprise", text: "Trusted by Dangote Cement — one of Nigeria's largest manufacturers." },
  { year: "Today",      text: "Serving manufacturing, oil & gas, construction, and professional services SMEs across Lagos." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About Us"
        title="Not just an IT company."
        highlight="IT company."
        subtitle="We built Inter5 specifically for Nigerian businesses that need enterprise-grade IT without enterprise-grade pricing — and a partner that actually stays."
      />

      {/* Story */}
      <section className="section-pad bg-white">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left">
            <SectionHeader
              label="Our Story"
              title="Built for Nigerian business realities."
              highlight="Nigerian business realities."
              subtitle="Every IT company in Lagos chases enterprise contracts. We chose a different path — building the only IT partner in the city designed from the ground up for SMEs in Nigeria's most vital sectors."
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

          {/* Milestones */}
          <AnimatedSection direction="right" delay={0.15}>
            <div className="space-y-6">
              {MILESTONES.map((m, i) => (
                <div key={i} className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <span className="w-8 h-8 bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-700 text-xs font-mono flex-shrink-0 rounded">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {i < MILESTONES.length - 1 && <div className="w-px flex-1 bg-gray-200 mt-2" />}
                  </div>
                  <div className="pb-6">
                    <p className="text-amber-600 text-xs font-mono tracking-widest uppercase mb-1 font-semibold">{m.year}</p>
                    <p className="text-gray-700 text-base leading-relaxed">{m.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad bg-gray-50 border-y border-gray-200">
        <div className="container-wide">
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
                <div className="bg-white border border-gray-200 rounded-lg p-6 h-full shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-3xl block mb-4">{v.icon}</span>
                  <h3 className="font-display font-bold text-amber-600 text-lg mb-3">{v.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-pad bg-white">
        <div className="container-wide">
          <AnimatedSection className="mb-12">
            <SectionHeader
              label="Our Team"
              title="The people behind your protection."
              highlight="your protection."
              subtitle="Inter5 is led by technically credentialed professionals not account managers who subcontract the work."
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {TEAM.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 0.1}>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 bg-amber-100 border border-amber-200 rounded-lg flex items-center justify-center text-amber-700 font-display font-bold text-xl flex-shrink-0">
                      {member.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-gray-900 font-semibold text-lg">{member.name}</h3>
                      <p className="text-amber-600 text-sm font-mono font-medium">{member.title}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.creds.map((c) => (
                      <span key={c} className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded border border-gray-200">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-gray-50 border-y border-gray-200">
        <div className="container-wide">
          <AnimatedSection className="mb-10 text-center">
            <p className="text-amber-600 text-sm font-semibold uppercase tracking-wider mb-2">Technology Partners</p>
            <p className="text-gray-600 text-base">Formal partnerships not just reseller agreements.</p>
          </AnimatedSection>
          <div className="flex flex-wrap items-center justify-center gap-12">
            {PARTNERS.map((p) => (
              <div key={p.name} className="flex flex-col items-center gap-2 group">
                <div className="w-20 h-20 bg-white border-2 border-gray-200 rounded-xl flex items-center justify-center text-xl font-bold text-gray-500 group-hover:border-amber-300 group-hover:text-amber-600 transition-all duration-200 shadow-sm">
                  {p.abbr}
                </div>
                <span className="text-sm text-gray-500 font-medium">{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Let's build your IT foundation."
        subtitle="Talk to our team about your sector, your current setup, and what a structured IT partnership would look like for your business."
        cta="Start the Conversation →"
      />
    </>
  );
}