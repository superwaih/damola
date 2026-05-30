"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Roboto } from "next/font/google";
import { AnimateIn, Stagger, StaggerItem } from "@/components/ui/AnimateIn";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

const liveProjects = [
  {
    number: "01",
    title: "Bridgegate Creative Hub",
    date: "March 2024",
    description:
      "A bold and functional website for Bridgegate Creative Hub. An initiative empowering African creatives and entrepreneurs. The design reflects collaboration, innovation, and community impact.",
    image: "/images/live-1.png",
    href: "#",
  },
  {
    number: "02",
    title: "Royalwunderkid Website",
    date: "June 2025",
    description:
      "A visionary platform driving innovation and sustainable solutions across Education, Agriculture, and Energy. I designed a clean, responsive website to showcase their mission, programs, and youth-focused initiatives.",
    image: "/images/live-2.png",
    href: "#",
  },
];

export default function Mission() {
  return (
    <section id="mission" className={`${roboto.className} bg-[#000000] py-24 px-6 md:px-12`}>
      <div className="max-w-7xl mx-auto">
        <AnimateIn from="none">
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2.5 text-[#BFBFBF] text-sm tracking-[0.2em] uppercase border border-white/15 bg-[#0E0E0E] rounded-full px-5 py-2.5">
              <span className="w-2 h-2 rounded-full bg-[#22C55E]" />
              Live
            </span>
          </div>
        </AnimateIn>

        <Stagger className="mt-14 flex flex-col gap-16 md:gap-20" stagger={0.12}>
          {liveProjects.map((project) => (
            <StaggerItem key={project.number}>
              <article className="grid grid-cols-1 lg:grid-cols-[4rem_1fr_360px] xl:grid-cols-[5rem_1fr_420px] gap-6 lg:gap-10 items-start">
                <div className="w-10 h-10 rounded-full border border-white/15 bg-[#101015] text-[#A7A7A7] text-sm flex items-center justify-center">
                  {project.number}
                </div>

                <div>
                  <div className="flex items-start justify-between gap-5 flex-wrap">
                    <h3 className="text-white font-semibold text-base leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-[#C7C7C7] text-base leading-tight">
                      {project.date}
                    </p>
                  </div>

                  <p className="mt-6 text-[#B8B8C7] text-lg  leading-relaxed max-w-4xl">
                    {project.description}
                  </p>

                  <div className="mt-7 pt-5 border-t border-dashed  border-white/25 flex justify-end">
                    <a
                      href={project.href}
                      className="group inline-flex items-center gap-3 text-[#B8B8C7] text-base font-semibold hover:text-white transition-colors"
                    >
                      Visit site
                      <span className="w-8 h-8 rounded-full bg-[#B8B8C7] border border-white/45 text-black flex items-center justify-center">
                        <motion.svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={1.8}
                          viewBox="0 0 24 24"
                          initial={false}
                          whileHover={{ x: 2, y: -2 }}
                          transition={{ duration: 0.2, ease: EASE_OUT }}
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M7 17 17 7m0 0H9m8 0v8" />
                        </motion.svg>
                      </span>
                    </a>
                  </div>
                </div>

                <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/5 bg-[#0C0C0C]">
                  <motion.div
                    className="w-full h-full"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.45, ease: EASE_OUT }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </motion.div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
