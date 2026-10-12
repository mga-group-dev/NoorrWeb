import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import Ornament from "./Ornament";
import { CONTACT } from "@/content";

// Closes every page: one dark card with a glow rising from below, like a stage before the curtain.
export default function FinalCTA() {
  return (
    <section className="sec-sky py-20 md:py-28" aria-label="Book Noor">
      <Reveal className="wrap">
        <div className="tone-ink card-night relative overflow-hidden rounded-[28px] px-6 py-20 md:py-28 text-center">
          <div
            aria-hidden="true"
            className="absolute inset-0 glow-breathe"
            style={{
              background:
                "radial-gradient(60% 70% at 50% 120%, rgba(185,198,247,0.55), transparent 70%), radial-gradient(40% 40% at 50% 115%, rgba(242,106,27,0.35), transparent 70%)",
            }}
          />
          <div className="relative flex flex-col items-center">
            <Ornament className="w-28 text-white/80" />
            <h2 className="f-display text-[clamp(2.4rem,5vw,4.4rem)] leading-[1.02] mt-6 max-w-[16ch]">Let&apos;s talk about your show</h2>
            <p className="text-lg text-[var(--body)] mt-5 max-w-[48ch]">
              A school annual day, a college fest, a workshop or an office performance. Tell Noor what you have in mind and his team
              will call you back.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-10">
              <Link href="/contact" className="btn-ghost !bg-white !text-[#15172a]">
                Book Noor
              </Link>
              <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noreferrer" className="btn-ghost !bg-white/10 !text-white !border-white/25">
                <MessageCircle size={18} aria-hidden="true" /> WhatsApp
              </a>
              <a href={`tel:${CONTACT.phones[0]}`} className="btn-ghost !bg-white/10 !text-white !border-white/25">
                <Phone size={18} aria-hidden="true" /> {CONTACT.phones[0]}
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
