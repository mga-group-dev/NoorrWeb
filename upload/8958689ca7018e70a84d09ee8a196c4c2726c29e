"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Split, { Pairs, Point } from "./Split";
import { VideoFigure } from "./VideoReel";
import {
  M,
  ABOUT_CUTOUT,
  CREDITS,
  SCREENED,
  CHARACTERS,
  STAGE_CHAPTERS,
  EIGHT_COUNT,
  JUDGING,
  AWARDS,
  KANTARA_VIDEO,
  CIDCO_VIDEO,
  STYLES,
  focusOf,
  srcSetOf,
  ratioOf,
} from "@/content";

// Sections are shared by several pages. Each page passes `light` and `flip` so tones and photo sides alternate.
// Every copy line restates facts already in content.js; nothing is invented.

export function AboutStory(tone) {
  return (
      <Split {...tone} kicker="About Noorr" title="From film sets to school stages" cutout={ABOUT_CUTOUT} alt="Portrait of Noorr Khan">
        <p>
          Noorr Khan is a choreographer and celebrity trainer from Navi Mumbai. For more than ten years he has danced and assisted
          on Bollywood sets with several leading choreographers. He is just as at home in a school hall, teaching students their
          next routine.
        </p>
        <p>
          He started NR Institute of Dance around one simple idea: anyone can dance. More than 55,000 students have tested that
          idea with him, in workshops, classrooms and online sessions.
        </p>
        {/* The styles sit inside the sentence; each name gets a soft peach highlight, lyrical hip-hop the strongest. */}
        <p>
          He has worked on more than 60 films and video albums, and moves comfortably across eight styles:{" "}
          {STYLES.map((s, i) => (
            <span key={s}>
              <span
                className={`font-medium text-[var(--fg)] px-[3px] -mx-[1px] rounded-[4px] box-decoration-clone ${
                  i === 0 ? "bg-[#f08a4b]/25" : "bg-[linear-gradient(transparent_58%,rgba(240,138,75,0.22)_58%)]"
                }`}
              >
                {s.toLowerCase().replace("bolly", "Bolly")}
              </span>
              {i < STYLES.length - 2 ? ", " : i === STYLES.length - 2 ? " and " : "."}
            </span>
          ))}{" "}
          Lyrical hip-hop is his home ground.
        </p>
      </Split>
  );
}


// The photo side of a section whose picture follows a choice (Styles, Films): crossfades to the chosen photo,
// with its name in script and a short line over the bottom.
// `contain` shows the whole photo over a blurred copy of itself; very wide shots get this automatically.
function SwapFigure({ src, alt, title, line, contain = false }) {
  const reduce = useReducedMotion();
  // The frame is 4:5, so any landscape photo would lose more than a third of itself; show those whole instead.
  contain = contain || ratioOf(src) > 1.15;
  return (
    <div className="card-grad p-3">
      <div className="relative aspect-[4/5] max-h-[720px] w-full overflow-hidden rounded-[16px] bg-[#15172a]">
        {contain && (
          <img key={`bg-${src}`} src={src} srcSet={srcSetOf(src)} sizes="50vw" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover blur-2xl scale-125 opacity-70" />
        )}
        <AnimatePresence initial={false}>
          <motion.img
            key={src}
            src={src}
            srcSet={srcSetOf(src)}
            sizes="(max-width: 1024px) 100vw, 50vw"
            alt={alt}
            className={`absolute inset-0 w-full h-full ${contain ? "object-contain pb-16" : "object-cover"}`}
            style={contain ? undefined : { objectPosition: focusOf(src) }}
            initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0.2 : 0.8, ease: [0.22, 1, 0.36, 1] }}
          />
        </AnimatePresence>
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#15172a]/80 to-transparent" />
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={title}
            className="absolute left-5 right-5 bottom-5 text-white"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45 }}
          >
            <p className="f-script text-[clamp(2rem,4vw,3rem)] leading-none text-[#ffd2b0]">{title}</p>
            <p className="text-white/85 mt-2">{line}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

// A label/detail list where each row is a button; the chosen row is highlighted. Pairs with SwapFigure.
function PickList({ rows, active, onPick, label }) {
  return (
    <div className="card-grad px-2 py-2 !mt-9 text-base" role="group" aria-label={label}>
      {rows.map(([a, b], n) => (
        <button
          key={`${a}|${b}`}
          type="button"
          aria-pressed={n === active}
          onClick={() => onPick(n)}
          className={`group w-full flex items-center justify-between gap-4 rounded-xl px-4 py-3 text-left transition-colors ${
            n === active ? "bg-[#15172A] text-white" : "hover:bg-white/80"
          }`}
        >
          <span className="font-medium">{a}</span>
          <span className={`flex items-center gap-2 text-right ${n === active ? "text-white/75" : "text-[var(--muted)]"}`}>
            {b}
            <span aria-hidden="true" className={`transition-transform ${n === active ? "translate-x-0.5" : "opacity-0 group-hover:opacity-100"}`}>
              &rarr;
            </span>
          </span>
        </button>
      ))}
    </div>
  );
}

