import { Reveal } from "./ui/Reveal";
import { DIARIES } from "@/content";

export default function Gallery() {
  return (
    <section className="stage-light py-24 md:py-32" aria-label="Shooting diaries">
      <div className="wrap">
        <Reveal>
          <h2 className="f-display text-[clamp(2.6rem,5.5vw,5rem)] leading-[0.92]">Shooting diaries</h2>
          <p className="text-lg text-[#6B7080] mt-5 max-w-[48ch]">
            Real moments from film shoots. Being part of the performance that builds the final frame.
          </p>
        </Reveal>
        <div className="mt-12 columns-2 md:columns-3 gap-3 md:gap-4 [&>*]:mb-3 md:[&>*]:mb-4">
          {DIARIES.map((src, i) => (
            <Reveal key={src} delay={(i % 3) * 0.05} y={24}>
              <div className={`photo ${i % 3 === 1 ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
                <img src={src} alt="On set during a film shoot" loading="lazy" className="w-full h-full object-cover" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
