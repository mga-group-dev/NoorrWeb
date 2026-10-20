"use client";

import { Component, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Toaster } from "sonner";
import useLenis, { getLenis } from "@/hooks/useLenis";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppFab from "./WhatsAppFab";
import StickyBook from "./StickyBook";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError)
      return (
        <div className="min-h-screen bg-[#FFFFFF] flex items-center justify-center">
          <p className="f-display text-3xl text-[#15172A]">Where anyone can dance.</p>
        </div>
      );
    return this.props.children;
  }
}

const ScrollToTop = () => {
  const pathname = usePathname();
  useEffect(() => {
    if (getLenis()) getLenis().scrollTo(0, { immediate: true });
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Always-running effects (grain, beams, glows, drifting gradients) are paused while off screen, so phones
// don't spend frames on things nobody can see. On screen they run exactly as before.
const LOOPING = ".cine-grain, .cine-beam, .cine-mote, .cine-kenburns, .glow-breathe, .sun-drift, .wordmark-pan, .band-sun, .reel-track";
const PauseOffscreen = () => {
  const pathname = usePathname();
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle("anim-off", !e.isIntersecting)),
      { rootMargin: "200px 0px" }
    );
    const watch = () => document.querySelectorAll(LOOPING).forEach((el) => io.observe(el));
    watch();
    // Sections that mount later (after hydration or a client-side change) are picked up too.
    // Batched to one scan per 500ms, since counters and carousels change the DOM every frame.
    let queued = 0;
    const mo = new MutationObserver(() => {
      if (!queued) queued = setTimeout(() => ((queued = 0), watch()), 500);
    });
    mo.observe(document.body, { childList: true, subtree: true });
    return () => {
      clearTimeout(queued);
      mo.disconnect();
      io.disconnect();
    };
  }, [pathname]);
  return null;
};

export default function ClientProviders({ children }) {
  useLenis();
  return (
    <>
      <ScrollToTop />
      <PauseOffscreen />
      <Navbar />
      <ErrorBoundary>{children}</ErrorBoundary>
      <Footer />
      <WhatsAppFab />
      <StickyBook />
      <Toaster
        position="bottom-right"
        theme="light"
        toastOptions={{
          style: { background: "#FFFFFF", border: "1px solid rgba(21,23,42,0.4)", color: "#15172A" },
        }}
      />
    </>
  );
}
