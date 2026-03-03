/**
 * BackgroundShader.jsx
 *
 * Full-viewport OGL WebGL canvas that renders bg.jpg with a
 * fluid displacement / smudge effect driven by mouse position.
 *
 * On mobile (< 768 px) the canvas simply draws the plain image.
 */

import { useEffect, useRef } from "react";
import { Renderer, Program, Mesh, Triangle, Texture } from "ogl";

/* ─── GLSL Shaders ────────────────────────────────────────────── */

const vertex = /* glsl */ `
  attribute vec2 position;
  attribute vec2 uv;
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

const fragment = /* glsl */ `
  precision highp float;

  uniform sampler2D uTexture;
  uniform vec2      uMouse;        /* 0..1 normalised */
  uniform float     uRadius;       /* smudge radius   */
  uniform float     uStrength;     /* distortion mag  */
  uniform float     uTime;

  varying vec2 vUv;

  /* Smooth radial falloff */
  float falloff(float dist, float r) {
    return 1.0 - smoothstep(0.0, r, dist);
  }

  void main() {
    vec2 uv = vUv;

    /* Aspect-correct mouse influence */
    vec2 delta = uv - uMouse;
    delta.x   *= (1.0);  /* can multiply by aspectRatio if needed */

    float dist    = length(delta);
    float weight  = falloff(dist, uRadius);

    /* Smear pixels radially away from cursor */
    vec2 displaced = uv + normalize(delta + 0.0001) * weight * uStrength * -1.0;

    /* Subtle breathing to keep edges from being harsh */
    displaced += 0.003 * sin(uTime * 0.4 + uv * 6.0);

    vec4 color = texture2D(uTexture, displaced);
    gl_FragColor = color;
  }
`;

/* ─── Component ───────────────────────────────────────────────── */

export default function BackgroundShader({ imageSrc = "/bg.jpg" }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const isMobile = window.innerWidth < 768;

    /* ── Renderer ── */
    const renderer = new Renderer({
      alpha: false,
      antialias: false,
      powerPreference: "high-performance",
    });
    const { gl } = renderer;
    gl.clearColor(0.07, 0.05, 0.11, 1);
    container.appendChild(gl.canvas);

    /* Canvas fills container */
    const resize = () => {
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    resize();
    window.addEventListener("resize", resize);

    /* ── Texture ── */
    const texture = new Texture(gl, {
      generateMipmaps: false,
      minFilter: gl.LINEAR,
      magFilter: gl.LINEAR,
      wrapS: gl.CLAMP_TO_EDGE,
      wrapT: gl.CLAMP_TO_EDGE,
    });

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = imageSrc;
    img.onload = () => {
      texture.image = img;
    };

    /* ── Full-screen Triangle (no index buffer cheaper than quad) ── */
    const geometry = new Triangle(gl);

    /* ── Program ── */
    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        uTexture: { value: texture },
        uMouse: { value: [0.5, 0.5] },
        uRadius: { value: 0.22 },
        uStrength: { value: isMobile ? 0.0 : 0.0 }, // start at 0, animate in
        uTime: { value: 0 },
      },
    });

    const mesh = new Mesh(gl, { geometry, program });

    /* ── Mouse tracking ── */
    let targetMouse = [0.5, 0.5];
    let currentMouse = [0.5, 0.5];
    let targetStrength = 0.0;
    let currentStrength = 0.0;

    const onMove = (e) => {
      const rect = container.getBoundingClientRect();
      targetMouse = [
        (e.clientX - rect.left) / rect.width,
        1.0 - (e.clientY - rect.top) / rect.height,
      ];
      targetStrength = isMobile ? 0 : 0.042;
    };

    const onLeave = () => {
      targetStrength = 0.0;
    };

    if (!isMobile) {
      window.addEventListener("mousemove", onMove);
      container.addEventListener("mouseleave", onLeave);
    }

    /* ── Render loop ── */
    let rafId;
    const lerp = (a, b, t) => a + (b - a) * t;

    const render = (t) => {
      rafId = requestAnimationFrame(render);

      /* Smooth mouse */
      currentMouse[0] = lerp(currentMouse[0], targetMouse[0], 0.08);
      currentMouse[1] = lerp(currentMouse[1], targetMouse[1], 0.08);
      currentStrength = lerp(currentStrength, targetStrength, 0.06);

      program.uniforms.uMouse.value = currentMouse;
      program.uniforms.uStrength.value = currentStrength;
      program.uniforms.uTime.value = t * 0.001;

      renderer.render({ scene: mesh });
    };
    rafId = requestAnimationFrame(render);

    /* ── Cleanup ── */
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      container.removeEventListener("mouseleave", onLeave);
      gl.canvas.remove();
      renderer.gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, [imageSrc]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 0 }}
    />
  );
}
