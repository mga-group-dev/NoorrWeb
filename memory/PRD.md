# PRD — Noor Khan Personal Brand Website (Next.js)

## Original Problem Statement
Build a premium, cinematic personal-brand website for Noor Khan — Professional Dance Choreographer, Celebrity Trainer, Performer, Judge, Mentor, Founder of Dance Desire and NR Institute of Dance — around the philosophy "Anyone Can Dance." Content sourced strictly from the supplied profile PDF (20 pages, OCR-extracted). Bollywood film portfolio × luxury personal brand × high-end entertainment agency. Palette: #050505 black (~70%), #111111 charcoal, #F5F5F0 off-white (~20%), #C9A45C metallic gold (~10%). Later revised: "Make the project in Next.js."

## User Decisions (from ask_human)
- PDF supplied at runtime as sole content source (no invented facts).
- BOOK NOOR / CONTACT → dedicated contact page with enquiry form + social links + phone + area.
- Imagery: dummy placeholder images (curated cinematic dance stock).

## Architecture
- Frontend: Next.js 15 (App Router, /app dir, dev server on :3000 via supervisor `yarn start` → `next dev`), Tailwind CSS, framer-motion, lenis smooth scroll, sonner toasts, lucide icons. jsconfig alias @/* → ./src/*.
- Backend: FastAPI (unchanged port 8001), MongoDB via MONGO_URL/DB_NAME env. POST /api/contact persists enquiries to contact_inquiries (uuid id, ISO timestamp). GET /api, /api/status kept.
- Frontend env: REACT_APP_BACKEND_URL (preserved) + NEXT_PUBLIC_BACKEND_URL added (same preview origin).
- Custom gold "N" monogram logo mark as favicon (app/icon.svg) and navbar.

## Sections Implemented (home: app/page.jsx)
1. Cinematic hero — masked line-by-line CSS reveal, parallax bg, outline/solid statement, scroll indicator.
2. Stats band — animated counters 55K+ / 100+ / 250+ with PDF descriptions.
3. About split-screen — portrait + tabs THE ARTIST / THE CHOREOGRAPHER / THE MENTOR.
4. Horizontal cinematic timeline (scroll-driven, 340vh sticky) — 2011 Ganesh Acharya, 2013 Zilla Ghaziabad, 2015 Welcome Back, 2018 Simmba, 2020 Naach Nachaiya Dhoom Machaiya, 2026 Still Creating.
5. Screened With The Stars — 15 star cards + screen credits strip + more names (all from PDF).
6. Filmography — 60+ huge, 12 credit cards, 3 shooting-diary cards (Maratha look, Kantara feature, Shooting Diaries).
7. Dance Is A Language — 8 styles, cursor-following hover image (desktop), tap accordion (mobile).
8. Taking Dance Across India — stylized SVG India map with pulsing gold pins (Mumbai, Pune, Kolkata, Surat, Hyderabad, Satara) + workshop photos.
9. Services — 4 expandable cards (Schools with full PDF descriptions, Colleges, Corporates, Professional).
10. Judge. Mentor. Performer. — awards (Best Choreographer Bombay's Dancing Fever 2017 by Mukesh Khanna), judging venues lists.
11. Beyond Dance — Modeling (CIDCO), Creative Head (India's Big Superstar, Crazy Dancing Star), Media & Albums (Mere Pyare Watan).
12. Gallery — masonry + 7 category filters + full-screen lightbox (arrows, ESC).
13. Final CTA + contact info; Footer — Dance Desire, NR Institute of Dance, socials.
14. Contact page (/contact) — validated form → POST /api/contact, toast feedback; phone/email/socials/area block.
Mobile: sticky CALL NOW / BOOK NOOR bar, hamburger overlay menu, stacked layouts, no overflow-x.

## Verification (done)
- curl: GET /api, POST /api/contact 200 with persisted doc; external preview host / and /contact 200.
- Screenshots: home hero desktop, stats, timeline mid-scroll, gallery, final CTA + footer, mobile hero (390), mobile stats (counter mid-animation), contact desktop, contact form submitted → success toast.
- Fixed during build: IndiaMap duplicate component name; hero framer mount-cancelled reveal → CSS mask animation; Next allowedDevOrigins config.

## Backlog (P0–P2)
- P0: Replace dummy Unsplash imagery with real photos from Noor's profile when supplied.
- P1: Admin panel to view/contact enquiries; WhatsApp click-to-chat deep link.
- P2: Real showreel video background in hero; blog/media page.
