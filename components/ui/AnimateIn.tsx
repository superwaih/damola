"use client";

import { motion, useInView } from "framer-motion";
import type { UseInViewOptions } from "framer-motion";
import { useRef } from "react";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;
type MarginType = UseInViewOptions["margin"];

interface AnimateInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  margin?: MarginType;
  from?: "bottom" | "left" | "none";
}

export function AnimateIn({
  children,
  className,
  delay = 0,
  margin = "-60px" as MarginType,
  from = "bottom",
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin });

  const initial =
    from === "bottom"
      ? { opacity: 0, y: 24 }
      : from === "left"
      ? { opacity: 0, x: -24 }
      : { opacity: 0 };

  const animate = inView ? { opacity: 1, y: 0, x: 0 } : initial;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={animate}
      transition={{ duration: 0.6, delay, ease: EASE_OUT }}
      style={{ willChange: "opacity, transform" }}
    >
      {children}
    </motion.div>
  );
}

/* Stagger wrapper */
interface StaggerProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  margin?: MarginType;
}

export function Stagger({
  children,
  className,
  stagger = 0.07,
  delay = 0,
  margin = "-60px" as MarginType,
}: StaggerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/* Child of <Stagger> */
export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.55, ease: EASE_OUT },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
