import PageHeader from "@/components/PageHeader";
import { CidcoFeature, CorporateOfferings, CorporateProcess } from "@/components/CorporateSections";
import FinalCTA from "@/components/FinalCTA";

export const metadata = {
  title: "For corporate",
  description:
    "Corporate shows, team-building dance workshops, Zumba sessions and festive celebrations for offices by Noorr Khan, featured in CIDCO's homes ad film.",
  alternates: { canonical: "/corporate" },
};

export default function CorporatePage() {
  return (
    <main id="main">
      <PageHeader kicker="For corporate" title="Dance for your whole team">
        Annual days, award nights, wellness weeks and festive parties. Noorr turns office teams who have never danced together
        into a show, and keeps it fun for everyone on the floor.
      </PageHeader>
      <CidcoFeature />
      <CorporateOfferings />
      <CorporateProcess />
      <FinalCTA />
    </main>
  );
}
