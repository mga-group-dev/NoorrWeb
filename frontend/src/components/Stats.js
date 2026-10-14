import { Reveal } from "./ui/Reveal";
import { STATS } from "@/content";

// Three numbers, set quietly in a row.
export default function Stats() {
  return (
    <section className="sec-peach py-14 md:py-28" aria-label="Impact">
      <dl className="wrap grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5 md:text-center">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08} className="card-grad px-5 py-5 md:px-8 md:py-12">
            <dt className="sr-only">{s.label}</dt>
            <dd className="m-0 flex items-center gap-5 md:block">
              <span className="f-display tabular block shrink-0 min-w-[5.5rem] md:min-w-0 leading-none text-[clamp(3rem,6vw,5.5rem)] text-grad pb-1">
                {s.value}
                {s.suffix}
              </span>
              <span className="block min-w-0">
                <span className="block text-[var(--fg)] md:mt-3">{s.label}</span>
                <span className="block text-sm text-[var(--muted)] mt-1">{s.note}</span>
              </span>
            </dd>
          </Reveal>
        ))}
      </dl>
    </section>
  );
}
