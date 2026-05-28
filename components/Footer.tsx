"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Stagger, StaggerItem } from "@/components/ui/AnimateIn";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

const socials = ["TWITTER", "LINKEDIN", "BEHANCE", "DRIBBBLE"];

export default function Footer() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const inView = useInView(headingRef, { once: true, margin: "-80px" });

  return (
    <footer id="contact" className="bg-[#000000] pt-16 pb-10 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-6">

        {/* "LET'S BUILD." — clip-path reveal from bottom */}
        <motion.h2
          ref={headingRef}
          className="text-white font-black text-5xl md:text-7xl lg:text-8xl tracking-tighter uppercase leading-none"
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
          transition={{ duration: 0.7, ease: EASE_OUT }}
        >
          LET&apos;S BUILD.
        </motion.h2>

        <motion.a
          href="mailto:oyelolasanya@gmail.com"
          className="text-[#C6C6C6] text-sm tracking-widest hover:text-white transition-colors duration-200"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: EASE_OUT }}
        >
          oyelolasanya@gmail.com
        </motion.a>

        {/* Social links — stagger */}
        <Stagger className="flex items-center gap-6 mt-4" stagger={0.07} delay={0.35}>
          {socials.map((s) => (
            <StaggerItem key={s}>
              <a
                href="#"
                className="nav-link text-gray-600 text-xs tracking-[0.15em] hover:text-white transition-colors duration-200"
              >
                {s}
              </a>
            </StaggerItem>
          ))}
        </Stagger>

        <motion.p
          className="text-gray-700 text-xs mt-4"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.6, ease: EASE_OUT }}
        >
          © {new Date().getFullYear()} Damola Eyiins. All rights reserved.
        </motion.p>

      </div>
    </footer>
  );
}
