// app/services/cybershield/page.tsx
import ComingSoon from "@/components/ComingSoon";

export const metadata = {
  title: "Contact Us - Coming Soon | Inter5 IT Solutions",
  description: "Our advanced Contact us form and live chat is underway.",
};

export default function CyberShieldPage() {
  return (
    <ComingSoon
      title="Contact US"
      description="Advanced cybersecurity protection for Nigerian businesses. Our next-generation security platform is being built to protect your digital assets."
      estimatedDate="May 2026"
      pageName="Contact Us"
      showNotification={true}
    />
  );
}