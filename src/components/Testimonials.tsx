import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { testimonials } from "@/data/site";
import { EASE } from "@/lib/motion";

/** Renders nothing until real, attributable testimonials exist. */
export function Testimonials() {
  const [i, setI] = useState(0);
  if (testimonials.length === 0) return null;
  const t = testimonials[i]!;

  return (
    <section className="border-t border-border py-24 lg:py-32">
      <div className="container-x">
        <Reveal className="eyebrow">08 / Clients</Reveal>
        <div className="mt-10 min-h-48">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45, ease: EASE }}
            >
              <p className="max-w-3xl font-display text-2xl leading-tight font-bold tracking-tight sm:text-4xl">
                <span className="text-primary">“</span>
                {t.quote}
              </p>
              <footer className="mt-6 text-sm text-muted-foreground">
                {t.name} — {t.company}
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>
        <div className="mt-8 flex gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              type="button"
              aria-label={`Show testimonial ${idx + 1}`}
              onClick={() => setI(idx)}
              className={`h-1 w-10 transition-colors ${idx === i ? "bg-primary" : "bg-border-strong"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
