"use client";

import { useCallback, useState } from "react";
import { motion } from "framer-motion";
import { Expand } from "lucide-react";
import { Reveal, MaskIn } from "./ui/Reveal";
import Lightbox from "./Lightbox";
import SmartImg from "./ui/SmartImg";
import { focusOf, srcSetOf, ratioOf } from "@/content";

// A masonry wall of photos from the Drive. Every photo lifts on hover and opens full size in a lightbox.
// The first photo of each six spans two columns on wide screens so the wall has a rhythm instead of a flat grid.
// `ink` puts the wall on the deep navy tone, like a dark auditorium.
export default function PhotoWall({ kicker, title, lead, photos, light = false, ink = false, id }) {
  const [open, setOpen] = useState(null);
  const close = useCallback(() => setOpen(null), []);
  const step = useCallback((d) => setOpen((i) => (i === null ? i : (i + d + photos.length) % photos.length)), [photos.length]);
  const cur = open === null ? null : photos[open];

  return (
    <section id={id} className={`${ink ? "tone-ink" : light ? "sec-sky" : "sec-peach"} py-24 md:py-32`} aria-label={title}>
      <div className="wrap">
        <div className="max-w-[60ch]">
          {kicker && <p className="kicker">{kicker}</p>}
          <h2 className="f-display text-[clamp(2.4rem,4.4vw,4rem)] leading-[1.02] mt-4">
            <MaskIn>{title}</MaskIn>
          </h2>
          {lead && <p className="text-lg text-[var(--body)] leading-relaxed mt-5">{lead}</p>}
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[160px] sm:auto-rows-[200px] lg:auto-rows-[220px] gap-3 md:gap-4 [grid-auto-flow:dense]">
          {photos.map((p, i) => {
            // Tile shape follows the photo: portraits get a tall tile, and every third landscape a big one.
            const r = ratioOf(p.src);
            const tall = r < 0.9;
            const big = !tall && (i % 3 === 0 || r > 1.7);
            return (
              // On phones a 2x2 tile is square, so wide photos take one full-width row there instead of being letterboxed.
              <Reveal key={p.src} delay={(i % 4) * 0.05} y={24} className={big ? (r > 1.5 ? "col-span-2 sm:row-span-2" : "col-span-2 row-span-2") : tall ? "row-span-2" : ""}>
                <motion.button
                  type="button"
                  onClick={() => setOpen(i)}
                  aria-label={`View photo: ${p.alt}`}
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 24 }}
                  className="group relative block w-full h-full overflow-hidden rounded-2xl bg-[#15172a] shadow-[0_18px_40px_-24px_rgba(21,23,42,0.55)] ring-1 ring-black/5"
                >
                  <SmartImg
                    src={p.src}
                    srcSet={srcSetOf(p.src)}
                    sizes={big ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
                    alt={p.alt}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                    style={{ objectPosition: focusOf(p.src) }}
                  />
                  <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#15172a]/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {p.caption && (
                    <span className="absolute left-4 right-12 bottom-3 text-left text-white text-sm font-medium leading-snug opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                      {p.caption}
                    </span>
                  )}
                  <span aria-hidden="true" className="absolute right-3 bottom-3 grid place-items-center w-8 h-8 rounded-full bg-white/90 text-[#15172a] opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500">
                    <Expand size={15} />
                  </span>
                </motion.button>
              </Reveal>
            );
          })}
        </div>
      </div>

      <Lightbox index={open} count={photos.length} onClose={close} onStep={step} label={title}>
        {cur && (
          <figure className="flex flex-col items-center max-w-full max-h-full">
            <motion.img
              key={cur.src}
              src={cur.src}
              alt={cur.alt}
              className="max-w-[min(92vw,1400px)] max-h-[78vh] object-contain rounded-xl shadow-2xl"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35 }}
            />
            {cur.caption && <figcaption className="text-white/80 mt-4 text-center">{cur.caption}</figcaption>}
          </figure>
        )}
      </Lightbox>
    </section>
  );
}
