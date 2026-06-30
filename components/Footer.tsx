"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Stagger, StaggerItem } from "@/components/ui/AnimateIn";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

const socials = ["TWITTER", "LINKEDIN", "INSTAGRAM"];

export default function Footer() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const inView = useInView(headingRef, { once: true, margin: "-80px" });

  return (
    <footer id="contact" className="bg-[#000000] border-t border-white/5 px-6 pt-16 pb-8 md:px-8 md:pb-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">

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
          href="mailto:eyinlablessing1@gmail.com"
          className="text-white text-sm tracking-widest hover:text-white transition-colors duration-200"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: EASE_OUT }}
        >
          eyinlablessing1@gmail.com
        </motion.a>

      </div>

      <div className="mx-auto mt-16 flex max-w-[1376px] flex-col gap-8 sm:flex-row sm:items-end sm:justify-between md:mt-20">
        <motion.p
          className="text-[10px] uppercase leading-relaxed tracking-[0.15em] text-[#555555]"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.45, ease: EASE_OUT }}
        >
          © {new Date().getFullYear()} Damola Eyiins. All rights reserved.
        </motion.p>

        {/* Social links — stagger */}
        <Stagger
          className="flex flex-wrap items-center gap-x-10 gap-y-4"
          stagger={0.07}
          delay={0.35}
        >
          {socials.map((social) => (
            <StaggerItem key={social}>
              <a
                href="#"
                className="inline-block border-b border-[#3a3a3a] pb-1 text-[10px] tracking-[0.15em] text-[#555555] transition-[color,border-color,transform] duration-200 ease-[var(--ease-out)] hover:border-white hover:text-white focus-visible:border-white focus-visible:text-white focus-visible:outline-none active:scale-[0.97]"
              >
                {social}
              </a>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </footer>
  );
}
