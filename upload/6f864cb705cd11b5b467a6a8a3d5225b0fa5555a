const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

const ROUTES = [
  ["/", 1],
  ["/about", 0.8],
  ["/films", 0.8],
  ["/stage", 0.8],
  ["/programs", 0.9],
  ["/corporate", 0.9],
  ["/weddings", 0.9],
  ["/schools-colleges", 0.9],
  ["/judge-jury", 0.8],
  ["/awards", 0.8],
  ["/contact", 0.9],
];

export default function sitemap() {
  return ROUTES.map(([path, priority]) => ({ url: `${SITE_URL}${path}`, changeFrequency: "monthly", priority }));
}
