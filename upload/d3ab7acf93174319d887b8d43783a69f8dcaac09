import { useState } from "react";
import { usePathname } from "next/navigation";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { CONTACT } from "@/content";

// Desktop-only quick chat. Mobile already has the sticky action bar.
export default function WhatsAppFab() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [shown, setShown] = useState(false);
  // Appears once the hero is out of the way, so it never covers the hero caption.
  useMotionValueEvent(scrollY, "change", (y) => setShown(y > 500));
  if (pathname === "/contact") return null;
  return (
    <a
      href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent("Hi Noorr, I'd like to book you for an event.")}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Noorr on WhatsApp"
      className={`group hidden lg:flex fixed right-6 bottom-6 z-40 items-center justify-center w-14 h-14 rounded-full bg-[#25d366] text-[#0b1f12] shadow-[0_18px_40px_-12px_rgba(37,211,102,0.55)] transition-[opacity,transform] duration-500 hover:-translate-y-0.5 ${shown ? "opacity-100" : "opacity-0 translate-y-4 pointer-events-none"}`}
    >
      <MessageCircle size={26} />
    </a>
  );
}
