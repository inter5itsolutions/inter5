"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, Variants, PanInfo } from "framer-motion";
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
  Play,
  Sparkles
} from "lucide-react";

type Testimonial = {
  quote: string;
  author: string;
  sector: string;
  role?: string;
  company?: string;
};


const cardVariants: Variants = {
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

const starVariants = {
  hidden: { scale: 0 },
  visible: (i: number) => ({
    scale: 1,
    transition: { delay: i * 0.05, type: "spring", stiffness: 200 },
  }),
};

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(2);
  const [dragStartX, setDragStartX] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

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

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  // Handle drag/swipe gestures
  const handleDragStart = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    setDragStartX(info.point.x);
  };

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const dragDistance = info.point.x - dragStartX;
    const threshold = 50; // Minimum drag distance to trigger slide change
    
    if (Math.abs(dragDistance) > threshold) {
      if (dragDistance > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }
  };

  // Auto-play functionality
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isAutoPlaying && !isHovered && totalSlides > 1) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, isHovered, currentIndex, totalSlides]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
      className="section-pad relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-teal-blue/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20" />
        
        {/* Quote marks background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5">
          <Quote className="w-48 h-48 text-orange" />
        </div>
      </div>

      <div className="container-wide relative z-10">
        <AnimatedSection className="mb-12 text-center">
          <SectionHeader
            label="Client Feedback"
            title="What our clients say."
            highlight="clients say"
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
          {totalSlides > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-20 bg-white shadow-lg rounded-full p-2 hover:bg-orange hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Previous testimonials"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-20 bg-white shadow-lg rounded-full p-2 hover:bg-orange hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Next testimonials"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Carousel Content with Smooth Scroll */}
          <div 
            ref={carouselRef}
            className="overflow-hidden px-2 cursor-grab active:cursor-grabbing"
          >
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ 
                duration: 0.5, 
                ease: [0.25, 0.1, 0.25, 1], // Custom easing for smoother feel
                type: "tween"
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.1}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
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
          </div>

          {/* Auto-play Control */}
          {totalSlides > 1 && (
            <button
              onClick={toggleAutoPlay}
              className="absolute -bottom-12 right-0 bg-white shadow-md rounded-full p-2 hover:bg-orange hover:text-white transition-all duration-300"
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
                    ? "w-8 h-2 bg-orange rounded-full"
                    : "w-2 h-2 bg-gray-300 rounded-full hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </motion.section>
  );
}

// Testimonial Card Component with staggered entrance
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
      whileHover="hover"
      custom={index}
      className="group h-full"
      transition={{ delay: index * 0.1 }}
    >
      <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full flex flex-col border border-dark-blue/20">
        
        {/* Gradient border top with brand colors */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange via-teal-blue to-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
        
        {/* Star rating with brand color */}
        <div className="absolute top-4 right-4 flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={starVariants}
              initial="hidden"
              animate="visible"
            >
              <Star className="w-3 h-3 fill-brand-orange text-brand-orange" />
            </motion.div>
          ))}
        </div>

        <div className="p-6 md:p-8 flex-1">
          {/* Quote icon with brand color */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
            className="mb-4"
          >
            <Quote className="w-8 h-8 text-orange/40" />
          </motion.div>

          {/* Testimonial text with better readability */}
          <blockquote className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 font-medium">
            {shouldTruncate ? truncatedQuote : testimonial.quote}
            {testimonial.quote.length > 200 && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-orange hover:text-orange/80 text-sm font-semibold ml-2 inline-block transition-colors"
              >
                {isExpanded ? "Show less" : "Read more"}
              </button>
            )}
          </blockquote>
        </div>

        {/* Author info with improved design */}
        <div className="p-6 md:p-8 pt-0">
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex items-center gap-3">
              {/* Avatar with brand colors */}
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-brand-orange flex items-center justify-center text-white font-bold text-lg shadow-md">
                  {testimonial.author.charAt(0)}
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-sm" />
              </div>
              
              <div>
                <p className="text-dark-blue font-bold text-sm">
                  {testimonial.author}
                </p>
                <div className="flex items-center gap-1 mt-0.5">
                  <Building2 className="w-3 h-3 text-orange" />
                  <span className="text-gray-500 text-xs font-medium">
                    {testimonial.sector}
                  </span>
                </div>
              </div>
            </div>

            {/* Message icon with brand colors */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: 10 }}
              className="w-8 h-8 rounded-full bg-orange/10 flex items-center justify-center group-hover:bg-orange transition-colors duration-300 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-brand-orange group-hover:text-dark-blue transition-colors duration-300" />
            </motion.div>
          </div>
        </div>

        {/* Bottom decorative element */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-orange/20 to-transparent" />
      </div>
    </motion.div>
  );
}