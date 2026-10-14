"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, MessageCircle } from "lucide-react";
import { STICKY_BOOK } from "@/constants/testIds";
import { CONTACT } from "@/content";

// Mobile-only action bar: call or book without scrolling back up.
export default function StickyBook() {
  if (usePathname() === "/contact") return null;
  return (
    <div className="fixed bottom-3 inset-x-3 z-40 lg:hidden" data-testid={STICKY_BOOK}>
      <div className="grid grid-cols-[1fr_1fr_1.3fr] gap-1.5 p-1.5 rounded-lg bg-[#FFFFFF]/95 shadow-lg backdrop-blur-xl border border-black/10">
        <a href={`tel:${CONTACT.phones[0]}`} className="rounded-md text-[#15172A] font-semibold py-3 flex items-center justify-center gap-2">
          <Phone size={16} className="text-[#15172A]" /> Call
        </a>
        <a
          href={`https://wa.me/${CONTACT.whatsapp}`}
          target="_blank"
          rel="noreferrer"
          className="rounded-md text-[#15172A] font-semibold py-3 flex items-center justify-center gap-2"
        >
          <MessageCircle size={16} className="text-[#25d366]" /> Chat
        </a>
        <Link href="/contact" className="rounded-md bg-[#15172A] text-[#FFFFFF] font-bold py-3 flex items-center justify-center">
          Book Noorr
        </Link>
      </div>
    </div>
  );
}
