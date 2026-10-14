import { ArrowUpRight, MapPin, Star } from "lucide-react";
import { Reveal, MaskIn } from "./ui/Reveal";
import Ornament from "./Ornament";
import { VideoFigure } from "./VideoReel";
import SmartImg from "./ui/SmartImg";
import { focusOf, srcSetOf } from "@/content";

function Tile({ p, className = "", sizes }) {
  return (
    <div className={`group relative overflow-hidden rounded-[18px] bg-[#15172a] ring-1 ring-black/5 shadow-[0_24px_50px_-30px_rgba(21,23,42,0.6)] ${className}`}>
      <SmartImg src={p.src} srcSet={srcSetOf(p.src)} sizes={sizes} alt={p.alt} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-[1.06]" style={{ objectPosition: focusOf(p.src) }} />
      {p.caption && (
        <>
          <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#0b0c16]/75 via-transparent to-transparent" />
          <span className="absolute left-4 right-4 bottom-3 text-white text-sm font-medium">{p.caption}</span>
        </>
      )}
    </div>
  );
}

// A featured college: badge, name and place, a short story with highlights, and either a photo mosaic or a video.
// Without photos or video it falls back to a single card with a link (used until a college's media arrives).
export default function CollegeSpotlight({ badge, name, place, lead, points = [], photos = [], video, link, light = false }) {
  const [a, b, c, d, e] = photos;
  return (
    <section className={`${light ? "sec-sky" : "sec-peach"} py-24 md:py-32`} aria-label={name}>
      <div className="wrap">
        <Reveal className="flex flex-wrap items-center gap-3">
          {badge && (
            <span className="inline-flex items-center gap-2 rounded-full bg-white/85 backdrop-blur px-4 py-2 text-sm font-semibold text-[var(--fg)] ring-1 ring-black/5 shadow-[0_10px_30px_-15px_rgba(242,106,27,0.6)]">
              <Star size={15} className="text-[var(--accent)]" fill="currentColor" aria-hidden="true" /> {badge}
            </span>
          )}
          <span className="inline-flex items-center gap-1.5 text-sm text-[var(--muted)]">
            <MapPin size={15} aria-hidden="true" /> {place}
          </span>
        </Reveal>
        <h2 className="f-display text-[clamp(2.4rem,4.8vw,4.4rem)] leading-[1.02] mt-5 max-w-[20ch]">
          <MaskIn>{name}</MaskIn>
        </h2>

        <div className={`mt-12 grid grid-cols-1 gap-10 lg:gap-14 items-start ${a || video ? "lg:grid-cols-[0.85fr_1.15fr]" : ""}`}>
          <Reveal delay={0.05} className={a || video ? "" : "card-grad p-8 md:p-10 max-w-[760px]"}>
            {!a && !video && <Ornament className="w-24 text-[#f08a4b] mb-5" />}
            <p className="text-lg text-[var(--body)] leading-relaxed">{lead}</p>
            {points.length > 0 && (
              <dl className="mt-8 space-y-4">
                {points.map(([k, v]) => (
                  <div key={k} className="flex items-baseline gap-4 border-t border-[color:var(--rule)] pt-4">
                    <dt className="f-display text-2xl text-grad shrink-0 min-w-[7.5rem]">{k}</dt>
                    <dd className="text-[var(--body)]">{v}</dd>
                  </div>
                ))}
              </dl>
            )}
            {link && (
              <a href={link.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 mt-8 font-semibold text-[var(--accent)] hover:text-[var(--fg)] transition-colors">
                {link.label} <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            )}
          </Reveal>

          {video && (
            <Reveal delay={0.1}>
              <VideoFigure video={video} aspect="aspect-video" />
            </Reveal>
          )}

          {/* Mosaic: one large photo, two stacked beside it, two along the bottom. */}
          {a && !video && (
            <Reveal delay={0.1} className="grid grid-cols-3 grid-rows-[repeat(3,minmax(0,1fr))] gap-3 h-[520px] md:h-[620px]">
              <Tile p={a} sizes="(max-width: 1024px) 66vw, 36vw" className="col-span-2 row-span-2" />
              {b && <Tile p={b} sizes="20vw" />}
              {c && <Tile p={c} sizes="20vw" />}
              {d && <Tile p={d} sizes="30vw" className={e ? "" : "col-span-3"} />}
              {e && <Tile p={e} sizes="40vw" className="col-span-2" />}
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
