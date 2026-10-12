"use client";
import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, useSpring, AnimatePresence } from "framer-motion";
import Ornament from "./Ornament";
import { EIGHT_COUNT } from "@/content";

const EASE = [0.22, 1, 0.36, 1];

// Where each photo sits in the deck, by distance from the current count.
function cardPose(d) {
  if (d < 0) return { x: "-70%", y: "8%", rotate: -14, scale: 0.9, opacity: 0, zIndex: 0 };
  if (d === 0) return { x: "0%", y: "0%", rotate: -2, scale: 1, opacity: 1, zIndex: 30 };
  if (d === 1) return { x: "7%", y: "-3%", rotate: 5, scale: 0.94, opacity: 0.7, zIndex: 20 };
  if (d === 2) return { x: "13%", y: "-6%", rotate: 10, scale: 0.88, opacity: 0.35, zIndex: 10 };
  return { x: "18%", y: "-8%", rotate: 14, scale: 0.82, opacity: 0, zIndex: 0 };
}

// A choreographer counts every routine in eights. The section pins while you scroll;
// each count deals the next photo off the deck and names the next style.
export default function EightCount() {
  const ref = useRef(null);
  const [n, setN] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  useMotionValueEvent(scrollYProgress, "change", (v) => setN(Math.min(7, Math.max(0, Math.floor(v * 8)))));
  const cur = EIGHT_COUNT[n];

  return (
    <section ref={ref} className="relative h-[360vh] bg-[#0d0e1c] text-white" aria-label="Eight styles, counted in">
      <ul className="sr-only">
        {EIGHT_COUNT.map((c) => (
          <li key={c.style}>
            {c.style}: {c.line}
          </li>
        ))}
      </ul>

      <div aria-hidden="true" className="sticky top-0 h-[100svh] overflow-hidden">
        {/* Blurred copy of the current photo as a coloured haze, plus the sunrise glow. */}
        <AnimatePresence initial={false}>
          <motion.img
            key={cur.img}
            src={cur.img}
            alt=""
            className="absolute inset-0 w-full h-full object-cover scale-125 blur-[60px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.45 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1 }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-[radial-gradient(60%_55%_at_50%_110%,rgba(242,106,27,0.45),transparent_70%),radial-gradient(50%_50%_at_90%_0%,rgba(185,198,247,0.22),transparent_70%),linear-gradient(180deg,rgba(13,14,28,0.55),rgba(13,14,28,0.85))]" />
        <p className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center f-display text-[28vw] leading-none text-white/[0.03] select-none whitespace-nowrap">
          5 · 6 · 7 · 8
        </p>

        <div className="relative h-full wrap flex flex-col pt-20 pb-8 md:pt-24 md:pb-10">
          <div className="flex items-center gap-4">
            <Ornament className="w-20 text-[#f08a4b]" />
            <p className="text-sm tracking-[0.2em] uppercase text-white/60">Count it in</p>
          </div>

          <div className="flex-1 grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-6 md:gap-16 items-center min-h-0">
            {/* The count and the style. */}
            <div className="order-2 md:order-1 min-w-0">
              <div className="flex items-end gap-5">
                <div className="relative h-[clamp(6.5rem,20vw,17rem)] overflow-hidden">
                  <AnimatePresence mode="popLayout" initial={false}>
                    <motion.span
                      key={n}
                      className="block f-display tabular leading-[0.85] text-[clamp(7.5rem,23vw,20rem)] bg-gradient-to-b from-white via-[#ffd9bf] to-[#f6a26c] bg-clip-text text-transparent"
                      initial={{ y: "100%" }}
                      animate={{ y: "0%" }}
                      exit={{ y: "-100%" }}
                      transition={{ duration: 0.6, ease: EASE }}
                    >
                      {n + 1}
                    </motion.span>
                  </AnimatePresence>
                </div>
                <span className="f-display text-[clamp(1.6rem,3vw,2.6rem)] text-white/35 pb-[0.6em] tabular">/ 8</span>
              </div>

              <div className="mt-2 md:mt-4 min-h-[7.5rem] md:min-h-[9rem]">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={n}
                    initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -10, filter: "blur(6px)" }}
                    transition={{ duration: 0.45, ease: EASE }}
                  >
                    <p className="f-script text-[clamp(2.4rem,5.5vw,4.6rem)] leading-tight text-[#f6a26c]">{cur.style}</p>
                    <p className="text-white/75 text-lg mt-2 max-w-[32ch]">{cur.line}</p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* The photo deck: the current photo in front, the next two fanned behind. */}
            <div className="order-1 md:order-2 relative w-[min(62vw,240px)] md:w-[min(32vw,420px)] aspect-[4/5] mx-auto md:mx-0 md:justify-self-center">
              {EIGHT_COUNT.map((c, i) => (
                <motion.div
                  key={c.style}
                  className="absolute inset-0 rounded-[22px] p-2 bg-gradient-to-br from-white/25 via-white/5 to-[#f6a26c]/30 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)]"
                  initial={false}
                  animate={cardPose(i - n)}
                  transition={{ duration: 0.8, ease: EASE }}
                >
                  <div className="relative w-full h-full overflow-hidden rounded-[16px]">
                    <img src={c.img} alt="" loading={i < 3 ? "eager" : "lazy"} className="w-full h-full object-cover object-[50%_25%]" />
                    <span className="absolute left-3 bottom-3 rounded-full bg-black/45 backdrop-blur px-3 py-1 text-xs tabular">
                      {String(i + 1).padStart(2, "0")} · {c.style}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Beat bar: a smooth fill line over eight count ticks. */}
          <div className="relative">
            <div className="h-[2px] bg-white/10 rounded-full overflow-hidden">
              <motion.div style={{ scaleX: progress }} className="h-full origin-left bg-gradient-to-r from-[#f6a26c] via-[#f26a1b] to-[#b9c6f7]" />
            </div>
            <ol className="grid grid-cols-8 mt-3">
              {EIGHT_COUNT.map((c, i) => (
                <li key={c.style} className="list-none flex flex-col items-start gap-1">
                  <span
                    className={`w-2 h-2 rounded-full transition-all duration-500 ${
                      i === n ? "bg-[#f6a26c] scale-150 shadow-[0_0_12px_#f6a26c]" : i < n ? "bg-white/70" : "bg-white/20"
                    }`}
                  />
                  <span className={`text-xs tabular transition-colors duration-300 ${i === n ? "text-white" : "text-white/40"}`}>{i + 1}</span>
                  <span className={`hidden lg:block text-xs truncate max-w-full transition-colors duration-300 ${i === n ? "text-white/80" : "text-white/25"}`}>
                    {c.style}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
