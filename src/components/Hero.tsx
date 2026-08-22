import { motion, useReducedMotion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { EASE } from "@/lib/motion";
import { MagneticButton } from "@/components/MagneticButton";
import { useFinePointer } from "@/hooks/useMediaQuery";
import KineticGrid from "@/components/ui/kinetic-grid";
import TextType from "@/components/ui/TextType";


export function Hero() {
  const reduced = useReducedMotion();
  const base = reduced ? 0 : 1.15;
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  // Subtle parallax: content drifts up as you scroll away
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  // Pointer tracking for green glow (only on desktop fine-pointer devices)
  const isFinePointer = useFinePointer();
  const glowX = useMotionValue(0);
  const glowY = useMotionValue(0);
  
  // Smooth, high-damping spring for a premium fluid follow effect
  const springX = useSpring(glowX, { stiffness: 45, damping: 20, mass: 0.8 });
  const springY = useSpring(glowY, { stiffness: 45, damping: 20, mass: 0.8 });
  
  // The glow starts at left: 50% and -translate-x-1/2 (via CSS).
  // We use Framer Motion to inject a transform that includes the base -50% plus our dynamic pixel offset.
  const x = useTransform(springX, (val) => `calc(-50% + ${val}px)`);

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isFinePointer || reduced) return;
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    
    const pointerX = e.clientX - rect.left;
    const pointerY = e.clientY - rect.top;
    
    // Offset from the glow's natural CSS origin (centered horizontally, ~150px down visually)
    glowX.set(pointerX - rect.width / 2);
    glowY.set(pointerY - 150);
  };

  const handlePointerLeave = () => {
    // Return to center when mouse leaves the section
    glowX.set(0);
    glowY.set(0);
  };

  return (
    <section 
      ref={sectionRef} 
      id="top" 
      className="relative overflow-hidden pt-32 pb-16 sm:pt-40 lg:pt-48 lg:pb-24"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      {/* Technical background: interactive grid, glow, motion lines */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <KineticGrid globalColor="default" className="absolute inset-0 z-0 opacity-60" />
        <motion.div 
          className="green-glow absolute -top-40 left-1/2 h-[520px] w-[820px] opacity-70 z-0" 
          style={{ x, y: springY }}
        />
        <div className="absolute inset-x-0 bottom-24 space-y-6 z-0">
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

      <motion.div className="container-x" style={reduced ? {} : { y: contentY, opacity: contentOpacity }}>
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
          <span className="block overflow-hidden">
            <motion.span
              className="block"
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.85, ease: EASE, delay: base + 0.12 }}
            >
              WE BUILD
            </motion.span>
          </span>
          <span className="block overflow-hidden min-h-[0.98em]">
            <motion.span
              className="block text-primary"
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.85, ease: EASE, delay: base + 0.23 }}
            >
              <TextType
                text={[
                  "DIGITAL EXPERIENCES",
                  "WEB APPLICATIONS",
                  "E-COMMERCE SYSTEMS",
                  "SCALABLE PLATFORMS"
                ]}
                typingSpeed={65}
                deletingSpeed={30}
                pauseDuration={2800}
                initialDelay={2800}
                startFullyTyped={true}
                cursorClassName="text-primary opacity-80"
              />
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              className="block"
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.85, ease: EASE, delay: base + 0.34 }}
            >
              THAT <span className="text-primary duration-800 animate-in fade-in fill-mode-both" style={{ animationDelay: `${(base + 0.7) * 1000}ms` }}>MOVE</span> BUSINESS.
            </motion.span>
          </span>
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
            <MagneticButton>
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
            </MagneticButton>
            <a
              href="#work"
              className="group relative inline-flex min-h-12 items-center gap-3 overflow-hidden rounded-sm border border-border-strong px-6 font-display text-[0.7rem] font-bold tracking-[0.18em] uppercase"
            >
              <span className="absolute inset-0 -translate-x-full bg-foreground/5 transition-transform duration-400 ease-[var(--ease-out-premium)] group-hover:translate-x-0" />
              <span className="relative">View Our Work</span>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
