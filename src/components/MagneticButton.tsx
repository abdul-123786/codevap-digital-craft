import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { useFinePointer } from "@/hooks/useMediaQuery";

/**
 * Wraps a CTA button in a subtle magnetic pull effect.
 * Desktop fine-pointer only. Disabled on touch/mobile.
 * Limit strength to keep it subtle and professional.
 */
export function MagneticButton({
  children,
  strength = 0.32,
}: {
  children: ReactNode;
  strength?: number;
}) {
  const fine = useFinePointer();
  const ref = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const x = useSpring(useTransform(mouseX, (v) => v * strength), {
    stiffness: 300,
    damping: 22,
    mass: 0.5,
  });
  const y = useSpring(useTransform(mouseY, (v) => v * strength), {
    stiffness: 300,
    damping: 22,
    mass: 0.5,
  });

  if (!fine) return <>{children}</>;

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const onLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}
