import Link from "next/link";
import { MaskLine } from "./ui/Reveal";
import HeroFrame from "./HeroFrame";
import Ornament from "./Ornament";
import { HERO } from "@/constants/testIds";

// Centered title over a sunrise wash, then one wide frame of Noor on stage, like the opening shot of a film.
export default function Hero() {
  return (
    <section data-testid={HERO.section} className="relative overflow-hidden" aria-label="Introduction">
      <div className="sunrise sun-drift absolute inset-x-0 top-0 h-[880px]" aria-hidden="true" />
      <div className="relative wrap pt-36 md:pt-44 text-center flex flex-col items-center">
        <MaskLine delay={0.05}>
          <Ornament className="w-36 md:w-44 text-white" />
        </MaskLine>
        <MaskLine delay={0.15} className="mt-6">
          <span className="eyebrow">Noor Khan · Choreographer and celebrity trainer</span>
        </MaskLine>
        <h1 className="f-display text-[clamp(3.4rem,8vw,7rem)] leading-[0.95] mt-6 text-[var(--fg)]">
          <span className="sr-only">Noor Khan: </span>
          <MaskLine delay={0.25}>
            Anyone can <span className="f-script text-[1.08em] px-1">dance</span>
          </MaskLine>
        </h1>
        <MaskLine delay={0.4}>
          <p className="text-lg md:text-xl text-[var(--body)] leading-relaxed mt-6 max-w-[52ch] mx-auto">
            Over a decade on Bollywood sets with Ganesh Acharya. Now bringing that same stage to schools, colleges and offices.
          </p>
        </MaskLine>
        <MaskLine delay={0.5}>
          <span className="flex flex-wrap justify-center gap-3 mt-9 pb-2">
            <Link href="/contact" data-testid={HERO.bookBtn} className="btn-primary">
              Book Noor
            </Link>
            <Link href="/about" data-testid={HERO.exploreBtn} className="btn-ghost">
              Meet Noor
            </Link>
          </span>
        </MaskLine>
      </div>

      <div className="relative wrap mt-16 md:mt-20">
        <HeroFrame src="/media/stage-pose.webp" alt="Noor Khan performing on stage" />
      </div>
    </section>
  );
}
