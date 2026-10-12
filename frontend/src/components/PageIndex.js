import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal, Frame } from "./ui/Reveal";
import Ornament from "./Ornament";

const PAGES = [
  { href: "/about", title: "About Noor", line: "His story, the years with Ganesh Acharya and the eight styles he teaches.", img: "/media/stage-act.webp" },
  { href: "/films", title: "Films and screen", line: "60+ movies and video albums, the stars and the character work.", img: "/media/film-ramleela.webp" },
  { href: "/stage", title: "Stage and judging", line: "Workshops, annual days, corporate shows, competitions and awards.", img: "/media/workshop-3.webp" },
  { href: "/programs", title: "School programs", line: "Year-long classes, annual days, festivals and competition training.", img: "/media/annual-7.webp" },
];

// Four doors into the rest of the site.
export default function PageIndex() {
  return (
    <section className="sec-dawn py-24 md:py-32" aria-label="Explore">
      <div className="wrap">
        <div className="text-center">
          <Ornament className="w-28 text-[#f08a4b] mx-auto mb-5" />
          <p className="kicker">Explore</p>
          <h2 className="f-display text-[clamp(2.4rem,4.4vw,4rem)] leading-[1.02] mt-4">There&apos;s more to see</h2>
        </div>
        <ul className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {PAGES.map((p, i) => (
            <li key={p.href}>
              <Reveal delay={(i % 2) * 0.08}>
                <Link href={p.href} className="group block card-grad p-3 pb-6 transition-transform duration-500 hover:-translate-y-1">
                  <Frame src={p.img} className="aspect-[16/10] !rounded-[16px]" />
                  <span className="flex items-start justify-between gap-6 mt-5 px-3">
                    <span>
                      <span className="block f-display text-3xl leading-tight">{p.title}</span>
                      <span className="block text-[var(--body)] mt-1.5 max-w-[46ch]">{p.line}</span>
                    </span>
                    <ArrowUpRight className="shrink-0 mt-1 text-[var(--muted)] group-hover:text-[var(--fg)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" aria-hidden="true" />
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
