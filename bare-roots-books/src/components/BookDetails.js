import React from 'react'; // Imports React
import { Card, Button } from 'react-bootstrap'; // Imports Bootstrap components for layout and styling

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
    <Card>
      <Card.Img variant="top" src={selectedBook.cover} /> {/* Displays the selected book's cover */}
      <Card.Body>
        <Card.Title>{selectedBook.title}</Card.Title> {/* Displays the book title */}
        <Card.Text>by {selectedBook.author}</Card.Text> {/* Displays the author's name */}
        <Button variant="primary">Add to Favorites</Button> {/* A placeholder button for future functionality */}
      </Card.Body>
    </Card>
  );
}

export default BookDetails; // Exports the BookDetails component
