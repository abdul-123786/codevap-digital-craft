import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { EASE, viewportOnce } from "@/lib/motion";
import { MagneticButton } from "@/components/MagneticButton";

export function CTA() {
  return (
    <section className="relative overflow-hidden border-t border-border py-28 lg:py-40">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          className="green-glow absolute bottom-[-30%] left-1/2 h-[600px] w-[900px] -translate-x-1/2"
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 0.9, scale: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 1.4, ease: EASE }}
        />
        <div className="grid-lines absolute inset-0 opacity-40" />

        {/* Green motion lines — brand language */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute inset-x-0 bg-gradient-to-r from-transparent via-primary/25 to-transparent"
            style={{ top: `${30 + i * 18}%`, height: 1 }}
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 1.2, ease: EASE, delay: 0.1 + i * 0.15 }}
          />
        ))}
      </div>

      <div className="container-x text-center">
        <Reveal className="eyebrow">BUILD SOMETHING WITH US</Reveal>
        <Reveal delay={0.05} className="mt-6">
          <p className="font-display text-lg font-medium text-muted-foreground sm:text-xl">
            Have an idea, requirement, or business problem?
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mx-auto mt-4 max-w-4xl font-display text-[2.2rem] leading-[0.98] font-bold tracking-[-0.04em] sm:text-5xl lg:text-7xl">
            LET&apos;S BUILD THE RIGHT <span className="text-primary">SOLUTION.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.12} className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <MagneticButton>
            <a
              href="#contact"
              className="group inline-flex min-h-12 items-center gap-3 rounded-sm bg-primary px-7 font-display text-[0.7rem] font-bold tracking-[0.18em] text-primary-foreground uppercase"
            >
              Start Your Project
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
          </MagneticButton>
          <a
            href="#contact"
            className="inline-flex min-h-12 items-center rounded-sm border border-border-strong px-7 font-display text-[0.7rem] font-bold tracking-[0.18em] uppercase transition-colors hover:border-primary"
          >
            Talk To Us
          </a>
        </Reveal>
      </div>
    </section>
  );
}
