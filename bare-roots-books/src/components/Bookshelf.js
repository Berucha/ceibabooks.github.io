/* src/components/Bookshelf.js */
import React from 'react';
import '../css/components/Bookshelf.css';

const Bookshelf = () => {
  const books = [
    { title: 'Book 1', author: 'Author 1' },
    { title: 'Book 2', author: 'Author 2' },
    { title: 'Book 3', author: 'Author 3' },
  ];

  return (
    <div className="bookshelf">
      <div className="shelf">
        {books.map((book, index) => (
          <div key={index} className="book">
            <div className="book-cover">
              <div className="book-title">{book.title}</div>
              <div className="book-author">{book.author}</div>
            </div>
          </div>
        ))}
        <div className="decor plant">🌿</div>
        <div className="decor plant">🌱</div>
      </div>
    </div>
  );
};

export default Bookshelf;