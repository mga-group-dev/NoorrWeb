// All copy comes from Noorr Khan's profile deck. All photos live in /public/media.
import IMAGES from "./images.json";

// Photos with a ChatGPT-enhanced version are served from /media/enhanced. Add a name here to use that version;
// the site currently shows only the original (locally enhanced) photos, so faces stay true to life.
const ENHANCED = new Set([]);
export const M = (name) => (ENHANCED.has(name) ? `/media/enhanced/${name}.webp` : `/media/${name}.webp`);

// images.json is generated from the photos themselves: `focus` is where the people are (CSS object-position), so
// cropped frames keep faces in view; `w` is the full width, and every photo also has an 800px `.800.webp` copy.
export const focusOf = (src, fallback = "50% 40%") => IMAGES[src]?.focus || fallback;

// Width over height from images.json (1 when unknown), for picking a tile shape that suits the photo.
export const ratioOf = (src) => (IMAGES[src]?.w && IMAGES[src]?.h ? IMAGES[src].w / IMAGES[src].h : 1);

export const isPortrait = (src) => (IMAGES[src]?.h || 0) > (IMAGES[src]?.w || Infinity);
// Very wide shots (film stills, panoramas) lose too much in a tall frame, so they are shown whole there.
export const isWide = (src) => (IMAGES[src]?.w || 0) / (IMAGES[src]?.h || Infinity) > 1.6;

// srcset for a photo, so phones and small cards download the 800px copy instead of the full-size file.
export const srcSetOf = (src) => {
  const w = IMAGES[src]?.w;
  if (!w) return undefined;
  // Photos wider than 600px also have a `.480.webp` copy for small tiles on phones (not the cut-outs).
  const small = w > 600 && !src.includes("/cutouts/") ? `${src.replace(/\.webp$/, ".480.webp")} 480w, ` : "";
  if (w <= 800) return `${small}${src} ${w}w`;
  // Photos wider than 1700px also have a `.1600.webp` copy for laptops and tablets.
  const mid = w > 1700 ? `, ${src.replace(/\.webp$/, ".1600.webp")} 1600w` : "";
  return `${small}${src.replace(/\.webp$/, ".800.webp")} 800w${mid}, ${src} ${w}w`;
};

// The smallest copy of a photo, for blurred backdrops where detail can't be seen anyway.
export const blurOf = (src) => (IMAGES[src]?.w > 600 && !src.includes("/cutouts/") ? src.replace(/\.webp$/, ".480.webp") : src);

export const IDENTITY = {
  name: "Noorr Khan",
  role: "Professional dance choreographer and celebrity trainer",
  founder: "Founder of NR Institute of Dance",
  motto: "Anyone can dance",
};

export const CONTACT = {
  phones: ["9967260708", "9167439223"],
  email: "choreographernoorkhan@gmail.com",
  instagram: { handle: "@noorkhaanofficial", url: "https://instagram.com/noorkhaanofficial" },
  facebook: { handle: "noordanceislife", url: "https://facebook.com/noordanceislife" },
  linkedin: { handle: "Noorr Khan", url: "https://www.linkedin.com/in/noorr-khan-81bab2443/" },
  whatsapp: "919167439223",
};

export const HERO_REEL = [M("stage-pose"), M("annual-red"), M("film-ramleela"), M("stage-purple"), M("annual-yellow")];

// Hero carousel on the right: solo photos of Noorr only. `focus` keeps his face in frame.
export const HERO_PORTRAITS = [
  { src: M("cutouts/black-suit"), alt: "Noorr Khan in a black suit" },
  { src: M("cutouts/resort-set"), alt: "Noorr Khan tipping his hat in a red resort set" },
  { src: M("cutouts/limelight"), alt: "Noorr Khan waving to the crowd on stage" },
  { src: M("cutouts/kantara"), alt: "Noorr Khan in his Kantara character look" },
  { src: M("cutouts/about-portrait"), alt: "Noorr Khan in a mint jacket" },
  { src: M("cutouts/father-son"), alt: "Noorr Khan dancing with his son" },
];

