"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Phone, Mail, Instagram, Facebook, MessageCircle } from "lucide-react";
import { MaskLine } from "@/components/ui/Reveal";
import Ornament from "@/components/Ornament";
import { CONTACT_PAGE } from "@/constants/testIds";
import { CONTACT } from "@/content";

const SERVICES_OPTIONS = ["School program", "College event", "Corporate show", "Workshop", "Film or celebrity", "Other"];
const EMPTY = { name: "", email: "", phone: "", service: SERVICES_OPTIONS[0], message: "" };

function Field({ id, label, children }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-semibold text-[#474B5C]">
        {label}
      </label>
      {children}
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState(EMPTY);
  const [sending, setSending] = useState(false);
  const backend = process.env.NEXT_PUBLIC_BACKEND_URL;
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
    const text = `Hi Noor, I'm ${form.name} (${form.phone}, ${form.email}).\nEvent type: ${form.service}\n\n${form.message}`;
    window.open(`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!backend) {
      viaWhatsApp();
      toast.success("Inquiry ready in WhatsApp. Press send to reach Noor.");
      return;
    }
    setSending(true);
    try {
      const res = await fetch(`${backend}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.detail || `Server returned ${res.status}`);
      toast.success("Inquiry sent. Noor's team will get back to you soon.");
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
    <main id="main" data-testid={CONTACT_PAGE.page} className="relative min-h-[100dvh] sec-sky overflow-hidden pt-36 md:pt-40 pb-28">
      <div className="sunrise absolute inset-x-0 top-0 h-[560px] opacity-60" aria-hidden="true" />
      <div className="relative wrap grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-14">
        <div>
          <Ornament className="w-28 text-[#f08a4b] mb-6" />
          <h1 className="f-display text-[clamp(3.4rem,9vw,8rem)] leading-[0.9]">
            <MaskLine>Book Noor</MaskLine>
          </h1>
          <p className="text-lg md:text-xl text-[#474B5C] mt-5 max-w-[46ch]">
            A school annual day, a college fest, an office show or a workshop: share a few details and Noor will get back to you.
          </p>

          <form onSubmit={submit} className="card-grad mt-10 grid gap-6 p-6 md:p-9">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Field id="name" label="Full name">
                <input id="name" data-testid={CONTACT_PAGE.nameInput} required minLength={2} value={form.name} onChange={set("name")} autoComplete="name" className="field" />
              </Field>
              <Field id="email" label="Email">
                <input id="email" data-testid={CONTACT_PAGE.emailInput} required type="email" value={form.email} onChange={set("email")} autoComplete="email" className="field" />
              </Field>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Field id="phone" label="Phone">
                <input id="phone" data-testid={CONTACT_PAGE.phoneInput} required minLength={7} type="tel" value={form.phone} onChange={set("phone")} autoComplete="tel" className="field" />
              </Field>
              <Field id="service" label="Event type">
                <select id="service" data-testid={CONTACT_PAGE.serviceSelect} value={form.service} onChange={set("service")} className="field">
                  {SERVICES_OPTIONS.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
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
                placeholder="Dates, city, audience size and what you have in mind"
                className="field resize-none"
              />
            </Field>
            <button type="submit" disabled={sending} data-testid={CONTACT_PAGE.submitBtn} className="btn-primary justify-self-start disabled:opacity-60">
              {sending ? "Sending inquiry..." : "Send inquiry"}
            </button>
          </form>
        </div>

        <aside data-testid={CONTACT_PAGE.infoBlock} className="lg:pt-24">
          <div className="card-grad p-3">
          <div className="relative aspect-[4/5] rounded-[16px] overflow-hidden">
            <img src="/media/stage-pose.webp" alt="Noor Khan on stage" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#FFFFFF] via-transparent to-transparent" />
            <div className="absolute bottom-0 inset-x-0 p-6 space-y-3">
              {CONTACT.phones.map((p) => (
                <a key={p} href={`tel:${p}`} className="flex items-center gap-3 f-display text-3xl hover:text-[#15172A]">
                  <Phone size={20} className="text-[#15172A]" /> {p}
                </a>
              ))}
            </div>
          </div>
          </div>
          <div className="card-grad mt-5 p-6 space-y-4">
            <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-[#15172A]">
              <MessageCircle size={18} className="text-[#15172A]" /> WhatsApp {CONTACT.phones[0]}
            </a>
            <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-3 hover:text-[#15172A] break-all">
              <Mail size={18} className="text-[#15172A] shrink-0" /> {CONTACT.email}
            </a>
            <a href={CONTACT.instagram.url} target="_blank" rel="noreferrer" data-testid="contact-instagram-link" className="flex items-center gap-3 hover:text-[#15172A]">
              <Instagram size={18} className="text-[#15172A]" /> {CONTACT.instagram.handle}
            </a>
            <a href={CONTACT.facebook.url} target="_blank" rel="noreferrer" data-testid="contact-facebook-link" className="flex items-center gap-3 hover:text-[#15172A]">
              <Facebook size={18} className="text-[#15172A]" /> {CONTACT.facebook.handle}
            </a>
          </div>
        </aside>
      </div>
    </main>
  );
}
