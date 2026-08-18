import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "@/assets/codevap-logo-dark.png";
import { EASE } from "@/lib/motion";

export function Preloader() {
  const reduced = useReducedMotion();
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (reduced) {
      setDone(true);
      return;
    }
    const t = window.setTimeout(() => setDone(true), 1200);
    return () => window.clearTimeout(t);
  }, [reduced]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.5, ease: EASE }}
          aria-hidden="true"
        >
          <motion.img
            src={logo}
            alt=""
            width={512}
            height={512}
            className="h-14 w-14 object-contain"
            initial={{ opacity: 0, scale: 0.86 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: EASE }}
          />
          <div className="mt-6 h-px w-32 overflow-hidden bg-border">
            <motion.div
              className="h-full bg-primary"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              style={{ transformOrigin: "left" }}
              transition={{ duration: 1, ease: EASE }}
            />
          </div>
          <motion.p
            className="mt-5 text-center text-[0.6rem] leading-relaxed font-medium tracking-[0.32em] text-muted-foreground uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            Codevap
            <br />
            Digital Experiences
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
