"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

// The opening shot: the frame widens toward the edges as you scroll, while the photo inside drifts slower (parallax).
export default function HeroFrame({ src, alt }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0.15, 0.55], [0.92, 1.04]);
  const radius = useTransform(scrollYProgress, [0.15, 0.55], [28, 8]);
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  return (
    <motion.div
      ref={ref}
      style={reduce ? undefined : { scale, borderRadius: radius }}
      className="relative overflow-hidden rounded-[20px] aspect-[4/3] md:aspect-[21/9] bg-[#e9eaf0] shadow-[0_40px_80px_-40px_rgba(21,23,42,0.45)] will-change-transform"
    >
      <motion.img
        src={src}
        alt={alt}
        fetchPriority="high"
        style={reduce ? { objectPosition: "50% 18%" } : { y, objectPosition: "50% 18%" }}
        className="absolute inset-x-0 -top-[10%] w-full h-[120%] object-cover"
      />
    </motion.div>
  );
}
