import PageHeader from "@/components/PageHeader";
import Services from "@/components/Services";
import PhotoWall from "@/components/PhotoWall";
import CollegeSpotlight from "@/components/CollegeSpotlight";
import FinalCTA from "@/components/FinalCTA";
import OrnamentBand from "@/components/OrnamentBand";
import { COLLEGES, COLLEGE_WALL, M } from "@/content";

export const metadata = {
  title: "For schools and colleges",
  description:
    "Dance classes, annual days, festival pieces, college fest choreography and competition training for schools and colleges by Noorr Khan.",
  alternates: { canonical: "/schools-colleges" },
};

// The featured colleges open the page (RJ College, then SNDT), followed by the school and college programs.
export default function SchoolsCollegesPage() {
  return (
    <main id="main">
      <PageHeader img="/media/drive/img-1536.webp" focus="50% 55%" alt="Students in bright yellow costumes performing on stage at an annual day choreographed by Noorr Khan" kicker="For schools and colleges" title="From the first class to the final bow">
        More than 250 school programs and 100 college choreographies so far. Weekly classes, annual days, fests and competitions:
        Noorr plans the theme, sets the routines and makes sure every student knows where to stand.
      </PageHeader>
      <CollegeSpotlight
        light
        name="Ramniranjan JhunJhunWala College"
        place="Ghatkopar, Mumbai"
        lead="At Pehchaan, the college's cultural fest, Noorr sat on the judging panel for the dance finals, handed out the trophies, and then pulled students and faculty onto the floor to dance with him."
        points={[
          ["Pehchaan", "The college fest where he judged the dance finals"],
          ["Trophies", "Presenting the awards to the winning crews"],
          ["On stage", "Dancing with the finalists and the faculty"],
        ]}
        photos={COLLEGE_WALL.slice(0, 5)}
      />
      <PhotoWall kicker="More from RJ College" title="Pehchaan in pictures" photos={COLLEGE_WALL.slice(5)} />
      <CollegeSpotlight
        light
        badge="Also on the panel"
        name="SNDT College"
        place="Mumbai"
        lead="Noorr has also sat on the judging panel for dance competitions at SNDT College. Follow his Instagram for more from his work with colleges."
        link={{ href: "https://www.instagram.com/noorrkhanofficial/", label: "Watch on Instagram" }}
      />
      <Services id="schools" title={["For", "schools"]} />
      {/* The annual-day videos and photos live on /school-annuals; this band sends visitors there. */}
      <OrnamentBand img={M("kids-stage")} focus="50% 45%" cta={{ href: "/school-annuals", label: "Watch the school annuals" }}>
        Every child knows their spot on the night.
      </OrnamentBand>
      <Services id="colleges" title={["For", "colleges"]} items={COLLEGES} service="College event" />
      <FinalCTA />
    </main>
  );
}
