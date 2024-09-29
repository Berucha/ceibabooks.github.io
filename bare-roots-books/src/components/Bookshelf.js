/* src/components/Bookshelf.js */
import React, { useState } from 'react';
import '../css/components/Bookshelf.css';

const Bookshelf = () => {
  const [decor, setDecor] = useState(['🌿', '🌱']);

  const books = [
    { title: 'Book 1', author: 'Author 1', progress: 70 }, // Added progress property
    { title: 'Book 2', author: 'Author 2', progress: 50 }, // Added progress property
    { title: 'Book 3', author: 'Author 3', progress: 30 }, // Added progress property
  ];

  const handleDecorChange = () => {
    const newDecor = prompt('Enter new decor items separated by commas (e.g., 🌿,🌱,📚):');
    if (newDecor) {
      setDecor(newDecor.split(','));
    }
  };

  return (
    <div className="bookshelf">
      {/* <button className="decor-settings-button" onClick={handleDecorChange}>
        Customize Decor
      </button> */}
      <div className="shelf">
        <div className="decor plant">{decor[0]}</div>
        <div className="books">
          {books.map((book, index) => (
            <div key={index} className="book">
              <div className="progress-bar">
                <div className="progress" style={{ width: `${book.progress}%` }}></div>
              </div>
              <div className="book-cover">
                <div className="book-title">{book.title}</div>
                <div className="book-author">{book.author}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="decor plant">{decor[1]}</div>
      </div>
      <div className="floor-decor">{decor[2]}</div>
    </div>
  );
};

export default Bookshelf;