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

export default function ClientProviders({ children }) {
  useLenis();
  return (
    <>
      <ScrollToTop />
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
