import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { EASE, viewportOnce } from "@/lib/motion";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "li" | "span" | "p";
};

/** Standard scroll reveal: opacity 0→1, y 30→0, premium ease-out. */
export function Reveal({ children, className, delay = 0, y = 30, as = "div" }: Props) {
  const Comp = motion[as];
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.7, ease: EASE, delay }}
    >
      {children}
    </Comp>
  );
}
