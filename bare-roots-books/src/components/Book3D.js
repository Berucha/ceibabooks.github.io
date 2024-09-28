import React from 'react'; // Imports React
import { useTexture } from '@react-three/drei'; // useTexture for loading textures

// Book3D component renders a 3D book with a texture on it
function Book3D({ position, coverTextureUrl, spineColor, width, height, depth }) {
  const coverTexture = useTexture(coverTextureUrl); // Loads the book cover texture

  return (
    <mesh position={position} castShadow receiveShadow> {/* Allows the book to cast and receive shadows */}
      <boxGeometry args={[width, height, depth]} /> {/* Dynamic 3D book shape */}

      {/* Applies the book cover as texture for the front and applies different materials for the other sides */}
      <meshStandardMaterial attachArray="material" map={coverTexture} /> {/* Front face (cover) */}
      {/* <meshStandardMaterial attachArray="material" color={spineColor} /> Back face */}
      {/* <meshStandardMaterial attachArray="material" color={spineColor} /> Top face */}
      {/* <meshStandardMaterial attachArray="material" color={spineColor} /> Bottom face */}
      {/* <meshStandardMaterial attachArray="material" color={spineColor} /> Left face (spine) */}
      {/* <meshStandardMaterial attachArray="material" color={spineColor} /> Right face */}
    </mesh>
  );
}

export default Book3D;
