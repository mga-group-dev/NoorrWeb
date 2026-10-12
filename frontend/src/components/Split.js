import { Reveal, Frame } from "./ui/Reveal";
import Ornament from "./Ornament";

// The shared section: copy on one side, one tall frame on the other.
// `light` sections are white, the rest a faint warm grey; `flip` swaps the sides.
export default function Split({ id, kicker, title, img, alt, flip = false, light = false, action, children }) {
  return (
    <section id={id} className={`${light ? "sec-sky" : "sec-peach"} py-24 md:py-32`}>
      <div className="wrap grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <Reveal className={`w-full ${flip ? "lg:order-last" : ""}`}>
          <div className="card-grad p-3">
            <Frame src={img} alt={alt} className="aspect-[4/5] max-h-[720px] !rounded-[16px]" />
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <Ornament className="w-24 text-[#f08a4b] mb-5" />
          {kicker && <p className="kicker">{kicker}</p>}
          <h2 className="f-display text-[clamp(2.4rem,4.4vw,4rem)] leading-[1.02] mt-4 max-w-[16ch]">{title}</h2>
          <div className="mt-7 space-y-5 text-lg text-[var(--body)] leading-relaxed max-w-[56ch]">{children}</div>
          {action && <div className="mt-9">{action}</div>}
        </Reveal>
      </div>
    </section>
  );
}

// Label/detail list used for credits, stars and awards.
export function Pairs({ rows }) {
  return (
    <dl className="credits card-grad px-6 py-2 !mt-9 text-base">
      {rows.map(([a, b]) => (
        <div key={a}>
          <dt>{a}</dt>
          <dd>{b}</dd>
        </div>
      ))}
    </dl>
  );
}

// A short titled block of prose inside a split.
export function Point({ title, children }) {
  return (
    <div className="card-grad px-6 py-5">
      <h3 className="font-medium text-xl text-[var(--fg)]">{title}</h3>
      <p className="mt-1.5 text-[var(--body)]">{children}</p>
    </div>
  );
}