export const PORTRAIT = M("portrait");
export const ABOUT_CUTOUT = M("cutouts/about-portrait");
export const CUTOUT = M("cutout");

export const STATS = [
  { value: 55, suffix: "K+", label: "Students trained", note: "In workshops, classes and online sessions" },
  { value: 100, suffix: "+", label: "College choreographies", note: "Choreographed for fests and annual days" },
  { value: 250, suffix: "+", label: "School programs", note: "Annual days, festivals and competitions" },
];

export const FILM_STRIP = [
  "annual-red", "kids-selfie", "drive/img-1544", "crew-black", "annual-yellow", "college-blue",
  "workshop-steps", "kids-pink", "crowd-group", "college-duo", "orange-team", "tutu-stage",
  "annual-castle", "college-group", "annual-lights", "kids-stage",
].map(M);

export const JOURNEY = [
  { year: "2011", title: "Live performance", img: M("ga-2011") },
  { year: "2013", title: "Zila Ghaziabad", img: M("ga-2013") },
  { year: "2015", title: "Welcome Back", img: M("ga-2015") },
  { year: "2018", title: "Simmba", img: M("ga-2018") },
  { year: "2020", title: "Naach Nachaiya Dhoom Machaiya", img: M("ga-2020") },
];

// Home page "Noorr's journey": the whole career, film sets to brand work. Each stop has a tag, one line and a photo;
// `contain` shows the whole photo (the trophy) instead of cropping it.
export const CAREER = [
  { year: "2011", tag: "Films", title: "Bodyguard", body: "Dancing on the sets of Bodyguard with Salman Khan.", img: M("shoot-1") },
  { year: "2013", tag: "Films", title: "Ramleela", body: "In the colour and chaos of Ramleela, sharing the frame with Ranveer Singh.", img: M("film-ramleela") },
  { year: "2017", tag: "Award", title: "Best Choreographer", body: "Named Best Choreographer at Bombay's Dancing Fever 2017.", img: M("award-bdf"), contain: true },
  { year: "2022", tag: "Brand", title: "The face of CIDCO homes", body: "Lead model in CIDCO's ad film for its new flats in Ghansoli, Navi Mumbai.", img: "/media/video/cidco-ad.webp" },
  { year: "2024", tag: "Judge", title: "On the panel at RJ College", body: "Judging Pehchaan at Ramniranjan JhunJhunWala College, then dancing with the finalists.", img: M("drive/sps-4462") },
  { year: "", tag: "Screen", title: "The Kantara look", body: "Stepping into a full Kantara character look for an upcoming project.", img: M("kantara") },
];

// Bollywood credits, as listed in the profile deck.
export const CREDITS = [
  { star: "Salman Khan", work: "Bodyguard", img: M("shoot-1") },
  { star: "Ranveer Singh", work: "Ramleela", img: M("film-ramleela") },
  { star: "Mallika Sherawat", work: "Live performance", img: M("film-stage") },
  { star: "Featured in Kantara", work: "Character feature", img: M("kantara") },
];

export const SCREENED = [
  ["John Abraham", "Welcome Back"],
  ["Vivek Oberoi", "Great Grand Masti"],
  ["Sushant Khatri", "Dance Plus"],
  ["Jeet Madnani", "Bachan Bangoli"],
  ["Priyanka Chopra", "Zanjeer"],
  ["Swapnil Joshi", "Bhikari"],
  ["Jahagir Karkaria", "Award function"],
  ["Pradip Kabra", "Bhikari"],
  ["Ketan Karande", "Bhikari"],
  ["Sambhavna Seth", "Welcome Back"],
  ["Pearl V Puri", "Naagin 3"],
  ["Jeet Singh", "Award function"],
  ["Vikalp Mehta", "MTV Roadies X2"],
  ["Rahul Vaidya", "Stand-up comedy"],
  ["Jeet Upendra", "Bigg Boss 19"],
];

export const STAR_PHOTOS = Array.from({ length: 20 }, (_, i) => M(`star-${String(i + 1).padStart(2, "0")}`));

