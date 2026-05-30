"use client";

import { motion } from "framer-motion";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { ProductDesignThumb, UvivioMobileMockup } from "@/components/ui/Mockups";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

const sideServices = [
  { label: "MOBILE APP DESIGN", kind: "mobile" as const },
  { label: "WEBSITE DESIGN", kind: "web" as const },
];

function ProductIcon() {
  return (
    <svg className="w-7 h-7 text-white/95" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3.5" y="4.5" width="17" height="15" rx="2.5" />
      <path d="M9 4.5v15M3.5 10h17" />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg className="w-7 h-7 text-white/95" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7.5 3.5 9 7l3.5 1.5L9 10l-1.5 3.5L6 10l-3.5-1.5L6 7l1.5-3.5Z" />
      <path d="m16 6 1 2.3L19.3 9 17 10l-1 2.3-1-2.3L12.7 9 15 8.3 16 6Z" />
      <path d="m14 14 1.4 3.1L18.5 18l-3.1 1.1L14 22l-1.4-2.9L9.5 18l3.1-.9L14 14Z" />
    </svg>
  );
}

function ScreenIcon() {
  return (
    <svg className="w-7 h-7 text-white/95" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3.5" y="5" width="17" height="12.5" rx="1.8" />
    </svg>
  );
}

export default function Services() {
  return (
    <section id="services" className="bg-[#000000] py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <AnimateIn from="none">
          <div className="flex justify-center mb-12">
            <span className="text-[#B2B2B2] text-xs tracking-[0.22em] uppercase border border-white/12 bg-[#0f0f0f] rounded-full px-5 py-2.5">
              Services
            </span>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <AnimateIn className="lg:col-span-6 lg:row-span-2" from="left">
            <article className="card-hover h-full rounded-2xl overflow-hidden bg-[#050505] border border-white/5 flex flex-col">
              <div className="px-8 pt-9 pb-6">
                <ProductIcon />
                <h3 className="mt-7 text-white font-bold text-4xl leading-none uppercase tracking-tight">
                  Product Design
                </h3>
              </div>

              <div className="px-3 pb-3 grid grid-cols-1 sm:grid-cols-2 gap-3 flex-1">
                <div className="rounded-xl overflow-hidden min-h-[260px]">
                  <motion.div
                    className="w-full h-full"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.45, ease: EASE_OUT }}
                  >
                    <ProductDesignThumb />
                  </motion.div>
                </div>
                <div className="rounded-xl overflow-hidden min-h-[260px]">
                  <motion.div
                    className="w-full h-full"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.45, ease: EASE_OUT }}
                  >
                    <UvivioMobileMockup />
                  </motion.div>
                </div>
              </div>

              <p className="px-8 pb-8 text-[#A4A4A4] text-sm leading-relaxed max-w-lg">
                End-to-end design from research to high-fidelity prototyping and design system scaling.
              </p>
            </article>
          </AnimateIn>

          {sideServices.map((service, index) => (
            <AnimateIn key={service.label} className="lg:col-span-3" delay={0.04 * (index + 1)}>
              <article className="card-hover bg-[#050505] border border-white/5 rounded-2xl p-7 min-h-[250px] flex flex-col">
                {service.kind === "mobile" ? <SparkleIcon /> : <ScreenIcon />}
                <div className="flex-1" />
                <h4 className="text-white font-semibold text-base leading-tight uppercase">
                  {service.label}
                </h4>
              </article>
            </AnimateIn>
          ))}

          <AnimateIn className="lg:col-span-6" delay={0.16}>
            <a
              href="#contact"
              className="group block bg-[#E7E7E7] rounded-2xl p-10 md:p-12 min-h-[220px] border border-black/5 transition-colors hover:bg-[#F0F0F0]"
            >
              <div className="h-full flex items-center justify-between gap-8">
                <div>
                  <h3 className="text-black font-black  text-xl leading-none uppercase tracking-tight">
                    Start a Project
                  </h3>
                  <p className="mt-4 text-[#555555] text-sm">
                    Let&apos;s build something enduring.
                  </p>
                </div>
                <motion.svg
                  className="w-14 h-14 text-black flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.7}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  initial={false}
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.22, ease: EASE_OUT }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h15m0 0-5-5m5 5-5 5" />
                </motion.svg>
              </div>
            </a>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
