// All copy comes from Noor Khan's profile deck. All photos live in /public/media.
const M = (name) => `/media/${name}.webp`;

export const IDENTITY = {
  name: "Noor Khan",
  role: "Professional dance choreographer and celebrity trainer",
  founder: "Founder of Dance Desire and NR Institute of Dance",
  motto: "Anyone can dance",
};

export const CONTACT = {
  phones: ["9167439223", "8451917779"],
  email: "choreographernoorkhan@gmail.com",
  instagram: { handle: "@noorkhaanofficial", url: "https://instagram.com/noorkhaanofficial" },
  facebook: { handle: "noordanceislife", url: "https://facebook.com/noordanceislife" },
  whatsapp: "919167439223",
};

export const HERO_REEL = [M("stage-pose"), M("annual-red"), M("film-ramleela"), M("stage-purple"), M("annual-yellow")];

export const PORTRAIT = M("portrait");
export const CUTOUT = M("cutout");

export const STATS = [
  { value: 55, suffix: "K+", label: "Students trained", note: "In workshops, classes and online sessions" },
  { value: 100, suffix: "+", label: "College choreographies", note: "Choreographed for fests and annual days" },
  { value: 250, suffix: "+", label: "School programs", note: "Annual days, festivals and competitions" },
];

export const FILM_STRIP = [
  "annual-red", "kids-selfie", "stage-red", "crew-black", "annual-yellow", "college-blue",
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

// Bollywood credits, as listed in the profile deck.
export const CREDITS = [
  { star: "Salman Khan", work: "Bodyguard", img: M("shoot-1") },
  { star: "Ranveer Singh", work: "Ramleela", img: M("film-ramleela") },
  { star: "Ranbir Kapoor", work: "Brahmastra", img: M("film-bw") },
  { star: "Alia Bhatt", work: "Brahmastra", img: M("shoot-2") },
  { star: "Mallika Sherawat", work: "Live performance", img: M("film-stage") },
  { star: "Vijay Verma", work: "Netflix, upcoming film", img: M("kantara") },
  { star: "Ayushmann Khurrana", work: "Upcoming film", img: M("shoot-3") },
  { star: "Sara Ali Khan", work: "Upcoming film", img: M("shoot-4") },
  { star: "Arshad Warsi", work: "Zila Ghaziabad", img: M("shoot-5") },
  { star: "Sapna Chaudhary", work: "Live performance", img: M("stage-wide") },
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
    body: "For Vijay Verma's upcoming project, Noor stepped into a full Kantara look. It was less about steps and more about carrying a whole culture in the body.",
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

export const STAGE_CHAPTERS = [
  {
    title: "Dance workshops",
    body: "Noor has taken his workshops to cities across India. Every room is different, but the first ten minutes are always the same: getting people to stop worrying about looking silly.",
    imgs: [M("workshop-3"), M("workshop-1"), M("workshop-5"), M("workshop-6")],
  },
  {
    title: "Corporate shows and events",
    body: "Office teams who have never danced together, turned into a show. He keeps the routines simple enough to learn and sharp enough to look good on stage.",
    imgs: [M("corp-8"), M("corp-11"), M("corp-9"), M("corp-7")],
  },
  {
    title: "School and college annual days",
    body: "Annual days with a stage full of children and one evening to get it right. Noor plans the theme, sets the routines and makes sure every child knows where to stand.",
    imgs: [M("annual-6"), M("annual-7"), M("annual-12"), M("annual-8")],
  },
  {
    title: "Electrifying stage presence",
    body: "When he performs himself, it is the same energy he asks of his students, just with nobody to hide behind.",
    imgs: [M("stage-pose"), M("stage-purple"), M("stage-zombie"), M("stage-crane")],
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

export const JUDGE_PHOTOS = ["judge-2", "judge-10", "judge-5", "judge-3", "judge-11", "judge-7"].map(M);
export const NEWSPAPER = M("newspaper");

export const AWARDS = [
  { title: "Best Choreographer", by: "Bombay's Dancing Fever 2017", img: M("award-bdf") },
  { title: "Awarded by actor Mukesh Khanna", by: "Recognition on stage", img: M("award-khanna") },
  { title: "Chief guest", by: "Fashion walk", img: M("award-guest") },
  { title: "Social work", by: "Humanity First Foundation", img: M("award-social") },
  { title: "Inter-college judge", by: "JhunJhunWala College", img: M("award-college") },
];

export const STYLES = ["Lyrical hip-hop", "Bollywood", "Freestyle", "Hip-hop", "Bolly-hop", "Krumping", "Locking and popping", "Electro house"];
export const STYLES_IMG = M("beach");

export const BEYOND = [
  { title: "Main model for CIDCO buildings, Navi Mumbai", img: M("cidco-1") },
  { title: "Lead model, Mere Pyare Watan patriotic album", img: M("model-3") },
  { title: "Creative head, India's Big Superstar", img: M("model-1") },
  { title: "Creative head, Crazy Dancing Star", img: M("model-2") },
];

export const PROGRAMS = [
  {
    title: "Academic year dance classes",
    body: "Weekly classes through the school year. Students build real technique step by step, so by the time a show comes around they are confident, not nervous.",
    img: M("annual-red"),
  },
  {
    title: "Annual day performances",
    body: "From the first idea to the final bow. Noor builds the theme, choreographs every item and rehearses until the whole thing runs cleanly on the night.",
    img: M("annual-7"),
  },
  {
    title: "Festival choreography",
    body: "Pieces built around the festival your school is celebrating, so the dance actually says something about the day instead of being a generic routine.",
    img: M("annual-9"),
  },
  {
    title: "Competition training",
    body: "Coaching from someone who sits on the judging panel at these competitions. He knows what judges notice, and he trains students for exactly that.",
    img: M("annual-11"),
  },
];

// "Count it in" section on the home page: one dance style per count.
// To swap a photo, change the name inside M("...") to a file in public/media.
export const EIGHT_COUNT = [
  { style: "Lyrical hip-hop", line: "Story first, then the groove.", img: M("stage-pose") },
  { style: "Bollywood", line: "Big expressions, bigger finishes.", img: M("annual-red") },
  { style: "Freestyle", line: "No counts written down, only feel.", img: M("film-ramleela") },
  { style: "Hip-hop", line: "Bounce, rock and attitude.", img: M("college-duo") },
  { style: "Bolly-hop", line: "Filmi melody on a hip-hop beat.", img: M("kids-stage") },
  { style: "Krumping", line: "Raw energy, sharp and loud.", img: M("corp-3") },
  { style: "Locking and popping", line: "Freezes, hits and clean isolations.", img: M("annual-yellow") },
  { style: "Electro house", line: "Fast feet, endless stamina.", img: M("crew-black") },
];
