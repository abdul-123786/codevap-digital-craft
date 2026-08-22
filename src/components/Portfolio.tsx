import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { projects, type Project } from "@/data/site";
import { EASE, viewportOnce } from "@/lib/motion";

function ProjectMedia({ project, full }: { project: Project; full?: boolean }) {
  const [failed, setFailed] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  
  const width = useTransform(scrollYProgress, [0, 1], ["75%", "100%"]);

  return (
    <motion.div 
      ref={ref}
      style={full ? { width, margin: "0 auto" } : {}}
      className={`relative w-full overflow-hidden rounded-sm border border-border bg-surface-2 ${full ? 'max-w-none' : ''}`}
    >
      {failed ? (
        <div className="flex aspect-4/3 w-full items-center justify-center">
          <span className="eyebrow">{project.category}</span>
        </div>
      ) : (
        <motion.img
          src={project.image}
          alt={`${project.title} — ${project.category} project by CODEVAP`}
          loading="lazy"
          decoding="async"
          width={1280}
          height={960}
          onError={() => setFailed(true)}
          className="h-auto w-full object-cover bg-background"
          initial={{ scale: 1.05, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 1, ease: EASE }}
        />
      )}
      <div aria-hidden="true" className="absolute inset-0 bg-background/20 transition-opacity duration-500 group-hover:opacity-0" />
    </motion.div>
  );
}

function ProjectInfo({ project }: { project: Project }) {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex items-center gap-3">
        <span className="font-display text-[0.7rem] font-bold tracking-[0.18em] text-primary">
          {project.id}
        </span>
        <motion.span
          aria-hidden="true"
          className="h-px flex-1 origin-left bg-primary/50"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease: EASE }}
        />
        <span className="eyebrow">{project.category}</span>
      </div>

      <h3 className="mt-5 font-display text-2xl leading-tight font-bold tracking-tight sm:text-4xl">
        {project.title.toUpperCase()}
      </h3>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>

      <ul className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((t) => (
          <li
            key={t}
            className="rounded-sm border border-border px-2.5 py-1 text-[0.65rem] tracking-[0.1em] text-muted-foreground uppercase"
          >
            {t}
          </li>
        ))}
      </ul>

      <p className="mt-6 border-l border-primary pl-4 text-sm text-foreground">{project.outcome}</p>

      <a
        href={project.href}
        className="group/link mt-7 inline-flex min-h-11 items-center gap-2 font-display text-[0.7rem] font-bold tracking-[0.18em] uppercase"
      >
        <span className="border-b border-border-strong pb-1 transition-colors group-hover/link:border-primary">
          View Project
        </span>
        <ArrowUpRight
          className="h-4 w-4 text-primary transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
          aria-hidden="true"
        />
      </a>
    </div>
  );
}

export function Portfolio() {
  return (
    <section id="work" className="border-t border-border py-24 lg:py-32">
      <div className="container-x">
        <Reveal className="eyebrow">03 / Selected Work</Reveal>
        <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
          <Reveal delay={0.04}>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-5xl">
              SELECTED WORK
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="font-display text-sm tracking-[0.1em] text-muted-foreground uppercase">
            Digital products built to perform.
          </Reveal>
        </div>
      </div>

      <div className="mt-16 space-y-20 lg:space-y-28">
        {projects.map((p) => {
          const full = p.layout === "full";
          return (
            <article key={p.id} className={`group ${full ? 'w-full px-0' : 'container-x'}`} data-cursor="project">
              {full ? (
                <div className="space-y-8">
                  <ProjectMedia project={p} full />
                  <div className="container-x grid gap-8 lg:grid-cols-[1fr_1.1fr]">
                    <ProjectInfo project={p} />
                  </div>
                </div>
              ) : (
                <div
                  className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${
                    p.layout === "right" ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <ProjectMedia project={p} />
                  <ProjectInfo project={p} />
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