// Credits as a list of buttons; picking one shows that film's photo beside it.
export function Films(tone) {
  const [i, setI] = useState(0);
  const cur = CREDITS[i];
  return (
      <Split {...tone}
        kicker="Bollywood film experience"
        title="60+ movies and video albums"
        figure={<SwapFigure src={cur.img} alt={`Noorr Khan: ${cur.star}, ${cur.work}`} title={cur.star} line={cur.work} />}
      >
        <p>
          Sometimes Noorr is in the frame as a dancer, sometimes behind the camera helping set the steps. Either way, he has
          shared sets and stages with some of the biggest names in Hindi cinema, from Bodyguard and Ramleela to Brahmastra.
        </p>
        <PickList rows={CREDITS.map((c) => [c.star, c.work])} active={i} onPick={setI} label="Pick a film to see it" />
      </Split>
  );
}

export function Stars(tone) {
  return (
      <Split {...tone} kicker="Film and television" title="Screened with the stars" img={M("star-01")} alt="Noorr Khan with a film star">
        <p>
          Film sets, award nights and TV studios have put Noorr alongside a long list of familiar faces, from Welcome Back and
          Zanjeer to Naagin 3, MTV Roadies X2 and Bigg Boss 19.
        </p>
        <Pairs rows={SCREENED} />
      </Split>
  );
}

export function Characters(tone) {
  return (
      <Split {...tone} kicker="On camera" title="In character" figure={<VideoFigure video={KANTARA_VIDEO} />}>
        {CHARACTERS.map((c) => (
          <Point key={c.key} title={c.title}>
            {c.body}
          </Point>
        ))}
        <Point title="Shooting diaries">
          Real moments from film shoots: being part of the performance that builds the final frame.
        </Point>
      </Split>
  );
}

export function StageWork(tone) {
  return (
      <Split {...tone}

        kicker="Live work"
        title="On every kind of stage"
        img={M("stage-wide")}
        alt="Noorr Khan leading a full room through a routine on stage"
      >
        {STAGE_CHAPTERS.map((ch) => (
          <Point key={ch.title} title={ch.title}>
            {ch.body}
          </Point>
        ))}
      </Split>
  );
}

// Each style is a button; picking one swaps the photo beside it (pairings live in EIGHT_COUNT).
export function Styles(tone) {
  const [i, setI] = useState(0);
  const cur = EIGHT_COUNT[i];
  const figure = <SwapFigure src={cur.img} alt={`Noorr Khan: ${cur.style}`} title={cur.style} line={cur.line} />;
  return (
      <Split {...tone} kicker="Eight styles" title="Styles and expertise" figure={figure}>
        <p>
          Lyrical hip-hop is where Noorr feels most at home. Knowing eight styles means he can pick the right one for the room,
          whether that is a film song, a school stage, a competition or an office party.
        </p>
        <div className="flex flex-wrap gap-x-3 gap-y-4 !mt-8" role="group" aria-label="Pick a style to see it">
          {EIGHT_COUNT.map((c, n) => (
            <button
              key={c.style}
              type="button"
              aria-pressed={n === i}
              onClick={() => setI(n)}
              className={`rounded-full px-4 py-1.5 text-base border transition-all duration-300 active:scale-95 ${
                n === i
                  ? "bg-[#15172A] border-[#15172A] text-white shadow-[0_8px_24px_-10px_rgba(21,23,42,0.6)]"
                  : "chip-grad text-[var(--fg)] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_-12px_rgba(242,106,27,0.6)]"
              }`}
            >
              {c.style}
            </button>
          ))}
        </div>
      </Split>
  );
}

// Media work: the CIDCO homes ad film, played from the frame beside the copy.
export function Beyond(tone) {
  return (
      <Split {...tone} kicker="Media and modeling" title="Beyond dance" figure={<VideoFigure video={CIDCO_VIDEO} aspect="aspect-video" />}>
        <p>
          Dance opened other doors too. In November 2022 Noorr was the lead model in CIDCO&apos;s ad film for its new flats in
          Ghansoli, Navi Mumbai, bringing the idea of a first home to life on camera.
        </p>
        <Point title="Lead model, CIDCO homes ad film">Ghansoli, Navi Mumbai, 2022. Tap the video to watch it with sound.</Point>
      </Split>
  );
}

export function Judge(tone) {
  const [colleges, schools, communities, cities] = JUDGING;
  return (
      <Split {...tone} kicker="Judge and jury" title="Expert judge and mentor" img="/media/drive/img-e2135.webp" alt="Noorr Khan judging a dance competition">
        <p>
          Colleges, schools and housing societies invite Noorr to judge their dance competitions, and the newspapers have covered
          his work on the panel.
        </p>
        <Point title={colleges.group}>{colleges.items.join(", ")}.</Point>
        <Point title={schools.group}>{schools.items.join("; ")}.</Point>
        <Point title={communities.group}>{communities.items.join(", ")}.</Point>
        <Point title={cities.group}>{cities.items.join(", ")}.</Point>
      </Split>
  );
}

// Each award shows its photo when picked; the trophy is shown whole rather than cropped.
export function Awards(tone) {
  const [i, setI] = useState(0);
  const cur = AWARDS[i];
  return (
      <Split {...tone} kicker="Recognition" title="Awards and recognition" figure={<SwapFigure src={cur.img} alt={`Noorr Khan: ${cur.title}`} title={cur.title} line={cur.by} contain={cur.contain} />}>
        <p>
          In 2017, Bombay&apos;s Dancing Fever named Noorr Best Choreographer, and actor Mukesh Khanna has honoured him on stage.
          He has been a chief guest at a fashion walk and recognised by Humanity First Foundation for his social work.
        </p>
        <PickList rows={AWARDS.map((a) => [a.title, a.by])} active={i} onPick={setI} label="Pick an award to see it" />
      </Split>
  );
}
