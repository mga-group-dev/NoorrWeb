// Mirrored flourish: two feathered leaves curling into a spiral at the centre, resting on a hairline.
// Drawn as one half and flipped, so both sides stay perfectly symmetric.
export default function Ornament({ className = "", color = "currentColor" }) {
  const half = (
    <>
      <path d="M68 19 C 52 7, 30 7, 8 19 C 30 15, 50 15, 68 19 Z" fill={color} />
      <path d="M64 22 C 48 21, 30 24, 14 24 C 30 29, 50 28, 64 22 Z" fill={color} opacity="0.85" />
      <path d="M66 21 C 70 9, 82 8, 82 17 C 82 24, 73 25, 73 19 C 73 15, 78 15, 78 18" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </>
  );
  return (
    <svg viewBox="0 0 168 34" className={className} aria-hidden="true">
      <g>{half}</g>
      <g transform="translate(168 0) scale(-1 1)">{half}</g>
      <path d="M4 32 H164" stroke={color} strokeWidth="1.4" opacity="0.8" />
    </svg>
  );
}
