import React from 'react'; // Imports React
import { Card, Button } from 'react-bootstrap'; // Imports Bootstrap components for layout and styling
import '../css/components/BookDetails.css';

function BookDetails({ selectedBook }) {
  // Checks if there is a selected book and displays a message if none is selected
  if (!selectedBook) {
    return (
      <div>
        <h3>Select a book to view details</h3>
      </div>
    );
  }

  return (
    // Renders a card with detailed information about the selected book
    <Card className="book-details-card">
      <Card.Img variant="top" src={selectedBook.cover} className="book-details-image"/> {/* Displays the selected book's cover */}
      <Card.Body>
        <Card.Title className="book-details-title">{selectedBook.title}</Card.Title> {/* Displays the book title */}
        <Card.Text className="book-details-author">by {selectedBook.author}</Card.Text> {/* Displays the author's name */}
        <Button variant="primary" className="book-details-button">Add to Favorites</Button> {/* A placeholder button for future functionality */}
      </Card.Body>
    </Card>
  );
}

export default BookDetails; // Exports the BookDetails component
