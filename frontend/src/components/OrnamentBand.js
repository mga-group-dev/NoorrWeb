import Ornament from "./Ornament";
import { Reveal } from "./ui/Reveal";

// A warm gradient band carrying the ornament and one line, used as a pause between sections.
export default function OrnamentBand({ children }) {
  return (
    <section className="band-sun py-16 md:py-20 text-center" aria-label="Motto">
      <Reveal className="wrap flex flex-col items-center">
        <Ornament className="w-40 md:w-52 text-white" />
        {children && <p className="f-display text-[#15172a] text-[clamp(2rem,4vw,3.4rem)] leading-tight mt-6 max-w-[22ch]">{children}</p>}
      </Reveal>
    </section>
  );
}
