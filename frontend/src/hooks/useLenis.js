import { useEffect } from "react";
import Lenis from "lenis";

let lenis = null;

export const getLenis = () => lenis;

export const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  if (lenis) lenis.scrollTo(el, { duration: 1.4 });
  else el.scrollIntoView({ behavior: "smooth" });
};

// Smooth-wheel scrolling is turned off: Lenis eases every wheel tick, which felt like lag. Native scrolling is
// instant and runs on the browser's compositor. Set SMOOTH_WHEEL to true to bring it back.
const SMOOTH_WHEEL = false;

export default function useLenis() {
  useEffect(() => {
    if (!SMOOTH_WHEEL) return;
    // Lenis only smooths the mouse wheel; touch scrolling stays native either way. On touch-only devices
    // it would just add work to every scroll frame, so phones and tablets scroll natively without it.
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    let raf;
    const loop = (t) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      lenis = null;
    };
  }, []);
}
