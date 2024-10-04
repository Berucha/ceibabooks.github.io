/* src/components/Bookshelf.js */
import React, { useState } from 'react';
import '../css/components/Bookshelf.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome
import CurrentRead from './CurrentRead';
import BookshelfOptions from './BookshelfOptions';

const Bookshelf = ({ decor, plantList }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const books = [
    { title: 'Book 1', author: 'Author 1', progress: 70 },
    { title: 'Book 2', author: 'Author 2', progress: 50 },
    { title: 'Book 3', author: 'Author 3', progress: 30 },
  ];

  const handlePlusClick = (book) => {
    setSelectedBook(book);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedBook(null);
  };

  return (
    <div className="bookshelf">
      <div className="shelf">
        <div className="decor plant">
          {decor.map((plant, index) => (
            <img key={index} src={plant.image} alt={plant.name} className="plant-decor" />
          ))}
        </div>
        <div className="books">
          {books.map((book, index) => (
            <CurrentRead key={index} book={book} onPlusClick={handlePlusClick} />
          ))}
        </div>
        <div className="decor plant">
          {decor.map((plant, index) => (
            <img key={index} src={plant.image} alt={plant.name} className="plant-decor" />
          ))}
        </div>
      </div>
      <BookshelfOptions
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        selectedBook={selectedBook}
      />
    </div>
  );
}

export default Bookshelf;