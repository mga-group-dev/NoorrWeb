"use client";

import { useEffect, useRef, useState } from "react";
import { blurOf } from "@/content";

// Measures a photo against the box it is drawn in. True when filling the box (object-cover) would cut away more than
// `maxCut` of the photo, e.g. a portrait in a wide card. Re-checks when the image loads or the box resizes.
export function useOverCrop(ref, src, maxCut = 0.4) {
  const [over, setOver] = useState(false);
  useEffect(() => {
    const img = ref.current;
    if (!img) return;
    const check = () => {
      const w = img.clientWidth, h = img.clientHeight;
      if (!img.naturalWidth || !w || !h) return;
      const na = img.naturalWidth / img.naturalHeight, ba = w / h;
      setOver(1 - Math.min(na, ba) / Math.max(na, ba) > maxCut);
    };
    check();
    img.addEventListener("load", check);
    const ro = new ResizeObserver(check);
    ro.observe(img);
    return () => {
      img.removeEventListener("load", check);
      ro.disconnect();
    };
  }, [ref, src, maxCut]);
  return over;
}

// An absolutely positioned <img> that fills its box like object-cover, unless that would crop the photo badly;
// then it shows the whole photo over a blurred, cover-fitted copy of itself. The parent must be `relative`.
export default function SmartImg({ src, alt = "", className = "", style, maxCut = 0.4, ...rest }) {
  const ref = useRef(null);
  const over = useOverCrop(ref, src, maxCut);
  return (
    <>
      {over && (
        <img src={blurOf(src)} alt="" aria-hidden="true" decoding="async" className={`${className} blur-2xl scale-125 opacity-70`} style={{ objectFit: "cover" }} />
      )}
      <img ref={ref} src={src} alt={alt} className={className} style={over ? { ...style, objectFit: "contain" } : style} {...rest} />
    </>
  );
}