export const CHARACTERS = [
  {
    key: "kantara",
    title: "Kantara character feature",
    body: "For Vijay Verma's upcoming project, Noorr stepped into a full Kantara look. It was less about steps and more about carrying a whole culture in the body.",
    img: M("kantara"),
    bts: [M("kantara-1"), M("kantara-2"), M("kantara-3"), M("kantara-4")],
  },
  {
    key: "maratha",
    title: "The Maratha look",
    body: "A song sequence for an upcoming film, playing a powerful Maratha character. The costume did half the work; the posture had to do the rest.",
    img: M("maratha"),
    bts: [M("shoot-6"), M("shoot-7"), M("shoot-8"), M("shoot-9")],
  },
];

export const DIARIES = ["shoot-1", "shoot-2", "shoot-5", "shoot-3", "shoot-8", "shoot-4", "shoot-6", "shoot-9", "shoot-7"].map(M);

// `cover` and `href` are for the home page cards; `imgs` are used elsewhere.
export const STAGE_CHAPTERS = [
  {
    title: "Dance workshops",
    cover: M("drive/zumba-workshop-at-kharghar"),
    href: "/programs",
    body: "Noorr has taken his workshops to cities across India. Every room is different, but the first ten minutes are always the same: getting people to stop worrying about looking silly.",
    imgs: [M("drive/zumba-workshop-at-kharghar"), M("drive/sps-5015"), M("drive/sps-5029")],
  },
  {
    title: "Corporate shows and events",
    cover: M("corp-11"),
    href: "/corporate",
    body: "Office teams who have never danced together, turned into a show. He keeps the routines simple enough to learn and sharp enough to look good on stage.",
    imgs: [M("corp-8"), M("corp-11"), M("corp-9"), M("corp-7")],
  },
  {
    title: "School and college annual days",
    cover: M("annual-6"),
    href: "/schools-colleges",
    body: "Annual days with a stage full of children and one evening to get it right. Noorr plans the theme, sets the routines and makes sure every child knows where to stand.",
    imgs: [M("drive/img-1536"), M("drive/img-1514"), M("drive/511559785-9934944376583101-1594443406349416713-n"), M("drive/stage-4")],
  },
  {
    title: "Electrifying stage presence",
    cover: M("film-stage"),
    href: "/stage",
    body: "When he performs himself, it is the same energy he asks of his students, just with nobody to hide behind.",
    imgs: [M("stage-pose"), M("drive/img-4372"), M("drive/img-7131"), M("drive/img-8062")],
  },
];

export const JUDGING = [
  {
    group: "Colleges",
    items: ["Thakur College", "Bhavans College", "Cosmopolitan College", "SNDT College", "JhunJhunWala College", "Pathkar College"],
  },
  {
    group: "Schools",
    items: [
      "Government inter-school competitions, Mumbai and Navi Mumbai",
      "Podar Jumbo Kids, Ghansoli",
      "Euro Kids, Kharghar and Kalamboli",
      "Mothers Preschool, Nerul",
      "Sunrise Preschool, Nerul",
      "EDU Kids, Koparkhairane",
      "Bright Future School, Ulwe",
      "Sunrise Global School and College, Taloja",
      "Sudhagad School, Kharghar",
      "Global International School, Umbraj Satara",
    ],
  },
  {
    group: "Communities",
    items: ["Moraj Society, Sanpada", "Proviso Complex, Kharghar", "Humanity First Foundation", "Bharat Society, Juinagar"],
  },
  { group: "Cities", items: ["Mumbai", "Pune", "Kolkata", "Surat", "Hyderabad", "Satara", "and many more"] },
];

export const JUDGE_PHOTOS = [
  "drive/img-e2135", "drive/sps-4737", "drive/sps-4736", "drive/inter-school-competition-judge", "drive/sps-4662", "drive/img-e2137",
].map(M);
export const NEWSPAPER = M("newspaper");

