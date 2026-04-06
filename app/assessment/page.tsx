// app/book-assessment/page.tsx
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import BookAssessmentForm from "@/components/BookAsssessmentForm";

export const metadata: Metadata = buildMetadata({
  title: "Free IT Assessment | Inter5 IT Solutions",
  description: "Get a free, no-obligation IT assessment for your business. Our experts will review your current infrastructure, security posture, and recommend improvements.",
  path: "/book-assessment",
  keywords: ["IT assessment Nigeria", "free cybersecurity audit", "managed IT assessment", "IT infrastructure review Lagos"],
});

export default function BookAssessmentPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white border-b border-gray-200 pt-32 pb-16">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-amber-600 text-sm font-semibold uppercase tracking-wider mb-4 block">
              Free Assessment
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Let's evaluate your 
              <span className="text-amber-600"> IT infrastructure</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              No obligations. No hidden fees. Just an honest assessment of your current 
              IT setup, security posture, and recommendations for improvement.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="bg-gray-50 py-16">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-amber-50 border-b border-amber-100 px-8 py-6">
                <h2 className="text-2xl font-display font-semibold text-gray-900">
                  Tell us about your business
                </h2>
                <p className="text-gray-600 mt-1">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>
              </div>
              
              <div className="p-8">
                <BookAssessmentForm />
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-sm text-gray-600">Response within <strong className="text-gray-900">24 hours</strong></p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <p className="text-sm text-gray-600"><strong className="text-gray-900">100% confidential</strong> — your data is safe</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                </div>
                <p className="text-sm text-gray-600"><strong className="text-gray-900">No obligation</strong> — just honest advice</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}