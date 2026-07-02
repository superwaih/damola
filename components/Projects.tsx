"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { WebDashboardMockup, PopwupMobileMockup, UvivioMobileMockup } from "@/components/ui/Mockups";
import Image from "next/image";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

const projects = [
  {
    tags: ["UX/UI", "PRODUCT DESIGN", "WEB APP"],
    title: "UVIVIO V2 (WEB APP): AI-POWERED LEARNING PLATFORM",
    description:
      "Designing an adaptive dashboard for a remote learning product that offers personalized layouts and real-time inspired interfaces.",
    mockup: <WebDashboardMockup />,
    image: "/images/project-1.png",
    size: "normal",
    href: "/projects/uvivio",
  },
  {
    tags: ["UX/UI", "PRODUCT DESIGN"],
    title: "POPWUP: CREATE SPONTANEOUS EVENTS AND FLEXIBLE SPACE HOSTING",
    description:
      "Designing an intuitive interface for a space booking platform that facilitates last-minute digital and physical experience hosting.",
    mockup: <PopwupMobileMockup />,
    size: "normal",
    image: "/images/project-2.png",

    href: "/projects/powpup",
  },
  {
    tags: ["UX/UI", "MOBILE APP", "PRODUCT DESIGN"],
    title: "UVIVIO (MOBILE APP): AI POWERED LEARNING PLATFORM",
    description:
      "Designing a platform designed to make remote learning accessible and sustainable for millions of students across Africa.",
    mockup: <UvivioMobileMockup />,
    size: "wide",
    image: "/images/project-3.png",

    href: "/projects/uvivio-mobile",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-[#000000] py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-5" >
          {projects.map((project) => (
            <div
              key={project.title}
              className={`${project.size === "wide" ? "md:col-span-2" : ""}`}
            >
              {/* card-hover applies CSS lift on pointer devices */}
              <div className="card-hover bg-black  overflow-hidden h-full">
                {/* Thumbnail with subtle zoom on hover */}
                <div
                  className={`relative w-full ${project.size === "wide" ? "h-75 md:h-155" : "h-52 md:h-155"} overflow-hidden`}
                >
                  {project.image ?
                <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                />  

                :
<motion.div
                    className="w-full h-full"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.5, ease: EASE_OUT }}
                  >
                    {project.mockup}
                  </motion.div>
                }
                  
                </div>

                {/* Content */}
                <div className="py-3 md:py-3">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-gray-500 text-[10px] tracking-[0.15em] uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-white font-semibold text-base md:text-lg leading-snug mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-lg">
                    {project.description}
                  </p>

                  <Link
                    href={project.href}
                    className="group inline-flex items-center gap-2 text-white text-xs tracking-[0.15em] border-b border-white/30 pb-px hover:border-white transition-colors duration-200"
                  >
                    READ CASE STUDY
                    <motion.svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      initial={false}
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2, ease: EASE_OUT }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </motion.svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