export const AWARDS = [
  // From Noorr's Instagram post of 15 December 2024 (felicitated as a judge).
  { title: "Felicitated as judge", by: "Taluka-level sports and personality development competition, 2024", img: M("drive/taluka-felicitation"), contain: true },
  { title: "Best Choreographer", by: "Bombay's Dancing Fever 2017", img: M("award-bdf"), contain: true },
  { title: "Awarded by actor Mukesh Khanna", by: "Recognition on stage", img: M("award-khanna") },
  { title: "Chief guest", by: "Fashion walk", img: M("drive/chief-guest") },
  { title: "Social work", by: "Humanity First Foundation", img: M("award-social") },
  { title: "Inter-college judge", by: "JhunJhunWala College", img: M("drive/sps-4948") },
];

export const STYLES = ["Lyrical hip-hop", "Bollywood", "Freestyle", "Hip-hop", "Bolly-hop", "Krumping", "Locking and popping", "Electro house"];
export const STYLES_IMG = M("beach");

export const BEYOND = [
  { title: "Main model for CIDCO buildings, Navi Mumbai", img: M("cidco-1") },
  { title: "Lead model, Mere Pyare Watan patriotic album", img: M("model-3") },
  { title: "Creative head, India's Big Superstar", img: M("model-1") },
  { title: "Creative head, Crazy Dancing Star", img: M("model-2") },
];

// School programs. `best` is who it suits; `points` are what the program covers (shown as a short checklist).
export const PROGRAMS = [
  {
    title: "Academic year dance classes",
    best: "Schools that want dance on the timetable",
    body: "Weekly classes through the school year. Students build real technique step by step, so by the time a show comes around they are confident, not nervous.",
    points: ["Weekly sessions in school hours", "Routines planned class by class", "Lyrical hip-hop, Bollywood and more"],
    img: M("drive/img-1422"),
  },
  {
    title: "Annual day performances",
    best: "The one night every parent comes for",
    body: "From the first idea to the final bow. Noorr builds the theme, choreographs every item and rehearses until the whole thing runs cleanly on the night.",
    points: ["A theme and story for the whole evening", "A routine for every class", "Rehearsals up to the final stage run"],
    img: M("drive/img-1536"),
  },
  {
    title: "Festival choreography",
    best: "Independence Day, Navratri, Diwali and more",
    body: "Pieces built around the day your school is celebrating, so the dance actually says something about it instead of being a generic routine.",
    points: ["Patriotic, folk and festive pieces", "Garba and Bollywood for celebrations", "Short pieces for assemblies too"],
    img: M("drive/represented-patriotic-dance-in-front-of-all-indian-freedom-fighters-family"),
  },
  {
    title: "Competition training",
    best: "Teams heading to inter-school competitions",
    body: "Coaching from someone who sits on the judging panel at these competitions. He knows what judges notice, and he trains students for exactly that.",
    points: ["Solo, duet and group entries", "Formations, expressions and finish", "Feedback the way judges score it"],
    img: M("drive/sps-4968"),
  },
  {
    title: "Workshops and fitness sessions",
    best: "Summer breaks, sports days and parent events",
    body: "One-off sessions that get a whole group moving, from a Zumba morning to a quick-learn routine, in the style of his workshops across Navi Mumbai.",
    points: ["Zumba and dance fitness", "Quick-learn group routines", "Open to students, staff and parents"],
    img: M("drive/zumba-workshop-at-kharghar"),
  },
];

// /corporate: what Noorr offers companies. Same accordion as the school programs.
export const CORPORATE = [
  {
    title: "Corporate shows and team performances",
    body: "Office teams who have never danced together, turned into a show for the annual day, an award night or a launch. Routines stay simple enough to learn and sharp enough to look good on stage.",
    img: M("corp-8"),
  },
  {
    title: "Team-building dance workshops",
    body: "A session that gets a whole floor moving together. The first ten minutes are always about the same thing: getting people to stop worrying about looking silly. After that, it is just fun.",
    img: M("corp-11"),
  },
  {
    title: "Fitness and Zumba sessions",
    body: "High-energy group sessions for wellness days and weekend events, in the same style as his Zumba workshops in Kharghar. No experience needed, only comfortable shoes.",
    img: M("drive/zumba-workshop-at-kharghar"),
  },
  {
    title: "Festive celebrations",
    body: "Garba for Navratri, Bollywood for Diwali and the year-end party. Noorr teaches a routine the whole office can join in, so the celebration is not just a few people on stage.",
    img: M("corp-2"),
  },
  {
    title: "Live performance by Noorr",
    body: "Want a headline act? Noorr performs himself, with the same energy he asks of his students, and can bring the crowd onto the floor with him.",
    img: M("corp-9"),
  },
];

