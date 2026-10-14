import PageHeader from "@/components/PageHeader";
import { Awards } from "@/components/Sections";
import { Recognition } from "@/components/HomeSections";
import FinalCTA from "@/components/FinalCTA";
import OrnamentBand from "@/components/OrnamentBand";

export const metadata = {
  title: "Awards and recognition",
  description:
    "Best Choreographer at Bombay's Dancing Fever 2017, honoured by actor Mukesh Khanna, and recognised for social work: Noorr Khan's awards.",
  alternates: { canonical: "/awards" },
};

export default function AwardsPage() {
  return (
    <main id="main">
      <PageHeader img="/media/drive/taluka-felicitation.webp" focus="50% 40%" alt="Noorr Khan receiving a bouquet on stage at a taluka-level sports and personality development competition" kicker="Awards and recognition" title="Recognised on and off the stage">
        Best Choreographer at Bombay&apos;s Dancing Fever 2017, honoured on stage by actor Mukesh Khanna, and recognised by
        Humanity First Foundation for his social work.
      </PageHeader>
      <Awards />
      <Recognition />
      <OrnamentBand img="/media/drive/sps-4968.webp" focus="50% 0%">Every award started in a practice room.</OrnamentBand>
      <FinalCTA />
    </main>
  );
}
