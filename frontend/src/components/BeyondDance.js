import { useState } from "react";
import { MaskIn } from "./ui/Reveal";
import { BEYOND } from "@/content";

// Accordion strips: the hovered or tapped strip opens to show its frame and caption.
export default function BeyondDance() {
  const [open, setOpen] = useState(0);
  return (
    <section className="stage-light py-24 md:py-36" aria-label="Media and modeling">
      <div className="wrap">
        <h2 className="f-display text-[clamp(2.6rem,5.5vw,5rem)] leading-[0.92]">
          <MaskIn>Beyond dance</MaskIn>
        </h2>
        <p className="text-lg md:text-xl text-[#6B7080] mt-6">Media, modeling and reality show leadership.</p>

        <div className="mt-12 flex flex-col md:flex-row gap-3 md:h-[520px]">
          {BEYOND.map((b, i) => {
            const isOpen = open === i;
            return (
              <button
                key={b.title}
                onMouseEnter={() => setOpen(i)}
                onFocus={() => setOpen(i)}
                onClick={() => setOpen(i)}
                aria-expanded={isOpen}
                className={`relative overflow-hidden rounded-2xl text-left transition-[flex-grow,height] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isOpen ? "md:grow-[4] h-[340px]" : "md:grow h-[90px]"
                } md:h-auto basis-0 grow`}
              >
                <img src={b.img} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                <div className={`absolute inset-0 transition-colors duration-700 ${isOpen ? "bg-gradient-to-t from-[#FFFFFF] via-transparent to-transparent" : "bg-[#FFFFFF]/65"}`} />
                <span className={`absolute left-5 right-5 bottom-5 text-xl md:text-2xl font-semibold leading-snug transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0 md:opacity-0"}`}>
                  {b.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
