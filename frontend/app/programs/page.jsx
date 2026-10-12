import PageHeader from "@/components/PageHeader";
import Services from "@/components/Services";
import FinalCTA from "@/components/FinalCTA";
import OrnamentBand from "@/components/OrnamentBand";

export const metadata = {
  title: "School programs",
  description:
    "Dance programs for schools by Noor Khan: academic-year classes, annual day choreography, festival pieces and competition training.",
  alternates: { canonical: "/programs" },
};

export default function ProgramsPage() {
  return (
    <main id="main">
      <PageHeader img="/media/annual-lights.webp" focus="50% 60%" alt="Students performing at a school annual day" kicker="For schools" title="Dance programs for schools">
        Four ways Noor works with schools, from weekly classes through the year to a single annual day. Pick one, or tell him what
        you need and he will suggest a plan.
      </PageHeader>
      <Services showTitle={false} />
      <OrnamentBand>Every child knows their spot on the night.</OrnamentBand>
      <FinalCTA />
    </main>
  );
}
