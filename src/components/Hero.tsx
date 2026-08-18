import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { EASE } from "@/lib/motion";

const lines = [
  [{ t: "WE BUILD" }],
  [{ t: "DIGITAL EXPERIENCES" }],
  [{ t: "THAT " }, { t: "MOVE", accent: true }, { t: " BUSINESS." }],
];

export function Hero() {
  const reduced = useReducedMotion();
  const base = reduced ? 0 : 1.15;

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-16 sm:pt-40 lg:pt-48 lg:pb-24">
      {/* Technical background: grid, glow, motion lines */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="grid-lines absolute inset-0 opacity-60" />
        <div className="green-glow absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 opacity-70" />
        <div className="absolute inset-x-0 bottom-24 space-y-6">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="h-px w-full origin-left bg-gradient-to-r from-transparent via-primary/40 to-transparent"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 1.1, ease: EASE, delay: base + 0.5 + i * 0.12 }}
            />
          ))}
        </div>
      </div>

      <div className="container-x">
        <motion.p
          className="eyebrow flex flex-wrap items-center gap-x-3 gap-y-1"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: base }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
          Digital Products • Web • Design • Technology
        </motion.p>

        <h1 className="mt-7 font-display text-[2.6rem] leading-[0.94] font-bold tracking-[-0.04em] sm:text-6xl lg:text-[6.5rem]">
          {lines.map((line, i) => (
            <span key={i} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.85, ease: EASE, delay: base + 0.12 + i * 0.11 }}
              >
                {line.map((part, j) =>
                  part.accent ? (
                    <motion.span
                      key={j}
                      className="text-primary"
                      initial={{ opacity: 0.35 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.8, ease: EASE, delay: base + 0.7 }}
                    >
                      {part.t}
                    </motion.span>
                  ) : (
                    <span key={j}>{part.t}</span>
                  ),
                )}
              </motion.span>
            </span>
          ))}
        </h1>

        <div className="mt-10 flex flex-col gap-8 border-t border-border pt-8 lg:flex-row lg:items-end lg:justify-between">
          <motion.p
            className="max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: base + 0.45 }}
          >
            High-performance websites, web applications and digital experiences engineered to
            make your brand move faster.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: base + 0.6 }}
          >
            <a
              href="#contact"
              className="group relative inline-flex min-h-12 items-center gap-3 overflow-hidden rounded-sm bg-primary px-6 font-display text-[0.7rem] font-bold tracking-[0.18em] text-primary-foreground uppercase"
            >
              <span className="relative">Start a Project</span>
              <ArrowRight
                className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
            <a
              href="#work"
              className="group relative inline-flex min-h-12 items-center gap-3 overflow-hidden rounded-sm border border-border-strong px-6 font-display text-[0.7rem] font-bold tracking-[0.18em] uppercase"
            >
              <span className="absolute inset-0 -translate-x-full bg-foreground/5 transition-transform duration-400 ease-[var(--ease-out-premium)] group-hover:translate-x-0" />
              <span className="relative">View Our Work</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