// /weddings: what families can book for a wedding or sangeet. Text cards, same layout as the corporate page.
export const WEDDINGS = [
  { title: "Couple entry and first dance", body: "A grand entry and a couple dance built around your song, simple enough to learn in a few sessions and big enough to bring the house down." },
  { title: "Family performances", body: "Parents, siblings, cousins and grandparents in one act. Noorr gives everyone a part they can actually do, so nobody is left out." },
  { title: "Bride and groom surprises", body: "A solo or a surprise for your partner, kept secret until the night. Bollywood, lyrical hip-hop or a mix of both." },
  { title: "Friends' squad acts", body: "The bridesmaids, the groom's gang or the whole friends' circle, with a routine that looks sharp on stage and great on video." },
  { title: "Mehendi and haldi sessions", body: "Easy, high-energy group dances and Garba for the daytime functions, so the celebration starts long before the sangeet." },
  { title: "Live performance by Noorr", body: "Want a showstopper? Noorr performs himself and pulls the whole family onto the dance floor with him." },
];

export const WEDDING_STEPS = [
  ["Share the plan", "Your date, the functions, who is performing and the songs you love."],
  ["Noorr plans every act", "A running order for the night, with a routine for each group."],
  ["Rehearsals", "At home or at the venue, at times that work around the wedding prep."],
  ["Sangeet night", "Every act on cue, and the whole family on the dance floor."],
];

export const SANGEET_PHOTO = { src: M("drive/sangeet"), alt: "Noorr Khan with a group in festive wear at a sangeet" };

// /schools-colleges: the college side. The school side reuses PROGRAMS.
export const COLLEGES = [
  {
    title: "College fest choreography",
    body: "More than 100 college choreographies so far. Noorr builds pieces for fests that stand out on a big stage, whether it is a solo, a duet or a full crew.",
    img: M("college-group"),
  },
  {
    title: "College annual days",
    body: "From the theme to the final bow. He plans the evening, sets every item and rehearses until the show runs cleanly on the night.",
    img: M("drive/xevier-clg-annual-day"),
  },
  {
    title: "Inter-college competition training",
    body: "Noorr sits on the judging panel at Thakur, Bhavans, SNDT and JhunJhunWala College. He knows what judges notice, and he trains teams for exactly that.",
    img: M("college-blue"),
  },
  {
    title: "Workshops for dance societies",
    body: "Sessions across eight styles, from lyrical hip-hop to krumping, so a college dance society can grow its range before the next season.",
    img: M("college-duo"),
  },
];

// Photo walls from the Google Drive folders, one per page. Each wall opens in a lightbox.
const wall = (alt, names) => names.map((n) => (typeof n === "string" ? { src: M(n), alt } : { src: M(n[0]), alt: n[1], caption: n[1] }));

export const JUDGE_WALL = wall("Noorr Khan judging a dance competition", [
  ["drive/488204111-9579963062063528-615881067786528011-n", "Judge at YIN Kala Mahotsav"],
  ["drive/470161923-18481021381000878-7489401811377298798-n", "On the panel at an inter-school competition"],
  ["judge-7", "Judging alongside fellow choreographers"],
  ["drive/qw", "Presenting the winners' trophy"],
  ["drive/sps-4469", "Felicitated at JhunJhunWala College"],
  ["drive/img-0143", "Prize giving with the winning dancer"],
  "judge-10",
  ["judge-11", "Pehchaan, JhunJhunWala College"],
  "drive/img-8166",
  ["judge-9", "Taluka-level competition prize giving"],
  ["drive/487764512-9579963115396856-6154021108373044114-n", "With the YIN Kala Mahotsav team"],
  "drive/83093369-2779834958743073-5419866290779062272-n",
]);

