import Link from "next/link";
import { ArrowUpRight, Play } from "lucide-react";
import { Reveal, MaskLine } from "./ui/Reveal";
import Ornament from "./Ornament";
import { VideoFigure } from "./VideoReel";
import SmartImg from "./ui/SmartImg";
import { M, STATS, KANTARA_BTS, KANTARA_VIDEO, focusOf, srcSetOf } from "@/content";

function Shot({ src, alt, className = "", sizes = "40vw", focus }) {
  return (
    <div className={`overflow-hidden rounded-[20px] bg-[#15172a] ring-1 ring-black/5 shadow-[0_40px_80px_-35px_rgba(21,23,42,0.45)] ${className}`}>
      <SmartImg src={src} srcSet={srcSetOf(src)} sizes={sizes} alt={alt} decoding="async" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: focus || focusOf(src) }} />
    </div>
  );
}

// Opening of /stage: the site's sunrise backdrop with Noorr in a warm glow, two smaller shots around him, and the numbers below.
export function StageHero() {
  return (
    <header className="relative overflow-hidden pt-32 md:pt-40 pb-20 md:pb-28">
      <div className="sunrise sun-drift absolute inset-x-0 top-0 h-[620px] opacity-70" aria-hidden="true" />
      <div aria-hidden="true" className="absolute right-[-10%] top-[0%] w-[60vw] h-[60vw] max-w-[820px] max-h-[820px] rounded-full bg-[radial-gradient(circle,rgba(255,179,138,0.45),rgba(242,106,27,0.12)_40%,transparent_70%)] blur-2xl" />

      <div className="relative wrap grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-14 lg:gap-10 items-center">
        <div>
          <MaskLine>
            <Ornament className="w-28 text-[#f08a4b]" />
          </MaskLine>
          <MaskLine delay={0.1} className="mt-5">
            <span className="kicker">Live on stage</span>
          </MaskLine>
          <h1 className="f-display text-[clamp(3rem,7vw,6.2rem)] leading-[0.95] mt-5">
            <MaskLine delay={0.2}>Noorr,</MaskLine>
            <MaskLine delay={0.3}>
              <span className="text-grad">in the spotlight</span>
            </MaskLine>
          </h1>
          <MaskLine delay={0.4}>
            <p className="text-lg md:text-xl text-[var(--body)] leading-relaxed mt-7 max-w-[48ch]">
              Concert stages, college fests, annual days and workshops across India. When the music starts, he is the one the
              whole room follows.
            </p>
          </MaskLine>
          <Reveal delay={0.5} className="flex flex-wrap gap-3 mt-9">
            <Link href="/contact" className="btn-primary">
              Book Noorr
            </Link>
            <a href="#stage-videos" className="inline-flex items-center gap-2 rounded-full border border-[#15172a]/20 bg-white/70 backdrop-blur px-6 py-3 font-semibold hover:bg-white transition-colors">
              <Play size={16} fill="currentColor" /> Watch him perform
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="relative h-[520px] md:h-[620px]">
          <Shot src={M("stage-pose")} alt="Noorr Khan waving to the crowd on stage" focus="50% 30%" sizes="(max-width: 1024px) 70vw, 30vw" className="absolute left-[18%] right-[14%] top-0 bottom-[8%]" />
          <Shot src={M("drive/img-8050")} alt="Noorr Khan on a concert stage before the show" sizes="200px" className="absolute right-0 top-[8%] w-[32%] aspect-[3/4] rotate-[4deg]" />
          <Shot src={M("drive/sps-5016")} alt="Noorr Khan dancing at Pehchaan, RJ College" sizes="220px" className="absolute left-0 bottom-0 w-[38%] aspect-[4/5] -rotate-[5deg]" />
        </Reveal>
      </div>

      <div className="relative wrap mt-16 md:mt-20">
        <div className="rule-grad" />
        <dl className="grid grid-cols-3 gap-6 pt-8">
          {STATS.map((s) => (
            <div key={s.label}>
              <dt className="sr-only">{s.label}</dt>
              <dd className="f-display text-[clamp(2.2rem,4.5vw,3.6rem)] leading-none text-[var(--fg)] tabular">
                {s.value}
                {s.suffix}
              </dd>
              <dd className="text-sm md:text-base text-[var(--muted)] mt-2">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </header>
  );
}

// The making of the Kantara character look: the clip on one side, the behind-the-scenes photos on the other.
export function KantaraMaking() {
  return (
    <section className="sec-peach py-24 md:py-32" aria-label="Making of the Kantara look">
      <div className="wrap grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <Reveal>
          <VideoFigure video={{ ...KANTARA_VIDEO, title: "Kantara: the making", line: "Watch the look come together" }} />
        </Reveal>
        <Reveal delay={0.08}>
          <Ornament className="w-24 text-[#f08a4b] mb-5" />
          <p className="kicker">Behind the scenes</p>
          <h2 className="f-display text-[clamp(2.4rem,4.4vw,4rem)] leading-[1.02] mt-4 max-w-[16ch]">The making of Kantara</h2>
          <p className="mt-6 text-lg text-[var(--body)] leading-relaxed max-w-[54ch]">
            For Vijay Verma&apos;s upcoming project, Noorr stepped into a full Kantara look. Hours of face paint, the crown, the
            garlands, and then carrying a whole culture in the body once the camera rolls.
          </p>
          <ul className="grid grid-cols-2 gap-3 mt-9">
            {KANTARA_BTS.map((p, i) => (
              <li key={p.src} className="list-none">
                <Reveal delay={0.1 + i * 0.06} y={20} className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#15172a]">
                  <SmartImg src={p.src} srcSet={srcSetOf(p.src)} sizes="(max-width: 1024px) 50vw, 22vw" alt={p.alt} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]" style={{ objectPosition: focusOf(p.src) }} />
                  <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#0b0c16]/80 to-transparent" />
                  <span className="absolute left-3 bottom-3 text-white text-sm font-medium">{p.caption}</span>
                </Reveal>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

// Judging and awards have their own pages now, so /stage points to them instead of repeating them.
export function MoreFromStage() {
  const cards = [
    { href: "/judge-jury", title: "Judge and jury", line: "Colleges, schools and communities that put him on the panel.", img: M("drive/488204111-9579963062063528-615881067786528011-n") },
    { href: "/awards", title: "Awards and recognition", line: "Best Choreographer 2017, and honours on and off the stage.", img: M("drive/taluka-felicitation") },
  ];
  return (
    <section className="sec-peach py-20 md:py-28" aria-label="More from the stage">
      <ul className="wrap grid grid-cols-1 md:grid-cols-2 gap-5">
        {cards.map((c, i) => (
          <li key={c.href} className="list-none">
            <Reveal delay={i * 0.08}>
              <Link href={c.href} className="group relative block h-[320px] overflow-hidden rounded-[22px] bg-[#15172a]">
                <SmartImg src={c.img} srcSet={srcSetOf(c.img)} sizes="(max-width: 768px) 100vw, 50vw" alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.4s] group-hover:scale-[1.06]" style={{ objectPosition: focusOf(c.img) }} />
                <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#0b0c16]/95 via-[#0b0c16]/55 md:from-[#0b0c16]/90 md:via-[#0b0c16]/30 to-transparent" />
                <span className="absolute inset-x-0 bottom-0 p-7 flex items-end justify-between gap-6 text-white">
                  <span>
                    <span className="block f-display text-[2.2rem] leading-tight">{c.title}</span>
                    <span className="block text-white/80 mt-1.5">{c.line}</span>
                  </span>
                  <span aria-hidden="true" className="shrink-0 grid place-items-center w-12 h-12 rounded-full bg-white text-[#15172a] transition-transform duration-500 group-hover:scale-110">
                    <ArrowUpRight size={20} />
                  </span>
                </span>
              </Link>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
