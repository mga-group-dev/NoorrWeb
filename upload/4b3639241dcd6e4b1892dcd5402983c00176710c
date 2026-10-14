import Link from "next/link";
import { MaskLine } from "./ui/Reveal";
import HeroPortraits from "./HeroPortraits";
import Ornament from "./Ornament";
import { HERO } from "@/constants/testIds";

// Title on the left and a rotating portrait of Noorr on the right, over a sunrise wash.
export default function Hero() {
  return (
    <section data-testid={HERO.section} className="relative overflow-hidden" aria-label="Introduction">
      <div className="sunrise sun-drift absolute inset-x-0 top-0 h-[880px]" aria-hidden="true" />
      <div className="relative wrap pt-32 md:pt-36 lg:pt-[84px] lg:min-h-[100svh] grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-10 items-center">
        <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
          <MaskLine delay={0.05}>
            <Ornament className="w-32 md:w-40 text-white" />
          </MaskLine>
          <h1 className="mt-5">
            <MaskLine delay={0.15} className="pb-[0.25em] -mb-[0.15em]">
              <span className="f-script block text-[clamp(3.6rem,7.2vw,7rem)] leading-[1.2] px-2 text-[#15172a] [text-shadow:0_2px_24px_rgba(255,255,255,0.6)]">
                Noorr Khan
              </span>
            </MaskLine>
          </h1>
          <MaskLine delay={0.25} className="mt-2">
            <span className="text-[0.8rem] sm:text-[0.85rem] md:text-[0.95rem] font-semibold uppercase tracking-[0.18em] sm:tracking-[0.22em] text-[#c2410c]">
              Choreographer &middot; <span className="whitespace-nowrap">Celebrity trainer</span>
            </span>
          </MaskLine>
          <MaskLine delay={0.42}>
            <p className="text-lg md:text-xl text-[var(--body)] leading-relaxed mt-6 max-w-[44ch] mx-auto lg:mx-0">
              A decade on Bollywood sets with leading choreographers, countless lavish stage performances and{" "}
              <strong className="font-semibold text-[var(--fg)]">55,000+ students</strong> trained. Now Noorr is ready to bring that same
              grand performance to your <strong className="font-semibold text-[var(--fg)]">corporate event</strong>, school or college.
            </p>
          </MaskLine>
          <MaskLine delay={0.5}>
            <span className="flex flex-wrap justify-center lg:justify-start gap-3 mt-9 pb-2">
              <Link href="/contact" data-testid={HERO.bookBtn} className="btn-primary">
                Book Noorr
              </Link>
              <Link href="/about" data-testid={HERO.exploreBtn} className="btn-ghost">
                Meet Noorr
              </Link>
            </span>
          </MaskLine>
        </div>
        <HeroPortraits />
      </div>
    </section>
  );
}
