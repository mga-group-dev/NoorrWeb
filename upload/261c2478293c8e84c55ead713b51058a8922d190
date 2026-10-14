"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { focusOf, srcSetOf } from "@/content";
import { useOverCrop } from "./SmartImg";

export const EASE = [0.22, 1, 0.36, 1];

export const Reveal = ({ children, delay = 0, className = "", y = 40 }) => {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.1, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
};

export const MaskLine = ({ children, delay = 0, className = "" }) => (
  <span className={`block overflow-hidden pb-[0.06em] ${className}`}>
    <span className="mask-anim block" style={{ animationDelay: `${delay}s` }}>
      {children}
    </span>
  </span>
);

// Headline lines slide up from behind a mask as they enter the viewport.
// The wrapper is observed (not the clipped inner span, which never intersects while hidden).
export const MaskIn = ({ children, delay = 0, className = "" }) => {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  return (
    <span ref={ref} className={`block overflow-hidden pb-[0.06em] ${className}`}>
      <motion.span
        className="block"
        initial={reduce ? false : { y: "110%" }}
        animate={inView || reduce ? { y: 0 } : undefined}
        transition={{ duration: 1, ease: EASE, delay }}
      >
        {children}
      </motion.span>
    </span>
  );
};

export const Counter = ({ value, suffix = "", className = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduce = useReducedMotion();
  const [n, setN] = useState(reduce ? value : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    const t0 = performance.now();
    let raf;
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / 1800);
      setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, reduce]);

  return (
    <span ref={ref} className={className}>
      {n}
      {suffix}
    </span>
  );
};

// A wide cinematic frame. The image starts slightly zoomed and settles as it scrolls into view.
// `sizes` tells the browser how wide the frame shows, so it picks the 800px copy where that is enough.
// `contain` shows the whole photo (for wide shots like a trophy in a tall card) over a soft blurred copy of itself.
// Without `contain`, it switches to that mode by itself when filling the frame would crop the photo badly.
export const Frame = ({ src, alt = "", className = "", priority = false, focus, sizes = "(max-width: 1024px) 100vw, 50vw", contain: forced = false }) => {
  focus = focus || focusOf(src, "50% 50%");
  const ref = useRef(null);
  const imgRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const over = useOverCrop(imgRef, src);
  const contain = forced || over;
  const srcSet = srcSetOf(src);
  return (
    <div ref={ref} className={`frame ${inView ? "is-in" : ""} ${className}`}>
      {contain && (
        <img src={src} srcSet={srcSet} sizes={sizes} alt="" aria-hidden="true" loading="lazy" decoding="async" className="absolute inset-0 blur-2xl opacity-60 scale-125" />
      )}
      <img
        ref={imgRef}
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        className={contain ? "relative" : undefined}
        style={contain ? { objectFit: "contain" } : { objectPosition: focus }}
      />
    </div>
  );
};
