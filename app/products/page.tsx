// app/services/cybershield/page.tsx
import ComingSoon from "@/components/ComingSoon";

export const metadata = {
  title: "Contact Us - Coming Soon | Inter5 IT Solutions",
  description: "Our advanced Contact us form and live chat is underway.",
};

export default function CyberShieldPage() {
  return (
    <ComingSoon
      title="Products"
      description="Advanced cybersecurity protection for Nigerian businesses. We will soon publish a list available products and how they benefit you"
      estimatedDate="May 2026"
      pageName="Products"
      showNotification={true}
    />
  );
}