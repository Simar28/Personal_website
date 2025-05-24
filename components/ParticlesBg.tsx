// app/components/ParticlesBg.tsx
"use client";
import Particles from "react-tsparticles";

export default function ParticlesBg() {
  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: { enable: true, zIndex: 0 },
        particles: {
          number: { value: 70, density: { enable: true, area: 900 } },
          color: { value: ["#00e6fe", "#b987fa", "#ffffff"] },
          links: {
            enable: true,
            color: "#b987fa",
            opacity: 0.2,
            width: 1,
            distance: 120,
          },
          move: { enable: true, speed: 0.7 },
          size: { value: 2 },
          opacity: { value: 0.4 },
        },
        background: { color: "#181823" },
      }}
    />
  );
}
