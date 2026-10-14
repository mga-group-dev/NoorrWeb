"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { HERO_PORTRAITS } from "@/content";

const INTERVAL = 4500;

// Right side of the hero: large cutouts of Noorr (no background) rising in one after another over a soft sunrise glow.
export default function HeroPortraits() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % HERO_PORTRAITS.length), INTERVAL);
    return () => clearInterval(id);
  }, []);

  const cur = HERO_PORTRAITS[i];
  return (
    <div className="w-full max-w-[720px] mx-auto lg:mx-0 lg:ml-auto lg:self-end">
      <div className="relative h-[clamp(440px,70svh,640px)] lg:h-[calc(100svh-96px)] lg:max-h-[900px]">
        <div
          className="absolute inset-x-[8%] top-[14%] bottom-[6%] rounded-full blur-3xl opacity-80 bg-[radial-gradient(circle_at_50%_40%,rgba(242,106,27,0.55),rgba(185,198,247,0.45)_55%,transparent_75%)]"
          aria-hidden="true"
        />
        <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,#000_86%,transparent)]">
          <AnimatePresence initial={false}>
            <motion.img
              key={cur.src}
              src={cur.src}
              alt={cur.alt}
              fetchPriority={i === 0 ? "high" : "auto"}
              className="absolute inset-0 w-full h-full object-contain object-bottom drop-shadow-[0_30px_40px_rgba(21,23,42,0.28)]"
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 36, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: -12 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            />
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
