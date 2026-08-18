import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { useFinePointer } from "@/hooks/useMediaQuery";

type Mode = "default" | "link" | "project";

/** Desktop-only decorative cursor. Native cursor stays enabled for accessibility. */
export function CustomCursor() {
  const fine = useFinePointer();
  const reduced = useReducedMotion();
  const enabled = fine && !reduced;

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 700, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 700, damping: 40, mass: 0.4 });
  const [mode, setMode] = useState<Mode>("default");

  useEffect(() => {
    if (!enabled) return;
    const onMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const el = (e.target as HTMLElement | null)?.closest?.(
        "[data-cursor], a, button, input, textarea, select",
      ) as HTMLElement | null;
      const flag = el?.dataset?.["cursor"];
      setMode(flag === "project" ? "project" : el ? "link" : "default");
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [enabled, x, y]);

  if (!enabled) return null;

  const size = mode === "project" ? 88 : mode === "link" ? 44 : 14;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[90] hidden lg:block"
      style={{ x: sx, y: sy }}
    >
      <motion.div
        className="flex items-center justify-center rounded-full border border-primary"
        animate={{
          width: size,
          height: size,
          marginLeft: -size / 2,
          marginTop: -size / 2,
          backgroundColor:
            mode === "project" ? "var(--primary)" : mode === "link" ? "transparent" : "var(--primary)",
          opacity: mode === "default" ? 0.9 : 1,
        }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      >
        {mode === "project" && (
          <span className="font-display text-[0.55rem] font-bold tracking-[0.14em] text-primary-foreground">
            VIEW →
          </span>
        )}
      </motion.div>
    </motion.div>
  );
}
