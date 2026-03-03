/**
 * InteractivePage.jsx
 *
 * The hero landing page that composes:
 *  - BackgroundShader  (z-0)  — WebGL smudge displacement canvas
 *  - ModelViewer       (z-10) — 3D GLB with mouse parallax
 *  - StudioMarquee     (z-30) — Infinite GSAP marquee at top
 *  - Overlay text      (z-20) — Centred brand copy
 *
 * Route: /interactive
 */

import { useCallback, useRef } from "react";
import BackgroundShader from "../components/ui/BackgroundShader";
import ModelViewer from "../components/ui/ModelViewer";
import StudioMarquee from "../components/ui/StudioMarquee";

export default function InteractivePage() {
  /* Shared mouse state passed into the R3F world */
  const mouseRef = useRef([0, 0]);

  const handleMouseMove = useCallback((e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2; // -1 → 1
    const y = -(e.clientY / window.innerHeight - 0.5) * 2; // -1 → 1 (flipped)
    mouseRef.current = [x, y];
  }, []);

  return (
    <div
      className="relative w-screen h-screen overflow-hidden select-none"
      onMouseMove={handleMouseMove}
      style={{ background: "#0b0812", cursor: "none" }}
    >
      {/* ── Layer 0 · WebGL smudge background ── */}
      <BackgroundShader imageSrc="/bg.jpg" />

      {/* ── Layer 1 · Dark vignette overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 5,
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(11,8,18,0.0) 0%, rgba(11,8,18,0.55) 80%)",
        }}
      />

      {/* ── Layer 2 · 3-D Model ── */}
      <ModelViewer mouseRef={mouseRef} />

      {/* ── Layer 3 · Brand text overlay ── */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-end pb-24 pointer-events-none"
        style={{ zIndex: 20 }}
      >
        {/* Studio wordmark */}
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 300,
            fontSize: "clamp(11px, 1.1vw, 15px)",
            letterSpacing: "0.5em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.5)",
            marginBottom: "1rem",
          }}
        >
          Creative AI & Wellness Studio
        </p>

        {/* Large headline */}
        <h1
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(42px, 8vw, 110px)",
            lineHeight: 1,
            letterSpacing: "-0.03em",
            textAlign: "center",
            color: "#ffffff",
            textShadow: "0 0 80px rgba(167,139,250,0.35)",
            marginBottom: "2rem",
          }}
        >
          Endorphind
        </h1>

        {/* CTA chevron */}
        <div
          style={{
            width: 40,
            height: 40,
            borderRight: "2px solid rgba(255,255,255,0.35)",
            borderBottom: "2px solid rgba(255,255,255,0.35)",
            transform: "rotate(45deg)",
            animation: "bounceDown 1.8s ease-in-out infinite",
          }}
        />
      </div>

      {/* ── Layer 4 · Custom cursor dot ── */}
      <CustomCursorDot />

      {/* ── Layer 5 · Marquee ── */}
      <StudioMarquee />

      {/* Inline keyframes for the chevron bounce */}
      <style>{`
        @keyframes bounceDown {
          0%, 100% { transform: rotate(45deg) translateY(0);   opacity: 0.3; }
          50%       { transform: rotate(45deg) translateY(8px); opacity: 0.9; }
        }
      `}</style>
    </div>
  );
}

/* ─── Tiny custom cursor ────────────────────────────────────── */
import { useEffect, useState } from "react";

function CustomCursorDot() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e) => {
      if (e.target.tagName === "A" || e.target.tagName === "BUTTON")
        setIsHovering(true);
    };
    const out = () => setIsHovering(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    window.addEventListener("mouseout", out);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mouseout", out);
    };
  }, []);

  return (
    <>
      {/* Outer ring */}
      <div
        style={{
          position: "fixed",
          top: pos.y,
          left: pos.x,
          width: isHovering ? 44 : 32,
          height: isHovering ? 44 : 32,
          borderRadius: "50%",
          border: "1.5px solid rgba(167,139,250,0.7)",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 9999,
          transition: "width 0.2s, height 0.2s, border-color 0.2s",
          mixBlendMode: "difference",
        }}
      />
      {/* Inner dot */}
      <div
        style={{
          position: "fixed",
          top: pos.y,
          left: pos.x,
          width: 5,
          height: 5,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.9)",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 9999,
        }}
      />
    </>
  );
}
