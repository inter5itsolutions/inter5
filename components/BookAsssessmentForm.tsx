// components/BookAssessmentForm.tsx
"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  industry: string;
  employeeCount: string;
  itChallenges: string;
  preferredContact: string;
  bestTimeToContact: string;
  agreeToTerms: boolean;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  companyName?: string;
  industry?: string;
  employeeCount?: string;
  itChallenges?: string;
  preferredContact?: string;
  bestTimeToContact?: string;
  agreeToTerms?: string;
}

const industries = [
  "Manufacturing",
  "Oil & Gas",
  "Construction",
  "Professional Services",
  "Healthcare",
  "Education",
  "Retail",
  "Technology",
  "Other"
];

const employeeRanges = [
  "1-10",
  "11-50",
  "51-200",
  "201-500",
  "500+"
];

const contactMethods = [
  "Email",
  "Phone",
  "WhatsApp"
];

const timeSlots = [
  "Morning (9AM - 12PM)",
  "Afternoon (12PM - 4PM)",
  "Evening (4PM - 7PM)",
  "Any time"
];

// Modal Component
function FeedbackModal({ 
  isOpen, 
  onClose, 
  type, 
  message,
  onRetry 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  type: "success" | "error"; 
  message: string;
  onRetry?: () => void;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md mx-4"
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Header with gradient */}
              <div className={`p-6 text-center ${
                type === "success" ? "bg-gradient-to-br from-green-500 to-green-600" : "bg-gradient-to-br from-red-500 to-red-600"
              }`}>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                  className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  {type === "success" ? (
                    <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                </motion.div>
                <h3 className="text-white text-2xl font-bold mb-2">
                  {type === "success" ? "Success!" : "Oops!"}
                </h3>
              </div>
              
              {/* Body */}
              <div className="p-6 text-center">
                <p className="text-gray-600 mb-6">{message}</p>
                <button
                  onClick={type === "success" ? onClose : onRetry}
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    type === "success"
                      ? "bg-green-500 hover:bg-green-600 text-white"
                      : "bg-brand-orange hover:bg-brand-orange/90 text-white"
                  }`}
                >
                  {type === "success" ? "Got it, thanks!" : "Try Again"}
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default function BookAssessmentForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    industry: "",
    employeeCount: "",
    itChallenges: "",
    preferredContact: "",
    bestTimeToContact: "",
    agreeToTerms: false
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"success" | "error">("success");
  const [modalMessage, setModalMessage] = useState("");

  // Validation functions
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    return phoneRegex.test(phone);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Full Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Name must be at least 2 characters";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    // Company Name validation
    if (!formData.companyName.trim()) {
      newErrors.companyName = "Company name is required";
    }

    // Industry validation
    if (!formData.industry) {
      newErrors.industry = "Please select your industry";
    }

    // Employee count validation
    if (!formData.employeeCount) {
      newErrors.employeeCount = "Please select employee range";
    }

    // IT Challenges validation
    if (!formData.itChallenges.trim()) {
      newErrors.itChallenges = "Please describe your IT challenges";
    } else if (formData.itChallenges.trim().length < 10) {
      newErrors.itChallenges = "Please provide more details (minimum 10 characters)";
    }

    // Preferred contact validation
    if (!formData.preferredContact) {
      newErrors.preferredContact = "Please select preferred contact method";
    }

    // Best time to contact validation
    if (!formData.bestTimeToContact) {
      newErrors.bestTimeToContact = "Please select preferred contact time";
    }

    // Terms validation
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "You must agree to the terms";
    }

    setErrors(newErrors);
    
    if (Object.keys(newErrors).length > 0) {
      // Show error modal for validation failures
      setModalType("error");
      setModalMessage("Please fix the errors in the form before submitting.");
      setModalOpen(true);
    }
    
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));

    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      companyName: "",
      industry: "",
      employeeCount: "",
      itChallenges: "",
      preferredContact: "",
      bestTimeToContact: "",
      agreeToTerms: false
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      // Scroll to first error
      const firstError = document.querySelector(".error-message");
      if (firstError) {
        firstError.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare data for Formspree
      const formDataToSend = new FormData();
      formDataToSend.append("fullName", formData.fullName);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("companyName", formData.companyName);
      formDataToSend.append("industry", formData.industry);
      formDataToSend.append("employeeCount", formData.employeeCount);
      formDataToSend.append("itChallenges", formData.itChallenges);
      formDataToSend.append("preferredContact", formData.preferredContact);
      formDataToSend.append("bestTimeToContact", formData.bestTimeToContact);
      formDataToSend.append("_replyto", formData.email);
      formDataToSend.append("_subject", `New IT Assessment Request from ${formData.companyName}`);

      const response = await fetch("https://formspree.io/f/xykbvvjy", {
        method: "POST",
        body: formDataToSend,
        headers: {
          "Accept": "application/json"
        }
      });

      if (response.ok) {
        setModalType("success");
        setModalMessage("Thank you! We'll review your request and get back to you within 24 hours.");
        setModalOpen(true);
        resetForm();
      } else {
        throw new Error("Form submission failed");
      }
    } catch {
      setModalType("error");
      setModalMessage("Something went wrong. Please try again or contact us directly at info@inter5it.com");
      setModalOpen(true);
      
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRetry = () => {
    setModalOpen(false);
    // Focus on submit button or scroll to form
    const submitButton = document.querySelector('button[type="submit"]');
    if (submitButton) {
      submitButton.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
            Full Name <span className="text-brand-orange">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-colors ${
              errors.fullName ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="John Doe"
          />
          {errors.fullName && (
            <p className="error-message text-red-500 text-xs mt-1">{errors.fullName}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
            Email Address <span className="text-brand-orange">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-colors ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="john@company.com"
          />
          {errors.email && (
            <p className="error-message text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
            Phone Number <span className="text-brand-orange">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-colors ${
              errors.phone ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="+234 123 456 7890"
          />
          {errors.phone && (
            <p className="error-message text-red-500 text-xs mt-1">{errors.phone}</p>
          )}
        </div>

        {/* Company Name */}
        <div>
          <label htmlFor="companyName" className="block text-sm font-semibold text-gray-700 mb-2">
            Company Name <span className="text-brand-orange">*</span>
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-colors ${
              errors.companyName ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Your Company Ltd"
          />
          {errors.companyName && (
            <p className="error-message text-red-500 text-xs mt-1">{errors.companyName}</p>
          )}
        </div>

        {/* Industry */}
        <div>
          <label htmlFor="industry" className="block text-sm font-semibold text-gray-700 mb-2">
            Industry <span className="text-brand-orange">*</span>
          </label>
          <select
            id="industry"
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-colors ${
              errors.industry ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value="">Select industry</option>
            {industries.map(industry => (
              <option key={industry} value={industry}>{industry}</option>
            ))}
          </select>
          {errors.industry && (
            <p className="error-message text-red-500 text-xs mt-1">{errors.industry}</p>
          )}
        </div>

        {/* Employee Count */}
        <div>
          <label htmlFor="employeeCount" className="block text-sm font-semibold text-gray-700 mb-2">
            Number of Employees <span className="text-brand-orange">*</span>
          </label>
          <select
            id="employeeCount"
            name="employeeCount"
            value={formData.employeeCount}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-colors ${
              errors.employeeCount ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value="">Select range</option>
            {employeeRanges.map(range => (
              <option key={range} value={range}>{range} employees</option>
            ))}
          </select>
          {errors.employeeCount && (
            <p className="error-message text-red-500 text-xs mt-1">{errors.employeeCount}</p>
          )}
        </div>

        {/* IT Challenges */}
        <div>
          <label htmlFor="itChallenges" className="block text-sm font-semibold text-gray-700 mb-2">
            What IT challenges is your business facing? <span className="text-brand-orange">*</span>
          </label>
          <textarea
            id="itChallenges"
            name="itChallenges"
            value={formData.itChallenges}
            onChange={handleChange}
            rows={4}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-colors ${
              errors.itChallenges ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Please describe your current IT challenges, concerns, or goals..."
          />
          {errors.itChallenges && (
            <p className="error-message text-red-500 text-xs mt-1">{errors.itChallenges}</p>
          )}
        </div>

        {/* Preferred Contact Method */}
        <div>
          <label htmlFor="preferredContact" className="block text-sm font-semibold text-gray-700 mb-2">
            Preferred Contact Method <span className="text-brand-orange">*</span>
          </label>
          <select
            id="preferredContact"
            name="preferredContact"
            value={formData.preferredContact}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-colors ${
              errors.preferredContact ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value="">Select method</option>
            {contactMethods.map(method => (
              <option key={method} value={method}>{method}</option>
            ))}
          </select>
          {errors.preferredContact && (
            <p className="error-message text-red-500 text-xs mt-1">{errors.preferredContact}</p>
          )}
        </div>

        {/* Best Time to Contact */}
        <div>
          <label htmlFor="bestTimeToContact" className="block text-sm font-semibold text-gray-700 mb-2">
            Best Time to Contact <span className="text-brand-orange">*</span>
          </label>
          <select
            id="bestTimeToContact"
            name="bestTimeToContact"
            value={formData.bestTimeToContact}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-colors ${
              errors.bestTimeToContact ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value="">Select time slot</option>
            {timeSlots.map(slot => (
              <option key={slot} value={slot}>{slot}</option>
            ))}
          </select>
          {errors.bestTimeToContact && (
            <p className="error-message text-red-500 text-xs mt-1">{errors.bestTimeToContact}</p>
          )}
        </div>

        {/* Terms and Conditions */}
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="agreeToTerms"
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleChange}
            className={`mt-1 w-4 h-4 rounded focus:ring-brand-orange ${
              errors.agreeToTerms ? "border-red-500" : "border-gray-300"
            }`}
          />
          <label htmlFor="agreeToTerms" className="text-sm text-gray-600">
            I agree to the processing of my personal data and understand that an Inter5 representative will contact me regarding this assessment. <span className="text-brand-orange">*</span>
          </label>
        </div>
        {errors.agreeToTerms && (
          <p className="error-message text-red-500 text-xs mt-1">{errors.agreeToTerms}</p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
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
            "Request Free Assessment "
          )}
        </button>

        <p className="text-xs text-gray-400 text-center mt-4">
          By submitting this form, you agree to our privacy policy. We will never share your information.
        </p>
      </form>

      {/* Feedback Modal */}
      <FeedbackModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        type={modalType}
        message={modalMessage}
        onRetry={handleRetry}
      />
    </>
  );
}