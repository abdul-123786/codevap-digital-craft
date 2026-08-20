import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { founders, type Founder } from "@/data/founders";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { EASE, fadeUp, stagger, viewportOnce } from "@/lib/motion";

export function Founders() {
  const [active, setActive] = useState<Founder | null>(null);
  const reduced = useReducedMotion();
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const pinned = isDesktop && !reduced;


  return (
    <section
      id="founders"
      className="relative overflow-hidden border-t border-border bg-background"
    >
      <div className="container-x pt-24 lg:pt-32">
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.p variants={fadeUp} className="eyebrow">
            05 / People
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-5 max-w-3xl font-display text-[clamp(2.2rem,6vw,4.5rem)] leading-[0.95] font-bold tracking-tight"
          >
            THE PEOPLE BEHIND <span className="text-primary">CODEVAP</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-5 max-w-lg text-muted-foreground">
            A small, senior team. The people who plan your project are the people who build it.
          </motion.p>
        </motion.div>
      </div>

      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -z-0 hidden -translate-x-1/2 font-display text-[22vw] leading-none font-bold tracking-tighter text-foreground/[0.025] select-none lg:block"
      >
        PEOPLE
      </span>

      {pinned ? (
        <PinnedFounders onOpen={setActive} />
      ) : (
        <div className="container-x grid gap-10 py-16 sm:grid-cols-2">
          {founders.map((f, i) => (
            <FounderCard key={f.id} founder={f} index={i} onOpen={() => setActive(f)} stacked />
          ))}
        </div>
      )}

      <FounderModal founder={active} onClose={() => setActive(null)} />
    </section>
  );
}

