import PageHeader from "@/components/PageHeader";
import Services from "@/components/Services";
import FinalCTA from "@/components/FinalCTA";
import OrnamentBand from "@/components/OrnamentBand";
import { M } from "@/content";

export const metadata = {
  title: "School programs",
  description:
    "Dance programs for schools by Noorr Khan: academic-year classes, annual day choreography, festival pieces and competition training.",
  alternates: { canonical: "/programs" },
};

export default function ProgramsPage() {
  return (
    <main id="main">
      <PageHeader img={M("drive/510247005-9934944456583093-2882807665583145135-n")} focus="50% 55%" alt="Children in pink tutus at a fairytale-themed school annual day finale" kicker="For schools" title="Dance programs for schools">
        Five ways Noorr works with schools, from weekly classes through the year to a single annual day. Pick one, or tell him what
        you need and he will suggest a plan.
      </PageHeader>
      <Services showTitle={false} />
      <OrnamentBand img={M("kids-stage")} focus="50% 45%">Every child knows their spot on the night.</OrnamentBand>
      <FinalCTA />
    </main>
  );
}
