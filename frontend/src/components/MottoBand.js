import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

const WORDS = ["Anyone", "can", "dance"];

// Two oversized lines of the motto that slide in opposite directions as the page scrolls.
export default function MottoBand() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const left = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const right = useTransform(scrollYProgress, [0, 1], ["-30%", "0%"]);

  const line = (outline) =>
    Array.from({ length: 4 }).flatMap((_, r) =>
      WORDS.map((w, i) => (
        <span
          key={`${r}-${i}`}
          className={`f-display px-[0.18em] ${
            (i + r) % 3 === 2
              ? "text-[#15172A]"
              : outline
                ? "text-transparent [-webkit-text-stroke:1.5px_rgba(21,23,42,0.45)]"
                : "text-[#15172A]"
          }`}
        >
          {w}
        </span>
      ))
    );

  return (
    <section ref={ref} aria-label="Anyone can dance" className="relative overflow-hidden bg-[#FFFFFF] py-16 md:py-24 select-none">
      <p className="sr-only">Anyone can dance.</p>
      <div aria-hidden="true" className="text-[clamp(4rem,13vw,12rem)] leading-[0.9] whitespace-nowrap">
        <motion.div style={reduce ? undefined : { x: left }} className="flex">
          {line(false)}
        </motion.div>
        <motion.div style={reduce ? undefined : { x: right }} className="flex">
          {line(true)}
        </motion.div>
      </div>
    </section>
  );
}
