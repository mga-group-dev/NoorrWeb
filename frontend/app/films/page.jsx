import PageHeader from "@/components/PageHeader";
import { Films, Stars, Characters } from "@/components/Sections";
import FinalCTA from "@/components/FinalCTA";
import OrnamentBand from "@/components/OrnamentBand";

export const metadata = {
  title: "Films",
  description:
    "Noor Khan's Bollywood work: 60+ movies and video albums with stars including Salman Khan, Ranveer Singh, Ranbir Kapoor and Alia Bhatt.",
  alternates: { canonical: "/films" },
};

export default function FilmsPage() {
  return (
    <main id="main">
      <PageHeader img="/media/maratha.webp" alt="Noor Khan in a Maratha character look" kicker="Films and screen" title="More than 60 films and video albums">
        Since 2011 Noor has worked as a dancer, choreographer and assistant choreographer on song sequences, films and live shows
        with some of the best-known names in Hindi cinema.
      </PageHeader>
      <Films />
      <Stars light flip />
      <Characters />
      <OrnamentBand>Every frame, a performance.</OrnamentBand>
      <FinalCTA />
    </main>
  );
}
