"use client";

import { useCallback, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Reveal, MaskIn } from "./ui/Reveal";
import Lightbox from "./Lightbox";

// One video card: shows the poster, plays a silent preview on hover (desktop), and opens the full clip with sound on click.
function Card({ v, big, onOpen }) {
  const ref = useRef(null);
  const preview = (on) => {
    const el = ref.current;
    if (!el || !window.matchMedia("(hover: hover)").matches) return;
    if (on) el.play().catch(() => {});
    // load() rewinds and brings the poster back; a paused video at 0:00 would otherwise show its first frame,
    // which is black for clips that fade in.
    else { el.pause(); el.load(); }
  };
  return (
    <motion.button
      type="button"
      onClick={onOpen}
      onMouseEnter={() => preview(true)}
      onMouseLeave={() => preview(false)}
      aria-label={`Play video: ${v.title}`}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="group relative block w-full h-full overflow-hidden rounded-2xl bg-[#15172a] text-left shadow-[0_24px_50px_-28px_rgba(21,23,42,0.7)] ring-1 ring-black/5"
    >
      <video
        ref={ref}
        src={v.src}
        poster={v.poster}
        muted
        loop
        playsInline
        preload="none"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
      />
      <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#0b0c16]/95 via-[#0b0c16]/35 md:from-[#0b0c16]/85 md:via-[#0b0c16]/10 to-transparent" />
      <span
        aria-hidden="true"
        className={`absolute grid place-items-center rounded-full bg-white/90 text-[#15172a] shadow-[0_10px_40px_rgba(0,0,0,0.35)] transition-all duration-500 group-hover:scale-110 group-hover:bg-white ${big ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20" : "top-3 left-3 w-10 h-10 md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-14 md:h-14"}`}
      >
        <span className="absolute inset-0 rounded-full bg-white/60 animate-ping opacity-0 group-hover:opacity-40" />
        <Play size={big ? 26 : 18} className="ml-0.5 md:ml-1" fill="currentColor" />
      </span>
      {v.length && (
        <span className="absolute top-3 right-3 rounded-full bg-black/55 backdrop-blur px-2.5 py-1 text-xs text-white tabular">{v.length}</span>
      )}
      <span className="absolute left-3 right-3 bottom-3 md:left-5 md:right-5 md:bottom-4 text-white">
        <span className={`block f-display leading-tight ${big ? "text-[clamp(1.6rem,2.6vw,2.4rem)]" : "text-base md:text-xl"}`}>{v.title}</span>
        {v.line && <span className="block text-white/75 text-xs md:text-sm mt-1">{v.line}</span>}
      </span>
    </motion.button>
  );
}

// A single clip as the photo side of a Split section (same frame as the photos), opening in the lightbox.
export function VideoFigure({ video, aspect = "aspect-[4/5]" }) {
  const [open, setOpen] = useState(null);
  const close = useCallback(() => setOpen(null), []);
  return (
    <div className="card-grad p-3">
      <div className={`relative ${aspect} max-h-[720px] w-full`}>
        <Card v={video} big onOpen={() => setOpen(0)} />
      </div>
      <Lightbox index={open} count={1} onClose={close} onStep={() => {}} label={video.title}>
        {open !== null && (
          <video src={video.src} poster={video.poster} controls autoPlay playsInline className="max-w-[92vw] max-h-[82vh] rounded-xl shadow-2xl bg-black" />
        )}
      </Lightbox>
    </div>
  );
}

// A grid of clips with the first one featured large. `vertical` clips (phone recordings) get a tall card.
export default function VideoReel({ kicker, title, lead, videos, light = false, id = "videos" }) {
  const [open, setOpen] = useState(null);
  const close = useCallback(() => setOpen(null), []);
  const step = useCallback((d) => setOpen((i) => (i === null ? i : (i + d + videos.length) % videos.length)), [videos.length]);
  const cur = open === null ? null : videos[open];

  return (
    <section id={id} className={`${light ? "sec-sky" : "sec-dawn"} py-24 md:py-32`} aria-label={title}>
      <div className="wrap">
        <div className="max-w-[60ch]">
          {kicker && <p className="kicker">{kicker}</p>}
          <h2 className="f-display text-[clamp(2.4rem,4.4vw,4rem)] leading-[1.02] mt-4">
            <MaskIn>{title}</MaskIn>
          </h2>
          {lead && <p className="text-lg text-[var(--body)] leading-relaxed mt-5">{lead}</p>}
        </div>

        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 auto-rows-[220px] md:auto-rows-[260px] gap-3 md:gap-4 [grid-auto-flow:dense]">
          {videos.map((v, i) => {
            const big = i === 0;
            const span = big ? "col-span-2 row-span-2" : v.vertical ? "row-span-2" : "";
            return (
              <Reveal key={v.src} delay={(i % 4) * 0.06} y={24} className={span}>
                <Card v={v} big={big} onOpen={() => setOpen(i)} />
              </Reveal>
            );
          })}
        </div>
      </div>

      <Lightbox index={open} count={videos.length} onClose={close} onStep={step} label={title}>
        {cur && (
          <figure className="flex flex-col items-center max-w-full max-h-full">
            <video
              key={cur.src}
              src={cur.src}
              poster={cur.poster}
              controls
              autoPlay
              playsInline
              className="max-w-[min(92vw,1400px)] max-h-[78vh] rounded-xl shadow-2xl bg-black"
            />
            <figcaption className="text-white mt-4 text-center">
              <span className="f-display text-2xl">{cur.title}</span>
              {cur.line && <span className="block text-white/70 text-sm mt-1">{cur.line}</span>}
            </figcaption>
          </figure>
        )}
      </Lightbox>
    </section>
  );
}
