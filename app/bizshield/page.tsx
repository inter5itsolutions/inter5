"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Database, 
  Cloud, 
  RefreshCw, 
  FileText, 
  Shield, 
  Clock, 
  TrendingUp,
  CheckCircle,
  Calendar,
  HardDrive,
  Archive,
  AlertTriangle,
  ChevronRight
} from "lucide-react";
import CTABanner from "@/components/CTABanner";

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

export default function BizShieldPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-charcoal-900 to-charcoal-900 text-white">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-10" />
        <div className="container-wide relative z-10 py-20 md:py-28 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-mono mb-6">
                BizShield Continuity
              </span>
              <h1 className="text-2xl md:text-6xl lg:text-7xl font-display font-black mb-6 leading-tight">
                Your Data Is Your Business
                <span className="text-blue-500 block mt-2">Protect It</span>
              </h1>
              <p className="text-md md:text-xl text-charcoal-300 mb-8 max-w-3xl mx-auto">
                Losing your data means losing everything.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Link
                  href="/assessment"
                  className="inline-flex items-center gap-3 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 md:px-8 md:py-4 rounded-lg font-semibold text-[13px] md:text-lg transition-all duration-300 shadow-xl"
                >
                  <Calendar className="w-5 h-5 hidden md:block" />
                    Book a Free 30-Minute Assessment
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </motion.div>
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
              <h2 className="text-xl md:text-4xl font-display font-bold text-charcoal-900 mb-4">
                Data Loss Is Not Just Technical
              </h2>
              <p className="md:text-xl text-charcoal-600">It is catastrophic and can lead to:</p>
            </motion.div>

            <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Clock, title: "Operations Stop", description: "Business grinds to a halt instantly" },
                { icon: TrendingUp, title: "Revenue Disappears", description: "Opportunities vanish overnight" },
                { icon: RefreshCw, title: "Slow Recovery", description: "Takes weeks or never happens" }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  className="bg-gold-100 p-6 rounded-xl shadow-lg text-center"
                >
                  <item.icon className="h-8 w-8 md:w-12 md:h-12 text-blue-500 mx-auto mb-4" />
                  <h3 className="md:text-xl font-bold text-charcoal-900 mb-2">{item.title}</h3>
                  <p className="text-sm md:text-lg text-charcoal-600">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-8 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
              <p className="text-charcoal-700 font-medium">
                ⚠️ Without a plan, your business is completely exposed to data loss.
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
              <h2 className="text-2xl md:text-4xl font-display font-bold text-charcoal-900 mb-4">
                Downtime, Data Loss & Ransomware
              </h2>
              <p className="md:text-xl text-charcoal-600">Are Destroying SMEs Across Nigeria</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-8 rounded-2xl mb-8">
              <p className="md:text-lg mb-6">
                Manufacturers, logistics companies, retail stores, and service businesses lose millions yearly 
                because they lack a business continuity strategy.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "No backup when data is lost",
                  "No recovery plan for server failures",
                  "Ransomware locks company files",
                  "Downtime stops operations completely",
                  "Manual recovery takes days",
                  "No resilience for disasters"
                ].map((issue, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Archive className="w-4 h-4 text-blue-300" />
                    <span className="text-sm md:text-base">{issue}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="inline-block p-4 bg-blue-50 rounded-full mb-4">
                <AlertTriangle className="w-8 h-8 text-blue-500" />
              </div>
              <p className="md:text-lg text-charcoal-700 font-semibold">
                Without business continuity, one major incident can wipe out years of hard work.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <div className="inline-block p-3 bg-blue-100 rounded-full mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-xl md:text-4xl font-display font-bold text-charcoal-900 mb-4">
                BizShield Backup, Recovery & Business Continuity
              </h2>
              <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
                Ensuring your business keeps running even when systems fail.
              </p>
            </motion.div>

            <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: Cloud, title: "Automated Cloud Backups", desc: "Scheduled backups with no manual work" },
                { icon: RefreshCw, title: "Fast Disaster Recovery", desc: "Get back online in minutes, not days" },
                { icon: Shield, title: "Ransomware-Proof Copies", desc: "Immutable backups that can't be encrypted" },
                { icon: FileText, title: "Business Continuity Planning", desc: "Custom plan for your operations" },
                { icon: Database, title: "Compliance & Documentation", desc: "Meet industry regulations" },
                { icon: HardDrive, title: "24/7 Backup Monitoring", desc: "We watch your backups so you don't have to" }
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                  <feature.icon className="w-10 h-10 text-blue-600 mb-3" />
                  <h3 className="text-lg font-bold text-charcoal-900 mb-2">{feature.title}</h3>
                  <p className="text-charcoal-600 text-sm">{feature.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="inline-block p-4 bg-white rounded-full shadow-lg mb-4">
                <CheckCircle className="w-8 h-8 text-blue-500" />
              </div>
              <p className="md:text-xl text-charcoal-800 font-semibold">
                BizShield guarantees that your business never stops — no matter what happens.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <CTABanner />
    </div>
  );
}