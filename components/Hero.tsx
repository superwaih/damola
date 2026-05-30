"use client";

import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";
import { PortraitPlaceholder } from "@/components/ui/Mockups";
import Image from "next/image";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

/* Stagger helper for the text column */
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE_OUT } },
};

const image = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.3, ease: EASE_OUT } },
};

export default function Hero() {
  const controls = useAnimationControls();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <section className="min-h-screen  flex items-center pt-20 pb-16 px-6 md:px-12">
      <div className="w-full max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-8 items-center">

        {/* Text side — staggered entry */}
        <motion.div
          className="flex flex-col gap-6 order-2 md:order-1"
          initial="hidden"
          animate={controls}
          variants={container}
        >
          <motion.span
            variants={item}
            className="text-[#C6C6C6] w-fit rounded-4xl p-2 border-[#1A161699] border text-xs tracking-[0.25em] uppercase"
          >
            Product Designer 
          </motion.span>

          <motion.h1
            variants={item}
            className="text-white font-bold text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] uppercase tracking-tight"
          >
            Clarity in{" "}
            <span className="text-[#404040] ">Design.</span>
            <br />
            Precision in{" "}
            <span className="text-[#404040] ">Experience.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-[#C6C6C6] text-sm md:text-base leading-relaxed max-w-md"
          >
            My name is Blessing Damola Eyiins, I&apos;m a Product Designer
            focused on crafting intuitive web and mobile experiences that
            balance usability, clarity and business impact.
          </motion.p>

          <motion.div variants={item} className="flex items-center gap-4 mt-2">
            <a
              href="#projects"
              className="btn bg-white text-black text-xs tracking-[0.15em] px-6 py-3  font-bold hover:bg-gray-200 transition-colors"
            >
             CASE STUDIES
            </a>
            <a
              href="#contact"
              className="btn text-white font-bold border border-white/40 text-xs tracking-[0.15em] px-6 py-3  hover:border-white transition-colors"
            >
              CONTACT ME
            </a>
          </motion.div>
        </motion.div>

        {/* Image side — scale + fade in slightly later */}
        <motion.div
          className="order-1 md:order-2 flex justify-center md:justify-end"
          initial="hidden"
          animate={controls}
          variants={image}
        >
          <div className="relative w-72 h-104 md:w-full md:h-147.75 rounded-2xl overflow-hidden">
            {/* <PortraitPlaceholder /> */}
            <Image
            src="/images/blessing.png"
            alt="Blessing Damola Eyiins"
           fill
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
