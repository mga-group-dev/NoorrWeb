import PageHeader from "@/components/PageHeader";
import { Films, Characters } from "@/components/Sections";
import FinalCTA from "@/components/FinalCTA";
import OrnamentBand from "@/components/OrnamentBand";
import { M } from "@/content";

export const metadata = {
  title: "Films",
  description:
    "Noorr Khan's Bollywood work: 60+ movies and video albums with stars including Salman Khan, Ranveer Singh and Ranbir Kapoor.",
  alternates: { canonical: "/films" },
};

export default function FilmsPage() {
  return (
    <main id="main">
      <PageHeader img="/media/maratha.webp" alt="Noorr Khan in a Maratha character look" kicker="Films and screen" title="More than 60 films and video albums">
        Since 2011 Noorr has worked as a dancer, choreographer and assistant choreographer on song sequences, films and live shows
        with some of the best-known names in Hindi cinema.
      </PageHeader>
      <Films />
      <Characters light flip />
      <OrnamentBand img={M("film-stage")} focus="50% 30%">Every frame, a performance.</OrnamentBand>
      <FinalCTA />
    </main>
  );
}