// RJ (Ramniranjan JhunJhunWala) College, Ghatkopar: judging and dancing with students and faculty at Pehchaan.
export const COLLEGE_WALL = wall("Noorr Khan at Ramniranjan JhunJhunWala College, Ghatkopar", [
  ["drive/sps-5016", "Dancing with the faculty at Pehchaan"],
  "drive/sps-5017",
  ["drive/sps-5030", "Getting the whole stage moving"],
  "drive/sps-5019",
  ["drive/sps-5000", "A student finalist on stage"],
  ["drive/sps-5004", "A face-off with a student dancer"],
  ["drive/sps-4462", "Taking the stage at RJ College"],
  ["drive/sps-4961", "Certificates for the winners"],
  "drive/sps-5013",
  "drive/sps-5033",
  ["drive/sps-4968", "Trophy for the winning crew"],
  "drive/sps-4973",
]);

export const SCHOOL_WALL = wall("Students performing a school annual day choreographed by Noorr Khan", [
  ["drive/510247005-9934944456583093-2882807665583145135-n", "A fairytale annual day finale"],
  ["annual-6", "Lights, castle and a full stage"],
  ["drive/img-3432", "Annual day, one team, one stage"],
  ["drive/img-3434", "Story told through dance"],
  ["drive/img-1552", "Every child knows their spot"],
  ["drive/represented-patriotic-dance-in-front-of-all-indian-freedom-fighters-family", "Patriotic dance for the families of India's freedom fighters"],
  ["drive/512262144-9963667283710810-6355978748641646566-n", "Backstage smiles before the show"],
  ["drive/horrar-theme-performed", "The horror-theme act"],
  "drive/img-3691",
  "drive/55949814-2078080958936188-5042395320374263808-n",
  "drive/img-0765",
  ["drive/students-performed-in-raf-camp", "Students performing at the RAF camp"],
  "annual-4",
  "annual-10",
  "annual-2",
  "drive/img-3995",
]);

export const CORPORATE_WALL = wall("A team performance choreographed by Noorr Khan", [
  "corp-6", "corp-1", "corp-2", "corp-12", "corp-5", "corp-13", "corp-10", "corp-4", "corp-3",
]);

// /stage: Noorr himself performing, for the spotlight wall.
export const STAGE_PRESENCE = wall("Noorr Khan performing on stage", [
  ["stage-pose", "Into the limelight"],
  ["drive/sps-5016", "Pehchaan, RJ College"],
  ["drive/img-8050", "Concert stage, sound check"],
  ["stage-wide", "Leading the whole room"],
  ["drive/sps-5029", "Dancing with the faculty"],
  ["film-stage", "Live with the crew"],
  ["drive/img-8062", "Before the show"],
  ["drive/sps-5030", "Getting everyone moving"],
  ["drive/img-4373", "Crew in matching black and gold"],
  ["stage-purple", "A face-off with a student dancer"],
  ["drive/img-8061", "On the steps of the big stage"],
  ["drive/sps-5017", "Pehchaan, RJ College"],
]);

// Behind the scenes of the Kantara character look.
export const KANTARA_BTS = [
  { src: M("kantara-3"), alt: "Make-up artist painting Noorr Khan's face for the Kantara look", caption: "Face paint, by hand" },
  { src: M("kantara-2"), alt: "Noorr Khan in full Kantara costume with a crew member", caption: "Costume on" },
  { src: M("kantara-1"), alt: "Noorr Khan in the Kantara look with a member of the team", caption: "With the team" },
  { src: M("kantara-4"), alt: "Noorr Khan in the Kantara look with a fellow performer", caption: "Ready for the shot" },
];

