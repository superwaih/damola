"use client";

import Image from "next/image";
import { AnimateIn, Stagger, StaggerItem } from "@/components/ui/AnimateIn";

const expertise = [
  "PRODUCT DESIGN",
  "UI/UX",
  "SAAS",
  "DESIGN SYSTEMS",
  "MOBILE APP",
  "INTERACTION DESIGN",
  "PROTOTYPING",
];

const stats = [
  { value: "3+", label: "YEARS EXP" },
  { value: "8+", label: "PROJECTS" },
  { value: "3+", label: "INDUSTRIES" },
];

const workExperience = [
  {
    company: "Techsity. Lagos, Nigeria",
    role: "Product designer",
    period: "2025 - 2026",
  },
  {
    company: "PowpUp. Cambridge, UK",
    role: "Product designer",
    period: "2024 - 2025",
  },
  {
    company: "Bridgegate Creative Hub. Lagos, Nigeria",
    role: "Product designer",
    period: "2023 - 2024",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-[#000000] py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.25fr] gap-8 lg:gap-12 items-start">
          <AnimateIn>
            <div className="relative w-full aspect-square overflow-hidden ">
              <Image
                src="/images/blessing-2.png"
                alt="Blessing Damola Eyiins"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
          </AnimateIn>

          <AnimateIn delay={0.08}>
            <div className="flex flex-col">
              <p className="text-[#C6C6C6] text-xs tracking-[0.28em] uppercase">
                The Person
              </p>

              <h2 className="mt-8 text-white font-bold text-lg md:text-[32px] leading-[1.15] uppercase tracking-tight max-w-4xl">
                More than just visuals, I design with structure, clarity and purpose
              </h2>

              <p className="mt-8 text-[#C6C6C6] text-base md:text-lg leading-relaxed max-w-4xl">
                I&apos;m a Product Designer focused on creating intuitive digital experiences across web and mobile platforms. My work revolves around simplifying complex systems, structuring information clearly, and designing interfaces that are easy to use and scalable.
              </p>

              <div className="mt-10 border-t border-white/12 pt-6">
                <Stagger className="flex flex-wrap gap-3" stagger={0.06}>
                  {expertise.map((item) => (
                    <StaggerItem key={item}>
                      <span className="inline-flex items-center border border-white/25 px-4 py-2 text-white text-[10px] font-semibold tracking-[0.12em] uppercase">
                        {item}
                      </span>
                    </StaggerItem>
                  ))}
                </Stagger>
              </div>

              <Stagger className="mt-10 grid grid-cols-3 gap-8 max-w-md" stagger={0.08}>
                {stats.map(({ value, label }) => (
                  <StaggerItem key={label}>
                    <div className="flex flex-col">
                      <span className="text-white font-bold text-base md:text-lg leading-none">{value}</span>
                      <span className="mt-2 text-[#C6C6C6] text-xs font-semibold tracking-[0.09em] uppercase">
                        {label}
                      </span>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </AnimateIn>
        </div>

        <AnimateIn delay={0.12} className="mt-14 bg-[#070707] rounded-4xl p-6 md:p-8 border border-white/5">
          <h3 className="text-white font-semibold text-lg md:text-2xl leading-none tracking-tight">
            Work Experience
          </h3>

          <Stagger className="mt-7 space-y-4" stagger={0.08}>
            {workExperience.map(({ company, role, period }) => (
              <StaggerItem key={company}>
                <div className="bg-[#020202] rounded-xl px-3 md:px-4 py-7 grid grid-cols-1 md:grid-cols-[1.4fr_0.9fr_auto] gap-4 md:gap-6 items-center">
                  <p className="text-white text-sm md:text-base font-medium  leading-snug">
                    {company}
                  </p>
                  <p className="text-white text-sm  md:text-base  leading-snug md:text-center">
                    {role}
                  </p>
                  <p className="text-[#B8B8C7] text-sm md:text-base  leading-snug md:justify-self-end">
                    {period}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </AnimateIn>
      </div>
    </section>
  );
}
