"use client";

import Split, { Pairs, Point } from "./Split";
import {
  PORTRAIT,
  JOURNEY,
  CREDITS,
  SCREENED,
  CHARACTERS,
  STAGE_CHAPTERS,
  STYLES,
  STYLES_IMG,
  BEYOND,
  JUDGING,
  AWARDS,
} from "@/content";

// Sections are shared by several pages. Each page passes `light` and `flip` so tones and photo sides alternate.
// Every copy line restates facts already in content.js; nothing is invented.

export function AboutStory(tone) {
  return (
      <Split {...tone} kicker="About Noor" title="From film sets to school stages" img={PORTRAIT} alt="Portrait of Noor Khan">
        <p>
          Noor Khan is a choreographer and celebrity trainer from Navi Mumbai. For more than ten years he has danced and assisted
          on Bollywood sets with Ganesh Acharya. He is just as at home in a school hall, teaching students their next
          routine.
        </p>
        <p>
          He started Dance Desire and NR Institute of Dance around one simple idea: anyone can dance. More than 55,000 students
          have tested that idea with him, in workshops, classrooms and online sessions.
        </p>
        <p>
          Lyrical hip-hop is his home ground, but he moves comfortably across eight styles, and he has worked on more than 60
          films and video albums along the way.
        </p>
      </Split>
  );
}

export function Journey(tone) {
  return (
      <Split {...tone}

        kicker="With Ganesh Acharya since 2011"
        title="A journey of growth and consistency"
        img={JOURNEY[3].img}
        alt="Noor Khan with Ganesh Acharya on the set of Simmba"
      >
        <p>
          Noor joined Ganesh Acharya's team in 2011. Every film since has taught him something new about timing, camera and
          crowds, and he is still learning on set in 2026.
        </p>
        <Pairs rows={JOURNEY.map((j) => [j.year, j.title])} />
      </Split>
  );
}

export function Films(tone) {
  return (
      <Split {...tone}

        kicker="Bollywood film experience"
        title="60+ movies and video albums"
        img="/media/film-ramleela.webp"
        alt="Noor Khan in a song sequence from Ramleela"
      >
        <p>
          Sometimes Noor is in the frame as a dancer, sometimes behind the camera helping set the steps. Either way, he has
          shared sets and stages with some of the biggest names in Hindi cinema, from Bodyguard and Ramleela to Brahmastra.
        </p>
        <Pairs rows={CREDITS.map((c) => [c.star, c.work])} />
      </Split>
  );
}

export function Stars(tone) {
  return (
      <Split {...tone} kicker="Film and television" title="Screened with the stars" img="/media/star-01.webp" alt="Noor Khan with a film star">
        <p>
          Film sets, award nights and TV studios have put Noor alongside a long list of familiar faces, from Welcome Back and
          Zanjeer to Naagin 3, MTV Roadies X2 and Bigg Boss 19.
        </p>
        <Pairs rows={SCREENED} />
      </Split>
  );
}

export function Characters(tone) {
  return (
      <Split {...tone} kicker="On camera" title="In character" img={CHARACTERS[0].img} alt="Noor Khan in a Kantara character look">
        {CHARACTERS.map((c) => (
          <Point key={c.key} title={c.title}>
            {c.body}
          </Point>
        ))}
        <Point title="Shooting diaries">
          Real moments from film shoots: being part of the performance that builds the final frame.
        </Point>
      </Split>
  );
}

export function StageWork(tone) {
  return (
      <Split {...tone}

        kicker="Live work"
        title="On every kind of stage"
        img="/media/workshop-3.webp"
        alt="Noor Khan leading a dance workshop"
      >
        {STAGE_CHAPTERS.map((ch) => (
          <Point key={ch.title} title={ch.title}>
            {ch.body}
          </Point>
        ))}
      </Split>
  );
}

export function Styles(tone) {
  return (
      <Split {...tone} kicker="Eight styles" title="Styles and expertise" img={STYLES_IMG} alt="Noor Khan dancing on the beach">
        <p>
          Lyrical hip-hop is where Noor feels most at home. Knowing eight styles means he can pick the right one for the room,
          whether that is a film song, a school stage, a competition or an office party.
        </p>
        <ul className="flex flex-wrap gap-x-3 gap-y-4 !mt-8" aria-label="Styles">
          {STYLES.map((s, i) => (
            <li
              key={s}
              className={`rounded-full px-4 py-1.5 text-base border ${
                i === 0 ? "bg-[#15172A] border-[#15172A] text-white" : "chip-grad text-[var(--fg)]"
              }`}
            >
              {s}
            </li>
          ))}
        </ul>
      </Split>
  );
}

export function Beyond(tone) {
  return (
      <Split {...tone} kicker="Media and modeling" title="Beyond dance" img={BEYOND[0].img} alt="Noor Khan modeling for CIDCO, Navi Mumbai">
        <p>Dance opened other doors too. Noor has modeled, featured in a music album and led the creative side of reality shows.</p>
        <ul className="space-y-3 !mt-6">
          {BEYOND.map((b) => (
            <li key={b.title} className="flex gap-3">
              <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0" aria-hidden="true" />
              {b.title}
            </li>
          ))}
        </ul>
      </Split>
  );
}

export function Judge(tone) {
  const [colleges, schools, communities, cities] = JUDGING;
  return (
      <Split {...tone} kicker="Judge and jury" title="Expert judge and mentor" img="/media/judge-2.webp" alt="Noor Khan judging a dance competition">
        <p>
          Colleges, schools and housing societies invite Noor to judge their dance competitions, and the newspapers have covered
          his work on the panel.
        </p>
        <Point title={colleges.group}>{colleges.items.join(", ")}.</Point>
        <Point title={schools.group}>{schools.items.join("; ")}.</Point>
        <Point title={communities.group}>{communities.items.join(", ")}.</Point>
        <Point title={cities.group}>{cities.items.join(", ")}.</Point>
      </Split>
  );
}

export function Awards(tone) {
  return (
      <Split {...tone} kicker="Recognition" title="Awards and recognition" img={AWARDS[0].img} alt="Noor Khan receiving the Best Choreographer award">
        <p>
          In 2017, Bombay&apos;s Dancing Fever named Noor Best Choreographer, and actor Mukesh Khanna has honoured him on stage.
          He has been a chief guest at a fashion walk and recognised by Humanity First Foundation for his social work.
        </p>
        <Pairs rows={AWARDS.map((a) => [a.title, a.by])} />
      </Split>
  );
}
