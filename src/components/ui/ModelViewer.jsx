/**
 * ModelViewer.jsx
 *
 * Loads a GLB 3D model and renders it in a transparent R3F canvas.
 * - Desktop: model tracks mouse with subtle parallax + floating bob
 * - Mobile:  model is static, mouse listener skipped
 */

import { Suspense, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, Environment } from "@react-three/drei";
import * as THREE from "three";

/* ─── The 3-D model mesh ─────────────────────────────────────── */
function Model({ mouseRef }) {
  const group = useRef();
  const { scene } = useGLTF("/model.glb");
  const clock = useRef(0);
  const isMobile = window.innerWidth < 768;

  useFrame((_, delta) => {
    if (!group.current) return;
    clock.current += delta;

    /* Floating bob */
    group.current.position.y = Math.sin(clock.current * 0.8) * 0.12;

    if (!isMobile && mouseRef.current) {
      /* Smooth interpolate rotation toward mouse */
      const targetX = mouseRef.current[1] * 0.35;
      const targetY = mouseRef.current[0] * 0.55;
      group.current.rotation.x = THREE.MathUtils.lerp(
        group.current.rotation.x,
        targetX,
        0.05,
      );
      group.current.rotation.y = THREE.MathUtils.lerp(
        group.current.rotation.y,
        targetY,
        0.05,
      );
    }
  });

  return (
    <group ref={group}>
      <primitive object={scene} scale={2.2} />
    </group>
  );
}

/* ─── Camera fit helper ──────────────────────────────────────── */
function CameraRig() {
  const { camera } = useThree();
  camera.position.set(0, 0, 5);
  return null;
}

/* ─── Exported component ─────────────────────────────────────── */
export default function ModelViewer({ mouseRef }) {
  return (
    <div
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 10 }}
    >
      <Canvas
        gl={{ alpha: true, antialias: true }}
        camera={{ fov: 45, near: 0.1, far: 100, position: [0, 0, 5] }}
        style={{ background: "transparent" }}
      >
        <CameraRig />

        {/* Lighting */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[4, 6, 3]} intensity={1.8} castShadow />
        <directionalLight
          position={[-4, -2, -3]}
          intensity={0.4}
          color="#a78bfa"
        />
        <pointLight position={[0, 4, 2]} intensity={1.2} color="#c4b5fd" />

        <Suspense fallback={null}>
          <Model mouseRef={mouseRef} />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}
