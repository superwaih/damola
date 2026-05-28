"use client";

import { AnimateIn } from "@/components/ui/AnimateIn";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#0A0A0A] py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">

        <AnimateIn>
          <span className="text-gray-500 text-xs tracking-[0.25em] uppercase block mb-10">
            Testimonials
          </span>
        </AnimateIn>

        {/* Slight scale-in from 0.97, not 0 — Emil's rule */}
        <AnimateIn delay={0.05}>
          <div className="bg-[#1a1a1a] rounded-2xl p-8 md:p-12 max-w-3xl">
            <svg className="w-8 h-8 text-white/20 mb-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>

            <blockquote className="text-gray-300 text-base md:text-lg leading-relaxed mb-8">
              Damola has a strong ability to bring structure to complex ideas.
              While working together, I saw how intentional he is with his design
              decisions — not just focusing on visuals, but on how users actually
              interact with products.
            </blockquote>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                <span className="text-white text-xs font-semibold">DC</span>
              </div>
              <div>
                <p className="text-white text-sm font-medium">Damola Christiana</p>
                <p className="text-gray-500 text-xs mt-0.5">Senior Product Designer</p>
              </div>
            </div>
          </div>
        </AnimateIn>

      </div>
    </section>
  );
}
