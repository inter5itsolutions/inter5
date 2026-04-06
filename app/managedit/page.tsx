"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Shield, 
  Clock, 
  Users, 
  TrendingDown, 
  Wifi, 
  Server, 
  Headphones, 
  FileText,
  CheckCircle,
  ArrowRight,
  Calendar
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function ManagedITPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-charcoal-900 text-white">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-10" />
        <div className="container-wide relative z-10 py-20 md:py-28 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-3 py-1 bg-gold-500/20 text-gold-400 rounded-full text-sm font-mono mb-6">
                Managed IT Services
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black mb-6 leading-tight">
                Keep Your Business Running
                <span className="text-gold-500 block mt-2">Without Costly Downtime</span>
              </h1>
              <p className="text-xl md:text-2xl text-charcoal-300 mb-8 max-w-3xl mx-auto">
                Your business depends on technology. When it fails, everything stops.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Link
                  href="/assessment"
                  className="inline-flex items-center gap-3 bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-xl"
                >
                  <Calendar className="w-5 h-5" />
                  Book a Free 30-Minute Assessment
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
              <p className="text-charcoal-400 text-sm mt-4">No obligation. No commitment.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-charcoal-50">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal-900 mb-4">
                Downtime Isn't Just an Inconvenience
              </h2>
              <p className="text-xl text-charcoal-600">
                It's a business risk that can lead to:
              </p>
            </motion.div>

            <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-6">
              {[
                { icon: TrendingDown, title: "Lost Sales", description: "Missed opportunities and revenue loss" },
                { icon: Users, title: "Damaged Trust", description: "Frustrated customers leave" },
                { icon: Clock, title: "Reduced Productivity", description: "Teams can't work efficiently" }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-xl shadow-lg text-center"
                >
                  <item.icon className="w-12 h-12 text-gold-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-charcoal-900 mb-2">{item.title}</h3>
                  <p className="text-charcoal-600">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-8 p-4 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
              <p className="text-charcoal-700 font-medium">
                ⚠️ Even a few hours offline can create long-term setbacks for your business.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal-900 mb-4">
                Nigerian SMEs Are Losing Money
              </h2>
              <p className="text-xl text-charcoal-600">To Downtime & Disorganized IT</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-gradient-to-r from-charcoal-900 to-charcoal-800 text-white p-8 rounded-2xl mb-8">
              <p className="text-lg mb-6">
                Most SMEs in Nigeria struggle with unreliable IT systems — slow computers, sudden network issues, 
                unplanned downtime, and zero documentation.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Hours of lost productivity",
                  "Delayed customer orders",
                  "Employee frustration",
                  "Missed revenue from system failures",
                  "No one to call when things break"
                ].map((issue, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gold-500 rounded-full" />
                    <span>{issue}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="inline-block p-4 bg-gold-50 rounded-full mb-4">
                <Shield className="w-8 h-8 text-gold-500" />
              </div>
              <p className="text-lg text-charcoal-700 font-semibold">
                Without a professional IT structure, small problems quickly escalate into costly disruptions.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gradient-to-br from-gold-50 to-white">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal-900 mb-4">
                Your Dedicated IT Department
              </h2>
              <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
                Inter5 provides fully structured, proactive, and affordable Managed IT support 
                that keeps your business running smoothly.
              </p>
            </motion.div>

            <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: Server, title: "24/7 Monitoring & Support", color: "bg-blue-50" },
                { icon: Wifi, title: "Network & System Optimization", color: "bg-green-50" },
                { icon: Headphones, title: "Helpdesk Support for Your Team", color: "bg-purple-50" },
                { icon: FileText, title: "IT Asset Documentation", color: "bg-orange-50" },
                { icon: Shield, title: "Preventive Maintenance", color: "bg-red-50" },
                { icon: Clock, title: "Proactive Issue Resolution", color: "bg-indigo-50" }
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  className={`${feature.color} p-6 rounded-xl shadow-md`}
                >
                  <feature.icon className="w-10 h-10 text-gold-600 mb-3" />
                  <h3 className="text-lg font-bold text-charcoal-900">{feature.title}</h3>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="inline-block p-4 bg-white rounded-full shadow-lg mb-4">
                <CheckCircle className="w-8 h-8 text-gold-500" />
              </div>
              <p className="text-xl text-charcoal-800 font-semibold">
                Inter5 becomes your dependable IT partner, ensuring continuous operations, 
                reduced downtime, and predictable IT performance.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-charcoal-900 text-white">
        <div className="container-wide text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Book a Free 30-Minute IT Assessment
            </h2>
            <p className="text-xl text-charcoal-300 mb-8 max-w-2xl mx-auto">
              Discover hidden risks and inefficiencies slowing down your business.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/assessment"
                className="inline-flex items-center gap-3 bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                <Calendar className="w-5 h-5" />
                Click to Book Your Free Assessment
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}