// Videos from the Google Drive, compressed to 720p in /public/media/video, each with a .webp poster of the same name.
// `vertical` marks phone-shot clips so they get a tall card.
const V = (name, title, line, length, vertical = false) => ({ src: `/media/video/${name}.mp4`, poster: `/media/video/${name}.webp`, title, line, length, vertical });
const VIDEO = {
  teaser: V("annual-day-teaser", "Annual day teaser", "Future Bright School, Ulwe", "0:47"),
  entry: V("nk-entry", "The NK entry", "Annual day showstopper", "1:50"),
  kantara: V("kantara-look", "Kantara look", "Character feature", "0:30", true),
  superKids: V("super-kids", "Super Kids annual dance", "Sunrise School", "0:54"),
  fbStage: V("fb-stage", "Lights up at Future Bright", "Future Bright School, Ulwe", "1:30"),
  fb2816: V("fb-2816", "The full company on stage", "Future Bright School, Ulwe", "1:30"),
  fb2815: V("fb-2815", "Opening number", "Future Bright School, Ulwe", "0:41"),
  sr2787: V("sunrise-2787", "Folk fusion", "Sunrise School annual day", "0:32"),
  sr2786: V("sunrise-2786", "A story in dance", "Sunrise School annual day", "2:05"),
  sr2784: V("sunrise-2784", "Lehenga twirl", "Sunrise School annual day", "2:51"),
  sr2585: V("sunrise-2585", "Hip-hop crew", "Sunrise School annual day", "0:17"),
  olive: V("olive-8867", "Under the open sky", "Olive School annual day", "0:08"),
};
export const KANTARA_VIDEO = VIDEO.kantara;
// From Noorr's Instagram reel of 21 November 2022 (CIDCO flats ad shoot, Ghansoli).
export const CIDCO_VIDEO = V("cidco-ad", "CIDCO homes ad film", "Noorr as the lead model, Ghansoli, Navi Mumbai", "0:42");
// From Noorr's Instagram sangeet reels, compressed in /public/media/video. Shown on /weddings.
export const SANGEET_VIDEOS = [
  V("sangeet-groom-mom", "Groom's mom and aunties", "Living-room rehearsals to the sangeet stage", "1:12", true),
  V("sangeet-groom-cousins", "Groom and cousins", "Practice time for the family act", "1:10", true),
  V("sangeet-bride-mom", "Bride's mom, for her daughter", "A dedication performance at the sangeet", "3:20", true),
];
export const STAGE_VIDEOS =[VIDEO.entry, VIDEO.superKids, VIDEO.teaser, VIDEO.fbStage, VIDEO.sr2585];
export const HOME_VIDEOS = [VIDEO.entry, VIDEO.kantara, VIDEO.teaser, VIDEO.superKids, VIDEO.fbStage, VIDEO.sr2787, VIDEO.sr2585, VIDEO.olive];
export const SCHOOL_VIDEOS = [
  VIDEO.teaser, VIDEO.superKids, VIDEO.entry, VIDEO.fbStage, VIDEO.fb2816, VIDEO.sr2787, VIDEO.sr2786, VIDEO.sr2784, VIDEO.fb2815,
];

// "Count it in" section on the home page: one dance style per count.
// To swap a photo, change the name inside M("...") to a file in public/media.
export const EIGHT_COUNT = [
  { style: "Lyrical hip-hop", line: "Story first, then the groove.", img: M("drive/sps-5006") },
  { style: "Bollywood", line: "Big expressions, bigger finishes.", img: M("annual-red") },
  { style: "Freestyle", line: "No counts written down, only feel.", img: M("drive/img-7131") },
  { style: "Hip-hop", line: "Bounce, rock and attitude.", img: M("drive/img-4372") },
  { style: "Bolly-hop", line: "Filmi melody on a hip-hop beat.", img: M("stage-act") },
  { style: "Krumping", line: "Raw energy, sharp and loud.", img: M("drive/557549525-24771451985821388-1663137907359359613-n") },
  { style: "Locking and popping", line: "Freezes, hits and clean isolations.", img: M("drive/img-4373") },
  { style: "Electro house", line: "Fast feet, endless stamina.", img: M("corp-8") },
];
