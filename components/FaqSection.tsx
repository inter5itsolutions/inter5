"use client";

import { useState } from "react";
import { Variants, motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle, Phone, MessageCircle } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import AnimatedSection from "@/components/AnimatedSection";

const FAQS = [
  {
    question: "How quickly can you start after we sign up?",
    answer: "We typically onboard new clients within 3-5 business days. This includes initial assessment, system setup, and team orientation. For urgent cases, we can accelerate to 48 hours.",
    category: "Process"
  },
  {
    question: "Do you support remote or hybrid teams?",
    answer: "Yes, absolutely. Our solutions are designed for modern work environments. We provide secure remote access, VPN setup, endpoint protection, and support for distributed teams across Nigeria.",
    category: "Support"
  },
  {
    question: "What happens if we need help outside business hours?",
    answer: "All Managed IT and CyberShield clients receive 24/7 monitoring and support. Our on-call engineers respond to critical issues within 1 hour, even on weekends and public holidays.",
    category: "Support"
  },
  {
    question: "Are your services truly naira-priced?",
    answer: "Yes, 100%. All our retainers and one-off projects are billed exclusively in naira. No hidden USD conversions or unexpected exchange rate fluctuations. We review rates monthly and include adjustment clauses in contracts.",
    category: "Pricing"
  },
  {
    question: "Do you serve businesses outside Lagos?",
    answer: "Yes, we support clients across Nigeria remotely, and our engineers travel to major cities (Abuja, Port Harcourt, Ibadan, Kano) for on-site requirements as needed.",
    category: "Coverage"
  },
  {
    question: "What makes you different from other IT companies?",
    answer: "We focus exclusively on manufacturing, oil & gas, and construction SMEs. We stay after delivery (no disappearing after invoice), and we hold formal partnerships with Microsoft, Veeam, ESET, and Lenovo — delivering enterprise tools at SME pricing.",
    category: "Differentiation"
  },
  {
    question: "Do you help with compliance (NDPA, Cybersecurity Act)?",
    answer: "Absolutely. We help you navigate both the NDPA 2023 and Cybersecurity Act 2024, ensuring your IT operations meet Nigerian legal obligations and client data is properly protected.",
    category: "Compliance"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const categoryColors: Record<string, string> = {
  Process: "bg-blue-100 text-blue-700",
  Support: "bg-green-100 text-green-700",
  Pricing: "bg-purple-100 text-purple-700",
  Coverage: "bg-orange-100 text-orange-700",
  Differentiation: "bg-gold-100 text-gold-700",
  Compliance: "bg-red-100 text-red-700",
};

function FAQItem({ faq }: { faq: typeof FAQS[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      variants={itemVariants}
      className="border border-charcoal-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-5 md:p-6 flex items-start justify-between gap-4 hover:bg-charcoal-50 transition-colors duration-200 group"
      >
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className={`text-xs px-2 py-1 rounded-full font-medium ${categoryColors[faq.category]}`}>
              {faq.category}
            </span>
          </div>
          <h3 className="text-base md:text-lg font-semibold text-charcoal-900 group-hover:text-gold-600 transition-colors duration-200 pr-4">
            {faq.question}
          </h3>
        </div>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-gold-100 flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-gold-500' : 'group-hover:bg-gold-200'}`}>
          {isOpen ? (
            <Minus className={`w-4 h-4 transition-all duration-300 ${isOpen ? 'text-white' : 'text-gold-600'}`} />
          ) : (
            <Plus className={`w-4 h-4 transition-all duration-300 text-gold-600 ${isOpen ? 'text-white' : 'group-hover:text-gold-700'}`} />
          )}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="p-5 md:p-6 pt-0 border-t border-charcoal-100 bg-gradient-to-b from-charcoal-50 to-white">
              <p className="text-charcoal-600 text-sm md:text-base leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  const [filter, setFilter] = useState<string>("All");
  const categories = ["All", ...Array.from(new Set(FAQS.map(faq => faq.category)))];
  
  const filteredFAQs = filter === "All" 
    ? FAQS 
    : FAQS.filter(faq => faq.category === filter);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
      className="section-pad relative overflow-hidden bg-gradient-to-b from-white via-charcoal-50 to-white"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-20 w-80 h-80 bg-gold-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gold-50/30 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20" />
        
        {/* Question mark background */}
        <div className="absolute top-1/2 right-10 -translate-y-1/2 opacity-5">
          <HelpCircle className="w-48 h-48 text-gold-500" />
        </div>
      </div>

      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Header */}
          <div className="sticky top-24">
            <AnimatedSection>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-gold-100 rounded-full blur-2xl opacity-50" />
                <SectionHeader
                  label="Common Questions"
                  title="Answers before you even ask."
                  highlight="Answers"
                  subtitle="Everything Nigerian SME owners typically ask before starting a conversation with us."
                />
                
                {/* Category filters */}
                <div className="mt-8 flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setFilter(cat)}
                      className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                        filter === cat
                          ? "bg-gold-500 text-white shadow-md"
                          : "bg-white text-charcoal-600 hover:bg-gold-100 hover:text-gold-700 border border-charcoal-200"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* Contact card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="mt-8 p-6 bg-gradient-to-r from-gold-50 to-gold-100/50 rounded-2xl"
                >
                  <h4 className="font-display font-bold text-charcoal-900 mb-3">
                    Still have questions?
                  </h4>
                  <p className="text-charcoal-600 text-sm mb-4">
                    Our team is ready to help you find the right solution for your business.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Contact Us
                    </a>
                    <a
                      href="tel:+2348023456789"
                      className="inline-flex items-center justify-center gap-2 border border-gold-500 text-gold-600 hover:bg-gold-500 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                    >
                      <Phone className="w-4 h-4" />
                      Call Us Now
                    </a>
                  </div>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column - FAQ Accordion */}
          <AnimatedSection delay={0.15}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {filteredFAQs.length > 0 ? (
                filteredFAQs.map((faq, idx) => (
                  <FAQItem key={idx} faq={faq} index={idx} />
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12 bg-white rounded-xl border border-charcoal-200"
                >
                  <HelpCircle className="w-12 h-12 text-charcoal-300 mx-auto mb-3" />
                  <p className="text-charcoal-500">No FAQs found in this category.</p>
                </motion.div>
              )}

              {/* Trust indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-6 flex items-center justify-center gap-4 text-xs text-charcoal-400"
              >
                <span className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  Trusted by 50+ SMEs
                </span>
                <span className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 bg-gold-500 rounded-full" />
                  98% Client Retention
                </span>
                <span className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                  24/7 Support
                </span>
              </motion.div>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </motion.section>
  );
}