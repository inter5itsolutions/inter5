import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import HeroSection       from "@/components/HeroSection";
import ServicesPreview   from "@/components/ServicesPreview";
import WhyInter5         from "@/components/WhyInter5";
import SectorsSection    from "@/components/SectorsSection";
import TestimonialsSection from "@/components/TestimonialSections";
import CTABanner         from "@/components/CTABanner";
// import FAQSection from "@/components/FaqSection";

export const metadata: Metadata = buildMetadata({
  title:       "Inter5 IT Solutions — Managed IT, Cybersecurity & Disaster Recovery in Nigeria",
  description: "Inter5 IT Solutions delivers managed IT services, cybersecurity (CyberShield), and disaster recovery (BizShield) to Nigerian SMEs — naira pricing, world-class expertise.",
  path:        "/",
  keywords:    ["managed IT services Nigeria", "cybersecurity Lagos SME", "BizShield disaster recovery"],
});

export default function HomePage() { 
  return (
    <>
      <HeroSection />
      <ServicesPreview />
      <WhyInter5 />
      <SectorsSection />
      <TestimonialsSection />
      {/* <FAQSection /> */}
      <CTABanner />
    </>
  );
}