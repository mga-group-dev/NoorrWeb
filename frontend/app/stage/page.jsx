import PageHeader from "@/components/PageHeader";
import { StageWork, Judge, Awards } from "@/components/Sections";
import FinalCTA from "@/components/FinalCTA";
import OrnamentBand from "@/components/OrnamentBand";

export const metadata = {
  title: "Stage and judging",
  description:
    "Dance workshops across India, school and college annual days, corporate shows, competition judging and awards for Noor Khan.",
  alternates: { canonical: "/stage" },
};

export default function StagePage() {
  return (
    <main id="main">
      <PageHeader img="/media/stage-pose.webp" alt="Noor Khan on stage" kicker="Stage and judging" title="Workshops, shows and the judge's chair">
        Away from the camera, Noor teaches workshops across India, choreographs annual days and corporate shows, and judges dance
        competitions for colleges, schools and communities.
      </PageHeader>
      <StageWork />
      <Judge light flip />
      <Awards />
      <OrnamentBand>Every stage, every room, the same energy.</OrnamentBand>
      <FinalCTA />
    </main>
  );
}
