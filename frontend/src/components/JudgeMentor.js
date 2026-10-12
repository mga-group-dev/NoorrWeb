import { MaskIn, Reveal } from "./ui/Reveal";
import { JUDGING, JUDGE_PHOTOS, NEWSPAPER, AWARDS } from "@/content";

function Group({ g }) {
  return (
    <div className="h-full rounded-2xl bg-[#ffffff] border border-black/10 p-6">
      <h3 className="f-display text-3xl text-[#15172A]">{g.group}</h3>
      <ul className="mt-4 space-y-1.5 text-[#474B5C] leading-snug">
        {g.items.map((it) => (
          <li key={it}>{it}</li>
        ))}
      </ul>
    </div>
  );
}

function Photo({ src, className = "" }) {
  return (
    <div className={`overflow-hidden rounded-2xl min-h-[200px] ${className}`}>
      <img src={src} alt="Noor Khan judging a dance competition" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
    </div>
  );
}

export default function JudgeMentor() {
  const [colleges, schools, communities, cities] = JUDGING;
  return (
    <section className="bg-[#FFFFFF] py-24 md:py-36" aria-label="Judge and mentor">
      <div className="wrap">
        <h2 className="f-display text-[clamp(2.6rem,5.5vw,5rem)] leading-[0.92]">
          <MaskIn>Expert judge</MaskIn>
          <MaskIn delay={0.08}>and mentor</MaskIn>
        </h2>
        <p className="text-lg md:text-xl text-[#6B7080] mt-6 max-w-[50ch]">
          Judge and jury for inter-college, school and offline reality dance competitions, with features in the newspapers.
        </p>

        {/* Bento: 4 lists, 1 newspaper, 4 photos */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-4 md:auto-rows-[220px] gap-3">
          <Reveal className="md:col-span-2 md:row-span-2">
            <div className="h-full min-h-[300px] rounded-2xl overflow-hidden bg-[#15172A] p-3">
              <img src={NEWSPAPER} alt="Newspaper feature on Noor Khan judging a college festival" loading="lazy" className="w-full h-full object-contain" />
            </div>
          </Reveal>
          <Reveal className="md:row-span-2"><Group g={schools} /></Reveal>
          <Reveal><Photo src={JUDGE_PHOTOS[0]} className="h-full" /></Reveal>
          <Reveal><Group g={colleges} /></Reveal>
          <Reveal><Photo src={JUDGE_PHOTOS[1]} className="h-full" /></Reveal>
          <Reveal><Group g={communities} /></Reveal>
          <Reveal className="md:col-span-2"><Photo src={JUDGE_PHOTOS[2]} className="h-full" /></Reveal>
          <Reveal><Group g={cities} /></Reveal>
        </div>

        <h3 className="f-display text-[clamp(2.4rem,5vw,4.5rem)] leading-[0.95] mt-28">Awards and recognition</h3>
      </div>

      <div className="mt-10 flex gap-4 overflow-x-auto snap-x snap-mandatory px-5 md:px-16 pb-4 [scrollbar-width:none]">
        {AWARDS.map((a, i) => (
          <Reveal key={a.title} delay={i * 0.06} className="snap-start shrink-0 w-[78vw] sm:w-[340px]">
            <figure>
              <div className="aspect-[4/5] overflow-hidden rounded-2xl">
                <img src={a.img} alt={a.title} loading="lazy" className="w-full h-full object-cover" />
              </div>
              <figcaption className="mt-4">
                <p className="text-xl font-semibold">{a.title}</p>
                <p className="text-[#6B7080]">{a.by}</p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
