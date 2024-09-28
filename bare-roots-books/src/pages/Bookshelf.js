import React from 'react'; // Imports React
import { Canvas } from '@react-three/fiber'; // Imports Canvas from React Three Fiber for 3D rendering
import { OrbitControls } from '@react-three/drei'; // Imports OrbitControls and useTexture for loading images as textures
import booksData from '../data/booksData'; // Imports book data
import Book3D from '../components/Book3D'; // Imports the 3D Book component
import { Container } from 'react-bootstrap'; // Imports Bootstrap layout components
import WandLight from '../components/WandLight';

function Bookshelf() {
  const rows = 3; // Number of rows for the bookshelf
  const bookWidth = 0.8; // Width of each book in 3D
  const bookHeight = 1.2; // Height of the book
  const bookDepth = 0.3; // Depth of the book
  const spacing = 0.4; // Space between each book
  const booksPerRow = Math.ceil(booksData.length / rows); // Calculate how many books per row

  const rowWidth = booksPerRow * (bookWidth + spacing); // Calculate total width for each row
  const shelfHeight = rows * (bookHeight + spacing); // Calculate total height for the shelf

  return (
    <Container className="custom-cursor-enabled">
      <h1>Your Cozy 3D Bookshelf</h1>

      {/* 3D interactive bookshelf */}
      <div style={{ height: '600px', border: '1px solid #ccc', marginBottom: '50px' }}>
        <Canvas shadows>
          <ambientLight intensity={2} /> {/* Soft lighting - try 0.5 to 2.0 as values */}
          <pointLight position={[10, 10, 10]} castShadow /> {/* Point light with shadows*/}
          
          {/* WandLight component that follows the cursor */}
          <WandLight />

          {/* Placing a simple, dynamic, brown rectangle behind the books to act as a shelf */}
          {/* <mesh position={[0, -0.5, -5]} receiveShadow> */}
            {/* <planeGeometry args={[rowWidth + 2, shelfHeight + 2]} /> Width and height of the bookshelf */}
            {/* <meshStandardMaterial color="#8B4513" /> Brown color for the wooden shelf */}
          {/* </mesh> */}

          {/* Loops through books, renders them in 3D with book cover textures, and arranges them into rows */}
          {booksData.map((book, index) => {
            const row = Math.floor(index / booksPerRow); // Determines the row
            const positionX = (index % booksPerRow) * (bookWidth + spacing) - (rowWidth / 2); // Horizontal spacing
            const positionY = row * -(bookHeight + spacing); // Vertical spacing for rows

            return (
              <Book3D
                key={index}
                position={[positionX, positionY, 0]} // Place books in rows
                coverTextureUrl={book.cover} // Passes the book cover URL as a texture
                spineColor={book.color} // Uses the book color for the spine
                width={bookWidth}
                height={bookHeight}
                depth={bookDepth}
              />
            );
          })}

          <OrbitControls /> {/* Allows users to rotate and zoom the 3D view */}
        </Canvas>
      </div>
    </Container>
  );
}

export default Bookshelf; // Exports the Bookshelf page component
