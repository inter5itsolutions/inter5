"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TESTIMONIALS } from "@/lib/data";
import SectionHeader from "@/components/SectionHeader";
import AnimatedSection from "@/components/AnimatedSection";
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight,
  Building2,
  MessageCircle,
  Pause,
  Play
} from "lucide-react";


type Testimonial = {
  quote: string;
  author: string;
  sector: string;
};

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: { duration: 0.2 }
  },
  hover: {
    y: -8,
    transition: {
      type: "spring" as const,
      stiffness: 400,
      damping: 25,
    },
  },
};

const starVariants = {
  hidden: { scale: 0 },
  visible: (i: number) => ({
    scale: 1,
    transition: { delay: i * 0.05, type: "spring" as const, stiffness: 200 },
  }),
};

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(2);

  // Handle responsive items per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else {
        setItemsPerView(2);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.ceil(TESTIMONIALS.length / itemsPerView);
  
  // Get current visible testimonials
  const getCurrentTestimonials = () => {
    const start = currentIndex * itemsPerView;
    const end = start + itemsPerView;
    return TESTIMONIALS.slice(start, end);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };
  
  // Auto-play functionality
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isAutoPlaying && !isHovered) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, isHovered, currentIndex, nextSlide]);

  

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

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
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-gold-50/30 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20" />
        
        {/* Quote marks background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5">
          <Quote className="w-64 h-64 text-gold-500" />
        </div>
      </div>

      <div className="container-wide relative z-10">
        <AnimatedSection className="mb-12 text-center">
          <SectionHeader
            label="Client Feedback"
            title="What our clients say."
            highlight="clients say"
            subtitle="Don't just take our word for it — hear from businesses we've helped transform"
            center
          />
        </AnimatedSection>

        {/* Carousel Container */}
        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-20 bg-white shadow-lg rounded-full p-2 hover:bg-gold-500 hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous testimonials"
            disabled={totalSlides <= 1}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-20 bg-white shadow-lg rounded-full p-2 hover:bg-gold-500 hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next testimonials"
            disabled={totalSlides <= 1}
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Carousel Content */}
          <div className="overflow-hidden px-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className={`grid gap-6 md:gap-8 ${
                  itemsPerView === 2 ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"
                }`}
              >
                {getCurrentTestimonials().map((testimonial, idx) => (
                  <TestimonialCard 
                    key={`${currentIndex}-${idx}`}
                    testimonial={testimonial} 
                    index={idx}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Auto-play Control */}
          {totalSlides > 1 && (
            <button
              onClick={toggleAutoPlay}
              className="absolute -bottom-12 right-0 bg-white shadow-md rounded-full p-2 hover:bg-gold-500 hover:text-white transition-all duration-300"
              aria-label={isAutoPlaying ? "Pause auto-play" : "Start auto-play"}
            >
              {isAutoPlaying ? (
                <Pause className="w-4 h-4" />
              ) : (
                <Play className="w-4 h-4" />
              )}
            </button>
          )}
        </div>

        {/* Dots Indicator */}
        {totalSlides > 1 && (
          <div className="flex justify-center gap-2 mt-12">
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`transition-all duration-300 ${
                  idx === currentIndex
                    ? "w-8 h-2 bg-gold-500 rounded-full"
                    : "w-2 h-2 bg-charcoal-300 rounded-full hover:bg-charcoal-400"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}

        {/* Rating Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 pt-8 text-center"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-3 bg-white shadow-lg rounded-full px-6 py-3">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
              ))}
            </div>
            <span className="text-charcoal-700 font-semibold">5.0</span>
            <span className="text-charcoal-500 text-sm">out of 5</span>
            <div className="w-px h-4 bg-charcoal-300 mx-2" />
            <span className="text-charcoal-600 text-sm">
              Based on {TESTIMONIALS.length * 3}+ client reviews
            </span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

// Testimonial Card Component
function TestimonialCard({ testimonial, index }: { 
  testimonial: Testimonial; 
  index: number;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const shouldTruncate = testimonial.quote.length > 200 && !isExpanded;
  const truncatedQuote = shouldTruncate 
    ? testimonial.quote.slice(0, 200) + "..."
    : testimonial.quote;

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      whileHover="hover"
      custom={index}
      className="group h-full"
    >
      <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full flex flex-col">
        {/* Gradient border top */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
        
        {/* Star rating */}
        <div className="absolute top-4 right-4 flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={starVariants}
              initial="hidden"
              animate="visible"
            >
              <Star className="w-3 h-3 fill-gold-500 text-gold-500" />
            </motion.div>
          ))}
        </div>

        <div className="p-6 md:p-8 flex-1">
          {/* Quote icon */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="mb-4"
          >
            <Quote className="w-8 h-8 text-gold-500 opacity-50" />
          </motion.div>

          {/* Testimonial text */}
          <blockquote className="text-charcoal-700 text-base md:text-lg leading-relaxed mb-6">
            {shouldTruncate ? truncatedQuote : testimonial.quote}
            {testimonial.quote.length > 200 && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-gold-600 hover:text-gold-700 text-sm font-medium ml-2 inline-block"
              >
                {isExpanded ? "Show less" : "Read more"}
              </button>
            )}
          </blockquote>
        </div>

        {/* Author info */}
        <div className="p-6 md:p-8 pt-0">
          <div className="flex items-center justify-between pt-4 border-t border-charcoal-100">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center text-white font-bold text-lg shadow-md">
                  {testimonial.author.charAt(0)}
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
              </div>
              <div>
                <p className="text-charcoal-900 font-semibold text-sm">
                  {testimonial.author}
                </p>
                <div className="flex items-center gap-2 mt-0.5">
                  <Building2 className="w-3 h-3 text-gold-500" />
                  <span className="text-charcoal-500 text-xs font-medium">
                    {testimonial.sector}
                  </span>
                </div>
              </div>
            </div>

            {/* Message icon */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: 10 }}
              className="w-8 h-8 rounded-full bg-gold-100 flex items-center justify-center group-hover:bg-gold-500 transition-colors duration-300 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-gold-600 group-hover:text-white transition-colors duration-300" />
            </motion.div>
          </div>
        </div>

        {/* Bottom decorative element */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
      </div>
    </motion.div>
  );
}