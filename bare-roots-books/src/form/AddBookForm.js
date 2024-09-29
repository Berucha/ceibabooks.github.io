import React, { useState } from 'react';
import '../css/pages/Bookshelf.css';
import confetti from 'canvas-confetti';


function AddBookForm({ onAddBook }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [coverFile, setCoverFile] = useState(null);
  const [error, setError] = useState(''); // State for managing errors
  const [color, setColor] = useState('#6B4F4F'); // Default book color

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title && !author) {
      setError('Please provide a title and an author.');
      return;
    }

    const newBook = {
      title,
      author,
      cover: coverFile ? URL.createObjectURL(coverFile) : null, // Create URL for the uploaded file
      color, // Use the selected color if no image is uploaded
    };
    onAddBook(newBook);

    // Confetti effect on successful book add
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }, // Adjust the height from which confetti is thrown here
    });

    // Reset form after submission
    setTitle('');
    setAuthor('');
    setCoverFile(null);
    setColor('#6B4F4F');
    setError(''); // Clear any existing errors
  };

  return (
    <form onSubmit={handleSubmit} className="add-book-form">
      <div className="form-group">
        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        {/* File input for book cover image */}
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setCoverFile(e.target.files[0])}
        />
      </div>

      <div className="form-group">
        {/* Color picker input for book color */}
        <label htmlFor="bookColor">Or select a book color:</label>
        <input
          type="color"
          id="bookColor"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>

      {/* Display error message if cover is not uploaded */}
      {error && <p className="error-message">{error}</p>}

      <button type="submit" className="submit-btn">Add Book</button>
    </form>
  );
}

export default AddBookForm;
