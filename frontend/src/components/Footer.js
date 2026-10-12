import Link from "next/link";
import { LINKS } from "./Navbar";
import { FOOTER } from "@/constants/testIds";
import { CONTACT } from "@/content";

// Plain columns, then the name set huge and filled with a stage photo, closing the page like an end title.
export default function Footer() {
  return (
    <footer data-testid={FOOTER.section} className="tone-paper border-t border-[color:var(--rule)] pt-16 pb-28 lg:pb-10 overflow-hidden">
      <div className="wrap grid grid-cols-2 md:grid-cols-[1.6fr_1fr_1fr_1fr] gap-10">
        <div className="col-span-2 md:col-span-1">
          <p className="f-display text-3xl">Noor Khan</p>
          <p className="text-[var(--muted)] mt-3 max-w-[34ch] leading-relaxed">
            Choreographer, trainer and founder of Dance Desire and NR Institute of Dance.
          </p>
        </div>
        <nav aria-label="Footer">
          <p className="text-sm text-[var(--muted)]">Pages</p>
          <ul className="mt-4 space-y-2.5">
            <li>
              <Link href="/" className="hover:text-[var(--muted)]">Home</Link>
            </li>
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-[var(--muted)]">{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="text-sm text-[var(--muted)]">Contact</p>
          <ul className="mt-4 space-y-2.5">
            {CONTACT.phones.map((p) => (
              <li key={p}>
                <a href={`tel:${p}`} className="hover:text-[var(--muted)] tabular">{p}</a>
              </li>
            ))}
            <li>
              <a href={`mailto:${CONTACT.email}`} className="hover:text-[var(--muted)]">Email</a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm text-[var(--muted)]">Follow</p>
          <ul className="mt-4 space-y-2.5">
            <li>
              <a href={CONTACT.instagram.url} target="_blank" rel="noreferrer" data-testid={FOOTER.instagram} className="hover:text-[var(--muted)]">Instagram</a>
            </li>
            <li>
              <a href={CONTACT.facebook.url} target="_blank" rel="noreferrer" data-testid={FOOTER.facebook} className="hover:text-[var(--muted)]">Facebook</a>
            </li>
          </ul>
        </div>
      </div>

      <p className="wrap text-sm text-[var(--muted)] mt-14">© {new Date().getFullYear()} Noor Khan. Dance Desire and NR Institute of Dance.</p>

      <p
        aria-hidden="true"
        className="f-display text-center leading-[0.85] mt-10 select-none whitespace-nowrap text-[clamp(4.5rem,19vw,19rem)] tracking-[-0.04em] text-transparent bg-center wordmark-pan"
        style={{ backgroundImage: "url(/media/stage-wide.webp)", WebkitBackgroundClip: "text", backgroundClip: "text" }}
      >
        noor khan
      </p>
    </footer>
  );
}
