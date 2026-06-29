"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "Cosmoq’s AI Agents have completely transformed our workflow efficiency. What once took hours now takes minutes. Their adaptability and precision make them the most capable AI solution we’ve ever implemented — truly redefining enterprise automation.",
    name: "Daniel Reyes",
    role: "Chief Operations Officer, LuminaTech",
    avatar: "/images/BIY5osAhJGxk35JHUCh9nq0Wro.jpg",
  },
  {
    quote: "With Cosmoq’s AI platform, our enterprise has gained speed, insight, and scalability. The intelligence behind their agents is unmatched — it’s like having an expert team working 24/7 with consistency and accuracy. Cosmoq continues to push the boundaries.",
    name: "Sarah Mitchell",
    role: "VP of Digital Transformation, Nexora",
    avatar: "/images/oUkBi1c8nERocfQrJWNLxZ9Fipw.jpg",
  },
  {
    quote: "Cosmoq is the top-performing AI Agent we’ve seen to date — resolving complex queries faster and more accurately than any human team could. It has not only enhanced our support operations but also improved client satisfaction across the board.",
    name: "Priya Nair",
    role: "Head of Innovation, Altara Global",
    avatar: "/images/d4SpmpLmhUfMZkWsTOukrdAmhg.jpg",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-black/20">
      {/* Glow */}
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-semibold tracking-widest text-indigo-400 uppercase mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Trusted by customers
          </h2>
          <p className="text-sm sm:text-base text-white/60">
            Proven outcomes shared by industry leaders and innovators.
          </p>
        </div>

        {/* Carousel Content */}
        <div className="relative glass-panel p-8 sm:p-12 rounded-3xl overflow-hidden shadow-2xl border border-white/5 flex flex-col justify-between min-h-[340px]">
          <div>
            {/* Stars rating */}
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-indigo-400 text-indigo-400" />
              ))}
            </div>

            {/* Quote text */}
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed font-normal mb-8 transition-all duration-300">
              &ldquo;{testimonials[activeIndex].quote}&rdquo;
            </p>
          </div>

          {/* Profile details */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-white/5">
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10 flex-shrink-0 bg-white/5">
                <Image
                  src={testimonials[activeIndex].avatar}
                  alt={testimonials[activeIndex].name}
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">
                  {testimonials[activeIndex].name}
                </h4>
                <p className="text-xs text-white/50">
                  {testimonials[activeIndex].role}
                </p>
              </div>
            </div>

            {/* Slider controls */}
            <div className="flex gap-3">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center text-white/70 hover:text-white hover:bg-white/5 hover:border-white/15 transition-all"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center text-white/70 hover:text-white hover:bg-white/5 hover:border-white/15 transition-all"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
