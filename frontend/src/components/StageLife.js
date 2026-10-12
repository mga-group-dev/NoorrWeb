import { Reveal } from "./ui/Reveal";
import { STAGE_CHAPTERS } from "@/content";

// Four kinds of stage work, each a layered card with a three-photo collage.
export default function StageLife() {
  return (
    <section id="stage" className="bg-[#FFFFFF] py-24 md:py-32">
      <div className="wrap">
        <Reveal>
          <h2 className="f-display text-[clamp(2.6rem,5.5vw,5rem)] leading-[0.92]">On every kind of stage</h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
          {STAGE_CHAPTERS.map((ch, i) => (
            <Reveal key={ch.title} delay={(i % 2) * 0.08}>
              <article className="surface p-3 h-full">
                <div className="grid grid-cols-3 grid-rows-2 gap-2 h-[300px] md:h-[340px]">
                  <div className="photo col-span-2 row-span-2 !rounded-xl">
                    <img src={ch.imgs[0]} alt={ch.title} loading="lazy" className="w-full h-full object-cover" />
                  </div>
                  <div className="photo !rounded-xl">
                    <img src={ch.imgs[1]} alt="" loading="lazy" className="w-full h-full object-cover" />
                  </div>
                  <div className="photo !rounded-xl">
                    <img src={ch.imgs[2]} alt="" loading="lazy" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="px-4 pt-6 pb-4">
                  <h3 className="f-display text-[clamp(1.8rem,3vw,2.6rem)] leading-none">{ch.title}</h3>
                  <p className="text-[#474B5C] leading-relaxed mt-3 max-w-[48ch]">{ch.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
