// components/BookAssessmentForm.tsx
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  industry: string;
  employeeCount: string;
  serviceInterest: string;
  message: string;
  hearAboutUs: string;
}

interface FormErrors {
  [key: string]: string;
}

const INDUSTRIES = [
  "Manufacturing",
  "Oil & Gas",
  "Construction",
  "Professional Services",
  "Healthcare",
  "Education",
  "Retail",
  "Other",
];

const SERVICE_OPTIONS = [
  "Managed IT Services",
  "Cybersecurity (CyberShield)",
  "IT Support & Maintenance (ManagedIT)",
  "Business Continuity (BizShield)",
  "Cloud Services",
  "Not sure — need assessment",
];

const EMPLOYEE_RANGES = [
  "1-10 employees",
  "11-50 employees",
  "51-200 employees",
  "201-500 employees",
  "500+ employees",
];

const HEAR_ABOUT_OPTIONS = [
  "Google Search",
  "LinkedIn",
  "Referral",
  "Social Media",
  "Industry Event",
  "Other",
];

export default function BookAssessmentForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    industry: "",
    employeeCount: "",
    serviceInterest: "",
    message: "",
    hearAboutUs: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.companyName.trim()) newErrors.companyName = "Company name is required";
    if (!formData.industry) newErrors.industry = "Please select your industry";
    if (!formData.serviceInterest) newErrors.serviceInterest = "Please select a service interest";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Replace with your FormsFree endpoint
      const FORMSFREE_ENDPOINT = "https://formsfree.io/api/submit/YOUR_FORM_ID";
      
      // You can also use a simple webhook service like:
      // - https://formspree.io/
      // - https://formsubmit.co/
      // - https://getform.io/
      
      const response = await fetch(FORMSFREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New Assessment Request from ${formData.companyName}`,
          _replyto: formData.email,
          // FormsFree specific fields
          formId: "book-assessment",
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          companyName: "",
          industry: "",
          employeeCount: "",
          serviceInterest: "",
          message: "",
          hearAboutUs: "",
        });
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
      setErrorMessage("There was an error submitting your request. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <AnimatePresence>
        {submitStatus === "success" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6"
          >
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-green-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h4 className="font-semibold text-green-800">Assessment Request Received!</h4>
                <p className="text-sm text-green-700 mt-1">
                  Thank you for reaching out. Our team will contact you within 24 hours to schedule your free assessment.
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {submitStatus === "error" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6"
          >
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-red-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h4 className="font-semibold text-red-800">Submission Failed</h4>
                <p className="text-sm text-red-700 mt-1">{errorMessage}</p>
                <button
                  type="button"
                  onClick={() => setSubmitStatus("idle")}
                  className="text-sm text-red-700 underline mt-2"
                >
                  Try again
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className={cn(
              "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition",
              errors.fullName ? "border-red-300 bg-red-50" : "border-gray-300"
            )}
            placeholder="John Doe"
          />
          {errors.fullName && (
            <p className="text-red-600 text-xs mt-1">{errors.fullName}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={cn(
              "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition",
              errors.email ? "border-red-300 bg-red-50" : "border-gray-300"
            )}
            placeholder="john@company.com"
          />
          {errors.email && (
            <p className="text-red-600 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={cn(
              "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition",
              errors.phone ? "border-red-300 bg-red-50" : "border-gray-300"
            )}
            placeholder="+234 XXX XXX XXXX"
          />
          {errors.phone && (
            <p className="text-red-600 text-xs mt-1">{errors.phone}</p>
          )}
        </div>

        {/* Company Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Company Name *
          </label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className={cn(
              "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition",
              errors.companyName ? "border-red-300 bg-red-50" : "border-gray-300"
            )}
            placeholder="Your Company Ltd"
          />
          {errors.companyName && (
            <p className="text-red-600 text-xs mt-1">{errors.companyName}</p>
          )}
        </div>

        {/* Industry */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Industry *
          </label>
          <select
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            className={cn(
              "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition bg-white",
              errors.industry ? "border-red-300 bg-red-50" : "border-gray-300"
            )}
          >
            <option value="">Select industry</option>
            {INDUSTRIES.map(industry => (
              <option key={industry} value={industry}>{industry}</option>
            ))}
          </select>
          {errors.industry && (
            <p className="text-red-600 text-xs mt-1">{errors.industry}</p>
          )}
        </div>

        {/* Employee Count */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Number of Employees
          </label>
          <select
            name="employeeCount"
            value={formData.employeeCount}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition bg-white"
          >
            <option value="">Select range</option>
            {EMPLOYEE_RANGES.map(range => (
              <option key={range} value={range}>{range}</option>
            ))}
          </select>
        </div>

        {/* Service Interest */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Service of Interest *
          </label>
          <select
            name="serviceInterest"
            value={formData.serviceInterest}
            onChange={handleChange}
            className={cn(
              "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition bg-white",
              errors.serviceInterest ? "border-red-300 bg-red-50" : "border-gray-300"
            )}
          >
            <option value="">Select a service</option>
            {SERVICE_OPTIONS.map(service => (
              <option key={service} value={service}>{service}</option>
            ))}
          </select>
          {errors.serviceInterest && (
            <p className="text-red-600 text-xs mt-1">{errors.serviceInterest}</p>
          )}
        </div>

        {/* How did you hear about us */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            How did you hear about us?
          </label>
          <select
            name="hearAboutUs"
            value={formData.hearAboutUs}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition bg-white"
          >
            <option value="">Select an option</option>
            {HEAR_ABOUT_OPTIONS.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Additional Information
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
            placeholder="Tell us about your current IT challenges, specific concerns, or what you'd like to achieve..."
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Submitting...
          </span>
        ) : (
          "Request Free Assessment →"
        )}
      </button>

      <p className="text-center text-xs text-gray-500 mt-4">
        By submitting this form, you agree to our privacy policy. We will never share your information.
      </p>
    </form>
  );
}

// Helper function (if cn is not imported)
function cn(...classes: (string | false | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}