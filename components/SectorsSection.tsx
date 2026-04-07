"use client";

import { motion, Variants } from "framer-motion";
import { SECTORS } from "@/lib/data";
import SectionHeader from "@/components/SectionHeader";
import AnimatedSection from "@/components/AnimatedSection";
import { 
  Factory, 
  Droplet,
  HardHat, 
  ShoppingBag, 
  Building, 
  TrendingUp,
  ArrowRight,
  LucideIcon
} from "lucide-react";

// Map sector icons to Lucide icons
const sectorIcons: Record<string, LucideIcon> = {
  "🏭": Factory,
  "🛢️": Droplet,
  "🏗️": HardHat,
  "🏪": ShoppingBag,
  "🏦": Building,
  "📈": TrendingUp,
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
  hover: {
    x: 8,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25,
    },
  },
};

const iconVariants = {
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: { duration: 0.2 },
  },
};

export default function SectorsSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
      className="section-pad relative overflow-hidden bg-gradient-to-br from-white via-charcoal-50 to-white"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gold-100/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gold-50/30 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30" />
      </div>

      <div className="container-wide relative z-10">
        <AnimatedSection className="mb-16">
          <SectionHeader
            label="Industries We Serve"
            title="Built for Nigerian business sectors."
            highlight="Nigerian business sectors"
            subtitle="We speak the language of manufacturing, oil & gas, construction, and beyond — delivering IT solutions that fit your operational reality."
          />
        </AnimatedSection>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {SECTORS.map((sector, i) => {
            const IconComponent = sectorIcons[sector.icon] || Building;
            
            return (
              <motion.div
                key={sector.name}
                variants={cardVariants}
                whileHover="hover"
                custom={i}
                className="group"
              >
                <div className="relative bg-gold-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-gold-500/0 via-gold-500/0 to-gold-500/5 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Left accent border */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-gold-500 to-gold-600 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                  
                  <div className="p-6 md:p-8">
                    <div className="flex items-start gap-5">
                      {/* Icon container with animation */}
                      <motion.div
                        variants={iconVariants}
                        className="flex-shrink-0"
                      >
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold-100 to-gold-50 flex items-center justify-center group-hover:from-gold-500 group-hover:to-gold-600 transition-all duration-300 shadow-md group-hover:shadow-lg">
                          <IconComponent className="w-7 h-7 text-gold-600 group-hover:text-white transition-colors duration-300" />
                        </div>
                      </motion.div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="font-display font-bold text-charcoal-700 text-xl mb-2 group-hover:text-gold-600 transition-colors duration-300">
                          {sector.name}
                        </h3>
                        <p className="text-charcoal-600 text-sm leading-relaxed">
                          {sector.desc}
                        </p>
                        
                        {/* Decorative line on hover */}
                        <motion.div 
                          className="h-0.5 bg-gradient-to-r from-gold-500 to-transparent w-0 group-hover:w-full transition-all duration-500 mt-3"
                          initial={{ width: 0 }}
                          whileHover={{ width: "100%" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Statistics / Impact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 pt-12 border-t border-charcoal-200"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "50+", label: "Businesses Served", icon: Building },
              { number: "98%", label: "Client Retention Rate", icon: TrendingUp },
              { number: "24/7", label: "Support Available", icon: ArrowRight },
              { number: "3+", label: "Years of Excellence", icon: Factory },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center mx-auto mb-3 group-hover:bg-gold-500 transition-colors duration-300">
                  <stat.icon className="w-5 h-5 text-gold-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="text-2xl md:text-3xl font-display font-bold text-charcoal-900 mb-1">
                  {stat.number}
                </div>
                <div className="text-xs text-charcoal-500 font-medium uppercase tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}