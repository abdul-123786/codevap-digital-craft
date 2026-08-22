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

        <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <motion.div variants={fadeUp} className="max-w-xl space-y-6 text-[1.05rem] leading-relaxed text-muted-foreground">
              <p>
                We build <strong className="font-medium text-foreground">websites, applications, e-commerce platforms, and custom software</strong> for businesses that want to build, improve, and grow their digital presence.
              </p>
              <p>
                From the first idea to the final product, we handle <strong className="font-medium text-foreground">design, development, integrations, deployment, and ongoing improvements</strong> — with technology chosen around the actual needs of the business.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-16 sm:mt-24">
              <h3 className="eyebrow">WHAT MAKES CODEVAP DIFFERENT</h3>
              <p className="mt-5 text-xl font-medium tracking-tight text-foreground">
                We don&apos;t believe every business needs the same solution.
              </p>
              <p className="mt-4 font-display text-lg font-bold tracking-tight text-primary sm:text-2xl">
                We understand → We design → We build → We launch → We improve.
              </p>
              <p className="mt-6 text-[1.05rem] leading-relaxed text-muted-foreground">
                Our goal is simple:{" "}
                <strong className="font-medium text-foreground">
                  build technology that actually works for your business.
                </strong>
              </p>
            </motion.div>
          </div>

          <div className="lg:pl-10">
            <motion.h3 variants={fadeUp} className="eyebrow mb-6">WHO WE WORK WITH</motion.h3>
            <motion.ul variants={stagger(0.07)} className="divide-y divide-border border-y border-border">
              {audiences.map((a, i) => (
                <motion.li
                  key={a.title}
                  variants={fadeUp}
                  className="flex gap-5 py-6"
                >
                  <span className="mt-1.5 font-display text-xs tracking-[0.18em] text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <span className="block font-display text-lg font-bold tracking-tight text-foreground">
                      {a.title}
                    </span>
                    <span className="mt-2 block text-sm text-muted-foreground leading-relaxed">
                      {a.description}
                    </span>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </div>
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
