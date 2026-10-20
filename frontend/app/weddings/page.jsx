import PageHeader from "@/components/PageHeader";
import { CorporateOfferings, CorporateProcess } from "@/components/CorporateSections";
import Split from "@/components/Split";
import FinalCTA from "@/components/FinalCTA";
import VideoReel from "@/components/VideoReel";
import { WEDDINGS, WEDDING_STEPS, SANGEET_PHOTO, SANGEET_VIDEOS } from "@/content";

export const metadata = {
  title: "Weddings and sangeet",
  description:
    "Sangeet and wedding choreography by Noorr Khan: couple entries, family performances, surprise acts, mehendi and haldi sessions, and live performances. Watch real family sangeet performances.",
  alternates: { canonical: "/weddings" },
};

export default function WeddingsPage() {
  return (
    <main id="main">
      <PageHeader kicker="Weddings and sangeet" title="Your sangeet, choreographed">
        From the couple&apos;s entry to the family act everyone talks about afterwards. Noorr plans every performance, teaches each
        group at their own pace and makes sure the night runs on cue.
      </PageHeader>
      <Split light kicker="On the night" title="Celebrations that everyone dances in" img={SANGEET_PHOTO.src} alt={SANGEET_PHOTO.alt}>
        <p>
          A sangeet works best when it feels like a show and a party at the same time. Noorr keeps every routine simple enough for
          first-timers, then adds the moments that make the whole hall cheer.
        </p>
        <p>Bollywood, lyrical hip-hop, Garba or a mix of all three: the style follows your songs and your family.</p>
      </Split>
      <VideoReel
        id="sangeet-videos"
        kicker="On video"
        title="From practice to the big night"
        lead="Real families Noorr has choreographed: the groom's mom and aunties going from living-room rehearsals to the stage, the groom and his cousins learning their act, and a bride's mom dancing for her daughter. Tap any video to watch it with sound."
        videos={SANGEET_VIDEOS}
      />
      <CorporateOfferings items={WEDDINGS} title="Six ways to light up the sangeet" service="Wedding or sangeet" />
      <CorporateProcess steps={WEDDING_STEPS} cta={{ href: "/contact?service=Wedding%20or%20sangeet", label: "Plan your sangeet" }} />
      <FinalCTA />
    </main>
  );
}
