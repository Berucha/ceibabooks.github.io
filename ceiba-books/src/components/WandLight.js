// src/components/WandLight.js
import React, { useState, useEffect } from 'react';
import '../css/components/WandLight.css'

const WandLight = () => {
  const [lightPosition, setLightPosition] = useState([0, 0, 5]);

  // Update the light position based on the mouse move event
  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const x = (clientX / window.innerWidth) * 2 - 1;
    const y = -(clientY / window.innerHeight) * 2 + 1;

    setLightPosition([x * 5, y * 5, 5]); // Adjust multiplier to control light's spread here
  };

  // Add event listener to track mouse movements
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <spotLight
      position={lightPosition}
      angle={0.3} // Controls the spread of the light
      intensity={2} // Intensity of the light
      penumbra={1} // Softness of the edge of the light
      castShadow
    />
  );
};

export default WandLight;
