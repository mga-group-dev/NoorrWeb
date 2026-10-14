import { MaskLine, Reveal, Frame } from "./ui/Reveal";
import Ornament from "./Ornament";
import { isPortrait } from "@/content";

// Opening block for inner pages: centered title over a lighter sunrise, then one wide frame.
export default function PageHeader({ kicker, title, img, alt, focus, children }) {
  return (
    <header className="relative overflow-hidden pb-8">
      <div className="sunrise sun-drift absolute inset-x-0 top-0 h-[620px] opacity-70" aria-hidden="true" />
      <div className="relative wrap pt-36 md:pt-44 text-center flex flex-col items-center">
        <MaskLine>
          <Ornament className="w-32 text-[#f08a4b]" />
        </MaskLine>
        <MaskLine delay={0.1} className="mt-5">
          <span className="eyebrow">{kicker}</span>
        </MaskLine>
        <h1 className="f-display text-[clamp(2.8rem,6vw,5.4rem)] leading-[1] mt-5 max-w-[18ch]">
          <MaskLine delay={0.2}>{title}</MaskLine>
        </h1>
        <MaskLine delay={0.3}>
          <p className="text-lg md:text-xl text-[var(--body)] leading-relaxed mt-6 max-w-[58ch] mx-auto">{children}</p>
        </MaskLine>
      </div>
      {/* Without `img` the header is text only (used by /corporate). */}
      {img && (
        <Reveal delay={0.2} className="relative wrap mt-14">
          {/* A tall photo would be cropped to a blurry strip in this wide frame, so it is shown whole over a soft backdrop. */}
          <Frame src={img} alt={alt} priority focus={focus} contain={isPortrait(img)} sizes="100vw" className="aspect-[4/3] md:aspect-[21/9]" />
        </Reveal>
      )}
    </header>
  );
}
