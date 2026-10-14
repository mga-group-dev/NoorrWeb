import Link from "next/link";
import Ornament from "@/components/Ornament";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <main id="main" className="relative sec-sky overflow-hidden min-h-[80dvh] flex items-center pt-36 pb-20">
      <div className="sunrise absolute inset-x-0 top-0 h-[520px] opacity-70" aria-hidden="true" />
      <div className="relative wrap flex flex-col items-center text-center">
        <Ornament className="w-32 text-[#f08a4b] mb-6" />
        <span className="eyebrow">Wrong step</span>
        <h1 className="f-display text-[clamp(2.8rem,6vw,5rem)] leading-[1] mt-3 max-w-[16ch] mx-auto">This page missed its cue.</h1>
        <p className="text-lg text-[var(--body)] mt-6 max-w-[48ch] mx-auto">
          The link may be old or mistyped. Head back to the home page, or tell Noorr about your event directly.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-5 mt-9">
          <Link href="/" className="btn-primary">
            Back to home
          </Link>
          <Link href="/contact" className="link-arrow">
            Book Noorr <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
