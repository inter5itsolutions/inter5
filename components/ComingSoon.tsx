// components/ComingSoon.tsx
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface ComingSoonProps {
  title?: string;
  description?: string;
  estimatedDate?: string; // e.g., "Q1 2026" or "March 2026"
  pageName?: string;
  showNotification?: boolean;
  backgroundColor?: string;
}

export default function ComingSoon({
  title = "Coming Soon",
  description = "We're working hard to bring you something amazing. This page is currently under development.",
  estimatedDate = "Coming Q1 2026",
  backgroundColor = "bg-white",
}: ComingSoonProps) {
  const [daysLeft, setDaysLeft] = useState<number | null>(null);

  // Calculate days until estimated launch (example: March 1, 2026)
  useEffect(() => {
    if (estimatedDate && estimatedDate.includes("2026")) {
      const launchDate = new Date(2026, 2, 1); // March 1, 2026
      const today = new Date();
      const diffTime = launchDate.getTime() - today.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      if (diffDays > 0) {
        setDaysLeft(diffDays);
      }
    }
  }, [estimatedDate]);

  

  return (
    <div className={`min-h-screen ${backgroundColor} flex items-center justify-center px-4 py-16`}>
      <div className="max-w-4xl py-6 mx-auto text-center">
        {/* Animated Construction Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="mb-8"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 md:w-24 md:h-24 bg-amber-100 rounded-full">
            <svg className="w-8 h-8 md:w-12 md:h-12 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-7xl font-display font-bold text-gray-900 mb-6"
        >
          {title}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
        >
          {description}
        </motion.p>

        {/* Estimated Date */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 mb-12"
        >
          <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-sm text-gray-700">
            Estimated launch: <strong>{estimatedDate}</strong>
          </span>
          {daysLeft && (
            <span className="text-sm text-amber-600 font-semibold ml-2">
              ({daysLeft} days to go!)
            </span>
          )}
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="max-w-md mx-auto mb-12"
        >
          <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "65%" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="bg-amber-500 h-2 rounded-full"
            />
          </div>
          <p className="text-xs text-gray-500 mt-2">Development in progress 65% complete</p>
        </motion.div>


        {/* Navigation Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gold-400 hover:bg-gold-500 font-medium rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Return Home
          </Link>
          <Link
            href="/assessment"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-gray-300 hover:border-amber-500 text-gray-700 hover:text-amber-600 font-medium rounded-lg transition-all duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Book a Session
          </Link>
        </motion.div>

        {/* Features Teaser */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 pt-8 border-t border-gray-200"
        >
          <p className="text-sm text-gray-500 mb-4">What is coming:</p>
          <div className="flex flex-wrap gap-4 justify-center">
            {["Modern Interface", "Fast Performance", "Mobile Optimized", "Enhanced Security"].map((feature) => (
              <span key={feature} className="inline-flex items-center gap-2 text-sm text-gray-600">
                <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}