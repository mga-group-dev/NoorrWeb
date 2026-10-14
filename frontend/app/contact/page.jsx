"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Phone, Mail, Instagram, Facebook, Linkedin, MessageCircle, CheckCircle2, Clock, MapPin, ArrowRight } from "lucide-react";
import { MaskLine } from "@/components/ui/Reveal";
import Ornament from "@/components/Ornament";
import { CONTACT_PAGE } from "@/constants/testIds";
import { CONTACT } from "@/content";

const SERVICES_OPTIONS = ["School program", "College event", "Corporate show", "Wedding or sangeet", "Workshop", "Film or celebrity", "Other"];
const EMPTY = { name: "", email: "", phone: "", service: SERVICES_OPTIONS[0], date: "", city: "", message: "" };

// What happens after someone sends the form, so they know what to expect.
const STEPS = [
  { title: "Share the brief", text: "Occasion, date, city and the size of the group." },
  { title: "A quick call", text: "Noorr's team calls back to talk through the idea and the plan." },
  { title: "Rehearse and perform", text: "Choreography, practice sessions and the big day." },
];

const prettyPhone = (p) => `+91 ${p.slice(0, 5)} ${p.slice(5)}`;

function Field({ id, label, optional, children }) {
  return (
    <div className="flex flex-col gap-2 min-w-0">
      <label htmlFor={id} className="text-sm font-semibold text-[#474B5C]">
        {label}
        {optional && <span className="font-normal text-[var(--muted)]"> (optional)</span>}
      </label>
      {children}
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState(EMPTY);
  const [sending, setSending] = useState(false);
  const [sentTo, setSentTo] = useState(null);
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  // Links like /contact?service=School%20program&topic=Annual%20day pre-fill the form.
  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const service = q.get("service");
    const topic = q.get("topic");
    setForm((f) => ({
      ...f,
      service: SERVICES_OPTIONS.includes(service) ? service : f.service,
      message: topic && !f.message ? `I'm interested in ${topic.toLowerCase()}. ` : f.message,
    }));
  }, []);

  const viaWhatsApp = () => {
    const extra = [form.date && `Date: ${form.date}`, form.city && `City: ${form.city}`].filter(Boolean).join("\n");
    const text = `Hi Noorr, I'm ${form.name} (${form.phone}, ${form.email}).\nEvent type: ${form.service}${extra ? `\n${extra}` : ""}\n\n${form.message}`;
    window.open(`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  };

  // Sends the enquiry by email (app/api/contact, through Resend). If email isn't set up or fails, WhatsApp is offered instead.
  const submit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      const company = e.currentTarget.elements.company?.value || "";
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, company }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.status === 503) {
        viaWhatsApp();
        toast.success("Inquiry ready in WhatsApp. Press send to reach Noorr.");
        return;
      }
      if (!res.ok) throw new Error(data.error || `Server returned ${res.status}`);
      setSentTo(form.name.split(" ")[0]);
      setForm(EMPTY);
    } catch (err) {
      toast.error(`Inquiry not sent: ${err.message}. Try again, or send it on WhatsApp.`, {
        action: { label: "WhatsApp", onClick: viaWhatsApp },
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <main id="main" data-testid={CONTACT_PAGE.page} className="relative min-h-[100dvh] sec-sky overflow-hidden pt-28 sm:pt-36 md:pt-40 pb-24 md:pb-28">
      <div className="sunrise absolute inset-x-0 top-0 h-[560px] opacity-60" aria-hidden="true" />
      <div className="relative wrap grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-14">
        <div className="min-w-0">
          <Ornament className="w-24 sm:w-28 text-[#f08a4b] mb-5 sm:mb-6" />
          <h1 className="f-display text-[clamp(3rem,9vw,8rem)] leading-[0.9]">
            <MaskLine>Book Noorr</MaskLine>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[#474B5C] mt-4 sm:mt-5 max-w-[46ch]">
            A school annual day, a college fest, a sangeet, an office show or a workshop: share a few details and Noorr will get back to you.
          </p>

          {/* On phones the direct lines come first: one tap to call, chat or email without scrolling past the form. */}
          <div className="lg:hidden mt-6 grid grid-cols-3 gap-2.5">
            {[
              { href: `tel:+91${CONTACT.phones[0]}`, label: "Call", Icon: Phone, cls: "card-grad text-[#15172A]" },
              { href: `https://wa.me/${CONTACT.whatsapp}`, label: "WhatsApp", Icon: MessageCircle, cls: "card-grad text-[#15172A]", ext: true },
              { href: `mailto:${CONTACT.email}`, label: "Email", Icon: Mail, cls: "card-grad text-[#15172A]" },
            ].map(({ href, label, Icon, cls, ext }) => (
              <a
                key={label}
                href={href}
                {...(ext ? { target: "_blank", rel: "noreferrer" } : {})}
                className={`${cls} flex flex-col items-center justify-center gap-1.5 min-h-[76px] px-2 py-3 text-sm font-semibold active:scale-[0.97] transition-transform`}
              >
                <Icon size={20} aria-hidden="true" />
                {label}
              </a>
            ))}
          </div>

          <p className="mt-5 inline-flex items-center gap-2 text-sm text-[var(--muted)]">
            <Clock size={15} aria-hidden="true" className="shrink-0" />
            Usually replies within a day. WhatsApp is quickest.
          </p>

          {sentTo ? (
            <div role="status" className="card-grad mt-6 sm:mt-8 p-6 md:p-9 text-center flex flex-col items-center">
              <span className="grid place-items-center w-14 h-14 rounded-full bg-[#e8f8ee] text-[#16a34a]">
                <CheckCircle2 size={28} aria-hidden="true" />
              </span>
              <p className="f-display text-3xl sm:text-4xl mt-4">Thank you, {sentTo}</p>
              <p className="text-[var(--body)] mt-2 max-w-[40ch]">Your inquiry has reached Noorr&apos;s team. Expect a call or email soon.</p>
              <div className="flex flex-col sm:flex-row gap-3 mt-6 w-full sm:w-auto">
                <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noreferrer" className="btn-ghost">
                  <MessageCircle size={18} aria-hidden="true" /> Follow up on WhatsApp
                </a>
                <button type="button" onClick={() => setSentTo(null)} className="btn-primary">
                  Send another inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={submit} className="card-grad mt-6 sm:mt-8 grid gap-5 sm:gap-6 p-5 sm:p-6 md:p-9">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                <Field id="name" label="Full name">
                  <input id="name" data-testid={CONTACT_PAGE.nameInput} required minLength={2} value={form.name} onChange={set("name")} autoComplete="name" enterKeyHint="next" className="field" />
                </Field>
                <Field id="phone" label="Phone">
                  <input id="phone" data-testid={CONTACT_PAGE.phoneInput} required minLength={7} type="tel" inputMode="tel" value={form.phone} onChange={set("phone")} autoComplete="tel" enterKeyHint="next" placeholder="+91" className="field" />
                </Field>
              </div>
              <Field id="email" label="Email">
                <input id="email" data-testid={CONTACT_PAGE.emailInput} required type="email" inputMode="email" value={form.email} onChange={set("email")} autoComplete="email" enterKeyHint="next" className="field" />
              </Field>
              {/* Event type as tap-to-pick chips (a radio group), so the choice is visible at a glance. */}
              <fieldset data-testid={CONTACT_PAGE.serviceSelect} className="min-w-0">
                <legend className="text-sm font-semibold text-[#474B5C] mb-3">What&apos;s the occasion?</legend>
                <div className="flex flex-wrap gap-2 sm:gap-2.5">
                  {SERVICES_OPTIONS.map((o) => {
                    const on = form.service === o;
                    return (
                      <label
                        key={o}
                        className={`cursor-pointer rounded-full px-4 py-2.5 sm:py-2 text-sm font-medium border transition-all duration-200 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-[#f26a1b]/50 ${
                          on
                            ? "bg-[#15172A] border-[#15172A] text-white shadow-[0_8px_20px_-10px_rgba(21,23,42,0.7)]"
                            : "bg-white border-black/10 text-[#15172A]/80 hover:border-[#f26a1b]/50 hover:text-[#c2410c] hover:bg-[#fff1e6]"
                        }`}
                      >
                        <input type="radio" name="service" value={o} checked={on} onChange={set("service")} className="sr-only" />
                        {o}
                      </label>
                    );
                  })}
                </div>
              </fieldset>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                <Field id="date" label="Event date" optional>
                  <input id="date" type="date" value={form.date} onChange={set("date")} className="field min-h-[3.25rem]" />
                </Field>
                <Field id="city" label="City" optional>
                  <input id="city" value={form.city} onChange={set("city")} autoComplete="address-level2" enterKeyHint="next" placeholder="e.g. Navi Mumbai" className="field" />
                </Field>
              </div>
              <Field id="message" label="Event details">
                <textarea
                  id="message"
                  data-testid={CONTACT_PAGE.messageInput}
                  required
                  minLength={5}
                  rows={5}
                  value={form.message}
                  onChange={set("message")}
                  placeholder="Audience size, number of performers and what you have in mind"
                  className="field resize-y min-h-[8rem]"
                />
              </Field>
              {/* Honeypot for spam bots: hidden from people and screen readers; anything typed here is ignored by the server. */}
              <input name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px] w-px h-px opacity-0" />
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
                <button type="submit" disabled={sending} data-testid={CONTACT_PAGE.submitBtn} className="btn-primary w-full sm:w-auto disabled:opacity-60">
                  {sending ? "Sending inquiry..." : "Send inquiry"}
                  {!sending && <ArrowRight size={18} aria-hidden="true" />}
                </button>
                <p className="text-sm text-[var(--muted)] text-center sm:text-left">Your details are only used to reply to you.</p>
              </div>
            </form>
          )}
        </div>

        <aside data-testid={CONTACT_PAGE.infoBlock} className="lg:pt-10 space-y-5 min-w-0">
          {/* Noorr himself, free-standing over a sunrise glow, with the direct lines below. */}
          <div className="card-grad relative overflow-hidden p-0">
            <div className="relative h-[280px] sm:h-[340px] md:h-[380px]">
              <div aria-hidden="true" className="absolute inset-x-[10%] top-[10%] bottom-0 rounded-full blur-3xl opacity-80 bg-[radial-gradient(circle_at_50%_45%,rgba(242,106,27,0.5),rgba(185,198,247,0.45)_55%,transparent_75%)]" />
              <img src="/media/cutouts/black-suit.webp" alt="Noorr Khan in a black suit" loading="lazy" className="absolute inset-0 w-full h-full object-contain object-bottom drop-shadow-[0_24px_30px_rgba(21,23,42,0.25)]" />
            </div>
            <div className="relative border-t border-black/5 bg-white/70 backdrop-blur px-5 sm:px-6 py-5">
              <p className="f-display text-3xl leading-none">Talk to Noorr</p>
              <p className="text-[var(--muted)] text-sm mt-1.5">Call, WhatsApp or email: whichever is easiest for you.</p>
              <p className="text-[var(--muted)] text-sm mt-2 inline-flex items-center gap-1.5">
                <MapPin size={14} aria-hidden="true" className="shrink-0" /> Based in Navi Mumbai, available across India
              </p>
            </div>
          </div>

          <div className="grid gap-3">
            {CONTACT.phones.map((p, i) => (
              <a key={p} href={`tel:+91${p}`} className="group card-grad flex items-center gap-4 px-4 sm:px-5 py-4 transition hover:-translate-y-0.5">
                <span className="grid place-items-center w-11 h-11 shrink-0 rounded-full bg-[#fff1e6] text-[#c2410c] group-hover:bg-[#f26a1b] group-hover:text-white transition-colors">
                  <Phone size={18} aria-hidden="true" />
                </span>
                <span className="flex-1 min-w-0">
                  <span className="block text-xs uppercase tracking-[0.14em] text-[var(--muted)]">{i === 0 ? "Call" : "Or call"}</span>
                  <span className="block f-display text-xl sm:text-2xl tabular whitespace-nowrap">{prettyPhone(p)}</span>
                </span>
              </a>
            ))}
            <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noreferrer" className="group card-grad flex items-center gap-4 px-4 sm:px-5 py-4 transition hover:-translate-y-0.5">
              <span className="grid place-items-center w-11 h-11 shrink-0 rounded-full bg-[#fff1e6] text-[#c2410c] group-hover:bg-[#f26a1b] group-hover:text-white transition-colors">
                <MessageCircle size={18} aria-hidden="true" />
              </span>
              <span className="flex-1 min-w-0">
                <span className="block text-xs uppercase tracking-[0.14em] text-[var(--muted)]">Quickest reply</span>
                <span className="block font-semibold text-lg">Chat on WhatsApp</span>
              </span>
            </a>
            <a href={`mailto:${CONTACT.email}`} className="group card-grad flex items-center gap-4 px-4 sm:px-5 py-4 transition hover:-translate-y-0.5">
              <span className="grid place-items-center w-11 h-11 rounded-full bg-[#fff1e6] text-[#c2410c] group-hover:bg-[#f26a1b] group-hover:text-white transition-colors shrink-0">
                <Mail size={18} aria-hidden="true" />
              </span>
              <span className="flex-1 min-w-0">
                <span className="block text-xs uppercase tracking-[0.14em] text-[var(--muted)]">Email</span>
                {/* Wrap at the "@" on narrow phones instead of mid-word. */}
                <span className="block font-medium text-[15px] sm:text-base [overflow-wrap:anywhere]">
                  {CONTACT.email.split("@")[0]}<wbr />@{CONTACT.email.split("@")[1]}
                </span>
              </span>
            </a>
          </div>

          <div className="card-grad px-5 py-5">
            <p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">How it works</p>
            <ol className="mt-4 space-y-4">
              {STEPS.map((s, i) => (
                <li key={s.title} className="flex gap-3.5">
                  <span className="grid place-items-center w-7 h-7 shrink-0 rounded-full bg-[#15172A] text-white text-xs font-semibold tabular">{i + 1}</span>
                  <span className="min-w-0">
                    <span className="block font-semibold text-[#15172A]">{s.title}</span>
                    <span className="block text-sm text-[var(--body)] mt-0.5">{s.text}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <div className="card-grad px-5 py-4">
            <p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">Follow Noorr</p>
            <div className="flex flex-wrap gap-2.5 mt-3">
              {[
                { href: CONTACT.instagram.url, label: "Instagram", Icon: Instagram, id: "contact-instagram-link" },
                { href: CONTACT.facebook.url, label: "Facebook", Icon: Facebook, id: "contact-facebook-link" },
                { href: CONTACT.linkedin.url, label: "LinkedIn", Icon: Linkedin, id: "contact-linkedin-link" },
              ].map(({ href, label, Icon, id }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  data-testid={id}
                  className="inline-flex items-center gap-2 rounded-full bg-white border border-black/10 px-4 py-2.5 text-sm font-medium text-[#15172A]/80 transition hover:border-[#f26a1b]/50 hover:text-[#c2410c] hover:bg-[#fff1e6]"
                >
                  <Icon size={16} aria-hidden="true" /> {label}
                </a>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
