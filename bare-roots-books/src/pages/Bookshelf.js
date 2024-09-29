import React, { useState } from 'react'; // Imports React and hooks
import { Canvas } from '@react-three/fiber'; // Imports Canvas from React Three Fiber for 3D rendering
import { OrbitControls } from '@react-three/drei'; // Imports OrbitControls for 3D navigation
import Book3D from '../components/Book3D'; // Imports the 3D Book component
import defaultBooks from '../data/booksData'; // Pre-populated default bookshelf
import '../css/components/WandLight.css';
import '../css/pages/Bookshelf.css';

function Bookshelf() {
  const [showPreview, setShowPreview] = useState(false); // Toggle for showing the 3D bookshelf preview

  // Function to render the current bookshelf
  const renderBookshelfPreview = (books) => {
    const rows = 3; // Number of rows for the bookshelf
    const bookWidth = 0.8; // Width of each book in 3D
    const bookHeight = 1.2; // Height of the book
    const bookDepth = 0.3; // Depth of the book
    const spacing = 0.4; // Space between each book
    const booksPerRow = Math.ceil(books.length / rows); // Calculate how many books per row
    const rowWidth = booksPerRow * (bookWidth + spacing); // Calculate total width for each row

    return (
      <Canvas shadows camera={{ position: [0, 3, 6], fov: 55 }}>
        <ambientLight intensity={2} />
        <pointLight position={[10, 10, 10]} castShadow />
        {/* Placing a simple, dynamic, brown rectangle behind the books to act as a shelf */}
        {/* <mesh position={[0, -0.5, -5]} receiveShadow> */}
        {/* <planeGeometry args={[rowWidth + 2, shelfHeight + 2]} /> Width and height of the bookshelf */}
        {/* <meshStandardMaterial color="#8B4513" /> Brown color for the wooden shelf */}
        {/* </mesh> */}
        {books.map((book, index) => {
          const row = Math.floor(index / booksPerRow);
          const positionX = (index % booksPerRow) * (bookWidth + spacing) - (rowWidth / 2);
          const positionY = row * -(bookHeight + spacing);

          return (
            <Book3D
              key={index}
              position={[positionX, positionY, 0]}
              coverTextureUrl={book.cover} // Display cover from user's localStorage or default bookshelf
              spineColor={book.color || '#6B4F4F'} // Default color for spine
              width={bookWidth}
              height={bookHeight}
              depth={bookDepth}
            />
          );
        })}
        <OrbitControls />
      </Canvas>
    );
  };

  return (
    <div className="bookshelf-container">
      <h1>Your 3D Bookshelf is Coming Soon!</h1>
      <p>
        The 3D bookshelf feature is under construction, but as a sneak peek, here's the developer's 2024 reading list!
      </p>

      {/* Button to toggle the 3D bookshelf preview */}
      <button className="preview-button" onClick={() => setShowPreview(!showPreview)}>
        {showPreview ? 'Hide Preview' : 'Preview 3D Bookshelf'}
      </button>

      {/* Conditionally render the 3D bookshelf preview */}
      {showPreview && (
        <div className="bookshelf-preview">
          {renderBookshelfPreview(defaultBooks)}
        </div>
      )}
    </div>
  );
}

export default Bookshelf;
