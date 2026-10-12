"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, ArrowRight } from "lucide-react";
import { MaskIn } from "./ui/Reveal";
import { PROGRAMS } from "@/content";

// On /programs the page header already names the section, so the heading can be switched off.
export default function Services({ showTitle = true }) {
  const [open, setOpen] = useState(0);
  return (
    <section id="services" className={`sec-peach pb-24 md:pb-32 ${showTitle ? "pt-24 md:pt-36" : "pt-16 md:pt-20"}`}>
      <div className="wrap">
        {showTitle && (
          <h2 className="f-display text-[clamp(2.1rem,3.6vw,3.4rem)] leading-[1.05] mb-14">
            <MaskIn>School services</MaskIn>
            <MaskIn delay={0.08}>and programs</MaskIn>
          </h2>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-start">
          <div className="card-grad p-3 lg:sticky lg:top-28 order-last lg:order-first">
          <div className="relative aspect-[4/3] lg:aspect-[4/5] rounded-[16px] overflow-hidden">
            <AnimatePresence initial={false}>
              <motion.img
                key={open}
                src={PROGRAMS[open].img}
                alt={PROGRAMS[open].title}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              />
            </AnimatePresence>
          </div>
          </div>

          <div className="space-y-3">
            {PROGRAMS.map((p, i) => {
              const isOpen = open === i;
              return (
                <div key={p.title} className={`card-grad px-6 transition-shadow ${isOpen ? "shadow-[0_24px_50px_-30px_rgba(242,106,27,0.45)]" : ""}`}>
                  <button
                    onClick={() => setOpen(i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className={`f-display text-[clamp(1.4rem,2.2vw,1.9rem)] leading-tight transition-colors ${isOpen ? "text-grad" : "text-[var(--fg)]"}`}>
                      {p.title}
                    </span>
                    <Plus className={`shrink-0 transition-transform duration-500 ${isOpen ? "rotate-45 text-[var(--accent)]" : ""}`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden text-lg text-[var(--body)] leading-relaxed max-w-[50ch]"
                      >
                        <span className="block">{p.body}</span>
                        <Link
                          href={`/contact?service=${encodeURIComponent("School program")}&topic=${encodeURIComponent(p.title)}`}
                          className="inline-flex items-center gap-2 mt-4 mb-7 font-semibold text-[var(--accent)] hover:text-[#2A2D48]"
                        >
                          Enquire about {p.title.toLowerCase()} <ArrowRight size={18} />
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
            <p className="text-[var(--muted)] !mt-10">Not sure which one fits? Tell Noor what you have in mind and he will suggest a plan.</p>
            <Link href="/contact" className="btn-primary mt-4">
              Book Noor
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
