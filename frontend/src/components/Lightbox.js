"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

// Full-screen viewer shared by PhotoWall and VideoReel. `index` is null when closed.
// Arrow keys step through the items, Escape closes, and the page behind stops scrolling.
// It is portalled to <body>: the route template and Reveal animate `filter`, and a filtered ancestor turns
// `position: fixed` into "fixed to that ancestor", which put the viewer off-screen (video sound, no picture).
export default function Lightbox({ index, count, onClose, onStep, label, children }) {
  const open = index !== null;
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onStep(1);
      if (e.key === "ArrowLeft") onStep(-1);
    };
    const html = document.documentElement;
    const prev = html.style.overflow;
    html.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      html.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose, onStep]);

  const btn = "grid place-items-center w-12 h-12 rounded-full bg-white/10 text-white backdrop-blur-md hover:bg-white/20 transition-colors";
  if (!mounted) return null;
  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={label}
          data-lenis-prevent
          className="fixed inset-0 z-[60] bg-[#0b0c16]/95 flex items-center justify-center px-4 py-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            {children}
          </div>
          <button type="button" aria-label="Close" onClick={onClose} className={`${btn} absolute top-4 right-4`}>
            <X size={22} />
          </button>
          {count > 1 && (
            <>
              <button type="button" aria-label="Previous" onClick={(e) => { e.stopPropagation(); onStep(-1); }} className={`${btn} absolute left-3 md:left-6 top-1/2 -translate-y-1/2`}>
                <ChevronLeft size={24} />
              </button>
              <button type="button" aria-label="Next" onClick={(e) => { e.stopPropagation(); onStep(1); }} className={`${btn} absolute right-3 md:right-6 top-1/2 -translate-y-1/2`}>
                <ChevronRight size={24} />
              </button>
              <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-sm text-white/60 tabular">
                {index + 1} / {count}
              </p>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
