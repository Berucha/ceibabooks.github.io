import React from 'react'; // Imports React
import { useTexture } from '@react-three/drei'; // useTexture for loading textures

// Book3D component renders a 3D book with a texture on it
function Book3D({ position, textureUrl }) {
  const texture = useTexture(textureUrl); // Loads the book cover texture

  return (
    <mesh position={position}>
      <boxGeometry args={[1, 2, 0.5]} /> {/* 3D book shape (box) */}
      <meshStandardMaterial map={texture} /> {/* Applies the book cover as texture */}
    </mesh>
  );
}

export default Book3D;
