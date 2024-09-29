// src/pages/PetHome.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Pet from '../components/Pet';
import '../css/pages/PetHome.css'

function PetHome() {
  return (
    <div className="petContainer">
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Pet modelPath="/workspaces/berucha.github.io/bare-roots-books/public/3d-models/shiba.glb" />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default PetHome;
