import PageHeader from "@/components/PageHeader";
import { Judge } from "@/components/Sections";
import JudgeMentor from "@/components/JudgeMentor";
import PhotoWall from "@/components/PhotoWall";
import FinalCTA from "@/components/FinalCTA";
import OrnamentBand from "@/components/OrnamentBand";
import { JUDGE_WALL } from "@/content";

export const metadata = {
  title: "Judge and jury",
  description:
    "Noorr Khan judges inter-college, inter-school and community dance competitions across Mumbai, Navi Mumbai, Pune and more.",
  alternates: { canonical: "/judge-jury" },
};

export default function JudgeJuryPage() {
  return (
    <main id="main">
      <PageHeader img="/media/drive/sps-4662.webp" focus="50% 45%" alt="Noorr Khan seated with fellow judges at the judging table at Pehchaan, RJ College" kicker="Judge and jury" title="A fair eye on the panel">
        Colleges, schools and housing societies invite Noorr to judge their dance competitions, from Thakur and Bhavans College to
        government inter-school events in Mumbai and Navi Mumbai.
      </PageHeader>
      <Judge />
      <PhotoWall
        light
        kicker="From the judge's chair"
        title="On the panel"
        lead="YIN Kala Mahotsav, Pehchaan at JhunJhunWala College, inter-school and taluka-level competitions. Tap any photo to see it full size."
        photos={JUDGE_WALL}
      />
      <JudgeMentor showAwards={false} />
      <OrnamentBand img="/media/drive/sps-4737.webp" focus="50% 40%">Judging is just teaching, from the other side of the stage.</OrnamentBand>
      <FinalCTA />
    </main>
  );
}
