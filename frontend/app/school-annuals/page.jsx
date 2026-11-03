import PageHeader from "@/components/PageHeader";
import VideoReel from "@/components/VideoReel";
import PhotoWall from "@/components/PhotoWall";
import OrnamentBand from "@/components/OrnamentBand";
import FinalCTA from "@/components/FinalCTA";
import { DY_PATIL_VIDEOS, PATRIOTIC_VIDEOS, SCHOOL_VIDEOS, SCHOOL_WALL, M } from "@/content";

export const metadata = {
  title: "School annuals",
  description:
    "School annual day choreography by Noorr Khan: DY Patil School, patriotic performances at the RAF camp, Future Bright School, Sunrise School and Olive School.",
  alternates: { canonical: "/school-annuals" },
};

// Every school annual day in one place: the newest show first, then patriotic pieces, earlier annuals and photos.
export default function SchoolAnnualsPage() {
  return (
    <main id="main">
      <PageHeader
        img={M("drive/510247005-9934944456583093-2882807665583145135-n")}
        focus="50% 55%"
        alt="Children in pink fairy costumes with star wands in a fairytale annual day finale choreographed by Noorr Khan"
        kicker="School annuals"
        title="One night, every child on stage"
      >
        More than 250 school programs so far. For each annual day Noorr builds the theme, choreographs every class item and
        rehearses with the students until the show runs cleanly on the night.
      </PageHeader>

      <VideoReel
        id="dy-patil"
        kicker="Inside the rehearsals"
        title="DY Patil School annual day"
        lead="How an annual day comes together: Noorr in the classrooms with every batch, from the seniors' Ucha Lamba Kad number to the juniors finding the beat. Tap any video to watch it with sound."
        videos={DY_PATIL_VIDEOS}
      />

      <VideoReel
        light
        id="patriotic"
        kicker="Patriotic performances"
        title="For the nation"
        lead="Students performing a patriotic dance at the RAF camp, choreographed by Noorr."
        videos={PATRIOTIC_VIDEOS}
      />

      <OrnamentBand img={M("kids-stage")} focus="50% 45%" cta={{ href: "/contact", label: "Plan your school's annual day" }}>
        Every child knows their spot on the night.
      </OrnamentBand>

      <VideoReel
        id="more-annuals"
        kicker="More annual days"
        title="Future Bright, Sunrise and Olive"
        lead="Future Bright School in Ulwe, Sunrise School and Olive School."
        videos={SCHOOL_VIDEOS}
      />

      <PhotoWall
        light
        kicker="In pictures"
        title="Annual days, frame by frame"
        lead="Fairytale finales, patriotic tributes, a horror-theme act and plenty of backstage smiles."
        photos={SCHOOL_WALL}
      />

      <FinalCTA />
    </main>
  );
}
