// src/components/BouncingPlant.js
import React, { useEffect, useState } from 'react';
import '../css/components/BouncingPlant.css';

const BouncingPlant = ({ selectedPlant }) => {
  const [position, setPosition] = useState({ top: '50%', left: '50%' });

  useEffect(() => {
    // Function to randomly move the plant across the screen
    const movePlant = () => {
      const top = Math.floor(Math.random() * (window.innerHeight - 150)) + 'px';
      const left = Math.floor(Math.random() * (window.innerWidth - 150)) + 'px';
      setPosition({ top, left });
    };

    // Move the plant every 2 seconds
    const interval = setInterval(movePlant, 2000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  if (!selectedPlant) return null; // Do not render if no plant is selected

  return (
    <img
      src={selectedPlant}
      alt="Plant"
      className="bouncing-plant"
      style={{ top: position.top, left: position.left }}
    />
  );
};

export default BouncingPlant;