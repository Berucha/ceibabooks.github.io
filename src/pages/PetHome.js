// src/pages/PetHome.js
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Pet from '../components/Pet';
import '../css/pages/PetHome.css';

function PetHome() {
  return (
    <div className="petContainer">
      <Canvas>
        {/* Ambient light for general lighting */}
        <ambientLight intensity={0.8} />

        {/* Point light to highlight the 3D model */}
        <pointLight position={[10, 10, 10]} />

        {/* Suspense to handle the loading state for the 3D model */}
        <Suspense fallback={<div>Loading your pet...</div>}>
          {/* Path to the 3D model */}
          <Pet modelPath="/3d-models/shiba.glb" />
        </Suspense>

        {/* Controls to rotate and zoom into the 3D model */}
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default PetHome;
