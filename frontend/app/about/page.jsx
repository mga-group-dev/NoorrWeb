import PageHeader from "@/components/PageHeader";
import { AboutStory, Styles, Beyond } from "@/components/Sections";
import { JourneyLine } from "@/components/HomeSections";
import FinalCTA from "@/components/FinalCTA";
import OrnamentBand from "@/components/OrnamentBand";
import { M } from "@/content";

export const metadata = {
  title: "About",
  description:
    "Noorr Khan is a Navi Mumbai choreographer who has worked on Bollywood sets with leading choreographers since 2011 and founded NR Institute of Dance.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main id="main">
      <PageHeader img={M("drive/solo")} alt="Portrait of Noorr Khan smiling" kicker="About Noorr" title="A choreographer who believes anyone can dance">
        From Bollywood film sets to school halls in Navi Mumbai, Noorr Khan has spent more than a decade teaching people
        to move. Here is how he got here, and what he teaches.
      </PageHeader>
      <AboutStory />
      <JourneyLine light />
      <Styles />
      <Beyond light flip />
      <OrnamentBand img={M("drive/sps-5021")} focus="50% 40%">Lyrical hip-hop is home, eight styles are the language.</OrnamentBand>
      <FinalCTA />
    </main>
  );
}
