import { useEffect } from "react";

/**
 * Premium smooth scrolling via Lenis.
 * Loaded lazily on the client only, skipped entirely for reduced-motion
 * and touch devices so native scrolling and accessibility stay intact.
 */
export function useSmoothScroll() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (reduced || coarse) return;

    let raf = 0;
    let lenis: { raf: (t: number) => void; destroy: () => void } | null = null;
    let cancelled = false;

    void (async () => {
      const { default: Lenis } = await import("lenis");
      if (cancelled) return;
      const instance = new Lenis({
        duration: 0.9,
        smoothWheel: true,
        touchMultiplier: 1.6,
        easing: (t: number) => 1 - Math.pow(1 - t, 3),
      });
      lenis = instance as unknown as { raf: (t: number) => void; destroy: () => void };
      const loop = (time: number) => {
        lenis?.raf(time);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    })();

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      lenis?.destroy();
    };
  }, []);
}
