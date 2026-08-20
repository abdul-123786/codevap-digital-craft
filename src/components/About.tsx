import { motion } from "framer-motion";
import { audiences } from "@/data/site";
import { EASE, fadeUp, stagger, viewportOnce } from "@/lib/motion";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden border-t border-border bg-surface py-24 lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 h-64 w-64 green-glow opacity-40"
      />
      <motion.div
        className="container-x"
        variants={stagger(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <motion.p variants={fadeUp} className="eyebrow">
          06 / About
        </motion.p>

        <motion.h2
          variants={fadeUp}
          className="mt-5 max-w-4xl font-display text-[clamp(2.4rem,7vw,5rem)] leading-[0.95] font-bold tracking-tight"
        >
          WE ARE <span className="text-primary">CODEVAP</span>.
        </motion.h2>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <motion.p variants={fadeUp} className="max-w-xl text-lg leading-relaxed text-muted-foreground">
            A digital technology studio focused on building high-performance websites, applications
            and digital systems for businesses ready to grow. We work as one team across strategy,
            design, engineering and long-term support.
          </motion.p>

          <motion.ul variants={stagger(0.07)} className="divide-y divide-border border-y border-border">
            {audiences.map((a, i) => (
              <motion.li
                key={a}
                variants={fadeUp}
                className="flex items-baseline gap-5 py-4"
              >
                <span className="font-display text-xs tracking-[0.18em] text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-lg font-medium tracking-tight">{a}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          aria-hidden="true"
          className="mt-14 h-px origin-left bg-primary/60"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 1, ease: EASE }}
        />
      </motion.div>
    </section>
  );
}
