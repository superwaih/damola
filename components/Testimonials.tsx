"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AnimateIn } from "@/components/ui/AnimateIn";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

const testimonials = [
  {
    quote:
      "Damola has a strong ability to bring structure to complex ideas. While working together, I saw how intentional he is with his design decisions not just focusing on visuals, but on how users actually interact with products.",
    name: "Adedayo Babalola",
    role: "Product Designer",
  },
  {
    quote:
      "He brings a rare balance of creativity and product thinking. Every screen has clear purpose, and his process always connects user behavior to measurable business outcomes.",
    name: "Kemi Akinwale",
    role: "Design Lead",
  },
  {
    quote:
      "Damola is excellent at simplifying complex flows. He helps teams move faster because his decisions are grounded in research, clarity, and practical execution.",
    name: "Joshua Adeoye",
    role: "Product Manager",
  },
  {
    quote:
      "Working with Damola made our product feel more coherent end-to-end. He improved usability, visual consistency, and the confidence of our implementation team.",
    name: "Mary Oloruntoba",
    role: "Founder",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const previous = () => {
    setIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setIndex((current) => (current + 1) % testimonials.length);
  };

  const currentItem = testimonials[index];

  return (
    <section id="testimonials" className="bg-[#030303] py-24 md:py-28 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <AnimateIn from="none">
          <div className="flex flex-col items-center text-center">
            <p className="text-[#7B7B7B] text-sm tracking-[0.35em] uppercase">What They Say</p>

            <div className="mt-10 min-h-[220px] md:min-h-[290px] max-w-5xl flex items-center">
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={`${currentItem.name}-${index}`}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.42, ease: EASE_OUT }}
                  className="text-[#ECECEC] text-[18px] md:text-[24px] leading-[1.22] tracking-[-0.01em]"
                >
                  {currentItem.quote}
                </motion.blockquote>
              </AnimatePresence>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={`meta-${currentItem.name}-${index}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: EASE_OUT }}
                className="mt-1"
              >
                <p className="text-white font-semibold text-sm tracking-[0.06em] uppercase">
                  {currentItem.name}
                </p>
                <p className="mt-2 text-[#C6C6C6] text-xs  tracking-[0.2em] uppercase">
                  {currentItem.role}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="mt-10 flex items-center gap-4">
              <button
                type="button"
                onClick={previous}
                aria-label="Previous testimonial"
                className="btn w-14 h-14 rounded-2xl border border-white/20 text-white grid place-items-center hover:border-white/50 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                type="button"
                onClick={next}
                aria-label="Next testimonial"
                className="btn w-14 h-14 rounded-2xl border border-white/20 text-white grid place-items-center hover:border-white/50 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m9 5 7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
