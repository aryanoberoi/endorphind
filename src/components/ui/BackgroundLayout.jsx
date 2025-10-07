// src/ui/BackgroundLayout.jsx
import React from "react";
import Particles from "./Particles";

const BackgroundLayout = ({ children }) => {
  return (
    <div className="relative w-full min-h-screen bg-black text-white overflow-hidden">
      {/* Particle Background (below content but above base bg) */}
      <div className="absolute inset-0 z-0 opacity-70">
      <Particles
              particleColors={['#ffffff', '#ffffff']}
              particleCount={3000}
              particleSpread={10}
              speed={0.1}
              particleBaseSize={50}
              moveParticlesOnHover={false}
              alphaParticles={false}
              disableRotation={false}
            />
      </div>

      {/* Optional subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60 z-10 pointer-events-none" />

      {/* Foreground Content */}
      <main className="relative z-20">{children}</main>
    </div>
  );
};

export default BackgroundLayout;
