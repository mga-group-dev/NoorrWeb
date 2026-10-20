"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion, useInView } from "framer-motion";
import Link from "next/link";
import Ornament from "./Ornament";
import { EASE, Counter } from "./ui/Reveal";
import { srcSetOf } from "@/content";

// Fixed positions (not random) so server and client render the same dust motes.
const MOTES = Array.from({ length: 14 }, (_, i) => ({
  left: (i * 37 + 7) % 100,
  size: 2 + (i % 3),
  dur: 10 + ((i * 7) % 9),
  delay: -((i * 1.7) % 12),
  drift: ((i % 5) - 2) * 14,
}));

// A film still between sections: a stage photo graded in sunrise tones, spotlights sweeping through haze,
// dust drifting up through the light, letterbox bars that open as it scrolls in, and the motto revealed word by word.
// Optional `stats` ([{ value, suffix, label }]) count up under the motto, and `cta` ({ href, label }) adds a button.
export default function OrnamentBand({ children, img = "/media/stage-purple.webp", focus = "50% 40%", stats, cta }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const inView = useInView(ref, { once: true, amount: 0.35 });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const bar = useTransform(scrollYProgress, [0.1, 0.45], ["20%", "7%"]);
  const show = inView || reduce;
  const words = typeof children === "string" ? children.split(" ") : null;

  return (
    <section ref={ref} className="relative isolate overflow-hidden bg-[#15172a] text-center" aria-label="Motto">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <motion.div style={reduce ? undefined : { y }} className="absolute inset-x-0 -top-[15%] h-[130%]">
          <img src={img} srcSet={srcSetOf(img)} sizes="100vw" alt="" loading="lazy" decoding="async" className="cine-kenburns w-full h-full object-cover" style={{ objectPosition: focus }} />
        </motion.div>
        <div className="cine-grade absolute inset-0" />
        <div className="cine-beam cine-beam-l" />
        <div className="cine-beam cine-beam-r" />
        <div className="absolute inset-0">
          {MOTES.map((m, i) => (
            <span
              key={i}
              className="cine-mote"
              style={{ left: `${m.left}%`, width: m.size, height: m.size, animationDuration: `${m.dur}s`, animationDelay: `${m.delay}s`, "--drift": `${m.drift}px` }}
            />
          ))}
        </div>
        <div className="cine-vignette absolute inset-0" />
        <div className="cine-grain" />
        <motion.div style={{ height: reduce ? "7%" : bar }} className="film-bar absolute inset-x-0 top-0" />
        <motion.div style={{ height: reduce ? "7%" : bar }} className="film-bar absolute inset-x-0 bottom-0" />
      </div>

      <div className="wrap relative flex flex-col items-center justify-center py-28 md:py-40 min-h-[70vh]">
        <motion.div
          initial={reduce ? false : { clipPath: "inset(0 50% 0 50%)", opacity: 0 }}
          animate={show ? { clipPath: "inset(0 0% 0 0%)", opacity: 1 } : undefined}
          transition={{ duration: 1.4, ease: EASE, delay: 0.2 }}
        >
          <Ornament className="w-40 md:w-52 text-[#ffd2b0] drop-shadow-[0_0_14px_rgba(255,170,110,0.7)]" />
        </motion.div>
        {children && (
          <p className="f-display text-white text-[clamp(2.6rem,6.2vw,5.6rem)] leading-[1.02] mt-7 max-w-[18ch] [text-shadow:0_4px_30px_rgba(0,0,0,0.55)]">
            {words
              ? words.map((w, i) => {
                  const last = i === words.length - 1;
                  return (
                    <span key={i}>
                      <motion.span
                        className={`inline-block ${last ? "f-script text-[1.12em] text-[#ffb38a] px-1" : ""}`}
                        initial={reduce ? false : { opacity: 0, y: "0.5em", filter: "blur(10px)" }}
                        animate={show ? { opacity: 1, y: 0, filter: "blur(0px)", transitionEnd: { filter: "none" } } : undefined}
                        transition={{ duration: 1, ease: EASE, delay: 0.6 + i * 0.1 }}
                      >
                        {w}
                      </motion.span>
                      {!last && " "}
                    </span>
                  );
                })
              : children}
          </p>
        )}
        <motion.span
          aria-hidden="true"
          className="block h-px w-56 max-w-[60vw] mt-8 bg-gradient-to-r from-transparent via-[#ffb38a] to-transparent origin-center"
          initial={reduce ? false : { scaleX: 0, opacity: 0 }}
          animate={show ? { scaleX: 1, opacity: 1 } : undefined}
          transition={{ duration: 1.6, ease: EASE, delay: 0.9 + (words ? words.length * 0.1 : 0) }}
        />
        {stats && (
          <motion.dl
            className="mt-10 grid grid-cols-3 gap-3 md:gap-5 w-full max-w-[720px]"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={show ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 1, ease: EASE, delay: 1.2 }}
          >
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-white/15 bg-white/[0.07] backdrop-blur-md px-3 py-4 md:py-5">
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <Counter value={s.value} suffix={s.suffix} className="f-display block text-[clamp(1.9rem,3.6vw,3rem)] leading-none text-[#ffd2b0] tabular" />
                  <span className="block text-[0.78rem] md:text-sm text-white/75 mt-2">{s.label}</span>
                </dd>
              </div>
            ))}
          </motion.dl>
        )}
        {cta && (
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={show ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 1, ease: EASE, delay: 1.45 }}
          >
            <Link
              href={cta.href}
              className="inline-flex items-center gap-2 mt-9 rounded-full bg-white text-[#15172a] font-medium px-7 py-3.5 shadow-[0_10px_40px_-10px_rgba(255,170,110,0.8)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_50px_-8px_rgba(255,170,110,0.95)] active:translate-y-0"
            >
              {cta.label} <span aria-hidden="true">&rarr;</span>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
