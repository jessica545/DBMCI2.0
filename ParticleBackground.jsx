import React from "react";
import Particles from "react-tsparticles";

const ParticleBackground = () => {
  return (
    <Particles
      options={{
        particles: {
          number: { value: 50 },
          size: { value: 3 },
          move: { speed: 1 },
          line_linked: { enable: true },
          color: { value: "#0056ff" },
        },
        background: {
          color: "#f7f7f7",
        },
      }}
    />
  );
};

export default ParticleBackground;