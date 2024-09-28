import React from 'react'; // Imports React
import { Canvas } from '@react-three/fiber'; // Imports Canvas from React Three Fiber for 3D rendering
import { OrbitControls, useTexture } from '@react-three/drei'; // Imports OrbitControls and useTexture for loading images as textures
import booksData from '../data/booksData'; // Imports book data
import Book3D from '../components/Book3D'; // Imports the 3D Book component
import { Container } from 'react-bootstrap'; // Imports Bootstrap layout components

function Bookshelf() {
  return (
    <Container>
      <h1>Your Cozy 3D Bookshelf</h1>

      {/* 3D interactive bookshelf */}
      <div style={{ height: '500px', border: '1px solid #ccc', marginBottom: '50px' }}>
        <Canvas>
          <ambientLight intensity={0.5} /> {/* Soft lighting */}
          <pointLight position={[10, 10, 10]} /> {/* Point light */}
          
          {/* Loops through books and renders them in 3D with book cover textures */}
          {booksData.map((book, index) => (
            <Book3D
              key={index}
              position={[index * 2 - (booksData.length / 2) * 2, 0, 0]} // Spacing the books evenly
              textureUrl={book.cover} // Passes the book cover URL as a texture
            />
          ))}

          <OrbitControls /> {/* Allows users to rotate and zoom the 3D view */}
        </Canvas>
      </div>
    </Container>
  );
}

export default Bookshelf; // Exports the Bookshelf page component
