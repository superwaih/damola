"use client";

import { motion } from "framer-motion";
import { AnimateIn, Stagger, StaggerItem } from "@/components/ui/AnimateIn";
import { MobileDesignThumb, WebDesignThumb, ProductDesignThumb } from "@/components/ui/Mockups";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

const services = [
  { label: "MOBILE APP DESIGN", thumb: <MobileDesignThumb /> },
  { label: "WEBSITE DESIGN", thumb: <WebDesignThumb /> },
  { label: "PRODUCT DESIGN", thumb: <ProductDesignThumb /> },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#000000] py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">

        <AnimateIn>
          <div className="flex items-end justify-between mb-10">
            <h2 className="text-white font-bold text-2xl md:text-3xl uppercase tracking-tight">
              Product Design
            </h2>
            <a
              href="#contact"
              className="btn hidden md:inline-flex items-center gap-2 text-white text-xs tracking-[0.15em] border border-white/30 px-5 py-2.5 rounded-full hover:bg-white hover:text-black transition-all duration-200"
            >
              START A PROJECT →
            </a>
          </div>
        </AnimateIn>

        <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-4" stagger={0.1} delay={0.05}>
          {services.map(({ label, thumb }) => (
            <StaggerItem key={label}>
              <div className="card-hover bg-[#1a1a1a] rounded-2xl overflow-hidden cursor-pointer">
                {/* Thumbnail with zoom on card hover */}
                <div className="overflow-hidden">
                  <motion.div
                    className="w-full h-52"
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.45, ease: EASE_OUT }}
                  >
                    {thumb}
                  </motion.div>
                </div>
                <div className="p-5">
                  <span className="text-gray-300 text-xs tracking-[0.15em] uppercase">
                    {label}
                  </span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Mobile CTA */}
        <AnimateIn className="mt-8 flex justify-center md:hidden">
          <a
            href="#contact"
            className="btn inline-flex items-center gap-2 text-white text-xs tracking-[0.15em] border border-white/30 px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-200"
          >
            START A PROJECT →
          </a>
        </AnimateIn>

      </div>
    </section>
  );
}
