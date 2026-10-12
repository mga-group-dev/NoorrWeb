import { Reveal } from "./ui/Reveal";
import { CHARACTERS } from "@/content";

// Two character looks side by side, each with its behind-the-scenes strip.
export default function Characters() {
  return (
    <section className="bg-[#FFFFFF] py-24 md:py-32" aria-label="Character features">
      <div className="wrap">
        <Reveal>
          <h2 className="f-display text-[clamp(2.6rem,5.5vw,5rem)] leading-[0.92]">In character</h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {CHARACTERS.map((c, i) => (
            <Reveal key={c.key} delay={i * 0.08}>
              <article className="surface p-3 h-full flex flex-col">
                <div className="photo aspect-[4/5]">
                  <img src={c.img} alt={c.title} loading="lazy" className="w-full h-full object-cover object-top" />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#FFFFFF] to-transparent" />
                  <h3 className="absolute left-6 bottom-5 right-6 f-display text-[clamp(2rem,3.6vw,3.2rem)] leading-[0.95]">{c.title}</h3>
                </div>
                <p className="text-[#474B5C] leading-relaxed px-3 pt-5">{c.body}</p>
                <div className="grid grid-cols-4 gap-2 p-3 mt-auto">
                  {c.bts.map((src) => (
                    <div key={src} className="photo aspect-square !rounded-lg">
                      <img src={src} alt="Behind the scenes" loading="lazy" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
