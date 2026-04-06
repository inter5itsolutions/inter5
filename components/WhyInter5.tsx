"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import AnimatedSection from "@/components/AnimatedSection";
import { 
  Shield, 
  HandCoins,
  Handshake, 
  GraduationCap, 
  Building2, 
  FileCheck,
  ArrowRight
} from "lucide-react";

const DIFFERENTIATORS = [
  {
    num: "01",
    title: "Sector Specificity",
    body: "We don't serve everyone. We focus on manufacturing, oil & gas, and construction SMEs — so we understand your operational risks, not just IT in the abstract.",
    icon: Building2,
    color: "from-blue-500 to-blue-600"
  },
  {
    num: "02",
    title: "Naira Pricing. No Surprises.",
    body: "All monthly retainers are billed in naira. No hidden USD conversion. We review rates monthly and include annual adjustment clauses in every contract.",
    icon: HandCoins,
    color: "from-green-500 to-green-600"
  },
  {
    num: "03",
    title: "We Stay After Delivery",
    body: "The most common complaint about Lagos IT companies: they disappear after the invoice. We follow up after every engagement — proactively, not when something breaks.",
    icon: Handshake,
    color: "from-purple-500 to-purple-600"
  },
  {
    num: "04",
    title: "World-Class Technical Depth",
    body: "Our CTO holds an MSc in Cybersecurity from the University of Salford (UK), Azure AZ-104, SC-300, and CompTIA Security+. That expertise comes with every retainer.",
    icon: GraduationCap,
    color: "from-red-500 to-red-600"
  },
  {
    num: "05",
    title: "Partner-Backed Delivery",
    body: "We hold formal partnerships with Microsoft, Veeam, ESET, and Lenovo. You get enterprise-grade tools, managed by experts — at SME-accessible pricing.",
    icon: Shield,
    color: "from-cyan-500 to-cyan-600"
  },
  {
    num: "06",
    title: "NDPA & Cybersecurity Act Ready",
    body: "We help you navigate both the NDPA 2023 and the Cybersecurity Act 2024 — so your IT operations meet Nigerian legal obligations and your clients' data is protected.",
    icon: FileCheck,
    color: "from-amber-500 to-amber-600"
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
  hover: {
    y: -8,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25,
    },
  },
};



export default function WhyInter5() {
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
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-50/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-grid-pattern bg-grid opacity-20" />
      </div>

      <div className="container-wide relative z-10">
        <AnimatedSection className="mb-10">
          <SectionHeader
            label="Why Inter5"
            title="Six reasons SMEs choose us."
            highlight="Six reasons"
            subtitle="No two IT companies are the same. Here's what genuinely sets Inter5 apart from every alternative in the Lagos market."
          />
        </AnimatedSection>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {DIFFERENTIATORS.map((d, i) => (
            <motion.div
              key={d.num}
              variants={cardVariants}
              whileHover="hover"
              custom={i}
              className="group relative"
            >
              <div className="relative bg-slate-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full overflow-hidden">
                {/* Gradient border on hover */}
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" 
                     style={{ background: `linear-gradient(135deg, ${d.color.split(' ')[1]}20, transparent)` }} />
                
                {/* Card content */}
                <div className="relative p-6 md:p-8">
                  {/* Icon and number row */}
                  <div className="flex items-start justify-between mb-6">
                    
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${d.color} flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300`}
                    >
                      <d.icon className="w-6 h-6 text-white" />
                    </motion.div>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-charcoal-900 text-xl md:text-2xl mb-4 group-hover:text-gold-600 transition-colors duration-300">
                    {d.title}
                  </h3>

                  {/* Description */}
                  <p className="text-charcoal-600 text-sm md:text-base leading-relaxed mb-4">
                    {d.body}
                  </p>

                  {/* Decorative line */}
                  <motion.div 
                    className="h-0.5 bg-gradient-to-r from-gold-500 to-transparent w-0 group-hover:w-full transition-all duration-500"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                  />
                </div>

                {/* Bottom accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${d.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust indicators section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 pt-12 border-t border-charcoal-200"
        >
          <div className="text-center mb-8">
            <p className="text-charcoal-500 text-sm font-mono tracking-wider uppercase">
              Trusted by Industry Leaders
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {[
              { name: "Microsoft Partner", logo: "M", color: "from-blue-600 to-blue-700" },
              { name: "Veeam Gold Partner", logo: "V", color: "from-red-600 to-red-700" },
              { name: "ESET Premium Partner", logo: "E", color: "from-green-600 to-green-700" },
              { name: "Lenovo Partner", logo: "L", color: "from-yellow-600 to-yellow-700" },
            ].map((partner, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex flex-col items-center gap-2 group cursor-pointer"
              >
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${partner.color} flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:shadow-lg transition-all duration-300`}>
                  {partner.logo}
                </div>
                <span className="text-xs text-charcoal-600 font-medium group-hover:text-gold-600 transition-colors">
                  {partner.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block"
          >
            <a
              href="/contact"
              className="inline-flex items-center gap-2 text-gold-600 hover:text-gold-700 font-semibold group"
            >
              <span>Discover how Inter5 can transform your business</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}