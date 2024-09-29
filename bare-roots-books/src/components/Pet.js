// src/components/Pet.js
import React from 'react';
import { useGLTF } from '@react-three/drei'; // Allows you to load .glb/.gltf files

// Component to load and render the 3D plant pet
const Pet = ({ modelPath }) => {
  // Load the GLTF model
  const { scene } = useGLTF(modelPath);

  return (
    <primitive object={scene} scale={1.5} /> // Adjust scale as needed
  );
};

export default Pet;
