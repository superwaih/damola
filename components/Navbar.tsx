"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

const navLinks = [
  { label: "PROJECTS", href: "/#projects" },
  { label: "ABOUT", href: "/#about" },
  { label: "SERVICES", href: "/#services" },
  { label: "TESTIMONIALS", href: "/#testimonials" },
  { label: "CONTACT", href: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Slide down on mount */}
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: EASE_OUT }}
        className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between rounded-[32px] border border-[#1A161699] bg-[#000000] px-6 py-5 md:rounded-none md:border-0 md:px-12"
      >
        <Link href="/" className="text-white font-bold text-base tracking-[0.2em]">
          DAMOLA
        </Link>

        {/* Desktop links — stagger on mount */}
        <motion.div
          className="hidden md:flex items-center gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.06, delayChildren: 0.2 } },
          }}
        >
          {navLinks.map(({ label, href }) => (
            <motion.a
              key={label}
              href={href}
              className="nav-link text-[#C6C6C6] text-[11px] tracking-[0.15em] hover:text-white transition-colors duration-200"
              variants={{
                hidden: { opacity: 0, y: -8 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE_OUT } },
              }}
            >
              {label}
            </motion.a>
          ))}
        </motion.div>

        <motion.a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open resume PDF in a new tab"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="btn hidden md:inline-block text-white border border-white/50 px-5 py-2 text-[11px] tracking-[0.15em] rounded-full hover:bg-white hover:text-black transition-colors duration-200"
        >
         RESUME
        </motion.a>

        {/* Hamburger */}
        <button
          className="md:hidden text-white flex flex-col gap-[5px] p-1"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <span className="block w-5 h-[1.5px] bg-white" />
          <span className="block w-5 h-[1.5px] bg-white" />
          <span className="block w-5 h-[1.5px] bg-white" />
        </button>
      </motion.nav>

      {/* Mobile overlay — AnimatePresence for clean enter/exit */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-0 z-50 bg-[#2d2d2d] flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-5">
              <Link href="/" className="text-white font-bold text-base tracking-[0.2em]">
                DAMOLA
              </Link>
              <motion.button
                whileTap={{ scale: 0.9 }}
                className="text-white text-2xl leading-none"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                ✕
              </motion.button>
            </div>

            {/* Staggered links */}
            <motion.div
              className="flex-1 flex flex-col items-center justify-center gap-8"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
              }}
            >
              {navLinks.map(({ label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  className="text-white text-sm tracking-[0.2em] hover:text-gray-300 transition-colors"
                  onClick={() => setOpen(false)}
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE_OUT } },
                  }}
                >
                  {label}
                </motion.a>
              ))}
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open resume PDF in a new tab"
                onClick={() => setOpen(false)}
                className="btn mt-2 text-white border border-white px-10 py-3 text-sm tracking-[0.15em] rounded-full hover:bg-white hover:text-black transition-colors"
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE_OUT } },
                }}
              >
                RESUME
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
