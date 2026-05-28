"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AnimateIn, Stagger, StaggerItem } from "@/components/ui/AnimateIn";
import { PortraitPlaceholder, WebsiteThumbnail } from "@/components/ui/Mockups";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

const stats = [
  { value: "3+", label: "Clients" },
  { value: "8+", label: "Projects Completed" },
  { value: "3+", label: "Years Experience" },
];

const workExperience = [
  { company: "Teachify, Lagos, Nigeria", role: "Product Designer", period: "2023 – 2026" },
  { company: "Fiverr, Cambridge, UK", role: "Product Designer", period: "2021 – 2022" },
  { company: "Bridgegate Creative Hub, Lagos, Nigeria", role: "Product Designer", period: "2021 – 2023" },
];

const portfolioPieces = [
  {
    title: "Bridgegate Creative Hub",
    date: "August 2024",
    description:
      "A bold functional website for Bridgegate Creative Hub—an initiative empowering African creatives and entrepreneurs. The design showcases collaboration, innovation, and community impact.",
    link: "#",
    accent: "teal" as const,
  },
  {
    title: "Realtyrendered Website",
    date: "June 2025",
    description:
      "A sleek and professional website for a property rendering and sustainable solutions company — designed to showcase visual property and brand trustworthiness.",
    link: "#",
    accent: "indigo" as const,
  },
];

/* Animated counter for the stat numbers */
function StatNumber({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.span
      ref={ref}
      className="text-white font-bold text-2xl"
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
      transition={{ duration: 0.5, ease: EASE_OUT }}
    >
      {value}
    </motion.span>
  );
}

export default function About() {
  return (
    <section id="about" className="bg-[#000000] py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">

        {/* Top block */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start mb-20">

          {/* Photo placeholder */}
          <AnimateIn from="bottom" delay={0.05}>
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden">
              <PortraitPlaceholder />
            </div>
          </AnimateIn>

          {/* Text */}
          <AnimateIn from="bottom" delay={0.15}>
            <div className="flex flex-col gap-6">
              <span className="text-gray-500 text-xs tracking-[0.25em] uppercase">About Me</span>

              <h2 className="text-white font-bold text-2xl md:text-3xl leading-snug uppercase">
                More than just visuals,{" "}
                <span className="text-[#C6C6C6]">I design with structure, clarity and purpose</span>
              </h2>

              <p className="text-[#C6C6C6] text-sm leading-relaxed">
                I&apos;m a Product Designer focused on creating intuitive digital
                experiences across web and mobile platforms. My work revolves around
                simplifying complex information, clarity, and designing interfaces
                that serve both users and business goals.
              </p>

              {/* Stats — staggered in */}
              <Stagger
                className="grid grid-cols-3 gap-4 py-6 border-t border-b border-white/10"
                stagger={0.1}
                delay={0.1}
              >
                {stats.map(({ value, label }) => (
                  <StaggerItem key={label}>
                    <div className="flex flex-col gap-1">
                      <StatNumber value={value} />
                      <span className="text-gray-500 text-xs leading-snug">{label}</span>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>

              {/* Work experience */}
              <div>
                <p className="text-[#C6C6C6] text-xs tracking-[0.2em] uppercase mb-4">
                  Work Experience
                </p>
                <Stagger className="flex flex-col divide-y divide-white/5" stagger={0.08}>
                  {workExperience.map(({ company, role, period }) => (
                    <StaggerItem key={company}>
                      <div className="flex items-center justify-between py-3">
                        <span className="text-gray-300 text-sm">{company}</span>
                        <div className="flex flex-col items-end gap-0.5">
                          <span className="text-gray-500 text-xs">{role}</span>
                          <span className="text-gray-600 text-xs">{period}</span>
                        </div>
                      </div>
                    </StaggerItem>
                  ))}
                </Stagger>
              </div>
            </div>
          </AnimateIn>
        </div>

        {/* Portfolio pieces */}
        <Stagger className="flex flex-col gap-5" stagger={0.12}>
          {portfolioPieces.map(({ title, date, description, link, accent }) => (
            <StaggerItem key={title}>
              {/* card-hover lifts on pointer devices */}
              <div className="card-hover bg-[#1a1a1a] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-12 items-start">
                <div className="w-full md:w-48 h-32 md:h-28 rounded-xl overflow-hidden flex-shrink-0">
                  <WebsiteThumbnail accent={accent} />
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <h4 className="text-white font-semibold text-base">{title}</h4>
                    <span className="text-gray-600 text-xs whitespace-nowrap">{date}</span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
                  <a href={link} className="inline-flex items-center gap-1.5 text-white text-xs tracking-[0.1em] mt-1 hover:text-gray-300 transition-colors">
                    View ↗
                  </a>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

      </div>
    </section>
  );
}
