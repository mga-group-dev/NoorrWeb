"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV } from "@/constants/testIds";

export const LINKS = [
  { label: "About", href: "/about" },
  { label: "Films", href: "/films" },
  { label: "Stage", href: "/stage" },
  { label: "Programs", href: "/programs" },
  { label: "Contact", href: "/contact" },
];

export const LogoMark = ({ size = 34 }) => (
  <span
    className="inline-block rounded-full"
    style={{ width: size * 0.6, height: size * 0.6, background: "radial-gradient(circle at 35% 30%, #ffd2b3, #f26a1b 55%, #8fa2ee)" }}
    aria-hidden="true"
  />
);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const pathname = usePathname();
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  useMotionValueEvent(scrollY, "change", (y) => setSolid(y > 60));
  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <header
        data-testid={NAV.navbar}
        className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${
          solid ? "bg-[#FFFFFF]/95 backdrop-blur-xl border-b border-black/10" : "bg-transparent"
        }`}
      >
        <div className="wrap h-[68px] flex items-center justify-between">
          <Link href="/" data-testid="nav-logo-home-btn" className="flex items-center gap-3" aria-label="Noor Khan, home">
            <LogoMark />
            <span className="f-display text-2xl text-[#15172A]">Noor Khan</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Main">
            {LINKS.filter((l) => l.href !== "/contact").map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  data-testid={`nav-link-${l.href.slice(1)}`}
                  aria-current={active ? "page" : undefined}
                  className={`text-[15px] font-medium transition-colors underline-offset-8 decoration-2 decoration-[#15172A] ${
                    active ? "text-[#15172A] underline" : "text-[#15172A]/70 hover:text-[#15172A]"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
            <Link href="/contact" data-testid={NAV.bookBtn} className="btn-primary !py-2.5 !px-5 !text-sm">
              Book Noor
            </Link>
          </nav>

          <button
            data-testid={NAV.mobileMenuBtn}
            className="lg:hidden text-[#15172A] p-2 -mr-2"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
        <motion.span
          aria-hidden="true"
          className="absolute left-0 bottom-0 h-[2px] w-full origin-left bg-[#15172A]"
          style={{ scaleX: progress, opacity: solid ? 1 : 0 }}
        />
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            data-testid={NAV.mobileMenu}
            className="fixed inset-0 z-40 bg-[#FFFFFF]/97 backdrop-blur-xl flex flex-col justify-center px-6"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {LINKS.map((l, i) => (
              <div key={l.href} className="overflow-hidden">
                <motion.div
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.15 + 0.06 * i, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={l.href}
                    aria-current={pathname === l.href ? "page" : undefined}
                    className={`f-display text-5xl py-1.5 block ${pathname === l.href ? "text-[#15172A]" : "text-[#15172A] hover:text-[#15172A]"}`}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              </div>
            ))}
            <Link href="/contact" className="btn-primary self-start mt-10" data-testid="nav-mobile-book-link">
              Book Noor
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
