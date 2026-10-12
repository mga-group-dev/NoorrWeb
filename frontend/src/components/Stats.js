import { Reveal } from "./ui/Reveal";
import { STATS } from "@/content";

// Three numbers, set quietly in a row.
export default function Stats() {
  return (
    <section className="sec-peach py-20 md:py-28" aria-label="Impact">
      <dl className="wrap grid grid-cols-1 md:grid-cols-3 gap-5 text-center">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08} className="card-grad px-8 py-12">
            <dt className="sr-only">{s.label}</dt>
            <dd className="m-0">
              <span className="f-display tabular block leading-none text-[clamp(3.6rem,6vw,5.5rem)] text-grad pb-1">
                {s.value}
                {s.suffix}
              </span>
              <span className="block text-[var(--fg)] mt-3">{s.label}</span>
              <span className="block text-sm text-[var(--muted)] mt-1">{s.note}</span>
            </dd>
          </Reveal>
        ))}
      </dl>
    </section>
  );
}
