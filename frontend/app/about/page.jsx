import PageHeader from "@/components/PageHeader";
import { AboutStory, Journey, Styles, Beyond } from "@/components/Sections";
import FinalCTA from "@/components/FinalCTA";
import OrnamentBand from "@/components/OrnamentBand";

export const metadata = {
  title: "About",
  description:
    "Noor Khan is a Navi Mumbai choreographer who has worked with Ganesh Acharya since 2011 and founded Dance Desire and NR Institute of Dance.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main id="main">
      <PageHeader img="/media/stage-act.webp" alt="Noor Khan performing on stage" kicker="About Noor" title="A choreographer who believes anyone can dance">
        From Ganesh Acharya&apos;s film sets to school halls in Navi Mumbai, Noor Khan has spent more than a decade teaching people
        to move. Here is how he got here, and what he teaches.
      </PageHeader>
      <AboutStory />
      <Journey light flip />
      <Styles />
      <Beyond light flip />
      <OrnamentBand>Lyrical hip-hop is home, eight styles are the language.</OrnamentBand>
      <FinalCTA />
    </main>
  );
}