/** Desktop-only: vertical scroll drives horizontal founder movement. */
function PinnedFounders({ onOpen }: { onOpen: (f: Founder) => void }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });
  const shift = -((founders.length - 1) / founders.length) * 100;
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `${shift}%`]);

  return (
    <div ref={trackRef} style={{ height: `${founders.length * 100}vh` }} className="relative">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div className="flex" style={{ x, width: `${founders.length * 100}vw` }}>
          {founders.map((f, i) => (
            <div key={f.id} className="flex w-screen shrink-0 items-center px-6 lg:px-16">
              <FounderCard founder={f} index={i} onOpen={() => onOpen(f)} />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}


}

function FounderCard({
  founder,
  index,
  onOpen,
  stacked = false,
}: {
  founder: Founder;
  index: number;
  onOpen: () => void;
  stacked?: boolean;
}) {
  return (
    <motion.div
      className={
        stacked
          ? "w-full"
          : "mx-auto grid w-full max-w-5xl gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center"
      }
      initial={{ opacity: 0.75, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.7, ease: EASE }}
    >
      <button
        type="button"
        onClick={onOpen}
        data-cursor="founder"
        aria-label={`View profile: ${founder.name}, ${founder.role}`}
        className="group relative block w-full overflow-hidden rounded-md border border-border bg-surface text-left"
      >
        <img
          src={founder.image}
          alt=""
          width={900}
          height={1200}
          loading="lazy"
          decoding="async"
          className="aspect-[3/4] w-full object-cover transition-transform duration-700 ease-[var(--ease-out-premium)] group-hover:scale-[1.04]"
        />
        <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent" />
        <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-primary transition-transform duration-500 ease-[var(--ease-out-premium)] group-hover:scale-x-100" />
        <span className="pointer-events-none absolute top-5 left-5 font-display text-xs tracking-[0.2em] text-primary">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="pointer-events-none absolute inset-x-5 bottom-5">
          <span className="block font-display text-xl font-bold tracking-tight lg:text-2xl">
            {founder.name}
          </span>
          <span className="mt-1 block text-xs tracking-[0.16em] text-muted-foreground uppercase transition-transform duration-500 ease-[var(--ease-out-premium)] group-hover:-translate-y-0.5">
            {founder.role}
          </span>
        </span>
      </button>

      <div className={stacked ? "mt-6" : ""}>
        <p className="text-sm tracking-[0.18em] text-primary uppercase">{founder.role}</p>
        <p className="mt-4 max-w-md text-lg leading-relaxed text-muted-foreground">
          {founder.shortBio}
        </p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {founder.expertise.map((e) => (
            <li
              key={e}
              className="rounded-sm border border-border px-3 py-1.5 text-[0.7rem] tracking-[0.12em] text-muted-foreground uppercase"
            >
              {e}
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={onOpen}
          className="group mt-8 inline-flex min-h-11 items-center gap-2 font-display text-xs font-bold tracking-[0.18em] uppercase"
        >
          View Profile
          <ArrowUpRight
            aria-hidden="true"
            className="h-4 w-4 text-primary transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </button>
      </div>
    </motion.div>
  );
}

function FounderModal({ founder, onClose }: { founder: Founder | null; onClose: () => void }) {
  const panelRef = useRef<HTMLDivElement>(null);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;
      const nodes = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (nodes.length === 0) return;
      const first = nodes[0]!;
      const last = nodes[nodes.length - 1]!;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    },
    [onClose],
  );

  useEffect(() => {
    if (!founder) return;
    const previous = document.activeElement as HTMLElement | null;
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLElement>("button")?.focus();
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      previous?.focus?.();
    };
  }, [founder, onKeyDown]);

  return (
    <AnimatePresence>
      {founder && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-end justify-center p-0 sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: EASE }}
        >
          <button
            type="button"
            aria-label="Close profile"
            onClick={onClose}
            className="absolute inset-0 bg-background/85 backdrop-blur-sm"
          />
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label={`${founder.name} — ${founder.role}`}
            className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-t-lg border border-border bg-surface sm:rounded-lg"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 24, opacity: 0 }}
            transition={{ duration: 0.45, ease: EASE }}
          >
            <div className="grid gap-0 sm:grid-cols-[0.85fr_1.15fr]">
              <motion.div
                className="relative overflow-hidden"
                initial={{ clipPath: "inset(0 0 100% 0)" }}
                animate={{ clipPath: "inset(0 0 0% 0)" }}
                transition={{ duration: 0.6, ease: EASE, delay: 0.05 }}
              >
                <img
                  src={founder.image}
                  alt=""
                  width={900}
                  height={1200}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </motion.div>

              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="eyebrow">Founder</p>
                    <h3 className="mt-2 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                      {founder.name}
                    </h3>
                    <p className="mt-1 text-xs tracking-[0.18em] text-primary uppercase">
                      {founder.role}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close profile"
                    className="grid h-11 w-11 shrink-0 place-items-center rounded-sm border border-border transition-colors hover:border-primary hover:text-primary"
                  >
                    <X className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>

                <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                  {founder.longBio}
                </p>

                <h4 className="eyebrow mt-8">Expertise</h4>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {founder.expertise.map((e) => (
                    <li
                      key={e}
                      className="rounded-sm border border-border px-3 py-1.5 text-[0.7rem] tracking-[0.12em] uppercase"
                    >
                      {e}
                    </li>
                  ))}
                </ul>

                <h4 className="eyebrow mt-8">Responsibilities</h4>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {founder.responsibilities.map((r) => (
                    <li key={r} className="flex items-start gap-3">
                      <span aria-hidden="true" className="mt-2 h-1 w-3 shrink-0 bg-primary" />
                      {r}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap gap-3">
                  {founder.social.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      rel="noopener noreferrer"
                      className="group inline-flex min-h-11 items-center gap-2 rounded-sm border border-border px-4 font-display text-[0.7rem] font-bold tracking-[0.16em] uppercase transition-colors hover:border-primary hover:text-primary"
                    >
                      {s.label}
                      <ArrowUpRight
                        aria-hidden="true"
                        className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
