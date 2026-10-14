import { StageWork } from "@/components/Sections";
import { StageHero, KantaraMaking, MoreFromStage } from "@/components/StageSections";
import PhotoWall from "@/components/PhotoWall";
import VideoReel from "@/components/VideoReel";
import FinalCTA from "@/components/FinalCTA";
import OrnamentBand from "@/components/OrnamentBand";
import { STAGE_PRESENCE, STAGE_VIDEOS } from "@/content";

export const metadata = {
  title: "On stage",
  description:
    "Noorr Khan live on stage: concert stages, college fests, annual days, workshops across India and the making of his Kantara character look.",
  alternates: { canonical: "/stage" },
};

export default function StagePage() {
  return (
    <main id="main">
      <StageHero />
      <PhotoWall
        kicker="Stage presence"
        title="All eyes on Noorr"
        lead="From the limelight at RJ College to a concert stage on sound-check day. Tap any photo to see it full size."
        photos={STAGE_PRESENCE}
      />
      <VideoReel
        id="stage-videos"
        kicker="On video"
        title="Watch him perform"
        lead="His showstopper entry and the annual days he choreographed. Tap any video to watch it with sound."
        videos={STAGE_VIDEOS}
      />
      <KantaraMaking />
      <StageWork light flip />
      <MoreFromStage />
      <OrnamentBand img="/media/drive/img-1552.webp" focus="50% 55%">Every stage, every room, the same energy.</OrnamentBand>
      <FinalCTA />
    </main>
  );
}
