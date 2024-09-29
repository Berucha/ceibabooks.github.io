import React from 'react';
import { useTexture } from '@react-three/drei'; // useTexture for loading textures
// import "../css/components/Book3D.css"

// Book3D component renders a 3D book with a texture on it
function Book3D({ position, coverTextureUrl, spineColor, width, height, depth }) {
  // Fallback image in case coverTextureUrl is invalid or fails to load
  const fallbackTextureUrl = 'path/to/fallback/image.png';
  
  // Check if coverTextureUrl is valid, otherwise load the fallback image
  const coverTexture = useTexture(coverTextureUrl || fallbackTextureUrl);

  return (
    <mesh position={position} castShadow receiveShadow> {/* Allows the book to cast and receive shadows */}
      <boxGeometry args={[width, height, depth]} /> {/* Dynamic 3D book shape */}

      {/* Apply texture if it's valid, otherwise fallback to spine color */}
      {coverTexture ? (
        <meshStandardMaterial attachArray="material" map={coverTexture} />
      ) : (
        <meshStandardMaterial attachArray="material" color={spineColor} />
      )}

      {/* Apply spine color for all other faces */}
      {/* <meshStandardMaterial attachArray="material" color={spineColor} /> */}
      {/* <meshStandardMaterial attachArray="material" color={spineColor} /> */}
      {/* <meshStandardMaterial attachArray="material" color={spineColor} /> */}
      {/* <meshStandardMaterial attachArray="material" color={spineColor} /> */}
      {/* <meshStandardMaterial attachArray="material" color={spineColor} /> */}
    </mesh>
  );
}

export default Book3D;
