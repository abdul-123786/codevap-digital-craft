import { motion } from "framer-motion";
import logo from "@/assets/codevap-logo-dark.png";
import { EASE } from "@/lib/motion";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <motion.span
      className="group inline-flex items-center gap-2.5"
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      <motion.img
        src={logo}
        alt=""
        width={512}
        height={512}
        aria-hidden="true"
        className="h-6 w-6 shrink-0 object-contain sm:h-7 sm:w-7"
        variants={{ rest: { x: 0, scale: 1 }, hover: { x: 2, scale: 1.04 } }}
        transition={{ duration: 0.35, ease: EASE }}
      />
      <span className="font-display text-[0.95rem] font-bold tracking-[0.16em] sm:text-base">
        CODEVAP
      </span>
      {!compact && (
        <motion.span
          aria-hidden="true"
          className="hidden h-1 w-1 rounded-full bg-primary sm:block"
          variants={{ rest: { opacity: 0.5 }, hover: { opacity: 1, scale: 1.6 } }}
          transition={{ duration: 0.3, ease: EASE }}
        />
      )}
    </motion.span>
  );
}
