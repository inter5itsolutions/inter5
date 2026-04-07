"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Shield, 
  AlertTriangle, 
  Lock, 
  Mail, 
  Users, 
  Eye, 
  BookOpen,
  TrendingDown,
  CheckCircle,
  ArrowRight,
  Calendar,
  Clock,
  Fingerprint
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

export default function CyberShieldPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-900 via-charcoal-900 to-charcoal-900 text-white">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-10" />
        <div className="container-wide relative z-10 py-20 md:py-28 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm font-mono mb-6">
                CyberShield Protection
              </span>
              <h1 className="text-2xl md:text-6xl lg:text-7xl font-display font-black mb-6 leading-tight">
                Cyber Attacks Are Not a Matter
                <span className="text-red-500 block text-xl md:text-3xl mt-2">Of If — But When</span>
              </h1>
              <p className="text-md md:text-2xl text-charcoal-300 mb-8 max-w-3xl mx-auto">
                Protect your business before it becomes the next target.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col md:flex-row justify-center"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center text-[11px] md:text-xl gap-3 bg-red-500 hover:bg-red-600 text-white px-4 md:px-8 py-2 md:py-4 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-xl"
                >
                  <Calendar className="w-5 h-5 hidden md:block" />
                   Book a Free 30-Minute Assessment
                  <ArrowRight className="w-5 h-5 " />
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
                A Single Cyberattack Can Cripple Your Business
              </h2>
              <p className="text:md md:text-xl text-charcoal-600">Leading to:</p>
            </motion.div>

            <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Clock, title: "Weeks of Downtime", description: "Operations grind to a halt" },
                { icon: TrendingDown, title: "Financial Losses", description: "Revenue stops completely" },
                { icon: Users, title: "Lost Trust", description: "Customers lose confidence" }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  className="bg-navy-100 p-6 rounded-xl shadow-lg text-center"
                >
                  <item.icon className="w-12 h-12 text-red-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-charcoal-100">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-8 p-4 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
              <p className="text-charcoal-700 font-medium">
                ⚠️ Many businesses never fully recover from a major cyberattack.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-6 bg-white">
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
                SMEs Are the New Target
              </h2>
              <p className="text-md md:text-xl text-charcoal-600">Of Cyberattacks Worldwide</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-gradient-to-r from-red-900 to-red-800 text-white p-8 rounded-2xl mb-8">
              <p className="text-md mb-6">
                Most Nigerian businesses mistakenly believe they are too small to be hacked — 
                until ransomware, phishing, or data theft happens.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Employees clicking malicious links",
                  "Business emails compromised",
                  "Customer data exposed",
                  "Ransomware locking files",
                  "No cybersecurity policies",
                  "No backup if systems are hijacked"
                ].map((issue, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <AlertTriangle className="w-4 h-4 text-red-300" />
                    <span className="text-sm ">{issue}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="inline-block p-4 bg-red-50 rounded-full mb-4">
                <AlertTriangle className="w-4 md:w-8 h-4 md:h-8 text-red-500" />
              </div>
              <p className="text-sm md:text-lg text-charcoal-700 font-semibold">
                One cyberattack can shut operations for days, damage your reputation, 
                and cause massive financial loss.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-5 md:py-10 bg-gradient-to-br from-red-50 to-white">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <div className="inline-block p-3 bg-red-100 rounded-full mb-4">
                <Shield className="w-4 md:w-8 h-4 md:h-8 text-red-600" />
              </div>
              <h2 className="text-xl md:text-4xl font-display font-bold text-charcoal-900 mb-4">
                CyberShield Complete Cybersecurity Protection
              </h2>
              <p className="text-sm md:text-xl text-charcoal-600 max-w-3xl mx-auto">
                Designed specifically for Nigerian SMEs to protect against daily cyber threats.
              </p>
            </motion.div>

            <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: Eye, title: "Threat Detection & Prevention", desc: "24/7 monitoring for suspicious activity" },
                { icon: Mail, title: "Email Security & Anti-Phishing", desc: "Block malicious emails before they reach staff" },
                { icon: Lock, title: "User Access Control", desc: "Manage who can access sensitive data" },
                { icon: Fingerprint, title: "Real-time Monitoring", desc: "Instant alerts for security breaches" },
                { icon: BookOpen, title: "Security Policy Setup", desc: "Custom policies for your business" },
                { icon: Users, title: "Staff Training", desc: "Educate your team on cyber threats" }
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                  <feature.icon className="w-5 h-5 md:w-10 md:h-10 text-red-600 mb-3" />
                  <h3 className=" md:text-lg font-bold text-charcoal-900 mb-2">{feature.title}</h3>
                  <p className="text-charcoal-600 text-sm">{feature.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="inline-block p-4 bg-white rounded-full shadow-lg mb-4">
                <CheckCircle className="w-4 md:w-8 h-4 md:h-8 text-red-500" />
              </div>
              <p className="md:text-xl text-charcoal-800 font-semibold">
                With CyberShield, your business is protected against the most common 
                cyberattacks targeting Nigerian SMEs daily.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 bg-charcoal-900 text-white">
        <div className="container-wide text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-2xl md:text-4xl font-display font-bold mb-4">
              Book a Free Cybersecurity Risk Check
            </h2>
            <p className="text-sm md:text-xl text-charcoal-300 mb-8 max-w-2xl mx-auto">
              Get a simple, non-technical review of vulnerabilities in your business.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/assessment"
                className="inline-flex items-center gap-3 bg-red-500 hover:bg-red-600 text-white md:px-8 px-4 md:py-4 py-2 rounded-lg font-semibold text-[11px] md:text-lg transition-all duration-300"
              >
                <Shield className="w-5 h-5 hidden md:block" />
                  Click to Book Your Free Risk Check
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}