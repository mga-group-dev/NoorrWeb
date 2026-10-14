import Link from "next/link";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import OrnamentBand from "@/components/OrnamentBand";
import { AboutStory } from "@/components/Sections";
import PageIndex from "@/components/PageIndex";
import { WhatHeDoes, JourneyLine, StarsReel, Recognition } from "@/components/HomeSections";
import EightCount from "@/components/EightCount";
import FinalCTA from "@/components/FinalCTA";
import VideoReel from "@/components/VideoReel";
import { HOME_VIDEOS } from "@/content";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <Stats />
      <OrnamentBand img="/media/drive/img-1514.webp" focus="50% 45%" cta={{ href: "/contact", label: "Bring Noorr to your stage" }}>
        Where anyone can dance.
      </OrnamentBand>
      <AboutStory
        light
        action={
          <Link href="/about" className="link-arrow">
            Read Noorr&apos;s story <span aria-hidden="true">&rarr;</span>
          </Link>
        }
      />
      <WhatHeDoes />
      <VideoReel
        kicker="Watch"
        title="See it on stage"
        lead="Annual days, showstopper entries and a Kantara character look. Tap any video to watch it with sound."
        videos={HOME_VIDEOS}
      />
      <JourneyLine />
      <EightCount />
      <StarsReel />
      <Recognition />
      <PageIndex />
      <FinalCTA />
    </main>
  );
}
