import Link from "next/link";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import OrnamentBand from "@/components/OrnamentBand";
import { AboutStory } from "@/components/Sections";
import PageIndex from "@/components/PageIndex";
import { WhatHeDoes, JourneyLine, StarsReel, Recognition } from "@/components/HomeSections";
import EightCount from "@/components/EightCount";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <Stats />
      <OrnamentBand>Where anyone can dance.</OrnamentBand>
      <AboutStory
        light
        action={
          <Link href="/about" className="link-arrow">
            Read Noor&apos;s story <span aria-hidden="true">&rarr;</span>
          </Link>
        }
      />
      <WhatHeDoes />
      <JourneyLine />
      <EightCount />
      <StarsReel />
      <Recognition />
      <PageIndex />
      <FinalCTA />
    </main>
  );
}
