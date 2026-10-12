import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal, Frame } from "./ui/Reveal";
import Ornament from "./Ornament";
import { STAGE_CHAPTERS, JOURNEY, CREDITS, STYLES, AWARDS } from "@/content";

// Shared centred heading: ornament, small label, display title, optional lead.
function Head({ kicker, title, children }) {
  return (
    <Reveal className="text-center flex flex-col items-center">
      <Ornament className="w-28 text-[#f08a4b]" />
      <p className="kicker mt-5">{kicker}</p>
      <h2 className="f-display text-[clamp(2.4rem,4.6vw,4.2rem)] leading-[1.02] mt-4 max-w-[18ch]">{title}</h2>
      {children && <p className="text-lg text-[var(--body)] mt-5 max-w-[56ch]">{children}</p>}
    </Reveal>
  );
}

// Four kinds of work as a bento grid: one large card, three smaller ones.
export function WhatHeDoes() {
  const [first, ...rest] = STAGE_CHAPTERS;
  return (
    <section className="sec-sky py-24 md:py-32" aria-label="What Noor does">
      <div className="wrap">
        <Head kicker="What Noor does" title="One choreographer, every kind of stage">
          From a classroom of first-timers to a corporate gala, the routine is built for the room in front of him.
        </Head>
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-5">
          <Reveal className="card-grad p-3 flex flex-col">
            <Frame src={first.imgs[0]} className="aspect-[4/3] lg:aspect-auto lg:flex-1 lg:min-h-[420px] !rounded-[16px]" />
            <div className="px-4 pt-6 pb-4">
              <h3 className="f-display text-3xl">{first.title}</h3>
              <p className="text-[var(--body)] mt-2 max-w-[52ch]">{first.body}</p>
            </div>
          </Reveal>
          <div className="grid gap-5">
            {rest.map((c, i) => (
              <Reveal key={c.title} delay={0.08 * (i + 1)} className="card-grad p-3 grid grid-cols-[120px_1fr] sm:grid-cols-[180px_1fr] gap-5 items-center">
                <Frame src={c.imgs[0]} className="aspect-square !rounded-[14px]" />
                <div className="pr-3">
                  <h3 className="f-display text-2xl leading-tight">{c.title}</h3>
                  <p className="text-[var(--body)] text-[0.95rem] mt-1.5 line-clamp-3">{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal className="text-center mt-10">
          <Link href="/stage" className="link-arrow">
            See the stage work <span aria-hidden="true">&rarr;</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

// The years with Ganesh Acharya, laid out along a gradient line.
export function JourneyLine() {
  return (
    <section className="sec-peach py-24 md:py-32 overflow-hidden" aria-label="Journey">
      <div className="wrap">
        <Head kicker="With Ganesh Acharya since 2011" title="A decade on Bollywood sets" />
        <ol className="relative mt-16 grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-5">
          <span aria-hidden="true" className="hidden md:block absolute left-0 right-0 top-[7px] rule-grad" />
          {JOURNEY.map((j, i) => (
            <li key={j.year} className="list-none relative">
              <Reveal delay={i * 0.08}>
                <span aria-hidden="true" className="block w-[15px] h-[15px] rounded-full bg-gradient-to-br from-[#f6a26c] to-[#8f9df0] ring-4 ring-white shadow" />
                <p className="f-display text-4xl text-grad mt-5 tabular">{j.year}</p>
                <p className="text-[var(--fg)] mt-1">{j.title}</p>
                <div className="card-grad p-2 mt-4">
                  <Frame src={j.img} alt={`Noor Khan, ${j.year}: ${j.title}`} className="aspect-[4/5] !rounded-[12px]" />
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

// Star credits drifting past like an end roll, then the eight styles.
export function StarsReel() {
  const row = [...CREDITS, ...CREDITS];
  return (
    <section className="sec-dawn py-24 md:py-32 overflow-hidden" aria-label="On screen">
      <div className="wrap">
        <Head kicker="On screen" title="Shared sets with the biggest names">
          Dancer, choreographer and assistant choreographer on 60+ films and video albums.
        </Head>
      </div>
      <ul className="sr-only">
        {CREDITS.map((c) => (
          <li key={c.star}>
            {c.star}, {c.work}
          </li>
        ))}
      </ul>
      <div aria-hidden="true" className="mt-14 [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
        <div className="reel-track gap-4">
          {row.map((c, i) => (
            <div key={i} className="card-grad shrink-0 w-[260px] p-2 pb-4">
              <div className="aspect-[4/3] overflow-hidden rounded-[14px]">
                <img src={c.img} alt="" loading="lazy" className="w-full h-full object-cover" />
              </div>
              <p className="f-display text-2xl mt-3 px-2">{c.star}</p>
              <p className="text-sm text-[var(--muted)] px-2">{c.work}</p>
            </div>
          ))}
        </div>
      </div>
      <Reveal className="wrap mt-16 flex flex-col items-center">
        <p className="kicker">Eight styles</p>
        <ul className="flex flex-wrap justify-center gap-2.5 mt-5 max-w-[760px]">
          {STYLES.map((s, i) => (
            <li key={s} className={`rounded-full px-4 py-1.5 ${i === 0 ? "bg-[#15172A] text-white" : "chip-grad"}`}>
              {s}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}

// Awards as a row of portrait cards.
export function Recognition() {
  return (
    <section className="sec-sky py-24 md:py-32" aria-label="Recognition">
      <div className="wrap">
        <Head kicker="Recognition" title="Awards and honours" />
        <ul className="mt-14 grid grid-cols-2 lg:grid-cols-5 gap-4">
          {AWARDS.map((a, i) => (
            <li key={a.title} className="list-none">
              <Reveal delay={i * 0.06} className="card-grad p-2 pb-4 h-full">
                <Frame src={a.img} alt={a.title} className="aspect-[4/5] !rounded-[14px]" />
                <p className="font-medium text-[var(--fg)] mt-3 px-2 leading-snug">{a.title}</p>
                <p className="text-sm text-[var(--muted)] px-2 mt-0.5">{a.by}</p>
              </Reveal>
            </li>
          ))}
        </ul>
        <Reveal className="text-center mt-10">
          <Link href="/stage" className="link-arrow">
            Judging and awards <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
