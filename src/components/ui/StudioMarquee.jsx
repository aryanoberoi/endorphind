/**
 * StudioMarquee.jsx
 *
 * Infinite GSAP-powered marquee displaying "ENDORPHIND STUDIOS"
 * Positioned at the very top of the viewport.
 */

import { useEffect, useRef } from "react";
import gsap from "gsap";

const LABEL =
  "ENDORPHIND STUDIOS  ✦  ENDORPHIND STUDIOS  ✦  ENDORPHIND STUDIOS  ✦  ENDORPHIND STUDIOS  ✦  ENDORPHIND STUDIOS  ✦  ";

export default function StudioMarquee() {
  const trackRef = useRef(null);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const tween = gsap.to(el, {
      xPercent: -50,
      repeat: -1,
      duration: 22,
      ease: "linear",
    });

    return () => tween.kill();
  }, []);

  return (
    <div
      className="absolute top-0 left-0 right-0 overflow-hidden"
      style={{
        zIndex: 30,
        background: "rgba(0,0,0,0.72)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {/* Double the text so the 50% xPercent trick loops seamlessly */}
      <div
        ref={trackRef}
        className="flex whitespace-nowrap will-change-transform"
        style={{ width: "max-content" }}
      >
        <span
          style={{
            fontFamily: "'Inter', 'Space Grotesk', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(12px, 1.4vw, 18px)",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "#ffffff",
            opacity: 0.9,
            padding: "10px 0",
            display: "inline-block",
          }}
        >
          {LABEL}
        </span>
        {/* Duplicate for seamless loop */}
        <span
          aria-hidden
          style={{
            fontFamily: "'Inter', 'Space Grotesk', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(12px, 1.4vw, 18px)",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "#ffffff",
            opacity: 0.9,
            padding: "10px 0",
            display: "inline-block",
          }}
        >
          {LABEL}
        </span>
      </div>
    </div>
  );
}
